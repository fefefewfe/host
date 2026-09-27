# Cabezones 2026: estado del trabajo

Abrí `index.html` en el navegador (o servilo con cualquier servidor estático). No necesita compilación ni dependencias.

## Hecho
- `js/datos.js`: 8 ligas 2026 con planteles verificados (LaLiga, Premier, Serie A, Bundesliga, Ligue 1, Liga Profesional, Brasileirão, Liga MX) y el Mundial 2026 con sus 12 grupos reales. Cada equipo tiene camiseta, nivel, estadísticas, cabezón y súper tiro.
- `js/audio.js`: sonidos sintetizados con WebAudio y botón de silencio.
- `js/motor.js`: física a 120 Hz, patada, cabezazo, súper tiros (fuego, hielo, rayo, tornado), 5 poderes, IA con 4 dificultades, gol de oro.
- `js/dibujo.js`: estadio nocturno con hinchada animada en los colores de cada equipo, carteles LED, cabezones con 12 peinados, pelota, marcador de 7 segmentos.
- `js/competiciones.js`: liga (todos contra todos), copa de 16, Mundial (12 grupos + dieciseisavos con los 8 mejores terceros), Mundial de Clubes (4 mejores de cada liga, 8 grupos + octavos). Guardado en localStorage y vitrina de títulos.
- `js/app.js`: menús dentro del juego, partido rápido, 2 jugadores, controles táctiles, pantalla completa, pausa y secciones de la página.
- `index.html` y `css/estilos.css`: página completa (héroe, juego, ligas como entradas de estadio, copas, grupos del Mundial, cómo jugar, vitrina).
- Estilo Football Heads (Dvadi): cabezones de una sola pierna, clima en pleno partido (viento, lluvia, nieve) y hinchas que tiran botellas al que convierte y queda ganando. Súper tiros y poderes quedan como opción, apagados por defecto.
- Champions League 2026-27 (36 clubes de la fase liga, 8 fechas, play-off del 9.º al 24.º, octavos a final) y Copa Libertadores 2026 (8 grupos del sorteo del 19 de marzo, ida y vuelta, octavos a final).

## Dificultad de la compu
Calibrada con simulaciones contra un "jugador medio" (la misma IA a velocidad de humano), sin súper tiros:
el jugador medio le gana a Fácil el 72 % de las veces, a Normal el 64 %, a Difícil el 25 % y a Leyenda el 14 %.
La palanca principal es cuánto se aleja la compu de su arco (`avance` en `CZ.DIFICULTADES`).

## Diferencias con Dvadi
- Dvadi usa caricaturas de jugadores reales; acá cada equipo tiene un cabezón generado (sin caras de personas reales).
- dvadi.com no se pudo abrir desde el entorno de desarrollo, así que el estilo se armó con la descripción pública de Football Heads.

## Ideas para después
- Soporte de joystick (Gamepad API).
- Modo carrera con varias temporadas y ascensos/descensos.
- Que la compu use los poderes a propósito.

## Controles
- 1 jugador: ← → o A D para moverse, ↑ o W para saltar, Espacio para patear, ↓ o S para el súper tiro, P para pausa.
- 2 jugadores: J1 usa A D W, Espacio y S. J2 usa las flechas, Enter o Shift derecho y ↓.
