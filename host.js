// ============================================================================
// 🔌 POLYFILLS E INTEGRACIÓN AUTOCONTENIDA PARA NODE.JS PURO (PM2 / VPS)
// ============================================================================

// 1. Entorno Global (window / document)
if (typeof globalThis.window === 'undefined') {
  globalThis.window = globalThis;
}
if (typeof globalThis.document === 'undefined') {
  globalThis.document = {
    createElement: () => ({}),
    getElementsByTagName: () => [],
    getElementById: () => null
  };
}

// 2. Storage en memoria para sustituir localStorage en Node.js (Servidor / VPS)
class MemoryStorage {
  constructor() {
    this._data = new Map();
  }
  getItem(key) {
    const val = this._data.get(String(key));
    return val !== undefined ? val : null;
  }
  setItem(key, value) {
    this._data.set(String(key), String(value));
  }
  removeItem(key) {
    this._data.delete(String(key));
  }
  clear() {
    this._data.clear();
  }
  key(index) {
    const keys = Array.from(this._data.keys());
    return keys[index] || null;
  }
  get length() {
    return this._data.size;
  }
}

const _storageInstance = new MemoryStorage();
global.localStorage = _storageInstance;
globalThis.localStorage = _storageInstance;

// 3. Polyfill para XMLHttpRequest usando fetch nativo de Node.js (Node 18+)
if (typeof globalThis.XMLHttpRequest === 'undefined') {
  globalThis.XMLHttpRequest = class XMLHttpRequest {
    constructor() {
      this.headers = {};
      this.method = 'GET';
      this.url = '';
      this.onload = null;
      this.onerror = null;
      this.status = 0;
      this.responseText = '';
    }
    open(method, url) {
      this.method = method;
      this.url = url;
    }
    setRequestHeader(header, value) {
      this.headers[header] = value;
    }
    send(body) {
      const options = {
        method: this.method,
        headers: this.headers,
        body: body
      };
      if (typeof fetch !== 'undefined') {
        fetch(this.url, options)
          .then(async (res) => {
            this.status = res.status;
            try {
              this.responseText = await res.text();
            } catch (e) {
              this.responseText = '';
            }
            if (typeof this.onload === 'function') this.onload();
          })
          .catch((err) => {
            if (typeof this.onerror === 'function') this.onerror(err);
          });
      }
    }
  };
}

// 4. Polyfill para File en Node.js
if (typeof globalThis.File === 'undefined' && typeof globalThis.Blob !== 'undefined') {
  globalThis.File = class File extends Blob {
    constructor(chunks, name, opts = {}) {
      super(chunks, opts);
      this.name = name;
      this.lastModified = opts.lastModified || Date.now();
    }
  };
}

// 5. Carga / Fallback de HBInit para Node.js
if (typeof globalThis.HBInit === 'undefined') {
  try {
    globalThis.HBInit = require("haxball-headless-api");
  } catch (e) {
    // Si se ejecuta mediante node-haxball o un runner externo
  }
}

// ============================================================================
// ⚽ CÓDIGO ORIGINAL DEL BOT Y CONFIGURACIÓN DEL HOST
// ============================================================================

// ▇▇▇▇▇▇▇▇▇ ⚙️ CARGA DE POLYFILLS DE NODE.JS ▇▇▇▇▇▇▇▇▇

// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN DEL HOST ▇▇▇▇▇▇▇▇▇

// 📝 NOMBRE DEL HOST
var NombreHost = '🏆 #FVA | x1 | GANA SIGUE';
// Definimos el nombre del host (dentro de las comillas)


// 👁️ VISIBILIDAD DEL HOST 
var VisibilidadDelHost = true; 
// La sala es pública si está en "true", privada si está en "false"


// 👥 CANTIDAD MÁXIMA DE JUGADORES
var CantidadDeJugadores = 15; 
// Cantidad máxima de jugadores que permitirás ingresar a tu Host. Puedes elegir entre 1 y 30 jugadores


// 🔄 REINICIAR STATS
var ReiniciarStats = "No"; // Cambia a "Si" si querés reiniciar las estadísticas al Iniciar la sala.


// 🔒 CONTRASEÑA DEL HOST
var PasswordDelHost = null;
// Contraseña para acceder al Host (dejar null si no quieres colocarle una contraseña). Si quieres una contraseña, reemplaza null y coloca la contraseña entre comillas (Ejemplo: var PasswordDelHost = "123";)

// ▇▇▇▇▇▇▇▇▇ 👑 ADMINISTRACIÓN DEL HOST 🔑 ▇▇▇▇▇▇▇▇▇

// 🔑 CONTRASEÑA PARA SER ADMINISTRADOR DEL HOST
var ClaveParaSerAdmin = "!fvaclub"; 
// Clave para ser administrador. Pon la contraseña entre comillas.


// 👑 ADMINISTRADORES DEL HOST 
// Lista de admins, con sus nicknames permitidos y, opcionalmente, su auth público
// (El Public ID (auth) se obtiene en: haxball.com/playerauth) 
var ListaDeAdmins = [
  {
    auth: "", // Auth opcional; puede estar vacío "" si no se usa
    nicks: ["112"]
  }
];

// 🔐 CONTRASEÑA PARA ADMINISTRADORES
var contrasena = "fvaclub";
// Contraseña para reservar el espacio a los Administradores


// 🚦 Configuración para reservar lugares
var LugaresReservados = 2; // Cambiá este número para reservar más o menos lugares (0 = no reservar)

// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN DEL BOT 🤖 ▇▇▇▇▇▇▇▇▇

// 👀 VISIBILIDAD DEL BOT 
var BotVisible = true; 
// Elige true si quieres que el bot sea visible como jugador o false para que esté oculto.


// 📛 NOMBRE DEL BOT
var NombreBot = "🚩 Árbitro Bot 🤖"; 
// Define el nombre del bot.


// 🟢 ESTADO DEL BOT
var StatusBot = "afk"; // Puede ser "activo" o "afk"

// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN DEL JUEGO 🎮 ▇▇▇▇▇▇▇▇▇

// 🗺️ MAPA POR DEFECTO
var MapaPorDefecto = "Futsal x2"; 
// OPCIONES: EntrenamientoFutsal, Futsal x2, Futsal x3, Futsal x4, Futsal x5, Futsal x5 cesped, Futsal x7, Real Futsal, Campeones, Premios


// ⏱️ TIEMPO DE JUEGO
var TiempoDeJuego = 3;
// Duración por defecto de las partidas (En minutos)


// ⚽ LÍMITE DE GOLES
var LimiteDeGoles = 3;
// Limite de Goles por defecto



// ▇▇▇▇▇▇▇ 🎮 MODOS DE JUEGO  ▇▇▇▇▇▇▇


let autoBalanceEnabled = false; // true para ACTIVARLO - false para DESACTIVARLO | Equilibrar equipos en cantidad de jugadores

let CamisetasGanaSigue = false; // true para ACTIVARLO - false para DESACTIVARLO | Coloca camisetas automáticamente. Equipo ganador mantiene camiseta.

var cambioCami = false; // true para ACTIVARLO - false para DESACTIVARLO | Cambiar camisetas automáticamente cada vez que se reinicia un partido.

var powerShotMode = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar el Disparo Potente (PowerShot)

var JabulaniMode = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar el Disparo Potente (PowerShot) con comba

var combaMode = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar sólo la Comba (cada vez que se patea la pelota)

var GolDeOroActivado = false; // true para ACTIVARLO - false para DESACTIVARLO | Activar Gol de Oro

var FairPlayActivado = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo FairPlay

let ganasigueEnabled = true; // true para ACTIVARLO - false para DESACTIVARLO | Modo Gana Sigue

let modoJueganTodos = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo Juegan Todos

let modoJueganAlgunos = true; // true para ACTIVARLO - false para DESACTIVARLO |Modo Juegan Algunos

let maxPlayersPerTeam = 1 // Establecer el número máximo de jugadores por equipo (Modo Juegan Algunos) - (Ejemplo: let maxPlayersPerTeam = 2)

let isAFKpaused = false; // Estado inicial del detector de AFK


// MODO AUTOMATIZADO

var automatizadoActivado = false; // true para ACTIVARLO - false para DESACTIVARLO | Modo Automatizado

var tiempoLimiteCambio = 30; // Tiempo límite (en segundos) para permitir cambiar mapa automaticamente

var tiempoEsperaCambio = 5000; // 5000 ms = 5 segundos de espera | Tiempo de demora en colocar el mapa.

var configuracionActual = null;

// LIMITES: GOLES Y TIEMPO (AUTOMATIZADO)

var TiempoEntrenamientoFutsal = 0;
var GolesEntrenamientoFutsal = 0;

var TiempoFutsalx2 = 3;
var GolesFutsalx2 = 3;

var TiempoFutsalx3 = 3;
var GolesFutsalx3 = 3;

var TiempoFutsalx4 = 4;
var GolesFutsalx4 = 3;

var TiempoFutsalx5 = 4;
var GolesFutsalx5 = 3;

var TiempoFutsalx7 = 5;
var GolesFutsalx7 = 3;

// ▇▇▇▇▇▇▇  📏 TAMAÑO DE LOS JUGADORES  ▇▇▇▇▇▇▇

var TamanoMinimoPermitido = 15;
// Tamaño mínimo permitido para un jugador 

var TamanoMaximoPermitido = 15;
// Tamaño máximo permitido para un jugador

var CantidadCambiarTamano = 1;
// Cantidad de veces que un jugador puede cambiar su tamaño por partido


// ▇▇▇▇▇▇▇ ⚽👕 CAMISETAS POR DEFECTO ⚽👕 ▇▇▇▇▇▇▇

// CAMISETA EQUIPO RED 🔴
var camisetaRed = "/colors red 66 FFA649 DE0019 B80017 820217";
var NombreEquipoRojo = "RED";

