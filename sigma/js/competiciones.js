/* Cabezones 2026 — competiciones: liga, copa, Mundial 2026 y Mundial de Clubes, con guardado */
(function () {
  'use strict';
  const CZ = (window.CZ = window.CZ || {});
  const D = CZ.datos;

  const CLAVE = 'cz26_torneo';
  const CLAVE_VITRINA = 'cz26_vitrina';
  const LETRAS = 'ABCDEFGHIJKL';
  const TIPOS = {
    liga: 'Liga',
    copa: 'Copa',
    mundial: 'Mundial 2026',
    clubes: 'Mundial de Clubes',
    champions: 'Champions League',
    libertadores: 'Copa Libertadores'
  };
  const NOMBRES_RONDA = {
    32: 'Dieciseisavos de final',
    16: 'Octavos de final',
    8: 'Cuartos de final',
    4: 'Semifinal',
    2: 'Final'
  };

  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
  const eq = (id) => D.equipo(id);

  function barajar(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function poisson(l) {
    const L = Math.exp(-l);
    let k = 0;
    let p = 1;
    do { k++; p *= Math.random(); } while (p > L && k < 12);
    return k - 1;
  }

  function simular(a, b, elim) {
    const na = eq(a).nivel;
    const nb = eq(b).nivel;
    let ga = poisson(clamp(1.45 + (na - nb) * 0.07, 0.25, 4));
    let gb = poisson(clamp(1.45 + (nb - na) * 0.07, 0.25, 4));
    let oro = false;
    if (elim && ga === gb) {
      oro = true;
      if (Math.random() < clamp(0.5 + (na - nb) * 0.03, 0.15, 0.85)) ga++;
      else gb++;
    }
    return { a, b, ga, gb, oro };
  }

  /* ---------- Tablas ---------- */
  function filaVacia(id) {
    return { id, pj: 0, g: 0, e: 0, p: 0, gf: 0, gc: 0, pts: 0 };
  }
  function anotar(t, r) {
    const A = t.tabla[r.a];
    const B = t.tabla[r.b];
    if (!A || !B) return;
    const ga = r.oro ? Math.min(r.ga, r.gb) : r.ga;
    const gb = r.oro ? Math.min(r.ga, r.gb) : r.gb;
    A.pj++; B.pj++;
    A.gf += ga; A.gc += gb;
    B.gf += gb; B.gc += ga;
    if (ga > gb) { A.g++; A.pts += 3; B.p++; }
    else if (gb > ga) { B.g++; B.pts += 3; A.p++; }
    else { A.e++; B.e++; A.pts++; B.pts++; }
  }
  function ordenar(t, ids) {
    return ids.map((id) => t.tabla[id]).sort((x, y) =>
      y.pts - x.pts ||
      (y.gf - y.gc) - (x.gf - x.gc) ||
      y.gf - x.gf ||
      eq(y.id).nivel - eq(x.id).nivel ||
      eq(x.id).nombre.localeCompare(eq(y.id).nombre)
    );
  }

  /* ---------- Fixture todos contra todos (método del círculo) ---------- */
  function fixture(ids) {
    const lista = ids.slice();
    if (lista.length % 2) lista.push(null);
    const n = lista.length;
    const fechas = [];
    for (let r = 0; r < n - 1; r++) {
      const f = [];
      for (let i = 0; i < n / 2; i++) {
        let a = lista[i];
        let b = lista[n - 1 - i];
        if (a === null || b === null) continue;
        if ((r + i) % 2) [a, b] = [b, a];
        f.push([a, b]);
      }
      fechas.push(f);
      lista.splice(1, 0, lista.pop());
    }
    return fechas;
  }

  /* ---------- Llaves ---------- */
  function crearRonda(ids) {
    const r = [];
    for (let i = 0; i < ids.length; i += 2) r.push({ a: ids[i], b: ids[i + 1], ga: null, gb: null, oro: false, gan: null });
    return r;
  }
  function jugarLlave(m, res) {
    m.ga = res.ga;
    m.gb = res.gb;
    m.oro = res.oro;
    m.gan = res.ga > res.gb ? m.a : m.b;
  }
  // Orden estándar para que los mejores sembrados se crucen al final
  function ordenSiembra(n) {
    let o = [0];
    while (o.length < n) {
      const m = o.length * 2;
      o = o.flatMap((x) => [x, m - 1 - x]);
    }
    return o;
  }

  /* ---------- Crear torneos ---------- */
  function crear(tipo, compId, usuario, op) {
    const t = {
      v: 1, tipo, compId, usuario,
      nombre: '', dificultad: op.dificultad || 'normal', duracion: op.duracion || 60,
      fase: '', tabla: {}, ultimos: [], partidos: [], campeon: null, eliminado: false, creado: Date.now()
    };
    if (tipo === 'liga') {
      const comp = D.competicion(compId);
      t.nombre = comp.nombre + ' ' + comp.temporada;
      t.equipos = comp.equipos.slice();
      t.equipos.forEach((id) => (t.tabla[id] = filaVacia(id)));
      t.fechas = fixture(barajar(t.equipos));
      t.fecha = 0;
      t.fase = 'liga';
    } else if (tipo === 'copa') {
      const comp = D.competicion(compId);
      t.nombre = 'Copa ' + comp.nombre;
      const otros = barajar(comp.equipos.filter((id) => id !== usuario)).slice(0, 15);
      t.equipos = barajar(otros.concat([usuario]));
      t.rondas = [crearRonda(t.equipos)];
      t.ronda = 0;
      t.fase = 'llaves';
    } else if (tipo === 'mundial') {
      const comp = D.mundial;
      t.nombre = comp.nombre;
      t.grupos = comp.grupos.map((g) => g.map((c) => comp.id + ':' + c));
      prepararGrupos(t);
    } else if (tipo === 'clubes') {
      t.nombre = 'Mundial de Clubes 2026';
      t.grupos = sortearClubes(usuario);
      prepararGrupos(t);
    } else if (tipo === 'champions') {
      // Fase liga: 36 equipos en una sola tabla, 8 fechas contra rivales distintos
      const comp = D.competicion('champions');
      t.nombre = 'Champions League 2026-27';
      t.equipos = comp.equipos.slice();
      t.equipos.forEach((id) => (t.tabla[id] = filaVacia(id)));
      t.fechas = fixture(barajar(t.equipos)).slice(0, 8);
      t.fecha = 0;
      t.fase = 'liga';
    } else if (tipo === 'libertadores') {
      const comp = D.competicion('libertadores');
      t.nombre = 'Copa Libertadores 2026';
      t.grupos = comp.grupos.map((g) => g.slice());
      t.idaVuelta = true;
      prepararGrupos(t);
    }
    return t;
  }

  function prepararGrupos(t) {
    t.equipos = t.grupos.flat();
    t.equipos.forEach((id) => (t.tabla[id] = filaVacia(id)));
    t.gfecha = 0;
    t.fase = 'grupos';
  }

  function sortearClubes(usuario) {
    // Los 4 mejores de cada liga (el club del usuario entra siempre)
    let cupos = [];
    for (const liga of D.ligas) {
      const top = liga.equipos.slice().sort((a, b) => eq(b).nivel - eq(a).nivel).slice(0, 4);
      if (eq(usuario).liga === liga.id && top.indexOf(usuario) < 0) top[3] = usuario;
      cupos = cupos.concat(top);
    }
    cupos.sort((a, b) => eq(b).nivel - eq(a).nivel);
    const bombos = [0, 1, 2, 3].map((k) => barajar(cupos.slice(k * 8, k * 8 + 8)));
    const grupos = Array.from({ length: 8 }, () => []);
    for (const bombo of bombos) {
      const resto = bombo.slice();
      for (const g of grupos) {
        let i = resto.findIndex((id) => !g.some((o) => eq(o).liga === eq(id).liga));
        if (i < 0) i = 0;
        g.push(resto.splice(i, 1)[0]);
      }
    }
    return grupos;
  }

  const CRUCES_GRUPO = [[[0, 1], [2, 3]], [[0, 2], [1, 3]], [[0, 3], [1, 2]]];
  const fechasGrupo = (t) => (t.idaVuelta ? 6 : 3);
  // En ida y vuelta, la segunda rueda invierte la localía
  function crucesGrupo(t, f) {
    const base = CRUCES_GRUPO[f % 3];
    return f < 3 ? base : base.map(([a, b]) => [b, a]);
  }
  function nombreRonda(t, i) {
    if (t.nombresRonda && t.nombresRonda[i]) return t.nombresRonda[i];
    return NOMBRES_RONDA[t.rondas[i].length * 2] || 'Eliminatoria';
  }

  // Champions: 1.º a 8.º a octavos; 9.º a 24.º juegan el play-off; el resto queda afuera
  function armarChampions(t) {
    const orden = ordenar(t, t.equipos).map((f) => f.id);
    t.top8 = orden.slice(0, 8);
    const po = orden.slice(8, 24);
    const pares = [];
    for (let i = 0; i < 8; i++) pares.push(po[i], po[15 - i]);
    t.rondas = [crearRonda(pares)];
    t.nombresRonda = ['Play-off'];
    t.ronda = 0;
    t.fase = 'llaves';
    if (pares.indexOf(t.usuario) < 0) {
      if (t.top8.indexOf(t.usuario) < 0) t.eliminado = true;
      for (const m of t.rondas[0]) jugarLlave(m, simular(m.a, m.b, true));
      avanzarLlaves(t);
    }
  }
  function siguientesIds(t, ronda) {
    if (t.tipo === 'champions' && t.ronda === 0 && t.top8) {
      // Octavos: 1.º contra el ganador del cruce 16-17, 2.º contra el del 15-18, ...
      const gan = ronda.map((m) => m.gan);
      const pares = [];
      for (let i = 0; i < 8; i++) pares.push(t.top8[i], gan[7 - i]);
      const orden = ordenSiembra(8);
      const res = [];
      for (const k of orden) res.push(pares[2 * k], pares[2 * k + 1]);
      return res;
    }
    return ronda.map((m) => m.gan);
  }

  /* ---------- Consultas ---------- */
  function grupoDe(t, id) {
    return t.grupos ? t.grupos.findIndex((g) => g.indexOf(id) >= 0) : -1;
  }

  function proximo(t) {
    if (t.fase === 'fin') return null;
    const u = t.usuario;
    if (t.fase === 'liga') {
      const par = t.fechas[t.fecha].find((p) => p[0] === u || p[1] === u);
      return {
        rival: par[0] === u ? par[1] : par[0],
        local: par[0] === u,
        etiqueta: (t.tipo === 'champions' ? 'Fase liga · ' : '') + 'Fecha ' + (t.fecha + 1) + ' de ' + t.fechas.length,
        eliminatoria: false
      };
    }
    if (t.fase === 'grupos') {
      const gi = grupoDe(t, u);
      const g = t.grupos[gi];
      const pos = g.indexOf(u);
      const par = crucesGrupo(t, t.gfecha).find((p) => p[0] === pos || p[1] === pos);
      const rival = g[par[0] === pos ? par[1] : par[0]];
      return { rival, local: par[0] === pos, etiqueta: 'Grupo ' + LETRAS[gi] + ' · Fecha ' + (t.gfecha + 1) + ' de ' + fechasGrupo(t), eliminatoria: false };
    }
    if (t.fase === 'llaves') {
      const ronda = t.rondas[t.ronda];
      const m = ronda.find((x) => x.a === u || x.b === u);
      if (!m) return null;
      return { rival: m.a === u ? m.b : m.a, local: m.a === u, etiqueta: nombreRonda(t, t.ronda), eliminatoria: true };
    }
    return null;
  }

  /* ---------- Avanzar ---------- */
  function registrar(t, golesUsuario, golesRival, oro) {
    const u = t.usuario;
    const px = proximo(t);
    if (!px) return;
    const res = px.local
      ? { a: u, b: px.rival, ga: golesUsuario, gb: golesRival, oro: !!oro }
      : { a: px.rival, b: u, ga: golesRival, gb: golesUsuario, oro: !!oro };
    t.partidos.push({ rival: px.rival, gf: golesUsuario, gc: golesRival, oro: !!oro, etiqueta: px.etiqueta });

    if (t.fase === 'liga') {
      t.ultimos = [];
      for (const [a, b] of t.fechas[t.fecha]) {
        const r = a === res.a && b === res.b ? res : simular(a, b, false);
        anotar(t, r);
        t.ultimos.push(r);
      }
      t.fecha++;
      if (t.fecha >= t.fechas.length) {
        if (t.tipo === 'champions') armarChampions(t);
        else {
          t.fase = 'fin';
          t.campeon = ordenar(t, t.equipos)[0].id;
        }
      }
    } else if (t.fase === 'grupos') {
      t.ultimos = [];
      t.grupos.forEach((g) => {
        for (const [i, j] of crucesGrupo(t, t.gfecha)) {
          const a = g[i];
          const b = g[j];
          const r = a === res.a && b === res.b ? res : simular(a, b, false);
          anotar(t, r);
          t.ultimos.push(r);
        }
      });
      t.gfecha++;
      if (t.gfecha >= fechasGrupo(t)) armarLlaves(t);
    } else if (t.fase === 'llaves') {
      const ronda = t.rondas[t.ronda];
      t.ultimos = [];
      for (const m of ronda) {
        const r = m.a === res.a && m.b === res.b ? res : simular(m.a, m.b, true);
        jugarLlave(m, r);
        t.ultimos.push(r);
      }
      avanzarLlaves(t);
    }
    guardar(t);
  }

  function avanzarLlaves(t) {
    for (;;) {
      const ronda = t.rondas[t.ronda];
      if (ronda.some((m) => m.gan === null)) return;
      if (ronda.length === 1) {
        t.fase = 'fin';
        t.campeon = ronda[0].gan;
        return;
      }
      const sig = crearRonda(siguientesIds(t, ronda));
      t.rondas.push(sig);
      t.ronda++;
      const sigue = sig.some((m) => m.a === t.usuario || m.b === t.usuario);
      if (sigue) return;
      // Usuario eliminado: se simula el resto
      t.eliminado = true;
      for (const m of sig) jugarLlave(m, simular(m.a, m.b, true));
    }
  }

  function armarLlaves(t) {
    const primeros = [];
    const segundos = [];
    const terceros = [];
    t.grupos.forEach((g, gi) => {
      const o = ordenar(t, g);
      primeros.push({ f: o[0], gi });
      segundos.push({ f: o[1], gi });
      terceros.push({ f: o[2], gi });
    });
    const fuerza = (x, y) => y.f.pts - x.f.pts || (y.f.gf - y.f.gc) - (x.f.gf - x.f.gc) || y.f.gf - x.f.gf;
    const pares = [];
    if (t.tipo === 'mundial') {
      primeros.sort(fuerza);
      segundos.sort(fuerza);
      terceros.sort(fuerza);
      t.mejoresTerceros = terceros.slice(0, 8).map((x) => x.f.id);
      const A = primeros.concat(segundos.slice(0, 4));
      const B = segundos.slice(4).concat(terceros.slice(0, 8));
      const rivales = B.slice().reverse();
      // evitar cruces del mismo grupo
      for (let i = 0; i < A.length; i++) {
        if (rivales[i].gi !== A[i].gi) continue;
        for (let j = 0; j < rivales.length; j++) {
          if (j === i) continue;
          if (rivales[j].gi !== A[i].gi && rivales[i].gi !== A[j].gi) {
            [rivales[i], rivales[j]] = [rivales[j], rivales[i]];
            break;
          }
        }
      }
      // En orden de siembra: los pares consecutivos se cruzan en la ronda siguiente
      for (const k of ordenSiembra(16)) pares.push(A[k].f.id, rivales[k].f.id);
    } else {
      // Mundial de Clubes y Libertadores: 1A-2B, 1B-2A, ...
      for (let i = 0; i < 8; i += 2) {
        pares.push(primeros[i].f.id, segundos[i + 1].f.id);
        pares.push(primeros[i + 1].f.id, segundos[i].f.id);
      }
    }
    t.rondas = [crearRonda(pares)];
    t.ronda = 0;
    t.fase = 'llaves';
    const sigue = pares.indexOf(t.usuario) >= 0;
    if (!sigue) {
      t.eliminado = true;
      for (const m of t.rondas[0]) jugarLlave(m, simular(m.a, m.b, true));
      avanzarLlaves(t);
    }
  }

  /* ---------- Guardado ---------- */
  function guardar(t) {
    try { localStorage.setItem(CLAVE, JSON.stringify(t)); } catch (e) { /* sin almacenamiento */ }
  }
  function cargar() {
    try {
      const s = localStorage.getItem(CLAVE);
      if (!s) return null;
      const t = JSON.parse(s);
      if (!t || t.v !== 1 || !eq(t.usuario)) return null;
      return t;
    } catch (e) {
      return null;
    }
  }
  function borrar() {
    try { localStorage.removeItem(CLAVE); } catch (e) { /* nada */ }
  }
  function vitrina() {
    try { return JSON.parse(localStorage.getItem(CLAVE_VITRINA) || '[]'); } catch (e) { return []; }
  }
  function sumarTrofeo(t) {
    const v = vitrina();
    v.unshift({ tipo: t.tipo, nombre: t.nombre, equipo: t.usuario, dificultad: t.dificultad, fecha: Date.now() });
    try { localStorage.setItem(CLAVE_VITRINA, JSON.stringify(v.slice(0, 60))); } catch (e) { /* nada */ }
  }

  /* Posición final del usuario (texto) */
  function desenlace(t) {
    if (t.fase !== 'fin') return '';
    if (t.campeon === t.usuario) return '¡Campeón!';
    if (t.tipo === 'liga') {
      const pos = ordenar(t, t.equipos).findIndex((f) => f.id === t.usuario) + 1;
      return 'Terminaste ' + pos + '.º de ' + t.equipos.length;
    }
    const ultimo = t.partidos[t.partidos.length - 1];
    if (!ultimo) return 'Eliminado';
    if (ultimo.etiqueta === 'Final') return 'Subcampeón';
    if (ultimo.etiqueta.indexOf('Grupo') === 0) return 'Eliminado en la fase de grupos';
    if (ultimo.etiqueta.indexOf('Fase liga') === 0) return 'Eliminado en la fase liga';
    return 'Eliminado en ' + ultimo.etiqueta.toLowerCase();
  }

  CZ.comp = {
    TIPOS, LETRAS, NOMBRES_RONDA,
    crear, proximo, registrar, ordenar, grupoDe, simular, nombreRonda,
    guardar, cargar, borrar, vitrina, sumarTrofeo, desenlace
  };
})();
