// ▇▇▇▇▇▇▇▇▇ ⚙️ CARGA DE POLYFILLS DE NODE.JS ▇▇▇▇▇▇▇▇▇
require('./polyfills');

// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN DEL HOST ▇▇▇▇▇▇▇▇▇

// 📝 NOMBRE DEL HOST
var NombreHost = '🏆 #FVA | x1 | GANA SIGUE';

// 👁️ VISIBILIDAD DEL HOST 
var VisibilidadDelHost = true; 

// 👥 CANTIDAD MÁXIMA DE JUGADORES
var CantidadDeJugadores = 15; 

// 🔄 REINICIAR STATS
var ReiniciarStats = "No"; 

// 🔒 CONTRASEÑA DEL HOST
var PasswordDelHost = null;

// ▇▇▇▇▇▇▇▇▇ 👑 ADMINISTRACIÓN DEL HOST 🔑 ▇▇▇▇▇▇▇▇▇

var ClaveParaSerAdmin = "!fvaclub"; 

var ListaDeAdmins = [
  {
    auth: "", 
    nicks: ["112"]
  }
];

var contrasena = "fvaclub";
var LugaresReservados = 2; 

// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN DEL BOT 🤖 ▇▇▇▇▇▇▇▇▇

var BotVisible = true; 
var NombreBot = "🚩 Árbitro Bot 🤖"; 
var StatusBot = "afk"; 

// ▇▇▇▇▇▇▇▇▇ ⚙️ CONFIGURACIÓN DEL JUEGO 🎮 ▇▇▇▇▇▇▇▇▇

var MapaPorDefecto = "Futsal x2"; 
var TiempoDeJuego = 3;
var LimiteDeGoles = 3;

// ▇▇▇▇▇▇▇ 🎮 MODOS DE JUEGO  ▇▇▇▇▇▇▇

let autoBalanceEnabled = false; 
let CamisetasGanaSigue = false; 
var cambioCami = false; 
var powerShotMode = false; 
var JabulaniMode = false; 
var combaMode = false; 
var GolDeOroActivado = false; 
var FairPlayActivado = false; 
let ganasigueEnabled = true; 
let modoJueganTodos = false; 
let modoJueganAlgunos = true; 
let maxPlayersPerTeam = 1 
let isAFKpaused = false; 

// MODO AUTOMATIZADO
var automatizadoActivado = false; 
var tiempoLimiteCambio = 30; 
var tiempoEsperaCambio = 5000; 
var configuracionActual = null;

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

var TamanoMinimoPermitido = 15;
var TamanoMaximoPermitido = 15;
var CantidadCambiarTamano = 1;

var camisetaRed = "/colors red 66 FFA649 DE0019 B80017 820217";
var NombreEquipoRojo = "RED";
var camisetaBlue = "/colors blue 55 c1ff00 052647 005DB3 03B2F0";
var NombreEquipoAzul = "BLUE";

var ActivarReCaptcha = false;
const LimiteMaximoDeJugadoresAFK = 4; 
var MaximoJugadoresPorIp = 2;
const PaisesProhibidos = ["united states", "united kingdom"];
let IpPlayers = []; 
var MensajeBaneoPorIp = "❌ El admin ha baneado tu IP 📶"
const NicknamesPROHIBIDOS = ["@everyone", "@here", "@"]; 

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

let GrabarTodo = false;
const WebhookGrabacionesSalaCompleta = "https://discord.com/api/webhooks/1322348400531738835/oKP4BL4iz8XhKgjzufGqUYfV7owjVlsyOgrlCyhhnX0Dcu3rJTiBUeVZI_53-QIBAaeI";
let grabando = false;