// CAMISETA EQUIPO BLUE 🔵
var camisetaBlue = "/colors blue 55 c1ff00 052647 005DB3 03B2F0";
var NombreEquipoAzul = "BLUE";



// ▇▇▇▇▇▇▇ 🚫 RESTRICCIONES DE ACCESO 🚫 ▇▇▇▇▇▇▇

// 🤖 ACTIVAR reCAPTCHA PARA ENTRAR
var ActivarReCaptcha = false;
// true = Los jugadores deben resolver CAPTCHA (No soy un robot) para entrar
// false = Los jugadores entran sin CAPTCHA



// MÁXIMA CANTIDAD DE JUGADORES AFK PERMITIDOS
const LimiteMaximoDeJugadoresAFK = 4; 
// 🔒 Define el número máximo de jugadores AFK permitidos antes de activar la expulsión automática


// 🚫 MAXIMO DE JUGADORES PERMITIDOS CON LA MISMA IP
var MaximoJugadoresPorIp = 2;
// Define el número máximo de jugadores permitidos con la misma IP


// 🚫🌎 PAISES PROHIBIDOS
const PaisesProhibidos = ["united states", "united kingdom"];
// Si un jugador es de alguno de estos países, será expulsado automáticamente al ingresar.
// EJEMPLO DE USO: const PaisesProhibidos = ["Argentina", "Brazil", "Chile"];
 

// 🚫📶 IPS BANEADAS
let IpPlayers = []; // Añade entre comillas las Ips de los jugadores que quieras prohibir su ingreso. EJEMPLO: let IpPlayers = ["123.456.789", "987.654.321"];

var MensajeBaneoPorIp = "❌ El admin ha baneado tu IP 📶"


// ❌📛 NICKNAMES PROHIBIDOS
const NicknamesPROHIBIDOS = ["@everyone", "@here", "@"]; 
// Lista de nicknames prohibidos
// Define los nicknames que no pueden ser utilizados


// ▇▇▇▇▇▇▇ LISTA DE JUGADORES REGISTRADOS ▇▇▇▇▇▇▇
// auth = Public ID del jugador (se obtiene en: www.haxball.com/playerauth)
// nicks = todos los nombres permitidos para el jugador

var ListaDeJogadores = [
  { auth: "authid_jugador1", nicks: ["Jugador1"] },
  { auth: "authid_jugador2", nicks: ["Jugador2"] },
  { auth: "authid_jugador3", nicks: ["Jugador3"] },
  { auth: "authid_jugador4", nicks: ["Jugador4"] },
  { auth: "authid_jugador5", nicks: ["Jugador5"] },
  { auth: "authid_jugador6", nicks: ["Jugador6"] },
  { auth: "authid_jugador7", nicks: ["Jugador7"] },
  { auth: "authid_jugador8", nicks: ["Jugador8"] },
  { auth: "authid_jugador9", nicks: ["Jugador9"] },
  { auth: "authid_jugador10", nicks: ["Jugador10"] },
  { auth: "authid_jugador11", nicks: ["Jugador11"] },
  { auth: "authid_jugador12", nicks: ["Jugador12"] },
  { auth: "authid_jugador13", nicks: ["Jugador13"] },
  { auth: "authid_jugador14", nicks: ["Jugador14"] },
  { auth: "authid_jugador15", nicks: ["Jugador15"] },
  { auth: "authid_jugador16", nicks: ["Jugador16"] },
  { auth: "authid_jugador17", nicks: ["Jugador17"] },
  { auth: "authid_jugador18", nicks: ["Jugador18"] },
  { auth: "authid_jugador19", nicks: ["Jugador19"] },
  { auth: "authid_jugador20", nicks: ["Jugador20"] },
];


// ▇▇▇▇▇▇▇▇▇ 🌐 FUNCIONES DE DISCORD 🤖 ▇▇▇▇▇▇▇▇▇

// 🔹 Variable toggle para decidir si graba automáticamente al iniciar
let GrabarTodo = false;
// 🔹 Webhook para enviar grabaciones de toda la sala (inicio a cierre)
const WebhookGrabacionesSalaCompleta = "https://discord.com/api/webhooks/1322348400531738835/oKP4BL4iz8XhKgjzufGqUYfV7owjVlsyOgrlCyhhnX0Dcu3rJTiBUeVZI_53-QIBAaeI";
let grabando = false;

// 🔥 Webhook para ANUNCIAR que has CREADO UNA SALA. Reemplaza con tu propia URL de webhook.
var AnuncioHostAbierto = "https://discord.com/api/webhooks/1487492004530360412/MyBmGTVG-P_kxBfXrJWvoeFS-bhQ5H501JBgPrhd58xJ2zLFGt2U27n88iOa9HSUCCyi";
var MensajeHostAbierto = 
`# 🚀 ¡NUEVO HOST ABIERTO! 🎮
## ⚽ ¡No te lo pierdas! Únete al partido ahora y demuestra tus habilidades en la cancha.
¡La diversión está por comenzar, no faltes! 🔥`;
var TagHostAbierto = "@here"; //  Dejar "@here" o Colocar el "ID del Rol de Discord" al que quieres avisarle que creaste Host

// 🎥 Webhook para GRABACIONES y RESÚMENES de las Partidas jugadas. Reemplaza con tu propia URL de webhook.
const WebhookGrabaciones = "https://discord.com/api/webhooks/1487491386524696647/FM1xmFwxcJQN4JVuPVTbqO6zSlf6yKtok6ZeX1TGt75sGnreYLXQ7ZM4zyWPsOP_fPxL";


// 📂 Link del servidor de Discord donde se subirán las GRABACIONES DE LAS PARTIDAS
const GrabacionesDiscord = "https://discord.gg/9mbxwBG4b";


// 📞 Webhook para recibir el mensaje que han llamado a los Administradores. Reemplaza con tu propia URL de webhook.
var WebhookParaLlamarAdmins = "https://discord.com/api/webhooks/1487491723977298031/edoX1Ym14-nbDa8mIC8ddPaZPFM_Z3TxT_CFflRIWe2fBWOcX2CBjMXFNUsX6IMbhBT";


// 👮‍ Rol de Admin en Discord que se quiere llamar
var RolAdminHost = "@here"; // Dejar '@here' o colocar el ID del rol de Discord que se quiere llamar
var tiempoEsperaAdminsEnMinutos = 2;  // CANTIDAD DE MINUTOS A ESPERAR PARA REALIZAR UNA NUEVA LLAMADA A LOS ADMINS


// 🚫 Webhook para anunciar los KICKS y BANS de la sala. Reemplaza con tu propia URL de webhook.
const AnuncioKicksBans = "https://discord.com/api/webhooks/1487492749468106942/mKw7T9YIFBCS_yZ-a4ABZX0e4MiGoMqWjtAr5uBauZNCFjrt8s1rK_KIiYyZpteDEeO5";


// 💬 Webhook para ver los MENSAJES DE LOS JUGADORES. Reemplaza con tu propia URL de webhook.
var webhookMensajesJugadores  = "https://discord.com/api/webhooks/1487492972890034296/rhsCI7l-H21fs6NdbN4NQt4pCo8cUqAG7J9PsS6W4_EbdXIJbMD5qqG-v82slJF1AEk2";




// 🎟️ Webhook para enviar los INGRESOS y SALIDAS de los jugadores a Discord
var webhookBoletero = "https://discord.com/api/webhooks/1215904770699690104/Cuk8W0gJLVhE9gSw54YseGe6KR5PnkeHcB7dvD_GGoGAO6f-JoAsQfMiOQnieiAfU84D";


// 💬 Webhook para enviar estadísticas a Discord
var webhookEstadisticasJugadores = "https://discord.com/api/webhooks/1338347025741385820/FxJAPCh3H6hNZvcaQOabz58RApSIwrjqjfjeek0y1k6GkbzN-UKnpUCipahK6W3b_aNW";



// 🖊️ Webhook para firmar en partidos oficiales. Reemplaza con tu propia URL de webhook.
var WebhookParaFirmar = "https://discord.com/api/webhooks/1425328111695691898/T9a3EVREqsf9eFGVitsGXSSVNZ6b9yv_20qjzQeoGEul1CX02XgglMo3qvudljNOP0ww";


// 🔒 Webhook para enviar la IP de un jugador cuando se retire de la sala.
var webhookIPJugadores  = "https://discord.com/api/webhooks/1329078558857101374/ZyjKtX_NsleSgWex_-sLZ2ukjv3Mo6cy0M-zLXTwLMu3v6svJo8CxJtrokjcPj7aejbp";



// ▇▇▇▇▇▇▇▇ 📢 ANUNCIOS Y MENSAJE DE BIENVENIDA ▇▇▇▇▇▇▇▇▇▇

// ════════════════════  🎉 MENSAJE DE BIENVENIDA ════════════════════  
// (Se envía al jugador que recién ingresa al host por partes)

const MensajeDeBienvenida = [
  `
  ░█▀▀▀ ░█──░█ ░█▀▀█ 
  ░█▀▀▀ ─░█░█─ ░█▄▄█ 
  ░█─── ──▀▄▀─ ░█─░█`, 
  `🏆 ¡Bienvenido/a a #FVA! 🏆`,  
  `⚽ MODALIDAD: x1 | GANA SIGUE`,  
  `👑 DUEÑOS: 112 y ryoga kida`,  
  `🌐 Únete a nuestra comunidad en Discord:`,  
  `🔗https://discord.gg/9mbxwBG4b`,
  `📋 REGLAS: Respetar el Gana Sigue, no lagg y cero bardo.`,  
  `🛠️ ¿Necesitás Admin? Usá la clave autorizada.`,  
  `📊 COMANDOS DE STATS:`,  
  `!me, !stats ID, !goleadores, !asistidores, !vallas-invictas, !mvp`,  
  `🔥 OTROS: !racha-actual, !viciosos, !ganadores, !presencias`,  
  `🍌 MEDÍ TU BANANA: !memide`,
  `🎭 AVATAR ANIMADOS: !avatar 😈,👿 | !avatar HO,LA | !avatar 🌑,🌒,🌓,🌔,🌕`
];

