/* Cabezones 2026 — motor del partido: física a 120 Hz, jugadores, súper tiros, poderes e IA */
(function () {
  'use strict';
  const CZ = (window.CZ = window.CZ || {});

  const K = (CZ.K = {
    W: 1280, H: 720,
    SUELO: 640,          // línea donde pisan los jugadores
    ARCO: 100,           // profundidad del arco (línea de gol en x=100 y x=1180)
    TRAV: 408,           // altura del travesaño
    POSTE: 7,            // grosor del travesaño
    TECHO: 24,
    PELOTA_R: 19,
    CABEZA_R: 40,
    CABEZA_Y: 92,        // de los pies al centro de la cabeza
    CUERPO_R: 22,
    CUERPO_Y: 30,
    CADERA_Y: 26,
    PIERNA: 25,
    BOTIN_R: 12,
    G_PELOTA: 1250,
    G_JUG: 2050,
    DT: 1 / 120
  });

  const DIFICULTADES = (CZ.DIFICULTADES = {
    facil: { nombre: 'Fácil', reac: 0.4, vel: 0.6, err: 70, salto: 0.3, patada: 0.35, super: 0.25, defensa: 0.2, sep: 35, avance: 700 },
    normal: { nombre: 'Normal', reac: 0.2, vel: 0.8, err: 25, salto: 0.65, patada: 0.75, super: 0.7, defensa: 0.6, sep: 45, avance: 540 },
    dificil: { nombre: 'Difícil', reac: 0.12, vel: 0.88, err: 12, salto: 0.85, patada: 0.9, super: 1, defensa: 0.85, sep: 48, avance: 340 },
    leyenda: { nombre: 'Leyenda', reac: 0.07, vel: 0.93, err: 5, salto: 1, patada: 1, super: 1, defensa: 1, sep: 50, avance: 340 }
  });

  const PODERES = (CZ.PODERES = {
    cabezon: { nombre: 'Cabezón', icono: 'XL', color: '#FFB703', dur: 8 },
    mini: { nombre: 'Rival mini', icono: 'XS', color: '#E63946', dur: 8 },
    veloz: { nombre: 'Turbo', icono: '»', color: '#2B9348', dur: 8 },
    hielo: { nombre: 'Congelar', icono: '❄', color: '#7FD8FF', dur: 0 },
    carga: { nombre: 'Súper lleno', icono: '★', color: '#FF7A00', dur: 0 }
  });

  const SUPERS = (CZ.SUPERS = {
    fuego: { nombre: 'Tiro de fuego', vel: 1500, dur: 1.3 },
    hielo: { nombre: 'Tiro de hielo', vel: 1250, dur: 1.4 },
    rayo: { nombre: 'Tiro rayo', vel: 1250, dur: 1.4 },
    tornado: { nombre: 'Tiro tornado', vel: 1050, dur: 1.6 }
  });

  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const rnd = (a, b) => a + Math.random() * (b - a);
  const sonar = (p, n, a) => { if (!p.demo && CZ.audio) CZ.audio.play(n, a); };

  /* ---------- Piezas ---------- */
  function crearJugador(equipo, lado, control, dificultad) {
    return {
      equipo, lado, control,
      dir: lado === 0 ? 1 : -1,
      x: 0, y: K.SUELO, vx: 0, vy: 0, enSuelo: true,
      patada: 0, golpeo: false, pata: 0.15,
      carga: 0, armado: 0,
      congelado: 0, aturdido: 0, giro: 0,
      poder: { cabezon: 0, mini: 0, veloz: 0 },
      escala: 1, paso: 0, festejo: 0, enojo: 0,
      saltoPrevio: false, superPrevio: false,
      ia: control === 'cpu' ? { cfg: DIFICULTADES[dificultad] || DIFICULTADES.normal, t: 0, objetivo: 0, quiere: 0 } : null
    };
  }

  function velocidadJug(p) {
    const s = p.equipo.stats;
    let v = 300 + s.velocidad * 150;
    if (p.poder.veloz > 0) v *= 1.45;
    if (p.ia) v *= p.ia.cfg.vel;
    return v;
  }
  function saltoJug(p) {
    const s = p.equipo.stats;
    let v = 700 + s.salto * 170;
    if (p.poder.veloz > 0) v *= 1.12;
    return v;
  }
  const radioCabeza = (p) => K.CABEZA_R * p.escala;
  const cabezaY = (p) => p.y - K.CABEZA_Y - (p.escala - 1) * K.CABEZA_R;

  // Ángulo de la pierna de patada según el tiempo del swing
  function anguloPata(t) {
    if (t <= 0) return 0.15;
    if (t < 0.12) { const k = t / 0.12; return -0.55 + (1 - (1 - k) * (1 - k)) * 2.45; }
    if (t < 0.16) return 1.9;
    if (t < 0.28) { const k = (t - 0.16) / 0.12; return 1.9 - k * 1.75; }
    return 0.15;
  }
  function botin(p) {
    const hx = p.x + p.dir * 4;
    const hy = p.y - K.CADERA_Y;
    return { x: hx + p.dir * Math.sin(p.pata) * K.PIERNA, y: hy + Math.cos(p.pata) * K.PIERNA };
  }

  /* ---------- Colisiones ---------- */
  function chocarCirculo(b, cx, cy, r, cvx, cvy, e) {
    const dx = b.x - cx;
    const dy = b.y - cy;
    const min = r + K.PELOTA_R;
    const d2 = dx * dx + dy * dy;
    if (d2 >= min * min) return null;
    const d = Math.sqrt(d2) || 0.001;
    const nx = dx / d;
    const ny = dy / d;
    b.x = cx + nx * min;
    b.y = cy + ny * min;
    const vn = (b.vx - cvx) * nx + (b.vy - cvy) * ny;
    if (vn < 0) {
      b.vx -= (1 + e) * vn * nx;
      b.vy -= (1 + e) * vn * ny;
    }
    return { nx, ny, fuerza: Math.max(0, -vn) };
  }

  function chocarTravesano(b, x1, x2, y) {
    const cx = clamp(b.x, x1, x2);
    const dx = b.x - cx;
    const dy = b.y - y;
    const min = K.PELOTA_R + K.POSTE;
    const d2 = dx * dx + dy * dy;
    if (d2 >= min * min) return null;
    const d = Math.sqrt(d2) || 0.001;
    const nx = dx / d;
    const ny = dy / d;
    b.x = cx + nx * min;
    b.y = y + ny * min;
    const vn = b.vx * nx + b.vy * ny;
    if (vn < 0) {
      b.vx -= 1.65 * vn * nx;
      b.vy -= 1.65 * vn * ny;
    }
    return { fuerza: Math.max(0, -vn) };
  }

  /* ---------- Partido ---------- */
  class Partido {
    constructor(o) {
      this.equipos = [o.local, o.visita];
      this.demo = !!o.demo;
      // Reglas opcionales (por defecto como Football Heads: sin súper ni poderes, con clima e hinchas)
      this.conSuper = !!o.supers;
      this.conPoderes = !!o.poderes;
      this.conClima = o.clima !== false;
      this.conHinchas = o.hinchas !== false;
      this.clima = { tipo: null, t: 0, dur: 0, viento: 0 };
      this.proxClima = rnd(9, 16);
      this.botellas = [];
      this.botellasPend = null;
      this.duracion = o.duracion || 60;
      this.oroPermitido = !!o.oro;
      this.reloj = this.duracion;
      this.goles = [0, 0];
      this.historial = [];
      const ctrl = o.control || ['humano', 'cpu'];
      const dif = o.dificultad || 'normal';
      this.jugadores = [
        crearJugador(o.local, 0, ctrl[0], dif),
        crearJugador(o.visita, 1, ctrl[1], dif)
      ];
      this.pelota = { x: K.W / 2, y: 300, vx: 0, vy: 0, rot: 0, super: null, ultimo: null, estela: [] };
      this.items = [];
      this.proxItem = rnd(7, 11);
      this.particulas = [];
      this.textos = [];
      this.sacudida = 0;
      this.flash = 0;
      this.tiempo = 0;
      this.estado = 'previa';
      this.estadoT = 0;
      this.oro = false;
      this.cuentaPrev = 4;
      this.onFin = o.onFin || null;
      this.onGol = o.onGol || null;
      this.acum = 0;
      this.ultimoPip = -1;
      this.saque(-1);
      this.estado = 'previa';
      this.estadoT = this.demo ? 2.5 : 0;
    }

    saque(quienRecibio) {
      const [a, b] = this.jugadores;
      a.x = 330; b.x = K.W - 330;
      for (const p of this.jugadores) {
        p.y = K.SUELO; p.vx = 0; p.vy = 0; p.enSuelo = true;
        p.patada = 0; p.pata = 0.15; p.golpeo = false;
        p.congelado = 0; p.aturdido = 0; p.festejo = 0; p.enojo = 0; p.armado = 0;
      }
      const pb = this.pelota;
      pb.x = K.W / 2; pb.y = 260; pb.vy = 0; pb.super = null; pb.estela.length = 0;
      pb.vx = quienRecibio === 0 ? -60 : quienRecibio === 1 ? 60 : rnd(-30, 30);
      pb.ultimo = null;
    }

    texto(txt, o) {
      this.textos.push(Object.assign({ txt, t: 0, vida: 1.6, tam: 110, color: '#FFB703', y: 250 }, o || {}));
    }

    particula(x, y, n, o) {
      for (let i = 0; i < n; i++) {
        const a = rnd(0, Math.PI * 2);
        const v = rnd(o.vmin || 40, o.vmax || 260);
        this.particulas.push({
          x, y, vx: Math.cos(a) * v + (o.vx || 0), vy: Math.sin(a) * v + (o.vy || 0),
          vida: rnd(o.vida * 0.6, o.vida), max: o.vida, color: Array.isArray(o.color) ? o.color[i % o.color.length] : o.color,
          tam: rnd(o.tam * 0.6, o.tam), g: o.g || 0, tipo: o.tipo || 'punto'
        });
      }
      if (this.particulas.length > 600) this.particulas.splice(0, this.particulas.length - 600);
    }

    /* Avanza el tiempo real dt (segundos) con pasos fijos */
    actualizar(dt, entradas) {
      dt = Math.min(dt, 0.1);
      this.acum += dt;
      while (this.acum >= K.DT) {
        this.paso(K.DT, entradas);
        this.acum -= K.DT;
      }
    }

    paso(dt, entradas) {
      this.tiempo += dt;
      this.estadoT += dt;
      if (this.sacudida > 0) this.sacudida = Math.max(0, this.sacudida - dt * 30);
      if (this.flash > 0) this.flash = Math.max(0, this.flash - dt * 2.5);

      const est = this.estado;
      if (est === 'previa') {
        const c = Math.ceil(3 - this.estadoT);
        if (!this.demo && c !== this.cuentaPrev && c >= 1 && c <= 3) {
          this.cuentaPrev = c;
          this.texto(String(c), { vida: 0.9, tam: 150, color: '#F3F6EF' });
          sonar(this, 'cuenta', false);
        }
        if (this.estadoT >= 3) {
          this.estado = 'juego';
          this.estadoT = 0;
          if (!this.demo) {
            this.texto('¡A JUGAR!', { vida: 1, tam: 120 });
            sonar(this, 'inicio');
          }
        }
        this.fisicaJugadores(dt, [{}, {}], true);
        this.actualizarEfectos(dt);
        return;
      }

      if (est === 'final') {
        this.fisicaJugadores(dt, [{}, {}], true);
        this.fisicaPelota(dt);
        this.actualizarEfectos(dt);
        return;
      }

      const ent = [0, 1].map((i) => {
        const p = this.jugadores[i];
        if (p.ia) return this.pensarIA(p, this.jugadores[1 - i], dt);
        return (entradas && entradas[i]) || {};
      });

      if (est === 'gol') {
        this.fisicaJugadores(dt, [{}, {}], true);
        this.fisicaPelota(dt);
        this.actualizarEfectos(dt);
        if (this.estadoT > 2.6) {
          if (this.oro) return this.terminar();
          this.estado = 'juego';
          this.estadoT = 0;
          this.saque(this.historial[this.historial.length - 1].lado === 0 ? 1 : 0);
          sonar(this, 'silbato');
        }
        return;
      }

      // juego / oro
      if (!this.oro) {
        this.reloj -= dt;
        const s = Math.ceil(this.reloj);
        if (s <= 10 && s > 0 && s !== this.ultimoPip) {
          this.ultimoPip = s;
          sonar(this, 'pip');
        }
        if (this.reloj <= 0) {
          this.reloj = 0;
          if (this.goles[0] === this.goles[1] && this.oroPermitido) {
            this.oro = true;
            this.texto('GOL DE ORO', { vida: 2.2, tam: 100, color: '#FFB703' });
            sonar(this, 'silbato');
            this.saque(-1);
          } else {
            return this.terminar();
          }
        }
      }

      this.fisicaJugadores(dt, ent, false);
      this.fisicaPelota(dt);
      if (this.conPoderes) this.actualizarItems(dt);
      if (this.conClima) this.actualizarClima(dt);
      this.actualizarBotellas(dt);
      this.actualizarEfectos(dt);
      this.revisarGol();

      if (!this.demo && CZ.audio) {
        const cerca = 1 - Math.min(1, Math.min(Math.abs(this.pelota.x - K.ARCO), Math.abs(this.pelota.x - (K.W - K.ARCO))) / 500);
        CZ.audio.hinchada(0.07 + cerca * 0.16);
      }
    }

    terminar() {
      this.estado = 'final';
      this.estadoT = 0;
      this.pelota.super = null;
      if (!this.demo) {
        this.texto('FINAL', { vida: 3, tam: 130, color: '#F3F6EF' });
        sonar(this, 'final');
        if (CZ.audio) CZ.audio.hinchada(0.04);
      }
      const g = this.goles;
      if (g[0] !== g[1]) {
        const gan = g[0] > g[1] ? 0 : 1;
        this.jugadores[gan].festejo = 99;
        this.jugadores[1 - gan].enojo = 99;
      }
      if (this.onFin) {
        const cb = this.onFin;
        this.onFin = null;
        setTimeout(() => cb(this.resultado()), this.demo ? 0 : 2200);
      }
    }

    resultado() {
      const g = this.goles;
      return {
        local: this.equipos[0].id,
        visita: this.equipos[1].id,
        goles: g.slice(),
        oro: this.oro,
        ganador: g[0] > g[1] ? 0 : g[1] > g[0] ? 1 : -1,
        historial: this.historial.slice()
      };
    }

    /* ---------- Jugadores ---------- */
    fisicaJugadores(dt, ent, quietos) {
      const b = this.pelota;
      for (let i = 0; i < 2; i++) {
        const p = this.jugadores[i];
        const e = quietos ? {} : ent[i] || {};
        for (const k in p.poder) if (p.poder[k] > 0) p.poder[k] = Math.max(0, p.poder[k] - dt);
        const objetivo = p.poder.cabezon > 0 ? 1.45 : p.poder.mini > 0 ? 0.62 : 1;
        p.escala += (objetivo - p.escala) * Math.min(1, dt * 8);
        if (p.congelado > 0) p.congelado = Math.max(0, p.congelado - dt);
        if (p.aturdido > 0) p.aturdido = Math.max(0, p.aturdido - dt);
        if (p.armado > 0) p.armado = Math.max(0, p.armado - dt);
        if (p.giro > 0) p.giro = Math.max(0, p.giro - dt);
        if (this.conSuper && !quietos && this.estado !== 'gol') p.carga = Math.min(1, p.carga + dt * 0.03);

        const bloqueado = p.congelado > 0 || p.aturdido > 0;
        let mov = 0;
        if (!bloqueado) {
          if (e.izq) mov -= 1;
          if (e.der) mov += 1;
        }
        const clima = this.clima.tipo;
        const vmax = velocidadJug(p) * (clima === 'nieve' ? 0.8 : 1);
        const acel = p.enSuelo ? (clima === 'lluvia' ? 5 : clima === 'nieve' ? 9 : 16) : 7;
        if (p.congelado > 0) p.vx *= Math.max(0, 1 - dt * 12);
        else p.vx += (mov * vmax - p.vx) * Math.min(1, dt * acel);
        if (mov !== 0 && p.enSuelo) p.paso += dt * Math.abs(p.vx) * 0.045;
        else p.paso *= 0.9;

        if (!bloqueado && e.saltar && p.enSuelo) {
          p.vy = -saltoJug(p);
          p.enSuelo = false;
          sonar(this, 'salto');
        }
        if (!bloqueado && e.patear && p.patada === 0) {
          p.patada = 0.0001;
          p.golpeo = false;
        }
        if (!bloqueado && e.super && !p.superPrevio) this.intentarSuper(p);
        p.superPrevio = !!e.super;

        if (p.patada > 0) {
          p.patada += dt;
          if (p.patada >= 0.28) p.patada = 0;
        }
        p.pata = anguloPata(p.patada);

        // Festejo: saltitos
        if ((this.estado === 'gol' || this.estado === 'final') && p.festejo > 0 && p.enSuelo) {
          p.vy = -520;
          p.enSuelo = false;
        }

        p.vy += K.G_JUG * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (p.y >= K.SUELO) {
          if (!p.enSuelo && p.vy > 500) this.particula(p.x, K.SUELO, 5, { color: '#9CC89A', vida: 0.35, tam: 4, vmin: 20, vmax: 120, vy: -60, g: 600 });
          p.y = K.SUELO;
          p.vy = 0;
          p.enSuelo = true;
        } else {
          p.enSuelo = false;
        }

        // Arcos: pararse sobre el travesaño y chocar la cabeza por debajo
        this.jugadorVsArco(p);

        const r = radioCabeza(p) * 0.8;
        if (p.x < r) { p.x = r; p.vx = Math.max(0, p.vx); }
        if (p.x > K.W - r) { p.x = K.W - r; p.vx = Math.min(0, p.vx); }
      }

      this.jugadorVsJugador(dt);

      // Botines y pelota
      if (this.estado === 'juego' || this.estado === 'gol' || this.estado === 'final') {
        for (const p of this.jugadores) this.patadaVsPelota(p, b);
      }
    }

    jugadorVsArco(p) {
      const tope = K.TRAV - K.POSTE;
      const enIzq = p.x < K.ARCO + 14;
      const enDer = p.x > K.W - K.ARCO - 14;
      if (!enIzq && !enDer) return;
      // aterrizar arriba
      if (p.vy >= 0 && p.y >= tope && p.y - p.vy * K.DT <= tope + 2) {
        p.y = tope;
        p.vy = 0;
        p.enSuelo = true;
        return;
      }
      // cabeza contra el travesaño desde abajo
      const top = cabezaY(p) - radioCabeza(p);
      if (p.y > K.TRAV + 20 && top < K.TRAV + K.POSTE) {
        p.y += K.TRAV + K.POSTE - top;
        if (p.vy < 0) p.vy = 0;
      }
    }

    jugadorVsJugador() {
      const [a, b] = this.jugadores;
      const dx = b.x - a.x;
      const ady = Math.abs(a.y - b.y);
      const ancho = 34 * (a.escala + b.escala) / 2 + 26;
      // caer sobre la cabeza del otro
      for (const [arriba, abajo] of [[a, b], [b, a]]) {
        const tope = cabezaY(abajo) - radioCabeza(abajo) * 0.85;
        if (arriba.vy > 0 && Math.abs(arriba.x - abajo.x) < 44 && arriba.y > tope && arriba.y < tope + 30) {
          arriba.y = tope;
          arriba.vy = -430;
          arriba.enSuelo = false;
          abajo.vy = Math.max(abajo.vy, 0);
          return;
        }
      }
      if (Math.abs(dx) < ancho && ady < 100) {
        const solape = ancho - Math.abs(dx);
        const s = dx >= 0 ? 1 : -1;
        const ka = a.congelado > 0 ? 0 : b.congelado > 0 ? 1 : 0.5;
        a.x -= s * solape * ka;
        b.x += s * solape * (1 - ka);
      }
    }

    patadaVsPelota(p, b) {
      if (b.super && b.super.dueno === p && b.super.t < 0.25) return;
      const bt = botin(p);
      const pateando = p.patada > 0 && p.patada < 0.16;
      if (pateando && !p.golpeo) {
        const dx = b.x - bt.x;
        const dy = b.y - bt.y;
        const alc = K.PELOTA_R + K.BOTIN_R + 16;
        const adelante = (b.x - p.x) * p.dir > -10;
        if (dx * dx + dy * dy < alc * alc && adelante) {
          p.golpeo = true;
          if (p.armado > 0) {
            this.lanzarSuper(p);
            return;
          }
          const s = p.equipo.stats;
          const alto = b.y < p.y - 50;
          const ang = (alto ? 0.3 : 0.52) + rnd(-0.07, 0.09) + (p.enSuelo ? 0 : -0.1);
          const v = 730 + s.potencia * 330 + Math.abs(p.vx) * 0.2;
          b.vx = Math.cos(ang) * v * p.dir;
          b.vy = -Math.sin(ang) * v;
          this.tocar(p, b, 0.06);
          if (b.super) this.bloquearSuper(p);
          sonar(this, 'patada', v / 1200);
          this.particula(b.x, b.y, 6, { color: '#FFFFFF', vida: 0.25, tam: 3, vmin: 60, vmax: 200 });
          return;
        }
      }
      // botín quieto: empuja la pelota (gambeta)
      const c = chocarCirculo(b, bt.x, bt.y, K.BOTIN_R, p.vx, p.vy, 0.35);
      if (c && c.fuerza > 30) this.tocar(p, b, 0.01);
    }

    tocar(p, b, carga) {
      b.ultimo = p;
      if (this.conSuper) p.carga = Math.min(1, p.carga + carga);
    }

    intentarSuper(p) {
      if (!this.conSuper || p.carga < 1 || this.estado !== 'juego') return;
      const b = this.pelota;
      const dx = b.x - p.x;
      const dy = b.y - (p.y - 50);
      if (dx * dx + dy * dy < 140 * 140 && dx * p.dir > -20) {
        p.patada = 0.0001;
        this.lanzarSuper(p);
      } else {
        p.armado = 1.2;
        p.patada = 0.0001;
        p.golpeo = false;
      }
    }

    lanzarSuper(p) {
      const b = this.pelota;
      const tipo = p.equipo.super;
      const cfg = SUPERS[tipo];
      p.carga = 0;
      p.armado = 0;
      p.golpeo = true;
      const tx = p.dir > 0 ? K.W - K.ARCO * 0.4 : K.ARCO * 0.4;
      const ty = (K.TRAV + K.SUELO) / 2 + 10;
      b.x = p.x + p.dir * 48;
      b.y = Math.min(b.y, K.SUELO - K.PELOTA_R - 4);
      let dx = tx - b.x;
      let dy = ty - b.y;
      if (tipo === 'tornado') dy -= 260;
      const d = Math.hypot(dx, dy) || 1;
      b.vx = (dx / d) * cfg.vel;
      b.vy = (dy / d) * cfg.vel;
      b.super = { tipo, dueno: p, t: 0, vx: b.vx, vy: b.vy, dur: cfg.dur };
      b.ultimo = p;
      this.sacudida = 8;
      this.flash = 0.5;
      if (!this.demo) this.texto(cfg.nombre.toUpperCase(), { vida: 1.1, tam: 58, y: 170, color: colorSuper(tipo) });
      sonar(this, 'super');
      this.particula(b.x, b.y, 24, { color: paletaSuper(tipo), vida: 0.6, tam: 7, vmin: 80, vmax: 380 });
    }

    bloquearSuper() {
      const b = this.pelota;
      if (!b.super) return;
      this.particula(b.x, b.y, 18, { color: paletaSuper(b.super.tipo), vida: 0.5, tam: 6 });
      b.super = null;
    }

    /* ---------- Pelota ---------- */
    fisicaPelota(dt) {
      const b = this.pelota;
      const s = b.super;
      if (s) {
        s.t += dt;
        if (s.tipo === 'fuego' || s.tipo === 'hielo') {
          b.vx = s.vx; b.vy = s.vy;
        } else if (s.tipo === 'rayo') {
          b.vx = s.vx;
          b.vy = s.vy + Math.sign(Math.sin(s.t * 26)) * 520;
        } else if (s.tipo === 'tornado') {
          s.vy += 820 * dt;
          b.vx = s.vx + Math.sin(s.t * 18) * 160;
          b.vy = s.vy;
        }
        if (s.t > s.dur) b.super = null;
        if (Math.random() < 0.9) this.estelaSuper(b, s.tipo);
      } else {
        b.vy += K.G_PELOTA * dt;
        b.vx *= 1 - 0.08 * dt;
        if (this.clima.tipo === 'viento') b.vx += this.clima.viento * dt;
      }
      b.x += b.vx * dt;
      b.y += b.vy * dt;
      b.rot += (b.vx * dt) / K.PELOTA_R;

      b.estela.push(b.x, b.y);
      if (b.estela.length > 24) b.estela.splice(0, 2);

      const R = K.PELOTA_R;
      // Suelo
      if (b.y > K.SUELO - R) {
        b.y = K.SUELO - R;
        if (b.vy > 0) {
          if (b.vy > 220) sonar(this, 'rebote', b.vy / 1200);
          b.vy = -b.vy * (this.clima.tipo === 'lluvia' || this.clima.tipo === 'nieve' ? 0.52 : 0.68);
          if (Math.abs(b.vy) < 70) b.vy = 0;
        }
        b.vx *= 1 - (this.clima.tipo === 'lluvia' ? 0.5 : this.clima.tipo === 'nieve' ? 3 : 1.6) * dt;
        if (b.super && b.super.tipo !== 'tornado') b.super = null;
        if (b.super && b.super.t > 0.3) b.super = null;
      }
      // Techo
      if (b.y < K.TECHO + R) {
        b.y = K.TECHO + R;
        if (b.vy < 0) b.vy = -b.vy * 0.7;
      }
      // Paredes (fondo de las redes)
      if (b.x < R) { b.x = R; if (b.vx < 0) b.vx = -b.vx * 0.45; b.super = null; }
      if (b.x > K.W - R) { b.x = K.W - R; if (b.vx > 0) b.vx = -b.vx * 0.45; b.super = null; }

      // Travesaños
      for (const [x1, x2] of [[0, K.ARCO], [K.W - K.ARCO, K.W]]) {
        const c = chocarTravesano(b, x1, x2, K.TRAV);
        if (c) {
          if (c.fuerza > 250) {
            sonar(this, 'palo');
            if (!this.demo && c.fuerza > 500 && this.estado === 'juego') this.texto('¡TRAVESAÑO!', { vida: 0.9, tam: 56, y: 200, color: '#F3F6EF' });
          }
          b.super = null;
        }
      }

      // Jugadores
      for (const p of this.jugadores) this.pelotaVsJugador(p, b);

      // Tope de velocidad (los súper tiros tienen la suya)
      if (!b.super) {
        if (b.vy < -1000) b.vy = -1000;
        const v = Math.hypot(b.vx, b.vy);
        if (v > 1400) { b.vx *= 1400 / v; b.vy *= 1400 / v; }
      }
    }

    pelotaVsJugador(p, b) {
      const s = b.super;
      if (s && s.dueno === p && s.t < 0.35) return;
      const rival = s && s.dueno !== p;
      const hy = cabezaY(p);
      const hr = radioCabeza(p);
      const cy = p.y - K.CUERPO_Y;

      if (rival) {
        const tocaCabeza = Math.hypot(b.x - p.x, b.y - hy) < hr + K.PELOTA_R;
        const tocaCuerpo = Math.hypot(b.x - p.x, b.y - cy) < K.CUERPO_R + 8 + K.PELOTA_R;
        if (!tocaCabeza && !tocaCuerpo) return;
        const dirTiro = s.dueno.dir;
        // Patear o cabecear justo a tiempo lo frena
        if (p.patada > 0 && p.patada < 0.2 && s.tipo !== 'tornado') {
          this.bloquearSuper(p);
        } else if (s.tipo === 'fuego') {
          if (p.aturdido <= 0) {
            p.vx = dirTiro * 900;
            p.vy = -260;
            p.enSuelo = false;
            p.aturdido = 1;
            p.enojo = 1;
            this.particula(p.x, hy, 16, { color: ['#FF7A00', '#FFD23F', '#E63946'], vida: 0.5, tam: 7 });
            sonar(this, 'cabeza');
          }
          return;
        } else if (s.tipo === 'tornado') {
          if (p.aturdido <= 0) { p.aturdido = 0.9; p.giro = 0.9; }
          return;
        } else if (s.tipo === 'hielo') {
          p.congelado = 2.4;
          p.vx = 0;
          sonar(this, 'congelar');
          this.particula(p.x, hy, 18, { color: ['#BFF0FF', '#7FD8FF', '#FFFFFF'], vida: 0.6, tam: 6 });
          b.super = null;
        } else if (s.tipo === 'rayo') {
          p.aturdido = 1.3;
          this.particula(p.x, hy, 14, { color: ['#FFF46B', '#FFFFFF'], vida: 0.4, tam: 5, tipo: 'chispa' });
          b.super = null;
        }
      }

      // En el cabezazo cuenta solo parte del impulso del salto
      const c1 = chocarCirculo(b, p.x, hy, hr, p.vx, p.vy * 0.45, 0.6);
      if (c1) {
        if (c1.ny < -0.3 && c1.fuerza > 0) {
          b.vy -= 90;
          b.vx += p.dir * 90;
        }
        if (c1.fuerza > 160) sonar(this, 'cabeza');
        if (c1.fuerza > 40) this.tocar(p, b, 0.03);
        if (b.super && b.super.dueno !== p) b.super = null;
      }
      // Cuerpo: si la pelota está debajo, el jugador se para encima
      const dx = b.x - p.x;
      const dy = b.y - cy;
      const min = K.CUERPO_R + K.PELOTA_R;
      if (dx * dx + dy * dy < min * min) {
        const d = Math.sqrt(dx * dx + dy * dy) || 0.001;
        const ny = dy / d;
        if (ny > 0.55 && b.y >= K.SUELO - K.PELOTA_R - 2) {
          p.y -= (min - d) * ny;
          if (p.vy > 0) p.vy = 0;
          p.enSuelo = true;
          b.vx += (dx >= 0 ? 1 : -1) * 18;
        } else {
          const c2 = chocarCirculo(b, p.x, cy, K.CUERPO_R, p.vx, p.vy, 0.45);
          if (c2 && c2.fuerza > 40) this.tocar(p, b, 0.01);
        }
      }
    }

    estelaSuper(b, tipo) {
      const col = paletaSuper(tipo);
      this.particulas.push({
        x: b.x + rnd(-6, 6), y: b.y + rnd(-6, 6), vx: -b.vx * 0.08 + rnd(-40, 40), vy: -b.vy * 0.08 + rnd(-40, 40),
        vida: 0.45, max: 0.45, color: col[Math.floor(Math.random() * col.length)], tam: rnd(6, 13), g: tipo === 'fuego' ? -300 : 0,
        tipo: tipo === 'rayo' ? 'chispa' : 'punto'
      });
    }

    revisarGol() {
      const b = this.pelota;
      if (b.y <= K.TRAV + K.POSTE) return;
      let lado = -1;
      if (b.x < K.ARCO - K.PELOTA_R + 4) lado = 1;
      else if (b.x > K.W - K.ARCO + K.PELOTA_R - 4) lado = 0;
      if (lado < 0) return;
      this.goles[lado]++;
      const autor = this.jugadores[lado];
      this.historial.push({ lado, minuto: Math.max(0, Math.round(this.duracion - this.reloj)), super: !!b.super, oro: this.oro });
      autor.festejo = 1;
      this.jugadores[1 - lado].enojo = 1;
      this.estado = 'gol';
      this.estadoT = 0;
      this.sacudida = 14;
      this.flash = 1;
      b.super = null;
      if (!this.demo) {
        this.texto(this.oro ? '¡GOL DE ORO!' : '¡GOOOL!', { vida: 2.4, tam: 140, color: '#FFB703' });
        sonar(this, 'gol');
        if (CZ.audio) CZ.audio.hinchada(0.45);
      }
      const col = [autor.equipo.kit.c1, autor.equipo.kit.c2, '#FFB703', '#F3F6EF'];
      this.particula(b.x, b.y, 70, { color: col, vida: 1.6, tam: 7, vmin: 150, vmax: 620, vy: -250, g: 700, tipo: 'papel' });
      // Hinchas enojados: si el que convierte queda ganando, le tiran botellas en el saque
      if (this.conHinchas && this.goles[lado] > this.goles[1 - lado]) {
        this.botellasPend = { objetivo: lado, n: 2 + Math.floor(Math.random() * 2), t: 0.6 };
      }
      if (this.onGol) this.onGol(lado);
    }

    /* ---------- Poderes ---------- */
    actualizarItems(dt) {
      this.proxItem -= dt;
      if (this.proxItem <= 0 && this.items.length < 2) {
        this.proxItem = rnd(9, 15);
        const tipos = Object.keys(PODERES);
        this.items.push({ tipo: tipos[Math.floor(Math.random() * tipos.length)], x: rnd(330, K.W - 330), y: rnd(190, 440), t: 0, vida: 8 });
      }
      const b = this.pelota;
      for (let i = this.items.length - 1; i >= 0; i--) {
        const it = this.items[i];
        it.t += dt;
        if (it.t > it.vida) { this.items.splice(i, 1); continue; }
        const dx = b.x - it.x;
        const dy = b.y - (it.y + Math.sin(it.t * 3) * 8);
        if (dx * dx + dy * dy < (K.PELOTA_R + 26) ** 2) {
          this.items.splice(i, 1);
          const quien = b.ultimo || this.jugadores[b.x < K.W / 2 ? 0 : 1];
          this.aplicarPoder(quien, it.tipo, it.x, it.y);
        }
      }
    }

    aplicarPoder(p, tipo, x, y) {
      const rival = this.jugadores[1 - p.lado];
      const cfg = PODERES[tipo];
      if (tipo === 'cabezon') { p.poder.cabezon = cfg.dur; p.poder.mini = 0; }
      else if (tipo === 'mini') { rival.poder.mini = cfg.dur; rival.poder.cabezon = 0; }
      else if (tipo === 'veloz') p.poder.veloz = cfg.dur;
      else if (tipo === 'hielo') { rival.congelado = 2.5; rival.vx = 0; sonar(this, 'congelar'); }
      else if (tipo === 'carga') p.carga = 1;
      sonar(this, 'poder');
      this.particula(x, y, 22, { color: [cfg.color, '#FFFFFF'], vida: 0.6, tam: 6, vmin: 60, vmax: 300 });
      if (!this.demo) this.texto(cfg.nombre.toUpperCase(), { vida: 1.1, tam: 46, y: 190, color: cfg.color, x: p.x });
    }

    /* ---------- Clima ---------- */
    actualizarClima(dt) {
      const c = this.clima;
      if (c.tipo) {
        c.t += dt;
        if (c.t > c.dur) {
          c.tipo = null;
          this.proxClima = rnd(12, 22);
        }
        return;
      }
      this.proxClima -= dt;
      if (this.proxClima > 0) return;
      const tipos = ['viento', 'lluvia', 'nieve'];
      c.tipo = tipos[Math.floor(Math.random() * tipos.length)];
      c.t = 0;
      c.dur = rnd(9, 14);
      c.viento = (Math.random() < 0.5 ? -1 : 1) * rnd(240, 380);
      if (!this.demo) {
        const txt = { viento: c.viento > 0 ? 'VIENTO ▶▶' : '◀◀ VIENTO', lluvia: '¡LLUVIA!', nieve: '¡NIEVE!' }[c.tipo];
        this.texto(txt, { vida: 1.4, tam: 64, y: 200, color: '#DFF7FF' });
      }
    }

    /* ---------- Botellas de los hinchas ---------- */
    actualizarBotellas(dt) {
      const pend = this.botellasPend;
      if (pend && this.estado === 'juego') {
        pend.t -= dt;
        if (pend.t <= 0 && pend.n > 0) {
          pend.n--;
          pend.t = rnd(0.35, 0.7);
          this.tirarBotella(this.jugadores[pend.objetivo]);
          if (pend.n === 0) this.botellasPend = null;
        }
      }
      for (let i = this.botellas.length - 1; i >= 0; i--) {
        const bo = this.botellas[i];
        bo.vida -= dt;
        bo.vy += 1200 * dt;
        bo.x += bo.vx * dt;
        bo.y += bo.vy * dt;
        bo.rot += bo.giro * dt;
        if (bo.vida <= 0) { this.botellas.splice(i, 1); continue; }
        if (!bo.activa) continue;
        for (const p of this.jugadores) {
          const hy = cabezaY(p);
          const r = radioCabeza(p) + 10;
          if ((bo.x - p.x) ** 2 + (bo.y - hy) ** 2 < r * r || Math.abs(bo.x - p.x) < 24 && bo.y > hy && bo.y < p.y) {
            bo.activa = false;
            bo.vx = -bo.vx * 0.3;
            bo.vy = -300;
            p.aturdido = Math.max(p.aturdido, 1.1);
            p.enojo = 1;
            sonar(this, 'cabeza');
            this.particula(bo.x, bo.y, 8, { color: ['#BDE8FF', '#FFFFFF'], vida: 0.4, tam: 4 });
            if (!this.demo) this.texto('¡BOTELLAZO!', { vida: 1, tam: 44, y: 200, color: '#F3F6EF', x: p.x });
            break;
          }
        }
        if (bo.y > K.SUELO - 6) {
          bo.y = K.SUELO - 6;
          bo.activa = false;
          bo.vy = -Math.abs(bo.vy) * 0.35;
          bo.vx *= 0.5;
          bo.giro *= 0.5;
        }
      }
    }

    tirarBotella(p) {
      const T = rnd(0.85, 1.1);
      const desde = p.x + (Math.random() < 0.5 ? -1 : 1) * rnd(220, 420);
      const x = clamp(desde, 20, K.W - 20);
      const y = rnd(170, 260);
      const tx = p.x + p.vx * T * 0.5;
      const ty = cabezaY(p);
      this.botellas.push({
        x, y, vx: (tx - x) / T, vy: (ty - y - 0.5 * 1200 * T * T) / T,
        rot: 0, giro: rnd(-14, 14), vida: 3, activa: true
      });
    }

    actualizarEfectos(dt) {
      for (let i = this.particulas.length - 1; i >= 0; i--) {
        const q = this.particulas[i];
        q.vida -= dt;
        if (q.vida <= 0) { this.particulas.splice(i, 1); continue; }
        q.vy += q.g * dt;
        q.x += q.vx * dt;
        q.y += q.vy * dt;
        q.vx *= 1 - 1.5 * dt;
        if (q.tipo !== 'papel') q.vy *= 1 - 1.5 * dt;
      }
      for (let i = this.textos.length - 1; i >= 0; i--) {
        const t = this.textos[i];
        t.t += dt;
        if (t.t > t.vida) this.textos.splice(i, 1);
      }
      for (const p of this.jugadores) {
        if (p.congelado > 0 && Math.random() < 0.15) this.particula(p.x + rnd(-30, 30), cabezaY(p) + rnd(-30, 30), 1, { color: '#DFF7FF', vida: 0.5, tam: 3, vmin: 5, vmax: 30 });
        if (p.poder.veloz > 0 && p.enSuelo && Math.abs(p.vx) > 100 && Math.random() < 0.4) this.particula(p.x - p.dir * 10, K.SUELO - 4, 1, { color: '#9CC89A', vida: 0.3, tam: 4, vmin: 10, vmax: 40 });
      }
    }

    /* ---------- IA ---------- */
    // Dónde estará la pelota dentro de t segundos (con gravedad y piques)
    predecir(t) {
      const b = this.pelota;
      let x = b.x;
      let y = b.y;
      let vx = b.vx;
      let vy = b.vy;
      const paso = 1 / 30;
      const R = K.PELOTA_R;
      for (let s = 0; s < t; s += paso) {
        if (!b.super) vy += K.G_PELOTA * paso;
        x += vx * paso;
        y += vy * paso;
        if (y > K.SUELO - R) { y = K.SUELO - R; vy = -vy * 0.68; }
        if (x < R) { x = R; vx = -vx * 0.45; }
        if (x > K.W - R) { x = K.W - R; vx = -vx * 0.45; }
      }
      return { x, y };
    }

    pensarIA(p, rival, dt) {
      const ia = p.ia;
      const cfg = ia.cfg;
      const b = this.pelota;
      const e = {};
      if (this.estado !== 'juego') return e;
      const linea = p.dir > 0 ? K.ARCO : K.W - K.ARCO;
      const hy = cabezaY(p);

      ia.t -= dt;
      if (ia.t <= 0) {
        ia.t = cfg.reac * rnd(0.7, 1.3);
        const fut = this.predecir(0.15 + cfg.reac);
        const detras = (fut.x - p.x) * p.dir < -6;
        const haciaMi = b.vx * p.dir < -380;
        const distYo = Math.abs(b.x - p.x);
        const superRival = b.super && b.super.dueno !== p;
        const lee = Math.random() < cfg.defensa;

        let obj;
        ia.modo = 'ataque';
        const distLinea = Math.abs(fut.x - linea);
        const tiroAlArco = haciaMi && Math.abs(b.vx) > 650 && distYo > 160 && !detras;
        if (superRival || (tiroAlArco && lee)) {
          // Tiro en camino: pararse en el arco
          ia.modo = 'arco';
          obj = linea + p.dir * 50;
        } else if (detras) {
          // La pelota quedó entre mi arco y yo: rodearla por atrás
          ia.modo = 'volver';
          obj = fut.x - p.dir * (distLinea < 200 && lee ? 30 : 60);
        } else {
          obj = fut.x - p.dir * rnd(cfg.sep - 6, cfg.sep + 6);
          // No salir lejos del arco salvo que llegue primero a la pelota
          const tope = linea + p.dir * cfg.avance;
          const primero = distYo + 40 < Math.abs(b.x - rival.x);
          if ((obj - tope) * p.dir > 0 && !primero) {
            ia.modo = 'espera';
            obj = tope;
          }
        }
        ia.objetivo = clamp(obj + rnd(-cfg.err, cfg.err), 50, K.W - 50);
      }
      const diff = ia.objetivo - p.x;
      // Cerca del objetivo, soltar para no pasarse de largo
      const margen = 8 + Math.min(30, Math.abs(p.vx) * 0.06);
      if (diff > margen) e.der = true;
      else if (diff < -margen) e.izq = true;

      const dx = b.x - p.x;
      const adx = Math.abs(dx);
      const frente = dx * p.dir > -12;
      const detras = dx * p.dir < -4;

      // Al volver, no empujar la pelota contra el propio arco:
      // saltarla solo si va lenta y lejos del arco; si no, esperar a que pase
      if (detras && adx < 75 && b.y > hy - 30) {
        const lejos = Math.abs(b.x - linea) > 220;
        if (lejos && Math.abs(b.vx) < 260 && Math.random() < cfg.defensa) {
          if (p.enSuelo) e.saltar = true;
        } else if (!lejos || Math.abs(b.vx) < 260) {
          e.izq = e.der = false;
        }
      }

      if (p.enSuelo) {
        // Cabezazo: pelota bajando cerca de la cabeza
        const alta = b.y < hy - 10 && b.y > hy - 250;
        if (alta && b.vy > -250 && adx < 110 && frente && Math.random() < cfg.salto * dt * 16) e.saltar = true;
        // Tapar un tiro alto que viene al arco
        if (b.vx * p.dir < -300 && b.y < hy - 20 && b.y > hy - 280) {
          const llega = adx / Math.max(1, Math.abs(b.vx));
          if (llega < 0.32 && Math.random() < cfg.salto) e.saltar = true;
        }
      }

      // Patear justo cuando la pelota va a pasar por el punto de impacto del botín
      if (frente && p.patada === 0) {
        const t = 0.07;
        const bx = b.x + b.vx * t;
        const by = b.y + b.vy * t;
        const ix = p.x + p.vx * t + p.dir * 27;
        const iy = p.y + p.vy * t - 17;
        const d = Math.hypot(bx - ix, by - iy);
        const alcance = 40 + (1 - cfg.patada) * 12;
        if (d < alcance && Math.random() < 0.35 + cfg.patada * 0.65) e.patear = true;
      }
      if (b.super && b.super.dueno !== p && adx < 115 && frente && Math.random() < cfg.patada * cfg.patada * 0.45) e.patear = true;

      // Súper: mejor desde lejos del arco propio
      if (p.carga >= 1 && frente && adx < 110 && b.y > p.y - 170 && Math.random() < cfg.super * dt * 4) e.super = true;
      return e;
    }
  }

  function colorSuper(t) {
    return { fuego: '#FF7A00', hielo: '#7FD8FF', rayo: '#FFF46B', tornado: '#B9F6CA' }[t] || '#FFB703';
  }
  function paletaSuper(t) {
    return {
      fuego: ['#FF7A00', '#FFD23F', '#E63946', '#FFB703'],
      hielo: ['#BFF0FF', '#7FD8FF', '#FFFFFF'],
      rayo: ['#FFF46B', '#FFFFFF', '#B28DFF'],
      tornado: ['#E8FFF0', '#B9F6CA', '#9CC89A']
    }[t] || ['#FFFFFF'];
  }

  CZ.Partido = Partido;
  CZ.motor = { botin, cabezaY, radioCabeza, anguloPata, colorSuper, paletaSuper };
})();