var AnuncioHostAbierto = "https://discord.com/api/webhooks/1487492004530360412/MyBmGTVG-P_kxBfXrJWvoeFS-bhQ5H501JBgPrhd58xJ2zLFGt2U27n88iOa9HSUCCyi";
var MensajeHostAbierto = 
`# 🚀 ¡NUEVO HOST ABIERTO! 🎮
## ⚽ ¡No te lo pierdas! Únete al partido ahora y demuestra tus habilidades en la cancha.
¡La diversión está por comenzar, no faltes! 🔥`;
var TagHostAbierto = "@here";

const WebhookGrabaciones = "https://discord.com/api/webhooks/1487491386524696647/FM1xmFwxcJQN4JVuPVTbqO6zSlf6yKtok6ZeX1TGt75sGnreYLXQ7ZM4zyWPsOP_fPxL";
const GrabacionesDiscord = "https://discord.gg/9mbxwBG4b";
var WebhookParaLlamarAdmins = "https://discord.com/api/webhooks/1487491723977298031/edoX1Ym14-nbDa8mIC8ddPaZPFM_Z3TxT_CFflRIWe2fBWOcX2CBjMXFNUsX6IMbhBT";
var RolAdminHost = "@here"; 
var tiempoEsperaAdminsEnMinutos = 2;  

const AnuncioKicksBans = "https://discord.com/api/webhooks/1487492749468106942/mKw7T9YIFBCS_yZ-a4ABZX0e4MiGoMqWjtAr5uBauZNCFjrt8s1rK_KIiYyZpteDEeO5";
var webhookMensajesJugadores  = "https://discord.com/api/webhooks/1487492972890034296/rhsCI7l-H21fs6NdbN4NQt4pCo8cUqAG7J9PsS6W4_EbdXIJbMD5qqG-v82slJF1AEk2";
var webhookBoletero = "https://discord.com/api/webhooks/1215904770699690104/Cuk8W0gJLVhE9gSw54YseGe6KR5PnkeHcB7dvD_GGoGAO6f-JoAsQfMiOQnieiAfU84D";
var webhookEstadisticasJugadores = "https://discord.com/api/webhooks/1338347025741385820/FxJAPCh3H6hNZvcaQOabz58RApSIwrjqjfjeek0y1k6GkbzN-UKnpUCipahK6W3b_aNW";
var WebhookParaFirmar = "https://discord.com/api/webhooks/1425328111695691898/T9a3EVREqsf9eFGVitsGXSSVNZ6b9yv_20qjzQeoGEul1CX02XgglMo3qvudljNOP0ww";
var webhookIPJugadores  = "https://discord.com/api/webhooks/1329078558857101374/ZyjKtX_NsleSgWex_-sLZ2ukjv3Mo6cy0M-zLXTwLMu3v6svJo8CxJtrokjcPj7aejbp";

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

var colormensaje = "00FF00"; 
var TipoDeLetra = "bold"; 

var Anuncio = "🏆 #FVA | x1 GANA SIGUE | UNITE AL DISCORD:https://discord.gg/9mbxwBG4b"; 
var AnuncioMinuto = 0; 
var AnuncioSegundos = 10; 
var TipoDeLetraAnuncio = "bold"; 
var ColorAnuncio = "FFFF00"; 

var Anuncio2 = "🛑 Para expulsar a un jugador, utiliza el comando `!expulsar NúmeroID`. Para ver los IDs de los jugadores, escribe `#` en el chat. Ejemplo: `!expulsar 25` expulsará al jugador con el ID 25.";
var Anuncio2Minuto = 0; 
var Anuncio2Segundos = 40; 
var TipoDeLetraAnuncio2 = "italic"; 
var ColorAnuncio2 = "CCFF00"; 

var MostrarIps = "No"; 
const ColocarJuntoAlNickname = ""; 

var PorcentajeDeVotosBan = 40; 
var PorcentajeDeVotosAdmin = 40; 
const COOLDOWN_COMANDOS = 150; 
const MIN_PLAYERS_FOR_ADMIN_VOTE = 5; 
const MIN_PLAYERS_FOR_KICK_VOTE = 5; 
const DURACION_VOTACION = 120; 