// 🎨 PERSONALIZACIÓN DEL MENSAJE DE BIENVENIDA
var colormensaje = "00FF00"; // Color verde para resaltar

var TipoDeLetra = "bold"; 
// Puedes cambiar esta opción por: "normal", "bold", "italic", "small", "small-bold", y "small-italic"

// ════════════════════  📢 ANUNCIO 1 ════════════════════  
// (Se envía cada vez que inicia el partido)

var Anuncio = "🏆 #FVA | x1 GANA SIGUE | UNITE AL DISCORD:https://discord.gg/9mbxwBG4b"; 
// Anuncio que se envía a los 10 segundos del inicio de cada partido


// ⏲️ TIEMPO DEL ANUNCIO
var AnuncioMinuto = 0; 
//  Representa el minuto del partido en el que se desea mostrar el anuncio.

var AnuncioSegundos = 10; 
// Representa los segundos en el minuto del partido en el que se desea mostrar el anuncio.

var TipoDeLetraAnuncio = "bold"; 
// Puedes cambiar esta opción por: "normal", "bold", "italic", "small", "small-bold", y "small-italic"


var ColorAnuncio = "FFFF00"; // Color amarillo para el anuncio de partido

// ════════════════════  📢 ANUNCIO 2 ════════════════════ 

var Anuncio2 = "🛑 Para expulsar a un jugador, utiliza el comando `!expulsar NúmeroID`. Para ver los IDs de los jugadores, escribe `#` en el chat. Ejemplo: `!expulsar 25` expulsará al jugador con el ID 25.";
// Anuncio 2 que viene por Defecto (Se envía a los 10 segundos del inicio de cada partido)

// ⏲️ TIEMPO DEL ANUNCIO 2
var Anuncio2Minuto = 0; 
//  Representa el minuto del partido en el que se desea mostrar el anuncio 2.

var Anuncio2Segundos = 40; 
// Representa los segundos en el minuto del partido en el que se desea mostrar el anuncio 2.

var TipoDeLetraAnuncio2 = "italic"; 
// Puedes cambiar esta opción por: "normal", "bold", "italic", "small", "small-bold", y "small-italic"

var ColorAnuncio2 = "CCFF00"; 


// ▇▇▇▇▇▇▇ 🛠️ CONFIGURACIÓN GENERAL ▇▇▇▇▇▇▇

// 👁️‍🗨️ MOSTRAR IPs A ADMINISTRADORES
var MostrarIps = "No"; 
// Cambia "Si" por "No" si no deseas mostrar las IPs a los administradores cuando un jugador se una a la sala

const ColocarJuntoAlNickname = ""; // Opciones disponibles: "ID", "Nivel" o "" (sin nada)


// ▇▇▇▇▇▇▇ 🗳️ SISTEMA DE VOTACIONES 🗳️ ▇▇▇▇▇▇▇

// Variable configurable para el porcentaje de votos requeridos

var PorcentajeDeVotosBan = 40; 
// Cambia este valor al porcentaje deseado (por ejemplo, 30 para 30% de los votos)

var PorcentajeDeVotosAdmin = 40; 
// Cambia este valor al porcentaje deseado (por ejemplo, 30 para 30% de los votos)

const COOLDOWN_COMANDOS = 150; // ⏱️ Cantidad de segundos que deben esperar para poder votar cuando ingresan al host

const MIN_PLAYERS_FOR_ADMIN_VOTE = 5; // Cantidad mínima de jugadores para iniciar una votación de administrador

const MIN_PLAYERS_FOR_KICK_VOTE = 5; // Cantidad mínima de jugadores para iniciar una votación de expulsión

const DURACION_VOTACION = 120; // Duración en segundos para ambas votaciones

// ▇▇▇▇▇▇▇ ⏰ TIEMPO AFK  ▇▇▇▇▇▇▇


const SegundosPermitidosAFK = 15; // Establece el tiempo permitido en segundos para estar AFK (Cuando están en el Red o en el Blue)

const MinutosPermitidosAFK = 5;  // Establece el tiempo permitido en minutos para estar AFK (Cuando se encuentran Espectadores)


// ▇▇▇▇▇▇▇▇▇ 🌐👥 REDES SOCIALES ▇▇▇▇▇▇▇▇▇

const DiscordLink = "https://discord.gg/9mbxwBG4b";	// Link de tu Servidor de Discord

// ▇▇▇▇▇▇▇ 📍 UBICACIÓN DEL HOST ▇▇▇▇▇▇▇

	var UbicacionDelHost = "myubication"; 


	// ES LA UBICACIÓN EN LA QUE APARECERÁ TU HOST | Puedes reemplazar "argentina" por alguna de estas opciones.


	// OPCIONES DISPONIBLES:

// TU GEOLOCALIZACIÓN POR DEFECTO: myubication

		// AMÉRICA:

			// argentina, haxarg, uruguay, brasil, colombia, chile, mexico

			// bolivia, peru, paraguay, venezuela, costa rica, united states, canada

		// EUROPA:

			// france, spain, italy, germany, netherlands, portugal

			// croatia, macedonia, serbia, poland, ukraine, russia, marruecos, united kingdom, turkey

		
		// ASIA:

			// south korea, japan, china, vietnam, israel


// ▇▇▇▇▇▇▇ BANDERA DEL HOST 🏳️ ▇▇▇▇▇▇▇


	var BanderaDelHost = 'Germany';  // Elige el país con la bandera que quieres para tu Sala


// OPCIONES DISPONIBLES POR CONTINENTE:

// ÁFRICA:
	// Algeria, Angola, Benin, Botswana, BurkinaFaso, Burundi, Cameroon, CapeVerde, CentralAfricanRepublic, Chad, Comoros,
	// Congo, CongoTheDemocraticRepublicOfThe, CoteDIvoire, Djibouti, Egypt, EquatorialGuinea, Eritrea, Ethiopia, Gabon,
	// Gambia, Ghana, Guinea, GuineaBissau, Kenya, Lesotho, Liberia, LibyanArabJamahiriya, Madagascar, Malawi, Mali, Mauritania,
	// Mauritius, Morocco, Mozambique, Namibia, Niger, Nigeria, Rwanda, SaoTomeAndPrincipe, Senegal, Seychelles, SierraLeone,
	// Somalia, SouthAfrica, SouthSudan, Sudan, Swaziland, Tanzania, Togo, Tunisia, Uganda, Zambia, Zimbabwe

// AMÉRICA:
	// AntiguaAndBarbuda, Argentina, Aruba, Bahamas, Barbados, Belize, Bermuda, Bolivia, BonaireSaintEustatiusAndSaba, Brazil,
	// BritishIndianOceanTerritory, Canada, CaymanIslands, Chile, Colombia, CostaRica, Cuba, Curacao, Dominica, DominicanRepublic,
	// Ecuador, ElSalvador, FalklandIslandsMalvinas, FrenchGuiana, Grenada, Guadeloupe, Guatemala, Guyana, Haiti, Honduras,
	// Jamaica, Martinique, Mexico, Montserrat, Nicaragua, Panama, Paraguay, Peru, PuertoRico, SaintBarthelemy, SaintKittsAndNevis,
	// SaintLucia, SaintMartin, SaintPierreAndMiquelon, SaintVincentAndTheGrenadines, SintMaartenDutchPart, Suriname, TrinidadAndTobago,
	// TurksAndCaicosIslands, UnitedStates, UnitedStatesMinorOutlyingIslands, Uruguay, Venezuela, VirginIslandsBritish, VirginIslandsUS

// ASIA:
	// Afghanistan, Armenia, Azerbaijan, Bahrain, Bangladesh, Bhutan, Brunei, Cambodia, China, ChristmasIsland, CocosKeelingIslands,
	// HongKong, India, Indonesia, Iran, Iraq, Israel, Japan, Jordan, Kazakhstan, Kuwait, Kyrgyzstan, LaoPeoplesDemocraticRepublic,
	// Lebanon, Macao, Malaysia, Maldives, Mongolia, Myanmar, Nepal, NorthKorea, Oman, Pakistan, Palestine, Philippines, Qatar,
	// SaudiArabia, Singapore, SouthKorea, SriLanka, Syria, Taiwan, Tajikistan, Thailand, TimorLeste, Turkey, Turkmenistan,
	// UnitedArabEmirates, Uzbekistan, VietNam, Yemen

// EUROPA:
	// Albania, Andorra, Austria, Belarus, Belgium, BosniaAndHerzegovina, Bulgaria, Croatia, Cyprus, CzechRepublic, Denmark,
	// Estonia, FaroeIslands, Finland, France, Germany, Gibraltar, Greece, Greenland, Hungary, Iceland, Ireland, Italy, Kosovo,
	// Latvia, Liechtenstein, Lithuania, Luxembourg, MacedoniaTheFormerYugoslavRepublicOf, Malta, Moldova, Monaco, Montenegro,
	// Netherlands, Norway, Poland, Portugal, Romania, Russia, SanMarino, Serbia, Slovakia, Slovenia, Spain, SvalbardAndJanMayen,
	// Sweden, Switzerland, Ukraine, UnitedKingdom

// OCEANÍA:
	// Australia, Fiji, FrenchPolynesia, Guam, Kiribati, MarshallIslands, MicronesiaFederatedStatesOf, Nauru, NewCaledonia,
	// NewZealand, Niue, NorfolkIsland, Palau, PapuaNewGuinea, Pitcairn, Samoa, SolomonIslands, Tokelau, Tonga, Tuvalu, Vanuatu

