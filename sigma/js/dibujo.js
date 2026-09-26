/* Cabezones 2026 — dibujo: estadio nocturno, hinchada, cabezones, pelota y marcador */
(function () {
  'use strict';
  const CZ = (window.CZ = window.CZ || {});
  const K = CZ.K;
  const TAU = Math.PI * 2;
  const FUENTE = '"Chango", "Archivo Black", Impact, sans-serif';

  const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

  function lienzo(w, h) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    return c;
  }
  function sombrear(hex, f) {
    const n = parseInt(hex.slice(1), 16);
    let r = (n >> 16) & 255;
    let g = (n >> 8) & 255;
    let b = n & 255;
    if (f < 0) { r *= 1 + f; g *= 1 + f; b *= 1 + f; }
    else { r += (255 - r) * f; g += (255 - g) * f; b += (255 - b) * f; }
    return 'rgb(' + (r | 0) + ',' + (g | 0) + ',' + (b | 0) + ')';
  }
  function luminancia(hex) {
    const n = parseInt(hex.slice(1), 16);
    return (0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255;
  }
  function rrect(g, x, y, w, h, r) {
    g.beginPath();
    g.moveTo(x + r, y);
    g.arcTo(x + w, y, x + w, y + h, r);
    g.arcTo(x + w, y + h, x, y + h, r);
    g.arcTo(x, y + h, x, y, r);
    g.arcTo(x, y, x + w, y, r);
    g.closePath();
  }

  /* =========================================================
     ESTADIO
     ========================================================= */
  const TRIB_Y0 = 132;
  const TRIB_Y1 = 574;

  function crearEstadio(eqL, eqV) {
    const W = K.W;
    const H = K.H;
    const fondo = lienzo(W, H);
    const g = fondo.getContext('2d');
    const r = CZ.datos.rng(CZ.datos.hash(eqL.id + eqV.id));

    // Cielo
    const cielo = g.createLinearGradient(0, 0, 0, TRIB_Y0 + 40);
    cielo.addColorStop(0, '#030814');
    cielo.addColorStop(1, '#0B1A33');
    g.fillStyle = cielo;
    g.fillRect(0, 0, W, H);
    for (let i = 0; i < 70; i++) {
      g.fillStyle = 'rgba(243,246,239,' + (0.2 + r() * 0.6).toFixed(2) + ')';
      const s = r() < 0.9 ? 1 : 2;
      g.fillRect(r() * W, r() * 110, s, s);
    }

    // Estructura de la tribuna
    const trib = g.createLinearGradient(0, TRIB_Y0, 0, TRIB_Y1);
    trib.addColorStop(0, '#0E1F3D');
    trib.addColorStop(1, '#1A335C');
    g.fillStyle = trib;
    g.fillRect(0, TRIB_Y0 - 6, W, TRIB_Y1 - TRIB_Y0 + 6);

    // Techo en voladizo
    g.fillStyle = '#060E1F';
    g.beginPath();
    g.moveTo(0, 70);
    g.lineTo(W, 70);
    g.lineTo(W, 118);
    g.lineTo(0, 118);
    g.fill();
    g.fillStyle = '#0B1A33';
    g.fillRect(0, 118, W, 18);
    // Reflectores del techo
    for (let x = 40; x < W; x += 80) {
      g.fillStyle = '#F3F6EF';
      g.fillRect(x, 114, 34, 5);
      const luz = g.createRadialGradient(x + 17, 118, 2, x + 17, 118, 90);
      luz.addColorStop(0, 'rgba(255,248,220,0.35)');
      luz.addColorStop(1, 'rgba(255,248,220,0)');
      g.fillStyle = luz;
      g.fillRect(x - 80, 110, 200, 100);
    }
    // Vigas del techo
    g.strokeStyle = '#142A4D';
    g.lineWidth = 2;
    for (let x = 0; x < W; x += 40) {
      g.beginPath();
      g.moveTo(x, 72);
      g.lineTo(x + 20, 116);
      g.stroke();
    }

    // Bandas de hormigón entre anillos
    g.fillStyle = '#0A1630';
    g.fillRect(0, 290, W, 10);
    g.fillRect(0, 446, W, 10);

    // Zócalo delantero y carteles (estructura; el texto LED se anima)
    g.fillStyle = '#081225';
    g.fillRect(0, TRIB_Y1, W, 40);

    // Césped
    const pasto = g.createLinearGradient(0, 612, 0, H);
    pasto.addColorStop(0, '#1E6B35');
    pasto.addColorStop(1, '#2B9348');
    g.fillStyle = pasto;
    g.fillRect(0, 612, W, H - 612);
    // Franjas en perspectiva
    for (let i = 0; i < 16; i++) {
      if (i % 2) continue;
      const x0 = (i / 16) * W;
      const x1 = ((i + 1) / 16) * W;
      const c = W / 2;
      g.fillStyle = 'rgba(255,255,255,0.05)';
      g.beginPath();
      g.moveTo(c + (x0 - c) * 0.8, 612);
      g.lineTo(c + (x1 - c) * 0.8, 612);
      g.lineTo(c + (x1 - c) * 1.25, H);
      g.lineTo(c + (x0 - c) * 1.25, H);
      g.fill();
    }
    // Líneas de cal
    g.strokeStyle = 'rgba(243,246,239,0.8)';
    g.lineWidth = 3;
    g.beginPath();
    g.moveTo(0, 622);
    g.lineTo(W, 622);
    g.stroke();
    g.beginPath();
    g.moveTo(W / 2, 622);
    g.lineTo(W / 2, H);
    g.stroke();
    g.beginPath();
    g.ellipse(W / 2, 672, 170, 38, 0, 0, TAU);
    g.stroke();
    g.fillStyle = 'rgba(243,246,239,0.9)';
    g.beginPath();
    g.ellipse(W / 2, 672, 7, 3, 0, 0, TAU);
    g.fill();
    // Áreas chicas
    g.beginPath();
    g.moveTo(0, 700); g.lineTo(230, 700); g.lineTo(190, 622);
    g.moveTo(W, 700); g.lineTo(W - 230, 700); g.lineTo(W - 190, 622);
    g.stroke();

    // Redes (fondo del arco)
    dibujarRed(g, 0, 1);
    dibujarRed(g, W, -1);

    // Torres de iluminación con halo
    for (const x of [18, W - 18]) {
      const halo = g.createRadialGradient(x, 40, 5, x, 40, 360);
      halo.addColorStop(0, 'rgba(255,250,230,0.45)');
      halo.addColorStop(0.3, 'rgba(255,250,230,0.12)');
      halo.addColorStop(1, 'rgba(255,250,230,0)');
      g.fillStyle = halo;
      g.fillRect(x - 360, 0, 720, 420);
      // Batería de reflectores inclinada hacia la cancha
      g.save();
      g.translate(x, 36);
      g.rotate(x < W / 2 ? 0.35 : -0.35);
      g.fillStyle = '#081225';
      rrect(g, -30, -18, 60, 34, 6);
      g.fill();
      g.shadowColor = '#FFF8DC';
      g.shadowBlur = 12;
      g.fillStyle = '#FFFBEA';
      for (let i = 0; i < 2; i++) for (let j = 0; j < 4; j++) {
        g.beginPath();
        g.arc(-21 + j * 14, -8 + i * 14, 5, 0, TAU);
        g.fill();
      }
      g.restore();
    }

    // Hinchada: dibujada en franjas para poder saltar
    const hinchada = crearHinchada(eqL, eqV, r);
    return { fondo, hinchada, franjas: 20 };
  }

  function dibujarRed(g, x0, s) {
    const top = K.TRAV;
    const bot = K.SUELO;
    const prof = K.ARCO;
    g.save();
    g.fillStyle = 'rgba(8,18,37,0.55)';
    g.beginPath();
    g.moveTo(x0, top - 8);
    g.lineTo(x0 + s * prof, top);
    g.lineTo(x0 + s * prof, bot);
    g.lineTo(x0, bot + 6);
    g.closePath();
    g.fill();
    g.strokeStyle = 'rgba(243,246,239,0.35)';
    g.lineWidth = 1.2;
    for (let i = 0; i <= 10; i++) {
      const x = x0 + s * (prof * i) / 10;
      g.beginPath();
      g.moveTo(x, top - 8 + (8 * i) / 10);
      g.lineTo(x, bot + 6 - (6 * i) / 10);
      g.stroke();
    }
    for (let y = top; y <= bot; y += 14) {
      g.beginPath();
      g.moveTo(x0, y - 8 * (1 - (y - top) / (bot - top)));
      g.lineTo(x0 + s * prof, y);
      g.stroke();
    }
    // Poste trasero
    g.strokeStyle = '#C9CFC6';
    g.lineWidth = 5;
    g.beginPath();
    g.moveTo(x0 + s * 4, top - 6);
    g.lineTo(x0 + s * 4, bot + 4);
    g.stroke();
    g.restore();
  }

  function crearHinchada(eqL, eqV, r) {
    const W = K.W;
    const h = TRIB_Y1 - TRIB_Y0;
    const c = lienzo(W, h + 20);
    const g = c.getContext('2d');
    const pieles = ['#F6D5B8', '#E2AE82', '#BD8053', '#845234', '#4F2E1E', '#D39A6A'];
    const neutros = ['#2A3B5C', '#3A4E73', '#F3F6EF', '#5A6B8C'];
    const colsL = [eqL.kit.c1, eqL.kit.c1, eqL.kit.c2];
    const colsV = [eqV.kit.c1, eqV.kit.c1, eqV.kit.c2];
    const anillos = [[TRIB_Y0 + 4, 288], [302, 444], [458, TRIB_Y1 - 2]];
    for (const [a, b] of anillos) {
      for (let y = a + 8; y < b; y += 12) {
        const k = 0.72 + ((y - TRIB_Y0) / h) * 0.4;
        const paso = 11 * k;
        // escalón
        g.fillStyle = 'rgba(0,0,0,0.18)';
        g.fillRect(0, y - TRIB_Y0 + 5 * k, W, 2);
        for (let x = r() * paso; x < W; x += paso * (0.85 + r() * 0.3)) {
          if (r() < 0.06) continue;
          const lado = x < W / 2 ? (r() < 0.85 ? colsL : colsV) : r() < 0.85 ? colsV : colsL;
          const cam = r() < 0.12 ? neutros[(r() * neutros.length) | 0] : lado[(r() * lado.length) | 0];
          const yy = y - TRIB_Y0 + r() * 2;
          g.fillStyle = cam;
          rrect(g, x - 4.5 * k, yy, 9 * k, 9 * k, 3 * k);
          g.fill();
          g.fillStyle = pieles[(r() * pieles.length) | 0];
          g.beginPath();
          g.arc(x, yy - 2.5 * k, 3.4 * k, 0, TAU);
          g.fill();
          if (r() < 0.05) {
            // brazo en alto con bufanda
            g.fillStyle = lado[0];
            g.fillRect(x + 3 * k, yy - 10 * k, 2.5 * k, 9 * k);
          }
        }
      }
    }
    // Banderas y trapos
    const trapos = [[eqL, 60, 318], [eqL, 330, 170], [eqV, W - 330, 170], [eqV, W - 250, 318], [eqL, 470, 470], [eqV, W - 560, 470]];
    for (const [eq, x, y] of trapos) {
      const w = 150;
      const hh = 34;
      const yy = y - TRIB_Y0;
      g.fillStyle = eq.kit.c1;
      g.fillRect(x, yy, w, hh);
      g.fillStyle = eq.kit.c2;
      g.fillRect(x, yy + hh / 2 - 5, w, 10);
      g.fillStyle = luminancia(eq.kit.c1) > 0.6 ? '#0B1A33' : '#F3F6EF';
      g.font = '18px ' + FUENTE;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(eq.corto, x + w / 2, yy + hh / 2 + 1);
    }
    return c;
  }

  /* =========================================================
     CABEZONES
     ========================================================= */
  function patronCamiseta(g, kit, x, y, w, h) {
    const { diseno, c1, c2 } = kit;
    g.fillStyle = c1;
    g.fillRect(x, y, w, h);
    g.fillStyle = c2;
    switch (diseno) {
      case 'bastones':
        for (let i = 1; i < 6; i += 2) g.fillRect(x + (w * i) / 6, y, w / 6, h);
        break;
      case 'aros':
        for (let i = 1; i < 6; i += 2) g.fillRect(x, y + (h * i) / 6, w, h / 6);
        break;
      case 'banda':
        g.beginPath();
        g.moveTo(x + w * 0.1, y);
        g.lineTo(x + w * 0.42, y);
        g.lineTo(x + w * 0.9, y + h);
        g.lineTo(x + w * 0.58, y + h);
        g.fill();
        break;
      case 'franja':
        g.fillRect(x, y + h * 0.36, w, h * 0.28);
        break;
      case 'mitades':
        g.fillRect(x + w / 2, y, w / 2, h);
        break;
      case 've':
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(x + w / 2, y + h * 0.55);
        g.lineTo(x + w, y);
        g.lineTo(x + w, y + h * 0.25);
        g.lineTo(x + w / 2, y + h * 0.8);
        g.lineTo(x, y + h * 0.25);
        g.fill();
        break;
      case 'cuadros': {
        const n = 4;
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if ((i + j) % 2) g.fillRect(x + (w * i) / n, y + (h * j) / n, w / n + 0.5, h / n + 0.5);
        break;
      }
      case 'cruz':
        g.fillRect(x + w * 0.4, y, w * 0.2, h);
        g.fillRect(x, y + h * 0.3, w, h * 0.2);
        break;
      case 'franjav':
        g.fillRect(x + w * 0.34, y, w * 0.32, h);
        break;
      case 'diagonal':
        g.beginPath();
        g.moveTo(x, y + h);
        g.lineTo(x + w, y);
        g.lineTo(x + w, y + h);
        g.fill();
        break;
      default:
        // liso: cuello y detalle con el segundo color
        g.fillRect(x, y, w, 3);
    }
  }

  function dibujarPelo(g, a, r, capa) {
    const col = a.pelo;
    const osc = sombrear(col, -0.3);
    g.fillStyle = col;
    const tapa = (bajo) => {
      // cubre la parte superior de la cabeza
      g.beginPath();
      g.arc(0, 0, r * 1.04, Math.PI + 0.05 - bajo, TAU - 0.35 + bajo * 0.2);
      g.quadraticCurveTo(r * 0.3, -r * 0.35, -r * 0.3, -r * 0.2);
      g.quadraticCurveTo(-r * 0.75, -r * 0.05, -r * 1.02, r * 0.1);
      g.closePath();
      g.fill();
    };
    switch (a.peinado) {
      case 'afro':
        if (capa === 'atras') {
          g.beginPath();
          g.arc(-r * 0.12, -r * 0.3, r * 1.28, 0, TAU);
          g.fill();
          g.fillStyle = osc;
          for (let i = 0; i < 18; i++) {
            const an = (i / 18) * TAU;
            g.beginPath();
            g.arc(-r * 0.12 + Math.cos(an) * r * 1.1, -r * 0.3 + Math.sin(an) * r * 1.1, r * 0.22, 0, TAU);
            g.fill();
          }
        } else {
          g.beginPath();
          g.arc(-r * 0.1, -r * 0.62, r * 0.78, Math.PI * 0.95, Math.PI * 2.1);
          g.fill();
        }
        break;
      case 'largo':
        if (capa === 'atras') {
          g.beginPath();
          g.moveTo(-r * 0.2, -r * 0.9);
          g.quadraticCurveTo(-r * 1.35, -r * 0.6, -r * 1.05, r * 0.95);
          g.lineTo(-r * 0.35, r * 0.75);
          g.closePath();
          g.fill();
        } else tapa(0.1);
        break;
      case 'trenzas':
        if (capa === 'atras') {
          g.strokeStyle = col;
          g.lineWidth = r * 0.16;
          g.lineCap = 'round';
          for (let i = 0; i < 3; i++) {
            g.beginPath();
            g.moveTo(-r * (0.55 + i * 0.12), -r * 0.3);
            g.quadraticCurveTo(-r * (1.05 + i * 0.08), r * 0.3, -r * (0.8 + i * 0.1), r * 0.95);
            g.stroke();
          }
        } else {
          tapa(0);
          g.strokeStyle = osc;
          g.lineWidth = 1.5;
          for (let i = -3; i <= 2; i++) {
            g.beginPath();
            g.moveTo(i * r * 0.2, -r * 0.98);
            g.quadraticCurveTo(i * r * 0.2 - r * 0.2, -r * 0.6, i * r * 0.2 - r * 0.4, -r * 0.25);
            g.stroke();
          }
        }
        break;
      case 'rodete':
        if (capa === 'atras') {
          g.beginPath();
          g.arc(-r * 0.55, -r * 0.9, r * 0.36, 0, TAU);
          g.fill();
        } else tapa(0);
        break;
      case 'corto':
        if (capa !== 'atras') tapa(0);
        break;
      case 'flequillo':
        if (capa !== 'atras') {
          tapa(0.05);
          g.beginPath();
          g.moveTo(r * 0.05, -r * 0.95);
          g.quadraticCurveTo(r * 0.85, -r * 0.85, r * 0.75, -r * 0.35);
          g.lineTo(r * 0.45, -r * 0.5);
          g.lineTo(r * 0.3, -r * 0.3);
          g.lineTo(r * 0.1, -r * 0.5);
          g.closePath();
          g.fill();
        }
        break;
      case 'lado':
        if (capa !== 'atras') {
          tapa(0.05);
          g.beginPath();
          g.moveTo(-r * 0.6, -r * 0.85);
          g.quadraticCurveTo(r * 0.3, -r * 1.35, r * 0.85, -r * 0.55);
          g.quadraticCurveTo(r * 0.3, -r * 0.85, -r * 0.2, -r * 0.7);
          g.closePath();
          g.fill();
          g.strokeStyle = osc;
          g.lineWidth = 2;
          g.beginPath();
          g.moveTo(-r * 0.25, -r * 1.0);
          g.quadraticCurveTo(r * 0.2, -r * 0.95, r * 0.5, -r * 0.7);
          g.stroke();
        }
        break;
      case 'rulos':
        if (capa !== 'atras') {
          tapa(0);
          for (let i = 0; i < 11; i++) {
            const an = Math.PI * 1.02 + (i / 10) * Math.PI * 0.82;
            g.beginPath();
            g.arc(Math.cos(an) * r * 0.9, Math.sin(an) * r * 0.9, r * 0.2, 0, TAU);
            g.fill();
          }
        }
        break;
      case 'cresta':
        if (capa !== 'atras') {
          g.globalAlpha = 0.35;
          tapa(0);
          g.globalAlpha = 1;
          g.beginPath();
          g.moveTo(-r * 0.75, -r * 0.6);
          for (let i = 0; i <= 5; i++) {
            const an = Math.PI * 1.2 + (i / 5) * Math.PI * 0.55;
            const x = Math.cos(an) * r;
            const y = Math.sin(an) * r;
            g.lineTo(x * 1.35 + r * 0.05, y * 1.35);
            g.lineTo(Math.cos(an + 0.12) * r * 0.95, Math.sin(an + 0.12) * r * 0.95);
          }
          g.closePath();
          g.fill();
        }
        break;
      case 'puntas':
        if (capa !== 'atras') {
          tapa(0);
          g.beginPath();
          for (let i = 0; i < 7; i++) {
            const an = Math.PI * 1.08 + (i / 6) * Math.PI * 0.8;
            g.moveTo(Math.cos(an - 0.14) * r * 0.9, Math.sin(an - 0.14) * r * 0.9);
            g.lineTo(Math.cos(an) * r * 1.32, Math.sin(an) * r * 1.32);
            g.lineTo(Math.cos(an + 0.14) * r * 0.9, Math.sin(an + 0.14) * r * 0.9);
          }
          g.fill();
        }
        break;
      case 'rapado':
        if (capa !== 'atras') {
          g.globalAlpha = 0.55;
          tapa(0);
          g.globalAlpha = 1;
        }
        break;
      default: // pelado
        if (capa !== 'atras') {
          g.fillStyle = 'rgba(255,255,255,0.22)';
          g.beginPath();
          g.ellipse(r * 0.05, -r * 0.7, r * 0.35, r * 0.14, -0.2, 0, TAU);
          g.fill();
        }
    }
  }

  // Cabeza en coordenadas locales (centro 0,0, mirando a la derecha)
  function dibujarCabeza(g, eq, r, o) {
    const a = eq.aspecto;
    dibujarPelo(g, a, r, 'atras');

    // Oreja
    g.fillStyle = sombrear(a.piel, -0.12);
    g.beginPath();
    g.ellipse(-r * 0.32, r * 0.08, r * 0.15, r * 0.2, 0, 0, TAU);
    g.fill();

    // Cabeza
    const gr = g.createRadialGradient(r * 0.25, -r * 0.35, r * 0.1, 0, 0, r * 1.05);
    gr.addColorStop(0, sombrear(a.piel, 0.18));
    gr.addColorStop(0.7, a.piel);
    gr.addColorStop(1, sombrear(a.piel, -0.18));
    g.fillStyle = gr;
    g.beginPath();
    g.arc(0, 0, r, 0, TAU);
    g.fill();
    g.fillStyle = sombrear(a.piel, -0.12);
    g.beginPath();
    g.ellipse(-r * 0.32, r * 0.08, r * 0.1, r * 0.14, 0, 0, TAU);
    g.fill();

    // Barba
    const colBarba = a.pelo === '#EDEDED' ? '#BDBDBD' : a.pelo;
    if (a.barba === 'sombra') {
      g.fillStyle = 'rgba(40,30,25,0.22)';
      g.beginPath();
      g.arc(r * 0.12, r * 0.1, r * 0.82, 0.1, Math.PI * 0.95);
      g.quadraticCurveTo(r * 0.2, r * 0.3, r * 0.92, r * 0.2);
      g.fill();
    } else if (a.barba === 'barba') {
      g.fillStyle = colBarba;
      g.beginPath();
      g.arc(r * 0.1, r * 0.08, r * 0.9, 0.05, Math.PI * 0.92);
      g.quadraticCurveTo(r * 0.3, r * 0.42, r * 0.88, r * 0.22);
      g.fill();
    }

    dibujarPelo(g, a, r, 'frente');

    if (a.vincha) {
      g.fillStyle = eq.kit.c2 === '#FFFFFF' ? eq.kit.c1 : eq.kit.c2;
      g.beginPath();
      g.arc(0, 0, r * 1.01, Math.PI * 1.08, Math.PI * 1.95);
      g.arc(0, 0, r * 0.84, Math.PI * 1.9, Math.PI * 1.12, true);
      g.closePath();
      g.fill();
    }

    // Ojos
    const mx = o.mirarX || 1;
    const my = o.mirarY || 0;
    const ojos = [[r * 0.2, -r * 0.08], [r * 0.6, -r * 0.08]];
    const ro = r * 0.17 * a.ojos;
    const cerrados = o.festejo && Math.sin(o.t * 9) > 0.3;
    for (const [ox, oy] of ojos) {
      if (cerrados) {
        g.strokeStyle = '#1B1210';
        g.lineWidth = 2.5;
        g.beginPath();
        g.arc(ox, oy + ro * 0.2, ro * 0.8, Math.PI * 1.15, Math.PI * 1.85);
        g.stroke();
        continue;
      }
      g.fillStyle = '#FFFFFF';
      g.beginPath();
      g.ellipse(ox, oy, ro * 0.85, ro * 1.1, 0, 0, TAU);
      g.fill();
      g.fillStyle = o.congelado ? '#4AA8D8' : '#1B1210';
      g.beginPath();
      g.arc(ox + mx * ro * 0.35, oy + my * ro * 0.45, ro * 0.48, 0, TAU);
      g.fill();
      g.fillStyle = '#FFFFFF';
      g.beginPath();
      g.arc(ox + mx * ro * 0.35 + ro * 0.15, oy + my * ro * 0.45 - ro * 0.18, ro * 0.14, 0, TAU);
      g.fill();
    }
    // Cejas
    const cejaCol = a.pelo === '#EDEDED' ? '#9A9A9A' : sombrear(a.pelo, -0.1);
    g.strokeStyle = cejaCol;
    g.lineCap = 'round';
    g.lineWidth = 3.2 * a.cejas * (r / 40);
    const bravo = o.enojo ? 0.35 : o.festejo ? -0.25 : 0.12;
    for (const [ox, oy] of ojos) {
      const interno = ox < r * 0.4 ? 1 : -1;
      g.beginPath();
      g.moveTo(ox - interno * ro * 0.9, oy - ro * 1.35 - bravo * ro * 0.5);
      g.lineTo(ox + interno * ro * 0.9, oy - ro * 1.35 + bravo * ro);
      g.stroke();
    }
    // Nariz
    g.strokeStyle = sombrear(a.piel, -0.3);
    g.lineWidth = 2;
    g.beginPath();
    g.moveTo(r * 0.8, r * 0.02);
    g.quadraticCurveTo(r * 0.98, r * 0.2, r * 0.78, r * 0.26);
    g.stroke();
    // Bigote / candado
    if (a.barba === 'bigote' || a.barba === 'candado') {
      g.fillStyle = colBarba;
      g.beginPath();
      g.ellipse(r * 0.6, r * 0.36, r * 0.24, r * 0.07, -0.1, 0, TAU);
      g.fill();
      if (a.barba === 'candado') {
        g.beginPath();
        g.ellipse(r * 0.55, r * 0.72, r * 0.14, r * 0.16, 0, 0, TAU);
        g.fill();
      }
    }
    // Boca
    g.strokeStyle = '#5A1F1A';
    g.fillStyle = '#5A1F1A';
    g.lineWidth = 2.6;
    const bx = r * 0.55;
    const by = r * 0.52;
    if (o.festejo) {
      g.beginPath();
      g.moveTo(bx - r * 0.25, by - r * 0.05);
      g.quadraticCurveTo(bx, by + r * 0.35, bx + r * 0.25, by - r * 0.08);
      g.closePath();
      g.fill();
      g.fillStyle = '#FFFFFF';
      g.fillRect(bx - r * 0.18, by - r * 0.05, r * 0.36, r * 0.07);
    } else if (o.congelado) {
      g.beginPath();
      g.moveTo(bx - r * 0.2, by);
      for (let i = 1; i <= 6; i++) g.lineTo(bx - r * 0.2 + (i * r * 0.4) / 6, by + (i % 2 ? -3 : 3));
      g.stroke();
    } else if (o.enojo || o.aturdido) {
      g.beginPath();
      g.arc(bx, by + r * 0.16, r * 0.17, Math.PI * 1.15, Math.PI * 1.85);
      g.stroke();
    } else if (o.esfuerzo) {
      g.beginPath();
      g.ellipse(bx, by, r * 0.09, r * 0.12, 0, 0, TAU);
      g.fill();
    } else {
      g.beginPath();
      g.arc(bx, by - r * 0.1, r * 0.18, Math.PI * 0.2, Math.PI * 0.8);
      g.stroke();
    }
  }

  function dibujarPierna(g, hx, hy, ang, largo, kit, botin) {
    const fx = hx + Math.sin(ang) * largo;
    const fy = hy + Math.cos(ang) * largo;
    g.strokeStyle = kit.medias;
    g.lineWidth = 9;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(hx, hy);
    g.lineTo(fx, fy);
    g.stroke();
    // Botín
    g.save();
    g.translate(fx, fy);
    g.rotate(ang * 0.6);
    g.fillStyle = botin;
    g.beginPath();
    g.ellipse(4, 1, 10, 6, 0, 0, TAU);
    g.fill();
    g.fillStyle = 'rgba(255,255,255,0.35)';
    g.fillRect(-2, -2, 7, 2);
    g.restore();
  }

  /* p: {equipo, x, y, dir, escala, pata, paso, ...} */
  function dibujarJugador(g, p, t, mirar) {
    const eq = p.equipo;
    const kit = eq.kit;
    const r = K.CABEZA_R * (p.escala || 1);
    g.save();
    g.translate(p.x, p.y);
    if (p.giro > 0) {
      g.translate(0, -50);
      g.rotate(p.giro * 14);
      g.translate(0, -(-50));
    }
    g.scale(p.dir, 1);

    const paso = p.paso || 0;
    const camina = Math.abs(Math.sin(paso)) > 0.01 ? Math.sin(paso) : 0;
    const hipY = -K.CADERA_Y;
    const botin = eq.aspecto.botin;

    // Pierna de apoyo
    dibujarPierna(g, -3, hipY, -camina * 0.5 - (p.enSuelo === false ? 0.35 : 0.05), K.PIERNA, kit, botin);
    // Brazo trasero
    const brazo = Math.sin(paso) * 0.6 + (p.festejo ? Math.sin(t * 14) * 0.8 - 1.8 : 0);
    g.strokeStyle = sombrear(eq.aspecto.piel, -0.15);
    g.lineWidth = 7;
    g.lineCap = 'round';
    g.beginPath();
    g.moveTo(-12, -50);
    g.lineTo(-12 - Math.sin(brazo) * 14, -50 + Math.cos(brazo) * 14);
    g.stroke();

    // Short
    g.fillStyle = kit.pantalon;
    rrect(g, -14, -38, 28, 14, 4);
    g.fill();

    // Torso con diseño
    g.save();
    g.beginPath();
    g.moveTo(-17, -60);
    g.lineTo(17, -60);
    g.lineTo(14, -34);
    g.lineTo(-14, -34);
    g.closePath();
    g.clip();
    patronCamiseta(g, kit, -17, -60, 34, 26);
    g.fillStyle = 'rgba(0,0,0,0.12)';
    g.fillRect(-17, -60, 8, 26);
    g.restore();
    if (kit.diseno === 'mangas') {
      g.fillStyle = kit.c2;
      g.fillRect(-19, -58, 6, 9);
      g.fillRect(13, -58, 6, 9);
    }

    // Pierna de patada (adelante)
    const ang = p.patada > 0 ? p.pata : 0.15 + camina * 0.5 + (p.enSuelo === false ? 0.4 : 0);
    dibujarPierna(g, 4, hipY, ang, K.PIERNA, kit, botin);

    // Brazo delantero
    g.strokeStyle = eq.aspecto.piel;
    g.lineWidth = 7;
    g.beginPath();
    g.moveTo(12, -50);
    g.lineTo(12 + Math.sin(-brazo) * 14 * (p.festejo ? -1 : 1), -50 + Math.cos(brazo) * 14 * (p.festejo ? -1 : 1));
    g.stroke();

    // Cabeza
    g.save();
    const cy = -K.CABEZA_Y - (r - K.CABEZA_R);
    g.translate(0, cy);
    let mx = 1;
    let my = 0;
    if (mirar) {
      const dx = (mirar.x - p.x) * p.dir;
      const dy = mirar.y - (p.y + cy);
      const d = Math.hypot(dx, dy) || 1;
      mx = dx / d;
      my = dy / d;
    }
    const estado = {
      t,
      mirarX: mx, mirarY: my,
      festejo: p.festejo > 0,
      enojo: p.enojo > 0 || p.aturdido > 0,
      congelado: p.congelado > 0,
      aturdido: p.aturdido > 0,
      esfuerzo: p.patada > 0 || p.enSuelo === false
    };
    dibujarCabeza(g, eq, r, estado);
    g.restore();
    g.restore();

    // Estados encima (sin espejo)
    const topY = p.y + cy - r;
    if (p.aturdido > 0 && !p.giro) {
      for (let i = 0; i < 3; i++) {
        const an = t * 6 + (i * TAU) / 3;
        estrella(g, p.x + Math.cos(an) * r * 0.8, topY - 6 + Math.sin(an) * 7, 6, '#FFD23F');
      }
    }
    if (p.congelado > 0) {
      g.save();
      g.globalAlpha = 0.45 + Math.min(0.2, p.congelado * 0.1);
      const hielo = g.createLinearGradient(p.x - 50, topY, p.x + 50, p.y);
      hielo.addColorStop(0, '#E6FAFF');
      hielo.addColorStop(1, '#6CC6F0');
      g.fillStyle = hielo;
      rrect(g, p.x - r - 10, topY - 10, (r + 10) * 2, p.y - topY + 12, 12);
      g.fill();
      g.globalAlpha = 0.9;
      g.strokeStyle = '#FFFFFF';
      g.lineWidth = 2;
      g.stroke();
      g.restore();
    }
  }

  function estrella(g, x, y, r, col) {
    g.fillStyle = col;
    g.beginPath();
    for (let i = 0; i < 10; i++) {
      const an = -Math.PI / 2 + (i * Math.PI) / 5;
      const rr = i % 2 ? r * 0.45 : r;
      g.lineTo(x + Math.cos(an) * rr, y + Math.sin(an) * rr);
    }
    g.closePath();
    g.fill();
  }

  /* =========================================================
     PELOTA
     ========================================================= */
  function dibujarPelota(g, b, R) {
    g.save();
    g.translate(b.x, b.y);
    const gr = g.createRadialGradient(-R * 0.35, -R * 0.4, R * 0.1, 0, 0, R);
    gr.addColorStop(0, '#FFFFFF');
    gr.addColorStop(0.75, '#E9ECE6');
    gr.addColorStop(1, '#AEB5AA');
    g.fillStyle = gr;
    g.beginPath();
    g.arc(0, 0, R, 0, TAU);
    g.fill();
    g.save();
    g.clip();
    g.rotate(b.rot || 0);
    g.fillStyle = '#1B2230';
    pentagono(g, 0, 0, R * 0.36, 0);
    for (let i = 0; i < 5; i++) {
      const an = (i * TAU) / 5 - Math.PI / 2;
      pentagono(g, Math.cos(an) * R * 0.95, Math.sin(an) * R * 0.95, R * 0.32, an + Math.PI);
    }
    g.strokeStyle = 'rgba(27,34,48,0.5)';
    g.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      const an = (i * TAU) / 5 - Math.PI / 2;
      g.beginPath();
      g.moveTo(Math.cos(an) * R * 0.36, Math.sin(an) * R * 0.36);
      g.lineTo(Math.cos(an) * R * 0.7, Math.sin(an) * R * 0.7);
      g.stroke();
    }
    g.restore();
    g.strokeStyle = 'rgba(0,0,0,0.25)';
    g.lineWidth = 1.2;
    g.beginPath();
    g.arc(0, 0, R - 0.5, 0, TAU);
    g.stroke();
    g.restore();
  }
  function pentagono(g, x, y, r, rot) {
    g.beginPath();
    for (let i = 0; i < 5; i++) {
      const an = rot + (i * TAU) / 5 - Math.PI / 2;
      g.lineTo(x + Math.cos(an) * r, y + Math.sin(an) * r);
    }
    g.closePath();
    g.fill();
  }

  /* =========================================================
     MARCADOR (7 segmentos)
     ========================================================= */
  const SEG = {
    0: 'abcdef', 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc', 5: 'afgcd', 6: 'afgedc', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg', '-': 'g'
  };
  function digito(g, x, y, w, h, ch, on, off) {
    const t = Math.max(2, w * 0.18);
    const segs = {
      a: [x + t, y, w - 2 * t, t, 'h'],
      g: [x + t, y + h / 2 - t / 2, w - 2 * t, t, 'h'],
      d: [x + t, y + h - t, w - 2 * t, t, 'h'],
      f: [x, y + t, t, h / 2 - t * 1.5, 'v'],
      b: [x + w - t, y + t, t, h / 2 - t * 1.5, 'v'],
      e: [x, y + h / 2 + t / 2, t, h / 2 - t * 1.5, 'v'],
      c: [x + w - t, y + h / 2 + t / 2, t, h / 2 - t * 1.5, 'v']
    };
    const act = SEG[ch] || '';
    for (const k in segs) {
      const [sx, sy, sw, sh] = segs[k];
      const lit = act.indexOf(k) >= 0;
      g.fillStyle = lit ? on : off;
      if (lit) { g.shadowColor = on; g.shadowBlur = 8; }
      rrect(g, sx, sy, sw, sh, t / 2);
      g.fill();
      g.shadowBlur = 0;
    }
  }
  function numero(g, x, y, w, h, texto, on, off, sep) {
    let cx = x;
    for (const ch of texto) {
      if (ch === ':') {
        g.fillStyle = on;
        g.fillRect(cx + 2, y + h * 0.28, 4, 4);
        g.fillRect(cx + 2, y + h * 0.66, 4, 4);
        cx += 10;
        continue;
      }
      digito(g, cx, y, w, h, ch, on, off);
      cx += w + (sep || 5);
    }
  }
  function anchoNumero(texto, w, sep) {
    let a = 0;
    for (const ch of texto) a += ch === ':' ? 10 : w + (sep || 5);
    return a - (sep || 5);
  }

  function escudo(g, eq, x, y, s) {
    const kit = eq.kit;
    g.save();
    g.translate(x, y);
    g.scale(s, s);
    g.beginPath();
    g.moveTo(-22, -26);
    g.lineTo(22, -26);
    g.lineTo(22, 4);
    g.quadraticCurveTo(22, 20, 0, 30);
    g.quadraticCurveTo(-22, 20, -22, 4);
    g.closePath();
    g.save();
    g.clip();
    patronCamiseta(g, kit, -22, -26, 44, 56);
    g.restore();
    g.strokeStyle = '#F3F6EF';
    g.lineWidth = 2.5;
    g.stroke();
    const fondoTxt = luminancia(kit.c1) > 0.6 ? '#0B1A33' : '#F3F6EF';
    g.font = (eq.corto.length > 3 ? 12 : 14) + 'px ' + FUENTE;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.lineWidth = 3;
    g.strokeStyle = fondoTxt === '#F3F6EF' ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)';
    g.strokeText(eq.corto, 0, 2);
    g.fillStyle = fondoTxt;
    g.fillText(eq.corto, 0, 2);
    g.restore();
  }

  function marcador(g, pt, t) {
    const W = K.W;
    const cx = W / 2;
    const y = 10;
    g.save();
    // Panel
    g.fillStyle = 'rgba(6,14,31,0.92)';
    rrect(g, cx - 270, y, 540, 76, 14);
    g.fill();
    g.strokeStyle = '#FFB703';
    g.lineWidth = 2;
    g.stroke();
    const [eL, eV] = pt.equipos;
    escudo(g, eL, cx - 232, y + 38, 1);
    escudo(g, eV, cx + 232, y + 38, 1);
    g.font = '13px ' + FUENTE;
    g.fillStyle = '#F3F6EF';
    g.textAlign = 'left';
    g.textBaseline = 'middle';
    g.fillText(recortar(eL.nombre, 13), cx - 202, y + 22);
    g.textAlign = 'right';
    g.fillText(recortar(eV.nombre, 13), cx + 202, y + 22);

    const on = '#FFB703';
    const off = 'rgba(255,183,3,0.1)';
    const gl = String(pt.goles[0]);
    const gv = String(pt.goles[1]);
    numero(g, cx - 110 - anchoNumero(gl, 24) / 2, y + 30, 24, 40, gl, on, off);
    numero(g, cx + 110 - anchoNumero(gv, 24) / 2, y + 30, 24, 40, gv, on, off);

    if (pt.oro) {
      g.font = '20px ' + FUENTE;
      g.textAlign = 'center';
      g.fillStyle = Math.sin(t * 8) > 0 ? '#FFB703' : '#F3F6EF';
      g.fillText('GOL DE ORO', cx, y + 44);
    } else {
      const s = Math.max(0, Math.ceil(pt.reloj));
      const txt = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
      const col = s <= 10 && pt.estado === 'juego' ? '#E63946' : '#F3F6EF';
      numero(g, cx - anchoNumero(txt, 18, 4) / 2, y + 26, 18, 32, txt, col, 'rgba(243,246,239,0.07)', 4);
    }

    // Barras de súper
    for (let i = 0; i < 2; i++) {
      const p = pt.jugadores[i];
      const bw = 190;
      const bx = i === 0 ? cx - 202 : cx + 202 - bw;
      const by = y + 56;
      g.fillStyle = 'rgba(243,246,239,0.12)';
      rrect(g, bx, by, bw, 9, 4.5);
      g.fill();
      const lleno = p.carga >= 1;
      const col = lleno ? (Math.sin(t * 10) > 0 ? '#FFB703' : '#E63946') : CZ.motor.colorSuper(p.equipo.super);
      g.fillStyle = col;
      const w = bw * p.carga;
      if (w > 1) {
        if (i === 0) rrect(g, bx, by, w, 9, 4.5);
        else rrect(g, bx + bw - w, by, w, 9, 4.5);
        g.fill();
      }
      if (lleno) {
        g.font = '10px ' + FUENTE;
        g.fillStyle = '#0B1A33';
        g.textAlign = 'center';
        g.fillText('SÚPER', bx + bw / 2, by + 5);
      }
    }
    g.restore();
  }
  function recortar(s, n) {
    return s.length > n ? s.slice(0, n - 1) + '…' : s;
  }

  /* =========================================================
     ESCENA
     ========================================================= */
  const cacheEstadio = { clave: '', est: null };
  function estadioPara(pt) {
    const clave = pt.equipos[0].id + '|' + pt.equipos[1].id;
    if (cacheEstadio.clave !== clave) {
      cacheEstadio.clave = clave;
      cacheEstadio.est = crearEstadio(pt.equipos[0], pt.equipos[1]);
    }
    return cacheEstadio.est;
  }

  const LED = [
    'CABEZONES 2026', '★', 'LIGAS 2026', '★', 'MUNDIAL 2026', '★', '¡VAMOS!', '★', 'FAIR PLAY', '★', 'GOL DE ORO', '★'
  ];
  function carteles(g, t, pt, fiesta) {
    const y = TRIB_Y1 + 4;
    const h = 32;
    g.save();
    g.fillStyle = '#050A14';
    g.fillRect(0, y, K.W, h);
    g.beginPath();
    g.rect(0, y + 2, K.W, h - 4);
    g.clip();
    g.font = '20px ' + FUENTE;
    g.textBaseline = 'middle';
    const texto = fiesta ? ('¡GOOOL! ' + fiesta + ' · ').repeat(8) : pt.equipos[0].nombre.toUpperCase() + ' vs ' + pt.equipos[1].nombre.toUpperCase() + ' · ' + LED.join('  ') + '  ·  ';
    g.fillStyle = fiesta ? (Math.sin(t * 12) > 0 ? '#FFB703' : '#E63946') : '#FFB703';
    const ancho = g.measureText(texto).width;
    let x = -((t * 90) % ancho);
    while (x < K.W) {
      g.fillText(texto, x, y + h / 2 + 1);
      x += ancho;
    }
    // Rejilla de LEDs
    g.fillStyle = 'rgba(0,0,0,0.35)';
    for (let i = 0; i < K.W; i += 4) g.fillRect(i, y, 1, h);
    for (let j = y; j < y + h; j += 4) g.fillRect(0, j, K.W, 1);
    g.restore();
    // borde
    g.fillStyle = '#1A335C';
    g.fillRect(0, y - 2, K.W, 2);
    g.fillRect(0, y + h, K.W, 2);
  }

  function arcoFrente(g, s) {
    const x0 = s > 0 ? 0 : K.W;
    const xl = x0 + s * K.ARCO;
    g.save();
    // travesaño
    g.fillStyle = '#F3F6EF';
    g.fillRect(Math.min(x0, xl), K.TRAV - K.POSTE, K.ARCO, K.POSTE * 2);
    g.fillStyle = 'rgba(0,0,0,0.2)';
    g.fillRect(Math.min(x0, xl), K.TRAV + 2, K.ARCO, K.POSTE - 2);
    // poste delantero
    g.fillStyle = '#F3F6EF';
    g.fillRect(xl - 4, K.TRAV - K.POSTE, 8, K.SUELO - K.TRAV + K.POSTE + 2);
    g.fillStyle = 'rgba(0,0,0,0.15)';
    g.fillRect(xl + (s > 0 ? 1 : -4), K.TRAV, 3, K.SUELO - K.TRAV);
    g.restore();
  }

  function sombra(g, x, altura, ancho) {
    const k = clamp(1 - altura / 400, 0.25, 1);
    g.fillStyle = 'rgba(0,0,0,' + (0.35 * k).toFixed(3) + ')';
    g.beginPath();
    g.ellipse(x, K.SUELO + 2, ancho * k, 6 * k, 0, 0, TAU);
    g.fill();
  }

  function dibujarItem(g, it, t) {
    const cfg = CZ.PODERES[it.tipo];
    const y = it.y + Math.sin(it.t * 3) * 8;
    const fin = it.vida - it.t < 2 && Math.sin(t * 20) > 0;
    g.save();
    g.globalAlpha = fin ? 0.4 : 1;
    const gl = g.createRadialGradient(it.x, y, 4, it.x, y, 44);
    gl.addColorStop(0, cfg.color);
    gl.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gl;
    g.globalAlpha *= 0.5;
    g.beginPath();
    g.arc(it.x, y, 44, 0, TAU);
    g.fill();
    g.globalAlpha = fin ? 0.4 : 1;
    g.fillStyle = 'rgba(11,26,51,0.85)';
    g.beginPath();
    g.arc(it.x, y, 24, 0, TAU);
    g.fill();
    g.strokeStyle = cfg.color;
    g.lineWidth = 3;
    g.stroke();
    g.fillStyle = cfg.color;
    g.font = '20px ' + FUENTE;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(cfg.icono, it.x, y + 1);
    g.fillStyle = 'rgba(255,255,255,0.5)';
    g.beginPath();
    g.ellipse(it.x - 8, y - 11, 7, 3.5, -0.5, 0, TAU);
    g.fill();
    g.restore();
  }

  function indicadoresPoder(g, p) {
    const lista = [];
    for (const k of ['cabezon', 'mini', 'veloz']) if (p.poder[k] > 0) lista.push([k, p.poder[k] / CZ.PODERES[k].dur]);
    if (p.armado > 0) lista.push(['armado', p.armado / 1.2]);
    if (!lista.length) return;
    const topY = CZ.motor.cabezaY(p) - CZ.motor.radioCabeza(p) - 22;
    lista.forEach(([k, f], i) => {
      const x = p.x + (i - (lista.length - 1) / 2) * 30;
      const col = k === 'armado' ? CZ.motor.colorSuper(p.equipo.super) : CZ.PODERES[k].color;
      g.fillStyle = 'rgba(11,26,51,0.85)';
      g.beginPath();
      g.arc(x, topY, 12, 0, TAU);
      g.fill();
      g.strokeStyle = col;
      g.lineWidth = 3;
      g.beginPath();
      g.arc(x, topY, 12, -Math.PI / 2, -Math.PI / 2 + TAU * f);
      g.stroke();
      g.fillStyle = col;
      g.font = '11px ' + FUENTE;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText(k === 'armado' ? '★' : CZ.PODERES[k].icono, x, topY + 1);
    });
  }

  function particulas(g, lista) {
    for (const q of lista) {
      const a = clamp(q.vida / q.max, 0, 1);
      g.globalAlpha = a;
      g.fillStyle = q.color;
      if (q.tipo === 'papel') {
        g.save();
        g.translate(q.x, q.y);
        g.rotate(q.vida * 9 + q.x);
        g.fillRect(-q.tam / 2, -q.tam / 4, q.tam, q.tam / 2);
        g.restore();
      } else if (q.tipo === 'chispa') {
        g.strokeStyle = q.color;
        g.lineWidth = 2;
        g.beginPath();
        g.moveTo(q.x, q.y);
        g.lineTo(q.x + (Math.random() - 0.5) * q.tam * 2, q.y + (Math.random() - 0.5) * q.tam * 2);
        g.stroke();
      } else {
        g.beginPath();
        g.arc(q.x, q.y, q.tam * (0.4 + a * 0.6), 0, TAU);
        g.fill();
      }
    }
    g.globalAlpha = 1;
  }

  function textos(g, lista) {
    for (const tx of lista) {
      const k = tx.t / tx.vida;
      const pop = tx.t < 0.18 ? 0.4 + (tx.t / 0.18) * 0.75 : 1.15 - Math.min(0.15, (tx.t - 0.18) * 0.6);
      const a = k > 0.8 ? (1 - k) / 0.2 : 1;
      g.save();
      g.globalAlpha = clamp(a, 0, 1);
      g.translate(tx.x != null ? clamp(tx.x, 200, K.W - 200) : K.W / 2, tx.y - (tx.x != null ? tx.t * 30 : 0));
      g.scale(pop, pop);
      g.font = tx.tam + 'px ' + FUENTE;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.lineJoin = 'round';
      g.lineWidth = tx.tam * 0.14;
      g.strokeStyle = '#0B1A33';
      g.strokeText(tx.txt, 0, 0);
      g.fillStyle = tx.color;
      g.fillText(tx.txt, 0, 0);
      g.restore();
    }
  }

  function estelaPelota(g, b) {
    const s = b.super;
    if (!s) return;
    const col = CZ.motor.colorSuper(s.tipo);
    const e = b.estela;
    g.save();
    g.globalCompositeOperation = 'lighter';
    for (let i = 0; i < e.length; i += 2) {
      const k = i / e.length;
      g.globalAlpha = k * 0.5;
      g.fillStyle = col;
      g.beginPath();
      g.arc(e[i], e[i + 1], K.PELOTA_R * (0.4 + k * 0.9), 0, TAU);
      g.fill();
    }
    g.globalAlpha = 0.6;
    const gl = g.createRadialGradient(b.x, b.y, 4, b.x, b.y, 50);
    gl.addColorStop(0, col);
    gl.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gl;
    g.beginPath();
    g.arc(b.x, b.y, 50, 0, TAU);
    g.fill();
    g.restore();
  }

  function aura(g, p, t) {
    if (p.carga < 1 && p.armado <= 0) return;
    const col = CZ.motor.colorSuper(p.equipo.super);
    const cy = CZ.motor.cabezaY(p);
    g.save();
    g.globalCompositeOperation = 'lighter';
    g.globalAlpha = p.armado > 0 ? 0.55 : 0.18 + Math.sin(t * 6) * 0.08;
    const gl = g.createRadialGradient(p.x, cy + 20, 10, p.x, cy + 20, 100);
    gl.addColorStop(0, col);
    gl.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gl;
    g.beginPath();
    g.arc(p.x, cy + 20, 100, 0, TAU);
    g.fill();
    g.restore();
  }

  function partido(g, pt, t) {
    const est = estadioPara(pt);
    g.save();
    if (pt.sacudida > 0) g.translate((Math.random() - 0.5) * pt.sacudida, (Math.random() - 0.5) * pt.sacudida);
    g.drawImage(est.fondo, 0, 0);

    // Hinchada que salta por franjas
    const festejo = pt.estado === 'gol';
    const ladoGol = festejo && pt.historial.length ? pt.historial[pt.historial.length - 1].lado : -1;
    const fw = K.W / est.franjas;
    for (let i = 0; i < est.franjas; i++) {
      const enLado = ladoGol === 0 ? i < est.franjas / 2 : ladoGol === 1 ? i >= est.franjas / 2 : false;
      const amp = enLado ? 7 : 1.6;
      const vel = enLado ? 16 : 3.2;
      const dy = Math.abs(Math.sin(t * vel + i * 1.7)) * -amp;
      g.drawImage(est.hinchada, i * fw, 0, fw + 1, est.hinchada.height - 20, i * fw, TRIB_Y0 + dy, fw + 1, est.hinchada.height - 20);
    }
    // Flashes de cámaras
    if (Math.random() < (festejo ? 0.6 : 0.08)) {
      const fx = Math.random() * K.W;
      const fy = TRIB_Y0 + 20 + Math.random() * (TRIB_Y1 - TRIB_Y0 - 40);
      g.fillStyle = 'rgba(255,255,255,0.9)';
      g.beginPath();
      g.arc(fx, fy, 2.5, 0, TAU);
      g.fill();
    }
    carteles(g, t, pt, festejo ? pt.equipos[ladoGol].nombre.toUpperCase() : null);

    // Poderes
    for (const it of pt.items) dibujarItem(g, it, t);

    // Sombras
    const b = pt.pelota;
    for (const p of pt.jugadores) sombra(g, p.x, K.SUELO - p.y, 30);
    sombra(g, b.x, K.SUELO - b.y, 18);

    // Jugadores
    for (const p of pt.jugadores) aura(g, p, t);
    for (const p of pt.jugadores) {
      dibujarJugador(g, p, t, b);
      indicadoresPoder(g, p);
    }

    // Pelota
    estelaPelota(g, b);
    dibujarPelota(g, b, K.PELOTA_R);

    particulas(g, pt.particulas);
    arcoFrente(g, 1);
    arcoFrente(g, -1);
    g.restore();

    if (pt.flash > 0) {
      g.fillStyle = 'rgba(255,255,255,' + (pt.flash * 0.35).toFixed(3) + ')';
      g.fillRect(0, 0, K.W, K.H);
    }

    // Nombres sobre los jugadores (solo si son humanos en 2P)
    marcador(g, pt, t);
    textos(g, pt.textos);
  }

  /* Cabezón suelto para menús y fichas */
  function cabezon(g, eq, x, y, o) {
    o = o || {};
    const p = {
      equipo: eq, x, y, dir: o.dir || 1, escala: o.escala || 1,
      pata: 0.15, patada: 0, paso: o.paso || 0, enSuelo: true,
      festejo: o.festejo ? 1 : 0, enojo: o.enojo ? 1 : 0, congelado: 0, aturdido: 0, giro: 0,
      poder: {}
    };
    dibujarJugador(g, p, o.t || 0, o.mirar || { x: x + 200 * p.dir, y: y - 100 });
  }

  // Retrato para las fichas de equipos (cacheado como dataURL)
  const retratos = {};
  function retrato(eq, tam) {
    const clave = eq.id + '@' + tam;
    if (retratos[clave]) return retratos[clave];
    const c = lienzo(tam, tam);
    const g = c.getContext('2d');
    const s = tam / 150;
    g.scale(s, s);
    cabezon(g, eq, 75, 150, { mirar: { x: 180, y: 70 } });
    retratos[clave] = c.toDataURL();
    return retratos[clave];
  }

  CZ.dibujo = { partido, cabezon, retrato, escudo, patronCamiseta, pelota: dibujarPelota, FUENTE, luminancia };
})();
