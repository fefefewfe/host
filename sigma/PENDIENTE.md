# Cabezones 2026: estado del trabajo

Abrí `index.html` en el navegador (o servilo con cualquier servidor estático). No necesita compilación ni dependencias.

## Hecho
- `js/datos.js`: 8 ligas 2026 con planteles verificados (LaLiga, Premier, Serie A, Bundesliga, Ligue 1, Liga Profesional, Brasileirão, Liga MX) y el Mundial 2026 con sus 12 grupos reales. Cada equipo tiene camiseta, nivel, estadísticas, cabezón y súper tiro.
- `js/audio.js`: sonidos sintetizados con WebAudio y botón de silencio.
- `js/motor.js`: física a 120 Hz, patada, cabezazo, súper tiros (fuego, hielo, rayo, tornado), 5 poderes, IA con 4 dificultades, gol de oro.
- `js/dibujo.js`: estadio nocturno con hinchada animada en los colores de cada equipo, carteles LED, cabezones con 12 peinados, pelota, marcador de 7 segmentos.
- `js/competiciones.js`: liga (todos contra todos), copa de 16, Mundial (12 grupos + dieciseisavos con los 8 mejores terceros), Mundial de Clubes (4 mejores de cada liga, 8 grupos + octavos). Guardado en localStorage y vitrina de títulos.
- `js/app.js`: menús dentro del juego, partido rápido, 2 jugadores, controles táctiles, pantalla completa, pausa y secciones de la página.
- `index.html` y `css/estilos.css`: página completa (héroe, juego, ligas como entradas de estadio, grupos del Mundial, cómo jugar, vitrina).

## Dificultad de la compu
Calibrada con simulaciones contra un bot "principiante" (corre a la pelota y patea):
Fácil queda pareja, Normal favorece a la compu, Difícil y Leyenda ganan casi siempre.
La palanca principal es cuánto se aleja la compu de su arco (`avance` en `CZ.DIFICULTADES`).

## Ideas para después
- Soporte de joystick (Gamepad API).
- Modo carrera con varias temporadas y ascensos/descensos.
- Que la compu use los poderes a propósito.

## Controles
- 1 jugador: ← → o A D para moverse, ↑ o W para saltar, Espacio para patear, ↓ o S para el súper tiro, P para pausa.
- 2 jugadores: J1 usa A D W, Espacio y S. J2 usa las flechas, Enter o Shift derecho y ↓.