// OTROS:
	// Haxball, Antarctica, Anguilla, Antarctica, Bermuda, BouvetIsland, BritishIndianOceanTerritory, HeardIslandAndMcDonaldIslands,
	// HolySeeVaticanCityState, IsleOfMan, Jersey, Mayotte, Monaco, Montserrat, SouthGeorgiaAndTheSouthSandwichIslands





//  ▇▇▇▇▇▇▇ 👤 ASIGNAR ROLES ▇▇▇▇▇▇▇


// Definiciones de colores
const ColorDelChatROL1 = 0xFFD700;
const ColorDelChatROL2 = 0xffffff;
const ColorDelChatROL3 = 0xffffff;
const ColorDelChatROL4 = 0xffffff;
const ColorDelChatROL5 = 0xffffff;
const ColorDelChatROL6 = 0xffffff;
const ColorDelChatROL7 = 0xffffff;
const ColorDelChatROL8 = 0xffffff;
const ColorDelChatROL9 = 0xffffff;
const ColorDelChatROL10 = 0xffffff;
const adminChatColor = 0xffdb72;
const RedChatColor = 0xff8d8d;
const BlueChatColor = 0x63f2ff;
const RedTeamChatColor = 0xff5d5d;
const BlueTeamChatColor = 0x18fde8;
const SpectChatColor = 0xD3D3D3; // Color del chat para espectadores

// Listas de nombres de usuario por rol
const NickNamesRol1 = ["112"]; // Añadir nombres de usuarios para ROL1 entre comillas | EJEMPLO: const NickNamesRol1 = ["Messi", "Neymar"];
const NickNamesRol2 = []; // Añadir nombres de usuarios para ROL2 entre comillas | EJEMPLO: const NickNamesRol2 = ["ROMAN #10", "Martín Palermo 9"];
const NickNamesRol3 = []; // Añadir nombres de usuarios para ROL3 entre comillas | EJEMPLO: const NickNamesRol3 = ["Burrito Ortega"];
const NickNamesRol4 = []; // Añadir nombres de usuarios para ROL4 entre comillas
const NickNamesRol5 = []; // Añadir nombres de usuarios para ROL5 entre comillas
const NickNamesRol6 = []; // Añadir nombres de usuarios para ROL5 entre comillas
const NickNamesRol7 = []; // Añadir nombres de usuarios para ROL5 entre comillas
const NickNamesRol8 = []; // Añadir nombres de usuarios para ROL5 entre comillas
const NickNamesRol9 = []; // Añadir nombres de usuarios para ROL5 entre comillas
const NickNamesRol10 = []; // Añadir nombres de usuarios para ROL5 entre comillas

// Nombres de roles
const NombreROL1 = "🗦👑🗧𝗢𝗪𝗡𝗘𝗥";
const NombreROL2 = "🤝 CO-OWNER";
const NombreROL3 = "🌐 HOSTER";
const NombreROL4 = "🛠️ AYUDANTE";
const NombreROL5 = "🔧 SUBAYUDANTE";
const NombreROL6 = "🧉 COLABORADOR";
const NombreROL7 = "💡 ASISTENTE";
const NombreROL8 = "ROL 8";
const NombreROL9 = "ROL 9";
const NombreROL10 = "ROL 10";
const NombreROLAdmin = "👑";
const NombreROLRed = "🔴";
const NombreROLBlue = "🔵";
const NombreROLSpect = "👁️";

const RoleAttributes = {
    [NombreROL1]: { style: "bold", sound: 2 },
    [NombreROL2]: { style: "bold", sound: 2 },
    [NombreROL3]: { style: "normal", sound: 1 },
    [NombreROL4]: { style: "normal", sound: 1 },
    [NombreROL5]: { style: "normal", sound: 1 },
    [NombreROL6]: { style: "normal", sound: 1 },
    [NombreROL7]: { style: "normal", sound: 1 },
    [NombreROL8]: { style: "normal", sound: 1 },
    [NombreROL9]: { style: "normal", sound: 1 },
    [NombreROL10]: { style: "normal", sound: 1 },
    [NombreROLAdmin]: { style: "normal", sound: 1 },
    [NombreROLRed]: { style: "normal", sound: 1 },
    [NombreROLBlue]: { style: "normal", sound: 1 },
    [NombreROLSpect]: { style: "normal", sound: 0 }
};


//  ▇▇▇▇▇▇▇  COOLDOWN CHAT ▇▇▇▇▇▇▇

let MESSAGE_COOLDOWN = 5000; // 5 segundos de cooldown
let SPAM_LIMIT = 5; // Mensajes permitidos antes de activar el cooldown
let COOLDOWN_TIME = 10000; // 10 segundos de cooldown después de enviar muchos mensajes
let cooldownEnabled = true; // Cooldown habilitado por defecto
let KICK_THRESHOLD = 7; // Número de advertencias antes de kickear por spam

// Variables para rastrear mensajes y cooldowns
let messageTimestamps = {};
let playerCooldowns = {};
let spamWarnings = {}; // Contador de advertencias por spam



//  ▇▇▇▇▇▇▇  COOLDOWN PARA EL USO DE COMANDOS ▇▇▇▇▇▇▇
// COOLDOWN PARA USO DE COMANDOS
let lastCommandTime = {}; // Objeto para registrar el tiempo del último comando enviado por cada jugador
const commandCooldown = 5000; // Tiempo de espera en milisegundos (5 segundos)

// COOLDOWN PARA COMANDOS
const cooldowns = {};
const COOLDOWN_TIEMPO = 5 * 1000; // 5 segundos


//  ▇▇▇▇▇▇▇ ⚽ PELOTAS ⚽ ▇▇▇▇▇▇▇

var PelotaRS = "FFFFFF"			// COLOR DE LA PELOTA DE REAL SOCCER
var PelotaRS_PowerShot = "FF4500"	// COLOR DE LA PELOTA DE REAL SOCCER con POWERSHOT ACTIVADO
var PotenciaPowerShotRS = 2 //  Referencia: La potencia sin PowerShot es 0.5

var PelotaFutsal = "FFFFFF"			// COLOR DE LA PELOTA DE REAL SOCCER
var PelotaFutsal_PowerShot = "FF4500"	// COLOR DE LA PELOTA DE REAL SOCCER con POWERSHOT ACTIVADO
var PotenciaPowerShot = 2.5  // Referencia: La Potencia sin PowerShot es 1.5
var TipoPelotaFutsal = "oveja";  // Opciones: "bazinga", "oveja", "glh"





// ▇▇▇▇▇▇▇  PARA TORNEOS  ▇▇▇▇▇▇▇

var ChallongeLink = 'challonge.com/es/' // Link de tu torneo
var regla1 = '⯌ 4 vs 4'
var regla2 = '⯌ Equipo que gana el partido, continua jugando. 🏆'
var regla3 = '⯌ Dos jugadores ingresan por orden de Espectadores. Los otros dos restantes, los puede elegir.'
var regla4 = '⯌ El equipo ganador le toca el país con más probabilidades de ganar.'
var regla5 = '⯌ Si empatan, salen ambos equipos. Y los primeros cuatro jugadores de la lista de Espectadores pasan a ser capitanes, 2 en el Team Red y los otros 2 en el Team Blue.'



//  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  ADMINS NO OFICIALES ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇

var kickBanAttempts = {}; // Objeto para rastrear intentos de kick y ban
var maxAttempts = 1; // Número máximo de intentos permitidos en el intervalo de tiempo
var interval = 30000; // Intervalo de tiempo en milisegundos (30 segundos)
var alertThreshold = 2; // Umbral de alerta después del segundo intento
var cooldownTime = 60000; // Tiempo de cooldown en milisegundos 
var cooldownActive = {}; // Objeto para rastrear el estado de cooldown de cada administrador


//  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇  CONFIGURACIÓN AVANZADA 🚀 ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇

// Define una variable global para llevar el seguimiento de los minutos jugados por cada jugador
let playerMinutesPlayed = JSON.parse(localStorage.getItem('playerMinutesPlayed')) || {};

// Define una variable global para llevar el seguimiento del tiempo que un jugador ha estado siendo el arquero
let playerGoalkeeperTime = JSON.parse(localStorage.getItem('playerGoalkeeperTime')) || {};

let jugadoresConEmojis = new Set();


const reemplazosEmoji = {
    "xd": "😂",
    "lol": "🤣",
    "gg": "👏 🅶🅶",
    "ez": "𝗲𝘇 😎", 
    "q": "𝗾 ❓", 
    "no": "❌",
    "ok": "✅",
    "bien": "👌",
    "gracias": "🙏",
 

    "golazo": "⚽🥅 🔥", 
    "gol": "⚽🥅",
    "uf": "😱", 
    "1": "🧤 1️⃣",
    "2": "🛡 2️⃣",
    "9": "⚽ 9️⃣",

    "perdon": "😔",
    "chau": "👋💨",
    "hola": "👋😄",
    "da": "𝗱𝗮 😤",
    "x": "✖",
    "cono": "🔺",
    "ole": "𝗼𝗹𝗲𝗲𝗲 🥵🔥", 
    "oso": "𝗼𝘀𝗼𝗼 🐻🤡", 

    "-1": "➖1️⃣",
    "-2": "➖2️⃣",
    "-3": "➖3️⃣",
    "-4": "➖4️⃣",
    "-5": "➖5️⃣"
};



// ▇▇▇▇▇▇▇ ⚽👕 AÑADIR CAMISETAS DE EQUIPOS ⚽👕 ▇▇▇▇▇▇▇

