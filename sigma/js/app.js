/* Cabezones 2026 — app: menús dentro del juego, controles, pantalla completa y secciones de la página */
(function () {
  'use strict';
  const CZ = window.CZ;
  const D = CZ.datos;
  const C = CZ.comp;
  const $ = (s, r) => (r || document).querySelector(s);

  /* ---------- Opciones ---------- */
  const OPC = 'cz26_opciones';
  const opciones = { dificultad: 'normal', duracion: 60 };
  try { Object.assign(opciones, JSON.parse(localStorage.getItem(OPC) || '{}')); } catch (e) { /* nada */ }
  if (!CZ.DIFICULTADES[opciones.dificultad]) opciones.dificultad = 'normal';
  if ([45, 60, 90].indexOf(opciones.duracion) < 0) opciones.duracion = 60;
  const guardarOpciones = () => { try { localStorage.setItem(OPC, JSON.stringify(opciones)); } catch (e) { /* nada */ } };

  /* ---------- Elementos ---------- */
  const juego = $('#juego');
  const lienzo = $('#lienzo');
  const ctx = lienzo.getContext('2d');
  const capa = $('#capa');
  const hud = $('#hud');
  const tactil = $('#tactil');

  let modo = 'menu';
  let partido = null;
  let demo = null;
  let contexto = null;
  let torneo = C.cargar();
  let manejadores = {};
  let pantallaActual = null;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const eq = (id) => D.equipo(id);
  const NOMBRE_SUPER = { fuego: 'Fuego', hielo: 'Hielo', rayo: 'Rayo', tornado: 'Tornado' };

  function estrellas(nivel) {
    const n = Math.max(1, Math.min(5, Math.round(((nivel - 60) / 32) * 5 * 2) / 2));
    let s = '';
    for (let i = 1; i <= 5; i++) s += i <= n ? '★' : i - 0.5 === n ? '⯪' : '☆';
    return s.replace(/⯪/g, '<span class="media">★</span>');
  }

  /* =========================================================
     PANTALLAS
     ========================================================= */
  function pantalla(nombre, html, h) {
    pantallaActual = nombre;
    manejadores = h || {};
    capa.innerHTML = '<div class="pantalla p-' + nombre + '">' + html + '</div>';
    capa.hidden = false;
    capa.scrollTop = 0;
    const foco = capa.querySelector('[data-foco]') || capa.querySelector('button');
    if (foco && document.activeElement && juego.contains(document.activeElement)) foco.focus({ preventScroll: true });
  }
  capa.addEventListener('click', (e) => {
    const b = e.target.closest('[data-a]');
    if (!b || !capa.contains(b)) return;
    const fn = manejadores[b.dataset.a];
    if (fn) {
      CZ.audio.iniciar();
      CZ.audio.play('click');
      fn(b.dataset.v, b);
    }
  });

  const volver = (txt) => '<button class="volver" data-a="volver" aria-label="Volver">← ' + (txt || 'Volver') + '</button>';

  function segmentado(nombre, lista, actual) {
    return '<div class="seg" role="group" aria-label="' + nombre + '">' + lista.map(([v, t]) =>
      '<button data-a="' + nombre + '" data-v="' + v + '" class="' + (String(actual) === String(v) ? 'activo' : '') + '" aria-pressed="' + (String(actual) === String(v)) + '">' + t + '</button>'
    ).join('') + '</div>';
  }

  /* ---------- Inicio ---------- */
  function pInicio() {
    irModo('menu');
    torneo = C.cargar();
    let cont = '';
    if (torneo) {
      const px = C.proximo(torneo);
      const e = eq(torneo.usuario);
      cont = '<button class="continuar" data-a="continuar" data-foco>' +
        '<img src="' + CZ.dibujo.retrato(e, 120) + '" alt="" width="54" height="54">' +
        '<span><small>Continuar</small><b>' + esc(torneo.nombre) + '</b><em>' + esc(e.nombre) + (px ? ' · ' + esc(px.etiqueta) : ' · terminado') + '</em></span>' +
        '<i aria-hidden="true">▶</i></button>';
    }
    const dif = Object.keys(CZ.DIFICULTADES).map((k) => [k, CZ.DIFICULTADES[k].nombre]);
    pantalla('inicio',
      '<div class="marca"><span class="marca-a">CABEZONES</span><span class="marca-b">2026</span></div>' +
      '<p class="bajada">8 ligas con los planteles 2026 y el Mundial con sus 12 grupos reales</p>' +
      cont +
      '<div class="modos">' +
      boton('rapido', 'Partido rápido', 'Vos contra la compu', 'verde') +
      boton('dos', '2 jugadores', 'Mismo teclado', 'verde') +
      boton('liga', 'Liga', 'Todos contra todos', 'azul') +
      boton('copa', 'Copa', '16 equipos, mata-mata', 'azul') +
      boton('mundial', 'Mundial 2026', '48 selecciones', 'oro') +
      boton('clubes', 'Mundial de Clubes', '32 clubes de 8 ligas', 'oro') +
      '</div>' +
      '<div class="opciones">' +
      '<label>Dificultad</label>' + segmentado('dif', dif, opciones.dificultad) +
      '<label>Duración</label>' + segmentado('dur', [[45, '45 s'], [60, '60 s'], [90, '90 s']], opciones.duracion) +
      '</div>',
      {
        continuar: () => (C.proximo(torneo) ? pHub() : pFin()),
        modo: (v) => elegirModo(v),
        dif: (v) => { opciones.dificultad = v; guardarOpciones(); pInicio(); },
        dur: (v) => { opciones.duracion = Number(v); guardarOpciones(); pInicio(); }
      });
  }
  function boton(v, t, s, c) {
    return '<button class="modo modo-' + c + '" data-a="modo" data-v="' + v + '"><b>' + t + '</b><small>' + s + '</small></button>';
  }

  function elegirModo(m) {
    if (m === 'rapido') {
      pEquipos({ titulo: 'Elegí tu equipo', comps: todas(), onElegir: (id) => pEquipos({
        titulo: 'Elegí el rival', comps: todas(), comp: eq(id).liga, excluir: id, azar: true,
        onElegir: (r) => rapido(id, r, false), onVolver: () => elegirModo('rapido')
      }), onVolver: pInicio });
    } else if (m === 'dos') {
      pEquipos({ titulo: 'Jugador 1: elegí equipo', comps: todas(), onElegir: (id) => pEquipos({
        titulo: 'Jugador 2: elegí equipo', comps: todas(), comp: eq(id).liga, excluir: id,
        onElegir: (r) => rapido(id, r, true), onVolver: () => elegirModo('dos')
      }), onVolver: pInicio });
    } else if (m === 'liga' || m === 'copa') {
      pLigas(m);
    } else if (m === 'mundial') {
      pEquipos({ titulo: 'Mundial 2026: elegí tu selección', comps: [D.mundial.id], onElegir: (id) => nuevoTorneo('mundial', D.mundial.id, id), onVolver: pInicio, grupos: true });
    } else if (m === 'clubes') {
      pEquipos({ titulo: 'Mundial de Clubes: elegí tu club', comps: D.ligas.map((l) => l.id), onElegir: (id) => nuevoTorneo('clubes', null, id), onVolver: pInicio });
    }
  }
  const todas = () => D.competiciones.map((c) => c.id);

  /* ---------- Entradas de estadio (ligas) ---------- */
  function entrada(comp, i, accion) {
    const franjas = comp.bandera.map((c) => '<i style="background:' + c + '"></i>').join('');
    return '<article class="entrada">' +
      '<div class="entrada-bandera" aria-hidden="true">' + franjas + '</div>' +
      '<div class="entrada-cuerpo">' +
      '<span class="entrada-pais">' + esc(comp.pais) + ' · ' + esc(comp.temporada) + '</span>' +
      '<h3>' + esc(comp.nombre) + '</h3>' +
      '<p>' + esc(comp.nota) + '</p>' +
      '<span class="entrada-dato">' + comp.equipos.length + (comp.selecciones ? ' selecciones' : ' equipos') + '</span>' +
      '</div>' +
      '<div class="entrada-talon">' +
      '<span>PUERTA<b>' + (i + 1) + '</b></span><span>FILA<b>' + (12 + i * 3) + '</b></span>' +
      '<div class="codigo" aria-hidden="true"></div>' +
      (accion ? '<button class="btn-entrada" ' + accion + '>Entrar</button>' : '') +
      '</div></article>';
  }

  function pLigas(tipo) {
    pantalla('ligas',
      volver() + '<h2>' + (tipo === 'liga' ? 'Liga: elegí el torneo' : 'Copa: elegí la liga') + '</h2>' +
      '<div class="entradas">' + D.ligas.map((l, i) => entrada(l, i, 'data-a="liga" data-v="' + l.id + '"')).join('') + '</div>',
      {
        volver: pInicio,
        liga: (id) => pEquipos({ titulo: D.competicion(id).nombre + ': elegí tu equipo', comps: [id], onElegir: (eid) => nuevoTorneo(tipo, id, eid), onVolver: () => pLigas(tipo) })
      });
  }

  /* ---------- Selección de equipo ---------- */
  function pEquipos(o) {
    const comp = o.comp && o.comps.indexOf(o.comp) >= 0 ? o.comp : o.comps[0];
    const c = D.competicion(comp);
    const tabs = o.comps.length > 1
      ? '<div class="pestanas" role="tablist">' + o.comps.map((id) => {
        const x = D.competicion(id);
        return '<button role="tab" data-a="tab" data-v="' + id + '" aria-selected="' + (id === comp) + '" class="' + (id === comp ? 'activo' : '') + '">' + esc(x.nombre) + '</button>';
      }).join('') + '</div>'
      : '';
    let lista = c.equipos.filter((id) => id !== o.excluir);
    let cuerpo;
    if (o.grupos && c.grupos) {
      cuerpo = '<div class="grupos-eleccion">' + c.grupos.map((g, gi) =>
        '<div class="grupo-col"><h4>Grupo ' + C.LETRAS[gi] + '</h4>' + g.map((cod) => ficha(c.id + ':' + cod)).join('') + '</div>'
      ).join('') + '</div>';
    } else {
      lista = lista.slice().sort((a, b) => eq(b).nivel - eq(a).nivel);
      cuerpo = '<div class="fichas">' + lista.map((id) => ficha(id)).join('') + '</div>';
    }
    pantalla('equipos',
      volver() + '<h2>' + esc(o.titulo) + '</h2>' + tabs +
      (o.azar ? '<button class="azar" data-a="azar">Rival al azar</button>' : '') + cuerpo,
      {
        volver: o.onVolver || pInicio,
        tab: (id) => pEquipos(Object.assign({}, o, { comp: id })),
        elegir: (id) => o.onElegir(id),
        azar: () => {
          const pool = lista.length ? lista : c.equipos;
          o.onElegir(pool[Math.floor(Math.random() * pool.length)]);
        }
      });
  }
  function ficha(id) {
    const e = eq(id);
    return '<button class="ficha" data-a="elegir" data-v="' + id + '">' +
      '<img src="' + CZ.dibujo.retrato(e, 120) + '" alt="" width="60" height="60" loading="lazy">' +
      '<span class="ficha-nombre">' + esc(e.nombre) + '</span>' +
      '<span class="ficha-nivel" aria-label="Nivel ' + e.nivel + '">' + estrellas(e.nivel) + ' <em>' + e.nivel + '</em></span>' +
      '<span class="ficha-super s-' + e.super + '">' + NOMBRE_SUPER[e.super] + '</span>' +
      '</button>';
  }

  /* ---------- Torneos ---------- */
  function nuevoTorneo(tipo, compId, usuario) {
    const previo = C.cargar();
    const crear = () => {
      torneo = C.crear(tipo, compId, usuario, opciones);
      C.guardar(torneo);
      pHub();
    };
    if (previo && previo.fase !== 'fin') {
      pantalla('confirmar',
        '<h2>¿Empezar otro torneo?</h2><p>Tenés en curso <b>' + esc(previo.nombre) + '</b> con ' + esc(eq(previo.usuario).nombre) + '. Si empezás uno nuevo, ese se pierde.</p>' +
        '<div class="fila-botones"><button class="btn btn-rojo" data-a="si">Empezar nuevo</button><button class="btn" data-a="no" data-foco>Seguir con el anterior</button></div>',
        { si: crear, no: pHub });
    } else crear();
  }

  function filaTabla(f, pos, extra) {
    const e = eq(f.id);
    const dif = f.gf - f.gc;
    return '<tr class="' + (f.id === torneo.usuario ? 'yo ' : '') + (extra || '') + '"><td>' + pos + '</td>' +
      '<td class="t-eq"><i class="camiseta" style="--c1:' + e.kit.c1 + ';--c2:' + e.kit.c2 + '"></i>' + esc(e.nombre) + '</td>' +
      '<td>' + f.pj + '</td><td>' + f.g + '</td><td>' + f.e + '</td><td>' + f.p + '</td>' +
      '<td>' + (dif > 0 ? '+' : '') + dif + '</td><td><b>' + f.pts + '</b></td></tr>';
  }
  function tabla(ids, clases) {
    const filas = C.ordenar(torneo, ids);
    return '<table class="tabla"><thead><tr><th>#</th><th class="t-eq">Equipo</th><th>PJ</th><th>G</th><th>E</th><th>P</th><th>DG</th><th>Pts</th></tr></thead><tbody>' +
      filas.map((f, i) => filaTabla(f, i + 1, clases ? clases(i, f) : '')).join('') + '</tbody></table>';
  }
  function llaves() {
    return '<div class="llaves">' + torneo.rondas.map((r) =>
      '<div class="ronda"><h4>' + (C.NOMBRES_RONDA[r.length * 2] || '') + '</h4>' + r.map((m) => {
        const cls = (id) => (m.gan === id ? 'gana' : m.gan ? 'pierde' : '') + (id === torneo.usuario ? ' yo' : '');
        const gol = (g) => (g === null ? '' : g);
        return '<div class="llave">' +
          '<span class="' + cls(m.a) + '"><i class="camiseta" style="--c1:' + eq(m.a).kit.c1 + ';--c2:' + eq(m.a).kit.c2 + '"></i>' + esc(eq(m.a).corto) + '<b>' + gol(m.ga) + '</b></span>' +
          '<span class="' + cls(m.b) + '"><i class="camiseta" style="--c1:' + eq(m.b).kit.c1 + ';--c2:' + eq(m.b).kit.c2 + '"></i>' + esc(eq(m.b).corto) + '<b>' + gol(m.gb) + (m.oro ? ' <small>oro</small>' : '') + '</b></span>' +
          '</div>';
      }).join('') + '</div>'
    ).join('') + '</div>';
  }
  function listaResultados(lista) {
    if (!lista || !lista.length) return '<p class="vacio">Todavía no se jugó ninguna fecha.</p>';
    return '<ul class="resultados">' + lista.map((r) =>
      '<li class="' + (r.a === torneo.usuario || r.b === torneo.usuario ? 'yo' : '') + '"><span>' + esc(eq(r.a).nombre) + '</span><b>' + r.ga + ' - ' + r.gb + (r.oro ? '*' : '') + '</b><span>' + esc(eq(r.b).nombre) + '</span></li>'
    ).join('') + '</ul>' + (lista.some((r) => r.oro) ? '<p class="nota">* definido por gol de oro</p>' : '');
  }

  function vistaTorneo(vista) {
    const t = torneo;
    if (vista === 'llaves' && t.rondas) return llaves();
    if (vista === 'resultados') return listaResultados(t.ultimos);
    if (t.tipo === 'liga') {
      const n = t.equipos.length;
      return tabla(t.equipos, (i) => (i === 0 ? 'z-campeon' : i < 4 ? 'z-arriba' : i >= n - 3 ? 'z-abajo' : ''));
    }
    if (t.grupos) {
      const mio = C.grupoDe(t, t.usuario);
      const orden = [mio].concat(t.grupos.map((_, i) => i).filter((i) => i !== mio));
      return '<div class="tablas-grupos">' + orden.map((gi) =>
        '<div><h4>Grupo ' + C.LETRAS[gi] + (gi === mio ? ' · el tuyo' : '') + '</h4>' + tabla(t.grupos[gi], (i) => (i < 2 ? 'z-arriba' : i === 2 && t.tipo === 'mundial' ? 'z-medio' : '')) + '</div>'
      ).join('') + '</div>';
    }
    return llaves();
  }

  function pHub(vista) {
    irModo('menu');
    const t = torneo;
    const px = C.proximo(t);
    if (!px) return pFin();
    const yo = eq(t.usuario);
    const rv = eq(px.rival);
    const vistas = [];
    if (t.tipo === 'liga') vistas.push(['tabla', 'Tabla']);
    if (t.grupos) vistas.push(['tabla', 'Grupos']);
    if (t.rondas) vistas.push(['llaves', 'Llaves']);
    vistas.push(['resultados', 'Última fecha']);
    const actual = vista || (t.fase === 'llaves' ? 'llaves' : 'tabla');
    pantalla('hub',
      '<div class="hub-cabecera">' + volver('Menú') + '<div><small>' + esc(C.TIPOS[t.tipo]) + ' · ' + esc(CZ.DIFICULTADES[t.dificultad].nombre) + ' · ' + t.duracion + ' s</small><h2>' + esc(t.nombre) + '</h2></div></div>' +
      '<div class="hub">' +
      '<div class="proximo">' +
      '<span class="etiqueta">' + esc(px.etiqueta) + '</span>' +
      '<div class="versus">' +
      '<figure><img src="' + CZ.dibujo.retrato(yo, 150) + '" alt="" width="96" height="96"><figcaption>' + esc(yo.nombre) + '</figcaption></figure>' +
      '<span class="vs">VS</span>' +
      '<figure><img class="espejo" src="' + CZ.dibujo.retrato(rv, 150) + '" alt="" width="96" height="96"><figcaption>' + esc(rv.nombre) + '</figcaption></figure>' +
      '</div>' +
      (px.eliminatoria ? '<p class="aviso-oro">Eliminatoria: si terminan empatados, se juega gol de oro.</p>' : '') +
      '<button class="btn btn-grande" data-a="jugar" data-foco>Jugar partido</button>' +
      '<button class="btn btn-chico btn-borde" data-a="abandonar">Abandonar torneo</button>' +
      '</div>' +
      '<div class="panel">' +
      '<div class="pestanas" role="tablist">' + vistas.map(([v, n]) => '<button role="tab" data-a="vista" data-v="' + v + '" aria-selected="' + (v === actual) + '" class="' + (v === actual ? 'activo' : '') + '">' + n + '</button>').join('') + '</div>' +
      '<div class="panel-cuerpo">' + vistaTorneo(actual) + '</div>' +
      '</div></div>',
      {
        volver: pInicio,
        vista: (v) => pHub(v),
        jugar: () => {
          contexto = { tipo: 'torneo', px };
          iniciarPartido({ local: t.usuario, visita: px.rival, control: ['humano', 'cpu'], oro: px.eliminatoria, dificultad: t.dificultad, duracion: t.duracion });
        },
        abandonar: () => pantalla('confirmar',
          '<h2>¿Abandonar el torneo?</h2><p>Se borra el progreso de <b>' + esc(t.nombre) + '</b>.</p>' +
          '<div class="fila-botones"><button class="btn btn-rojo" data-a="si">Abandonar</button><button class="btn" data-a="no" data-foco>Seguir jugando</button></div>',
          { si: () => { C.borrar(); torneo = null; pInicio(); }, no: () => pHub(actual) })
      });
  }

  function pFin() {
    irModo('menu');
    const t = torneo;
    const campeon = eq(t.campeon);
    const gane = t.campeon === t.usuario;
    if (gane && !t.trofeoContado) {
      t.trofeoContado = true;
      C.sumarTrofeo(t);
      C.guardar(t);
      CZ.audio.play('trofeo');
      renderVitrina();
    }
    pantalla('fin',
      '<div class="fin ' + (gane ? 'fin-gana' : '') + '">' +
      (gane ? copa() : '') +
      '<small>' + esc(t.nombre) + '</small>' +
      '<h2>' + esc(C.desenlace(t)) + '</h2>' +
      '<p>' + (gane ? esc(eq(t.usuario).nombre) + ' levanta el trofeo.' : 'Campeón: <b>' + esc(campeon.nombre) + '</b>') + '</p>' +
      '<img src="' + CZ.dibujo.retrato(campeon, 150) + '" alt="" width="110" height="110">' +
      '<div class="fila-botones"><button class="btn btn-grande" data-a="otra" data-foco>Jugar otro torneo</button><button class="btn btn-borde" data-a="ver">Ver ' + (t.rondas ? 'llaves' : 'tabla') + '</button></div>' +
      '</div>',
      {
        otra: () => { C.borrar(); torneo = null; elegirModo(t.tipo); },
        ver: () => pantalla('fin-detalle', volver() + '<h2>' + esc(t.nombre) + '</h2>' + vistaTorneo(t.rondas ? 'llaves' : 'tabla'), { volver: pFin })
      });
  }
  function copa() {
    return '<svg class="copa" viewBox="0 0 120 140" aria-hidden="true"><defs><linearGradient id="oro" x1="0" x2="1"><stop offset="0" stop-color="#FFD66B"/><stop offset=".5" stop-color="#FFB703"/><stop offset="1" stop-color="#C98A00"/></linearGradient></defs>' +
      '<path d="M30 10h60v28c0 22-14 38-30 40-16-2-30-18-30-40z" fill="url(#oro)"/>' +
      '<path d="M30 18H14c0 18 8 28 20 30M90 18h16c0 18-8 28-20 30" fill="none" stroke="#FFB703" stroke-width="7"/>' +
      '<rect x="52" y="78" width="16" height="22" fill="#C98A00"/><rect x="34" y="100" width="52" height="12" rx="3" fill="url(#oro)"/><rect x="26" y="112" width="68" height="16" rx="3" fill="#142A4D" stroke="#FFB703" stroke-width="3"/></svg>';
  }

  /* ---------- Partido rápido ---------- */
  function rapido(a, b, dos) {
    contexto = { tipo: dos ? 'dos' : 'rapido', a, b };
    iniciarPartido({ local: a, visita: b, control: dos ? ['humano', 'humano'] : ['humano', 'cpu'], oro: false, dificultad: opciones.dificultad, duracion: opciones.duracion });
  }

  /* ---------- Resultado ---------- */
  function pResultado(res) {
    irModo('menu', true);
    const [a, b] = [eq(res.local), eq(res.visita)];
    const g = res.goles;
    const dos = contexto.tipo === 'dos';
    const titulo = res.ganador === -1 ? 'Empate' : dos ? '¡Ganó ' + (res.ganador === 0 ? a : b).nombre + '!' : res.ganador === 0 ? '¡Victoria!' : 'Derrota';
    const goles = res.historial.length
      ? '<ul class="goles">' + res.historial.map((h) => '<li class="lado-' + h.lado + '"><b>' + (h.oro ? 'Oro' : h.minuto + '″') + '</b> ' + esc((h.lado === 0 ? a : b).corto) + (h.super ? ' · súper tiro' : '') + '</li>').join('') + '</ul>'
      : '<p class="vacio">Sin goles.</p>';

    let extra = '';
    let acciones;
    if (contexto.tipo === 'torneo') {
      const antes = C.proximo(torneo);
      C.registrar(torneo, g[0], g[1], res.oro);
      extra = '<h3>' + esc(antes.etiqueta) + ': resto de la fecha</h3>' + listaResultados(torneo.ultimos.filter((r) => r.a !== torneo.usuario && r.b !== torneo.usuario).slice(0, 12));
      acciones = '<button class="btn btn-grande" data-a="seguir" data-foco>Continuar</button>';
    } else {
      acciones = '<button class="btn btn-grande" data-a="revancha" data-foco>Revancha</button><button class="btn btn-borde" data-a="menu">Menú</button>';
    }
    pantalla('resultado',
      '<h2 class="res-titulo res-' + (res.ganador === 0 ? 'gana' : res.ganador === 1 ? (dos ? 'gana' : 'pierde') : 'empata') + '">' + esc(titulo) + '</h2>' +
      '<div class="marcador-final">' +
      '<figure><img src="' + CZ.dibujo.retrato(a, 150) + '" alt="" width="80" height="80"><figcaption>' + esc(a.nombre) + '</figcaption></figure>' +
      '<b>' + g[0] + '<span>-</span>' + g[1] + '</b>' +
      '<figure><img class="espejo" src="' + CZ.dibujo.retrato(b, 150) + '" alt="" width="80" height="80"><figcaption>' + esc(b.nombre) + '</figcaption></figure>' +
      '</div>' + (res.oro ? '<p class="aviso-oro">Definido por gol de oro</p>' : '') +
      goles + extra +
      '<div class="fila-botones">' + acciones + '</div>',
      {
        seguir: () => (torneo.fase === 'fin' ? pFin() : pHub()),
        revancha: () => rapido(contexto.a, contexto.b, contexto.tipo === 'dos'),
        menu: pInicio
      });
  }

  /* =========================================================
     PARTIDO
     ========================================================= */
  function iniciarPartido(o) {
    CZ.audio.iniciar();
    partido = new CZ.Partido({
      local: eq(o.local), visita: eq(o.visita),
      control: o.control, dificultad: o.dificultad, duracion: o.duracion, oro: o.oro,
      onFin: (res) => { if (modo === 'partido' || modo === 'pausa') pResultado(res); }
    });
    capa.hidden = true;
    capa.innerHTML = '';
    irModo('partido');
    teclas.clear();
    juego.focus({ preventScroll: true });
    if (!estaVisible(juego)) juego.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function irModo(m, conservarPartido) {
    modo = m;
    juego.classList.toggle('en-menu', m === 'menu');
    juego.classList.toggle('en-partido', m !== 'menu');
    hud.hidden = m === 'menu';
    const dos = partido && partido.jugadores[1].control === 'humano';
    tactil.hidden = !(m === 'partido' && esTactil);
    tactil.classList.toggle('dos', !!dos);
    if (m === 'menu') {
      if (!conservarPartido) partido = null;
      if (CZ.audio) CZ.audio.hinchada(0);
    }
  }

  function pausar() {
    if (modo !== 'partido' || !partido || partido.estado === 'final') return;
    modo = 'pausa';
    if (CZ.audio) CZ.audio.hinchada(0);
    tactil.hidden = true;
    const enTorneo = contexto && contexto.tipo === 'torneo';
    pantalla('pausa',
      '<h2>Pausa</h2>' +
      '<div class="pausa-botones">' +
      '<button class="btn btn-grande" data-a="seguir" data-foco>Seguir jugando</button>' +
      (enTorneo ? '' : '<button class="btn btn-borde" data-a="reiniciar">Reiniciar partido</button>') +
      '<button class="btn btn-borde" data-a="sonido">' + (CZ.audio.silencio ? 'Activar sonido' : 'Silenciar') + '</button>' +
      '<button class="btn btn-rojo" data-a="salir">' + (enTorneo ? 'Abandonar (cuenta como derrota 0-3)' : 'Salir al menú') + '</button>' +
      '</div>',
      {
        seguir: reanudar,
        reiniciar: () => rapido(contexto.a, contexto.b, contexto.tipo === 'dos'),
        sonido: () => { alternarSonido(); modo = 'partido'; pausar(); },
        salir: () => {
          if (enTorneo) {
            partido.onFin = null;
            pResultado({ local: partido.equipos[0].id, visita: partido.equipos[1].id, goles: [0, 3], oro: false, ganador: 1, historial: [] });
          } else pInicio();
        }
      });
  }
  function reanudar() {
    if (modo !== 'pausa') return;
    capa.hidden = true;
    capa.innerHTML = '';
    modo = 'partido';
    tactil.hidden = !esTactil;
    teclas.clear();
    juego.focus({ preventScroll: true });
  }

  /* ---------- Teclado ---------- */
  const teclas = new Set();
  const JUEGO_TECLAS = new Set(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Space', 'Enter', 'ShiftRight', 'KeyA', 'KeyD', 'KeyW', 'KeyS']);
  window.addEventListener('keydown', (e) => {
    if (modo === 'partido') {
      if (e.code === 'KeyP' || e.code === 'Escape') { e.preventDefault(); pausar(); return; }
      if (JUEGO_TECLAS.has(e.code)) {
        e.preventDefault();
        teclas.add(e.code);
      }
    } else if (modo === 'pausa' && (e.code === 'KeyP' || e.code === 'Escape')) {
      e.preventDefault();
      reanudar();
    }
  });
  window.addEventListener('keyup', (e) => teclas.delete(e.code));
  window.addEventListener('blur', () => { teclas.clear(); pausar(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) pausar(); });

  /* ---------- Táctil ---------- */
  const esTactil = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
  const toques = [{}, {}];
  tactil.addEventListener('pointerdown', (e) => {
    const b = e.target.closest('[data-t]');
    if (!b) return;
    e.preventDefault();
    CZ.audio.iniciar();
    if (b.dataset.t === 'pausa') return pausar();
    try { b.setPointerCapture(e.pointerId); } catch (x) { /* nada */ }
    toques[b.dataset.j | 0][b.dataset.t] = true;
    b.classList.add('on');
  });
  const soltar = (e) => {
    const b = e.target.closest('[data-t]');
    if (!b || b.dataset.t === 'pausa') return;
    toques[b.dataset.j | 0][b.dataset.t] = false;
    b.classList.remove('on');
  };
  tactil.addEventListener('pointerup', soltar);
  tactil.addEventListener('pointercancel', soltar);
  tactil.addEventListener('lostpointercapture', soltar);
  tactil.addEventListener('contextmenu', (e) => e.preventDefault());

  function entradas() {
    const k = (c) => teclas.has(c);
    const dos = partido.jugadores[1].control === 'humano';
    const t0 = toques[0];
    const t1 = toques[1];
    if (!dos) {
      return [{
        izq: k('KeyA') || k('ArrowLeft') || t0.izq,
        der: k('KeyD') || k('ArrowRight') || t0.der,
        saltar: k('KeyW') || k('ArrowUp') || t0.saltar,
        patear: k('Space') || k('Enter') || t0.patear,
        super: k('KeyS') || k('ArrowDown') || t0.super
      }, {}];
    }
    return [
      { izq: k('KeyA') || t0.izq, der: k('KeyD') || t0.der, saltar: k('KeyW') || t0.saltar, patear: k('Space') || t0.patear, super: k('KeyS') || t0.super },
      { izq: k('ArrowLeft') || t1.izq, der: k('ArrowRight') || t1.der, saltar: k('ArrowUp') || t1.saltar, patear: k('Enter') || k('ShiftRight') || t1.patear, super: k('ArrowDown') || t1.super }
    ];
  }

  /* ---------- HUD: pausa, sonido, pantalla completa ---------- */
  hud.addEventListener('click', (e) => {
    const b = e.target.closest('[data-h]');
    if (!b) return;
    if (b.dataset.h === 'pausa') pausar();
    if (b.dataset.h === 'full') pantallaCompleta();
  });
  function pantallaCompleta() {
    const doc = document;
    const activo = doc.fullscreenElement || doc.webkitFullscreenElement;
    if (activo) {
      (doc.exitFullscreen || doc.webkitExitFullscreen).call(doc);
      return;
    }
    const pedir = juego.requestFullscreen || juego.webkitRequestFullscreen;
    if (!pedir) return;
    const pr = pedir.call(juego);
    if (pr && pr.then) {
      pr.then(() => {
        if (screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(() => {});
      }).catch(() => {});
    }
  }
  document.querySelectorAll('[data-full]').forEach((b) => b.addEventListener('click', pantallaCompleta));

  function alternarSonido() {
    CZ.audio.iniciar();
    const s = CZ.audio.alternar();
    document.querySelectorAll('[data-sonido]').forEach((b) => {
      b.setAttribute('aria-pressed', String(s));
      b.querySelector('span').textContent = s ? 'Sin sonido' : 'Sonido';
      b.classList.toggle('mudo', s);
    });
  }
  document.querySelectorAll('[data-sonido]').forEach((b) => {
    b.addEventListener('click', alternarSonido);
    b.setAttribute('aria-pressed', String(CZ.audio.silencio));
    b.querySelector('span').textContent = CZ.audio.silencio ? 'Sin sonido' : 'Sonido';
    b.classList.toggle('mudo', CZ.audio.silencio);
  });

  /* =========================================================
     BUCLE
     ========================================================= */
  function nuevaDemo() {
    const liga = D.ligas[Math.floor(Math.random() * D.ligas.length)];
    const ids = liga.equipos.slice().sort(() => Math.random() - 0.5);
    demo = new CZ.Partido({
      local: eq(ids[0]), visita: eq(ids[1]), control: ['cpu', 'cpu'], dificultad: 'dificil', duracion: 45, demo: true,
      onFin: () => setTimeout(nuevaDemo, 2500)
    });
  }
  nuevaDemo();

  let previo = performance.now();
  let reloj = 0;
  function cuadro(ahora) {
    const dt = Math.min(0.05, (ahora - previo) / 1000);
    previo = ahora;
    reloj += dt;
    const visible = estaVisible(juego);
    if (modo === 'partido' && partido) {
      partido.actualizar(dt, entradas());
      CZ.dibujo.partido(ctx, partido, reloj);
    } else if ((modo === 'pausa' || pantallaActual === 'resultado') && partido) {
      if (pantallaActual === 'resultado') partido.actualizar(dt, [{}, {}]);
      CZ.dibujo.partido(ctx, partido, reloj);
    } else if (visible && demo) {
      demo.actualizar(dt, null);
      CZ.dibujo.partido(ctx, demo, reloj);
    }
    requestAnimationFrame(cuadro);
  }
  function estaVisible(el) {
    const r = el.getBoundingClientRect();
    return r.bottom > 0 && r.top < (window.innerHeight || 800);
  }

  /* =========================================================
     SECCIONES DE LA PÁGINA
     ========================================================= */
  function renderLigas() {
    const cont = $('#lista-ligas');
    if (!cont) return;
    cont.innerHTML = D.ligas.map((l, i) =>
      entrada(l, i, 'data-jugar-liga="' + l.id + '"') +
      '<details class="plantel"><summary>Ver los ' + l.equipos.length + ' equipos de ' + esc(l.nombre) + '</summary><ul>' +
      l.equipos.map((id) => { const e = eq(id); return '<li><i class="camiseta" style="--c1:' + e.kit.c1 + ';--c2:' + e.kit.c2 + '"></i>' + esc(e.nombre) + '<em>' + e.nivel + '</em></li>'; }).join('') +
      '</ul></details>'
    ).join('');
    cont.addEventListener('click', (e) => {
      const b = e.target.closest('[data-jugar-liga]');
      if (!b) return;
      irAlJuego();
      const id = b.dataset.jugarLiga;
      pEquipos({ titulo: D.competicion(id).nombre + ': elegí tu equipo', comps: [id], onElegir: (eid) => nuevoTorneo('liga', id, eid), onVolver: () => pLigas('liga') });
    });
  }

  function renderMundial() {
    const cont = $('#lista-grupos');
    if (!cont) return;
    const m = D.mundial;
    cont.innerHTML = m.grupos.map((g, gi) =>
      '<div class="grupo"><h3>Grupo ' + C.LETRAS[gi] + '</h3><ul>' +
      g.map((cod) => { const e = eq(m.id + ':' + cod); return '<li><i class="camiseta" style="--c1:' + e.kit.c1 + ';--c2:' + e.kit.c2 + '"></i>' + esc(e.nombre) + '</li>'; }).join('') +
      '</ul></div>'
    ).join('');
    document.querySelectorAll('[data-jugar-mundial]').forEach((b) => b.addEventListener('click', () => { irAlJuego(); elegirModo('mundial'); }));
    document.querySelectorAll('[data-jugar-clubes]').forEach((b) => b.addEventListener('click', () => { irAlJuego(); elegirModo('clubes'); }));
  }

  function renderVitrina() {
    const cont = $('#lista-vitrina');
    if (!cont) return;
    const v = C.vitrina();
    if (!v.length) {
      cont.innerHTML = '<p class="vacio">Todavía no ganaste ningún título. Arrancá una liga, una copa o el Mundial y volvé con la copa.</p>';
      return;
    }
    cont.innerHTML = v.map((x) => {
      const e = eq(x.equipo);
      if (!e) return '';
      return '<div class="trofeo"><img src="' + CZ.dibujo.retrato(e, 120) + '" alt="" width="64" height="64"><div><b>' + esc(x.nombre) + '</b><span>' + esc(e.nombre) + ' · ' + esc((CZ.DIFICULTADES[x.dificultad] || {}).nombre || '') + '</span><small>' + new Date(x.fecha).toLocaleDateString('es') + '</small></div></div>';
    }).join('');
  }

  function renderHeroe() {
    const cont = $('#estrellas-heroe');
    if (!cont) return;
    const ids = ['mundial:ARG', 'laliga:RMA', 'premier:ARS', 'argentina:BOC', 'brasil:FLA', 'mundial:BRA', 'seriea:INT', 'ligamx:AME'];
    cont.innerHTML = ids.filter(eq).map((id, i) => '<img src="' + CZ.dibujo.retrato(eq(id), 150) + '" alt="" width="110" height="110" style="--i:' + i + '"' + (i % 2 ? ' class="espejo"' : '') + '>').join('');
  }

  function irAlJuego() {
    CZ.audio.iniciar();
    const s = $('#jugar');
    if (s) s.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  document.querySelectorAll('[data-ir-juego]').forEach((b) => b.addEventListener('click', (e) => {
    e.preventDefault();
    irAlJuego();
    if (b.dataset.irJuego) elegirModo(b.dataset.irJuego);
  }));

  // Arranque: esperar las tipografías para que el lienzo y los retratos salgan bien
  const listo = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.race([listo, new Promise((r) => setTimeout(r, 1500))]).then(() => {
    renderHeroe();
    renderLigas();
    renderMundial();
    renderVitrina();
    pInicio();
    requestAnimationFrame((t) => { previo = t; cuadro(t); });
  });
  ['pointerdown', 'keydown'].forEach((ev) => window.addEventListener(ev, () => CZ.audio.iniciar(), { once: true }));
})();