const SegundosPermitidosAFK = 15; 
const MinutosPermitidosAFK = 5;  

var UbicacionDelHost = "myubication"; 
var BanderaDelHost = 'Germany';  

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
const SpectChatColor = 0xD3D3D3; 

const NickNamesRol1 = ["112"]; 
const NickNamesRol2 = []; 
const NickNamesRol3 = []; 
const NickNamesRol4 = []; 
const NickNamesRol5 = []; 
const NickNamesRol6 = []; 
const NickNamesRol7 = []; 
const NickNamesRol8 = []; 
const NickNamesRol9 = []; 
const NickNamesRol10 = []; 

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

let MESSAGE_COOLDOWN = 5000; 
let SPAM_LIMIT = 5; 
let COOLDOWN_TIME = 10000; 
let cooldownEnabled = true; 
let KICK_THRESHOLD = 7; 

let messageTimestamps = {};
let playerCooldowns = {};
let spamWarnings = {}; 

let lastCommandTime = {}; 
const commandCooldown = 5000; 

const cooldowns = {};
const COOLDOWN_TIEMPO = 5 * 1000; 

var PelotaRS = "FFFFFF"			
var PelotaRS_PowerShot = "FF4500"	
var PotenciaPowerShotRS = 2 

var PelotaFutsal = "FFFFFF"			
var PelotaFutsal_PowerShot = "FF4500"	
var PotenciaPowerShot = 2.5  
var TipoPelotaFutsal = "oveja";  

var ChallongeLink = 'challonge.com/es/' 
var regla1 = '⯌ 4 vs 4'
var regla2 = '⯌ Equipo que gana el partido, continua jugando. 🏆'
var regla3 = '⯌ Dos jugadores ingresan por orden de Espectadores. Los otros dos restantes, los puede elegir.'
var regla4 = '⯌ El equipo ganador le toca el país con más probabilidades de ganar.'
var regla5 = '⯌ Si empatan, salen ambos equipos. Y los primeros cuatro jugadores de la lista de Espectadores pasan a ser capitanes, 2 en el Team Red y los otros 2 en el Team Blue.'

var kickBanAttempts = {}; 
var maxAttempts = 1; 
var interval = 30000; 
var alertThreshold = 2; 
var cooldownTime = 60000; 
var cooldownActive = {}; 

let playerMinutesPlayed = JSON.parse(localStorage.getItem('playerMinutesPlayed')) || {};
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

var camisetasEquipos = {
    "riv/titular/red": { codigo: "/colors red 30 231F20 FFFFFF EE1B2C FFFFFF", nombreEquipo: "RIVER PLATE" },
    "boc/titular/blue": { codigo: "/colors blue 90 FFFFFF 033F86 FAB900 033F86", nombreEquipo: "BOCA JUNIORS" },
    "nac/titular/blue": { codigo: "/colors blue 55 d0142c 003895 FFFFFF 003895", nombreEquipo: "NACIONAL (UY)" },
    "pen/titular/red": { codigo: "/colors red 180 ffffff FFCA00 000000 FFCA00", nombreEquipo: "PEÑAROL" },
    "rac/titular/blue": { codigo: "/colors blue 180 002942 00A5E3 FFFFFF 00A5E3", nombreEquipo: "RACING CLUB" },
    "ind/titular/red": { codigo: "/colors red 60 FFFFFF EC1C24", nombreEquipo: "INDEPENDIENTE" },
    "nob/titular/red": { codigo: "/colors red 180 ffffff 000000 BF0311", nombreEquipo: "NEWELLS" },
    "cen/titular/blue": { codigo: "/colors blue 180 ffffff FCD724 0D3E66 FCD724", nombreEquipo: "ROSARIO CENTRAL" },
    "bar/titular/red": { codigo: "/colors red 180 F5B606 011EDE C80056", nombreEquipo: "BARCELONA FC" },
    "rma/titular/blue": { codigo: "/colors blue 73 005ca7 FFC10A FFFFFF FFFFFF", nombreEquipo: "REAL MADRID" },
    "slo/titular/red": { codigo: "/colors red 180 FFFFFF E9282D 1D3B56 E9282D", nombreEquipo: "SAN LORENZO" },
    "int/titular/blue": { codigo: "/colors blue 180 FFFFFF 00239C 000000 00239C", nombreEquipo: "INTER MILAN" },
    "acm/titular/red": { codigo: "/colors red 180 FFFFFF DF061B 000000 DF061B", nombreEquipo: "AC MILAN" },
    "fcb/titular/red": { codigo: "/colors red 90 FFFFFF DC052D ED0038 ED0038", nombreEquipo: "BAYERN DE MUNICH" },
    "bvb/titular/blue": { codigo: "/colors blue 90 1d1d1b 1d1d1b fad515 fad515", nombreEquipo: "BORUSSIA DORTMUND" },
    "mun/titular/red": { codigo: "/colors red 90 FFFFFF D90119 C7011A AB0918", nombreEquipo: "MANCHESTER UNITED" },
    "mci/titular/blue": { codigo: "/colors blue 55 ffffff 6DACDF", nombreEquipo: "MANCHESTER CITY" },
    "mia/titular/red": { codigo: "/colors red 60 000000 F7B6CC", nombreEquipo: "INTER MIAMI" },
    "nas/titular/blue": { codigo: "/colors blue 15 30457C FCE501 FCE501 081C4E", nombreEquipo: "AL-NASSR" }
};