var camisetasEquipos = {
    // RIVER PLATE
    "riv/titular/red": {
        codigo: "/colors red 30 231F20 FFFFFF EE1B2C FFFFFF",
        nombreEquipo: "RIVER PLATE"
    },
    "boc/titular/blue": {
        codigo: "/colors blue 90 FFFFFF 033F86 FAB900 033F86",
        nombreEquipo: "BOCA JUNIORS"
    },
    // NACIONAL (UY)
    "nac/titular/blue": {
        codigo: "/colors blue 55 d0142c 003895 FFFFFF 003895",
        nombreEquipo: "NACIONAL (UY)"
    },
    // PEÑAROL
    "pen/titular/red": {
        codigo: "/colors red 180 ffffff FFCA00 000000 FFCA00",
        nombreEquipo: "PEÑAROL"
    },
    "rac/titular/blue": {
        codigo: "/colors blue 180 002942 00A5E3 FFFFFF 00A5E3",
        nombreEquipo: "RACING CLUB"
    },
    // INDEPENDIENTE
    "ind/titular/red": {
        codigo: "/colors red 60 FFFFFF EC1C24",
        nombreEquipo: "INDEPENDIENTE"
    },
    // NEWELL'S OLD BOYS
    "nob/titular/red": {
        codigo: "/colors red 180 ffffff 000000 BF0311",
        nombreEquipo: "NEWELLS"
    },
    "cen/titular/blue": {
        codigo: "/colors blue 180 ffffff FCD724 0D3E66 FCD724",
        nombreEquipo: "ROSARIO CENTRAL"
    },
    // BARCELONA FC
    "bar/titular/red": {
        codigo: "/colors red 180 F5B606 011EDE C80056",
        nombreEquipo: "BARCELONA FC"
    },
    "rma/titular/blue": {
        codigo: "/colors blue 73 005ca7 FFC10A FFFFFF FFFFFF",
        nombreEquipo: "REAL MADRID"
    },
    // SAN LORENZO
    "slo/titular/red": {
        codigo: "/colors red 180 FFFFFF E9282D 1D3B56 E9282D",
        nombreEquipo: "SAN LORENZO"
    },
    "int/titular/blue": {
        codigo: "/colors blue 180 FFFFFF 00239C 000000 00239C",
        nombreEquipo: "INTER MILAN"
    },
    // AC MILAN
    "acm/titular/red": {
        codigo: "/colors red 180 FFFFFF DF061B 000000 DF061B",
        nombreEquipo: "AC MILAN"
    },
    // BAYERN DE MUNICH
    "fcb/titular/red": {
        codigo: "/colors red 90 FFFFFF DC052D ED0038 ED0038",
        nombreEquipo: "BAYERN DE MUNICH"
    },
    "bvb/titular/blue": {
        codigo: "/colors blue 90 1d1d1b 1d1d1b fad515 fad515",
        nombreEquipo: "BORUSSIA DORTMUND"
    },

    // MANCHESTER UNITED
    "mun/titular/red": {
        codigo: "/colors red 90 FFFFFF D90119 C7011A AB0918",
        nombreEquipo: "MANCHESTER UNITED"
    },
    // MANCHESTER CITY
    "mci/titular/blue": {
        codigo: "/colors blue 55 ffffff 6DACDF",
        nombreEquipo: "MANCHESTER CITY"
    },
    // INTER MIAMI
    "mia/titular/red": {
        codigo: "/colors red 60 000000 F7B6CC",
        nombreEquipo: "INTER MIAMI"
    },
    // AL-NASSR
    "nas/titular/blue": {
        codigo: "/colors blue 15 30457C FCE501 FCE501 081C4E",
        nombreEquipo: "AL-NASSR"
    },

};


// ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ CÓDIGOS DE LAS BANDERAS ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇

var codigosBanderas = {
  Haxball: 'FAM',
  Afghanistan: 'AF', 
  Albania: 'AL', 
  Algeria: 'DZ', 
  Andorra: 'AD', 
  Angola: 'AO', 
  Anguilla: 'AI',
  Antarctica: 'AQ',
  AntiguaAndBarbuda: 'AG',
  Argentina: 'AR',
  Armenia: 'AM',
  Aruba: 'AW',
  Australia: 'AU',
  Austria: 'AT',
  Azerbaijan: 'AZ',
  Bahamas: 'BS',
  Bahrain: 'BH',
  Bangladesh: 'BD',
  Barbados: 'BB',
  Belarus: 'BY',
  Belgium: 'BE',
  Belize: 'BZ',
  Benin: 'BJ',
  Bermuda: 'BM',
  Bhutan: 'BT',
  Bolivia: 'BO',
  BonaireSaintEustatiusAndSaba: 'BQ',
  BosniaAndHerzegovina: 'BA',
  Botswana: 'BW',
  BouvetIsland: 'BV',
  Brazil: 'BR',
  BritishIndianOceanTerritory: 'IO',
  Brunei: 'BN',
  Bulgaria: 'BG',
  BurkinaFaso: 'BF',
  Burundi: 'BI',
  Cambodia: 'KH',
  Cameroon: 'CM',
  Canada: 'CA',
  CapeVerde: 'CV',
  CaymanIslands: 'KY',
  CentralAfricanRepublic: 'CF',
  Chad: 'TD',
  Chile: 'CL',
  China: 'CN',
  ChristmasIsland: 'CX',
  CocosKeelingIslands: 'CC',
  Colombia: 'CO',
  Comoros: 'KM',
  Congo: 'CG',
  CongoTheDemocraticRepublicOfThe: 'CD',
  CookIslands: 'CK',
  CostaRica: 'CR',
  CoteDIvoire: 'CI',
  Croatia: 'HR',
  Cuba: 'CU',
  Curacao: 'CW',
  Cyprus: 'CY',
  CzechRepublic: 'CZ',
  Denmark: 'DK',
  Djibouti: 'DJ',
  Dominica: 'DM',
  DominicanRepublic: 'DO',
  Ecuador: 'EC',
  Egypt: 'EG',
  ElSalvador: 'SV',
  EnglandUnitedKingdom: 'GB',
  EquatorialGuinea: 'GQ',
  Eritrea: 'ER',
  Estonia: 'EE',
  Ethiopia: 'ET',
  FalklandIslandsMalvinas: 'FK',
  FaroeIslands: 'FO',
  Fiji: 'FJ',
  Finland: 'FI',
  France: 'FR',
  FrenchPolynesia: 'PF',
  FrenchSouthernTerritories: 'TF',
  Gabon: 'GA',
  Gambia: 'GM',
  Georgia: 'GE',
  Germany: 'DE',
  Ghana: 'GH',
  Gibraltar: 'GI',
  GreatBritain: 'GB',
  Greece: 'GR',
  Greenland: 'GL',
  Grenada: 'GD',
  Guam: 'GU',
  Guatemala: 'GT',
  Guernsey: 'GG',
  Guinea: 'GN',
  GuineaBissau: 'GW',
  Guyana: 'GY',
  Haiti: 'HT',
  HeardIslandAndMcDonaldIslands: 'HM',
  HolySeeVaticanCityState: 'VA',
  Honduras: 'HN',
  HongKong: 'HK',
  Hungary: 'HU',
  Iceland: 'IS',
  India: 'IN',
  Indonesia: 'ID',
  Iran: 'IR',
  Iraq: 'IQ',
  Ireland: 'IE',
  IsleOfMan: 'IM',
  Israel: 'IL',
  Italy: 'IT',
  Jamaica: 'JM',
  Japan: 'JP',
  Jersey: 'JE',
  Jordan: 'JO',
  Kazakhstan: 'KZ',
  Kenya: 'KE',
  Kiribati: 'KI',
  KoreaDemocraticPeoplesRepublicOfNorthKorea: 'KP',
  KoreaRepublicOfSouthKorea: 'KR',
  Kosovo: 'XK',
  Kuwait: 'KW',
  Kyrgyzstan: 'KG',
  LaoPeoplesDemocraticRepublic: 'LA',
  Latvia: 'LV',
  Lebanon: 'LB',
  Lesotho: 'LS',
  Liberia: 'LR',
  LibyanArabJamahiriya: 'LY',
  Liechtenstein: 'LI',
  Lithuania: 'LT',
  Luxembourg: 'LU',
  Macao: 'MO',
  MacedoniaTheFormerYugoslavRepublicOf: 'MK',
  Madagascar: 'MG',
  Malawi: 'MW',
  Malaysia: 'MY',
  Maldives: 'MV',
  Mali: 'ML',
  Malta: 'MT',
  MarshallIslands: 'MH',
  Mauritania: 'MR',
  Mauritius: 'MU',
  Mexico: 'MX',
  MicronesiaFederatedStatesOf: 'FM',
  MissingData: 'U9',
  MoldovaRepublicOf: 'MD',
  Monaco: 'MC',
  Mongolia: 'MN',
  Montenegro: 'ME',
  Montserrat: 'MS',
  Morocco: 'MA',
  Mozambique: 'MZ',
  Myanmar: 'MM',
  Namibia: 'NA',
  Nauru: 'NR',
  Nepal: 'NP',
  Netherlands: 'NL',
  NetherlandsAntilles: 'AN',
  NewCaledonia: 'NC',
  NewZealand: 'NZ',
  Nicaragua: 'NI',
  Niger: 'NE',
  Nigeria: 'NG',
  Niue: 'NU',
  NorfolkIsland: 'NF',
  NorthernIrelandUnitedKingdom: 'GB',
  NorthernMarianaIslands: 'MP',
  Norway: 'NO',
  Oman: 'OM',
  Pakistan: 'PK',
  Palau: 'PW',
  PalestinianTerritoryOccupied: 'PS',
  Panama: 'PA',
  PapuaNewGuinea: 'PG',
  Paraguay: 'PY',
  Peru: 'PE',
  Philippines: 'PH',
  Pitcairn: 'PN',
  Poland: 'PL',
  Portugal: 'PT',
  PuertoRico: 'PR',
  Qatar: 'QA',
  Romania: 'RO',
  Russia: 'RU',
  Rwanda: 'RW',
  SaintLucia: 'LC',
  Samoa: 'WS',
  SanMarino: 'SM',
  SaoTomeAndPrincipe: 'ST',
  SaudiArabia: 'SA',
  ScotlandUnitedKingdom: 'GB',
  Senegal: 'SN',
  Serbia: 'RS',
  Seychelles: 'SC',
  SierraLeone: 'SL',
  Singapore: 'SG',
  SintMaartenDutchPart: 'SX',
  Slovakia: 'SK',
  Slovenia: 'SI',
  SolomonIslands: 'SB',
  Somalia: 'SO',
  SouthAfrica: 'ZA',
  SouthGeorgiaAndTheSouthSandwichIslands: 'GS',
  SouthSudan: 'SS',
  Spain: 'ES',
  SriLanka: 'LK',
  StHelena: 'SH',
  StKittsAndNevis: 'KN',
  StVincentAndTheGrenadines: 'VC',
  Sudan: 'SD',
  Suriname: 'SR',
  Swaziland: 'SZ',
  Sweden: 'SE',
  Switzerland: 'CH',
  SyrianArabRepublic: 'SY',
  Taiwan: 'TW',
  Tajikistan: 'TJ',
  Tanzania: 'TZ',
  Thailand: 'TH',
  TimorLeste: 'TL',
  Togo: 'TG',
  Tokelau: 'TK',
  Tonga: 'TO',
  TrinidadAndTobago: 'TT',
  Tunisia: 'TN',
  Turkey: 'TR',
  Turkmenistan: 'TM',
  TurksAndCaicosIslands: 'TC',
  Tuvalu: 'TV',
  Uganda: 'UG',
  Ukraine: 'UA',
  UnitedArabEmirates: 'AE',
  UnitedKingdom: 'GB',
  UnitedStates: 'US',
  UnitedStatesMinorOutlyingIslands: 'UM',
  Uruguay: 'UY',
  Uzbekistan: 'UZ',
  Vanuatu: 'VU',
  Venezuela: 'VE',
  VietNam: 'VN',
  VirginIslandsBritish: 'VG',
  VirginIslandsUS: 'VI',
  Yemen: 'YE',
  Zambia: 'ZM',
  Zimbabwe: 'ZW'
};

