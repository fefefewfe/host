/* Cabezones 2026 — sonido sintetizado con WebAudio (sin archivos) */
(function () {
  'use strict';
  const CZ = (window.CZ = window.CZ || {});

  let ctx = null;
  let master = null;
  let hinchada = null;
  let ruido = null;
  let silencio = false;
  try { silencio = localStorage.getItem('cz26_mute') === '1'; } catch (e) { /* sin almacenamiento */ }

  function iniciar() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = silencio ? 0 : 0.55;
    master.connect(ctx.destination);

    const largo = ctx.sampleRate * 2;
    ruido = ctx.createBuffer(1, largo, ctx.sampleRate);
    const d = ruido.getChannelData(0);
    for (let i = 0; i < largo; i++) d[i] = Math.random() * 2 - 1;

    // Murmullo de la hinchada: ruido filtrado en loop
    const src = ctx.createBufferSource();
    src.buffer = ruido;
    src.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 700;
    bp.Q.value = 0.5;
    hinchada = ctx.createGain();
    hinchada.gain.value = 0;
    src.connect(bp);
    bp.connect(hinchada);
    hinchada.connect(master);
    src.start();
  }

  function tono(tipo, f0, f1, dur, vol, cuando) {
    const t = ctx.currentTime + (cuando || 0);
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = tipo;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(master);
    o.start(t);
    o.stop(t + dur + 0.02);
  }

  function soplo(freq, q, dur, vol, cuando, tipo) {
    const t = ctx.currentTime + (cuando || 0);
    const s = ctx.createBufferSource();
    s.buffer = ruido;
    s.loop = true;
    const f = ctx.createBiquadFilter();
    f.type = tipo || 'bandpass';
    f.frequency.setValueAtTime(freq, t);
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f);
    f.connect(g);
    g.connect(master);
    s.start(t, Math.random() * 1.5);
    s.stop(t + dur + 0.05);
    return f;
  }

  function silbato(cuando, dur) {
    const t = ctx.currentTime + (cuando || 0);
    const o = ctx.createOscillator();
    const lfo = ctx.createOscillator();
    const lg = ctx.createGain();
    const g = ctx.createGain();
    o.type = 'sine';
    o.frequency.value = 2650;
    lfo.frequency.value = 38;
    lg.gain.value = 140;
    lfo.connect(lg);
    lg.connect(o.frequency);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
    g.gain.setValueAtTime(0.16, t + dur - 0.04);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(master);
    o.start(t);
    lfo.start(t);
    o.stop(t + dur + 0.02);
    lfo.stop(t + dur + 0.02);
  }

  const SONIDOS = {
    patada(fuerza) {
      const v = 0.25 + Math.min(1, fuerza || 0.6) * 0.3;
      tono('sine', 190, 55, 0.14, v);
      soplo(1800, 0.8, 0.05, v * 0.5);
    },
    cabeza() {
      tono('sine', 260, 90, 0.1, 0.22);
      soplo(1200, 1, 0.04, 0.12);
    },
    rebote(fuerza) {
      tono('sine', 140, 60, 0.08, Math.min(0.2, 0.04 + (fuerza || 0) * 0.15));
    },
    palo() {
      tono('triangle', 880, 820, 0.35, 0.16);
      tono('triangle', 1320, 1250, 0.25, 0.07);
    },
    salto() {
      tono('square', 300, 520, 0.09, 0.035);
    },
    poder() {
      [660, 880, 1100, 1320].forEach((f, i) => tono('square', f, f, 0.07, 0.05, i * 0.05));
    },
    super() {
      const f = soplo(300, 2, 0.6, 0.35, 0, 'bandpass');
      f.frequency.exponentialRampToValueAtTime(3200, ctx.currentTime + 0.5);
      tono('sawtooth', 110, 440, 0.4, 0.12);
    },
    congelar() {
      [1760, 2350, 2960].forEach((f, i) => tono('sine', f, f * 0.98, 0.25, 0.06, i * 0.04));
    },
    silbato() { silbato(0, 0.35); },
    inicio() { silbato(0, 0.22); silbato(0.3, 0.5); },
    final() { silbato(0, 0.25); silbato(0.32, 0.25); silbato(0.64, 0.8); },
    gol() {
      soplo(900, 0.4, 2.6, 0.5);
      soplo(2200, 0.6, 1.8, 0.2, 0.1);
      [262, 330, 392].forEach((f) => tono('sawtooth', f, f, 1.1, 0.05, 0.05));
    },
    pip() { tono('square', 1040, 1040, 0.07, 0.05); },
    click() { tono('triangle', 720, 980, 0.05, 0.06); },
    cuenta(final) { tono('square', final ? 1320 : 660, final ? 1320 : 660, final ? 0.3 : 0.12, 0.06); },
    trofeo() {
      [523, 659, 784, 1047].forEach((f, i) => tono('triangle', f, f, 0.5, 0.09, i * 0.14));
      soplo(900, 0.4, 3, 0.4, 0.2);
    }
  };

  CZ.audio = {
    iniciar,
    get silencio() { return silencio; },
    alternar() {
      silencio = !silencio;
      try { localStorage.setItem('cz26_mute', silencio ? '1' : '0'); } catch (e) { /* nada */ }
      if (master) master.gain.setTargetAtTime(silencio ? 0 : 0.55, ctx.currentTime, 0.05);
      return silencio;
    },
    play(nombre, arg) {
      if (!ctx || silencio || ctx.state !== 'running') return;
      const fn = SONIDOS[nombre];
      if (fn) {
        try { fn(arg); } catch (e) { /* un sonido fallido no corta el juego */ }
      }
    },
    hinchada(nivel) {
      if (!ctx || !hinchada) return;
      hinchada.gain.setTargetAtTime(Math.max(0, Math.min(0.5, nivel)), ctx.currentTime, 0.35);
    }
  };
})();