var codigosBanderas = {
  Haxball: 'FAM', Argentina: 'AR', Brazil: 'BR', Chile: 'CL', Uruguay: 'UY', Colombia: 'CO', Mexico: 'MX',
  UnitedStates: 'US', Germany: 'DE', France: 'FR', Spain: 'ES', Italy: 'IT', UnitedKingdom: 'GB'
};

var countryCoords = {
    "argentina": [-34.6882652, -58.5685501],
    "chile": [-33.45, -70.66],
    "uruguay": [-34.90, -56.19],
    "brasil": [-23.55, -46.64],
    "germany": [52.52, 13.40],
    "myubication": null,
};

var VersionDelScript = "``📅 ᴠᴇʀsɪᴏ́ɴ ᴅᴇʟ sᴄʀɪᴘᴛ 25.06.18  | Futsal by GLH ``"

let equipoAzulPosesion = 0;
let equipoRojoPosesion = 0;
var currentMap = MapaPorDefecto; 
var posesionEquipoA = 0;
var posesionEquipoB = 0;
var ColorFondoRS = '6d945b'
var RSRMap;
var THERealFutsalMap;
var PartidoArrancado;
const afkPlayerIDs = new Set()
var mutedPlayers = []; 
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
var whoTouchedLast; 
var teamRed;
var teamBlue;
var palabrasSilenciadas = [];

let advertisingInterval;
let advertisingMessage = '';
let advertisingMinutes = 0;
let lastAdvertisingTime = 0;
let playerMatchTime = {}; 

const leaveFlood = { count: 0, lastReset: Date.now() };
const LEAVE_FLOOD_WINDOW = 2000; 
const LEAVE_FLOOD_LIMIT = 5;     
let joinFloodTimestamps = [];

function decryptHex(str) {
  if (!str || typeof str !== "string") return ""; 
  let hexString = str;
  let strOut = "";
  for (let x = 0; x < hexString.length; x += 2) {
    strOut += String.fromCharCode(parseInt(hexString.substr(x, 2), 16));
  }
  return strOut;
}

var allowPublicAdmin = true; 

function getAdminByNick(nick) {
  return ListaDeAdmins.find(admin => admin.nicks.includes(nick));
}

var playerAuths = {};