var countryCoords = {
    "argentina": [-34.6882652, -58.5685501], // Buenos Aires
    "haxarg": [-34.61, -58.42], // HaxARG Ubication
    "chile": [-33.45, -70.66], // Santiago
    "uruguay": [-34.90, -56.19], // Montevideo
    "brasil": [-23.55, -46.64], // São Paulo
    "peru": [-12.04, -77.03], // Lima
    "colombia": [4.61, -74.08], // Bogotá
    "venezuela": [10.49, -66.88], // Caracas
    "costa rica": [9.934739, -84.087502], // San José
    "mexico": [19.43, -99.13], // Ciudad de México
    "united states": [40.71, -74.01], // Nueva York
    "marruecos": [33.57, -7.65], // Casablanca
    "spain": [40.42, -3.70], // Madrid
    "portugal": [38.71, -9.14], // Lisboa
    "italy": [41.89, 12.49], // Milán
    "united kingdom": [51.51, -0.13], // Londres
    "germany": [52.52, 13.40], // Berlín
    "turkey": [41.01, 28.97], // Estambul
    "serbia": [44.8167494, 20.4654671], // Belgrado
    "poland": [52.2298, 21.0118], // Varsovia
    "ukraine": [50.45, 30.52], // Kiev
    "russia": [55.75, 37.62], // Moscú
    "china": [31.23, 121.47], // Shanghái
    "south korea": [37.56, 126.97], // Seúl
    "vietnam": [21.03, 105.85], // Hanói
    "france": [48.86, 2.34], // París
    "croatia": [45.8131406, 15.9772235], // Zagreb
    "macedonia": [41.61, 21.74], // Skopie
    "israel": [31.76, 35.21], // Tel Aviv (Israel)
    "canada": [45.42, -75.69], // Ottawa (Canadá)
    "bolivia": [-16.50, -68.12], // La Paz (Bolivia)
    "paraguay": [-25.27, -57.67], // Asunción (Paraguay)
    "honduras": [14.08, -87.21], // Tegucigalpa (Honduras)
    "myubication": null,

};

var VersionDelScript = "``📅 ᴠᴇʀsɪᴏ́ɴ ᴅᴇʟ sᴄʀɪᴘᴛ 25.06.18  | Futsal by GLH ``"

let equipoAzulPosesion = 0;
let equipoRojoPosesion = 0;
var currentMap = MapaPorDefecto; // Define y asigna un valor a currentMap antes de llamar a sendGameInfo
// Variables globales
var posesionEquipoA = 0;
var posesionEquipoB = 0;
var ColorFondoRS = '6d945b'
var RSRMap;
var THERealFutsalMap;
var PartidoArrancado;
const afkPlayerIDs = new Set()
var mutedPlayers = []; // Array where will be added muted players
var isTimeAddedShownseis = false;
var DetenerAnuncio = false;
var DetenerAviso = false;
var ReiniciarStatsEnCero = false;
var redTeam = [0, 0, 0, 0, 0, 0];
var blueTeam = [0, 0, 0, 0, 0, 0];
const votedPlayers = new Set()
let votekickTimes = {};
let votekickCount = {};
var votekickTimeout = 60000;

var PlayerFound = false;
var ListaDeJugadores = [];
var conexion = [];

var whoTouchedLast; // var representing the last player who touched the ball

var teamRed
var teamBlue
var palabrasSilenciadas = [];
// Variables para almacenar los datos de la publicidad
let advertisingInterval;
let advertisingMessage = '';
let advertisingMinutes = 0;
let lastAdvertisingTime = 0;

let playerMatchTime = {}; 
// Estructura: { playerId: { joinTime: null, totalTime: 0 } }


const leaveFlood = {
    count: 0,
    lastReset: Date.now()
};

const LEAVE_FLOOD_WINDOW = 2000; // 2 segundos
const LEAVE_FLOOD_LIMIT = 5;     // 5 salidas en 2s
let joinFloodTimestamps = [];


var _0x24f1 = ['floor', 'getPlayerDiscProperties', '      👋 Bɪᴇɴᴠᴇɴɪᴅᴏ ᴀʟ ʜᴏsᴛ ᴅᴇ G L H      ', 'ballOutPositionY', 'court', 'blueGK', 'toFixed', 'RSR', 'onRoomLink', 'secondLastKickerTeam', 'auth', 'method', 'El administrador se encuentra presente', 'ceil', 'clearBans', 'sendAnnouncement', 'blueScore', 'secondLastKickerId', 'secondLastKicker', 'normal', '50nCLuSN', '0x00ccff', '🔥 ÚLTIMA JUGADA DEL PARTIDO 🔥 - Si la pelota sale del terreno de juego, se finalizará el partido.', 'radius', '🚫 NO puedes cambiar el fondo del mapa cuando un partido se esta jugando.', 'xgravity', '𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 💬 ⌨: !rs, !rr, !bb, !clearbans, !swap, t [mensaje a tu equipo], !court, !court [hexcolor], !court reset', 'setPlayerDiscProperties', 'round', '478VrIjpd', 'team', 'onGameStop', 'lastKicker', '"},"playerPhysics":{"acceleration":0.12,"kickStrength":5.65},"ballPhysics":{"radius":9,"invMass":1.05,"color":"FFFF00","cGroup":["ball","kick","score"]},"vertexes":[{"x":0,"y":660,"trait":"kickOffBarrier"},{"x":0,"y":180,"trait":"kickOffBarrier"},{"x":0,"y":-180,"trait":"kickOffBarrier"},{"x":0,"y":-660,"trait":"kickOffBarrier"},{"x":1150,"y":320,"trait":"line"},{"x":840,"y":320,"trait":"line"},{"x":1150,"y":-320,"trait":"line"},{"x":840,"y":-320,"trait":"line"},{"x":1150,"y":180,"trait":"line"},{"x":1030,"y":180,"trait":"line"},{"x":1150,"y":-180,"trait":"line"},{"x":1030,"y":-180,"trait":"line"},{"x":840,"y":-130,"trait":"line","curve":-130},{"x":840,"y":130,"trait":"line","curve":-130},{"x":-1150,"y":-320,"trait":"line"},{"x":-840,"y":-320,"trait":"line"},{"x":-1150,"y":320,"trait":"line"},{"x":-840,"y":320,"trait":"line"},{"x":-1150,"y":-175,"trait":"line"},{"x":-1030,"y":-175,"trait":"line"},{"x":-1150,"y":175,"trait":"line"},{"x":-1030,"y":175,"trait":"line"},{"x":-840,"y":130,"trait":"line","curve":-130},{"x":-840,"y":-130,"trait":"line","curve":-130},{"x":935,"y":3,"trait":"line"},{"x":935,"y":-3,"trait":"line"},{"x":-935,"y":3,"trait":"line"},{"x":-935,"y":-3,"trait":"line"},{"x":-1150,"y":570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1120,"y":-600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":-1150,"y":-570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1150,"y":-570,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":1120,"y":-600,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["blueKO"],"trait":"kickOffBarrier","curve":-180},{"x":0,"y":-180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":0,"y":180,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier","curve":180},{"x":-1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":-1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":70,"color":"576C46","vis":false},{"x":1030,"y":-40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":40,"bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","curve":-70,"color":"576C46","vis":false},{"x":1030,"y":-40,"trait":"line","color":"576C46"},{"x":1030,"y":40,"trait":"line","color":"576C46"},{"x":-1030,"y":-40,"trait":"line","color":"576C46"},{"x":-1030,"y":40,"trait":"line","color":"576C46"},{"x":0,"y":3,"trait":"line"},{"x":0,"y":-3,"trait":"line"},{"x":-1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-655,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":1157,"y":-605,"bCoef":0,"cMask":["ball"],"trait":"ballArea"},{"x":-1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":-485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":1300,"y":485,"bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"color":"ec644b","vis":false},{"x":-1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":-320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":840,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":1295,"y":320,"cMask":["c0"],"cGroup":["red","blue"]},{"x":-1150,"y":-124,"bCoef":0,"cMask":["ball"]},{"x":-1210,"y":-124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1150,"y":124,"bCoef":0,"cMask":["ball"]},{"x":-1210,"y":124,"bCoef":0,"cMask":["ball"],"bias":0,"curve":5},{"x":-1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":-1250,"y":158,"bCoef":0,"cMask":["ball"]},{"x":1150,"y":124,"bCoef":0,"cMask":["ball"]},{"x":1210,"y":124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1150,"y":-124,"bCoef":0,"cMask":["ball"]},{"x":1210,"y":-124,"bCoef":0,"cMask":["ball"],"curve":-5},{"x":1250,"y":-158,"bCoef":0,"cMask":["ball"]},{"x":1250,"y":158,"bCoef":0,"cMask":["ball"]}],"segments":[{"v0":0,"v1":1,"trait":"kickOffBarrier"},{"v0":2,"v1":3,"trait":"kickOffBarrier"},{"v0":4,"v1":5,"trait":"line","y":320},{"v0":5,"v1":7,"trait":"line","x":840},{"v0":6,"v1":7,"trait":"line","y":-320},{"v0":8,"v1":9,"trait":"line","y":180},{"v0":9,"v1":11,"trait":"line","x":1030},{"v0":10,"v1":11,"trait":"line","y":-180},{"v0":12,"v1":13,"curve":-130,"trait":"line","x":840},{"v0":14,"v1":15,"trait":"line","y":-320},{"v0":15,"v1":17,"trait":"line","x":-840},{"v0":16,"v1":17,"trait":"line","y":320},{"v0":18,"v1":19,"trait":"line","y":-175},{"v0":19,"v1":21,"trait":"line","x":-1030},{"v0":20,"v1":21,"trait":"line","y":175},{"v0":22,"v1":23,"curve":-130,"trait":"line","x":-840},{"v0":24,"v1":25,"curve":-180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":180,"trait":"line","x":935},{"v0":26,"v1":27,"curve":180,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":90,"trait":"line","x":-935},{"v0":24,"v1":25,"curve":-90,"trait":"line","x":935},{"v0":26,"v1":27,"curve":-90,"trait":"line","x":-935},{"v0":24,"v1":25,"trait":"line","x":935},{"v0":26,"v1":27,"trait":"line","x":-935},{"v0":28,"v1":29,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":30,"v1":31,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":32,"v1":33,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":34,"v1":35,"curve":90,"bCoef":-2.65,"cMask":["ball"],"cGroup":["c0"],"trait":"line"},{"v0":37,"v1":36,"curve":-180,"vis":false,"bCoef":0.1,"cGroup":["blueKO"],"trait":"kickOffBarrier"},{"v0":39,"v1":40,"curve":70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":-1030},{"v0":41,"v1":42,"curve":-70,"vis":false,"color":"576C46","bCoef":-5.7,"cMask":["ball"],"cGroup":["c0"],"trait":"line","x":1030},{"v0":37,"v1":38,"curve":180,"vis":false,"bCoef":0.1,"cMask":["red","blue"],"cGroup":["redKO"],"trait":"kickOffBarrier"},{"v0":43,"v1":44,"vis":true,"color":"576C46","trait":"line","x":1030},{"v0":45,"v1":46,"vis":true,"color":"576C46","trait":"line","x":-1030},{"v0":47,"v1":48,"curve":-180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":180,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":90,"trait":"line","x":-935},{"v0":47,"v1":48,"curve":-90,"trait":"line","x":-935},{"v0":47,"v1":48,"trait":"line","x":-935},{"v0":49,"v1":50,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":51,"v1":52,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":-1157},{"v0":53,"v1":54,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":55,"v1":56,"color":"FFFF00","bCoef":0,"cMask":["ball"],"trait":"ballArea","x":1157},{"v0":57,"v1":58,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":-485},{"v0":59,"v1":60,"vis":false,"color":"ec644b","bCoef":0,"cMask":["c1"],"cGroup":["red","blue"],"y":485},{"v0":61,"v1":62,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":62,"v1":63,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":63,"v1":64,"vis":false,"color":"ec644b","cMask":["c0"],"cGroup":["red","blue"]},{"v0":65,"v1":66,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":66,"v1":67,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":67,"v1":68,"vis":false,"cMask":["c0"],"cGroup":["red","blue"]},{"v0":69,"v1":70,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":-124},{"v0":71,"v1":72,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":124},{"v0":72,"v1":70,"curve":5,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"bias":0},{"v0":70,"v1":73,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":72,"v1":74,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":75,"v1":76,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":124},{"v0":77,"v1":78,"color":"FFFFFF","bCoef":0,"cMask":["ball"],"y":-124},{"v0":76,"v1":78,"curve":-5,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":78,"v1":79,"color":"FFFFFF","bCoef":0,"cMask":["ball"]},{"v0":76,"v1":80,"color":"FFFFFF","bCoef":0,"cMask":["ball"]}],"goals":[{"p0":[-1162,124],"p1":[-1162,-124],"team":"red"},{"p0":[1162,124],"p1":[1162,-124],"team":"blue","radius":0,"invMass":1}],"discs":[{"radius":0,"invMass":0,"pos":[-1311,-19],"color":"ffffffff","bCoef":0,"cMask":["red"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1310,29],"color":"ffffffff","bCoef":0,"cMask":["blue"],"cGroup":["ball"]},{"radius":0,"invMass":0,"pos":[-1308,62],"color":"ffffffff","bCoef":0,"cMask":["red","blue"],"cGroup":["ball"]},{"radius":2.7,"pos":[-1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":2.7,"pos":[1150,600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":5,"invMass":0,"pos":[-1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[-1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[-1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,-124],"bCoef":0.5,"trait":"goalPost"},{"radius":5,"invMass":0,"pos":[1150,124],"bCoef":0.5,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,-158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2,"invMass":0,"pos":[1250,158],"color":"000000","bCoef":1,"trait":"goalPost"},{"radius":2.7,"pos":[-1150,-600],"cGroup":["ball"],"trait":"cornerflag"},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,-485],"cMask":["none"]},{"radius":0,"pos":[1149,-485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]},{"radius":0,"pos":[-1149,485],"cMask":["none"]},{"radius":0,"pos":[1149,485],"cMask":["none"]},{"pos":[-6.5,-3],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"radius":1.4,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[6.5,-3],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[0,-6.5],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[-4.5,5.5],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"pos":[4.5,5.5],"radius":0.8,"invMass":1e+250,"color":"0","cGroup":["c0"]},{"radius":0.8,"invMass":1e+250,"color":"transparent","cGroup":["c0"]}],"planes":[{"normal":[0,1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-627,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,-627],"b":[1300,-627]}}},{"normal":[0,-1],"dist":-627,"bCoef":0,"cGroup":["ball"],"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-627,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,627],"b":[1300,627]}}},{"normal":[0,1],"dist":-660,"bCoef":0,"_data":{"extremes":{"normal":[0,1],"dist":-660,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,-660],"b":[1300,-660]}}},{"normal":[0,-1],"dist":-660,"bCoef":0,"_data":{"extremes":{"normal":[0,-1],"dist":-660,"canvas_rect":[-1311,-660,1300,660],"a":[-1311,660],"b":[1300,660]}}},{"normal":[1,0],"dist":-1300,"bCoef":0,"_data":{"extremes":{"normal":[1,0],"dist":-1300,"canvas_rect":[-1311,-660,1300,660],"a":[-1300,-660],"b":[-1300,660]}}},{"normal":[-1,0],"dist":-1300,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-1300,"canvas_rect":[-1311,-660,1300,660],"a":[1300,-660],"b":[1300,660]}}},{"normal":[1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[1,0],"dist":-1230,"canvas_rect":[-1311,-660,1300,660],"a":[-1230,-660],"b":[-1230,660]}}},{"normal":[-1,0],"dist":-1230,"bCoef":0,"cMask":["ball"],"cGroup":["ball"],"_data":{"extremes":{"normal":[-1,0],"dist":-1230,"canvas_rect":[-1311,-660,1300,660],"a":[1230,-660],"b":[1230,660]}}}],"traits":{"ballArea":{"vis":false,"bCoef":0,"cMask":["ball"],"cGroup":["ball"]},"goalPost":{"radius":5,"invMass":0,"bCoef":1,"cGroup":["ball"]},"rightNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c3"]},"leftNet":{"radius":0,"invMass":1,"bCoef":0,"cGroup":["ball","c2"]},"stanchion":{"radius":3,"invMass":0,"bCoef":3,"cMask":["none"]},"cornerflag":{"radius":3,"invMass":0,"bCoef":0.2,"color":"FFFF00","cMask":["ball"]},"reargoalNetleft":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":10,"color":"C7E6BD"},"reargoalNetright":{"vis":true,"bCoef":0.1,"cMask":["ball","red","blue"],"curve":-10,"color":"C7E6BD"},"sidegoalNet":{"vis":true,"bCoef":1,"cMask":["ball","red","blue"],"color":"C7E6BD"},"kickOffBarrier":{"vis":false,"bCoef":0.1,"cGroup":["redKO","blueKO"],"cMask":["red","blue"]},"line":{"vis":true,"cMask":[],"color":"C7E6BD"}},"joints":[{"d0":16,"d1":17,"strength":"rigid","color":"678859","length":null},{"d0":18,"d1":19,"strength":"rigid","color":"678859","length":null},{"d0":20,"d1":21,"strength":"rigid","color":"678859","length":null},{"d0":22,"d1":23,"strength":"rigid","color":"678859","length":null},{"d0":0,"d1":25,"length":0,"color":"transparent"},{"d0":0,"d1":24,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":27,"length":6.5,"color":"transparent"},{"d0":0,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":0,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":25,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":27,"length":6.5,"color":"transparent"},{"d0":25,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":25,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":24,"d1":28,"length":8.73212459828649,"color":"transparent"},{"d0":28,"d1":29,"length":9,"color":"transparent"},{"d0":26,"d1":29,"length":8.73212459828649,"color":"transparent"},{"d0":26,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":26,"d1":28,"length":13.901438774457844,"color":"transparent"},{"d0":27,"d1":28,"length":12.816005617976296,"color":"transparent"},{"d0":27,"d1":29,"length":12.816005617976296,"color":"transparent"},{"d0":24,"d1":29,"length":13.901438774457844,"color":"transparent"},{"d0":24,"d1":26,"length":13,"color":"transparent"},{"d0":0,"d1":25,"length":0,"color":"transparent"},{"d0":0,"d1":24,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":0,"d1":27,"length":6.5,"color":"transparent"},{"d0":0,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":0,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":25,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":26,"length":7.158910531638177,"color":"transparent"},{"d0":25,"d1":27,"length":6.5,"color":"transparent"},{"d0":25,"d1":28,"length":7.106335201775948,"color":"transparent"},{"d0":25,"d1":29,"length":7.106335201775948,"color":"transparent"},{"d0":24,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":24,"d1":28,"length":8.73212459828649,"color":"transparent"},{"d0":28,"d1":29,"length":9,"color":"transparent"},{"d0":26,"d1":29,"length":8.73212459828649,"color":"transparent"},{"d0":26,"d1":27,"length":7.3824115301167,"color":"transparent"},{"d0":26,"d1":28,"length":13.901438774457844,"color":"transparent"},{"d0":27,"d1":28,"length":12.816005617976296,"color":"transparent"},{"d0":27,"d1":29,"length":12.816005617976296,"color":"transparent"},{"d0":0,"d1":30,"length":0,"color":"transparent"},{"d0":25,"d1":30,"length":0,"color":"transparent"}],"redSpawnPoints":[],"blueSpawnPoints":[],"canBeStored":false}', 'onPlayerLeave', 'setCustomStadium', 'extraTimeAnnounced', 'onPlayerJoin', 'application/json', '                                        ▒█▀▀█ ▒█░░░ ▒█░▒█', '⏱ FINAL DEL PARTIDO | Si empataron selecciona penales con: !pensred (para que pateen los rojos🔴) y !pensblue (para que pateen los azules🔵)', 'rsCorner', 'yspeed', 'kickPlayer', 'log', '                                        ▒█░▄▄ ▒█░░░ ▒█▀▀█', 'onPlayerTeamChange', 'lat', 'pauseGame', 'blueCK', '505050', 'boosterCount', 'invMass', 'warningCount', '811oRJfWz', 'stringify', 'ballRadius', 'extraTime', '0xff223c', 'getPlayerList', 'admin', 'rsSwingTimer', 'cGroup', ' 🟦 ⚊ 🕒 ', '✅ 🧹 Lᴏs ʙᴀɴs ғᴜᴇʀᴏɴ ʀᴇᴍᴏᴠɪᴅᴏs ᴘᴏʀ ', 'swap', 'ballOutPositionX', '{"name":"🗦⚽🗧𝚁𝙴𝙰𝙻 𝚂𝙾𝙲𝙲𝙴𝚁 🙼  ᴿ ᴱ ⱽ ᴼ ᴸ ᵁ ᵀ ᴵ ᴼ ᴺ  🙼","width":1300,"height":660,"spawnDistance":560,"bg":{"type":"grass","width":1150,"height":600,"kickOffRadius":180,"cornerRadius":0,"color":"', '👋 Hasta pronto! ', 'extraTimeCount', '2vpbxKS', '      ℹ Escribe !help para ver los comandos ⌨     ', 'secondLastKickerName', 'ticks', 'rsTimer', '] - [', 'help', 'substr', '🔥 ⚽ 𝙂𝙊𝙇! ', 'throwInPosY', '463eHQvaF', 'roomName', ColorFondoRS, 'clearbans', 'setPlayerAvatar', '🔐La clave ha sido cambiada por: ', 'redScore', 'name', 'Real Soccer Revolution', 'No hay admin, escribe el comando para ser administrador.', 'code', 'rsGoalKick', 'setpassword', '🏟🌈 El color del fondo del mapa actual es: ', NombreHost, 'noPlayer', 'clearpassword', 'time', 'lastKickerTeam', '🔐 Comando habilitado sólo para Admistradores ⚙️👤', 'cMask', 'rsReady', 'onPositionsReset', ' 🟥 ', 'getScores', '1823YwCEsH', 'then', 'POST', ' - ', 'username', 'bringThrowBack', 'outStatus', 'normal', 'xspeed', 'length', 'replace', 'position', '145825HWBoCM', '🔗 𝗗𝗶𝘀𝗰𝗼𝗿𝗱 𝗥𝗦𝗜: https://discord.gg/BZkDuSV', 'getDiscProperties', 'color', 'geo', ' (👟 Asistencia: ', 'boosterState', '134249tMXEkv', '🔄 Se han intercambiado los equipos', 'stopGame', 'rsActive', 'redCK', '84221WxdGJY', 'startsWith', 'lastPlayAnnounced', 'split', 'redThrow', 'setPlayerTeam', 'getBallPosition', 'extraTimeEnd', 'sqrt', '❌⚽ GOL EN CONTRA! ', 'setDiscProperties', 'onGameStart', '** Ha quitado la contraseña 🗝🔓 ', 'ygravity', '👟', 'forEach', 'redGK', 'onGameTick', 'paused', 'pushedOut', '107sAuBDh', 'public', ' 🗝🔓 La contraseña fue eliminada por ', 'reset', 'throwinKicked', '                                        ▒█▄▄█ ▒█▄▄█ ▒█░▒█', 'trim', 'lon', '0xFFFF00', 'setTimeLimit', '274921JuGtNr', 'rsTouchTeam', '', 'blueThrow', 'token', 'onTeamGoal', 'timeLimit', 'startGame', 'content', 'body', 'setPassword', 'Content-Type', 'updateLastKicker', 'substring', 'custom', 'https://discord.com/api/webhooks/816061374504763402/Us5kMMIjcwUHylZ7-SBGnH2wkODNDHi24wvPk85wj6XecLB754wIHe-iEM776Sfk9_-Y', 'filter', ' Segundos', 'lastKickerId', 'onStadiumChange', ' by ', 'lastKickerName', 'headers', 'find', 'conn', 'maxPlayers'];
var _0x2ffa = function (_0x2ee94c, _0x596748) {
	_0x2ee94c = _0x2ee94c - 0x11f;
	var _0x24f126 = _0x24f1[_0x2ee94c];
	return _0x24f126;
};
var _0x3c81f9 = _0x2ffa;
(function (_0x35acd1, _0x5111e2) {
	var _0x22a73d = _0x2ffa;
	while (!![]) {
		try {
			var _0x4b7342 = parseInt(_0x22a73d(0x186)) * parseInt(_0x22a73d(0x150)) + -parseInt(_0x22a73d(0x140)) * parseInt(_0x22a73d(0x1d7)) + parseInt(_0x22a73d(0x173)) * parseInt(_0x22a73d(0x19f)) + -parseInt(_0x22a73d(0x1a9)) + -parseInt(_0x22a73d(0x17f)) + parseInt(_0x22a73d(0x15a)) * parseInt(_0x22a73d(0x127)) + -parseInt(_0x22a73d(0x18b));
			if (_0x4b7342 === _0x5111e2) break;
			else _0x35acd1['push'](_0x35acd1['shift']());
		} catch (_0x1c7a16) {
			_0x35acd1['push'](_0x35acd1['shift']());
		}
	}
}(_0x24f1, 0x2205c));