function esAdminValido(player) {
  let auth = playerAuths[player.id];
  if (!auth) return false; 

  for (let admin of ListaDeAdmins) {
    if (admin.nicks.includes(player.name)) {
      if (!admin.auth || admin.auth === "") return true;
      if (admin.auth === auth) return true;
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

const stadiums = require('./stadiums');

function whichTeam(){var players=room.getPlayerList();var redTeam=players.filter(player=>player.team==1);var blueTeam=players.filter(player=>player.team==2);return[redTeam,blueTeam]}
var roomName=NombreHost;var roomPassword=ClaveParaSerAdmin;var maxPlayers=CantidadDeJugadores;var roomPublic=VisibilidadDelHost;var roomLink="";var gameTime=TiempoDeJuego;var map="RSR";var latitud=countryCoords[UbicacionDelHost]?countryCoords[UbicacionDelHost][0]:null;var longitud=countryCoords[UbicacionDelHost]?countryCoords[UbicacionDelHost][1]:null;var codigoBandera=codigosBanderas[BanderaDelHost]?codigosBanderas[BanderaDelHost]:null;var geoConfig={};if(UbicacionDelHost!=="myubication"&&latitud!==null&&longitud!==null&&codigoBandera!==null){geoConfig={code:codigoBandera,lat:latitud,lon:longitud}}else{console.warn("Usando configuración de geolocalización por defecto.")}

try {
  var roomConfig = { roomName: NombreHost, password: PasswordDelHost, maxPlayers: maxPlayers, public: roomPublic, playerName: NombreBot, noPlayer: !BotVisible };
  if (UbicacionDelHost !== "myubication" && latitud !== null && longitud !== null && codigoBandera !== null) { roomConfig.geo = geoConfig; }
  if (typeof HBInit === 'function') {
    var room = HBInit(roomConfig);
    if (room && typeof room.setRequireRecaptcha === 'function') {
      room.setRequireRecaptcha(ActivarReCaptcha);
    }
    console.log("Sala creada exitosamente en Node.js");
  } else {
    console.warn("⚠️ HBInit no está definido. Para ejecutar el bot en Node.js, asegurate de instalar 'haxball-headless-api' (npm i haxball-headless-api) o ejecutar el script con tu runner preferido (ej: node-haxball).");
  }
} catch (error) {
  console.error("Error al crear la sala:", error);
}

class Game {
  constructor() {
    this.time = 0; this.paused = false; this.ballRadius = 0; this.rsTouchTeam = 0; this.rsActive = true; this.rsReady = false; this.rsCorner = false; this.rsGoalKick = false; this.rsSwingTimer = 1000; this.rsTimer = 0; this.ballOutPositionX = 0; this.ballOutPositionY = 0; this.throwInPosY = 0; this.outStatus = ""; this.warningCount = 0; this.bringThrowBack = false; this.extraTime = false; this.extraTimeCount = 0; this.extraTimeEnd = 0; this.extraTimeAnnounced = false; this.lastPlayAnnounced = false; this.boosterState = false; this.throwinKicked = false; this.pushedOut = false; this.lastKickerId = null; this.lastKickerName = ""; this.lastKickerTeam = 0; this.secondLastKickerId = null; this.secondLastKickerName = ""; this.secondLastKickerTeam = 0; this.redScore = 0; this.blueScore = 0; this.powershotCounter = 0; this.powershotID = 0; this.powershotTrigger = false;
  }
  updateLastKicker(id, name, team) {
    this.secondLastKickerId = this.lastKickerId; this.secondLastKickerName = this.lastKickerName; this.secondLastKickerTeam = this.lastKickerTeam; this.lastKickerId = id; this.lastKickerName = name; this.lastKickerTeam = team;
  }
}

var ArqueroRED = null; var ArqueroBLUE = null;
function setDefaultStadium() {
  if (!room) return;
  switch (MapaPorDefecto) {
    case "Futsal x5 cesped": room.setCustomStadium(stadiums.getFutx5cespedMap()); break;
    default: break;
  }
}

setDefaultStadium();
console.log("Bot cargado e inicializado de manera estable en Node.js (host.js)");