function decryptHex(str) {
  if (!str || typeof str !== "string") return ""; // si es undefined o no es string, devuelvo vacío

  let hexString = str;
  let strOut = "";
  for (let x = 0; x < hexString.length; x += 2) {
    strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
  }
  return strOut;
}




var throwTimeOut = 0x1a4,
	gkTimeOut = 0x258,
	ckTimeOut = 0x258,
	throwinDistance = 0x10e,
	mapBGColor = _0x3c81f9(0x15c),
	superAdminCode = _0x3c81f9(0x13c);

var allowPublicAdmin = true; // if true then !admin command is enabled

// Función para obtener el admin que corresponde a un nick
function getAdminByNick(nick) {
  return ListaDeAdmins.find(admin => admin.nicks.includes(nick));
}

// Almacenar auth por playerId
var playerAuths = {};

// Función que valida si un jugador es admin válido
function esAdminValido(player) {
  let auth = playerAuths[player.id];
  if (!auth) return false; // No hay auth registrado para este player

  // Buscar en la lista si coincide el nick y auth
  for (let admin of ListaDeAdmins) {
    if (admin.nicks.includes(player.name)) {
      // Si auth en ListaDeAdmins está vacío, se acepta cualquier auth (sólo nombre)
      if (!admin.auth || admin.auth === "") {
        return true;
      }
      // Si auth está definido, debe coincidir exactamente
      if (admin.auth === auth) {
        return true;
      }
    }
  }
  return false;
}

function obtenerDiscos() {
    let discos = [];

    if (TipoPelotaFutsal === "oveja") {
        discos = [
            {"pos":[-5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[5,-1],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[0,-5],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[-3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[3,4],"radius":0.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"radius":1.7,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]}
        ];
    } else if (TipoPelotaFutsal === "bazinga") {
        discos = [
            {"pos":[-5,-1],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[5,-1],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[0,-5],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[-3,4],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[3,4],"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"radius":0.01,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]}
        ];
    } else if (TipoPelotaFutsal === "glh") {
        discos = [
            {"pos":[-5,-1],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[5,-1],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[0,-5],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[-3,4],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"pos":[3,4],"radius":0.4,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]},
            {"radius":0.45,"invMass":1e+300,"color":"0","cMask":[],"cGroup":[]}
        ];
    }

    return discos;
}

// Continuación del script...
