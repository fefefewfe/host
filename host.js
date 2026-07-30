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
var WebhookParaLlamarAdmins = "https://discord.com/api/webhooks/1487491723977298031/edoX1Ym14-nbDa8mIC8ddPaZPFM_Z3TxT_CFflRIWe2fBWOcX2CBjMXFNUsX6IMbhBT8";


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

/*-------------------------------- STADIUMS ---------------------------------*/




function getFutx5cespedMap() {
	var Futx5cespedMap = `{

	"name" : "⚽️ Futsal x5 👑",

	"width" : 1080,

	"height" : 532,

	"bg" : { "kickOffRadius" : 6, "color" : "2E5A27" },

	"vertexes" : [
		/* 0 */ { "x" : -950, "y" : 460, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		/* 1 */ { "x" : -950, "y" : 90, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		/* 2 */ { "x" : -950, "y" : -90, "bCoef" : 0.9, "cMask" : ["ball" ], "curve" : 0, "bias" : 12 },
		/* 3 */ { "x" : -950, "y" : -460, "bCoef" : 0.9, "cMask" : ["ball" ], "curve" : 0, "bias" : -12 },
		/* 4 */ { "x" : 950, "y" : 460, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		/* 5 */ { "x" : 950, "y" : 90, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		/* 6 */ { "x" : 950, "y" : -90, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		/* 7 */ { "x" : 950, "y" : -460, "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		/* 8 */ { "x" : 0, "y" : 508, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 9 */ { "x" : 0, "y" : 150, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 10 */ { "x" : 0, "y" : -150, "bCoef" : 0, "cMask" : [ ] },
		/* 11 */ { "x" : 0, "y" : -508, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 12 */ { "x" : -995, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		/* 13 */ { "x" : 995, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		/* 14 */ { "x" : -995, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12 },
		/* 15 */ { "x" : 995, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		/* 16 */ { "x" : 951, "y" : 460, "bCoef" : 0.9, "cMask" : ["ball" ] },
		/* 17 */ { "x" : 951, "y" : -460, "bCoef" : 0.9, "cMask" : ["ball" ] },
		/* 18 */ { "x" : 0, "y" : 460, "bCoef" : 0, "cMask" : [ ] },
		/* 19 */ { "x" : 0, "y" : -460, "bCoef" : 0, "cMask" : [ ] },
		/* 20 */ { "x" : 0, "y" : 150, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 21 */ { "x" : 0, "y" : -150, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 22 */ { "x" : -950, "y" : 435, "bCoef" : 0.1, "cMask" : [ ] },
		/* 23 */ { "x" : -925, "y" : 460, "bCoef" : 0.1, "cMask" : [ ] },
		/* 24 */ { "x" : -950, "y" : -435, "bCoef" : 0.1, "cMask" : [ ] },
		/* 25 */ { "x" : -925, "y" : -460, "bCoef" : 0.1, "cMask" : [ ] },
		/* 26 */ { "x" : 950, "y" : -435, "bCoef" : 0.1, "cMask" : [ ] },
		/* 27 */ { "x" : 925, "y" : -460, "bCoef" : 0.1, "cMask" : [ ] },
		/* 28 */ { "x" : 950, "y" : 435, "bCoef" : 0.1, "cMask" : [ ] },
		/* 29 */ { "x" : 925, "y" : 460, "bCoef" : 0.1, "cMask" : [ ] },
		/* 30 */ { "x" : 948, "y" : -166, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 31 */ { "x" : -948, "y" : -166, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 32 */ { "x" : 948, "y" : -198, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 33 */ { "x" : -948, "y" : -198, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 34 */ { "x" : 948, "y" : 166, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 35 */ { "x" : -948, "y" : 166, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 36 */ { "x" : 948, "y" : 198, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 37 */ { "x" : -948, "y" : 198, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 38 */ { "x" : 948, "y" : 348, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 39 */ { "x" : -948, "y" : 348, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 40 */ { "x" : 948, "y" : 380, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 41 */ { "x" : -948, "y" : 380, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 42 */ { "x" : 948, "y" : -348, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 43 */ { "x" : -948, "y" : -348, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 44 */ { "x" : 948, "y" : -380, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 45 */ { "x" : -948, "y" : -380, "bCoef" : 0, "cMask" : [ ], "color" : "377324" },
		/* 46 */ { "x" : 948, "y" : 16, "bCoef" : 0, "cMask" : [ ], "color" : "123456" },
		/* 47 */ { "x" : -948, "y" : 16, "bCoef" : 0, "cMask" : [ ], "color" : "123456" },
		/* 48 */ { "x" : 948, "y" : 14, "bCoef" : 0, "cMask" : [ ] },
		/* 49 */ { "x" : -948, "y" : 14, "bCoef" : 0, "cMask" : [ ] },
		/* 50 */ { "x" : 948, "y" : 12, "bCoef" : 0, "cMask" : [ ] },
		/* 51 */ { "x" : -948, "y" : 12, "bCoef" : 0, "cMask" : [ ] },
		/* 52 */ { "x" : 948, "y" : 10, "bCoef" : 0, "cMask" : [ ] },
		/* 53 */ { "x" : -948, "y" : 10, "bCoef" : 0, "cMask" : [ ] },
		/* 54 */ { "x" : 948, "y" : 8, "bCoef" : 0, "cMask" : [ ] },
		/* 55 */ { "x" : -948, "y" : 8, "bCoef" : 0, "cMask" : [ ] },
		/* 56 */ { "x" : 948, "y" : 6, "bCoef" : 0, "cMask" : [ ] },
		/* 57 */ { "x" : -948, "y" : 6, "bCoef" : 0, "cMask" : [ ] },
		/* 58 */ { "x" : 948, "y" : 4, "bCoef" : 0, "cMask" : [ ] },
		/* 59 */ { "x" : -948, "y" : 4, "bCoef" : 0, "cMask" : [ ] },
		/* 60 */ { "x" : 948, "y" : 2, "bCoef" : 0, "cMask" : [ ] },
		/* 61 */ { "x" : -948, "y" : 2, "bCoef" : 0, "cMask" : [ ] },
		/* 62 */ { "x" : 948, "y" : 0, "bCoef" : 0, "cMask" : [ ] },
		/* 63 */ { "x" : -948, "y" : 0, "bCoef" : 0, "cMask" : [ ] },
		/* 64 */ { "x" : 948, "y" : -2, "bCoef" : 0, "cMask" : [ ] },
		/* 65 */ { "x" : -948, "y" : -2, "bCoef" : 0, "cMask" : [ ] },
		/* 66 */ { "x" : 948, "y" : -4, "bCoef" : 0, "cMask" : [ ] },
		/* 67 */ { "x" : -948, "y" : -4, "bCoef" : 0, "cMask" : [ ] },
		/* 68 */ { "x" : 948, "y" : -6, "bCoef" : 0, "cMask" : [ ] },
		/* 69 */ { "x" : -948, "y" : -6, "bCoef" : 0, "cMask" : [ ] },
		/* 70 */ { "x" : 948, "y" : -8, "bCoef" : 0, "cMask" : [ ] },
		/* 71 */ { "x" : -948, "y" : -8, "bCoef" : 0, "cMask" : [ ] },
		/* 72 */ { "x" : 948, "y" : -10, "bCoef" : 0, "cMask" : [ ] },
		/* 73 */ { "x" : -948, "y" : -10, "bCoef" : 0, "cMask" : [ ] },
		/* 74 */ { "x" : 948, "y" : -12, "bCoef" : 0, "cMask" : [ ] },
		/* 75 */ { "x" : -948, "y" : -12, "bCoef" : 0, "cMask" : [ ] },
		/* 76 */ { "x" : 948, "y" : -16, "bCoef" : 0, "cMask" : [ ], "color" : "123456" },
		/* 77 */ { "x" : -948, "y" : -16, "bCoef" : 0, "cMask" : [ ], "color" : "123456" },
		/* 78 */ { "x" : 0, "y" : 150, "bCoef" : 0, "cMask" : [ ] },
		/* 79 */ { "x" : 0, "y" : -150, "bCoef" : 0, "cMask" : [ ] },
		/* 80 */ { "x" : 0, "y" : 150, "bCoef" : 0, "cMask" : [ ] },
		/* 81 */ { "x" : 0, "y" : -150, "bCoef" : 0, "cMask" : [ ] },
		/* 82 */ { "x" : 948, "y" : 168, "bCoef" : 0, "cMask" : [ ] },
		/* 83 */ { "x" : -948, "y" : 168, "bCoef" : 0, "cMask" : [ ] },
		/* 84 */ { "x" : 948, "y" : 170, "bCoef" : 0, "cMask" : [ ] },
		/* 85 */ { "x" : -948, "y" : 170, "bCoef" : 0, "cMask" : [ ] },
		/* 86 */ { "x" : 948, "y" : 172, "bCoef" : 0, "cMask" : [ ] },
		/* 87 */ { "x" : -948, "y" : 172, "bCoef" : 0, "cMask" : [ ] },
		/* 88 */ { "x" : 948, "y" : 174, "bCoef" : 0, "cMask" : [ ] },
		/* 89 */ { "x" : -948, "y" : 174, "bCoef" : 0, "cMask" : [ ] },
		/* 90 */ { "x" : 948, "y" : 176, "bCoef" : 0, "cMask" : [ ] },
		/* 91 */ { "x" : -948, "y" : 176, "bCoef" : 0, "cMask" : [ ] },
		/* 92 */ { "x" : 948, "y" : 178, "bCoef" : 0, "cMask" : [ ] },
		/* 93 */ { "x" : -948, "y" : 178, "bCoef" : 0, "cMask" : [ ] },
		/* 94 */ { "x" : 948, "y" : 180, "bCoef" : 0, "cMask" : [ ] },
		/* 95 */ { "x" : -948, "y" : 180, "bCoef" : 0, "cMask" : [ ] },
		/* 96 */ { "x" : 948, "y" : 182, "bCoef" : 0, "cMask" : [ ] },
		/* 97 */ { "x" : -948, "y" : 182, "bCoef" : 0, "cMask" : [ ] },
		/* 98 */ { "x" : 948, "y" : 184, "bCoef" : 0, "cMask" : [ ] },
		/* 99 */ { "x" : -948, "y" : 184, "bCoef" : 0, "cMask" : [ ] },
		/* 100 */ { "x" : 948, "y" : 186, "bCoef" : 0, "cMask" : [ ] },
		/* 101 */ { "x" : -948, "y" : 186, "bCoef" : 0, "cMask" : [ ] },
		/* 102 */ { "x" : 948, "y" : 188, "bCoef" : 0, "cMask" : [ ] },
		/* 103 */ { "x" : -948, "y" : 188, "bCoef" : 0, "cMask" : [ ] },
		/* 104 */ { "x" : 948, "y" : 190, "bCoef" : 0, "cMask" : [ ] },
		/* 105 */ { "x" : -948, "y" : 190, "bCoef" : 0, "cMask" : [ ] },
		/* 106 */ { "x" : 948, "y" : 192, "bCoef" : 0, "cMask" : [ ] },
		/* 107 */ { "x" : -948, "y" : 192, "bCoef" : 0, "cMask" : [ ] },
		/* 108 */ { "x" : 948, "y" : 194, "bCoef" : 0, "cMask" : [ ] },
		/* 109 */ { "x" : -948, "y" : 194, "bCoef" : 0, "cMask" : [ ] },
		/* 110 */ { "x" : 948, "y" : 350, "bCoef" : 0, "cMask" : [ ] },
		/* 111 */ { "x" : -948, "y" : 350, "bCoef" : 0, "cMask" : [ ] },
		/* 112 */ { "x" : 948, "y" : 352, "bCoef" : 0, "cMask" : [ ] },
		/* 113 */ { "x" : -948, "y" : 352, "bCoef" : 0, "cMask" : [ ] },
		/* 114 */ { "x" : 948, "y" : 354, "bCoef" : 0, "cMask" : [ ] },
		/* 115 */ { "x" : -948, "y" : 354, "bCoef" : 0, "cMask" : [ ] },
		/* 116 */ { "x" : 948, "y" : 356, "bCoef" : 0, "cMask" : [ ] },
		/* 117 */ { "x" : -948, "y" : 356, "bCoef" : 0, "cMask" : [ ] },
		/* 118 */ { "x" : 948, "y" : 358, "bCoef" : 0, "cMask" : [ ] },
		/* 119 */ { "x" : -948, "y" : 358, "bCoef" : 0, "cMask" : [ ] },
		/* 120 */ { "x" : 948, "y" : 360, "bCoef" : 0, "cMask" : [ ] },
		/* 121 */ { "x" : -948, "y" : 360, "bCoef" : 0, "cMask" : [ ] },
		/* 122 */ { "x" : 948, "y" : 362, "bCoef" : 0, "cMask" : [ ] },
		/* 123 */ { "x" : -948, "y" : 362, "bCoef" : 0, "cMask" : [ ] },
		/* 124 */ { "x" : 948, "y" : 364, "bCoef" : 0, "cMask" : [ ] },
		/* 125 */ { "x" : -948, "y" : 364, "bCoef" : 0, "cMask" : [ ] },
		/* 126 */ { "x" : 948, "y" : 366, "bCoef" : 0, "cMask" : [ ] },
		/* 127 */ { "x" : -948, "y" : 366, "bCoef" : 0, "cMask" : [ ] },
		/* 128 */ { "x" : 948, "y" : 368, "bCoef" : 0, "cMask" : [ ] },
		/* 129 */ { "x" : -948, "y" : 368, "bCoef" : 0, "cMask" : [ ] },
		/* 130 */ { "x" : 948, "y" : 370, "bCoef" : 0, "cMask" : [ ] },
		/* 131 */ { "x" : -948, "y" : 370, "bCoef" : 0, "cMask" : [ ] },
		/* 132 */ { "x" : 948, "y" : 372, "bCoef" : 0, "cMask" : [ ] },
		/* 133 */ { "x" : -948, "y" : 372, "bCoef" : 0, "cMask" : [ ] },
		/* 134 */ { "x" : 948, "y" : 374, "bCoef" : 0, "cMask" : [ ] },
		/* 135 */ { "x" : -948, "y" : 374, "bCoef" : 0, "cMask" : [ ] },
		/* 136 */ { "x" : 948, "y" : 376, "bCoef" : 0, "cMask" : [ ] },
		/* 137 */ { "x" : -948, "y" : 376, "bCoef" : 0, "cMask" : [ ] },
		/* 138 */ { "x" : 948, "y" : -168, "bCoef" : 0, "cMask" : [ ] },
		/* 139 */ { "x" : -948, "y" : -168, "bCoef" : 0, "cMask" : [ ] },
		/* 140 */ { "x" : 948, "y" : -170, "bCoef" : 0, "cMask" : [ ] },
		/* 141 */ { "x" : -948, "y" : -170, "bCoef" : 0, "cMask" : [ ] },
		/* 142 */ { "x" : 948, "y" : -172, "bCoef" : 0, "cMask" : [ ] },
		/* 143 */ { "x" : -948, "y" : -172, "bCoef" : 0, "cMask" : [ ] },
		/* 144 */ { "x" : 948, "y" : -174, "bCoef" : 0, "cMask" : [ ] },
		/* 145 */ { "x" : -948, "y" : -174, "bCoef" : 0, "cMask" : [ ] },
		/* 146 */ { "x" : 948, "y" : -176, "bCoef" : 0, "cMask" : [ ] },
		/* 147 */ { "x" : -948, "y" : -176, "bCoef" : 0, "cMask" : [ ] },
		/* 148 */ { "x" : 948, "y" : -178, "bCoef" : 0, "cMask" : [ ] },
		/* 149 */ { "x" : -948, "y" : -178, "bCoef" : 0, "cMask" : [ ] },
		/* 150 */ { "x" : 948, "y" : -180, "bCoef" : 0, "cMask" : [ ] },
		/* 151 */ { "x" : -948, "y" : -180, "bCoef" : 0, "cMask" : [ ] },
		/* 152 */ { "x" : 948, "y" : -182, "bCoef" : 0, "cMask" : [ ] },
		/* 153 */ { "x" : -948, "y" : -182, "bCoef" : 0, "cMask" : [ ] },
		/* 154 */ { "x" : 948, "y" : -184, "bCoef" : 0, "cMask" : [ ] },
		/* 155 */ { "x" : -948, "y" : -184, "bCoef" : 0, "cMask" : [ ] },
		/* 156 */ { "x" : 948, "y" : -186, "bCoef" : 0, "cMask" : [ ] },
		/* 157 */ { "x" : -948, "y" : -186, "bCoef" : 0, "cMask" : [ ] },
		/* 158 */ { "x" : 948, "y" : -188, "bCoef" : 0, "cMask" : [ ] },
		/* 159 */ { "x" : -948, "y" : -188, "bCoef" : 0, "cMask" : [ ] },
		/* 160 */ { "x" : 948, "y" : -190, "bCoef" : 0, "cMask" : [ ] },
		/* 161 */ { "x" : -948, "y" : -190, "bCoef" : 0, "cMask" : [ ] },
		/* 162 */ { "x" : 948, "y" : -192, "bCoef" : 0, "cMask" : [ ] },
		/* 163 */ { "x" : -948, "y" : -192, "bCoef" : 0, "cMask" : [ ] },
		/* 164 */ { "x" : 948, "y" : -194, "bCoef" : 0, "cMask" : [ ] },
		/* 165 */ { "x" : -948, "y" : -194, "bCoef" : 0, "cMask" : [ ] },
		/* 166 */ { "x" : 948, "y" : -350, "bCoef" : 0, "cMask" : [ ] },
		/* 167 */ { "x" : -948, "y" : -350, "bCoef" : 0, "cMask" : [ ] },
		/* 168 */ { "x" : 948, "y" : -352, "bCoef" : 0, "cMask" : [ ] },
		/* 169 */ { "x" : -948, "y" : -352, "bCoef" : 0, "cMask" : [ ] },
		/* 170 */ { "x" : 948, "y" : -354, "bCoef" : 0, "cMask" : [ ] },
		/* 171 */ { "x" : -948, "y" : -354, "bCoef" : 0, "cMask" : [ ] },
		/* 172 */ { "x" : 948, "y" : -356, "bCoef" : 0, "cMask" : [ ] },
		/* 173 */ { "x" : -948, "y" : -356, "bCoef" : 0, "cMask" : [ ] },
		/* 174 */ { "x" : 948, "y" : -358, "bCoef" : 0, "cMask" : [ ] },
		/* 175 */ { "x" : -948, "y" : -358, "bCoef" : 0, "cMask" : [ ] },
		/* 176 */ { "x" : 948, "y" : -360, "bCoef" : 0, "cMask" : [ ] },
		/* 177 */ { "x" : -948, "y" : -360, "bCoef" : 0, "cMask" : [ ] },
		/* 178 */ { "x" : 948, "y" : -362, "bCoef" : 0, "cMask" : [ ] },
		/* 179 */ { "x" : -948, "y" : -362, "bCoef" : 0, "cMask" : [ ] },
		/* 180 */ { "x" : 948, "y" : -364, "bCoef" : 0, "cMask" : [ ] },
		/* 181 */ { "x" : -948, "y" : -364, "bCoef" : 0, "cMask" : [ ] },
		/* 182 */ { "x" : 948, "y" : -366, "bCoef" : 0, "cMask" : [ ] },
		/* 183 */ { "x" : -948, "y" : -366, "bCoef" : 0, "cMask" : [ ] },
		/* 184 */ { "x" : 948, "y" : -368, "bCoef" : 0, "cMask" : [ ] },
		/* 185 */ { "x" : -948, "y" : -368, "bCoef" : 0, "cMask" : [ ] },
		/* 186 */ { "x" : 948, "y" : -370, "bCoef" : 0, "cMask" : [ ] },
		/* 187 */ { "x" : -948, "y" : -370, "bCoef" : 0, "cMask" : [ ] },
		/* 188 */ { "x" : 948, "y" : -372, "bCoef" : 0, "cMask" : [ ] },
		/* 189 */ { "x" : -948, "y" : -372, "bCoef" : 0, "cMask" : [ ] },
		/* 190 */ { "x" : 948, "y" : -374, "bCoef" : 0, "cMask" : [ ] },
		/* 191 */ { "x" : -948, "y" : -374, "bCoef" : 0, "cMask" : [ ] },
		/* 192 */ { "x" : 948, "y" : -376, "bCoef" : 0, "cMask" : [ ] },
		/* 193 */ { "x" : -948, "y" : -376, "bCoef" : 0, "cMask" : [ ] },
		/* 194 */ { "x" : 0, "y" : -460, "bCoef" : 0, "cMask" : [ ] },
		/* 195 */ { "x" : 0, "y" : 460, "bCoef" : 0, "cMask" : [ ] },
		/* 196 */ { "x" : 0, "y" : 1, "bCoef" : 0, "cMask" : [ ] },
		/* 197 */ { "x" : 0, "y" : -1, "bCoef" : 0, "cMask" : [ ] },
		/* 198 */ { "x" : 0, "y" : 3, "bCoef" : 0, "cMask" : [ ] },
		/* 199 */ { "x" : 0, "y" : -3, "bCoef" : 0, "cMask" : [ ] },
		/* 200 */ { "x" : 0, "y" : 1, "bCoef" : 0, "cMask" : [ ] },
		/* 201 */ { "x" : 0, "y" : -1, "bCoef" : 0, "cMask" : [ ] },
		/* 202 */ { "x" : 0, "y" : 3, "bCoef" : 0, "cMask" : [ ] },
		/* 203 */ { "x" : 0, "y" : -3, "bCoef" : 0, "cMask" : [ ] },
		
		/* 204 */ { "x" : -950, "y" : -300, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 90 },
		/* 205 */ { "x" : -680, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 90 },
		/* 206 */ { "x" : -950, "y" : 300, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : -90 },
		/* 207 */ { "x" : -680, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : -90 },
		/* 208 */ { "x" : 950, "y" : -300, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : -90 },
		/* 209 */ { "x" : 680, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : -90 },
		/* 210 */ { "x" : 950, "y" : 300, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 90 },
		/* 211 */ { "x" : 680, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 90 },
		/* 212 */ { "x" : 680, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 0 },
		/* 213 */ { "x" : 680, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "C5F0C9", "curve" : 0 },
		
		/* 214 */ { "x" : 680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 215 */ { "x" : 680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 216 */ { "x" : 680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 217 */ { "x" : 680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 218 */ { "x" : 680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 219 */ { "x" : 680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 220 */ { "x" : 680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 221 */ { "x" : 680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 222 */ { "x" : 680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 223 */ { "x" : 680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 224 */ { "x" : 680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 225 */ { "x" : 680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 226 */ { "x" : 680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 227 */ { "x" : 680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 228 */ { "x" : 680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 229 */ { "x" : 680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 230 */ { "x" : -680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 231 */ { "x" : -680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 232 */ { "x" : -680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 233 */ { "x" : -680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 234 */ { "x" : -680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 235 */ { "x" : -680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 236 */ { "x" : -680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 237 */ { "x" : -680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 238 */ { "x" : -680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 239 */ { "x" : -680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 240 */ { "x" : -680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 241 */ { "x" : -680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 242 */ { "x" : -680, "y" : 1.626567905410815, "bCoef" : 0, "cMask" : [ ] },
		/* 243 */ { "x" : -680, "y" : -0.8375518938041127, "bCoef" : 0, "cMask" : [ ] },
		/* 244 */ { "x" : -680, "y" : 4.090687704625744, "bCoef" : 0, "cMask" : [ ] },
		/* 245 */ { "x" : -680, "y" : -3.30167169301904, "bCoef" : 0, "cMask" : [ ] },
		/* 246 */ { "x" : -956, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		/* 247 */ { "x" : -956, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 248 */ { "x" : 956, "y" : -90, "bCoef" : 0.1, "cMask" : ["ball" ] },
		/* 249 */ { "x" : 956, "y" : 90, "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : false, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 2, "v1" : 3, "vis" : false, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 6, "v1" : 7, "vis" : false, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 8, "v1" : 9, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 9, "v1" : 10, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 10, "v1" : 9, "curve" : 180, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 10, "v1" : 11, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 12, "v1" : 14, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 13, "v1" : 15, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 1, "v1" : 0, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 5, "v1" : 4, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 2, "v1" : 3, "curve" : 0, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 6, "v1" : 7, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 0, "v1" : 16, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 3, "v1" : 17, "color" : "C5F0C9", "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "v0" : 18, "v1" : 19, "vis" : false, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 9, "v1" : 10, "curve" : 180, "vis" : false, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 21, "v1" : 20, "curve" : 180, "vis" : false, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 2, "v1" : 1, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 6, "v1" : 5, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 22, "v1" : 23, "curve" : 91.636910923379, "color" : "C5F0C9", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9718309859154628 },
		{ "v0" : 25, "v1" : 24, "curve" : 91.636910923384, "color" : "C5F0C9", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9718309859153781 },
		{ "v0" : 26, "v1" : 27, "curve" : 91.636910923386, "color" : "C5F0C9", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9718309859153441 },
		{ "v0" : 29, "v1" : 28, "curve" : 91.636910923367, "color" : "C5F0C9", "bCoef" : 0.1, "cMask" : [ ], "curveF" : 0.9718309859156665 },
		{ "v0" : 48, "v1" : 49, "color" : "376d21", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 50, "v1" : 51, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 52, "v1" : 53, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 54, "v1" : 55, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 56, "v1" : 57, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 58, "v1" : 59, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 60, "v1" : 61, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 62, "v1" : 63, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 64, "v1" : 65, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 66, "v1" : 67, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 68, "v1" : 69, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 70, "v1" : 71, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 72, "v1" : 73, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 74, "v1" : 75, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 78, "v1" : 79, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 81, "v1" : 80, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 82, "v1" : 83, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 84, "v1" : 85, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 86, "v1" : 87, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 88, "v1" : 89, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 90, "v1" : 91, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 92, "v1" : 93, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 94, "v1" : 95, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 96, "v1" : 97, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 98, "v1" : 99, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 100, "v1" : 101, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 102, "v1" : 103, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 104, "v1" : 105, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 106, "v1" : 107, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 108, "v1" : 109, "color" : "377f3d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 110, "v1" : 111, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 112, "v1" : 113, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 114, "v1" : 115, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 116, "v1" : 117, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 118, "v1" : 119, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 120, "v1" : 121, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 122, "v1" : 123, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 124, "v1" : 125, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 126, "v1" : 127, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 128, "v1" : 129, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 130, "v1" : 131, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 132, "v1" : 133, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 134, "v1" : 135, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 136, "v1" : 137, "color" : "377f3d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 138, "v1" : 139, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 140, "v1" : 141, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 142, "v1" : 143, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 144, "v1" : 145, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 146, "v1" : 147, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 148, "v1" : 149, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 150, "v1" : 151, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 152, "v1" : 153, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 154, "v1" : 155, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 156, "v1" : 157, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 158, "v1" : 159, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 160, "v1" : 161, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 162, "v1" : 163, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 164, "v1" : 165, "color" : "377f3d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 166, "v1" : 167, "color" : "376f23", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 168, "v1" : 169, "color" : "377125", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 170, "v1" : 171, "color" : "377327", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 172, "v1" : 173, "color" : "377529", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 174, "v1" : 175, "color" : "37772b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 176, "v1" : 177, "color" : "37792d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 178, "v1" : 179, "color" : "377b2f", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 180, "v1" : 181, "color" : "377d31", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 182, "v1" : 183, "color" : "377f33", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 184, "v1" : 185, "color" : "377f35", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 186, "v1" : 187, "color" : "377f37", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 188, "v1" : 189, "color" : "377f39", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 190, "v1" : 191, "color" : "377f3b", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 192, "v1" : 193, "color" : "377f3d", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 194, "v1" : 195, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ] },
		{ "v0" : 196, "v1" : 197, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 198, "v1" : 199, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 201, "v1" : 200, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 203, "v1" : 202, "curve" : 180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17 },
		
		{ "v0" : 204, "v1" : 205, "curve" : 90, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 206, "v1" : 207, "curve" : -90, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 205, "v1" : 207, "curve" : 0, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line", "x" : -680 },
		{ "v0" : 208, "v1" : 209, "curve" : -90, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 210, "v1" : 211, "curve" : 90, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 212, "v1" : 213, "curve" : 0, "vis" : true, "color" : "C5F0C9", "bCoef" : 0.1, "trait" : "line", "x" : 680 },
		
		{ "v0" : 214, "v1" : 215, "curve" : -180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 216, "v1" : 217, "curve" : -180.00000000000267, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 219, "v1" : 218, "curve" : -180.00000000000816, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 221, "v1" : 220, "curve" : -179.9999999999973, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 222, "v1" : 223, "curve" : -180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 224, "v1" : 225, "curve" : -180.00000000000267, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 227, "v1" : 226, "curve" : -180.00000000000816, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 229, "v1" : 228, "curve" : -179.9999999999973, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : 680 },
		{ "v0" : 230, "v1" : 231, "curve" : -180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 232, "v1" : 233, "curve" : -180.00000000000267, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 235, "v1" : 234, "curve" : -180.00000000000816, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 237, "v1" : 236, "curve" : -179.9999999999973, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 238, "v1" : 239, "curve" : -180, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 240, "v1" : 241, "curve" : -180.00000000000267, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 243, "v1" : 242, "curve" : -180.00000000000816, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 245, "v1" : 244, "curve" : -179.9999999999973, "color" : "C5F0C9", "bCoef" : 0, "cMask" : [ ], "curveF" : 6.123233995736766e-17, "x" : -680 },
		{ "v0" : 12, "v1" : 246, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 14, "v1" : 247, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 13, "v1" : 248, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : 12, "y" : -90 },
		{ "v0" : 15, "v1" : 249, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["ball" ], "bias" : -12, "y" : 90 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -460, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -460, "bCoef" : 0.9, "cMask" : ["ball" ] },
		{ "normal" : [0,1 ], "dist" : -508, "bCoef" : 0.2 },
		{ "normal" : [0,-1 ], "dist" : -508, "bCoef" : 0.2 },
		{ "normal" : [1,0 ], "dist" : -1002, "bCoef" : 0.2 },
		{ "normal" : [-1,0 ], "dist" : -1002, "bCoef" : 0.2 }

	],

	"goals" : [
		{ "p0" : [-959.1,-90 ], "p1" : [-959.1,90 ], "team" : "red" },
		{ "p0" : [959.1,90 ], "p1" : [959.1,-90 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6.4, "invMass" : 1.5, "pos" : [0,0 ], "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 5, "invMass" : 0, "pos" : [-950,90 ], "bCoef" : 1 },
		{ "radius" : 5, "invMass" : 0, "pos" : [-950,-90 ], "bCoef" : 1 },
		{ "radius" : 5, "invMass" : 0, "pos" : [950,90 ], "bCoef" : 1 },
		{ "radius" : 5, "invMass" : 0, "pos" : [950,-90 ], "bCoef" : 1 }

	],

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083

	},

	"ballPhysics" : "disc0",

	"spawnDistance" : 310,

	"traits" : {
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] }

	},

	"redSpawnPoints" : [
		[ -264, 0
		],
		[ -264, 0
		],
		[ -264, 0
		],
		[ -264, 0
		],
		[ -264, 0
		],
		[ -350, 484
		]

	],

	"blueSpawnPoints" : [
		[ 264, 0
		],
		[ 264, 0
		],
		[ 264, 0
		],
		[ 264, 0
		],
		[ 264, 0
		],
		[ 350, 484
		]

	],

	"joints" : [
		

	]
}`;
	RSRMap = false;
	return Futx5cespedMap;
}


// MAPA ADAPTADO AL SCRIPT
function getEntrenamientoFutsalMap() {
	var EntrenamientoFutsalMap = `
{

	"name" : "Eɴᴛʀᴇɴᴀᴍɪᴇɴᴛᴏ (Futsal) 💪 by 𝗚𝗟𝗛",

	"width" : 865,

	"height" : 450,

	"bg" : { "type" : "grass", "color" : "434343", "cornerRadius" : 0, "kickOffRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : -350, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 1 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 2 */ { "x" : -700, "y" : -90, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "color" : "000000", "bias" : 12 },
		/* 3 */ { "x" : -735, "y" : -90, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "color" : "000000", "bias" : 12 },
		/* 4 */ { "x" : -735, "y" : 90, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "color" : "000000", "bias" : 12 },
		/* 5 */ { "x" : -700, "y" : 90, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "color" : "000000", "bias" : 12 },
		/* 6 */ { "x" : 700, "y" : -90, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "color" : "000000", "bias" : -10 },
		/* 7 */ { "x" : 735, "y" : -90, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "bias" : -10, "color" : "000000" },
		/* 8 */ { "x" : 735, "y" : 90, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "bias" : -12, "color" : "000000" },
		/* 9 */ { "x" : 700, "y" : 90, "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "color" : "000000", "bias" : -12 },
		/* 10 */ { "x" : -700, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : 12, "color" : "000000" },
		/* 11 */ { "x" : -700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : 12, "color" : "000000" },
		/* 12 */ { "x" : -700, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : -12, "color" : "000000" },
		/* 13 */ { "x" : -700, "y" : -320, "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : -12, "color" : "000000" },
		/* 14 */ { "x" : -700, "y" : 320, "cMask" : ["ball" ], "bias" : 12, "color" : "000000" },
		/* 15 */ { "x" : 700, "y" : 320, "cMask" : ["ball" ], "bias" : 12, "color" : "000000" },
		/* 16 */ { "x" : 700, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : -12, "color" : "000000" },
		/* 17 */ { "x" : 700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : -12, "color" : "000000" },
		/* 18 */ { "x" : 700, "y" : -320, "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : -12, "color" : "000000" },
		/* 19 */ { "x" : 700, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : -12, "color" : "000000" },
		/* 20 */ { "x" : -700, "y" : -320, "cMask" : ["ball" ], "bias" : -12, "color" : "000000" },
		/* 21 */ { "x" : 700, "y" : -320, "cMask" : ["ball" ], "bias" : -12, "color" : "000000" },
		/* 22 */ { "x" : -700, "y" : -90, "bCoef" : 0.1, "cMask" : ["wall" ] },
		/* 23 */ { "x" : -700, "y" : 90, "bCoef" : 0.1, "cMask" : ["wall" ] },
		/* 24 */ { "x" : 700, "y" : -90, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "000000" },
		/* 25 */ { "x" : 700, "y" : 90, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "000000" },
		/* 26 */ { "x" : -700, "y" : 280, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 27 */ { "x" : -480, "y" : 60, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 28 */ { "x" : -700, "y" : -280, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 29 */ { "x" : -480, "y" : -60, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 30 */ { "x" : 700, "y" : 280, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 31 */ { "x" : 480, "y" : 70, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 32 */ { "x" : 700, "y" : -280, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 33 */ { "x" : 480, "y" : -70, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 34 */ { "x" : 480, "y" : 70, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 35 */ { "x" : 480, "y" : -70, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 36 */ { "x" : 480, "y" : 1, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 37 */ { "x" : 480, "y" : -1, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 38 */ { "x" : 480, "y" : 3, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 39 */ { "x" : 480, "y" : -3, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 40 */ { "x" : 480, "y" : 2, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 41 */ { "x" : -480, "y" : 1, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 42 */ { "x" : -480, "y" : -1, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 43 */ { "x" : -480, "y" : 3, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 44 */ { "x" : -480, "y" : -3, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 45 */ { "x" : -480, "y" : 2, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "ffffff" },
		/* 46 */ { "x" : 0, "y" : 320, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 47 */ { "x" : 0, "y" : 350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 48 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 49 */ { "x" : 0, "y" : 320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 50 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		/* 51 */ { "x" : -32, "y" : -319, "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffffff", "bias" : -8 },
		/* 52 */ { "x" : -32, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffffff", "bias" : -8 },
		/* 53 */ { "x" : -0.5, "y" : -322, "cMask" : ["ball" ] },
		/* 54 */ { "x" : 329, "y" : -319, "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffffff", "bias" : 8 },
		/* 55 */ { "x" : 329, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "ffffff", "bias" : 8 },
		/* 56 */ { "x" : -10, "y" : -319, "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "000000", "bias" : 8 },
		/* 57 */ { "x" : -10, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "000000", "bias" : 8 },
		/* 58 */ { "x" : 307, "y" : -320, "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "000000", "bias" : -8 },
		/* 59 */ { "x" : 307, "y" : 319, "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "color" : "000000", "bias" : -8 },
		/* 60 */ { "x" : -15, "y" : 8.5, "cMask" : ["ball" ], "color" : "000000", "bias" : -8 },
		/* 61 */ { "x" : 312, "y" : 8.5, "cMask" : ["ball" ], "color" : "000000", "bias" : -8 },
		/* 62 */ { "x" : -15, "y" : -8.5, "cMask" : ["ball" ], "color" : "ffffff", "bias" : 8 },
		/* 63 */ { "x" : 312, "y" : -8.5, "cMask" : ["ball" ], "color" : "ffffff", "bias" : 8 },
		/* 64 */ { "x" : -700, "y" : 90, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "000000" },
		/* 65 */ { "x" : -700, "y" : -90, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "000000" },
		/* 66 */ { "x" : 700, "y" : 90, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "000000" },
		/* 67 */ { "x" : 700, "y" : -90, "bCoef" : 0.1, "cMask" : ["wall" ], "color" : "000000" },
		/* 68 */ { "x" : -717.5, "y" : -131.69442483364008, "bCoef" : 1.5, "cMask" : ["ball" ], "bias" : 12, "color" : "000000" },
		/* 69 */ { "x" : -717.5, "y" : 138.17119982545847, "bCoef" : 1.5, "cMask" : ["ball" ], "bias" : 12, "color" : "000000" },
		/* 70 */ { "x" : 717.5, "y" : -131.69442483364008, "bCoef" : 1.5, "cMask" : ["ball" ], "bias" : -12 },
		/* 71 */ { "x" : 717.5, "y" : 138.17119982545847, "bCoef" : 1.5, "cMask" : ["ball" ], "bias" : -12 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : false, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 2, "v1" : 3, "color" : "000000", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "bias" : 12 },
		{ "v0" : 3, "v1" : 4, "color" : "000000", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ] },
		{ "v0" : 4, "v1" : 5, "color" : "000000", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "bias" : 12 },
		{ "v0" : 6, "v1" : 7, "color" : "000000", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "bias" : -10 },
		{ "v0" : 7, "v1" : 8, "color" : "000000", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "bias" : -12 },
		{ "v0" : 8, "v1" : 9, "color" : "000000", "bCoef" : 0.2, "cMask" : ["red","blue","ball" ], "bias" : -12 },
		{ "v0" : 10, "v1" : 11, "color" : "000000", "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 12, "v1" : 13, "color" : "000000", "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 14, "v1" : 15, "color" : "000000", "cMask" : ["ball" ], "bias" : 12 },
		{ "v0" : 16, "v1" : 17, "color" : "000000", "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 18, "v1" : 19, "color" : "000000", "bCoef" : 1.15, "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 20, "v1" : 21, "color" : "000000", "cMask" : ["ball" ], "bias" : -12 },
		{ "v0" : 27, "v1" : 26, "curve" : 93.241608812827, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 0.9449654112221421 },
		{ "v0" : 28, "v1" : 29, "curve" : 93.241608812827, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 0.9449654112221421 },
		{ "v0" : 27, "v1" : 29, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ] },
		{ "v0" : 30, "v1" : 31, "curve" : 93.241608812827, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 0.9449654112221421 },
		{ "v0" : 33, "v1" : 32, "curve" : 93.241608812827, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 0.9449654112221421 },
		{ "v0" : 34, "v1" : 35, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ] },
		{ "v0" : 37, "v1" : 36, "curve" : 180, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 36, "v1" : 37, "curve" : 180, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 39, "v1" : 38, "curve" : 180, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 38, "v1" : 39, "curve" : 180, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 42, "v1" : 41, "curve" : 180, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 41, "v1" : 42, "curve" : 180, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 44, "v1" : 43, "curve" : 180, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 43, "v1" : 44, "curve" : 180, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["wall" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 46, "v1" : 47, "vis" : false, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 51, "v1" : 52, "curve" : 0.2307066838294567, "color" : "ffffff", "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -8 },
		{ "v0" : 54, "v1" : 55, "color" : "ffffff", "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 8 },
		{ "v0" : 56, "v1" : 57, "color" : "000000", "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : 8 },
		{ "v0" : 58, "v1" : 59, "color" : "000000", "bCoef" : 1.15, "cMask" : ["ball" ], "cGroup" : ["redKO","blueKO" ], "bias" : -8 },
		{ "v0" : 60, "v1" : 61, "color" : "000000", "cMask" : ["ball" ], "bias" : -8 },
		{ "v0" : 62, "v1" : 63, "color" : "ffffff", "cMask" : ["ball" ], "bias" : 8 },
		{ "v0" : 64, "v1" : 65, "color" : "000000", "bCoef" : 0.1, "cMask" : ["wall" ] },
		{ "v0" : 66, "v1" : 67, "color" : "000000", "bCoef" : 0.1, "cMask" : ["wall" ] },
		{ "v0" : 68, "v1" : 69, "vis" : false, "color" : "000000", "bCoef" : 1.5, "cMask" : ["ball" ], "bias" : 12, "x" : -717.5 },
		{ "v0" : 70, "v1" : 71, "vis" : false, "color" : "FFFFFF", "bCoef" : 1.5, "cMask" : ["ball" ], "bias" : -12, "x" : 717.5 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -765.1, "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		{ "normal" : [0,-1 ], "dist" : -320, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -350, "bCoef" : 0.1, "cMask" : ["red","blue" ], "_selected" : true },
		{ "normal" : [1,0 ], "dist" : -765.1, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -320, "cMask" : ["ball" ] }

	],

	"goals" : [
		

	],

	"discs" : [
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [824.2700251385037,110.81706030312381 ], "color" : "FEBA01", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 0.01, "invMass" : 1e+300, "pos" : [824.2700251385037,110.81706030312381 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.01, "invMass" : 1e+300, "pos" : [824.2700251385037,110.81706030312381 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.01, "invMass" : 1e+300, "pos" : [824.2700251385037,110.81706030312381 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.01, "invMass" : 1e+300, "pos" : [824.2700251385037,110.81706030312381 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.01, "invMass" : 1e+300, "pos" : [824.2700251385037,110.81706030312381 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.01, "invMass" : 1e+300, "pos" : [824.2700251385037,110.81706030312381 ], "color" : "0", "cMask" : [ ], "cGroup" : [ ] },
		{ "radius" : 0.01, "invMass" : 0, "pos" : [824.2700251385037,110.81706030312381 ], "color" : "0", "bCoef" : 440 },
		{ "radius" : 0.1, "invMass" : 0, "pos" : [824.2700251385037,110.81706030312381 ], "color" : "0", "bCoef" : 440 },
		{ "radius" : 5.5, "invMass" : 0, "pos" : [-700,90 ], "color" : "ffffff" },
		{ "radius" : 5.5, "invMass" : 0, "pos" : [-700,-90 ], "color" : "ffffff" },
		{ "radius" : 5.5, "invMass" : 0, "pos" : [700,90 ], "color" : "ffffff" },
		{ "radius" : 5.5, "invMass" : 0, "pos" : [700,-90 ], "color" : "ffffff" },
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [146,-157 ], "color" : "FEBA01", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [-318.7777786254883,-99.22222900390625 ], "color" : "FEBA01", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [-319.7777786254883,86.77777099609375 ], "color" : "FEBA01", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [478.2222213745117,156.77777099609375 ], "color" : "FEBA01", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [458.2222213745117,-173.22222900390625 ], "color" : "FEBA01", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [138.22222137451172,116.77777099609375 ], "color" : "FEBA01", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [-316.7777786254883,-275.22222900390625 ], "color" : "FEBA01", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [-323.7777786254883,265.77777099609375 ], "color" : "FEBA01", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ] }

	],

	"playerPhysics" : {
		"bCoef" : 0.1,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083

	},

	"ballPhysics" : "disc0",

	"cameraFollow" : "player",

	"redSpawnPoints" : [
		[ -90, 0
		],
		[ -90, 0
		]

	],

	"blueSpawnPoints" : [
		[ 370, 0
		],
		[ 370, 0
		]

	],

"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}],

	"traits" : {
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] }

	},

	"canBeStored" : false
}`;
	RSRMap = false;
	return EntrenamientoFutsalMap;
}

function getPremiosMap() {
	var PremiosMap = `{

	"name" : "✨ ɢᴀʟᴀ ᴅᴇ ᴘʀᴇᴍɪᴏs 🏅 ✨ by GLH",

	"width" : 575,

	"height" : 325,

	"cameraWidth" : 500,

	"cameraHeight" : 400,

	"maxViewWidth" : 0,

	"cameraFollow" : "player",

	"spawnDistance" : 170,

	"redSpawnPoints" : [
		[ -146, -182
		],
		[ -516, -131
		],
		[ 554, -131
		],
		[ -338, -131
		],
		[ 383, -131
		]

	],

	"blueSpawnPoints" : [
		[ -211, -47
		],
		[ -151, -47
		],
		[ -93, -47
		],
		[ -36, -47
		],
		[ 77, -47
		],
		[ 137, -47
		],
		[ 197, -47
		],
		[ 254, -47
		],
		[ -211, 32
		],
		[ -151, 32
		],
		[ -93, 32
		],
		[ -36, 32
		],
		[ 77, 32
		],
		[ 137, 32
		],
		[ 197, 32
		],
		[ 254, 32
		],
		[ -211, 107
		],
		[ -151, 107
		],
		[ -93, 107
		],
		[ -36, 107
		],
		[ 77, 107
		],
		[ 137, 107
		],
		[ 197, 107
		],
		[ 254, 107
		],
		[ -211, 170
		],
		[ -151, 170
		],
		[ -93, 170
		],
		[ -36, 170
		]

	],

	"canBeStored" : true,

	"kickOffReset" : "partial",

	"bg" : { "type" : "hockey", "color" : "595959", "cornerRadius" : 0, "kickOffRadius" : 0 },

	"traits" : {
		"trofeo" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["red,blue" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"vertexes" : [
		/* 0 */ { "x" : -250.77232547671002, "y" : -177.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 0, "color" : "DAA520" },
		/* 1 */ { "x" : 349.22767452329, "y" : -178.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 0, "color" : "DAA520" },
		/* 2 */ { "x" : -249.16761343482523, "y" : -206.5580916013053, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "F1C232", "curve" : -8, "radius" : 10 },
		/* 3 */ { "x" : -209.37703751859482, "y" : -206.5580916013053, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "F1C232", "curve" : -8, "radius" : 10 },
		/* 4 */ { "x" : -249.16761343482523, "y" : -198.24640328961704, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "FFD766", "curve" : -180 },
		/* 5 */ { "x" : -209.37703751859482, "y" : -198.24640328961704, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -180 },
		/* 6 */ { "x" : -257.12572861807126, "y" : -198.24640328961704, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "F1C232", "curve" : 0 },
		/* 7 */ { "x" : -201.41892233534878, "y" : -198.24640328961704, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "F1C232", "curve" : 0 },
		/* 8 */ { "x" : -257.12572861807126, "y" : -189.10354614675984, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "F1C232", "curve" : -165 },
		/* 9 */ { "x" : -201.41892233534878, "y" : -189.10354614675984, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "F1C232", "curve" : -165 },
		/* 10 */ { "x" : -241.20949825157913, "y" : -165.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -25 },
		/* 11 */ { "x" : -217.3351527018409, "y" : -165.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -25 },
		/* 12 */ { "x" : -241.20949825157913, "y" : -156.68796173117542, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -165 },
		/* 13 */ { "x" : -217.3351527018409, "y" : -156.68796173117542, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -165 },
		/* 14 */ { "x" : -246.7801788798514, "y" : -155.85679290000664, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : 0 },
		/* 15 */ { "x" : -211.76447207356864, "y" : -155.85679290000664, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : 0 },
		/* 16 */ { "x" : -246.7801788798514, "y" : -149.207442250656, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : 30 },
		/* 17 */ { "x" : -211.76447207356864, "y" : -149.207442250656, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -165 },
		/* 18 */ { "x" : -234.8430061049823, "y" : -101.83081887403259, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 50, "color" : "A0781A" },
		/* 19 */ { "x" : -223.70164484843775, "y" : -101.83081887403259, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 50, "color" : "A0781A" },
		/* 20 */ { "x" : -229.27232547671002, "y" : -165.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 75, "color" : "DAA520" },
		/* 21 */ { "x" : -245.98436736152678, "y" : -188.272377315591, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : -75, "color" : "DAA520" },
		/* 22 */ { "x" : -212.56028359189327, "y" : -188.272377315591, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 75, "color" : "DAA520" },
		/* 23 */ { "x" : 306.3323865651748, "y" : -205.5580916013053, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "FFD766", "curve" : -8 },
		/* 24 */ { "x" : 346.1229624814052, "y" : -205.5580916013053, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "FFD766", "curve" : -8 },
		/* 25 */ { "x" : 306.3323865651748, "y" : -197.24640328961704, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "FFD766", "curve" : -180 },
		/* 26 */ { "x" : 346.1229624814052, "y" : -197.24640328961704, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "FFD766", "curve" : -180 },
		/* 27 */ { "x" : 298.37427138192874, "y" : -197.24640328961704, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "FFD766", "curve" : 0 },
		/* 28 */ { "x" : 354.0810776646512, "y" : -197.24640328961704, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "FFD766", "curve" : 0 },
		/* 29 */ { "x" : 298.37427138192874, "y" : -188.10354614675984, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "FFD766", "curve" : -165 },
		/* 30 */ { "x" : 354.0810776646512, "y" : -188.10354614675984, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "FFD766", "curve" : -165 },
		/* 31 */ { "x" : 314.29050174842087, "y" : -164.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -25 },
		/* 32 */ { "x" : 338.1648472981591, "y" : -164.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -25 },
		/* 33 */ { "x" : 314.29050174842087, "y" : -155.68796173117542, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -165 },
		/* 34 */ { "x" : 338.1648472981591, "y" : -155.68796173117542, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : -165 },
		/* 35 */ { "x" : 308.71982112014865, "y" : -154.85679290000664, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : 0 },
		/* 36 */ { "x" : 343.7355279264313, "y" : -154.85679290000664, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520", "curve" : 0 },
		/* 37 */ { "x" : 308.71982112014865, "y" : -148.207442250656, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "A0781A", "curve" : 30 },
		/* 38 */ { "x" : 343.7355279264313, "y" : -148.207442250656, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "A0781A", "curve" : -165 },
		/* 39 */ { "x" : 320.6569938950177, "y" : -100.83081887403259, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 50, "color" : "A0781A" },
		/* 40 */ { "x" : 331.79835515156225, "y" : -100.83081887403259, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 50, "color" : "A0781A" },
		/* 41 */ { "x" : 326.22767452329, "y" : -164.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 75, "color" : "DAA520" },
		/* 42 */ { "x" : 309.5156326384732, "y" : -187.272377315591, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : -75, "color" : "DAA520" },
		/* 43 */ { "x" : 342.93971640810673, "y" : -187.272377315591, "bCoef" : -0.5, "cGroup" : ["c0" ], "curve" : 75, "color" : "DAA520" },
		/* 44 */ { "x" : -205.77232547671002, "y" : -177.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520" },
		/* 45 */ { "x" : 302.22767452329, "y" : -178.8308188740326, "bCoef" : -0.5, "cGroup" : ["c0" ], "color" : "DAA520" },
		
		/* 46 */ { "x" : 81.05134886442963, "y" : -98, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -30, "color" : "3F3A36" },
		/* 47 */ { "x" : 81.05134886442963, "y" : -148.7110108740325, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "3F3A36" },
		/* 48 */ { "x" : -227.36613005267242, "y" : -44.39296800157968, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -198, "color" : "400000" },
		/* 49 */ { "x" : -192.36613005267247, "y" : -44.39296800157968, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -198, "color" : "400000" },
		/* 50 */ { "x" : -168.86613005267247, "y" : -44.55963466824634, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 51 */ { "x" : -133.86613005267247, "y" : -44.55963466824634, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 52 */ { "x" : -111.69946338600579, "y" : -44.726301334913025, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 53 */ { "x" : -76.69946338600579, "y" : -44.726301334913025, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 54 */ { "x" : -53.19946338600579, "y" : -44.89296800157968, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 55 */ { "x" : -18.19946338600579, "y" : -44.89296800157968, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 56 */ { "x" : 60.63386994732754, "y" : -46.39296800157968, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 57 */ { "x" : 95.63386994732754, "y" : -46.39296800157968, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 58 */ { "x" : 119.13386994732754, "y" : -46.55963466824634, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 59 */ { "x" : 154.13386994732753, "y" : -46.55963466824634, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 60 */ { "x" : 176.3005366139942, "y" : -46.726301334913025, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 61 */ { "x" : 211.3005366139942, "y" : -46.726301334913025, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 62 */ { "x" : 234.80053661399418, "y" : -46.89296800157968, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 63 */ { "x" : 269.80053661399427, "y" : -46.89296800157968, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 64 */ { "x" : 61.13386994732754, "y" : 34.10703199842032, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 65 */ { "x" : 96.13386994732754, "y" : 34.10703199842032, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 66 */ { "x" : 119.63386994732754, "y" : 33.94036533175363, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 67 */ { "x" : 154.63386994732753, "y" : 33.94036533175363, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 68 */ { "x" : 176.8005366139942, "y" : 33.773698665087004, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 69 */ { "x" : 211.8005366139942, "y" : 33.773698665087004, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 70 */ { "x" : 235.30053661399418, "y" : 33.60703199842032, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 71 */ { "x" : 270.30053661399427, "y" : 33.60703199842032, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 72 */ { "x" : -226.86613005267242, "y" : 36.10703199842032, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 73 */ { "x" : -191.86613005267247, "y" : 36.10703199842032, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 74 */ { "x" : -168.36613005267247, "y" : 35.94036533175363, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 75 */ { "x" : -133.36613005267247, "y" : 35.94036533175363, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 76 */ { "x" : -111.19946338600579, "y" : 35.773698665087004, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 77 */ { "x" : -76.19946338600579, "y" : 35.773698665087004, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 78 */ { "x" : -52.69946338600579, "y" : 35.60703199842032, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 79 */ { "x" : -17.69946338600579, "y" : 35.60703199842032, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 80 */ { "x" : 61.0252737583895, "y" : 107.49043609349883, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 81 */ { "x" : 96.0252737583895, "y" : 107.49043609349883, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 82 */ { "x" : 119.5252737583895, "y" : 107.32376942683214, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 83 */ { "x" : 154.5252737583895, "y" : 107.32376942683214, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 84 */ { "x" : 176.69194042505617, "y" : 107.15710276016546, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 85 */ { "x" : 211.69194042505617, "y" : 107.15710276016546, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 86 */ { "x" : 235.19194042505615, "y" : 106.99043609349883, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 87 */ { "x" : 270.19194042505626, "y" : 106.99043609349883, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 88 */ { "x" : -227.37797322938144, "y" : 109.6634479728674, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 89 */ { "x" : -192.3779732293814, "y" : 109.6634479728674, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 90 */ { "x" : -168.8779732293814, "y" : 109.49678130620077, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 91 */ { "x" : -133.8779732293814, "y" : 109.49678130620077, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 92 */ { "x" : -111.71130656271473, "y" : 109.33011463953409, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 93 */ { "x" : -76.71130656271473, "y" : 109.33011463953409, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 94 */ { "x" : -53.21130656271475, "y" : 109.1634479728674, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 95 */ { "x" : -18.21130656271474, "y" : 109.1634479728674, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 96 */ { "x" : -227.37797322938144, "y" : 168.86991197286738, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 97 */ { "x" : -192.3779732293814, "y" : 168.86991197286738, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 98 */ { "x" : -168.8779732293814, "y" : 168.70324530620076, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 99 */ { "x" : -133.8779732293814, "y" : 168.70324530620076, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 100 */ { "x" : -111.71130656271473, "y" : 168.53657863953413, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 101 */ { "x" : -76.71130656271473, "y" : 168.53657863953413, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		/* 102 */ { "x" : -53.21130656271475, "y" : 168.36991197286738, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -180, "color" : "400000" },
		/* 103 */ { "x" : -18.21130656271474, "y" : 168.36991197286738, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 180, "color" : "400000" },
		
		/* 104 */ { "x" : 416, "y" : -272, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "vis" : false },
		/* 105 */ { "x" : 416, "y" : -50, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "vis" : false },
		/* 106 */ { "x" : 516, "y" : -50, "bCoef" : 0.003, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 107 */ { "x" : 516, "y" : -272, "bCoef" : 0.003, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 108 */ { "x" : 414, "y" : -98, "cMask" : ["blue","red" ], "cGroup" : ["red" ], "color" : "2E2925" },
		/* 109 */ { "x" : 520, "y" : -98, "bCoef" : 0.5, "cMask" : ["blue" ], "cGroup" : ["wall" ], "color" : "2E2925", "bias" : -300 },
		/* 110 */ { "x" : 520, "y" : 267, "bCoef" : 0.5, "cMask" : ["blue" ], "cGroup" : ["wall" ], "color" : "2E2925", "bias" : 300 },
		/* 111 */ { "x" : -525, "y" : 267, "bCoef" : 0.5, "cMask" : ["blue" ], "cGroup" : ["wall" ], "bias" : 300 },
		
		/* 112 */ { "x" : -143.70966947671005, "y" : -98, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "3F3A36" },
		/* 113 */ { "x" : -143.70966947671005, "y" : -148.7110108740325, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : 0, "color" : "3F3A36" },
		/* 114 */ { "x" : -90.70966947671005, "y" : -148.7110108740325, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "3F3A36" },
		/* 115 */ { "x" : -90.70966947671005, "y" : -98, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "3F3A36" },
		/* 116 */ { "x" : -123.70966947671005, "y" : -149.37767754069915, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 117 */ { "x" : -118.70966947671005, "y" : -163.37767754069915, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 118 */ { "x" : -113.70966947671005, "y" : -149.37767754069915, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 119 */ { "x" : -122.80966947671004, "y" : -163.7110108740325, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "080808" },
		/* 120 */ { "x" : -114.80966947671004, "y" : -163.7110108740325, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "080808" },
		/* 121 */ { "x" : 209.25107291964773, "y" : -148.7110108740325, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -30, "color" : "3F3A36" },
		/* 122 */ { "x" : 209.25107291964773, "y" : -98, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "curve" : -30, "color" : "3F3A36" },
		/* 123 */ { "x" : 174.6302662661418, "y" : -149.37854197091437, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 124 */ { "x" : 179.6302662661418, "y" : -163.37854197091437, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 125 */ { "x" : 184.6302662661418, "y" : -149.37854197091437, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "D4D4D4" },
		/* 126 */ { "x" : 175.5302662661418, "y" : -163.7118753042477, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "080808" },
		/* 127 */ { "x" : 183.5302662661418, "y" : -163.7118753042477, "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "color" : "080808" },
		
		/* 128 */ { "x" : -478, "y" : -272, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "vis" : false },
		/* 129 */ { "x" : -478, "y" : -50, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "vis" : false },
		/* 130 */ { "x" : -378, "y" : -50, "bCoef" : 0.003, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 131 */ { "x" : -378, "y" : -272, "bCoef" : 0.003, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		/* 132 */ { "x" : -377.91360000000014, "y" : -98, "cMask" : ["blue","red" ], "cGroup" : ["red" ] },
		/* 133 */ { "x" : -525, "y" : -98, "cMask" : ["blue" ], "cGroup" : ["wall" ], "bias" : -300 },
		/* 134 */ { "x" : -480, "y" : -98, "cMask" : ["blue" ], "cGroup" : ["wall" ] },
		
		/* 135 */ { "x" : 95.0185530029725, "y" : -219.5889231894445, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 136 */ { "x" : 132.6418666791186, "y" : -213.55532265520543, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 137 */ { "x" : 132.94528049908763, "y" : -211.44356246822173, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 138 */ { "x" : 128.09065937958482, "y" : -211.74524249493368, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 139 */ { "x" : 123.84286590001994, "y" : -207.5217221209663, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 140 */ { "x" : 114.7404513009523, "y" : -209.0301222545261, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 141 */ { "x" : 138.71014307849703, "y" : -203.29820174699896, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 142 */ { "x" : 134.7657634189011, "y" : -203.29820174699896, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 143 */ { "x" : 147.8125576775646, "y" : -178.86211958333055, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 144 */ { "x" : 145.08183329784436, "y" : -179.4654796367545, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 145 */ { "x" : 130.21455611936727, "y" : -149.5991569922709, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 146 */ { "x" : 118.07800332061045, "y" : -149.29747696555893, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 147 */ { "x" : 123.23603826008214, "y" : -154.4260374196622, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 148 */ { "x" : 104.12096760204008, "y" : -150.80587709911876, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 149 */ { "x" : 114.1336236610145, "y" : -190.92932065180875, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 150 */ { "x" : 97.44586356272383, "y" : -190.92932065180875, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 151 */ { "x" : 98.05269120266166, "y" : -201.48812158672723, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 152 */ { "x" : 100.48000176241305, "y" : -203.5998817737109, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 153 */ { "x" : 89.55710424353192, "y" : -193.94612091892833, "cMask" : ["red","blue" ], "trait" : "line", "color" : "e19e03" },
		/* 154 */ { "x" : 88.64686278362515, "y" : -205.71164196069455, "cMask" : ["red","blue" ], "trait" : "line", "color" : "e19e03" },
		/* 155 */ { "x" : 96.53562210281713, "y" : -213.8570026819174, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 156 */ { "x" : 135.67600487880793, "y" : -179.76715966346646, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 157 */ { "x" : 125.66334881983349, "y" : -162.87307816759696, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 158 */ { "x" : 119.89848624042398, "y" : -170.1133988086839, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 159 */ { "x" : 126.87700409970917, "y" : -181.2755597970262, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 160 */ { "x" : 119.59507242045503, "y" : -165.88987843471648, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 161 */ { "x" : 123.23603826008214, "y" : -168.90667870183606, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 162 */ { "x" : 121.41555534026861, "y" : -163.77811824773283, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 163 */ { "x" : 125.9667626398024, "y" : -166.79491851485233, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 164 */ { "x" : 97.14244974275489, "y" : -156.23611757993393, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 165 */ { "x" : 145.08183329784436, "y" : -157.44283768678173, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 166 */ { "x" : 95.0185530029725, "y" : -190.62764062509683, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e19e03" },
		/* 167 */ { "x" : 93.80489772309684, "y" : -201.48812158672723, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e8b409" },
		/* 168 */ { "x" : 92.28782862325224, "y" : -204.50492185384675, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e8b409" },
		/* 169 */ { "x" : 92.89465626319003, "y" : -153.82267736623825, "cMask" : ["red","blue" ], "trait" : "line", "color" : "e8b409" },
		/* 170 */ { "x" : 90.4673457034387, "y" : -162.57139814088498, "cMask" : ["red","blue" ], "trait" : "line", "color" : "e8b409" },
		/* 171 */ { "x" : 95.0185530029725, "y" : -148.69411691213503, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 172 */ { "x" : 96.839035922786, "y" : -148.69411691213503, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 173 */ { "x" : 99.26634648253744, "y" : -151.1075571258307, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 174 */ { "x" : 92.28782862325224, "y" : -150.2025170456948, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e8b409" },
		/* 175 */ { "x" : 96.839035922786, "y" : -152.01259720596656, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 176 */ { "x" : 101.0868294023509, "y" : -154.4260374196622, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 177 */ { "x" : 86.82637986381167, "y" : -179.4654796367545, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e19e03" },
		/* 178 */ { "x" : 87.43320750374941, "y" : -168.30331864841213, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e19e03" },
		/* 179 */ { "x" : 93.198070083159, "y" : -174.6385992093632, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e8b409" },
		/* 180 */ { "x" : 95.62538064291029, "y" : -182.48227990387406, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 181 */ { "x" : 130.82138375930504, "y" : -213.8570026819174, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 182 */ { "x" : 130.21455611936727, "y" : -221.39900334971622, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 183 */ { "x" : 126.27017645977132, "y" : -220.19228324286846, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 184 */ { "x" : 112.91996838113882, "y" : -224.4158036168358, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 185 */ { "x" : 114.43703748098336, "y" : -222.60572345656408, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 186 */ { "x" : 103.21072614213332, "y" : -218.68388310930865, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 187 */ { "x" : 123.84286590001994, "y" : -146.58235672515136, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f8e11a" },
		/* 188 */ { "x" : 125.3599349998646, "y" : -150.50419707240678, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f8e11a" },
		/* 189 */ { "x" : 120.20190006039297, "y" : -148.09075685871113, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "fcef1d" },
		/* 190 */ { "x" : 122.02238298020646, "y" : -151.1075571258307, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f8e11a" },
		/* 191 */ { "x" : 94.71513918300357, "y" : -216.572122922325, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 192 */ { "x" : 97.14244974275489, "y" : -215.96876286890105, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 193 */ { "x" : 115.34727894089015, "y" : -210.53852238808585, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 194 */ { "x" : 113.22338220110768, "y" : -211.74524249493368, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 195 */ { "x" : 113.52679602107659, "y" : -213.8570026819174, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 196 */ { "x" : 110.79607164135635, "y" : -214.76204276205326, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 197 */ { "x" : 109.88583018144956, "y" : -212.3486025483576, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 198 */ { "x" : 107.15510580172932, "y" : -210.53852238808585, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 199 */ { "x" : 97.44586356272383, "y" : -212.04692252164563, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 200 */ { "x" : 98.35610502263066, "y" : -213.25364262849345, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 201 */ { "x" : 94.10831154306572, "y" : -178.86211958333055, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f3d117" },
		/* 202 */ { "x" : 123.84286590001994, "y" : -174.33691918265123, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "f8e11a" },
		/* 203 */ { "x" : 88.64686278362515, "y" : -163.17475819430888, "cMask" : ["red","blue" ], "trait" : "line", "color" : "e19e03" },
		/* 204 */ { "x" : 118.98824478051716, "y" : -157.44283768678173, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 205 */ { "x" : 122.62921062014422, "y" : -162.26971811417303, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 206 */ { "x" : 92.89465626319003, "y" : -171.62179894224363, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e8b409" },
		/* 207 */ { "x" : 91.37758716334548, "y" : -174.33691918265123, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e8b409" },
		/* 208 */ { "x" : 89.55710424353192, "y" : -169.20835872854798, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e19e03" },
		/* 209 */ { "x" : 88.64686278362515, "y" : -171.62179894224363, "cMask" : ["red","blue" ], "trait" : "line", "curve" : 0, "color" : "e19e03" },
		/* 210 */ { "x" : 99.6096593898006, "y" : -167.34747560671207, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 211 */ { "x" : 110.53695880430698, "y" : -165.23133867779248, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 212 */ { "x" : 115.95410658082803, "y" : -171.01843888881976, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 213 */ { "x" : 103.4182373635524, "y" : -173.4700209359958, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 214 */ { "x" : 105.23872028336595, "y" : -173.1683409092838, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 215 */ { "x" : 113.1461705335067, "y" : -164.77739568461746, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 216 */ { "x" : 115.27006727328911, "y" : -164.4757156579055, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 217 */ { "x" : 97.01636772755566, "y" : -170.72551234597964, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 218 */ { "x" : 99.14026446733808, "y" : -170.4238323192677, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 219 */ { "x" : 101.65403998166173, "y" : -170.02305119763037, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 220 */ { "x" : 103.77793672144412, "y" : -169.72137117091847, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 221 */ { "x" : 106.78566354738197, "y" : -168.82508457465445, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 222 */ { "x" : 108.90956028716444, "y" : -168.52340454794248, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 223 */ { "x" : 111.72437941634209, "y" : -168.14449571461205, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 224 */ { "x" : 113.84827615612463, "y" : -167.84281568790007, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 225 */ { "x" : 94.88806909214802, "y" : -168.1094932004974, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 226 */ { "x" : 97.01196583193042, "y" : -167.80781317378543, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 227 */ { "x" : 99.11290232485763, "y" : -174.07338098941966, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 228 */ { "x" : 101.23679906464017, "y" : -173.77170096270768, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 229 */ { "x" : 100.17658794244416, "y" : -190.0242805716729, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 230 */ { "x" : 104.72779524197793, "y" : -204.50492185384675, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 231 */ { "x" : 101.0868294023509, "y" : -206.91836206754238, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 232 */ { "x" : 93.198070083159, "y" : -207.5217221209663, "cMask" : ["red","blue" ], "trait" : "line", "color" : "e8b409" },
		/* 233 */ { "x" : 122.02238298020646, "y" : -210.84020241479783, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 234 */ { "x" : 120.50531388036183, "y" : -211.1418824415098, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 235 */ { "x" : 119.29165860048616, "y" : -212.9519626017815, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 236 */ { "x" : 120.8087277003307, "y" : -212.65028257506955, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f8e11a" },
		/* 237 */ { "x" : 118.98824478051716, "y" : -211.1418824415098, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 238 */ { "x" : 117.4711756806726, "y" : -211.44356246822173, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 239 */ { "x" : 116.25752040079696, "y" : -213.25364262849345, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 240 */ { "x" : 117.77458950064153, "y" : -212.9519626017815, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 241 */ { "x" : 104.424381422009, "y" : -213.8570026819174, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 242 */ { "x" : 102.90731232216446, "y" : -214.1586827086293, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 243 */ { "x" : 101.69365704228869, "y" : -215.96876286890105, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 244 */ { "x" : 103.21072614213332, "y" : -215.6670828421891, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 245 */ { "x" : 101.39024322231984, "y" : -214.1586827086293, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 246 */ { "x" : 99.8731741224752, "y" : -214.46036273534128, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 247 */ { "x" : 98.65951884259952, "y" : -216.270442895613, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 248 */ { "x" : 100.17658794244416, "y" : -215.96876286890105, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 249 */ { "x" : 107.64281857096056, "y" : -172.52540371758272, "cMask" : ["red","blue" ], "trait" : "line", "color" : "f3d117" },
		/* 250 */ { "x" : 110.05060988482285, "y" : -172.09403095757372, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 251 */ { "x" : 111.51395064710722, "y" : -171.80824839442923, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" },
		/* 252 */ { "x" : 113.9217419609695, "y" : -171.37687563442023, "cMask" : ["red","blue" ], "trait" : "line", "color" : "fcef1d" }

	],

	"segments" : [
		{ "v0" : 2, "v1" : 3, "curve" : -8, "color" : "F1C232", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 370, "radius" : 10 },
		{ "v0" : 4, "v1" : 5, "curve" : 0, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 380 },
		{ "v0" : 2, "v1" : 4, "curve" : -180.00000000000176, "color" : "FFD766", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 5, "v1" : 3, "curve" : -170.7333876736081, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F1C232", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 380 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F1C232", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 375 },
		{ "v0" : 6, "v1" : 8, "curve" : -180.00000000000952, "color" : "FFD766", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 9, "v1" : 7, "curve" : -179.99999999999528, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 8, "v1" : 9, "curve" : -165.63127608781159, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 10, "v1" : 11, "curve" : -26.073554859371015, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 380 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 375 },
		{ "v0" : 10, "v1" : 12, "curve" : -180.00000000000247, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : -15 },
		{ "v0" : 13, "v1" : 11, "curve" : -202.72687443951966, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 15 },
		{ "v0" : 14, "v1" : 15, "curve" : 0, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 380 },
		{ "v0" : 16, "v1" : 17, "curve" : 0, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 454 },
		{ "v0" : 14, "v1" : 16, "curve" : -179.99999999999508, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : -22 },
		{ "v0" : 17, "v1" : 15, "curve" : -180.00000000000824, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 22 },
		{ "v0" : 16, "v1" : 18, "curve" : 29.081223606830164, "color" : "A0781A", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 19, "v1" : 17, "curve" : 28.775195329981987, "color" : "A0781A", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 19, "v1" : 18, "curve" : 51.93451319677356, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 21, "v1" : 20, "curve" : -72.6314325682926, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 22, "v1" : 20, "curve" : 72.63143256829309, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 23, "v1" : 24, "curve" : -8, "color" : "F1C232", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 370 },
		{ "v0" : 25, "v1" : 26, "curve" : 0, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 380 },
		{ "v0" : 23, "v1" : 25, "curve" : -180.00000000000176, "color" : "FFD766", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 26, "v1" : 24, "curve" : -170.7333876736081, "color" : "FFD766", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 27, "v1" : 28, "curve" : 0, "color" : "F1C232", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 380 },
		{ "v0" : 29, "v1" : 30, "curve" : 0, "color" : "F1C232", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 375 },
		{ "v0" : 27, "v1" : 29, "curve" : -180.00000000000952, "color" : "FFD766", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 30, "v1" : 28, "curve" : -179.99999999999528, "color" : "FFD766", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 29, "v1" : 30, "curve" : -165.63127608781159, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 31, "v1" : 32, "curve" : -26.073554859371015, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 380 },
		{ "v0" : 33, "v1" : 34, "curve" : 0, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 375 },
		{ "v0" : 31, "v1" : 33, "curve" : -180.00000000000247, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : -15 },
		{ "v0" : 34, "v1" : 32, "curve" : -202.72687443951966, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 15 },
		{ "v0" : 35, "v1" : 36, "curve" : 0, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 380 },
		{ "v0" : 37, "v1" : 38, "curve" : 0, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 0, "y" : 454 },
		{ "v0" : 35, "v1" : 37, "curve" : -179.99999999999508, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : -22 },
		{ "v0" : 38, "v1" : 36, "curve" : -180.00000000000824, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ], "x" : 22 },
		{ "v0" : 37, "v1" : 39, "curve" : 29.081223606830164, "color" : "A0781A", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 40, "v1" : 38, "curve" : 28.775195329981987, "color" : "A0781A", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 40, "v1" : 39, "curve" : 51.93451319677356, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 42, "v1" : 41, "curve" : -72.6314325682926, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		{ "v0" : 43, "v1" : 41, "curve" : 72.63143256829309, "color" : "DAA520", "bCoef" : -0.5, "cGroup" : ["c0" ] },
		
		{ "v0" : 46, "v1" : 47, "curve" : -30, "vis" : true, "color" : "3F3A36", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 48, "v1" : 49, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 50, "v1" : 51, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 52, "v1" : 53, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 54, "v1" : 55, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 58, "v1" : 59, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 60, "v1" : 61, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 62, "v1" : 63, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 64, "v1" : 65, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 66, "v1" : 67, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 68, "v1" : 69, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 70, "v1" : 71, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 72, "v1" : 73, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 74, "v1" : 75, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 76, "v1" : 77, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 78, "v1" : 79, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 80, "v1" : 81, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 82, "v1" : 83, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 84, "v1" : 85, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 86, "v1" : 87, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 88, "v1" : 89, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 90, "v1" : 91, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 92, "v1" : 93, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 94, "v1" : 95, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 96, "v1" : 97, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 98, "v1" : 99, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 100, "v1" : 101, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 102, "v1" : 103, "curve" : -180, "vis" : true, "color" : "400000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		
		{ "v0" : 104, "v1" : 105, "vis" : false, "color" : "BF9768", "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : 416 },
		{ "v0" : 105, "v1" : 106, "vis" : false, "color" : "BF9768", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -50 },
		{ "v0" : 106, "v1" : 107, "vis" : false, "color" : "BF9768", "bCoef" : 0.003, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : 516 },
		{ "v0" : 107, "v1" : 104, "vis" : false, "color" : "111111", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -272 },
		{ "v0" : 109, "v1" : 110, "color" : "2E2925", "bCoef" : 0.5, "cMask" : ["blue" ], "cGroup" : ["wall" ], "bias" : -300, "x" : 520 },
		{ "v0" : 111, "v1" : 110, "color" : "2E2925", "bCoef" : 0.5, "cMask" : ["blue" ], "cGroup" : ["wall" ], "bias" : 300, "y" : 267 },
		
		{ "v0" : 48, "v1" : 49, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 50, "v1" : 51, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 52, "v1" : 53, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 54, "v1" : 55, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 58, "v1" : 59, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 60, "v1" : 61, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 62, "v1" : 63, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 72, "v1" : 73, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 74, "v1" : 75, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 76, "v1" : 77, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 78, "v1" : 79, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 64, "v1" : 65, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 66, "v1" : 67, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 68, "v1" : 69, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 70, "v1" : 71, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 88, "v1" : 89, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 90, "v1" : 91, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 92, "v1" : 93, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 94, "v1" : 95, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 80, "v1" : 81, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 82, "v1" : 83, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 84, "v1" : 85, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 86, "v1" : 87, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 96, "v1" : 97, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 98, "v1" : 99, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 100, "v1" : 101, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 102, "v1" : 103, "curve" : -198, "vis" : true, "color" : "5E0000", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "vis" : true, "color" : "3F3A36", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : true, "color" : "3F3A36", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "vis" : true, "color" : "3F3A36", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : true, "color" : "D4D4D4", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "D4D4D4", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "080808", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 121, "v1" : 122, "curve" : -30, "vis" : true, "color" : "3F3A36", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "D4D4D4", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 124, "v1" : 125, "curve" : 0, "vis" : true, "color" : "D4D4D4", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 126, "v1" : 127, "curve" : 0, "vis" : true, "color" : "080808", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line" },
		{ "v0" : 47, "v1" : 121, "curve" : 0, "vis" : true, "color" : "3F3A36", "bCoef" : 1, "cMask" : ["all" ], "cGroup" : ["wall" ], "trait" : "line", "y" : 68.80140800000007 },
		
		{ "v0" : 128, "v1" : 129, "vis" : false, "color" : "BF9768", "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : -478 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "color" : "BF9768", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -50 },
		{ "v0" : 130, "v1" : 131, "vis" : false, "color" : "BF9768", "bCoef" : 0.003, "cMask" : ["wall" ], "cGroup" : ["all" ], "x" : -378 },
		{ "v0" : 131, "v1" : 128, "vis" : false, "color" : "111111", "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "y" : -272 },
		{ "v0" : 108, "v1" : 132, "color" : "2E2925", "cMask" : ["blue","red" ], "cGroup" : ["red" ], "y" : -98 },
		{ "v0" : 111, "v1" : 133, "color" : "2E2925", "cMask" : ["blue" ], "cGroup" : ["wall" ], "bias" : -300 },
		{ "v0" : 133, "v1" : 134, "color" : "2E2925", "cMask" : ["blue" ], "cGroup" : ["wall" ], "y" : -98 },
		
		{ "v0" : 135, "v1" : 136, "color" : "f3e07a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 136, "v1" : 137, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 137, "v1" : 138, "color" : "f8e11a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 138, "v1" : 139, "curve" : 68.86897430991337, "color" : "f8e11a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 139, "v1" : 140, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 137, "v1" : 141, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 141, "v1" : 142, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 142, "v1" : 143, "curve" : 4.381089586537676, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 143, "v1" : 144, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 145, "v1" : 146, "curve" : 103.30385925751469, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 146, "v1" : 147, "curve" : 65.3381024568514, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 146, "v1" : 148, "curve" : 23.40302702193647, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 149, "v1" : 150, "curve" : 48.19114806364148, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 150, "v1" : 151, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 151, "v1" : 152, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 150, "v1" : 153, "curve" : 111.68901062407659, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 153, "v1" : 154, "curve" : 29.348964421817, "color" : "e19e03", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 154, "v1" : 155, "curve" : 40.579436003571594, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 156, "v1" : 157, "curve" : 78.9248819125875, "color" : "f8e11a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 157, "v1" : 158, "curve" : 142.39548725506953, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 158, "v1" : 159, "curve" : -51.677119977421675, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 160, "v1" : 161, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 162, "v1" : 163, "curve" : -56.543483997126565, "color" : "f8e11a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 144, "v1" : 165, "curve" : 47.91304943776262, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 165, "v1" : 145, "curve" : 76.43239469411283, "color" : "f8e11a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 166, "v1" : 167, "curve" : 21.12041941574039, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 167, "v1" : 168, "curve" : 0, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 169, "v1" : 170, "curve" : 72.20583950848886, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 164, "v1" : 169, "curve" : 20.968910504117183, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 169, "v1" : 171, "curve" : -118.61892998872165, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 171, "v1" : 148, "curve" : -50.777131826613314, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 172, "v1" : 173, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 174, "v1" : 175, "curve" : 0, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 148, "v1" : 176, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 166, "v1" : 177, "curve" : 9.75033988053359, "color" : "e19e03", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 177, "v1" : 178, "curve" : -91.65020710195924, "color" : "e19e03", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 178, "v1" : 179, "curve" : -92.48430276042112, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 179, "v1" : 180, "curve" : 21.929694404776598, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 181, "v1" : 182, "curve" : -69.09668600855561, "color" : "f8e11a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 182, "v1" : 183, "curve" : 88.87655611540187, "color" : "f8e11a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 183, "v1" : 184, "curve" : -64.41692343805882, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 184, "v1" : 185, "curve" : 75.34072198111252, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 185, "v1" : 186, "curve" : -25.298886127990798, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 187, "v1" : 188, "curve" : 0, "color" : "f8e11a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 189, "v1" : 190, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 135, "v1" : 191, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 191, "v1" : 192, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 192, "v1" : 155, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 140, "v1" : 193, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 193, "v1" : 194, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 194, "v1" : 195, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 195, "v1" : 196, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 196, "v1" : 197, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 197, "v1" : 198, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 198, "v1" : 199, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 199, "v1" : 200, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 200, "v1" : 155, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 201, "v1" : 202, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 178, "v1" : 203, "curve" : -90.4410537196191, "color" : "e19e03", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 203, "v1" : 204, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 204, "v1" : 205, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 206, "v1" : 207, "curve" : 0, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 208, "v1" : 209, "curve" : 0, "color" : "e19e03", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 210, "v1" : 211, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 212, "v1" : 158, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 213, "v1" : 214, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 215, "v1" : 216, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 217, "v1" : 218, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 219, "v1" : 220, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 221, "v1" : 222, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 223, "v1" : 224, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 225, "v1" : 226, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 227, "v1" : 228, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 229, "v1" : 230, "curve" : -42.87454203612346, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 230, "v1" : 231, "curve" : -79.99747750792625, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 231, "v1" : 232, "curve" : 19.902183665860512, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 232, "v1" : 154, "curve" : -75.34970666706936, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 151, "v1" : 152, "curve" : -108.45293102046902, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 152, "v1" : 151, "curve" : -119.98260906765684, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 167, "v1" : 168, "curve" : -109.45975616452036, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 167, "v1" : 168, "curve" : 89.93342883228391, "color" : "e8b409", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 233, "v1" : 234, "color" : "f8e11a", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 235, "v1" : 236, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 237, "v1" : 238, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 239, "v1" : 240, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 241, "v1" : 242, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 243, "v1" : 244, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 245, "v1" : 246, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 247, "v1" : 248, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 249, "v1" : 250, "curve" : 0, "color" : "f3d117", "cMask" : ["red","blue" ], "trait" : "line" },
		{ "v0" : 251, "v1" : 252, "curve" : 0, "color" : "fcef1d", "cMask" : ["red","blue" ], "trait" : "line" }

	],

	"goals" : [
		

	],

	"discs" : [
		{ "radius" : 10, "invMass" : 1, "pos" : [-226.77232547671002,-249.83081887403256 ], "color" : "DB8727", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [-237.77232547671002,-223.83081887403256 ], "color" : "EBAB4D", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [-234.77232547671002,-239.83081887403256 ], "color" : "DBD52A", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [-222.77232547671002,-239.83081887403256 ], "color" : "C44221", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [-227.77232547671002,-226.83081887403256 ], "color" : "DB8727", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [-219.77232547671002,-219.83081887403256 ], "color" : "DBD142", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [336.22767452329,-236.83081887403256 ], "color" : "DBD52A", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [327.22767452329,-249.83081887403256 ], "color" : "DB8727", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [316.22767452329,-223.83081887403256 ], "color" : "EBAB4D", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [319.22767452329,-239.83081887403256 ], "color" : "DBD52A", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [331.22767452329,-239.83081887403256 ], "color" : "C44221", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [326.22767452329,-226.83081887403256 ], "color" : "DB8727", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 10, "invMass" : 1, "pos" : [334.22767452329,-219.83081887403256 ], "color" : "DBD142", "bCoef" : 1, "cMask" : ["blueKO" ], "cGroup" : ["score" ], "damping" : 1, "speed" : [0,-1 ], "gravity" : [0,0 ] },
		{ "radius" : 50, "invMass" : -0.1, "pos" : [466,-102 ], "color" : "2A2623", "bCoef" : 0.0005, "cMask" : ["red","blue" ], "cGroup" : ["wall","red" ], "damping" : 1.06 },
		
		{ "radius" : 4, "pos" : [-118.70966947671005,-168.7110108740325 ], "color" : "080808", "cGroup" : ["" ], "trait" : "art" },
		{ "radius" : 4, "pos" : [179.6302662661418,-168.7118753042477 ], "color" : "080808", "cGroup" : ["" ], "trait" : "art" },
		
		{ "radius" : 50, "invMass" : -0.1, "pos" : [-428,-102 ], "color" : "2A2623", "bCoef" : 0.0005, "cMask" : ["red","blue" ], "cGroup" : ["wall","red" ], "damping" : 1.06 }

	],

	"planes" : [
		{ "normal" : [0,-1 ], "dist" : 209.83081887403256, "bCoef" : 1e-7, "cMask" : ["score" ], "cGroup" : ["blueKO" ] },
		{ "normal" : [0,1 ], "dist" : -264.83081887403256, "bCoef" : 10000000, "cMask" : ["score" ], "cGroup" : ["blueKO" ], "curve" : 1 },
		{ "normal" : [1,0 ], "dist" : -571.9904, "cMask" : ["red","blue" ] },
		{ "normal" : [-1,0 ], "dist" : -571.992, "cMask" : ["red","blue" ] },
		{ "normal" : [0,1 ], "dist" : -319.1007246263721, "cMask" : ["red","blue" ] },
		{ "normal" : [0,-1 ], "dist" : -287.1370246372809, "cMask" : ["red","blue" ] }

	],

	"playerPhysicsRed" : {
		"radius" : 14,
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"cGroup" : [ "red"
		],
		"acceleration" : 0.1,
		"gravity" : [ 0, 0
		],
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5,
		"kickback" : 0

	},

	"playerPhysicsBlue" : {
		"radius" : 14,
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"cGroup" : [ "blue"
		],
		"acceleration" : 0.1,
		"gravity" : [ 0, 0
		],
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5,
		"kickback" : 0

	},

	"ballPhysics" : {
		"radius" : 0,
		"bCoef" : 0.5,
		"cMask" : [ "all"
		],
		"damping" : 0.99,
		"invMass" : 1,
		"gravity" : [ 0, 0
		],
		"color" : "ffffff",
		"cGroup" : [ "ball"
		]

	},

	"joints" : [
	{"d0":0,"d1":1,"length":111111115.0990195135927845,"color":"transparent"}


	]
}`;
	RSRMap = false;
isAFKpaused = true;
	return PremiosMap;
}

function getRealFutsal() {
	var RealFutsalMap = `{

	"name" : "👑 RᴇᴀʟFᴜᴛsᴀʟ⚽",

	"width" : 1300,

	"height" : 710,

	"spawnDistance" : 560,

	"redSpawnPoints" : [
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -396, 635
		]

	],

	"blueSpawnPoints" : [
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 396, 635
		]

	],

	"bg" : { "type" : "none", "width" : 1150, "height" : 600, "kickOffRadius" : 180, "cornerRadius" : 0, "color" : "2a3a40" },

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.1334,
		"kickStrength" : 5.2,
		"bCoef" : 0,
		"radius" : 15,
		"invMass" : 0.5,
		"damping" : 0.96,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0
		],
		"kickingDamping" : 0.96,
		"kickback" : 0

	},

	"ballPhysics" : {
		"radius" : 6.4,
		"color" : "${PelotaRS}",
		"bCoef" : 0.5,
		"invMass" : 1.05,
		"damping" : 0.99,
		"cGroup" : [ "ball", "kick", "score"
		],
		"cMask" : [ "all"
		],
		"gravity" : [ 0, 0
		]

	},

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 1 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 2 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 3 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		
		/* 4 */ { "x" : 1150, "y" : 320, "trait" : "line", "vis" : false },
		/* 5 */ { "x" : 840, "y" : 320, "trait" : "line", "vis" : false },
		/* 6 */ { "x" : 1150, "y" : -320, "trait" : "line", "vis" : false },
		/* 7 */ { "x" : 840, "y" : -320, "trait" : "line", "vis" : false },
		/* 8 */ { "x" : 1150, "y" : 180, "trait" : "line", "vis" : false },
		/* 9 */ { "x" : 1030, "y" : 180, "trait" : "line", "vis" : false },
		/* 10 */ { "x" : 1150, "y" : -180, "trait" : "line", "vis" : false },
		/* 11 */ { "x" : 1030, "y" : -180, "trait" : "line", "vis" : false },
		/* 12 */ { "x" : 840, "y" : -130, "trait" : "line", "curve" : -130, "vis" : false },
		/* 13 */ { "x" : 840, "y" : 130, "trait" : "line", "curve" : -130, "vis" : false },
		/* 14 */ { "x" : -1150, "y" : -320, "trait" : "line", "vis" : false },
		/* 15 */ { "x" : -840, "y" : -320, "trait" : "line", "vis" : false },
		/* 16 */ { "x" : -1150, "y" : 320, "trait" : "line", "vis" : false },
		/* 17 */ { "x" : -840, "y" : 320, "trait" : "line", "vis" : false },
		/* 18 */ { "x" : -1150, "y" : -175, "trait" : "line", "vis" : false },
		/* 19 */ { "x" : -1030, "y" : -175, "trait" : "line", "vis" : false },
		/* 20 */ { "x" : -1150, "y" : 175, "trait" : "line", "vis" : false },
		/* 21 */ { "x" : -1030, "y" : 175, "trait" : "line", "vis" : false },
		/* 22 */ { "x" : -840, "y" : 130, "trait" : "line", "curve" : -130, "color" : "C7E6BD", "vis" : false },
		/* 23 */ { "x" : -840, "y" : -130, "trait" : "line", "curve" : -130, "color" : "C7E6BD", "vis" : false },
		/* 24 */ { "x" : 935, "y" : 3, "trait" : "line", "vis" : false },
		/* 25 */ { "x" : 935, "y" : -3, "trait" : "line", "vis" : false },
		/* 26 */ { "x" : -935, "y" : 3, "trait" : "line", "vis" : false },
		/* 27 */ { "x" : -935, "y" : -3, "trait" : "line", "vis" : false },
		/* 28 */ { "x" : -1150, "y" : 570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 29 */ { "x" : -1120, "y" : 600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 30 */ { "x" : -1120, "y" : -600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 31 */ { "x" : -1150, "y" : -570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 32 */ { "x" : 1120, "y" : 600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 33 */ { "x" : 1150, "y" : 570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 34 */ { "x" : 1150, "y" : -570, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		/* 35 */ { "x" : 1120, "y" : -600, "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "color" : "b3b6b6" },
		
		/* 36 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "curve" : -180, "vis" : true, "color" : "b3b6b6" },
		/* 37 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 180, "vis" : true, "color" : "b3b6b6" },
		/* 38 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 180, "vis" : true, "color" : "b3b6b6" },
		
		/* 39 */ { "x" : -1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "90a688", "vis" : false },
		/* 40 */ { "x" : -1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : 70, "color" : "90a688", "vis" : false },
		/* 41 */ { "x" : 1030, "y" : -40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "90a688", "vis" : false },
		/* 42 */ { "x" : 1030, "y" : 40, "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "curve" : -70, "color" : "90a688", "vis" : false },
		/* 43 */ { "x" : 1030, "y" : -40, "trait" : "line", "color" : "90a688", "vis" : false },
		/* 44 */ { "x" : 1030, "y" : 40, "trait" : "line", "color" : "90a688", "vis" : false },
		/* 45 */ { "x" : -1030, "y" : -40, "trait" : "line", "color" : "90a688", "vis" : false },
		/* 46 */ { "x" : -1030, "y" : 40, "trait" : "line", "color" : "90a688", "vis" : false },
		/* 47 */ { "x" : 0, "y" : 3, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : 0, "y" : -3, "trait" : "line", "color" : "b3b6b6" },
		
		/* 49 */ { "x" : -1157, "y" : 605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 50 */ { "x" : -1157, "y" : 655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 51 */ { "x" : -1157, "y" : -655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 52 */ { "x" : -1157, "y" : -605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 53 */ { "x" : 1157, "y" : 605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 54 */ { "x" : 1157, "y" : 655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 55 */ { "x" : 1157, "y" : -655, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 56 */ { "x" : 1157, "y" : -605, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 57 */ { "x" : -1300, "y" : -485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 58 */ { "x" : 1300, "y" : -485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 59 */ { "x" : -1300, "y" : 485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 60 */ { "x" : 1300, "y" : 485, "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "color" : "ec644b", "vis" : false },
		/* 61 */ { "x" : -1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 62 */ { "x" : -750, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "curve" : 0, "color" : "ffffff" },
		/* 63 */ { "x" : -750, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "curve" : 0, "color" : "ffffff" },
		/* 64 */ { "x" : -1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 65 */ { "x" : 1295, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 66 */ { "x" : 750, "y" : -320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "curve" : 0 },
		/* 67 */ { "x" : 750, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "curve" : 0 },
		/* 68 */ { "x" : 1295, "y" : 320, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		/* 69 */ { "x" : -1150, "y" : -110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0 },
		/* 70 */ { "x" : -1210, "y" : -110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "curve" : 5, "radius" : 4.5, "color" : "f2d8d8" },
		/* 71 */ { "x" : -1150, "y" : 110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0 },
		/* 72 */ { "x" : -1210, "y" : 110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "curve" : 5, "radius" : 4.5, "vis" : false, "color" : "f2d8d8" },
		/* 73 */ { "x" : -1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "f2d8d8" },
		/* 74 */ { "x" : -1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "f2d8d8" },
		/* 75 */ { "x" : 1150, "y" : 110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "ffffff" },
		/* 76 */ { "x" : 1210, "y" : 110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "curve" : -5, "color" : "ffffff", "bias" : 12 },
		/* 77 */ { "x" : 1150, "y" : -110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "ffffff", "bias" : 0 },
		/* 78 */ { "x" : 1210, "y" : -110, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "curve" : -5, "radius" : 6, "color" : "ffffff", "bias" : 0 },
		/* 79 */ { "x" : 1250, "y" : -158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "e3f9fe" },
		/* 80 */ { "x" : 1250, "y" : 158, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "color" : "e3f9fe" },
		
		/* 81 */ { "x" : -1150, "y" : 600, "trait" : "line", "color" : "b3b6b6" },
		/* 82 */ { "x" : 1150, "y" : 600, "trait" : "line", "color" : "b3b6b6" },
		/* 83 */ { "x" : -1150, "y" : 600, "trait" : "line" },
		/* 84 */ { "x" : -1150, "y" : 600, "trait" : "line", "color" : "b3b6b6" },
		/* 85 */ { "x" : -1150, "y" : -600, "trait" : "line", "color" : "b3b6b6" },
		/* 86 */ { "x" : 1150, "y" : -600, "trait" : "line", "color" : "b3b6b6" },
		/* 87 */ { "x" : 1150, "y" : 600, "trait" : "line", "color" : "b3b6b6" },
		/* 88 */ { "x" : 1150, "y" : -600, "trait" : "line", "color" : "b3b6b6" },
		
		/* 89 */ { "x" : 1149, "y" : -600, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 90 */ { "x" : 1148.4570005362957, "y" : 600.139953970475, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 91 */ { "x" : -1149, "y" : -597, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		/* 92 */ { "x" : -1147.8317517070022, "y" : 601.4275705819381, "bCoef" : 0, "cMask" : ["wall" ], "cGroup" : ["all" ], "trait" : "cornerflag", "curve" : 0, "color" : "D7D7D9" },
		
		/* 93 */ { "x" : 0, "y" : 600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 94 */ { "x" : 0, "y" : 703.3392000000002, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 95 */ { "x" : 0, "y" : -706.6984320000003, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		/* 96 */ { "x" : 0, "y" : 180, "trait" : "line", "color" : "b3b6b6" },
		/* 97 */ { "x" : 0, "y" : -180, "trait" : "line", "color" : "b3b6b6" },
		/* 98 */ { "x" : -502.5872388908341, "y" : 584.5824292806498, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 99 */ { "x" : -502.5872388908341, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 100 */ { "x" : -255.89950722166907, "y" : 584.5824292806498, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 101 */ { "x" : -255.89950722166907, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 102 */ { "x" : 484.1636877858256, "y" : 584.5824292806498, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 103 */ { "x" : 484.1636877858256, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 104 */ { "x" : 237.47595611666065, "y" : 584.5824292806498, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 105 */ { "x" : 237.47595611666065, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 106 */ { "x" : -792.4453236021028, "y" : 600.6012558845073, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 107 */ { "x" : -792.4453236021028, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 108 */ { "x" : 1168.3209933208252, "y" : 259.19223558917463, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 109 */ { "x" : 1150.1332655215529, "y" : 259.19223558917463, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 110 */ { "x" : 1167.3637444892845, "y" : -259.4075612793524, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 111 */ { "x" : 1149.176016690012, "y" : -259.4075612793524, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 112 */ { "x" : -805.0072732243943, "y" : -601.8119160675375, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 113 */ { "x" : -805.0072732243943, "y" : -617.8307426713949, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 114 */ { "x" : 774.0217724970943, "y" : 600.6012558845073, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 115 */ { "x" : 774.0217724970943, "y" : 616.6200824883646, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 116 */ { "x" : 802.111670650284, "y" : -601.8119160675375, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 117 */ { "x" : 802.111670650284, "y" : -617.8307426713949, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 118 */ { "x" : -1167.7569476650856, "y" : -259.26432165652744, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 119 */ { "x" : -1149.569707910971, "y" : -259.4075612793524, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 120 */ { "x" : -1166.6540605638463, "y" : 259.19223558917463, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 121 */ { "x" : -1148.466820809732, "y" : 259.19223558917463, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 122 */ { "x" : -753.1966503273302, "y" : 210.8574116265289, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ff6363" },
		/* 123 */ { "x" : -753.1966503273302, "y" : -211.07273731670662, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901, "color" : "ff6363" },
		/* 124 */ { "x" : -753.1966503273302, "y" : -211.07273731670662, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "ff6363" },
		/* 125 */ { "x" : -1028.8843138110383, "y" : -483.78368724343204, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "ff6363" },
		/* 126 */ { "x" : -753.1966503273302, "y" : 210.8574116265289, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90, "color" : "ff6363" },
		/* 127 */ { "x" : -753.1966503273302, "y" : -5.253152466347835, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 128 */ { "x" : -753.1966503273302, "y" : 0.05307897492428726, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 129 */ { "x" : -753.1966503273302, "y" : -5.253152466347835, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 130 */ { "x" : -753.1966503273302, "y" : 4.641192290022411, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 131 */ { "x" : -753.1966503273302, "y" : 2.3471356324733677, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 132 */ { "x" : -753.1966503273302, "y" : -5.253152466347835, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 133 */ { "x" : -753.1966503273302, "y" : 5.037826776170104, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 134 */ { "x" : -753.1966503273302, "y" : -5.253152466347835, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 135 */ { "x" : -583.7636071446346, "y" : -1.2885528694224218, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 136 */ { "x" : -583.7636071446346, "y" : 2.0299088368119964, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 137 */ { "x" : -583.7636071446346, "y" : -4.607014575656841, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 138 */ { "x" : -583.7636071446346, "y" : 5.348370543046416, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 139 */ { "x" : -583.7636071446346, "y" : 3.689139689929225, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 140 */ { "x" : -583.7636071446346, "y" : -2.9477837225396217, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 141 */ { "x" : -583.7636071446346, "y" : 6.1779859696050305, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 142 */ { "x" : -583.7636071446346, "y" : -5.4366300022154395, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 143 */ { "x" : -583.7636071446346, "y" : -307.8079421963752, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 144 */ { "x" : -583.7636071446346, "y" : -304.7206484236199, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 145 */ { "x" : -583.7636071446346, "y" : 304.50532273344214, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 146 */ { "x" : -583.7636071446346, "y" : 307.59261650619754, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 147 */ { "x" : -1148.5404177536197, "y" : -483.78368724343204, "bCoef" : 0, "trait" : "line", "curve" : 0, "color" : "ff6363" },
		/* 148 */ { "x" : -1028.8843138110383, "y" : 483.5683615532543, "bCoef" : 0, "trait" : "line", "curve" : 90, "color" : "ff6363" },
		/* 149 */ { "x" : -1148.5404177536197, "y" : 483.5683615532543, "bCoef" : 0, "trait" : "line", "color" : "ff6363" },
		/* 150 */ { "x" : 753.513010517657, "y" : -211.07273731670662, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "0099ff" },
		/* 151 */ { "x" : 753.513010517657, "y" : 210.8574116265289, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901, "color" : "0099ff" },
		/* 152 */ { "x" : 753.513010517657, "y" : 210.8574116265289, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "0099ff" },
		/* 153 */ { "x" : 1029.200674001365, "y" : 483.5683615532543, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "0099ff" },
		/* 154 */ { "x" : 753.513010517657, "y" : -211.07273731670662, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90, "color" : "0099ff" },
		/* 155 */ { "x" : 753.513010517657, "y" : 5.187397115557433, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 156 */ { "x" : 753.513010517657, "y" : -0.11863695018542186, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 157 */ { "x" : 753.513010517657, "y" : 5.187259331479988, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 158 */ { "x" : 753.513010517657, "y" : -4.706560954555478, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 159 */ { "x" : 753.513010517657, "y" : -2.412598952370464, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 160 */ { "x" : 753.513010517657, "y" : 5.18732822351871, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 161 */ { "x" : 753.513010517657, "y" : -5.103156540293702, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 162 */ { "x" : 753.513010517657, "y" : 5.187224885460613, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "0099ff" },
		/* 163 */ { "x" : 1148.8567779439466, "y" : 483.5683615532543, "bCoef" : 0, "trait" : "line", "curve" : 0, "color" : "0099ff" },
		/* 164 */ { "x" : 1029.200674001365, "y" : -483.78368724343204, "bCoef" : 0, "trait" : "line", "curve" : 90, "color" : "0099ff" },
		/* 165 */ { "x" : 1148.8567779439466, "y" : -483.78368724343204, "bCoef" : 0, "trait" : "line", "color" : "0099ff" },
		/* 166 */ { "x" : 584.0799673349616, "y" : -1.2885528694224218, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 167 */ { "x" : 584.0799673349616, "y" : 2.0299088368119964, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 168 */ { "x" : 584.0799673349616, "y" : -4.607014575656841, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 169 */ { "x" : 584.0799673349616, "y" : 5.348370543046416, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 170 */ { "x" : 584.0799673349616, "y" : 3.689139689929225, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 171 */ { "x" : 584.0799673349616, "y" : -2.9477837225396217, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 172 */ { "x" : 584.0799673349616, "y" : 6.1779859696050305, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 173 */ { "x" : 584.0799673349616, "y" : -5.4366300022154395, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 174 */ { "x" : 584.0799673349616, "y" : -307.8079421963752, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 175 */ { "x" : 584.0799673349616, "y" : -304.7206484236199, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 176 */ { "x" : 584.0799673349616, "y" : 304.50532273344214, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 177 */ { "x" : 584.0799673349616, "y" : 307.59261650619754, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 178 */ { "x" : -1150, "y" : 109.5, "bCoef" : 0, "trait" : "line", "color" : "ff3030" },
		/* 179 */ { "x" : -1150, "y" : -110, "bCoef" : 0, "trait" : "line", "color" : "ff3030" },
		/* 180 */ { "x" : -1150, "y" : 109.5, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 181 */ { "x" : -1150, "y" : 78.58, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 182 */ { "x" : -1150, "y" : 47.15, "bCoef" : 0, "trait" : "line", "color" : "ffffff", "radius" : 6.4 },
		/* 183 */ { "x" : -1150, "y" : 15.72, "bCoef" : 0, "trait" : "line", "color" : "ffffff", "radius" : 6.4 },
		/* 184 */ { "x" : -1150, "y" : -78.57, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 185 */ { "x" : -1150, "y" : -110, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 186 */ { "x" : -1150, "y" : -15.71, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 187 */ { "x" : -1150, "y" : -47.14, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 188 */ { "x" : 1150, "y" : 109.5, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 189 */ { "x" : 1150, "y" : -109.5, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 190 */ { "x" : 1150, "y" : 109.5, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 191 */ { "x" : 1150, "y" : 78.58, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 192 */ { "x" : 1150, "y" : 47.15, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 193 */ { "x" : 1150, "y" : 15.72, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 194 */ { "x" : 1150, "y" : -78.57, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 195 */ { "x" : 1150, "y" : -109.5, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 196 */ { "x" : 1150, "y" : -15.71, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 197 */ { "x" : 1150, "y" : -47.14, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : true, "color" : "b3b6b6", "trait" : "kickOffBarrier" },
		{ "v0" : 2, "v1" : 3, "vis" : true, "color" : "b3b6b6", "trait" : "kickOffBarrier" },
		
		{ "v0" : 4, "v1" : 5, "vis" : false, "trait" : "line", "y" : 320 },
		{ "v0" : 5, "v1" : 7, "vis" : false, "trait" : "line", "x" : 840 },
		{ "v0" : 6, "v1" : 7, "vis" : false, "trait" : "line", "y" : -320 },
		{ "v0" : 8, "v1" : 9, "vis" : false, "trait" : "line", "y" : 180 },
		{ "v0" : 9, "v1" : 11, "vis" : false, "trait" : "line", "x" : 1030 },
		{ "v0" : 10, "v1" : 11, "vis" : false, "trait" : "line", "y" : -180 },
		{ "v0" : 12, "v1" : 13, "curve" : -130, "vis" : false, "trait" : "line", "x" : 840 },
		{ "v0" : 14, "v1" : 15, "vis" : false, "trait" : "line", "y" : -320 },
		{ "v0" : 15, "v1" : 17, "vis" : false, "trait" : "line", "x" : -840 },
		{ "v0" : 16, "v1" : 17, "vis" : false, "trait" : "line", "y" : 320 },
		{ "v0" : 18, "v1" : 19, "vis" : false, "trait" : "line", "y" : -175 },
		{ "v0" : 19, "v1" : 21, "vis" : false, "trait" : "line", "x" : -1030 },
		{ "v0" : 20, "v1" : 21, "vis" : false, "trait" : "line", "y" : 175 },
		{ "v0" : 22, "v1" : 23, "curve" : -130, "vis" : false, "color" : "C7E6BD", "trait" : "line", "x" : -840 },
		{ "v0" : 24, "v1" : 25, "curve" : -180, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -180, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 180, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 180, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : 90, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : 90, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "curve" : -90, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "curve" : -90, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 24, "v1" : 25, "vis" : false, "trait" : "line", "x" : 935 },
		{ "v0" : 26, "v1" : 27, "vis" : false, "trait" : "line", "x" : -935 },
		{ "v0" : 28, "v1" : 29, "curve" : 90, "color" : "b3b6b6", "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "curve" : 90, "color" : "b3b6b6", "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 32, "v1" : 33, "curve" : 90, "color" : "b3b6b6", "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		{ "v0" : 34, "v1" : 35, "curve" : 90, "color" : "b3b6b6", "bCoef" : -2.65, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line" },
		
		{ "v0" : 37, "v1" : 36, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 39, "v1" : 40, "curve" : 70, "vis" : false, "color" : "90a688", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : -1030 },
		{ "v0" : 41, "v1" : 42, "curve" : -70, "vis" : false, "color" : "90a688", "bCoef" : -5.7, "cMask" : ["ball" ], "cGroup" : ["c0" ], "trait" : "line", "x" : 1030 },
		
		{ "v0" : 37, "v1" : 38, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 43, "v1" : 44, "vis" : false, "color" : "90a688", "trait" : "line", "x" : 1030 },
		{ "v0" : 45, "v1" : 46, "vis" : false, "color" : "90a688", "trait" : "line", "x" : -1030 },
		{ "v0" : 47, "v1" : 48, "curve" : -180, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		{ "v0" : 47, "v1" : 48, "curve" : 180, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		{ "v0" : 47, "v1" : 48, "curve" : 90, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		{ "v0" : 47, "v1" : 48, "curve" : -90, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		{ "v0" : 47, "v1" : 48, "color" : "b3b6b6", "trait" : "line", "x" : -935 },
		
		{ "v0" : 49, "v1" : 50, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1157 },
		{ "v0" : 51, "v1" : 52, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1157 },
		{ "v0" : 53, "v1" : 54, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1157 },
		{ "v0" : 55, "v1" : 56, "color" : "FFFF00", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1157 },
		
		{ "v0" : 57, "v1" : 58, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : -485 },
		{ "v0" : 59, "v1" : 60, "vis" : false, "color" : "ec644b", "bCoef" : 0, "cMask" : ["c1" ], "cGroup" : ["red","blue" ], "y" : 485 },
		{ "v0" : 61, "v1" : 62, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 62, "v1" : 63, "curve" : 0, "vis" : false, "color" : "ffffff", "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "x" : -750 },
		{ "v0" : 63, "v1" : 64, "vis" : false, "color" : "ec644b", "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 65, "v1" : 66, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 66, "v1" : 67, "curve" : 0, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ], "x" : 750 },
		{ "v0" : 67, "v1" : 68, "vis" : false, "cMask" : ["c0" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 69, "v1" : 70, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "y" : -110 },
		{ "v0" : 71, "v1" : 72, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "y" : 110 },
		{ "v0" : 70, "v1" : 73, "color" : "f2d8d8", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 72, "v1" : 74, "color" : "f2d8d8", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 75, "v1" : 76, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "y" : 110 },
		{ "v0" : 77, "v1" : 78, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 0, "y" : -110 },
		{ "v0" : 78, "v1" : 79, "color" : "e3f9fe", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		{ "v0" : 76, "v1" : 80, "color" : "e3f9fe", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ] },
		
		{ "v0" : 81, "v1" : 82, "vis" : true, "color" : "b3b6b6", "trait" : "line", "y" : 600 },
		{ "v0" : 83, "v1" : 84, "vis" : true, "color" : "C7E6BD", "trait" : "line", "x" : -1150 },
		{ "v0" : 85, "v1" : 86, "curve" : 0.42311978919197857, "vis" : true, "color" : "b3b6b6", "trait" : "line", "y" : -600 },
		{ "v0" : 87, "v1" : 88, "vis" : true, "color" : "b3b6b6", "trait" : "line", "x" : 1150 },
		{ "v0" : 85, "v1" : 84, "vis" : true, "color" : "b3b6b6", "trait" : "line" },
		
		{ "v0" : 76, "v1" : 78, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 12 },
		{ "v0" : 70, "v1" : 72, "color" : "FFFFFF", "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["red","blue" ], "bias" : 12 },
		
		{ "v0" : 93, "v1" : 94, "vis" : false, "color" : "C7E6BD", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 3, "v1" : 95, "vis" : false, "color" : "C7E6BD", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		
		{ "v0" : 96, "v1" : 97, "vis" : true, "color" : "b3b6b6", "trait" : "line", "x" : 0 },
		{ "v0" : 98, "v1" : 99, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.9681483400014 },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 122, "v1" : 123, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 124, "v1" : 125, "curve" : -86.19094512117411, "vis" : true, "color" : "ff6363", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 128, "v1" : 127, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 127, "v1" : 128, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 130, "v1" : 129, "curve" : 180.00000000000264, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 129, "v1" : 130, "curve" : 179.99999999999739, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 132, "v1" : 131, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 131, "v1" : 132, "curve" : 180.23227975155584, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 134, "v1" : 133, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 133, "v1" : 134, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 136, "v1" : 135, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 135, "v1" : 136, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 138, "v1" : 137, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 137, "v1" : 138, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 140, "v1" : 139, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 139, "v1" : 140, "curve" : 179.79914984721913, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 142, "v1" : 141, "curve" : 179.6495181979579, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 141, "v1" : 142, "curve" : 180.35654237438484, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 143, "v1" : 144, "curve" : -198.66364834325964, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 144, "v1" : 143, "curve" : -215.6380023858894, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 145, "v1" : 146, "curve" : -198.66364834324287, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 146, "v1" : 145, "curve" : -215.63800238611827, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 125, "v1" : 147, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line", "y" : -470 },
		{ "v0" : 126, "v1" : 148, "curve" : 86.19094512117408, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 148, "v1" : 149, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line", "y" : 470 },
		{ "v0" : 150, "v1" : 151, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 152, "v1" : 153, "curve" : -86.19094512117407, "vis" : true, "color" : "0099ff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 156, "v1" : 155, "curve" : 179.83865615955762, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 155, "v1" : 156, "curve" : 180, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 158, "v1" : 157, "curve" : 179.69898573943476, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 157, "v1" : 158, "curve" : 180.3054738876212, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 160, "v1" : 159, "curve" : 180, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 159, "v1" : 160, "curve" : 180.23227975154748, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 162, "v1" : 161, "curve" : 179.68721314439955, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 161, "v1" : 162, "curve" : 180.3084189314784, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 153, "v1" : 163, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0, "trait" : "line", "y" : -470 },
		{ "v0" : 154, "v1" : 164, "curve" : 86.19094512117412, "vis" : true, "color" : "0099ff", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 164, "v1" : 165, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0, "trait" : "line", "y" : 470 },
		{ "v0" : 167, "v1" : 166, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 166, "v1" : 167, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 169, "v1" : 168, "curve" : 179.99999999999736, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 168, "v1" : 169, "curve" : 180.00000000000264, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 171, "v1" : 170, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 170, "v1" : 171, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 173, "v1" : 172, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 172, "v1" : 173, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 174, "v1" : 175, "curve" : -198.66364834438545, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 175, "v1" : 174, "curve" : -215.63800238592762, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 176, "v1" : 177, "curve" : -198.66364834380988, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 177, "v1" : 176, "curve" : -215.63800238564397, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 178, "v1" : 179, "curve" : 0, "vis" : true, "color" : "ff3030", "bCoef" : 0, "trait" : "line", "x" : -1150 },
		{ "v0" : 180, "v1" : 181, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1150 },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1150, "radius" : 6.4 },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1150 },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1150 },
		{ "v0" : 188, "v1" : 189, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1150 },
		{ "v0" : 190, "v1" : 191, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1150 },
		{ "v0" : 192, "v1" : 193, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1150 },
		{ "v0" : 194, "v1" : 195, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1150 },
		{ "v0" : 196, "v1" : 197, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1150 }

	],

	"goals" : [
		{ "p0" : [1159.0402530462036,-109.5 ], "p1" : [1159.0402530462036,109.5 ], "team" : "blue" },
		{ "p0" : [-1159.0402530462036,-109.5 ], "p1" : [-1159.0402530462036,109.5 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 0, "invMass" : 0, "pos" : [-1311,-19 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["ball" ] },
		{ "radius" : 0, "invMass" : 0, "pos" : [-1310,29 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["ball" ] },
		{ "radius" : 0, "invMass" : 0, "pos" : [-1308,62 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["ball" ] },
		
		{ "radius" : 2.7, "pos" : [-1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
		{ "radius" : 2.7, "pos" : [1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
		{ "radius" : 2.7, "pos" : [1150,600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
		
		{ "radius" : 6, "invMass" : 0, "pos" : [-1150,-110 ], "color" : "ff3030", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 6, "invMass" : 0, "pos" : [-1150,110 ], "color" : "ff3030", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 2, "invMass" : 0, "pos" : [-1250,-158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 2, "invMass" : 0, "pos" : [-1250,158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 6, "invMass" : 0, "pos" : [1150,-110 ], "color" : "33b4ff", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 6, "invMass" : 0, "pos" : [1150,110 ], "color" : "33b4ff", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 2, "invMass" : 0, "pos" : [1250,-158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
		{ "radius" : 2, "invMass" : 0, "pos" : [1250,158 ], "color" : "000000", "bCoef" : 1, "trait" : "goalPost" },
		
		{ "radius" : 2.7, "pos" : [-1150,-600 ], "cGroup" : ["ball" ], "trait" : "cornerflag" },
		
		{ "radius" : 0, "pos" : [-1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [-1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,-485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [-1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [-1149,485 ], "cMask" : ["none" ] },
		{ "radius" : 0, "pos" : [1149,485 ], "cMask" : ["none" ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -627, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -627, "bCoef" : 0, "cGroup" : ["ball" ], "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -706, "bCoef" : 0 },
		{ "normal" : [0,-1 ], "dist" : -706, "bCoef" : 0 },
		{ "normal" : [1,0 ], "dist" : -1300, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1300, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1240, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -1240, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ], "cGroup" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 1, "cGroup" : ["ball" ] },
		"rightNet" : { "radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c3" ] },
		"leftNet" : { "radius" : 0, "invMass" : 1, "bCoef" : 0, "cGroup" : ["ball","c2" ] },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.2, "color" : "FFFF00", "cMask" : ["ball" ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "cGroup" : ["ball" ], "color" : "C7E6BD" }

	},

	"joints" : [
		{ "d0" : 16, "d1" : 17, "strength" : "rigid", "color" : "f5204b", "length" : null },
		{ "d0" : 18, "d1" : 19, "strength" : "rigid", "color" : "00e1ff", "length" : null },
		{ "d0" : 20, "d1" : 21, "strength" : "rigid", "color" : "f5204b", "length" : null },
		{ "d0" : 22, "d1" : 23, "strength" : "rigid", "color" : "00e1ff", "length" : null }

	]
}
`;
	RSRMap = true;
	THERealFutsalMap = true;
	return RealFutsalMap;
}







function getCampeonesMap() {
	var CampeonesMap = `{

	"name" : "🏆 CAMPEONES 🌿⭐🌿",

	"width" : 500,

	"height" : 150,

	"spawnDistance" : 170,

	"redSpawnPoints" : [
		[ -313.5, 31
		],
		[ -364.5, 31
		],
		[ -413.5, 31
		],
		[ -463.5, 31
		]

	],

	"blueSpawnPoints" : [
		[ 135.5, 131
		],
		[ 180.5, 131
		],
		[ 232.5, 131
		],
		[ 272.5, 131
		]

	],

	"bg" : { "color" : "375946" },

	"vertexes" : [
		/* 0 */ { "x" : 494.7861757312205, "y" : -7.309797894579809, "curve" : -50, "color" : "0f2027" },
		/* 1 */ { "x" : -497.2138242687795, "y" : -17.30979789457981, "curve" : -50, "color" : "112233" },
		/* 2 */ { "x" : 494.7861757312205, "y" : -9.309797894579809, "curve" : -50, "color" : "132434" },
		/* 3 */ { "x" : -497.2138242687795, "y" : -19.30979789457981, "curve" : -50, "color" : "152635" },
		/* 4 */ { "x" : 494.7861757312205, "y" : -11.309797894579809, "curve" : -50, "color" : "172836" },
		/* 5 */ { "x" : -497.2138242687795, "y" : -21.30979789457981, "curve" : -50, "color" : "193037" },
		/* 6 */ { "x" : 494.7861757312205, "y" : -13.309797894579809, "curve" : -50, "color" : "1b4048" },
		/* 7 */ { "x" : -497.2138242687795, "y" : -23.30979789457981, "curve" : -50, "color" : "1d5159" },
		/* 8 */ { "x" : 494.7861757312205, "y" : -15.309797894579809, "curve" : -50, "color" : "1f626a" },
		/* 9 */ { "x" : -497.2138242687795, "y" : -25.30979789457981, "curve" : -50, "color" : "21737b" },
		/* 10 */ { "x" : 494.7861757312205, "y" : -17.30979789457981, "curve" : -50, "color" : "23848c" },
		/* 11 */ { "x" : -497.2138242687795, "y" : -27.30979789457981, "curve" : -50, "color" : "25959d" },
		/* 12 */ { "x" : 494.7861757312205, "y" : -19.30979789457981, "curve" : -50, "color" : "27a6ae" },
		/* 13 */ { "x" : -497.2138242687795, "y" : -29.30979789457981, "curve" : -50, "color" : "29b7bf" },
		/* 14 */ { "x" : 494.7861757312205, "y" : -21.30979789457981, "curve" : -50, "color" : "2bc8d0" },
		/* 15 */ { "x" : -497.2138242687795, "y" : -31.30979789457981, "curve" : -50, "color" : "2dd9e1" },
		/* 16 */ { "x" : 494.7861757312205, "y" : -23.30979789457981, "curve" : -50, "color" : "2feaf2" },
		/* 17 */ { "x" : -497.2138242687795, "y" : -33.30979789457981, "curve" : -50, "color" : "31fbff" },
		/* 18 */ { "x" : 494.7861757312205, "y" : -25.30979789457981, "curve" : -50, "color" : "33fbff" },
		/* 19 */ { "x" : -497.2138242687795, "y" : -35.30979789457981, "curve" : -50, "color" : "35fbff" },
		/* 20 */ { "x" : 494.7861757312205, "y" : -27.30979789457981, "curve" : -50, "color" : "37fbff" },
		/* 21 */ { "x" : -497.2138242687795, "y" : -37.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 22 */ { "x" : 494.7861757312205, "y" : -29.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 23 */ { "x" : -497.2138242687795, "y" : -39.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 24 */ { "x" : 494.7861757312205, "y" : -31.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 25 */ { "x" : -497.2138242687795, "y" : -41.30979789457981, "curve" : -50, "color" : "ffffff" },
		/* 26 */ { "x" : 494.7861757312205, "y" : -3.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 27 */ { "x" : -497.2138242687795, "y" : -13.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 28 */ { "x" : 494.7861757312205, "y" : -5.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 29 */ { "x" : -497.2138242687795, "y" : -15.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 30 */ { "x" : 494.7861757312205, "y" : -1.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 31 */ { "x" : -497.2138242687795, "y" : -11.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 32 */ { "x" : 494.7861757312205, "y" : 0.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 33 */ { "x" : -497.2138242687795, "y" : -9.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 34 */ { "x" : 494.7861757312205, "y" : 2.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 35 */ { "x" : -497.2138242687795, "y" : -7.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 36 */ { "x" : 494.7861757312205, "y" : 4.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 37 */ { "x" : -497.2138242687795, "y" : -5.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 38 */ { "x" : 494.7861757312205, "y" : 6.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 39 */ { "x" : -497.2138242687795, "y" : -3.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 40 */ { "x" : 494.7861757312205, "y" : 8.690202105420191, "curve" : -50, "color" : "ffffff" },
		/* 41 */ { "x" : -497.2138242687795, "y" : -1.309797894579809, "curve" : -50, "color" : "ffffff" },
		/* 42 */ { "x" : -500, "y" : 57.56164977325504, "curve" : 0 },
		/* 43 */ { "x" : 500, "y" : 57.56164977325504, "curve" : 0 },
		/* 44 */ { "x" : -500, "y" : 59.56164977325504, "curve" : 0 },
		/* 45 */ { "x" : 500, "y" : 59.56164977325504, "curve" : 0 },
		/* 46 */ { "x" : -500, "y" : 61.56164977325504, "curve" : 0 },
		/* 47 */ { "x" : 500, "y" : 61.56164977325504, "curve" : 0 },
		/* 48 */ { "x" : -500, "y" : 63.56164977325504, "curve" : 0 },
		/* 49 */ { "x" : 500, "y" : 63.56164977325504, "curve" : 0 },
		/* 50 */ { "x" : -500, "y" : 65.56164977325504, "curve" : 0 },
		/* 51 */ { "x" : 500, "y" : 65.56164977325504, "curve" : 0 },
		/* 52 */ { "x" : -500, "y" : 67.56164977325504, "curve" : 0 },
		/* 53 */ { "x" : 500, "y" : 67.56164977325504, "curve" : 0 },
		/* 54 */ { "x" : -500, "y" : 69.56164977325504, "curve" : 0 },
		/* 55 */ { "x" : 500, "y" : 69.56164977325504, "curve" : 0 },
		/* 56 */ { "x" : -500, "y" : -319.43835022674494, "vis" : false },
		/* 57 */ { "x" : -500, "y" : 160.56164977325506, "vis" : false },
		/* 58 */ { "x" : 500, "y" : 160.56164977325506, "vis" : false },
		/* 59 */ { "x" : 500, "y" : -363.43835022674494, "vis" : false },
		/* 60 */ { "x" : -207, "y" : 43.561649773255034, "curve" : 0, "color" : "23357e" },
		/* 61 */ { "x" : 93, "y" : 43.561649773255034, "curve" : 0, "color" : "23357e" },
		/* 62 */ { "x" : -207, "y" : 45.561649773255034, "curve" : 0, "color" : "23357e" },
		/* 63 */ { "x" : 93, "y" : 45.561649773255034, "curve" : 0, "color" : "23357e" },
		/* 64 */ { "x" : -207, "y" : 47.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 65 */ { "x" : 93, "y" : 47.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 66 */ { "x" : -207, "y" : 49.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 67 */ { "x" : 93, "y" : 49.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 68 */ { "x" : -207, "y" : 51.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 69 */ { "x" : 93, "y" : 51.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 70 */ { "x" : -207, "y" : 53.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 71 */ { "x" : 93, "y" : 53.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 72 */ { "x" : -207, "y" : 55.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 73 */ { "x" : 93, "y" : 55.56164977325504, "curve" : 0, "color" : "23357e" },
		/* 74 */ { "x" : -120, "y" : 30.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 75 */ { "x" : 1, "y" : 30.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 76 */ { "x" : -120, "y" : 32.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 77 */ { "x" : 1, "y" : 32.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 78 */ { "x" : -120, "y" : 34.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 79 */ { "x" : 1, "y" : 34.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 80 */ { "x" : -120, "y" : 36.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 81 */ { "x" : 1, "y" : 36.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 82 */ { "x" : -120, "y" : 38.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 83 */ { "x" : 1, "y" : 38.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 84 */ { "x" : -120, "y" : 40.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 85 */ { "x" : 1, "y" : 40.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 86 */ { "x" : -120, "y" : 42.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 87 */ { "x" : 1, "y" : 42.561649773255034, "curve" : 0, "color" : "27346a" },
		/* 88 */ { "x" : -500, "y" : 70.56164977325504, "curve" : 0 },
		/* 89 */ { "x" : 500, "y" : 70.56164977325504, "curve" : 0 },
		/* 90 */ { "x" : -500, "y" : 72.56164977325504, "curve" : 0 },
		/* 91 */ { "x" : 500, "y" : 72.56164977325504, "curve" : 0 },
		/* 92 */ { "x" : -500, "y" : 74.56164977325504, "curve" : 0 },
		/* 93 */ { "x" : 500, "y" : 74.56164977325504, "curve" : 0 },
		/* 94 */ { "x" : -500, "y" : 76.56164977325504, "curve" : 0 },
		/* 95 */ { "x" : 500, "y" : 76.56164977325504, "curve" : 0 },
		/* 96 */ { "x" : -500, "y" : 78.56164977325504, "curve" : 0 },
		/* 97 */ { "x" : 500, "y" : 78.56164977325504, "curve" : 0 },
		/* 98 */ { "x" : -500, "y" : 80.56164977325504, "curve" : 0 },
		/* 99 */ { "x" : 500, "y" : 80.56164977325504, "curve" : 0 },
		/* 100 */ { "x" : -500, "y" : 82.56164977325504, "curve" : 0 },
		/* 101 */ { "x" : 500, "y" : 82.56164977325504, "curve" : 0 },
		/* 102 */ { "x" : -500, "y" : 83.56164977325504, "curve" : 0 },
		/* 103 */ { "x" : 500, "y" : 83.56164977325504, "curve" : 0 },
		/* 104 */ { "x" : -500, "y" : 85.56164977325504, "curve" : 0 },
		/* 105 */ { "x" : 500, "y" : 85.56164977325504, "curve" : 0 },
		/* 106 */ { "x" : -500, "y" : 87.56164977325504, "curve" : 0 },
		/* 107 */ { "x" : 500, "y" : 87.56164977325504, "curve" : 0 },
		/* 108 */ { "x" : -500, "y" : 89.56164977325504, "curve" : 0 },
		/* 109 */ { "x" : 500, "y" : 89.56164977325504, "curve" : 0 },
		/* 110 */ { "x" : -500, "y" : 91.56164977325504, "curve" : 0 },
		/* 111 */ { "x" : 500, "y" : 91.56164977325504, "curve" : 0 },
		/* 112 */ { "x" : -500, "y" : 93.56164977325504, "curve" : 0 },
		/* 113 */ { "x" : 500, "y" : 93.56164977325504, "curve" : 0 },
		/* 114 */ { "x" : -500, "y" : 95.56164977325504, "curve" : 0, "_selected" : "segment" },
		/* 115 */ { "x" : 500, "y" : 95.56164977325504, "curve" : 0, "_selected" : "segment" },
		/* 116 */ { "x" : -502, "y" : -319.43835022674494, "vis" : false },
		/* 117 */ { "x" : -502, "y" : 160.56164977325506, "vis" : false },
		/* 118 */ { "x" : 502, "y" : 160.56164977325506, "vis" : false },
		/* 119 */ { "x" : 502, "y" : -363.43835022674494, "vis" : false },
		/* 120 */ { "x" : -504, "y" : -319.43835022674494, "vis" : false },
		/* 121 */ { "x" : -504, "y" : 160.56164977325506, "vis" : false },
		/* 122 */ { "x" : 504, "y" : 160.56164977325506, "vis" : false },
		/* 123 */ { "x" : 504, "y" : -363.43835022674494, "vis" : false },
		/* 124 */ { "x" : -500, "y" : 162.56164977325506, "vis" : false },
		/* 125 */ { "x" : 500, "y" : 162.56164977325506, "vis" : false },
		/* 126 */ { "x" : -500, "y" : 164.56164977325506, "vis" : false },
		/* 127 */ { "x" : 500, "y" : 164.56164977325506, "vis" : false },
		/* 128 */ { "x" : -127.26222973756316, "y" : -132.3848081877582, "color" : "1b254e" },
		/* 129 */ { "x" : -139.78385080553804, "y" : -131.61186861566097, "color" : "1b254e" },
		/* 130 */ { "x" : -138.2435726727356, "y" : -106.65936286426175, "color" : "1b254e" },
		/* 131 */ { "x" : -125.72195160476073, "y" : -107.432302436359, "color" : "1b254e" },
		/* 132 */ { "x" : -115.19485069348019, "y" : -106.57926840135603, "color" : "1b254e" },
		/* 133 */ { "x" : -116.91996220221891, "y" : -134.52607484292315, "color" : "1b254e" },
		/* 134 */ { "x" : -102.6732296255053, "y" : -107.35220797345328, "color" : "1b254e" },
		/* 135 */ { "x" : -104.39834113424402, "y" : -135.2990144150204, "color" : "1b254e" },
		/* 136 */ { "x" : -116.05740644784956, "y" : -120.55267162213961, "color" : "1b254e" },
		/* 137 */ { "x" : -103.53578537987467, "y" : -121.32561119423683, "color" : "1b254e" },
		/* 138 */ { "x" : -92.09613786717209, "y" : -107.86943339391858, "color" : "1b254e" },
		/* 139 */ { "x" : -86.67869444925958, "y" : -137.0413105061603, "color" : "1b254e" },
		/* 140 */ { "x" : -79.55610603843748, "y" : -108.23825785946958, "color" : "1b254e" },
		/* 141 */ { "x" : -90.37291322018731, "y" : -119.44526195050672, "color" : "1b254e" },
		/* 142 */ { "x" : -83.19191267202388, "y" : -119.6564678489821, "color" : "1b254e" },
		/* 143 */ { "x" : -69.12077904029292, "y" : -109.04539545799422, "color" : "1b254e" },
		/* 144 */ { "x" : -69.94395248514581, "y" : -137.03329258299613, "color" : "1b254e" },
		/* 145 */ { "x" : -63.08490429293134, "y" : -117.19060736896593, "color" : "1b254e" },
		/* 146 */ { "x" : -57.40392065641119, "y" : -137.4021170485471, "color" : "1b254e" },
		/* 147 */ { "x" : -56.580747211558275, "y" : -109.41421992354522, "color" : "1b254e" },
		/* 148 */ { "x" : -42.99210757349505, "y" : -111.1687489274483, "color" : "1b254e" },
		/* 149 */ { "x" : -42.99210757349505, "y" : -139.1687489274483, "color" : "1b254e" },
		/* 150 */ { "x" : -32.170506543350655, "y" : -127.3206919773853, "color" : "1b254e" },
		/* 151 */ { "x" : -43.847753708043655, "y" : -124.31826551683399, "color" : "1b254e" },
		/* 152 */ { "x" : -22.08301666440413, "y" : -111.1687489274483, "color" : "1b254e" },
		/* 153 */ { "x" : -22.08301666440413, "y" : -139.1687489274483, "color" : "1b254e" },
		/* 154 */ { "x" : -7.744154865484049, "y" : -138.78913817998966, "color" : "1b254e" },
		/* 155 */ { "x" : -9.172540581262744, "y" : -113.82997725164593, "color" : "1b254e" },
		/* 156 */ { "x" : 3.352420175506116, "y" : -113.1131873288188, "color" : "1b254e" },
		/* 157 */ { "x" : 4.78080589128481, "y" : -138.0723482571625, "color" : "1b254e" },
		/* 158 */ { "x" : 13.704184329866749, "y" : -111.0183127374289, "color" : "1b254e" },
		/* 159 */ { "x" : 15.303976331538887, "y" : -138.97257297717385, "color" : "1b254e" },
		/* 160 */ { "x" : 26.229145086635608, "y" : -110.30152281460177, "color" : "1b254e" },
		/* 161 */ { "x" : 27.828937088307747, "y" : -138.25578305434675, "color" : "1b254e" },
		/* 162 */ { "x" : 37.95992786504899, "y" : -114.95818205451785, "color" : "1b254e" },
		/* 163 */ { "x" : 48.770332351744344, "y" : -121.76104744662534, "color" : "1b254e" },
		/* 164 */ { "x" : 41.5368568277516, "y" : -129.14249252312544, "color" : "1b254e" },
		/* 165 */ { "x" : 53.42996588548224, "y" : -130.771544446721, "color" : "1b254e" },
		/* 166 */ { "x" : -127.26222973756316, "y" : -135.88575055933103 },
		/* 167 */ { "x" : -139.78385080553804, "y" : -135.1128109872338 },
		/* 168 */ { "x" : -138.2435726727356, "y" : -110.16030523583457 },
		/* 169 */ { "x" : -125.72195160476073, "y" : -110.93324480793179 },
		/* 170 */ { "x" : -115.19485069348019, "y" : -110.08021077292885 },
		/* 171 */ { "x" : -116.9199622022189, "y" : -138.02701721449597 },
		/* 172 */ { "x" : -102.6732296255053, "y" : -110.85315034502607 },
		/* 173 */ { "x" : -104.39834113424402, "y" : -138.7999567865932 },
		/* 174 */ { "x" : -116.05740644784956, "y" : -124.05361399371243 },
		/* 175 */ { "x" : -103.53578537987467, "y" : -124.82655356580962 },
		/* 176 */ { "x" : -92.09613786717209, "y" : -111.3703757654914 },
		/* 177 */ { "x" : -86.67869444925958, "y" : -140.54225287773312 },
		/* 178 */ { "x" : -79.55610603843748, "y" : -111.7392002310424 },
		/* 179 */ { "x" : -90.37291322018731, "y" : -122.94620432207954 },
		/* 180 */ { "x" : -83.19191267202388, "y" : -123.1574102205549 },
		/* 181 */ { "x" : -69.12077904029292, "y" : -112.54633782956704 },
		/* 182 */ { "x" : -69.94395248514581, "y" : -140.53423495456894 },
		/* 183 */ { "x" : -63.08490429293134, "y" : -120.69154974053875 },
		/* 184 */ { "x" : -57.40392065641119, "y" : -140.90305942011992 },
		/* 185 */ { "x" : -56.580747211558275, "y" : -112.91516229511804 },
		/* 186 */ { "x" : -42.99210757349505, "y" : -114.66969129902112 },
		/* 187 */ { "x" : -42.99210757349505, "y" : -142.6696912990211 },
		/* 188 */ { "x" : -32.170506543350655, "y" : -130.82163434895813 },
		/* 189 */ { "x" : -43.847753708043655, "y" : -127.81920788840681 },
		/* 190 */ { "x" : -22.083016664404127, "y" : -114.66969129902112 },
		/* 191 */ { "x" : -22.083016664404127, "y" : -142.6696912990211 },
		/* 192 */ { "x" : -7.744154865484045, "y" : -142.29008055156243 },
		/* 193 */ { "x" : -9.17254058126274, "y" : -117.33091962321875 },
		/* 194 */ { "x" : 3.3524201755061185, "y" : -116.61412970039162 },
		/* 195 */ { "x" : 4.780805891284814, "y" : -141.57329062873532 },
		/* 196 */ { "x" : 13.704184329866752, "y" : -114.51925510900172 },
		/* 197 */ { "x" : 15.303976331538891, "y" : -142.47351534874667 },
		/* 198 */ { "x" : 26.22914508663561, "y" : -113.80246518617459 },
		/* 199 */ { "x" : 27.82893708830775, "y" : -141.7567254259195 },
		/* 200 */ { "x" : 37.959927865048996, "y" : -118.45912442609064 },
		/* 201 */ { "x" : 48.770332351744344, "y" : -125.26198981819813 },
		/* 202 */ { "x" : 41.536856827751606, "y" : -132.64343489469826 },
		/* 203 */ { "x" : 53.42996588548225, "y" : -134.27248681829377 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "curve" : -50, "color" : "0f2027", "y" : 30 },
		{ "v0" : 2, "v1" : 3, "curve" : -50, "color" : "001a26", "y" : 28 },
		{ "v0" : 4, "v1" : 5, "curve" : -50, "color" : "001c2e", "y" : 26 },
		{ "v0" : 6, "v1" : 7, "curve" : -50, "color" : "001d3c", "y" : 24 },
		{ "v0" : 8, "v1" : 9, "curve" : -50, "color" : "001e4a", "y" : 22 },
		{ "v0" : 10, "v1" : 11, "curve" : -50, "color" : "001f58", "y" : 20 },
		{ "v0" : 12, "v1" : 13, "curve" : -50, "color" : "002047", "y" : 18 },
		{ "v0" : 14, "v1" : 15, "curve" : -50, "color" : "002250", "y" : 16 },
		{ "v0" : 16, "v1" : 17, "curve" : -50, "color" : "002359", "y" : 14 },
		{ "v0" : 18, "v1" : 19, "curve" : -50, "color" : "002462", "y" : 12 },
		{ "v0" : 20, "v1" : 21, "curve" : -50, "color" : "00256b", "y" : 10 },
		{ "v0" : 22, "v1" : 23, "curve" : -50, "color" : "002774", "y" : 8 },
		{ "v0" : 24, "v1" : 25, "curve" : -50, "color" : "00287d", "y" : 6 },
		{ "v0" : 26, "v1" : 27, "curve" : -50, "color" : "002986", "y" : 34 },
		{ "v0" : 28, "v1" : 29, "curve" : -50, "color" : "002a8f", "y" : 32 },
		{ "v0" : 30, "v1" : 31, "curve" : -50, "color" : "002b98", "y" : 36 },
		{ "v0" : 32, "v1" : 33, "curve" : -50, "color" : "002ca1", "y" : 38 },
		{ "v0" : 34, "v1" : 35, "curve" : -50, "color" : "002daf", "y" : 40 },
		{ "v0" : 36, "v1" : 37, "curve" : -50, "color" : "002eb7", "y" : 42 },
		{ "v0" : 38, "v1" : 39, "curve" : -50, "color" : "002fc0", "y" : 44 },
		{ "v0" : 40, "v1" : 41, "curve" : -50, "color" : "0030c9", "y" : 46 },
	{ "v0" : 42, "v1" : 43, "curve" : 0, "color" : "001a26", "y" : 125 },
	{ "v0" : 44, "v1" : 45, "curve" : 0, "color" : "001c2e", "y" : 127 },
	{ "v0" : 46, "v1" : 47, "curve" : 0, "color" : "001d3c", "y" : 129 },
	{ "v0" : 48, "v1" : 49, "curve" : 0, "color" : "001e4a", "y" : 131 },
	{ "v0" : 50, "v1" : 51, "curve" : 0, "color" : "001f58", "y" : 133 },
	{ "v0" : 52, "v1" : 53, "curve" : 0, "color" : "002047", "y" : 135 },
	{ "v0" : 54, "v1" : 55, "curve" : 0, "color" : "002250", "y" : 137 },
	{ "v0" : 56, "v1" : 57, "curve" : 0, "vis" : false, "color" : "001a26", "x" : -500 },
	{ "v0" : 58, "v1" : 59, "curve" : 0, "vis" : false, "color" : "001a26", "x" : 500 },
	{ "v0" : 60, "v1" : 61, "curve" : 0, "color" : "00203e", "y" : 125 },
	{ "v0" : 62, "v1" : 63, "curve" : 0, "color" : "002249", "y" : 127 },
	{ "v0" : 64, "v1" : 65, "curve" : 0, "color" : "002554", "y" : 129 },
	{ "v0" : 66, "v1" : 67, "curve" : 0, "color" : "00275f", "y" : 131 },
	{ "v0" : 68, "v1" : 69, "curve" : 0, "color" : "002969", "y" : 133 },
	{ "v0" : 70, "v1" : 71, "curve" : 0, "color" : "002b74", "y" : 135 },
	{ "v0" : 72, "v1" : 73, "curve" : 0, "color" : "002d7f", "y" : 137 },
	{ "v0" : 74, "v1" : 75, "curve" : 0, "color" : "001f58", "y" : 125 },
	{ "v0" : 76, "v1" : 77, "curve" : 0, "color" : "002047", "y" : 127 },
	{ "v0" : 78, "v1" : 79, "curve" : 0, "color" : "002250", "y" : 129 },
	{ "v0" : 80, "v1" : 81, "curve" : 0, "color" : "002459", "y" : 131 },
	{ "v0" : 82, "v1" : 83, "curve" : 0, "color" : "002663", "y" : 133 },
	{ "v0" : 84, "v1" : 85, "curve" : 0, "color" : "00286e", "y" : 135 },
	{ "v0" : 86, "v1" : 87, "curve" : 0, "color" : "002a79", "y" : 137 },
	{ "v0" : 88, "v1" : 89, "curve" : 0, "color" : "001a26", "y" : 125 },
	{ "v0" : 90, "v1" : 91, "curve" : 0, "color" : "001c2e", "y" : 127 },
	{ "v0" : 92, "v1" : 93, "curve" : 0, "color" : "001d3c", "y" : 129 },
	{ "v0" : 94, "v1" : 95, "curve" : 0, "color" : "001e4a", "y" : 131 },
	{ "v0" : 96, "v1" : 97, "curve" : 0, "color" : "001f58", "y" : 133 },
	{ "v0" : 98, "v1" : 99, "curve" : 0, "color" : "002047", "y" : 135 },
	{ "v0" : 100, "v1" : 101, "curve" : 0, "color" : "002250", "y" : 137 },
	{ "v0" : 102, "v1" : 103, "curve" : 0, "color" : "002459", "y" : 125 },
	{ "v0" : 104, "v1" : 105, "curve" : 0, "color" : "002663", "y" : 127 },
	{ "v0" : 106, "v1" : 107, "curve" : 0, "color" : "00286e", "y" : 129 },
	{ "v0" : 108, "v1" : 109, "curve" : 0, "color" : "002a79", "y" : 131 },
	{ "v0" : 110, "v1" : 111, "curve" : 0, "color" : "002c83", "y" : 133 },
	{ "v0" : 112, "v1" : 113, "curve" : 0, "color" : "002e8e", "y" : 135 },
	{ "v0" : 114, "v1" : 115, "curve" : 0, "color" : "003097", "y" : 137, "_selected" : true },
	{ "v0" : 57, "v1" : 58, "curve" : 0, "vis" : false, "color" : "001a26", "y" : 228 },
	{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : false, "color" : "001a26", "x" : -502 },
	{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : false, "color" : "001a26", "x" : 502 },
	{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : false, "color" : "001a26", "x" : -504 },
	{ "v0" : 122, "v1" : 123, "curve" : 0, "vis" : false, "color" : "001a26", "x" : 504 },
	{ "v0" : 124, "v1" : 125, "curve" : 0, "vis" : false, "color" : "001a26", "y" : 230 },
	{ "v0" : 126, "v1" : 127, "curve" : 0, "vis" : false, "color" : "001a26", "y" : 232 },
		{ "v0" : 128, "v1" : 129, "curve" : 0, "color" : "1b254e", "y" : -237 },
		{ "v0" : 129, "v1" : 130, "curve" : 0, "color" : "1b254e", "x" : 0 },
		{ "v0" : 130, "v1" : 131, "curve" : 0, "color" : "1b254e", "y" : -212 },
		{ "v0" : 132, "v1" : 133, "curve" : 0, "color" : "1b254e", "x" : 22 },
		{ "v0" : 134, "v1" : 135, "curve" : 0, "color" : "1b254e", "x" : 34 },
		{ "v0" : 136, "v1" : 137, "curve" : 0, "color" : "1b254e", "y" : -224.5 },
		{ "v0" : 138, "v1" : 139, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 139, "v1" : 140, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 141, "v1" : 142, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 143, "v1" : 144, "curve" : 0, "color" : "1b254e", "x" : 66 },
		{ "v0" : 144, "v1" : 145, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 145, "v1" : 146, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 146, "v1" : 147, "curve" : 0, "color" : "1b254e", "x" : 78 },
		{ "v0" : 148, "v1" : 149, "curve" : 0, "color" : "1b254e", "x" : 88 },
		{ "v0" : 149, "v1" : 150, "curve" : 109.07645543215052, "color" : "1b254e" },
		{ "v0" : 150, "v1" : 151, "curve" : 90.20791541461715, "color" : "1b254e" },
		{ "v0" : 152, "v1" : 153, "curve" : 0, "color" : "1b254e", "x" : 108 },
		{ "v0" : 154, "v1" : 155, "curve" : 0, "color" : "1b254e", "x" : 118 },
		{ "v0" : 155, "v1" : 156, "curve" : 0, "color" : "1b254e", "y" : -212 },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "color" : "1b254e", "x" : 130 },
		{ "v0" : 157, "v1" : 154, "curve" : 0, "color" : "1b254e", "y" : -237 },
		{ "v0" : 158, "v1" : 159, "curve" : 0, "color" : "1b254e", "x" : 140 },
		{ "v0" : 159, "v1" : 160, "curve" : 0, "color" : "1b254e" },
		{ "v0" : 160, "v1" : 161, "curve" : 0, "color" : "1b254e", "x" : 152 },
		{ "v0" : 162, "v1" : 163, "curve" : -210.20993926461884, "color" : "1b254e" },
		{ "v0" : 163, "v1" : 164, "curve" : 141.85752234867013, "color" : "1b254e" },
		{ "v0" : 164, "v1" : 165, "curve" : 170.7328685934713, "color" : "1b254e" },
		{ "v0" : 166, "v1" : 167, "curve" : 0, "color" : "f1cc7b", "y" : -237 },
		{ "v0" : 167, "v1" : 168, "curve" : 0, "color" : "f1cc7b", "x" : 0 },
		{ "v0" : 168, "v1" : 169, "curve" : 0, "color" : "f1cc7b", "y" : -212 },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "color" : "f1cc7b", "x" : 22 },
		{ "v0" : 172, "v1" : 173, "curve" : 0, "color" : "f1cc7b", "x" : 34 },
		{ "v0" : 174, "v1" : 175, "curve" : 0, "color" : "f1cc7b", "y" : -224.5 },
		{ "v0" : 176, "v1" : 177, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 177, "v1" : 178, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 179, "v1" : 180, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 181, "v1" : 182, "curve" : 0, "color" : "f1cc7b", "x" : 66 },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 183, "v1" : 184, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "color" : "f1cc7b", "x" : 78 },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "color" : "f1cc7b", "x" : 88 },
		{ "v0" : 187, "v1" : 188, "curve" : 109.07645543215052, "color" : "f1cc7b" },
		{ "v0" : 188, "v1" : 189, "curve" : 90.20791541461715, "color" : "f1cc7b" },
		{ "v0" : 190, "v1" : 191, "curve" : 0, "color" : "f1cc7b", "x" : 108 },
		{ "v0" : 192, "v1" : 193, "curve" : 0, "color" : "f1cc7b", "x" : 118 },
		{ "v0" : 193, "v1" : 194, "curve" : 0, "color" : "f1cc7b", "y" : -212 },
		{ "v0" : 194, "v1" : 195, "curve" : 0, "color" : "f1cc7b", "x" : 130 },
		{ "v0" : 195, "v1" : 192, "curve" : 0, "color" : "f1cc7b", "y" : -237 },
		{ "v0" : 196, "v1" : 197, "curve" : 0, "color" : "f1cc7b", "x" : 140 },
		{ "v0" : 197, "v1" : 198, "curve" : 0, "color" : "f1cc7b" },
		{ "v0" : 198, "v1" : 199, "curve" : 0, "color" : "f1cc7b", "x" : 152 },
		{ "v0" : 200, "v1" : 201, "curve" : -210.20993926461884, "color" : "f1cc7b" },
		{ "v0" : 201, "v1" : 202, "curve" : 141.85752234867013, "color" : "f1cc7b" },
		{ "v0" : 202, "v1" : 203, "curve" : 170.7328685934713, "color" : "f1cc7b" }

	],

	"goals" : [
		

	],

	"discs" : [
		{ "radius" : 2, "invMass" : 1.5, "pos" : [-555,-555.5984 ], "color" : "FFFFFF", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ], "damping" : 0.99 },
		{ "radius" : 9, "pos" : [-58.49839743589746,17.91261131171658 ], "color" : "42804f", "bCoef" : 0, "cMask" : ["wall","red" ] },
		{ "radius" : 9, "pos" : [-58.49839743589746,13.16902156812683 ], "color" : "f6b900", "bCoef" : 0, "cMask" : ["wall","red" ] },
		{ "radius" : 9, "pos" : [-58.49839743589746,7.9126113117165815 ], "color" : "42804f", "bCoef" : 0, "cMask" : ["wall","red" ] },
		{ "radius" : 14.3, "pos" : [-58.49839743589746,-3.83097843187317 ], "color" : "f6b900", "bCoef" : 0, "cMask" : ["wall","red" ] }

	],

	"joints" : [
		{ "d0" : 1, "d1" : 2, "color" : "transparent", "length" : 2 },
		{ "d0" : 1, "d1" : 2, "color" : "transparent", "length" : 2 },
		{ "d0" : 2, "d1" : 3, "color" : "transparent", "length" : 2 },
		{ "d0" : 2, "d1" : 3, "color" : "transparent", "length" : 2 },
		{ "d0" : 3, "d1" : 4, "color" : "transparent", "length" : 4 },
		{ "d0" : 3, "d1" : 4, "color" : "transparent", "length" : 4 }

	],

	"planes" : [
		

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"radius" : 15,
		"acceleration" : 0.3,
		"invMass" : 1,
		"damping" : 0.9,
		"kickingAcceleration" : 0.3,
		"kickStrength" : 5,
		"kickback" : 0,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0.14
		],
		"kickingDamping" : 0.96,
		"bCoef" : 0.5

	},

	"cameraWidth" : 0,

	"cameraHeight" : 0,

	"maxViewWidth" : 0,

	"cameraFollow" : "ball",

	"canBeStored" : true,

	"kickOffReset" : "partial",

	"ballPhysics" : "disc0"
}`;
	RSRMap = false;
isAFKpaused = true;
	return CampeonesMap;
}


function getFutx2Map() {
	var Futx2Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯² 🏆 𝗚𝗟𝗛",

	"width" : 420,

	"height" : 230,

	"spawnDistance" : 180,

	"redSpawnPoints" : [
		[ -150, 0
		],
		[ -150, 0
		],
		[ -150, 0
		],
		[ -150, 0
		],
		[ -150, 0
		],
		[ -150, 0
		],
		[ -120, -205
		]

	],

	"blueSpawnPoints" : [
		[ 150, 0
		],
		[ 150, 0
		],
		[ 150, 0
		],
		[ 150, 0
		],
		[ 150, 0
		],
		[ 150, 0
		],
		[ 120, -205
		]

	],

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "2a3a40" },

	"vertexes" : [
		/* 0 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		
		/* 1 */ { "x" : 0, "y" : -65, "trait" : "line", "color" : "b3b6b6" },
		
		/* 2 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 3 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 4 */ { "x" : 0, "y" : 230, "trait" : "kickOffBarrier" },
		/* 5 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier", "color" : "00ff00" },
		/* 6 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier", "color" : "00ff00" },
		/* 7 */ { "x" : 0, "y" : -230, "trait" : "kickOffBarrier" },
		
		/* 8 */ { "x" : -368.53340356886, "y" : -64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "bias" : 12 },
		/* 9 */ { "x" : -400, "y" : -64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "bias" : 12 },
		/* 10 */ { "x" : -400, "y" : 64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "bias" : 12 },
		/* 11 */ { "x" : -368.53340356886, "y" : 64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "bias" : 12 },
		/* 12 */ { "x" : 368.09926357786, "y" : 64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "bias" : 12 },
		/* 13 */ { "x" : 400, "y" : 64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "bias" : 12 },
		/* 14 */ { "x" : 400, "y" : -64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "bias" : 12 },
		/* 15 */ { "x" : 368.9681846993, "y" : -64, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "bias" : 12 },
		
		/* 16 */ { "x" : -368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : -90 },
		/* 17 */ { "x" : -260.90035258157, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 18 */ { "x" : -368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 19 */ { "x" : -358.5379338963, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 20 */ { "x" : -368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 90 },
		/* 21 */ { "x" : -260.90035258157, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 22 */ { "x" : -368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 23 */ { "x" : -358.5379338963, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 24 */ { "x" : 368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 25 */ { "x" : 358.36266315432, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 26 */ { "x" : 368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 27 */ { "x" : 358.36266315432, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 28 */ { "x" : 368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 29 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 30 */ { "x" : 368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 31 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 32 */ { "x" : -250.86909422732, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 33 */ { "x" : -250.86909422732, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 34 */ { "x" : -250.86909422732, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 35 */ { "x" : -250.86909422732, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 36 */ { "x" : -250.86909422732, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 37 */ { "x" : -250.86909422732, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 38 */ { "x" : -250.86909422732, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 39 */ { "x" : -250.86909422732, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 40 */ { "x" : 250.69382348534, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 41 */ { "x" : 250.69382348534, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 42 */ { "x" : 250.69382348534, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 43 */ { "x" : 250.69382348534, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 44 */ { "x" : 250.69382348534, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 45 */ { "x" : 250.69382348534, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 46 */ { "x" : 250.69382348534, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 47 */ { "x" : 250.69382348534, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 48 */ { "x" : -185.66591492467, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 49 */ { "x" : -185.66591492467, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 50 */ { "x" : -185.66591492467, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 51 */ { "x" : -185.66591492467, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 52 */ { "x" : -185.66591492467, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 53 */ { "x" : -185.66591492467, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 54 */ { "x" : -185.66591492467, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 55 */ { "x" : -185.66591492467, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 56 */ { "x" : 185.49064418269, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 57 */ { "x" : 185.49064418269, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 58 */ { "x" : 185.49064418269, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 59 */ { "x" : 185.49064418269, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 60 */ { "x" : 185.49064418269, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 61 */ { "x" : 185.49064418269, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 62 */ { "x" : 185.49064418269, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 63 */ { "x" : 185.49064418269, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 64 */ { "x" : -160.58776903904, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 65 */ { "x" : -160.58776903904, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 66 */ { "x" : -80.337702205015, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 67 */ { "x" : -80.337702205015, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 68 */ { "x" : 160.41249829706, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 69 */ { "x" : 160.41249829706, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 70 */ { "x" : 80.162431463036, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 71 */ { "x" : 80.162431463036, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 72 */ { "x" : -254.88159756902, "y" : -171, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 73 */ { "x" : -254.88159756902, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 74 */ { "x" : -371.91294503531, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 75 */ { "x" : -384.61920561736, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 76 */ { "x" : 371.73767429333, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 77 */ { "x" : 384.44393487538, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 78 */ { "x" : -371.91294503531, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 79 */ { "x" : -384.61920561736, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 80 */ { "x" : 371.73767429333, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 81 */ { "x" : 384.44393487538, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 82 */ { "x" : -254.88159756902, "y" : 171, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 83 */ { "x" : -254.88159756902, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 84 */ { "x" : 254.70632682704, "y" : -171, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 85 */ { "x" : 254.70632682704, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 86 */ { "x" : 254.70632682704, "y" : 171, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 87 */ { "x" : 254.70632682704, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		
		/* 88 */ { "x" : -368, "y" : 171, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 89 */ { "x" : 368, "y" : 171, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 90 */ { "x" : 368, "y" : 64, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 91 */ { "x" : 368, "y" : -64, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 92 */ { "x" : 368, "y" : -171, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 93 */ { "x" : -368, "y" : -171, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 94 */ { "x" : -368, "y" : -64, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "b3b6b6", "bias" : 12 },
		/* 95 */ { "x" : -368, "y" : 64, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "vis" : true, "bias" : -12 },
		
		/* 96 */ { "x" : -368, "y" : 64, "bCoef" : 0, "trait" : "line" },
		/* 97 */ { "x" : -368, "y" : -64, "bCoef" : 0, "trait" : "line" },
		/* 98 */ { "x" : 368, "y" : 64, "bCoef" : 0, "trait" : "line" },
		/* 99 */ { "x" : 368, "y" : -64, "bCoef" : 0, "trait" : "line" },
		/* 100 */ { "x" : 0, "y" : 65, "bCoef" : 0, "trait" : "line" },
		/* 101 */ { "x" : 0, "y" : 171, "bCoef" : 0, "trait" : "line" },
		/* 102 */ { "x" : 0, "y" : -171, "bCoef" : 0, "trait" : "line" },
		/* 103 */ { "x" : 0, "y" : -65, "bCoef" : 0, "trait" : "line" },
		/* 104 */ { "x" : 0, "y" : -65, "bCoef" : 0, "trait" : "line" },
		/* 105 */ { "x" : 0, "y" : 65, "bCoef" : 0, "trait" : "line" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "curve" : 180, "color" : "b3b6b6", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 0, "v1" : 1, "curve" : -180, "color" : "b3b6b6", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 1, "v1" : 0, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 3, "v1" : 2, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		{ "v0" : 6, "v1" : 7, "trait" : "kickOffBarrier" },
		
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "pos" : [-700,-80 ], "y" : -64 },
		{ "v0" : 9, "v1" : 10, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "x" : -400 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "pos" : [-700,80 ], "y" : 64 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "pos" : [-700,-80 ], "y" : 64 },
		{ "v0" : 13, "v1" : 14, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "x" : -590 },
		{ "v0" : 14, "v1" : 15, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "bias" : 12, "pos" : [-700,80 ], "y" : -64 },
		
		{ "v0" : 16, "v1" : 17, "curve" : 94.0263701017, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 19, "v1" : 18, "curve" : 86.632306418889, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 20, "v1" : 21, "curve" : -94.026370101699, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 17, "v1" : 21, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 23, "v1" : 22, "curve" : -86.632306418888, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 25, "v1" : 24, "curve" : 86.632306418884, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 27, "v1" : 26, "curve" : -86.632306418899, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 28, "v1" : 29, "curve" : -94.026370101699, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 30, "v1" : 31, "curve" : 94.026370101699, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 33, "v1" : 32, "curve" : -180.00692920292, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 32, "v1" : 33, "curve" : -180.00218240614, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 35, "v1" : 34, "curve" : -179.64823645332, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 34, "v1" : 35, "curve" : -180.35758668147, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 37, "v1" : 36, "curve" : -180.02357323962, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 36, "v1" : 37, "curve" : -180.00924102399, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 39, "v1" : 38, "curve" : -180.06885755885, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 38, "v1" : 39, "curve" : -180.02948353257, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 41, "v1" : 40, "curve" : -179.99869069543, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 40, "v1" : 41, "curve" : -179.99939258776, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 43, "v1" : 42, "curve" : -180.08826047163, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 42, "v1" : 43, "curve" : -179.91186753664, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 45, "v1" : 44, "curve" : -179.99528711105, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 44, "v1" : 45, "curve" : -179.99743836358, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 47, "v1" : 46, "curve" : -179.98626041101, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 46, "v1" : 47, "curve" : -179.99175181595, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 49, "v1" : 48, "curve" : -180.04715562398, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 48, "v1" : 49, "curve" : -179.95294709391, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 51, "v1" : 50, "curve" : -179.95715750564, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 50, "v1" : 51, "curve" : -179.89943871875, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 53, "v1" : 52, "curve" : -179.94773754738, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 52, "v1" : 53, "curve" : -179.98221351296, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 55, "v1" : 54, "curve" : -180.4151727218, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 54, "v1" : 55, "curve" : -179.58764458796, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 57, "v1" : 56, "curve" : -180.00086646359, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 56, "v1" : 57, "curve" : -180.01965986376, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 59, "v1" : 58, "curve" : -180.03532601389, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 58, "v1" : 59, "curve" : -179.99380079, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 61, "v1" : 60, "curve" : -180.0044468452, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 60, "v1" : 61, "curve" : -180.01386779847, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 63, "v1" : 62, "curve" : -180.05158287563, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 62, "v1" : 63, "curve" : -180.01212223878, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 66, "v1" : 67, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 68, "v1" : 69, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 70, "v1" : 71, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 72, "v1" : 73, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 74, "v1" : 75, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 76, "v1" : 77, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 78, "v1" : 79, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 80, "v1" : 81, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 82, "v1" : 83, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 84, "v1" : 85, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 31, "v1" : 29, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		
		{ "v0" : 88, "v1" : 89, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "y" : 171 },
		{ "v0" : 89, "v1" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "x" : 368 },
		{ "v0" : 91, "v1" : 92, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "x" : 368 },
		{ "v0" : 92, "v1" : 93, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "y" : -171 },
		{ "v0" : 93, "v1" : 94, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12, "x" : -368 },
		{ "v0" : 88, "v1" : 95, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : -12, "x" : -368 },
		
		{ "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : -368 },
		{ "v0" : 98, "v1" : 99, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : 368 },
		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : 0 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : 0 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line", "x" : 0 }

	],

	"goals" : [
		{ "p0" : [-376.95,-62.053454903872 ], "p1" : [-376.95,64.043361696331 ], "team" : "red" },
		{ "p0" : [376.95,62 ], "p1" : [376.95,-62 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6.4, "invMass" : 1.5, "pos" : [0,0 ], "color" : "FFFFFF", "bCoef" : 0.4, "cGroup" : ["ball","kick","score" ], "damping" : 0.99 },
            ${JSON.stringify(obtenerDiscos()).slice(1, -1)},

		{ "radius" : 3.9405255187564, "pos" : [-368,64 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 3.9405255187564, "pos" : [-368,-64 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -80, "x" : -560 },
		{ "radius" : 3.9405255187564, "pos" : [368,-64 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 3.9405255187564, "pos" : [368,64 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -80, "x" : -560 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-368,-171 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-368,171 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [368,171 ], "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [368,-171 ], "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -171, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -171, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -230, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [0,-1 ], "dist" : -230, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },
		"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }

	},

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5,
		"bCoef" : 0

	},

	"ballPhysics" : "disc0",

"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]
}`;
	RSRMap = false;
	return Futx2Map;
}

function getFutx3Map() {
	var Futx3Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯³ 🏆 𝗚𝗟𝗛",

	"width" : 620,

	"height" : 300,

	"spawnDistance" : 350,

	"redSpawnPoints" : [
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -250, 0
		],
		[ -180, 275
		]

	],

	"blueSpawnPoints" : [
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 250, 0
		],
		[ 180, 275
		]

	],

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "2a3a40" },

	"vertexes" : [
		/* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea" },
		/* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea" },
		
		/* 2 */ { "x" : 0, "y" : 300, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -300, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "x" : -550, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 7 */ { "x" : -590, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 8 */ { "x" : -590, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 9 */ { "x" : -550, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 10 */ { "x" : 550, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 590, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 590, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 550, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		
		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,80 ] },
		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,-80 ] },
		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "_selected" : "segment" },
		/* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "_selected" : "segment" },
		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "color" : "b3b6b6" },
		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		
		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		
		/* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },
		/* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },
		/* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		
		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 52 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : -90 },
		/* 53 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 54 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 55 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 56 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 90 },
		/* 57 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 58 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 59 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 60 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 61 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 62 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 63 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 64 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 65 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 66 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 67 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 68 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 69 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 70 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 71 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 72 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 73 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 74 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 75 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 76 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 77 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 78 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 79 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 80 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 81 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 82 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 83 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 84 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 85 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 86 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 87 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 88 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 89 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 90 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 91 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 92 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 93 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 94 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 95 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 96 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 97 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 98 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 99 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 100 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 101 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 102 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 103 */ { "x" : -240, "y" : 224, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 104 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 105 */ { "x" : -120, "y" : 224, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 106 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 107 */ { "x" : 240, "y" : 224, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 108 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 109 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 110 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 111 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 112 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 113 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 114 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 115 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 116 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 117 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 118 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 119 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 120 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 121 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 122 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 123 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 124 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 125 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 126 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		
		/* 127 */ { "x" : 553, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 128 */ { "x" : 553, "y" : -80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ], "vis" : false },
		/* 129 */ { "x" : 553, "y" : 80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "vis" : false },
		/* 130 */ { "x" : 553, "y" : 240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 131 */ { "x" : -553, "y" : 80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ], "vis" : false },
		/* 132 */ { "x" : -553, "y" : 240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 133 */ { "x" : -553, "y" : -80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : false },
		/* 134 */ { "x" : -553, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -590 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : 590 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 },
		
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240, "_selected" : true },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },
		
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -550 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 550 },
		{ "v0" : 52, "v1" : 53, "curve" : -90, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 55, "v1" : 54, "curve" : -90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : 90, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 53, "v1" : 57, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 59, "v1" : 58, "curve" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 62, "v1" : 61, "curve" : -90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 64, "v1" : 63, "curve" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 90, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : -90, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 72, "v1" : 71, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 71, "v1" : 72, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 74, "v1" : 73, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 73, "v1" : 74, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 76, "v1" : 75, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 75, "v1" : 76, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 78, "v1" : 77, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 77, "v1" : 78, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 80, "v1" : 79, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 79, "v1" : 80, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 82, "v1" : 81, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 81, "v1" : 82, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 84, "v1" : 83, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 83, "v1" : 84, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 86, "v1" : 85, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 85, "v1" : 86, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 88, "v1" : 87, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 87, "v1" : 88, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 90, "v1" : 89, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 89, "v1" : 90, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 92, "v1" : 91, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 94, "v1" : 93, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 93, "v1" : 94, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 96, "v1" : 95, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 95, "v1" : 96, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 98, "v1" : 97, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 97, "v1" : 98, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 100, "v1" : 99, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 109, "v1" : 110, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 111, "v1" : 112, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 121, "v1" : 122, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		
		{ "v0" : 127, "v1" : 128, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 131, "v1" : 132, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 },
		{ "v0" : 133, "v1" : 134, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 }

	],

	"goals" : [
		{ "p0" : [-558.95,-80 ], "p1" : [-558.95,80 ], "team" : "red" },
		{ "p0" : [558.95,80 ], "p1" : [558.95,-80 ], "team" : "blue" }

	],

	"discs" : [
		{"radius":6.4,"color":"${PelotaFutsal}","bCoef":0.4,"invMass":1.5,"damping":0.99,"cGroup":["ball","kick","score"]},
            ${JSON.stringify(obtenerDiscos()).slice(1, -1)},

		{ "radius" : 5, "pos" : [-550,80 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [-550,-80 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -80, "x" : -560 },
		{ "radius" : 5, "pos" : [550,80 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [550,-80 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -80 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -300, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -300, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

"ballPhysics":"disc0",

"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]

}`;
	RSRMap = false;
	return Futx3Map;
}

function getFutx4Map() {
	var Futx4Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁴ 🏆 𝗚𝗟𝗛",

	"width" : 765,

	"height" : 380,

	"spawnDistance" : 350,

	"redSpawnPoints" : [
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -305, 0
		],
		[ -229, 350
		]

	],

	"blueSpawnPoints" : [
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 305, 0
		],
		[ 229, 350
		]

	],

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "2a3a40" },

	"vertexes" : [
		/* 0 */ { "x" : 700.1148409130134, "y" : 319.8124743008296, "trait" : "ballArea" },
		/* 1 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "trait" : "ballArea" },
		
		/* 2 */ { "x" : 0, "y" : 380, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 106.60415810027654, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -106.60415810027654, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -380, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "x" : -700.1148409130134, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 7 */ { "x" : -740, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 8 */ { "x" : -740, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 9 */ { "x" : -700.1148409130134, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 10 */ { "x" : 700.1148409130134, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 740, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 740, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 700.1148409130134, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		
		/* 14 */ { "x" : -700.1148409130134, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,80 ] },
		/* 15 */ { "x" : -700.1148409130134, "y" : 319.8124743008296, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 16 */ { "x" : -700.1148409130134, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,-80 ] },
		/* 17 */ { "x" : -700.1148409130134, "y" : -319.8124743008296, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 18 */ { "x" : -700.1148409130134, "y" : 319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 19 */ { "x" : 700.1148409130134, "y" : 319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 20 */ { "x" : 700.1148409130134, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "color" : "b3b6b6" },
		/* 21 */ { "x" : 700.1148409130134, "y" : 319.8124743008296, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 22 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 23 */ { "x" : 700.1148409130134, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -700.1148409130134, "y" : -319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 27 */ { "x" : 700.1148409130134, "y" : -319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		
		/* 28 */ { "x" : 0, "y" : -319.8124743008296, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 29 */ { "x" : 0, "y" : -106.60415810027654, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 30 */ { "x" : 0, "y" : 106.60415810027654, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 31 */ { "x" : 0, "y" : 319.8124743008296, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 32 */ { "x" : 0, "y" : -106.60415810027654, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 33 */ { "x" : 0, "y" : 106.60415810027654, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 34 */ { "x" : 0, "y" : 106.60415810027654, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -106.60415810027654, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 106.60415810027654, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -106.60415810027654, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		
		/* 38 */ { "x" : -709.661861470918, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },
		/* 39 */ { "x" : -709.661861470918, "y" : 319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -709.661861470918, "y" : -319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -709.661861470918, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },
		/* 42 */ { "x" : 709.661861470918, "y" : -319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 709.661861470918, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 709.661861470918, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 709.661861470918, "y" : 319.8124743008296, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		
		/* 46 */ { "x" : 0, "y" : -106.60415810027654, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 47 */ { "x" : 0, "y" : 106.60415810027654, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : -700.1148409130134, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 49 */ { "x" : -700.1148409130134, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 50 */ { "x" : 700.1148409130134, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 51 */ { "x" : 700.1148409130134, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 52 */ { "x" : -700.1148409130134, "y" : 266.5103952506913, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : -90 },
		/* 53 */ { "x" : -496.4450690110458, "y" : 93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 54 */ { "x" : -700.1148409130134, "y" : 301.1567466332812, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 55 */ { "x" : -682.2937358715913, "y" : 319.8124743008296, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 56 */ { "x" : -700.1148409130134, "y" : -266.5103952506913, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 90 },
		/* 57 */ { "x" : -496.4450690110458, "y" : -93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 58 */ { "x" : -700.1148409130134, "y" : -301.1567466332812, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 59 */ { "x" : -682.2937358715913, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 60 */ { "x" : -484.9886443415601, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "00ff00" },
		/* 61 */ { "x" : 700.1148409130134, "y" : -301.1567466332812, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 62 */ { "x" : 682.2937358715913, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 63 */ { "x" : 700.1148409130134, "y" : 301.1567466332812, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 64 */ { "x" : 682.2937358715913, "y" : 319.8124743008296, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 65 */ { "x" : 700.1148409130134, "y" : 266.5103952506913, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 66 */ { "x" : 496.4450690110458, "y" : 93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 67 */ { "x" : 700.1148409130134, "y" : -266.5103952506913, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 68 */ { "x" : 496.4450690110458, "y" : -93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 69 */ { "x" : 496.4450690110458, "y" : 93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 70 */ { "x" : 496.4450690110458, "y" : -93.27863833774197, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 71 */ { "x" : -477.3510278952363, "y" : 1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 72 */ { "x" : -477.3510278952363, "y" : -1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 73 */ { "x" : -477.3510278952363, "y" : 3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 74 */ { "x" : -477.3510278952363, "y" : -3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 75 */ { "x" : -477.3510278952363, "y" : -2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 76 */ { "x" : -477.3510278952363, "y" : 2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 77 */ { "x" : -477.3510278952363, "y" : -4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 78 */ { "x" : -477.3510278952363, "y" : 4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 79 */ { "x" : 477.3510278952363, "y" : 1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 80 */ { "x" : 477.3510278952363, "y" : -1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 81 */ { "x" : 477.3510278952363, "y" : 3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 82 */ { "x" : 477.3510278952363, "y" : -3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 83 */ { "x" : 477.3510278952363, "y" : -2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 84 */ { "x" : 477.3510278952363, "y" : 2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 85 */ { "x" : 477.3510278952363, "y" : -4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 86 */ { "x" : 477.3510278952363, "y" : 4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 87 */ { "x" : -353.23976064247483, "y" : 1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 88 */ { "x" : -353.23976064247483, "y" : -1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 89 */ { "x" : -353.23976064247483, "y" : 3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 90 */ { "x" : -353.23976064247483, "y" : -3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 91 */ { "x" : -353.23976064247483, "y" : -2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 92 */ { "x" : -353.23976064247483, "y" : 2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 93 */ { "x" : -353.23976064247483, "y" : -4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 94 */ { "x" : -353.23976064247483, "y" : 4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 95 */ { "x" : 353.23976064247483, "y" : 1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 96 */ { "x" : 353.23976064247483, "y" : -1.3325519762534568, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 97 */ { "x" : 353.23976064247483, "y" : 3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 98 */ { "x" : 353.23976064247483, "y" : -3.99765592876037, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 99 */ { "x" : 353.23976064247483, "y" : -2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 100 */ { "x" : 353.23976064247483, "y" : 2.6651039525069136, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 101 */ { "x" : 353.23976064247483, "y" : -4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 102 */ { "x" : 353.23976064247483, "y" : 4.663931916887098, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 103 */ { "x" : -305.5046578529513, "y" : 298.49164268077425, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 104 */ { "x" : -305.5046578529513, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 105 */ { "x" : -152.75232892647566, "y" : 298.49164268077425, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 106 */ { "x" : -152.75232892647566, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 107 */ { "x" : 305.5046578529513, "y" : 298.49164268077425, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 108 */ { "x" : 305.5046578529513, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 109 */ { "x" : 152.75232892647566, "y" : 298.49164268077425, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 110 */ { "x" : 152.75232892647566, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 111 */ { "x" : -484.9886443415601, "y" : 319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 112 */ { "x" : -484.9886443415601, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 113 */ { "x" : -707.7524573593371, "y" : 163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 114 */ { "x" : -731.9382427726956, "y" : 163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 115 */ { "x" : 707.7524573593371, "y" : 163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 116 */ { "x" : 731.9382427726956, "y" : 163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 117 */ { "x" : -707.7524573593371, "y" : -163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 118 */ { "x" : -731.9382427726956, "y" : -163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 119 */ { "x" : 707.7524573593371, "y" : -163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 120 */ { "x" : 731.9382427726956, "y" : -163.9038930791752, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 121 */ { "x" : -484.9886443415601, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 122 */ { "x" : -484.9886443415601, "y" : -341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 123 */ { "x" : 484.9886443415601, "y" : 319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 124 */ { "x" : 484.9886443415601, "y" : 341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 125 */ { "x" : 484.9886443415601, "y" : -319.8124743008296, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 126 */ { "x" : 484.9886443415601, "y" : -341.13330592088494, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		
		/* 127 */ { "x" : 703.9336491361752, "y" : -319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 128 */ { "x" : 703.9336491361752, "y" : -90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ], "vis" : false },
		/* 129 */ { "x" : 703.9336491361752, "y" : 90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "vis" : false },
		/* 130 */ { "x" : 703.9336491361752, "y" : 319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 131 */ { "x" : -703.9336491361752, "y" : 90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ], "vis" : false },
		/* 132 */ { "x" : -703.9336491361752, "y" : 319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 133 */ { "x" : -703.9336491361752, "y" : -90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : false },
		/* 134 */ { "x" : -703.9336491361752, "y" : -319.8124743008296, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -90 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -740 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 90 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -90 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : 740 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 90 },
		
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },
		
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -550 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 550 },
		{ "v0" : 52, "v1" : 53, "curve" : -93.12709821006908, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 55, "v1" : 54, "curve" : -87.37849984133219, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : 93.12709821006924, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 53, "v1" : 57, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 59, "v1" : 58, "curve" : 87.37849984134841, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 62, "v1" : 61, "curve" : -87.37849984133219, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 64, "v1" : 63, "curve" : 87.37849984134841, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 93.12709821006924, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : -93.12709821006919, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 72, "v1" : 71, "curve" : 180.1633721223104, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 71, "v1" : 72, "curve" : 179.83708930112383, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 74, "v1" : 73, "curve" : 179.99999999999838, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 73, "v1" : 74, "curve" : 180.00000000000165, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 76, "v1" : 75, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 75, "v1" : 76, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 78, "v1" : 77, "curve" : 180.5779697461612, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 77, "v1" : 78, "curve" : 179.42750016761278, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 80, "v1" : 79, "curve" : 179.83540351837757, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 79, "v1" : 80, "curve" : 180.1642154442635, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 82, "v1" : 81, "curve" : 180.00000000000165, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 81, "v1" : 82, "curve" : 179.99999999999835, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 84, "v1" : 83, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 83, "v1" : 84, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 86, "v1" : 85, "curve" : 179.4464958872327, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 85, "v1" : 86, "curve" : 180.55861544418315, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 88, "v1" : 87, "curve" : 180.1633721223104, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 87, "v1" : 88, "curve" : 179.83708930112874, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 90, "v1" : 89, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 89, "v1" : 90, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 92, "v1" : 91, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 94, "v1" : 93, "curve" : 179.4244807844529, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 93, "v1" : 94, "curve" : 180.56082341999925, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 96, "v1" : 95, "curve" : 179.83540351838244, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 95, "v1" : 96, "curve" : 180.16421544425376, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 98, "v1" : 97, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 97, "v1" : 98, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 100, "v1" : 99, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180.5921396617552, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 179.42448078445292, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 109, "v1" : 110, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 111, "v1" : 112, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 121, "v1" : 122, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		
		{ "v0" : 127, "v1" : 128, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 131, "v1" : 132, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 },
		{ "v0" : 133, "v1" : 134, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 }

	],

	"goals" : [
		{ "p0" : [-709.064840913,-90 ], "p1" : [-709.064840913,90 ], "team" : "red" },
		{ "p0" : [709.064840913,90 ], "p1" : [709.064840913,-90 ], "team" : "blue" }

	],

	"discs" : [
		{"radius":6.4,"color":"${PelotaFutsal}","bCoef":0.4,"invMass":1.5,"damping":0.99,"cGroup":["ball","kick","score"]},
            ${JSON.stringify(obtenerDiscos()).slice(1, -1)},

		{ "radius" : 5, "pos" : [-700.1148409130134,90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 90 },
		{ "radius" : 5, "pos" : [-700.1148409130134,-90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -90, "x" : -560 },
		{ "radius" : 5, "pos" : [700.1148409130134,90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 90 },
		{ "radius" : 5, "pos" : [700.1148409130134,-90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -90 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-700.1148409130134,319.8124743008296 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-700.1148409130134,-319.8124743008296 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [700.1148409130134,-319.8124743008296 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [700.1148409130134,319.8124743008296 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -319.8124743008296, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -319.8124743008296, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -380, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -380, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -789.2203661201241, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -789.2203661201241, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -789.2203661201241, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -789.2203661201241, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

"ballPhysics":"disc0",

"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]

}`;
	RSRMap = false;
	return Futx4Map;
}



function getFutx7Map() {
	var Futx7Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁷ 🏆 𝗚𝗟𝗛",

	"width" : 1275,

	"height" : 675,

	"spawnDistance" : 350,

	"redSpawnPoints" : [
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -500, 0
		],
		[ -396, 635
		]

	],

	"blueSpawnPoints" : [
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 500, 0
		],
		[ 396, 635
		]

	],

	"bg" : { "type" : "grass", "width" : 0, "height" : 0, "kickOffRadius" : 180, "cornerRadius" : 0, "color" : "2a3a40" },

	"vertexes" : [
		/* 0 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 1 */ { "x" : -1200, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 2 */ { "x" : -1250, "y" : -110, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 3 */ { "x" : -1250, "y" : 110, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "radius" : 7, "bias" : 12 },
		/* 4 */ { "x" : -1200, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 5 */ { "x" : 1200, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : -12 },
		/* 6 */ { "x" : 1250, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 7 */ { "x" : 1250, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : 12 },
		/* 8 */ { "x" : 1200, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "ffffff", "bias" : -12 },
		
		/* 9 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 10 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 11 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 12 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 13 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 14 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 15 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 16 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 17 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 18 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 19 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 20 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 21 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 22 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 23 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 24 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 26 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 27 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 28 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6", "bias" : 12 },
		/* 29 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 30 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : -12 },
		/* 31 */ { "x" : -1200, "y" : 110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 32 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 33 */ { "x" : -1200, "y" : 110, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 34 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "bias" : -12 },
		/* 35 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 36 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "bias" : 12 },
		/* 37 */ { "x" : 1200, "y" : -110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 38 */ { "x" : 1200, "y" : -110, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		
		/* 39 */ { "x" : 1200, "y" : -110, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 40 */ { "x" : 1200, "y" : 110, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 41 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "b3b6b6" },
		/* 42 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "b3b6b6" },
		/* 43 */ { "x" : -525.1982581967213, "y" : 584, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 44 */ { "x" : -525.1982581967213, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 45 */ { "x" : -267.4933401639344, "y" : 584, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 46 */ { "x" : -267.4933401639344, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 47 */ { "x" : 505.62141393442624, "y" : 584, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : 505.62141393442624, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 49 */ { "x" : 247.91649590163934, "y" : 584, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 50 */ { "x" : 247.91649590163934, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 51 */ { "x" : -828.0015368852459, "y" : 600, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 52 */ { "x" : -828.0015368852459, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 53 */ { "x" : 1220.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 54 */ { "x" : 1201.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 55 */ { "x" : 1219.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 56 */ { "x" : 1200.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 57 */ { "x" : -841.1245088945966, "y" : -601, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 58 */ { "x" : -841.1245088945966, "y" : -617, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 59 */ { "x" : 808.4246926229508, "y" : 600, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 60 */ { "x" : 808.4246926229508, "y" : 616, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 61 */ { "x" : 837.7690984113394, "y" : -601, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 62 */ { "x" : 837.7690984113394, "y" : -617, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 63 */ { "x" : -1220.0747488827305, "y" : -251.82895884262769, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 64 */ { "x" : -1201.0752587242073, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 65 */ { "x" : -1218.9226063416277, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 66 */ { "x" : -1199.9231161831044, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 67 */ { "x" : -1200, "y" : 570.456511053482, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 68 */ { "x" : -1171.6369452864983, "y" : 600, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 69 */ { "x" : -1200, "y" : -569.6420271253103, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 70 */ { "x" : -1170.6369452864983, "y" : -600, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 71 */ { "x" : 1200, "y" : -571.0124590189979, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 72 */ { "x" : 1170.319141439366, "y" : -600, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 73 */ { "x" : 1200, "y" : 569.9997004222528, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 74 */ { "x" : 1171.319141439366, "y" : 600, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 75 */ { "x" : -787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ff6363" },
		/* 76 */ { "x" : -787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901, "color" : "ff6363" },
		/* 77 */ { "x" : -787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "ff6363" },
		/* 78 */ { "x" : -1075, "y" : -470, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "ff6363" },
		/* 79 */ { "x" : -787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90, "color" : "ff6363" },
		/* 80 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 81 */ { "x" : -787, "y" : 0.1561968168675687, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 82 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 83 */ { "x" : -787, "y" : 4.614580423494619, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 84 */ { "x" : -787, "y" : 2.3853886201811116, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 85 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 86 */ { "x" : -787, "y" : 5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 87 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "ff6363" },
		/* 88 */ { "x" : -610, "y" : -1.1475001518364962, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 89 */ { "x" : -610, "y" : 2.077131467790089, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 90 */ { "x" : -610, "y" : -4.372131771463081, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 91 */ { "x" : -610, "y" : 5.301763087416674, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 92 */ { "x" : -610, "y" : 3.6894472776033993, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 93 */ { "x" : -610, "y" : -2.759815961649778, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 94 */ { "x" : -610, "y" : 6.107920992323329, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 95 */ { "x" : -610, "y" : -5.178289676369722, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 96 */ { "x" : -610, "y" : -299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 97 */ { "x" : -610, "y" : -296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 98 */ { "x" : -610, "y" : 296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 99 */ { "x" : -610, "y" : 299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		
		/* 100 */ { "x" : -1252, "y" : -110, "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "vis" : false, "curve" : 0, "color" : "e0d5d6", "bias" : 12 },
		/* 101 */ { "x" : -1252, "y" : 110, "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "vis" : false, "curve" : 0, "color" : "e0d5d6", "bias" : 12 },
		/* 102 */ { "x" : 1252, "y" : -110, "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "vis" : false, "curve" : 0, "color" : "ffffff" },
		/* 103 */ { "x" : 1252, "y" : 110, "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "vis" : false, "curve" : 0, "color" : "ffffff" },
		
		/* 104 */ { "x" : -1200, "y" : 110, "bCoef" : 0, "trait" : "line", "color" : "ff3030" },
		/* 105 */ { "x" : -1200, "y" : -110, "bCoef" : 0, "trait" : "line", "color" : "ff3030" },
		/* 106 */ { "x" : -1200, "y" : 110, "bCoef" : 1, "trait" : "line", "color" : "ffffff", "bias" : -12 },
		/* 107 */ { "x" : -1200, "y" : 75, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 108 */ { "x" : -1200, "y" : 39, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 109 */ { "x" : -1200, "y" : 12, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 110 */ { "x" : -1200, "y" : -75, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 111 */ { "x" : -1200, "y" : -110, "bCoef" : 1, "trait" : "line", "color" : "ffffff", "bias" : 12 },
		/* 112 */ { "x" : -1200, "y" : -15, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 113 */ { "x" : -1200, "y" : -42, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 114 */ { "x" : 1200, "y" : 110, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 115 */ { "x" : 1200, "y" : -110, "bCoef" : 0, "trait" : "line", "color" : "33b4ff" },
		/* 116 */ { "x" : 1200, "y" : 110, "bCoef" : 1, "trait" : "line", "color" : "ffffff", "bias" : 12 },
		/* 117 */ { "x" : 1200, "y" : 76, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 118 */ { "x" : 1200, "y" : 39, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 119 */ { "x" : 1200, "y" : 12, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 120 */ { "x" : 1200, "y" : -75, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 121 */ { "x" : 1200, "y" : -110, "bCoef" : 1, "trait" : "line", "color" : "ffffff", "bias" : -12 },
		/* 122 */ { "x" : 1200, "y" : -15, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 123 */ { "x" : 1200, "y" : -42, "bCoef" : 0, "trait" : "line", "color" : "ffffff" },
		/* 124 */ { "x" : -1200, "y" : -470, "bCoef" : 0, "trait" : "line", "curve" : 0, "color" : "ff6363" },
		/* 125 */ { "x" : -1075, "y" : 470, "bCoef" : 0, "trait" : "line", "curve" : 90, "color" : "ff6363" },
		/* 126 */ { "x" : -1200, "y" : 470, "bCoef" : 0, "trait" : "line", "color" : "ff6363" },
		/* 127 */ { "x" : 787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "4fbeff" },
		/* 128 */ { "x" : 1075, "y" : 470, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "4fbeff" },
		/* 129 */ { "x" : 787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "4fbeff" },
		/* 130 */ { "x" : 787, "y" : 5.145341211815264, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 131 */ { "x" : 787, "y" : -0.010663810350735048, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 132 */ { "x" : 787, "y" : 5.145207323606769, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 133 */ { "x" : 787, "y" : -4.468863459043746, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 134 */ { "x" : 787, "y" : -2.2397636346972547, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 135 */ { "x" : 787, "y" : 5.145274267711017, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 136 */ { "x" : 787, "y" : -4.854245235055558, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 137 */ { "x" : 787, "y" : 5.145173851554631, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "4fbeff" },
		/* 138 */ { "x" : 1200, "y" : 470, "bCoef" : 0, "trait" : "line", "curve" : 0, "color" : "4fbeff" },
		/* 139 */ { "x" : 1075, "y" : -470, "bCoef" : 0, "trait" : "line", "curve" : 90, "color" : "4fbeff" },
		/* 140 */ { "x" : 1200, "y" : -470, "bCoef" : 0, "trait" : "line", "color" : "4fbeff" },
		/* 141 */ { "x" : 610, "y" : -1.1475001518364962, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 142 */ { "x" : 610, "y" : 2.077131467790089, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 143 */ { "x" : 610, "y" : -4.372131771463081, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 144 */ { "x" : 610, "y" : 5.301763087416674, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 145 */ { "x" : 610, "y" : 3.6894472776033993, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 146 */ { "x" : 610, "y" : -2.759815961649778, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 147 */ { "x" : 610, "y" : 6.107920992323329, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 148 */ { "x" : 610, "y" : -5.178289676369722, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 149 */ { "x" : 610, "y" : -299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 150 */ { "x" : 610, "y" : -296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 151 */ { "x" : 610, "y" : 296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 152 */ { "x" : 610, "y" : 299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "b3b6b6" },
		/* 153 */ { "x" : 0, "y" : -180, "bCoef" : 0, "trait" : "line", "curve" : 0 },
		/* 154 */ { "x" : 0, "y" : 180, "bCoef" : 0, "trait" : "line", "curve" : 0 },
		
		/* 155 */ { "x" : 0, "y" : 180, "bCoef" : 0, "trait" : "kickOffBarrier" },
		/* 156 */ { "x" : 0, "y" : 600, "bCoef" : 0, "trait" : "kickOffBarrier" },
		/* 157 */ { "x" : 0, "y" : -180, "bCoef" : 0, "trait" : "kickOffBarrier" },
		/* 158 */ { "x" : 0, "y" : -600, "bCoef" : 0, "trait" : "kickOffBarrier" },
		/* 159 */ { "x" : 0, "y" : -180, "bCoef" : 0, "trait" : "kickOffBarrier", "curve" : 180 },
		/* 160 */ { "x" : 0, "y" : 180, "bCoef" : 0, "trait" : "kickOffBarrier", "curve" : 180 },
		/* 161 */ { "x" : 0, "y" : -180, "bCoef" : 0, "trait" : "kickOffBarrier", "curve" : 180 },
		/* 162 */ { "x" : 0, "y" : 180, "bCoef" : 0, "trait" : "kickOffBarrier", "curve" : 180 },
		/* 163 */ { "x" : 0, "y" : 600, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 164 */ { "x" : 0, "y" : 670, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 165 */ { "x" : 0, "y" : -670, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 166 */ { "x" : 0, "y" : -600, "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false }

	],

	"segments" : [
		{ "v0" : 1, "v1" : 2, "curve" : 0, "color" : "ffffff", "trait" : "goalNet", "bias" : 12, "y" : -110 },
		{ "v0" : 3, "v1" : 4, "curve" : 0, "color" : "ffffff", "trait" : "goalNet", "bias" : 12, "y" : 110 },
		{ "v0" : 5, "v1" : 6, "curve" : 0, "color" : "ffffff", "trait" : "goalNet", "bias" : -12, "y" : -110 },
		{ "v0" : 7, "v1" : 8, "curve" : 0, "color" : "ffffff", "trait" : "goalNet", "bias" : -12, "y" : 110 },
		
		{ "v0" : 11, "v1" : 12, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -600 },
		{ "v0" : 27, "v1" : 28, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 600 },
		
		{ "v0" : 39, "v1" : 40, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 41, "v1" : 42, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 43, "v1" : 44, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 45, "v1" : 46, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 47, "v1" : 48, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 49, "v1" : 50, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 51, "v1" : 52, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 53, "v1" : 54, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 55, "v1" : 56, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.9681483400014 },
		{ "v0" : 57, "v1" : 58, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 59, "v1" : 60, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 61, "v1" : 62, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 63, "v1" : 64, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 65, "v1" : 66, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 68, "v1" : 67, "curve" : -90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 70, "v1" : 69, "curve" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 72, "v1" : 71, "curve" : -90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 74, "v1" : 73, "curve" : 90, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 75, "v1" : 76, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 77, "v1" : 78, "curve" : -90, "vis" : true, "color" : "ff6363", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 81, "v1" : 80, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 80, "v1" : 81, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 83, "v1" : 82, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 82, "v1" : 83, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 85, "v1" : 84, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 84, "v1" : 85, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 87, "v1" : 86, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 86, "v1" : 87, "curve" : 180, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 89, "v1" : 88, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 88, "v1" : 89, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 91, "v1" : 90, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 90, "v1" : 91, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 93, "v1" : 92, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 92, "v1" : 93, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 95, "v1" : 94, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 94, "v1" : 95, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 96, "v1" : 97, "curve" : -197.38121949057748, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 97, "v1" : 96, "curve" : -213.29219661707097, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 98, "v1" : 99, "curve" : -197.38121949057748, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 99, "v1" : 98, "curve" : -213.29219661707097, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		
		{ "v0" : 3, "v1" : 2, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "goalNet" },
		{ "v0" : 7, "v1" : 6, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "goalNet", "bias" : 12 },
		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : false, "color" : "e0d5d6", "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "bias" : 12, "x" : -1252 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cGroup" : ["wall" ], "trait" : "goalNet", "x" : 1252 },
		
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "ff3030", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : -1200 },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "vis" : true, "color" : "33b4ff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 122, "v1" : 123, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "x" : 1200 },
		{ "v0" : 78, "v1" : 124, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line", "y" : -470 },
		{ "v0" : 79, "v1" : 125, "curve" : 90, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0, "trait" : "line", "y" : 470 },
		{ "v0" : 127, "v1" : 128, "curve" : -90, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 131, "v1" : 130, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 130, "v1" : 131, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 133, "v1" : 132, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 132, "v1" : 133, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 135, "v1" : 134, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 134, "v1" : 135, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 137, "v1" : 136, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 136, "v1" : 137, "curve" : 180, "vis" : true, "color" : "4fbeff", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 128, "v1" : 138, "curve" : 0, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "trait" : "line", "y" : -470 },
		{ "v0" : 129, "v1" : 139, "curve" : 90, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 139, "v1" : 140, "curve" : 0, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "trait" : "line", "y" : 470 },
		{ "v0" : 142, "v1" : 141, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 141, "v1" : 142, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 144, "v1" : 143, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 143, "v1" : 144, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 146, "v1" : 145, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 145, "v1" : 146, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 148, "v1" : 147, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 147, "v1" : 148, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 149, "v1" : 150, "curve" : -197.38121949057748, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 150, "v1" : 149, "curve" : -213.29219661707097, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 151, "v1" : 152, "curve" : -197.38121949057748, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 152, "v1" : 151, "curve" : -213.29219661707097, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 127, "v1" : 129, "curve" : 0, "vis" : true, "color" : "4fbeff", "bCoef" : 0, "trait" : "line" },
		
		{ "v0" : 34, "v1" : 106, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : -12 },
		{ "v0" : 36, "v1" : 111, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12 },
		{ "v0" : 28, "v1" : 116, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : 12 },
		{ "v0" : 30, "v1" : 121, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "bias" : -12 },
		
		{ "v0" : 42, "v1" : 41, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 41, "v1" : 153, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 42, "v1" : 154, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "line" },
		
		{ "v0" : 155, "v1" : 156, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 157, "v1" : 158, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0, "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 159, "v1" : 160, "curve" : -180, "vis" : true, "color" : "b3b6b6", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 161, "v1" : 162, "curve" : 180, "vis" : true, "color" : "b3b6b6", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 163, "v1" : 164, "curve" : 0, "vis" : false, "color" : "b3b6b6", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 165, "v1" : 166, "curve" : 0, "vis" : false, "color" : "b3b6b6", "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 0 }

	],

	"goals" : [
		{ "p0" : [1208.75,109 ], "p1" : [1208.75,-109 ], "team" : "blue" },
		{ "p0" : [-1208.75,109 ], "p1" : [-1208.75,-109 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 6.25, "invMass" : 1.5, "pos" : [0,0 ], "color" : "${PelotaFutsal}", "bCoef" : 0.35, "cGroup" : ["ball","kick","score" ], "damping" : 0.99 },

            ${JSON.stringify(obtenerDiscos()).slice(1, -1)},
		
		{ "radius" : 6, "pos" : [1200,110 ], "color" : "33b4ff", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1200,-110 ], "color" : "33b4ff", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,110 ], "color" : "ff3030", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-110 ], "color" : "ff3030", "trait" : "goalPost", "_selected" : true },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,600 ], "color" : "ffff00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,-600 ], "color" : "ffff00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 4, "invMass" : 0, "pos" : [1200,-600 ], "color" : "ffff00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 4, "invMass" : 0, "pos" : [1200,600 ], "color" : "ffff00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,-1 ], "dist" : -600, "bCoef" : 1, "trait" : "ballArea", "curve" : 0 },
		{ "normal" : [0,1 ], "dist" : -600, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		
		{ "normal" : [1,0 ], "dist" : -1275, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -675, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -675, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1275, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -1250, "bCoef" : 0.1, "trait" : "ballArea" },
		{ "normal" : [-1,0 ], "dist" : -1250, "bCoef" : 0.1, "trait" : "ballArea" }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5.2,
		"bCoef" : 0,
		"radius" : 15,
		"invMass" : 0.5,
		"damping" : 0.96,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0
		],
		"kickingDamping" : 0.96,
		"kickback" : 0

	},

	"ballPhysics" : "disc0",
"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]
}`;
	RSRMap = false;
	return Futx7Map;
}



function getFutx5Map() {
	var Futx5Map = `{

	"name" : "𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁵ 🏆 𝗚𝗟𝗛",

	"width" : 1080,

	"height" : 532,

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "2a3a40" },



	"redSpawnPoints" : [
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -414.415264020635, 0
		],
		[ -311.4602437113554, 503
		]

	],

	"blueSpawnPoints" : [
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 414.415264020635, 0
		],
		[ 311.4602437113554, 503
		]

	],

	"vertexes" : [
		/* 0 */ { "x" : 951.6840780069193, "y" : 460, "trait" : "ballArea" },
		/* 1 */ { "x" : 951.6840780069193, "y" : -460, "trait" : "ballArea" },
		
		/* 2 */ { "x" : 0, "y" : 547.606262899369, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 154.2553022744116, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -152.50026287232396, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -545.8512234972814, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "x" : -951.6840780069193, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 7 */ { "x" : -990, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 8 */ { "x" : -990, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 9 */ { "x" : -951.6840780069193, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 10 */ { "x" : 951.6840780069193, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 990, "y" : -90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 990, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 951.6840780069193, "y" : 90, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		
		/* 14 */ { "x" : -950, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,80 ] },
		/* 15 */ { "x" : -950, "y" : 460, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 16 */ { "x" : -950, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [-700,-80 ] },
		/* 17 */ { "x" : -950, "y" : -460, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 18 */ { "x" : -951.6840780069193, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 19 */ { "x" : 951.6840780069193, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 20 */ { "x" : 950, "y" : 90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "color" : "b3b6b6" },
		/* 21 */ { "x" : 950, "y" : 460, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 22 */ { "x" : 950, "y" : -460, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6" },
		/* 23 */ { "x" : 950, "y" : -90, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "b3b6b6", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 951.6840780069193, "y" : -460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 951.6840780069193, "y" : -460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -951.6840780069193, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		/* 27 */ { "x" : 951.6840780069193, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "color" : "b3b6b6" },
		
		/* 28 */ { "x" : 0, "y" : -460, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 29 */ { "x" : 0, "y" : -152.50026287232396, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 30 */ { "x" : 0, "y" : 154.2553022744116, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 31 */ { "x" : 0, "y" : 460, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "b3b6b6" },
		/* 32 */ { "x" : 0, "y" : -152.50026287232396, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 33 */ { "x" : 0, "y" : 154.2553022744116, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "b3b6b6" },
		/* 34 */ { "x" : 0, "y" : 154.2553022744116, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -152.50026287232396, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 154.2553022744116, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -152.50026287232396, "trait" : "kickOffBarrier", "color" : "b3b6b6", "vis" : true, "curve" : 0 },
		
		/* 38 */ { "x" : -958, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },
		/* 39 */ { "x" : -958, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -958, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -958, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },
		/* 42 */ { "x" : 959.999, "y" : -460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 959.999, "y" : -90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 959.99, "y" : 90, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 959.99, "y" : 460, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		
		/* 46 */ { "x" : 0, "y" : -152.50026287232396, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 47 */ { "x" : 0, "y" : 154.2553022744116, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 48 */ { "x" : -950, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 49 */ { "x" : -950, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 50 */ { "x" : 950, "y" : -90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 51 */ { "x" : 950, "y" : 90, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 52 */ { "x" : -950, "y" : 384.3219761344632, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : -90 },
		/* 53 */ { "x" : -674.83052804127, "y" : 135.0830794527406, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 54 */ { "x" : -950, "y" : 434.16975547080773, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 55 */ { "x" : -927.4593923849251, "y" : 460, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 56 */ { "x" : -950, "y" : -382.5669367323756, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 90 },
		/* 57 */ { "x" : -674.83052804127, "y" : -133.328040050653, "bCoef" : 0.1, "trait" : "line", "color" : "ff6363", "curve" : 0 },
		/* 58 */ { "x" : -950, "y" : -432.4147160687201, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 59 */ { "x" : -927.4593923849251, "y" : -460, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 60 */ { "x" : -659.2575158557021, "y" : -460, "bCoef" : 0.1, "trait" : "line", "color" : "00ff00" },
		/* 61 */ { "x" : 950, "y" : -432.4147160687201, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 62 */ { "x" : 927.4593923849251, "y" : -460, "bCoef" : 0.1, "trait" : "line", "curve" : -90, "color" : "b3b6b6" },
		/* 63 */ { "x" : 950, "y" : 434.16975547080773, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 64 */ { "x" : 927.4593923849251, "y" : 460, "bCoef" : 0.1, "trait" : "line", "curve" : 90, "color" : "b3b6b6" },
		/* 65 */ { "x" : 950, "y" : 384.3219761344632, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 66 */ { "x" : 674.83052804127, "y" : 135.0830794527406, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 90 },
		/* 67 */ { "x" : 950, "y" : -382.5669367323756, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 68 */ { "x" : 674.83052804127, "y" : -133.328040050653, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : -90 },
		/* 69 */ { "x" : 674.83052804127, "y" : 135.0830794527406, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 70 */ { "x" : 674.83052804127, "y" : -133.328040050653, "bCoef" : 0.1, "trait" : "line", "color" : "0099ff", "curve" : 0 },
		/* 71 */ { "x" : -648.8755077319904, "y" : 2.7947419832109137, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 72 */ { "x" : -648.8755077319904, "y" : -1.03970258112328, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 73 */ { "x" : -648.8755077319904, "y" : 6.629186547545109, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 74 */ { "x" : -648.8755077319904, "y" : -4.874147145457474, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 75 */ { "x" : -648.8755077319904, "y" : -2.9569248632903777, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 76 */ { "x" : -648.8755077319904, "y" : 4.711964265378011, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 77 */ { "x" : -648.8755077319904, "y" : -5.832758286541022, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 78 */ { "x" : -648.8755077319904, "y" : 7.5877976886286564, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 79 */ { "x" : 648.8755077319904, "y" : 2.7947419832109137, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 80 */ { "x" : 648.8755077319904, "y" : -1.03970258112328, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 81 */ { "x" : 648.8755077319904, "y" : 6.629186547545109, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 82 */ { "x" : 648.8755077319904, "y" : -4.874147145457474, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 83 */ { "x" : 648.8755077319904, "y" : -2.9569248632903777, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 84 */ { "x" : 648.8755077319904, "y" : 4.711964265378011, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 85 */ { "x" : 648.8755077319904, "y" : -5.832758286541022, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 86 */ { "x" : 648.8755077319904, "y" : 7.5877976886286564, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 87 */ { "x" : -480.1678757216728, "y" : 2.7947419832109137, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 88 */ { "x" : -480.1678757216728, "y" : -1.03970258112328, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 89 */ { "x" : -480.1678757216728, "y" : 6.629186547545109, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 90 */ { "x" : -480.1678757216728, "y" : -4.874147145457474, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 91 */ { "x" : -480.1678757216728, "y" : -2.9569248632903777, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 92 */ { "x" : -480.1678757216728, "y" : 4.711964265378011, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 93 */ { "x" : -480.1678757216728, "y" : -5.832758286541022, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 94 */ { "x" : -480.1678757216728, "y" : 7.5877976886286564, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 95 */ { "x" : 480.1678757216728, "y" : 2.7947419832109137, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 96 */ { "x" : 480.1678757216728, "y" : -1.03970258112328, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 97 */ { "x" : 480.1678757216728, "y" : 6.629186547545109, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 98 */ { "x" : 480.1678757216728, "y" : -4.874147145457474, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 99 */ { "x" : 480.1678757216728, "y" : -2.9569248632903777, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 100 */ { "x" : 480.1678757216728, "y" : 4.711964265378011, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 101 */ { "x" : 480.1678757216728, "y" : -5.832758286541022, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 102 */ { "x" : 480.1678757216728, "y" : 7.5877976886286564, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "b3b6b6" },
		/* 103 */ { "x" : -415.28032494847383, "y" : 430.33531090647347, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 104 */ { "x" : -415.28032494847383, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 105 */ { "x" : -207.64016247423692, "y" : 430.33531090647347, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 106 */ { "x" : -207.64016247423692, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 107 */ { "x" : 415.28032494847383, "y" : 430.33531090647347, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 108 */ { "x" : 415.28032494847383, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 109 */ { "x" : 207.64016247423692, "y" : 430.33531090647347, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 110 */ { "x" : 207.64016247423692, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 111 */ { "x" : -659.2575158557021, "y" : 460, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 112 */ { "x" : -659.2575158557021, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 113 */ { "x" : -962.0660861306311, "y" : 236.6958604075968, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 114 */ { "x" : -994.9424451890517, "y" : 236.6958604075968, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 115 */ { "x" : 962.0660861306311, "y" : 236.6958604075968, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 116 */ { "x" : 994.9424451890517, "y" : 236.6958604075968, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 117 */ { "x" : -962.0660861306311, "y" : -234.94082100550915, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 118 */ { "x" : -994.9424451890517, "y" : -234.94082100550915, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 119 */ { "x" : 962.0660861306311, "y" : -234.94082100550915, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 120 */ { "x" : 994.9424451890517, "y" : -234.94082100550915, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 121 */ { "x" : -659.2575158557021, "y" : -460, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 122 */ { "x" : -659.2575158557021, "y" : -489.9313845337331, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 123 */ { "x" : 659.2575158557021, "y" : 460, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 124 */ { "x" : 659.2575158557021, "y" : 491.6864239358207, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 125 */ { "x" : 659.2575158557021, "y" : -460, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		/* 126 */ { "x" : 659.2575158557021, "y" : -489.9313845337331, "bCoef" : 0.1, "trait" : "line", "color" : "b3b6b6" },
		
		/* 127 */ { "x" : 953.81880822316, "y" : -460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 128 */ { "x" : 953.81880822316, "y" : -90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ], "vis" : false },
		/* 129 */ { "x" : 953.81880822316, "y" : 90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "vis" : false },
		/* 130 */ { "x" : 953.81880822316, "y" : 460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 131 */ { "x" : -953.81880822316, "y" : 90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ], "vis" : false, "curve" : 0 },
		/* 132 */ { "x" : -953.81880822316, "y" : 460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false, "curve" : 0 },
		/* 133 */ { "x" : -953.81880822316, "y" : -90, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : false, "curve" : 0 },
		/* 134 */ { "x" : -953.81880822316, "y" : -460, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false, "curve" : 0 }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -90 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -990 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 90 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -90 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : 990 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 90 },
		
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -950 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -950 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 460 },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 950 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "b3b6b6", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 950 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -460 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -460 },
		
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -958 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -958 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 959.999 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 959.99 },
		
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -950 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 950 },
		{ "v0" : 52, "v1" : 53, "curve" : -97.06816078941904, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 55, "v1" : 54, "curve" : -84.13387356451095, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : 97.0681607894192, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 53, "v1" : 57, "curve" : 0, "vis" : true, "color" : "ff6363", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 59, "v1" : 58, "curve" : 84.13387356453157, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 62, "v1" : 61, "curve" : -84.13387356451999, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 64, "v1" : 63, "curve" : 84.13387356453006, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 97.06816078941918, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : -97.06816078941918, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 72, "v1" : 71, "curve" : 180.17291899624044, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 71, "v1" : 72, "curve" : 179.82756939105758, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 74, "v1" : 73, "curve" : 179.4796353292318, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 73, "v1" : 74, "curve" : 180.52486835318774, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 76, "v1" : 75, "curve" : 180.0000000000034, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 75, "v1" : 76, "curve" : 180.0000000000034, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 78, "v1" : 77, "curve" : 180.61174362649447, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 77, "v1" : 78, "curve" : 179.39404591210644, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 80, "v1" : 79, "curve" : 179.82578509754705, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 79, "v1" : 80, "curve" : 180.1738115987488, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 82, "v1" : 81, "curve" : 180.52486835319002, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 81, "v1" : 82, "curve" : 179.48760701172162, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 84, "v1" : 83, "curve" : 179.9999999999966, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 83, "v1" : 84, "curve" : 179.99999999999662, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 86, "v1" : 85, "curve" : 179.4141516159154, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 85, "v1" : 86, "curve" : 180.59125838829175, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 88, "v1" : 87, "curve" : 180.17291899623703, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 87, "v1" : 88, "curve" : 179.82756939106437, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 90, "v1" : 89, "curve" : 179.29450232925146, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 89, "v1" : 90, "curve" : 180.7116035817392, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 92, "v1" : 91, "curve" : 179.9999999999966, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 94, "v1" : 93, "curve" : 179.39085009654522, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 93, "v1" : 94, "curve" : 180.5935953836746, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 96, "v1" : 95, "curve" : 179.82578509754364, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 95, "v1" : 96, "curve" : 180.17381159872505, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 98, "v1" : 97, "curve" : 180.71160358173813, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 97, "v1" : 98, "curve" : 179.3053100193775, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 100, "v1" : 99, "curve" : 180.0000000000034, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180.6267415347291, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 179.39085009654622, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 109, "v1" : 110, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 111, "v1" : 112, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 121, "v1" : 122, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "b3b6b6", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		
		{ "v0" : 127, "v1" : 128, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 953.81880822316 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 953.81880822316 },
		{ "v0" : 131, "v1" : 132, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -953.81880822316, "curve" : 0 },
		{ "v0" : 133, "v1" : 134, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -953.81880822316, "curve" : 0 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -460, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -460, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -545.8512234972814, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -547.606262899369, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1072.8075061168906, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1072.8075061168906, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -1072.8075061168906, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1072.8075061168906, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"goals" : [
		{ "p0" : [-958.95,-90 ], "p1" : [-958.95,90 ], "team" : "red" },
		{ "p0" : [958.95,90 ], "p1" : [958.95,-90 ], "team" : "blue" }

	],

	"discs" : [
		{"radius":6.4,"color":"${PelotaFutsal}","bCoef":0.4,"invMass":1.5,"damping":0.99,"cGroup":["ball","kick","score"]},
            ${JSON.stringify(obtenerDiscos()).slice(1, -1)},

		{ "radius" : 5, "pos" : [-950,90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 90 },
		{ "radius" : 5, "pos" : [-950,-90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -90, "x" : -560 },
		{ "radius" : 5, "pos" : [950,91 ], "color" : "FFFF00", "trait" : "goalPost", "y" : 90 },
		{ "radius" : 5, "pos" : [950,-90 ], "color" : "FFFF00", "trait" : "goalPost", "y" : -90 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-950,460 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "y" : 460 },
		{ "radius" : 3, "invMass" : 0, "pos" : [-950,-460 ], "color" : "ff6363", "bCoef" : 0.1, "trait" : "line", "y" : -460 },
		{ "radius" : 3, "invMass" : 0, "pos" : [950,-460 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "y" : -460 },
		{ "radius" : 3, "invMass" : 0, "pos" : [950,460 ], "color" : "0099ff", "bCoef" : 0.1, "trait" : "line", "y" : 460 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

"ballPhysics":"disc0",

"joints":[{"d0":0,"d1":1,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":2,"length":5.0990195135927845,"color":"transparent"},
{"d0":0,"d1":3,"length":5,"color":"transparent"},
{"d0":0,"d1":4,"length":5,"color":"transparent"},
{"d0":0,"d1":5,"length":5,"color":"transparent"},
{"d0":0,"d1":6,"length":0,"color":"transparent"},
{"d0":1,"d1":2,"length":10,"color":"transparent"},
{"d0":1,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":1,"d1":4,"length":5.385164807134504,"color":"transparent"},
{"d0":1,"d1":5,"length":9.433981132056603,"color":"transparent"},
{"d0":1,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":2,"d1":3,"length":6.4031242374328485,"color":"transparent"},
{"d0":2,"d1":4,"length":9.433981132056603,"color":"transparent"},
{"d0":2,"d1":5,"length":5.385164807134504,"color":"transparent"},
{"d0":2,"d1":6,"length":5.0990195135927845,"color":"transparent"},
{"d0":3,"d1":4,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":5,"length":9.486832980505138,"color":"transparent"},
{"d0":3,"d1":6,"length":5,"color":"transparent"},
{"d0":4,"d1":5,"length":6,"color":"transparent"},
{"d0":4,"d1":6,"length":5,"color":"transparent"},
{"d0":5,"d1":6,"length":5,"color":"transparent"}]
}`;
	RSRMap = false;
	return Futx5Map;
}





/*------------------------------ END OF STADIUMS ----------------------------*/
function whichTeam(){var players=room.getPlayerList();var redTeam=players.filter(player=>player.team==1);var blueTeam=players.filter(player=>player.team==2);return[redTeam,blueTeam]}
var roomName=NombreHost;var roomPassword=ClaveParaSerAdmin;var maxPlayers=CantidadDeJugadores;var roomPublic=VisibilidadDelHost;var roomLink="";var gameTime=TiempoDeJuego;var map="RSR";var latitud=countryCoords[UbicacionDelHost]?countryCoords[UbicacionDelHost][0]:null;var longitud=countryCoords[UbicacionDelHost]?countryCoords[UbicacionDelHost][1]:null;var codigoBandera=codigosBanderas[BanderaDelHost]?codigosBanderas[BanderaDelHost]:null;var geoConfig={};if(UbicacionDelHost!=="myubication"&&latitud!==null&&longitud!==null&&codigoBandera!==null){geoConfig={code:codigoBandera,lat:latitud,lon:longitud}}else{console.warn("Usando configuración de geolocalización por defecto.")}
try{var roomConfig={roomName:NombreHost,password:PasswordDelHost,maxPlayers:maxPlayers,public:roomPublic,playerName:NombreBot,noPlayer:!BotVisible};if(UbicacionDelHost!=="myubication"&&latitud!==null&&longitud!==null&&codigoBandera!==null){roomConfig.geo=geoConfig}
var room=HBInit(roomConfig);room.setRequireRecaptcha(ActivarReCaptcha);console.log("Sala creada exitosamente")}catch(error){console.error("Error al crear la sala:",error)}
class Game{constructor(){this.time=0;this.paused=!1;this.ballRadius;this.rsTouchTeam=0;this.rsActive=!0;this.rsReady=!1;this.rsCorner=!1;this.rsGoalKick=!1;this.rsSwingTimer=1000;this.rsTimer;this.ballOutPositionX;this.ballOutPositionY;this.throwInPosY;this.outStatus="";this.warningCount=0;this.bringThrowBack=!1;this.extraTime=!1;this.extraTimeCount=0;this.extraTimeEnd;this.extraTimeAnnounced=!1;this.lastPlayAnnounced=!1;this.boosterState;this.throwinKicked=!1;this.pushedOut;this.lastKickerId;this.lastKickerName;this.lastKickerTeam;this.secondLastKickerId;this.secondLastKickerName;this.secondLastKickerTeam;this.redScore=0;this.blueScore=0;this.powershotCounter=0;this.powershotID=0;this.powershotTrigger=!1}
updateLastKicker(id,name,team){this.secondLastKickerId=this.lastKickerId;this.secondLastKickerName=this.lastKickerName;this.secondLastKickerTeam=this.lastKickerTeam;this.lastKickerId=id;this.lastKickerName=name;this.lastKickerTeam=team}}
var ArqueroRED=null;var ArqueroBLUE=null;function setDefaultStadium(){switch(MapaPorDefecto){case "Entrenamiento Futsal":room.setCustomStadium(getEntrenamientoFutsalMap());break;case "Futsal x2":room.setCustomStadium(getFutx2Map());break;case "Futsal x3":room.setCustomStadium(getFutx3Map());break;case "Futsal x4":room.setCustomStadium(getFutx4Map());break;case "Futsal x5":room.setCustomStadium(getFutx5Map());break;case "Futsal x5 cesped":room.setCustomStadium(getFutx5cespedMap());break;case "Futsal x7":room.setCustomStadium(getFutx7Map());break;case "Real Futsal":room.setCustomStadium(getRealFutsal());break;case "Campeones":room.setCustomStadium(getCampeonesMap());break;case "Premios":room.setCustomStadium(getPremiosMap());break;default:break}}
function enviarMensajeExpulsion(playerName,expulsionType,motivo,expulsor){const banEmoji="❌ Ban";const kickEmoji="⚠️ Kick";const reasonEmoji="📑";const byEmoji="👮‍♂️";const embedMessage={embeds:[{title:"📋 Registro de Kicks y Bans 🔍",description:`**🚷👤 Jugador Echado:** ${playerName}\n**Tipo de Expulsión:** ${expulsionType === 'baneado' ? banEmoji : kickEmoji}`,color:expulsionType==='baneado'?0xFF0000:0xFFA500,fields:[],footer:{text:`${byEmoji} Expulsado por: ${expulsor}`}}]};if(motivo){embedMessage.embeds[0].fields.push({name:`${reasonEmoji} Motivo`,value:motivo})}
const webhook=new XMLHttpRequest();webhook.open('POST',AnuncioKicksBans);webhook.setRequestHeader('Content-Type','application/json');webhook.send(JSON.stringify(embedMessage))}
function sendToDiscord(player,message,color=0x04FF5D){const embed={embeds:[{title:NombreHost,description:message,color:color,footer:{text:`Solicitado por ${player.name}`},timestamp:new Date().toISOString(),},],};fetch(webhookEstadisticasJugadores,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(embed),})}
var golesRecibidosRED=0;var golesRecibidosBlue=0;var tiempoAtajandoRED=0;var tiempoAtajandoBlue=0;var vallasInvictasRED=0;var vallasInvictasBlue=0;let autoBalancePaused=!1;room.setTeamsLock(!0);function parseColors(colorString){let parts=colorString.split(' ');let angle=parseInt(parts[2]);let textColor=parseInt(parts[3],16);let colors=parts.slice(4).map(color=>parseInt(color,16));return{angle:angle,textColor:textColor,colors:colors}}
var webhookQueues={boletero:[],ipJugadores:[]};const MAX_QUEUE_LENGTH=50;const TRIM_TO_LENGTH=10;const WEBHOOK_DELAY=1500;const MAX_MESSAGE_AGE=300000;var isSendingBoletero=!1;var isSendingIP=!1;function applyQueueLimits(queue,queueName){const originalLength=queue.length;if(queue.length>=MAX_QUEUE_LENGTH){console.warn(`⚠️ ${queueName} superó ${MAX_QUEUE_LENGTH} mensajes. Recortando...`);queue=queue.slice(-TRIM_TO_LENGTH)}
const now=Date.now();queue=queue.filter(item=>{if(!item.timestamp)return!0;return(now-item.timestamp)<MAX_MESSAGE_AGE});const removed=originalLength-queue.length;if(removed>0){console.log(`🧹 ${queueName}: Eliminados ${removed} mensajes (límites/edad)`)}
return queue}
function monitorQueues(){console.log(`📊 MONITOR: Boletero=${webhookQueues.boletero.length}/${MAX_QUEUE_LENGTH}, IP=${webhookQueues.ipJugadores.length}/${MAX_QUEUE_LENGTH}`);webhookQueues.boletero=applyQueueLimits(webhookQueues.boletero,"Boletero");webhookQueues.ipJugadores=applyQueueLimits(webhookQueues.ipJugadores,"IP-Jugadores")}
setInterval(monitorQueues,30000);function sendIPToDiscord_INTERNAL(player){const playerInfo=playerIPs.find(info=>info.nickname===player.name);if(playerInfo){const embed={embeds:[{title:`⛔ El jugador "${player.name}" se ha retirado del host 🌐`,description:`🔐📶 IP de **${player.name}**: \`${playerInfo.ip}\``,color:0xFF5733,timestamp:new Date().toISOString(),fields:[{name:'🛡 Acción recomendada:',value:`Para añadir esta IP a la blacklist:\n\n\`\`\`diff\n!banip ${playerInfo.ip}\n\`\`\``,},],footer:{text:'🔒 Información confidencial'}}]};const requestOptions={method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(embed)};fetch(webhookIPJugadores,requestOptions).catch(error=>{console.error(`❌ Error enviando IP a Discord: ${error.message}`)})}}
function sendBoleteroToDiscord_INTERNAL(message,roomName,roomLink,color){var request=new XMLHttpRequest();request.open("POST",webhookBoletero);request.setRequestHeader('Content-type','application/json');var params={avatar_url:'',username:'BOLETERO',embeds:[{title:`${roomName}`,description:message,fields:[{name:"🔗 LINK DEL HOST:",value:roomLink||"No disponible"}],color:color}],allowed_mentions:{parse:[]}};request.onerror=function(){console.error("❌ Error de red enviando a Discord Boletero")};request.send(JSON.stringify(params))}
function queueBoleteroMessage(message,roomName,roomLink,color){webhookQueues.boletero=applyQueueLimits(webhookQueues.boletero,"Boletero");if(webhookQueues.boletero.length>=MAX_QUEUE_LENGTH){console.warn(`🚨 Cola Boletero llena. Descartando mensaje: "${message.substring(0, 50)}..."`);return!1}
webhookQueues.boletero.push({message:message,roomName:roomName,roomLink:roomLink,color:color,timestamp:Date.now()});if(!isSendingBoletero){processBoleteroQueue()}
return!0}
function queueIPMessage(player){webhookQueues.ipJugadores=applyQueueLimits(webhookQueues.ipJugadores,"IP-Jugadores");if(webhookQueues.ipJugadores.length>=MAX_QUEUE_LENGTH){console.warn(`🚨 Cola IP-Jugadores llena. Descartando IP de: ${player.name}`);return!1}
webhookQueues.ipJugadores.push({player:player,timestamp:Date.now()});if(!isSendingIP){processIPQueue()}
return!0}
function processBoleteroQueue(){if(webhookQueues.boletero.length===0){isSendingBoletero=!1;return}
isSendingBoletero=!0;const data=webhookQueues.boletero.shift();try{sendBoleteroToDiscord_INTERNAL(data.message,data.roomName,data.roomLink,data.color)}catch(error){console.error(`❌ Error procesando mensaje Boletero: ${error.message}`)}
setTimeout(processBoleteroQueue,WEBHOOK_DELAY)}
function processIPQueue(){if(webhookQueues.ipJugadores.length===0){isSendingIP=!1;return}
isSendingIP=!0;const data=webhookQueues.ipJugadores.shift();try{sendIPToDiscord_INTERNAL(data.player)}catch(error){console.error(`❌ Error procesando mensaje IP: ${error.message}`)}
setTimeout(processIPQueue,WEBHOOK_DELAY)}
function sendBoleteroToDiscord(message,roomName,roomLink,color){const success=queueBoleteroMessage(message,roomName,roomLink,color);if(!success){console.log(`⏭️ Mensaje Boletero descartado (cola llena): "${message.substring(0, 30)}..."`)}}
function sendIPToDiscord(player){const success=queueIPMessage(player);if(!success){console.log(`⏭️ Mensaje IP descartado (cola llena) para: ${player.name}`)}}
console.log("✅ Sistema de rate-limit para Discord INICIADO");console.log(`   - Máximo en cola: ${MAX_QUEUE_LENGTH} mensajes`);console.log(`   - Delay entre mensajes: ${WEBHOOK_DELAY}ms`);console.log(`   - Webhooks protegidos: Boletero, IP-Jugadores`);var salaCerrada=!1;function verificarReserva(){const jugadores=room.getPlayerList().filter(p=>p.id!==0);const admins=jugadores.filter(p=>esAdminValido(p)).length;const noAdmins=jugadores.length-admins;const maxNoAdmins=maxPlayers-LugaresReservados;if(noAdmins>=maxNoAdmins&&!salaCerrada){room.setPassword(contrasena);room.sendAnnouncement(`🔒 Sala cerrada. Se reservan ${LugaresReservados} lugares para admins.`,null,0xFF0000,"bold",2);salaCerrada=!0}else if(noAdmins<maxNoAdmins&&salaCerrada){room.setPassword(null);room.sendAnnouncement("🔓 Sala abierta. Hay lugares disponibles.",null,0x00FF00,"bold",2);salaCerrada=!1}}
var redData=parseColors(camisetaRed);var blueData=parseColors(camisetaBlue);var redAngle=redData.angle;var blueAngle=blueData.angle;var redTextColor=redData.textColor;var blueTextColor=blueData.textColor;var redColor=redData.colors;var blueColor=blueData.colors;room.setTeamColors(1,redAngle,redTextColor,redColor);room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamRed=NombreEquipoRojo
teamBlue=NombreEquipoAzul
setDefaultStadium();room.setScoreLimit(LimiteDeGoles);let adminMessageCooldown=!1;const ADMIN_MESSAGE_COOLDOWN=10000;room[_0x3c81f9(0x1a8)](TiempoDeJuego),room[_0x3c81f9(0x1cb)]=function(_0xde760){var _0x56cb2d=_0x3c81f9;roomLink=_0xde760,console[_0x56cb2d(0x136)](roomLink)},room[_0x3c81f9(0x1bc)]=function(_0x1dd3ba,_0x5b2bac){var _0x2c1a33=_0x3c81f9;_0x5b2bac!=null?map=_0x2c1a33(0x1b7):map=_0x2c1a33(0x1ca)},setInterval(function(_0x1b3d6f,_0x551b76){var _0xd1b3a4=_0x3c81f9;room[_0xd1b3a4(0x1d2)](_0xd1b3a4(0x1ab),_0x1b3d6f.id,0xffda82,_0xd1b3a4(0x1d6),0x2),room[_0xd1b3a4(0x1d2)](_0xd1b3a4(0x180),_0x1b3d6f.id,0xffda82,_0xd1b3a4(0x1d6),0x0)},0x927c0);var webhookID=_0x3c81f9(0x1b8);room[_0x3c81f9(0x12f)]=function(_0x4a7fbc){var _0x9060eb=_0x3c81f9,_0x436097={};_0x436097[_0x9060eb(0x1b1)]='**'+_0x4a7fbc[_0x9060eb(0x161)]+' -** ['+_0x4a7fbc[_0x9060eb(0x1c1)]+_0x9060eb(0x155)+_0x4a7fbc[_0x9060eb(0x1cd)]+']',_0x436097.username='Real Soccer Revolution';var _0x275f9e={};_0x275f9e['Content-Type']=_0x9060eb(0x130);var _0x338ced={};_0x338ced.method=_0x9060eb(0x175),_0x338ced[_0x9060eb(0x1b2)]=JSON[_0x9060eb(0x141)](_0x436097),_0x338ced[_0x9060eb(0x1bf)]=_0x275f9e,fetch(webhookID,_0x338ced)['then'](_0x169fd3=>_0x169fd3),whisper(_0x9060eb(0x131),_0x4a7fbc.id,0x61b3ff,_0x9060eb(0x17a),0x0),whisper(_0x9060eb(0x137),_0x4a7fbc.id,0x61c5ff,'bold',0x0),whisper(_0x9060eb(0x1a4),_0x4a7fbc.id,0x61cdff,_0x9060eb(0x17a),0x0),whisper(_0x9060eb(0x1c5),_0x4a7fbc.id,0x61ddff,_0x9060eb(0x17a),0x0),whisper(_0x9060eb(0x151),_0x4a7fbc.id,0x61e7ff,_0x9060eb(0x17a),0x0),displayAdminMessage()},room.onPlayerLeave=function(player){delete playerJoinTimes[player.id];connections=connections.filter(conn=>conn[0]!==player.id);const now=Date.now();if(now-leaveFlood.lastReset>LEAVE_FLOOD_WINDOW){leaveFlood.count=0;leaveFlood.lastReset=now}
leaveFlood.count++;const floodDetectado=leaveFlood.count>LEAVE_FLOOD_LIMIT;if(player.conn&&typeof player.conn==="string"){const playerIp=decryptHex(player.conn);const sameIpConnections=connections.filter(conn=>{const connIp=decryptHex(conn[1]);return connIp===playerIp});if(sameIpConnections.length===0){UsedNames=UsedNames.filter(nameRecord=>{const nameRecordIp=decryptHex(nameRecord.conn);return nameRecordIp!==playerIp});const playersWithSameIp=room.getPlayerList().filter(p=>{if(p.conn&&typeof p.conn==="string"){const pIp=decryptHex(p.conn);return pIp===playerIp}
return!1});if(playersWithSameIp.length===0){delete usedUsernames[player.name]}}}else{console.log(`player.conn indefinido para ${player.name} en onPlayerLeave`)}
if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=6&&numJugadores<=7){maxPlayersPerTeam=3;nuevaConfiguracion={mapa:getFutx3Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=8&&numJugadores<=9){maxPlayersPerTeam=4;nuevaConfiguracion={mapa:getFutx4Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=10&&numJugadores<=11){maxPlayersPerTeam=5;nuevaConfiguracion={mapa:getFutx5Map(),scoreLimit:GolesFutsalx5,timeLimit:TiempoFutsalx5}}else if(numJugadores>=14){maxPlayersPerTeam=7;nuevaConfiguracion={mapa:getFutx7Map(),scoreLimit:GolesFutsalx7,timeLimit:TiempoFutsalx7}}
if(nuevaConfiguracion!==null){if(JSON.stringify(nuevaConfiguracion)!==JSON.stringify(configuracionActual)){const scores=room.getScores();if(scores!==null){if(scores.time<=tiempoLimiteCambio){configuracionActual=nuevaConfiguracion;setTimeout(function(){room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()},tiempoEsperaCambio)}}else{configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}}}}
sendIPToDiscord(player);if(avatarIntervals[player.id]){clearInterval(avatarIntervals[player.id]);delete avatarIntervals[player.id]}
verificarReserva();const totalPlayers=room.getPlayerList().length;const NombreDelJugadorNickname=player.name;if(!containsInvalidCharacters(NombreDelJugadorNickname)){let message=`➡️🚪 ${NombreDelJugadorNickname} se ha ido del host -- ${totalPlayers}/${maxPlayers} 👋`;if(totalPlayers<maxPlayers){const remainingSpots=maxPlayers-totalPlayers;message+=remainingSpots===1?`\n\n**[🟢] QUEDA 1 LUGAR**`:`\n\n**[🟢] QUEDAN ${remainingSpots} LUGARES**`}
if(salaCerrada){message+=`\n\n**🔒 La sala está momentáneamente con contraseña para reservarles el lugar a los administradores.**`}
if(PasswordDelHost!==null&&PasswordDelHost!==""){message+=`\n\n**🔒 ESTE HOST TIENE CONTRASEÑA**`}else{message+=`\n\n**🌍 HOST PÚBLICO**`}
sendBoleteroToDiscord(message,roomName,roomLink,16711680)}
for(const votedMap in mapVotes){const index=mapVotes[votedMap].indexOf(player.id);if(index!==-1){mapVotes[votedMap].splice(index,1);room.sendAnnouncement(`[❌] ${player.name} ha abandonado el juego. Su voto por el mapa "${votedMap}" ha sido eliminado. (${mapVotes[votedMap].length} votos restantes).`,null,0xff1759,'bold',1);room.sendAnnouncement(`🗳️ VOTOS REALIZADOS: ${getVoteResultsString()} | ⏳ VOTOS RESTANTES: ${getRemainingVotes()}`,null,0xFFB600,'bold',1)}}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_ADMIN_VOTE){updateAdminVotesNeeded()}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_KICK_VOTE){updateKickVotesNeeded()}
console.log(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+"."+new Date().getMilliseconds()+" ➡️ "+player.name+" ["+player.id+"] has left.");DeletePlayer(player.id);if(!adminMessageCooldown){displayAdminMessage();adminMessageCooldown=!0;setTimeout(function(){adminMessageCooldown=!1},ADMIN_MESSAGE_COOLDOWN)}};function checkAttempts(byPlayer){if(!esAdminValido(byPlayer)){var playerId=byPlayer.id;if(cooldownActive[playerId]&&cooldownActive[playerId]>Date.now()){room.kickPlayer(playerId,"Baneado por abuso de kicks/bans durante cooldown",!0);return}
if(!kickBanAttempts[playerId]){kickBanAttempts[playerId]=[]}
kickBanAttempts[playerId].push(Date.now());kickBanAttempts[playerId]=kickBanAttempts[playerId].filter(attempt=>Date.now()-attempt<=interval);if(kickBanAttempts[playerId].length>maxAttempts){if(cooldownActive[playerId]&&cooldownActive[playerId]<=Date.now()){kickBanAttempts[playerId]=[];cooldownActive[playerId]=undefined}else{room.sendAnnouncement("¡Advertencia! Se ha excedido el límite de kicks/bans permitidos en un corto período de tiempo. Si continúas serás baneado.",playerId,0xFF0000);cooldownActive[playerId]=Date.now()+cooldownTime;return}}
if(kickBanAttempts[playerId].length>alertThreshold&&!cooldownActive[playerId]){room.sendAnnouncement("¡Alerta! Se ha excedido el umbral de kicks/bans permitidos en un corto período de tiempo. Si continúas serás baneado.",playerId,0xFFA500)}}}
room.onPlayerKicked=function(kickedPlayer,reason,ban,byPlayer){if(ban&&esAdminValido(kickedPlayer)){room.clearBans();setTimeout(()=>{room.kickPlayer(byPlayer.id,"🚫 Baneado por banear a un admin del host 🚫",!0)},500)}
if(kickedPlayer){const playerName=kickedPlayer.name||"Jugador Desconocido";const expulsionType=ban?'baneado':'kickeado';const byPlayerName=byPlayer?byPlayer.name:"🤖 Sistema";enviarMensajeExpulsion(playerName,expulsionType,reason,byPlayerName)}
if(byPlayer){checkAttempts(byPlayer)}}
var roomLink=null;function sendLinkToDiscord(url){let xhr=new XMLHttpRequest;xhr.open("POST",AnuncioHostAbierto),xhr.setRequestHeader("Content-type","application/json");let message={content:url};xhr.send(JSON.stringify(message))}
const countryMapping={argentina:"Argentina 🇦🇷",uruguay:"Uruguay 🇺🇾",brasil:"Brasil 🇧🇷",colombia:"Colombia 🇨🇴",chile:"Chile 🇨🇱",mexico:"México 🇲🇽",bolivia:"Bolivia 🇧🇴",peru:"Perú 🇵🇪",paraguay:"Paraguay 🇵🇾",venezuela:"Venezuela 🇻🇪",costa_rica:"Costa Rica 🇨🇷",united_states:"Estados Unidos 🇺🇸",canada:"Canadá 🇨🇦",france:"Francia 🇫🇷",spain:"España 🇪🇸",italy:"Italia 🇮🇹",germany:"Alemania 🇩🇪",netherlands:"Países Bajos 🇳🇱",portugal:"Portugal 🇵🇹",croatia:"Croacia 🇭🇷",macedonia:"Macedonia 🇲🇰",serbia:"Serbia 🇷🇸",poland:"Polonia 🇵🇱",ukraine:"Ucrania 🇺🇦",russia:"Rusia 🇷🇺",marruecos:"Marruecos 🇲🇦",united_kingdom:"Reino Unido 🇬🇧",turkey:"Turquía 🇹🇷",south_korea:"Corea del Sur 🇰🇷",japan:"Japón 🇯🇵",china:"China 🇨🇳",vietnam:"Vietnam 🇻🇳",israel:"Israel 🇮🇱",myubication:"Geolocalización por Defecto 🌍",haxarg:"HAXARG Ú&7 ⭐🧉",};const countryOfHost=countryMapping[UbicacionDelHost]||"Desconocido";function containsInvalidCharacters(playerName){return playerName.includes('@')||playerName.includes('#')||playerName.includes('*')}
function cargarEstadisticas(){totalPlayerGoals=JSON.parse(localStorage.getItem('totalPlayerGoals'))||{};totalPlayerAssists=JSON.parse(localStorage.getItem('totalPlayerAssists'))||{};totalPlayerPoints=JSON.parse(localStorage.getItem('totalPlayerPoints'))||{};playerFiguraCount=JSON.parse(localStorage.getItem('playerFiguraCount'))||{};playerMinutesPlayed=JSON.parse(localStorage.getItem('playerMinutesPlayed'))||{};playerGoalkeeperTime=JSON.parse(localStorage.getItem('playerGoalkeeperTime'))||{};playerGoalsReceived=JSON.parse(localStorage.getItem('playerGoalsReceived'))||{};playerCleanSheets=JSON.parse(localStorage.getItem('playerCleanSheets'))||{}}
function normalizarEstado(estado){return estado.trim().toLowerCase()}
function actualizarEstadoBot(){if(normalizarEstado(StatusBot)==="afk"){afkPlayerIDs.add(0)}else{afkPlayerIDs.delete(0)}}
let linkAnterior=null;room.onRoomLink=function(url){if(url===linkAnterior)return;if(GrabarTodo){room.sendAnnouncement("🎥 Grabación iniciada automáticamente.",null,0x00FF00,"bold",2);room.startRecording();grabando=!0}
if(automatizadoActivado){modoJueganAlgunos=!0;maxPlayersPerTeam=1;configuracionActual={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal};room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}
linkAnterior=url;actualizarEstadoBot();cargarEstadisticas();roomLink=url;if(ReiniciarStats.toLowerCase()==="si"){totalPlayerGoals={};totalPlayerAssists={};totalPlayerPoints={};playerGoals={};playerAssists={};playerPoints={};playerGoals2={};playerAssists2={};playerPoints2={};playerFiguraCount={};playerMinutesPlayed={};playerGoalkeeperTime={};playerGoalsReceived={};playerCleanSheets={};localStorage.removeItem('totalPlayerGoals');localStorage.removeItem('totalPlayerAssists');localStorage.removeItem('totalPlayerPoints');localStorage.removeItem('playerGoals2');localStorage.removeItem('playerAssists2');localStorage.removeItem('playerPoints2');localStorage.removeItem('playerFiguraCount');localStorage.removeItem('playerMinutesPlayed');localStorage.removeItem('playerGoalkeeperTime');localStorage.removeItem('playerGoalsReceived');localStorage.removeItem('playerCleanSheets')}
let additionalMessage0="\n\n# ``📎 Link`` ";let additionalMessage1="\n\n## ``🌟 Nombre`` "+NombreHost+"\n\n"+"## ``📍 Ubicación`` "+countryOfHost;let additionalMessage2="\n\n"+VersionDelScript;sendLinkToDiscord(MensajeHostAbierto+` ||<@&${TagHostAbierto}> ||`+additionalMessage0+roomLink+additionalMessage1+additionalMessage2)};function getDate(){let data=new Date(),dia=data.getDate().toString().padStart(2,'0'),mes=(data.getMonth()+1).toString().padStart(2,'0'),ano=data.getFullYear(),horas=data.getHours().toString().padStart(2,'0'),minutos=data.getMinutes().toString().padStart(2,'0');return `${dia}-${mes}-${ano}-${horas}h${minutos}m`}
function getScoresObjectTime(scores){return Math.floor(Math.floor(scores/60)/10).toString()+Math.floor(Math.floor(scores/60)%10).toString()+":"+Math.floor(Math.floor(scores-(Math.floor(scores/60)*60))/10).toString()+Math.floor(Math.floor(scores-(Math.floor(scores/60)*60))%10).toString()}
let goalAnnouncementsSum=[];function getMapName(command){const mapNames={'!entrenamientofutsal':'⚽ Entrenamiento Futsal','!futx2':'⚽ Futsal x2','!futx3':'⚽ Futsal x3','!futx4':'⚽ Futsal x4','!futx5':'⚽ Futsal x5','!futx5cesped':'⚽ Futsal x5 🟢','!futx7':'⚽ Futsal x7','!realfutsal':'⚽ RealFutsal','!premios':'🌟 ɢᴀʟᴀ ᴅᴇ ᴘʀᴇᴍɪᴀᴄɪᴏɴᴇs 🎖️','!campeones':'🏆 CAMPEONES 🌿⭐🌿',};return mapNames[command]||'🕵️‍♂️ Mapa Desconocido'}
function getPlayersStats(){const red=room.getPlayerList().filter((player)=>player.team==1);const blue=room.getPlayerList().filter((player)=>player.team==2);const printRed=red.map((player)=>{return player.name});const printBlue=blue.map((player)=>{return player.name});const timeRemaining=room.getScores().time;if(room.getScores()==null)return!1;let bluePoss=0;let redPoss=0;ballCarrying.forEach(updateTeamPoss);const redPossPercent=Math.round((redPoss/(redPoss+bluePoss+0.000001))*100);const bluePossPercent=Math.round((bluePoss/(redPoss+bluePoss+0.000001))*100);const totalPosesion=posesionEquipoA+posesionEquipoB;const porcentajeEquipoA=totalPosesion===0?0:(posesionEquipoA/totalPosesion)*100;const porcentajeEquipoB=totalPosesion===0?0:(posesionEquipoB/totalPosesion)*100;const timeOnRedHalf=Math.round((timeOnHalves[0]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);const timeOnBlueHalf=Math.round((timeOnHalves[1]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);const goalAnnouncementsSection=goalAnnouncementsSum.join('\n');const admins=room.getPlayerList().filter((player)=>player.admin);const adminNames=admins.map((admin)=>admin.name);const adminList=adminNames.length>0?adminNames.join(', '):'Sin Administrador';const figuraDelPartido2=getFiguraDelPartido2();return{printRed,printBlue,porcentajeEquipoA,porcentajeEquipoB,timeOnRedHalf,timeOnBlueHalf,adminList,figuraDelPartido2,timeRemaining,goalAnnouncementsSection}}
function sendDiscordWebhook(){const{printRed,printBlue,porcentajeEquipoA,porcentajeEquipoB,timeOnRedHalf,timeOnBlueHalf,adminList,figuraDelPartido2,timeRemaining,goalAnnouncementsSection}=getPlayersStats();sendGameInfo(printRed,printBlue,porcentajeEquipoA,porcentajeEquipoB,timeOnRedHalf,timeOnBlueHalf,adminList,figuraDelPartido2,timeRemaining);setTimeout(()=>{sendGoalAnnouncements()},500)}
function sendGameInfo(printRed,printBlue,porcentajeEquipoA,porcentajeEquipoB,timeOnRedHalf,timeOnBlueHalf,adminList,figuraDelPartido2,timeRemaining){const embed={title:"🏆 RESULTADO FINAL:",color:0x00ff77,description:`**🟥 ${teamRed} ${room.getScores().red}**\n**🟦 ${teamBlue} ${room.getScores().blue}**`,fields:[{name:`Formación ${teamRed} 🔴`,value:printRed.join('\n'),inline:!0},{name:`Formación ${teamBlue} 🔵`,value:printBlue.join('\n'),inline:!0},{name:"🌟 Figura del partido:",value:figuraDelPartido2},{name:"\n\n📊 ESTADÍSTICAS",value:`\n\n**⚽️ Posesión de balón:**\n🔴 ${teamRed}: ${porcentajeEquipoA.toFixed(2)}%\n🔵 ${teamBlue}: ${porcentajeEquipoB.toFixed(2)}%\n\n**🔄 Pelota en campo:**\n🔴 ${teamRed}: ${timeOnRedHalf}%\n🔵 ${teamBlue}: ${timeOnBlueHalf}%\n\n⏰ **Tiempo Jugado**: ${getScoresObjectTime(timeRemaining)}`},{name:"\n\n🛠️ CONFIGURACIÓN",value:`\n\n🎮 Nombre de la Sala:\n ${NombreHost}\n\n👑 Administradores: ${adminList}\n\n📍 Ubicación del Host: ${countryOfHost}\n\n🔗 Link de la Sala:\n ${roomLink || 'No disponible'}\n\n🏟️ Mapa Colocado: ${currentMap}\n\n⚽️ Límite de Goles: ${room.getScores().scoreLimit}\n\n⏱️ Límite de Tiempo: ${getScoresObjectTime(room.getScores().timeLimit)}`}]};const webhookData=new FormData();webhookData.append("payload_json",JSON.stringify({embeds:[embed]}));const webhook=new XMLHttpRequest();webhook.open("POST",WebhookGrabaciones);webhook.send(webhookData);setTimeout(()=>{sendHBR2File()},80)}
function sendHBR2File(){if(!GrabarTodo){const form=new FormData();form.append("archivo",new File([room.stopRecording()],`HBReplay-${getDate()}.hbr2`,{type:"text/plain"}));const webhookData=new FormData();webhookData.append("content",`# 📥🎦 Descargar aquí la repetición del partido 👇`);webhookData.append("file",form.get("archivo"));const webhook=new XMLHttpRequest();webhook.open("POST",WebhookGrabaciones);webhook.send(webhookData)}}
function sendGoalAnnouncements(){const goalAnnouncementsSection=goalAnnouncementsSum.join('\n');const embed={title:"📜 RESUMEN DEL PARTIDO:",color:0x00ff77,description:goalAnnouncementsSection};const webhookData=new FormData();webhookData.append("payload_json",JSON.stringify({embeds:[embed]}));const webhook=new XMLHttpRequest();webhook.open("POST",WebhookGrabaciones);webhook.send(webhookData)}
const PUNTOS_POR_GOL=1;const PUNTOS_POR_ASISTENCIA=0.7;let totalPlayerGoals={};let totalPlayerAssists={};let totalPlayerPoints={};let playerGoals={};let playerAssists={};let playerPoints={};let playerGoals2={};let playerAssists2={};let playerPoints2={};let playerFiguraCount={};function calcularPuntosTotales(goals,assists){const puntosPorGol=goals*PUNTOS_POR_GOL;const puntosPorAsistencia=assists*PUNTOS_POR_ASISTENCIA;return puntosPorGol+puntosPorAsistencia}
function actualizarPuntos(jugador){const CantidadGolesEnElPartido=playerGoals[jugador]||0;const CantidadAsistenciasEnElPartido=playerAssists[jugador]||0;const CantidadGolesTotales=playerGoals2[jugador]||0;const CantidadAsistenciasTotales=playerAssists2[jugador]||0;const points=calcularPuntosTotales(CantidadGolesEnElPartido,CantidadAsistenciasEnElPartido);totalPlayerGoals[jugador]=CantidadGolesTotales;totalPlayerAssists[jugador]=CantidadAsistenciasTotales;totalPlayerPoints[jugador]=points;playerPoints[jugador]=points;localStorage.setItem('totalPlayerGoals',JSON.stringify(totalPlayerGoals));localStorage.setItem('totalPlayerAssists',JSON.stringify(totalPlayerAssists));localStorage.setItem('totalPlayerPoints',JSON.stringify(totalPlayerPoints))}
let golesPartido=[];function obtenerFigurasBase(){let maxPoints=-1;let posiblesFiguras=[];for(const jugador in playerPoints){const pts=playerPoints[jugador];if(pts>maxPoints){maxPoints=pts;posiblesFiguras=[jugador]}else if(pts===maxPoints){posiblesFiguras.push(jugador)}}
if(posiblesFiguras.length===1)return posiblesFiguras;const jugadores=room.getPlayerList().filter(p=>p.id!==0);let equipo1=[],equipo2=[];posiblesFiguras.forEach(nombre=>{let jugadorObj=jugadores.find(j=>j.name===nombre);if(jugadorObj){if(jugadorObj.team===1)equipo1.push(nombre);else if(jugadorObj.team===2)equipo2.push(nombre);}});const marcador=room.getScores();let equipoGanador=marcador.red>marcador.blue?1:marcador.blue>marcador.red?2:0;if(equipoGanador===0)return posiblesFiguras;if(equipoGanador===1&&equipo1.length>0)return equipo1;if(equipoGanador===2&&equipo2.length>0)return equipo2;return posiblesFiguras}
function calcularFigura(posiblesFiguras){function estaEnFiguras(nombre){return posiblesFiguras.includes(nombre)}
let ultimoEmpateIndex=-1;let golesEq1=0,golesEq2=0;for(let i=0;i<golesPartido.length;i++){if(golesPartido[i].equipo===1)golesEq1++;else if(golesPartido[i].equipo===2)golesEq2++;if(golesEq1===golesEq2)ultimoEmpateIndex=i}
let golVictoria=golesPartido[ultimoEmpateIndex+1]||null;if(golVictoria&&estaEnFiguras(golVictoria.goleador))return golVictoria.goleador;if(golVictoria?.asistidor&&estaEnFiguras(golVictoria.asistidor))return golVictoria.asistidor;if(ultimoEmpateIndex>=0){let golEmpate=golesPartido[ultimoEmpateIndex];if(golEmpate&&estaEnFiguras(golEmpate.goleador))return golEmpate.goleador;if(golEmpate?.asistidor&&estaEnFiguras(golEmpate.asistidor))return golEmpate.asistidor}
for(let g of golesPartido){if(estaEnFiguras(g.goleador))return g.goleador}
return posiblesFiguras[0]}
function getFiguraDelPartido(){let posiblesFiguras=obtenerFigurasBase();let figura=calcularFigura(posiblesFiguras);playerFiguraCount[figura]=(playerFiguraCount[figura]||0)+1;localStorage.setItem('playerFiguraCount',JSON.stringify(playerFiguraCount));return figura}
function getFiguraDelPartido2(){let posiblesFiguras=obtenerFigurasBase();return calcularFigura(posiblesFiguras)}
function enviarAnuncioFiguraDelPartido(figuraDelPartido){room.sendAnnouncement(`🌟 FIGURA DEL PARTIDO: ${figuraDelPartido}`,null,0xFFD700,'bold',1)}
var opciones=[{partido:function(){redAngle=180;redTextColor=0xf5b606;redColor=[0x011ede,0xc80056];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="BARCELONA";blueAngle=73;blueTextColor=0x0f2145;blueColor=[0xffc10a,0xffffff,0xffffff];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="REAL MADRID"},demanda:12000},{partido:function(){redAngle=30;redTextColor=0x231f20;redColor=[0xffffff,0xee1b2c,0xffffff];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="RIVER PLATE";blueAngle=90;blueTextColor=0xFFFFFF;blueColor=[0x033f86,0xfab900,0x033f86];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="BOCA JRS."},demanda:25000},{partido:function(){redAngle=90;redTextColor=0xffffff;redColor=[0xE20E0E];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="MANCHESTER UNITED";blueAngle=90;blueTextColor=0xffffff;blueColor=[0x6CABDD];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="MANCHESTER CITY"},demanda:4000},{partido:function(){redAngle=90;redTextColor=0xFFFFFF;redColor=[0xdc052d,0xed0038,0xed0038];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="BAYERN  DE MUNICH";blueAngle=90;blueTextColor=0x1d1d1b;blueColor=[0x1d1d1b,0xfad515,0xfad515];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="BORUSSIA DORTMUND"},demanda:2500},{partido:function(){redAngle=180;redTextColor=0xffffff;redColor=[0xC90016,0x000000,0xC90016];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="AC MILAN";blueAngle=180;blueTextColor=0xFFFFFF;blueColor=[0x004D98,0x000000,0x004D98];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="INTER MILAN"},demanda:5500},{partido:function(){redAngle=180;redTextColor=0x00a032;redColor=[0xffcd00];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="BRASIL";blueAngle=180;blueTextColor=0x1e2930;blueColor=[0x98cef0,0xffffff,0x98cef0];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="ARGENTINA"},demanda:18500},{partido:function(){redAngle=60;redTextColor=0xffffff;redColor=[0xec1c24];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="INDEPENDIENTE";blueAngle=90;blueTextColor=0xFFFFFF;blueColor=[0x033f86,0xfab900,0x033f86];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="BOCA JRS."},demanda:9200},{partido:function(){redAngle=60;redTextColor=0xffffff;redColor=[0xec1c24];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="INDEPENDIENTE";blueAngle=180;blueTextColor=0x002942;blueColor=[0x00a5e3,0xFFFFFF,0x00a5e3];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="RACING"},demanda:9100},{partido:function(){redAngle=0;redTextColor=0xffffff;redColor=[0xee1d23,0x000000];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="NEWELLS";blueAngle=180;blueTextColor=0xFFFFFF;blueColor=[0xfcd828,0x144178,0xfcd828];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="ROSARIO CENTRAL"},demanda:7200},{partido:function(){redAngle=180;redTextColor=0x1e2930;redColor=[0xffffff,0x98cef0,0xffffff];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="ARGENTINA";blueAngle=90;blueTextColor=0x000000;blueColor=[0x55B5E5];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="URUGUAY"},demanda:11000},{partido:function(){redAngle=180;redTextColor=0xFFFFFF;redColor=[0xffca00,0x000000,0xffca00];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="PEÑAROL";blueAngle=55;blueTextColor=0xd0142c;blueColor=[0x003895,0xFFFFFF,0x003895];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="NACIONAL (UY)"},demanda:22000},{partido:function(){redAngle=90;redTextColor=0xffffff;redColor=[0xdd0125,0x211f25,0xdd0125];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="FLAMENGO";blueAngle=90;blueTextColor=0xFFFFFF;blueColor=[0x006337,0x00713d,0x00713d];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="PALMEIRAS"},demanda:9000},{partido:function(){redAngle=130;redTextColor=0xf9cd39;redColor=[0xa92121,0xa92121,0x01553e];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="PORTUGAL";blueAngle=180;blueTextColor=0x1e2930;blueColor=[0x98cef0,0xffffff,0x98cef0];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="ARGENTINA"},demanda:12000},{partido:function(){redAngle=15;redTextColor=0x000000;redColor=[0xFCB2CB];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="INTER MIAMI";blueAngle=15;blueTextColor=0x30457C;blueColor=[0xFCE501,0xFCE501,0x081C4E];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="AL-NASSR"},demanda:13000},{partido:function(){redAngle=90;redTextColor=0xFFFFFF;redColor=[0x000000,0xdd0000,0xffce00];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="ALEMANIA";blueAngle=180;blueTextColor=0x1e2930;blueColor=[0x98cef0,0xffffff,0x98cef0];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="ARGENTINA"},demanda:11000},{partido:function(){redAngle=90;redTextColor=0xe9ac04;redColor=[0xffffff,0x4b2d11,0xffffff];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="PLATENSE";blueAngle=90;blueTextColor=0xFFFFFF;blueColor=[0x033f86,0xfab900,0x033f86];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="BOCA JRS."},demanda:7500},{partido:function(){redAngle=180;redTextColor=0xffffff;redColor=[0xe62c2f,0x213c57,0xe62c2f];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="SAN LORENZO";blueAngle=90;blueTextColor=0xFFFFFF;blueColor=[0x033f86,0xfab900,0x033f86];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="BOCA JRS."},demanda:8000},{partido:function(){redAngle=180;redTextColor=0x1e2930;redColor=[0xffffff,0x89d1e9,0xffffff];room.setTeamColors(1,redAngle,redTextColor,redColor);teamRed="ARGENTINA";blueAngle=90;blueTextColor=0xc9ae77;blueColor=[0x242963,0x23255e,0x20235a];room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamBlue="FRANCIA"},demanda:10000},];function toggleSwapColors(){cambioCami=!cambioCami;if(cambioCami){room.sendAnnouncement("🔄👕 Cambio de Camisetas Automático ACTIVADO ✅",null,0x00ff5e,"bold",2)}else{room.sendAnnouncement("🔄👕 Cambio de Camisetas Automático DESACTIVADO ❌",null,0xff363e,"bold",2)}}
var lastFiveGames=[];function shuffleOptions(){let weightedOptions=[];opciones.forEach(option=>{for(let i=0;i<option.demanda;i++){weightedOptions.push(option)}});let selectedOption=null;do{weightedOptions.sort(function(){return 0.5-Math.random()});weightedOptions.sort(function(){return 0.5-Math.random()});selectedOption=weightedOptions[0]}while(lastFiveGames.includes(selectedOption)&&lastFiveGames.length>=5);selectedOption.partido();lastFiveGames.push(selectedOption);if(lastFiveGames.length>5){lastFiveGames.shift()}}
function swapTeamColors(){if(cambioCami){shuffleOptions();let selectedOption=lastFiveGames[lastFiveGames.length-1];selectedOption.partido()}}
var playerCurrentMatchTime={};var matchStartTime=Date.now();let TiempodeIniciodePartido=0;let lastKnownMatchTime=0;let currentRedScore=0;let currentBlueScore=0;let TiempoCumplidoGanaSigue=!1;let ultimaPosicionXPelota=0;let partidoEmpatado=!1;var gameRestarting=!1;room.onGameStart=function(byPlayer){TiempoCumplidoGanaSigue=!1;ultimaPosicionXPelota=0;partidoEmpatado=!1;const scores=room.getScores();if(scores)duracionPartido=scores.timeLimit;lastKnownMatchTime=0;playerMatchTime={};room.getPlayerList().forEach(player=>{if(player.team!==0){playerMatchTime[player.id]={joinTime:0,totalTime:0}}});currentRedScore=0;currentBlueScore=0;if(CamisetasGanaSigue){if((camisetaRedActual==="riv/titular/red"&&camisetaBlueActual==="rma/titular/blue")||(camisetaRedActual==="rma/titular/red"&&camisetaBlueActual==="riv/titular/blue")){camisetaBlueActual=elegirNuevaCamiseta(camisetaBlueActual,"blue",camisetaRedActual)}
if((camisetaRedActual==="pen/titular/red"&&camisetaBlueActual==="cen/titular/blue")||(camisetaRedActual==="cen/titular/red"&&camisetaBlueActual==="pen/titular/blue")){camisetaBlueActual=elegirNuevaCamiseta(camisetaBlueActual,"blue",camisetaRedActual)}
if((camisetaRedActual==="pen/titular/red"&&camisetaBlueActual==="bvb/titular/blue")||(camisetaRedActual==="bvb/titular/red"&&camisetaBlueActual==="pen/titular/blue")){camisetaBlueActual=elegirNuevaCamiseta(camisetaBlueActual,"blue",camisetaRedActual)}
if((camisetaRedActual==="pen/titular/red"&&camisetaBlueActual==="nas/titular/blue")||(camisetaRedActual==="nas/titular/red"&&camisetaBlueActual==="pen/titular/blue")){camisetaBlueActual=elegirNuevaCamiseta(camisetaBlueActual,"blue",camisetaRedActual)}
asignarCamisetaPorClave(camisetaRedActual);asignarCamisetaPorClave(camisetaBlueActual);room.sendAnnouncement("⚽ Cambio automático de camisetas aplicado en inicio de partido",null,0x00FFFF,"bold",2)}
cantidadDeCambios={};playerCurrentMatchTime={};room.getPlayerList().forEach(player=>{if(player.team!==0){playerCurrentMatchTime[player.id]={joinTime:Date.now(),totalTime:0}}});if(gameRestarting)return;game=new Game();matchStartTime=Date.now();playerCurrentMatchTime={};room.getPlayerList().forEach(player=>{if(player.team!==0){playerCurrentMatchTime[player.id]={joinTime:Date.now(),totalTime:0}}});swapTeamColors();ArqueroRED=null;ArqueroBLUE=null;goalAnnouncementsSum=[];if(!GrabarTodo){room.sendAnnouncement("🎮 La partida está siendo grabada. 🎥");room.startRecording()}
posesionEquipoA=0;posesionEquipoB=0;let players=room.getPlayerList();let redTeam=players.filter(p=>p.team===1);let blueTeam=players.filter(p=>p.team===2);let redPlayers=redTeam.map(p=>`${p.name}`);let bluePlayers=blueTeam.map(p=>`${p.name}`);room.sendAnnouncement(`Formación `+teamRed+`: `+` ${redPlayers.join(' - ')}`,null,0xd28e9b,'bold',1);room.sendAnnouncement(`Formación `+teamBlue+`: `+` ${bluePlayers.join(' - ')}`,null,0x8ed2cc,'bold',1);tookASize={};[redTeam,blueTeam]=whichTeam();ballCarrying=initBallCarrying(redTeam,blueTeam);timeOnHalves=[0,0];isTimeAddedShownseis=!1;DetenerAnuncio=!1;DetenerAviso=!1;DetenerAviso2=!1;ReiniciarStatsEnCero=!1;var _0xefa5db=_0x3c81f9;if(RSRMap==!1){game=new Game()}
if(RSRMap==!0){currentMap="⚽ Real Soccer";if(byPlayer==null){game=new Game()}else{if(room.getScores().timeLimit!=0){gameTime=room.getScores().timeLimit/60}else{gameTime=10}
gameRestarting=!0;room.stopGame();room.setTimeLimit(0);room.startGame();setTimeout(()=>{gameRestarting=!1;announce("Duración del juego establecida en "+gameTime+" minutos")},500)}}}
function formatTime(segundos){const min=Math.floor(segundos/60);const sec=Math.floor(segundos%60);const ms=Math.floor((segundos-Math.floor(segundos))*1000);return `${min} min ${sec} seg ${ms} ms`}
room.onGameStop=function(byPlayer){room.getPlayerList().forEach(player=>{if(player.team!==0){registerPlayerTime(player.id,0)}});const elapsedTime=lastKnownMatchTime;const timeLimitMinutes=duracionPartido/60;const timeLimitInSeconds=duracionPartido;const elapsedMinutes=Math.floor(elapsedTime/60);const elapsedSeconds=Math.floor(elapsedTime%60);room.sendAnnouncement(`⏱️ Tiempo Establecido: ${timeLimitMinutes}min | Jugado: ${elapsedMinutes}:${elapsedSeconds.toString().padStart(2, '0')}`,null,0xFFFF00);room.sendAnnouncement("Duración oficial del partido: "+formatTime(elapsedTime));const resumen=room.getPlayerList().map(player=>{const tiempo=playerMatchTime[player.id]?.totalTime||0;if(tiempo>0){return `${player.name}: ${formatTime(tiempo)}`}
return null}).filter(Boolean).join("-- ");if(resumen.length>0){room.sendAnnouncement(resumen)}
if(CamisetasGanaSigue&&timeLimitMinutes>0&&elapsedTime>=timeLimitInSeconds){if(currentRedScore===currentBlueScore){camisetaRedActual=elegirNuevaCamiseta(camisetaRedActual,"red");camisetaBlueActual=elegirNuevaCamiseta(camisetaBlueActual,"blue");const mins=Math.floor(elapsedTime/60);const secs=Math.floor(elapsedTime%60).toString().padStart(2,'0');room.sendAnnouncement(`⚽ Empate ${currentRedScore}-${currentBlueScore} (${mins}:${secs}) → Cambio de camisetas`,null,0x00FF00,"bold",2)}}
const gameTimeInSeconds=gameTime*60;if(THERealFutsalMap&&CamisetasGanaSigue&&elapsedTime>=gameTimeInSeconds){if(currentRedScore===currentBlueScore){camisetaRedActual=elegirNuevaCamiseta(camisetaRedActual,"red");camisetaBlueActual=elegirNuevaCamiseta(camisetaBlueActual,"blue");const mins=Math.floor(elapsedTime/60);const secs=Math.floor(elapsedTime%60).toString().padStart(2,'0');room.sendAnnouncement(`⚽ [THERealFutsal] Empate ${currentRedScore}-${currentBlueScore} (${mins}:${secs}) → Cambio de camisetas`,null,0x00FF00,"bold",2)}}
const currentTime=Date.now();for(let playerId in playerCurrentMatchTime){const data=playerCurrentMatchTime[playerId];if(data.joinTime){playerCurrentMatchTime[playerId].totalTime+=Math.floor((currentTime-data.joinTime)/1000)}}
PartidoArrancado=!1;whoTouchedLast=undefined;if(byPlayer==!0){room.setTimeLimit(gameTime)}}
room.onPlayerBallKick=function(player){if(player.team===1){equipoAzulPosesion++}else if(player.team===2){equipoRojoPosesion++}
game.rsTouchTeam=player.team;game.updateLastKicker(player.id,player.name,player.team);if(game.rsReady==!0){var players=room.getPlayerList().filter((player)=>player.team!=0);players.forEach(function(player){if(room.getPlayerDiscProperties(player.id).invMass.toFixed(1)!=0.3&&RSRMap==!0){room.setPlayerDiscProperties(player.id,{invMass:0.3})}})}
if(combaMode){room.setDiscProperties(0,{xgravity:-room.getPlayerDiscProperties(player.id).yspeed/30,ygravity:-room.getPlayerDiscProperties(player.id).yspeed/30});setTimeout(()=>{room.setDiscProperties(0,{xgravity:0,ygravity:0})},500)}
if(powerShotMode==!0){if(game.powershotCounter>52){if(JabulaniMode){room.setDiscProperties(0,{xgravity:-room.getPlayerDiscProperties(player.id).yspeed/30,ygravity:-room.getPlayerDiscProperties(player.id).yspeed/30});setTimeout(()=>{room.setDiscProperties(0,{xgravity:0,ygravity:0})},500)}
game.rsSwingTimer=50;room.sendAnnouncement("DISPARO POTENTE REALIZADO!",player.pm,0x33dddd,"bold",1)}
game.powershotCounter=0;game.powershotID=0;game.powershotTrigger=!1;if(RSRMap==!0){if(parseFloat(room.getDiscProperties(0).invMass.toFixed(2))!=1.05){room.setDiscProperties(0,{invMass:1.05,color:`0x${PelotaRS}`})}}else{if(parseFloat(room.getDiscProperties(0).invMass.toFixed(2))!=1.5){room.setDiscProperties(0,{invMass:1.5,color:`0x${PelotaFutsal}`})}}}
if(game.rsReady==!0&&RSRMap==!1){var players=room.getPlayerList().filter((player)=>player.team!=0);players.forEach(function(player){if(room.getPlayerDiscProperties(player.id).acceleration.toFixed(1)!=0.11){room.setPlayerDiscProperties(player.id,{"bCoef":0,"acceleration":0.11,"kickingAcceleration":0.083,"kickStrength":5})}})}
if(game.rsReady==!0&&RSRMap==!0){var players=room.getPlayerList().filter((player)=>player.team!=0);players.forEach(function(player){if(room.getPlayerDiscProperties(player.id).invMass.toFixed(1)!=0.3){room.setPlayerDiscProperties(player.id,{invMass:0.3})}})}
if(game.rsActive==!1&&game.rsReady==!0&&(game.rsCorner==!0||game.rsGoalKick==!0)){game.boosterState=!0;game.rsActive=!0;game.rsReady=!1;room.setDiscProperties(1,{x:2000,y:2000});room.setDiscProperties(2,{x:2000,y:2000});room.setDiscProperties(0,{color:`0x${PelotaRS}`});game.rsTimer=1000000;game.warningCount++;if(game.rsCorner==!0){if(room.getDiscProperties(0).y<0){room.setDiscProperties(0,{xgravity:room.getPlayerDiscProperties(player.id).xspeed/35*-1,ygravity:0.05})}else{room.setDiscProperties(0,{xgravity:room.getPlayerDiscProperties(player.id).xspeed/35*-1,ygravity:-0.05})}}
if(game.rsGoalKick==!0){room.setDiscProperties(0,{xgravity:0,ygravity:room.getPlayerDiscProperties(player.id).yspeed/40*-1})}
game.rsCorner=!1;game.rsGoalKick=!1;game.rsCorner2=!1;game.rsGoalKick2=!1;game.outStatus=""}
if(game.outStatus=="redThrow"||game.outStatus=="blueThrow"){game.throwinKicked=!0}
if(map!=="RSR"){}}
var webhookPass='https://discord.com/api/webhooks/816063918781890580/hBOBmjKaR4sJHWNnK-MZIo68r7Np3bxtHf5N43VI-rVkyEYDW6axIXAHKkEDWe4190L3';var ModoChatPausado=[];const CensurarMensajes=['rs','con','real','soccer','creo',' con','  con','   con','    con',' rs','  rs','   rs','    rs','R.S','R.S C.O.N T.I.A','r.s c.o.n t.i.a','c.on','co.n','c.o.n','C.ON','CO.N','C.O.N','r.s c.o.n t.i.a','R_S','R_S C_O_N T_I_A','r_s c_o_n t_i_a','c_on','co_n','c_o_n','C_ON','CO_N','C_O_N','r_s c_o_n t_i_a','R-S C-O-N T-I-A','r-s c-o-n t-i-a','c-on','co-n','c-o-n','C-ON','CO-N','C-O-N','C.REO','CR.EO','CRE.O','c.reo','cr.eo','cre.o','C-REO','CR-EO','CRE-O','c-reo','cr-eo','cre-o','c_reo','cr_eo','cre_o','C_REO','CR_EO','CRE_O','r.s','on','C.on','mogólico','mógolico','mogolíco','mogolicó','mógólícó','MOGÓLICO','MÓGOLICO','MOGOLÍCO','MOGOLICÓ','MÓGÓLÍCÓ','m.ogolico','mo.golico','mog.olico','mogo.lico','mogol.ico','mogoli.co','mogolic.o','M.OGOLICO','MO.GOLICO','MOG.OLICO','MOGO.LICO','MOGOL.ICO','MOOGOLI.CO','MOGOLIC.O','m-ogolico','mo-golico','mog-olico','mogo-lico','mogol-ico','mogoli-co','mogolic-o','M-OGOLICO','MO-GOLICO','MOG-OLICO','MOGO-LICO','MOGOL-ICO','MOOGOLI-CO','MOGOLIC-O','m_ogolico','mo_golico','mog_olico','mogo_lico','mogol_ico','mogoli_co','mogolic_o','M_OGOLICO','MO_GOLICO','MOG_OLICO','MOGO_LICO','MOGOL_ICO','MOOGOLI_CO','MOGOLIC_O','dawn','daun','doun','DÓWN','dówn','dáun','daún','dáún','DAWN','cancerígeno','CANCERÍGENO'];function filter(message){message=message.toLowerCase();message=message.replace(/\s/g,'');message=message.replace(/\./g,' ')
if(message.includes("ఌ")||message.includes("甈")||message.includes("㐷")||message.includes("怅")||message.includes("瘪")||message.includes("⑸")||message.includes("㬆")||message.includes("権")||message.includes("怜")||message.includes("∯")||message.includes("㤒")||message.includes("䉊")||message.includes("匊")||message.includes("ᙻ")||message.includes("ൽ")||message.includes("ᴧ")||message.includes("爂")||message.includes("爇")||message.includes("त")||message.includes("権")||message.includes("怜")||message.includes("∯")||message.includes("㤒")||message.includes("﷽")||message.includes("m0g0l1c")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("﷽")||message.includes("䐃")||message.includes("䉧")||message.includes("瀩")||message.includes("琐")||message.includes("䳌")||message.includes("氊")||message.includes("瘠")||message.includes("銡")||message.includes("歘")||message.includes("桋")||message.includes("鼜")||message.includes("窭")||message.includes("谡")||message.includes("輽")||message.includes("怼")||message.includes("霽")||message.includes("椣")||message.includes("䖎")||message.includes("蘗")||message.includes("徠")){return!0}else return!1}
function CensuradorDeSpammeros(message){if(CensurarMensajes.includes(message)){return!0}else return!1}
function pmFun(player,message){var pm=message.substr(4);var index=message.split(" ").slice(1);var playerID=index[0]
var message2=message.substr(5);var message3="[ ID: "+player.id+" - 💬🔒] "+player.name+":"+message2;console.log(playerID);console.log(index);console.log(message);console.log(message2);console.log(message3);room.sendAnnouncement(message3,parseInt(playerID),0xc7a2ff,"bold",2);var players=room.getPlayerList().filter((player)=>player.id!=0);if(players.find((player=>player.id===playerID))){room.sendAnnouncement("❌ Ese ID no funciona, escribe !ids para ver los ID de los jugadores del host.",player.id,0xff3c3c,"normal",0)}else{room.sendAnnouncement("[📨] Mensaje Privado enviado con éxito! ✅",player.id,0x3fff6c,"normal",0)};return!1}
setInterval(function(player,message){var isRoomMuted=!1;isRoomMuted=!1;mutedPlayers=[];room.sendAnnouncement('✅ 💬 Desmutee a todos los jugadores',null,0xd733ff,"normal",0)},1800000);function ListaDeJugadoresFun(player){Jugadores=room.getPlayerList();playersString="";let conn=connections.find(a=>a[1]===player.conn);for(i=0;i<Jugadores.length;i++){playersString=playersString+"      📛 NICKNAME: "+Jugadores[i].name+"          🆔 ID:  "+Jugadores[i].id+"\n"}
room.sendAnnouncement("ID DE LOS JUGADORES DEL HOST:",player.id,0xFFFF00,"normal",1);room.sendAnnouncement(playersString,player.id,0xFFFF00,"normal",1)}
function helpFun(player){var message='📣 COMANDOS DISPONIBLES 📣:\n\n';message='⯌ 💬 CHAT PRIVADO:\n';message+=' CON EQUIPO: "t + Mensaje"    -   CON JUGADOR: "@@Nickname + Mensaje"\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1);setTimeout(function(){message='⯌ 👋 SALIR DEL HOST: !nv    !acomer    !adormir   !bb\n';message+='   Salir de la sala y volver al lobby.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},3000);setTimeout(function(){message='⯌ ❌ VOTAR BAN:      "!expulsar + IDdelJugador"  |    VOTAR JUGADOR PARA QUE SEA ADMIN: "!admin + IDdelJugador" \n';message+='   Inicia una votación para expulsar o hacer administrador a un jugador, para ver los IDs de los jugadores escribe !ids.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},6000);setTimeout(function(){message='👑 ADMINISTRACIÓN DEL HOST: !adminhelp      !mapas      !camisetas      !llamaradmins      !votarmapa" \n';message+='   Utiliza !adminhelp para ver los comandos para Admins. ¿Quieres llamar a un admin? utiliza !llamaradmins\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},9000);setTimeout(function(){message='⯌ 📊 TABLAS Y ESTADÍSTICAS: !me      !stats      !goleadores    !asistidores    !promedios      !mvp      !ganadores      !victorias      !presencias      !viciosos      !racha-actual      !racha-historica      !goles-recibidos      !vallas-invictas      !promedios-recibidos\n';message+='   !me (para ver tus estadísticas) | !stats ID (ver las estadísticas de otro jugador) | Ejemplo: !stats 15 \n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},12000);setTimeout(function(){message='⯌ ACTIVAR Y DESACTIVAR AFK: !afk\n';message+='   Cambiar tu estado a AFK (inactivo) o volver a estar activo.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},15000);setTimeout(function(){message='⯌ 📏 CAMBIAR DE TAMAÑO: "!size + Número"\n';message+='   Cambiar el tamaño del jugador (Número del '+TamanoMinimoPermitido+' al '+TamanoMaximoPermitido+').\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},18000);setTimeout(function(){message='⯌ OTROS:      !poss      !avatar       !numeros      !script      !tutorial      !ids      !niveles\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},21000);setTimeout(function(){message='⯌ ⌚ VER DURACIÓN DEL PARTIDO: !time\n';message+='   Ver la duración establecida del partido y los minutos o segundos de tiempo extra.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},24000);setTimeout(function(){message='⯌ 🏆 TORNEO: !resultados\n';message+='   Ver los resultados del torneo actual.\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},27000);setTimeout(function(){message='⯌ AVATAR: !avatar\n';message+='   Ejemplo de uso: !avatar HO,LA | Ejemplo 2: !avatar 😈,👿\n\n';room.sendAnnouncement(message,player.id,0xffffff,"small-bold",1)},30000)}
function TutorialFun(player){room.sendAnnouncement('CREÁ TU PROPIO HOST CON BOT:',player.id,0xbfff35,"normal",0);room.sendAnnouncement('VIDEO TUTORIAL: https://youtu.be/Mkh7WcN8pSg',player.id,0xbfff35,"normal",0)}
function ResultadosFun(player){room.sendAnnouncement('🏆 Tabla de posiciones: 🔗'+ChallongeLink+'/standings',player.id,0xbfff35,"small-bold",0)}
function FixtureFun(player){room.sendAnnouncement('🏆 Fixture: 🔗'+ChallongeLink,player.id,0xbfff35,"small-bold",0)}
function ReglamentoFun(player){room.sendAnnouncement('📜 𝐑𝐄𝐆𝐋𝐀𝐌𝐄𝐍𝐓𝐎 𝐃𝐄𝐋 𝐓𝐎𝐑𝐍𝐄𝐎',player.id,0xbfff35,"small-bold",0);room.sendAnnouncement(regla1,player.id,0xea9999,"small-bold",0);room.sendAnnouncement(regla2,player.id,0xffe800,"small-bold",0);room.sendAnnouncement(regla3,player.id,0xff2e2e,"small-bold",0);room.sendAnnouncement(regla4,player.id,0x2efeb6,"small-bold",0);room.sendAnnouncement(regla5,player.id,0x94e5ff,"small-bold",0)}
function TenisFun(player){room.sendAnnouncement('PUEDES ELEGIR:',player.id,0xE5FF00,"normal",0);room.sendAnnouncement('!tenis-ladrillo',player.id,0xFFAA00,"normal",0);room.sendAnnouncement('!tenis-cemento',player.id,0x0088FF,"normal",0);room.sendAnnouncement('!tenis-pasto',player.id,0x6FFF00,"normal",0)}
function resetFun(player){if(player.admin==!0){room.stopGame();room.startGame()}}
function leaveFun(player,message){if(message=="!nv")
room.kickPlayer(player.id,"Adiós vaquero! 👋",!1);else if(message=="!adormir")
room.kickPlayer(player.id,"💤 Buenas noches!! <3",!1);else if(message=="!bb")
room.kickPlayer(player.id,"👋 Andá máquina nomás, nadie te detiene",!1);else if(message=="!acomer")
room.kickPlayer(player.id,"😋 Bon appetit ! 🍽",!1);}
function swapFun(player){if(player.admin==!0){var players=room.getPlayerList().filter((player)=>player.id!=0);if(players.length==0)return!1;players.forEach(function(player){if(player.team==1){room.setPlayerTeam(player.id,2)}
if(player.team==2){room.setPlayerTeam(player.id,1)}});announce("🔄 Los equipos han cambiado")}else{whisper("Comando solo de administrador",player.id)}}
function MapasFun(player){room.sendAnnouncement('FUTSAL 🟡:  !entrenamientofutsal - !futx2 - !futx3 - !futx4 - !futx5 - !futx5cesped - !futx7 - !realfutsal',player.id,0xd32668,"normal",0);room.sendAnnouncement('CAMPEONES 🏆: !campeones - !premios',player.id,0xd32668,"normal",0)}
function sendAdminMessage(player,message,delay){setTimeout(function(){room.sendAnnouncement(message,player.id,0xffe400,"small",0)},delay)}
function adminHelpFun(player){room.sendAnnouncement('🌟 ¡Bienvenido, administrador! Aquí tienes los comandos que puedes usar:',player.id,0xffbb00,"normal",0);sendAdminMessage(player,'J U G A D O R E S -- A F K ⚡',2000);sendAdminMessage(player,'Ver jugadores AFK: `!afks`',4000);sendAdminMessage(player,'Kickear jugadores AFK: `!kickafks`',6000);sendAdminMessage(player,'B A N E O -- Y -- D E S B A N E O 🚫',8000);sendAdminMessage(player,'Banear IP: `!banip + IpDeJugador`',10000);sendAdminMessage(player,'Desbanear IP: `!unbanip + IpDeJugador`',12000);sendAdminMessage(player,'Desbanear todas las IPs baneadas: `!unbanallips`',14000);sendAdminMessage(player,'Desbanear a todos los jugadores baneados: `!clearbans`',16000);sendAdminMessage(player,'S I L E N C I A R -- Y  -- D E S M U T E A R 🔇',18000);sendAdminMessage(player,'Mutear jugador: `!mute + ID`',20000);sendAdminMessage(player,'Desmutear jugador: `!unmute + ID`',22000);sendAdminMessage(player,'Desmutear a todos los jugadores muteados: `!unmuteall`',24000);sendAdminMessage(player,'Silenciar palabras: `!silenciar + palabra`',26000);sendAdminMessage(player,'Desilenciar palabras: `!desilenciar + palabra`',28000);sendAdminMessage(player,' M O D O S -- D E -- J U E G O 🎮',30000);sendAdminMessage(player,'Activar/Desactivar modo "Juegan Todos": `!juegantodos`',32000);sendAdminMessage(player,'Activar modo "Juegan Algunos": `!juegan <cantidad de jugadores máxima por equipo>`',34000);sendAdminMessage(player,'Desactivar modo "Juegan Algunos": `!juegan-off`',36000);sendAdminMessage(player,'Activar/Desactivar sistema "Gana Sigue": `!ganasigue`',38000);sendAdminMessage(player,'Activar/Desactivar el equilibrio equipos automático: `!auto_balance`',40000);sendAdminMessage(player,'Activar/Desactivar Power Shot: `!powershot`',42000);sendAdminMessage(player,'Activar/Desactivar Modo Automatizado: `!automatizado`',44000);sendAdminMessage(player,'Activar/Desactivar Modo FairPlay: `!fairplay`',46000);sendAdminMessage(player,'Activar/Desactivar Gol de Oro: `!goldeoro`',48000);sendAdminMessage(player,' H O S T -- C O N -- C O N T R A S E Ñ A 🔒',50000);sendAdminMessage(player,'Colocar contraseña: `!set_password + Contraseña`',52000);sendAdminMessage(player,'Quitar contraseña: `!clear_password`',54000);sendAdminMessage(player,' C O M A N D O S -- D E L -- J U E G O 🎲',56000);sendAdminMessage(player,'Reiniciar partido: `!rr`',58000);sendAdminMessage(player,'(SÓLO PARA RS) Cambiar la cantidad de minutos de juego: `!minutos + CantidadDeMinutos`',60000);sendAdminMessage(player,'Mezclar aleatoriamente los equipos: `!random`',62000);sendAdminMessage(player,'Cambiar de lado a los jugadores: `!swap`',64000);sendAdminMessage(player,'`!camisetas` (Ver camisetas disponibles)',74000);sendAdminMessage(player,'Activar/Desactivar el cambio automático de las camisetas: `!clubcolors`',76000);sendAdminMessage(player,'Invertir camisetas de los equipos: `!swapcolors`',78000);sendAdminMessage(player,'Equilibrar equipos por los niveles de los jugadores: `!equilibrar`',80000);sendAdminMessage(player,'Publicidad: `!publicidad <intervalo de minutos> <mensaje>`',82000);sendAdminMessage(player,'COOLDOWN:\n!spam_limit <Cantidad de Mensajes permitidos antes de activar el cooldown> | EJEMPLO: !spam_limit 5\n!cooldown_time <Cantidad de segundos de cooldown después de enviar muchos mensajes> | EJEMPLO: !cooldown_time 10\n!toggle_cooldown Activar/Desactivar Cooldown',82000);sendAdminMessage(player,'Establecer el tiempo de esperar entre cada llamada a los admins: `!minutosllamada <Cantidad de Minutos>`',86000);sendAdminMessage(player,'TAMAÑO JUGADORES: !tamañominimo <número> (Ej: !tamañominimo 10 | !tamañomaximo <número> (Ej: !tamañomaximo 25) | !limitesize <número>` (Ej: !limitesize 2)',88000);sendAdminMessage(player,'O F I C I A L E S:',90000);sendAdminMessage(player,'Activar/Desactivar las firmas: `!ofi`',92000);sendAdminMessage(player,'Para que los jugadores firmen: !firmo',94000)}
function clearbansFun(player){if(player.admin==!0){room.clearBans();room.sendAnnouncement(" [🗑️ 🧹]  Los bans han sido removidos por "+player.name+".",player.id,0xEB172D,"normal",0)}}
function setpasswordFun(player,message){if(player.admin==!0){code=message.substr(14)
room.setPassword(code);room.sendAnnouncement("✳🔒 - "+player.name+" le ha colocado una contraseña al host.",null,0xff8400,'normal',2);return!1}}
function clearpasswordFun(player,message){if(player.admin==!0){room.setPassword();room.sendAnnouncement("🆓🔓 - "+player.name+" ha retirado la contraseña del host.",null,0xff8400,'normal',2);return!1}}
function ReglasFun(player){room.sendAnnouncement("📜 REGLAS DE LOS PENALES:",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒈ Sólo puede haber 1️⃣ (un) arquero.",player.id,0x00FFBB,"normal",1);room.sendAnnouncement("⒉ Los jugadores deben patear en orden. ✨",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒊ El jugador 𝐍𝐎 puede  ″𝙰𝙼𝙰𝙶𝙰𝚁″ en la ejecución del penal.​​",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("👨‍⚖️ Si incumple con ésta regla pero erra el penal, no hace falta repetir la ejecución.",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("Caso contrario, si el jugador amaga y convierte el penal, deberá ejecutarlo nuevamente. ⚖​ 🔁",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒋ Si un equipo tiene menos de 4 jugadores, tienen derecho a decidir si uno de ellos patea dos veces o eligen a un espectador.",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒌ No vale invadir el área mientras un jugador está por patear. 🚫",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("⒍ Si se ejecutaron todos los penales y aún persiste el empate:",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("Los arqueros deberán enfrentarse entre ellos hasta 5️⃣ v̲e̲c̲e̲s̲ c̲o̲m̲o̲ m̲á̲x̲i̲m̲o̲. ",player.id,0x00FFBB,"normal",0);room.sendAnnouncement("Y si el empate persiste, t̲o̲d̲o̲s̲ l̲o̲s̲ j̲u̲g̲a̲d̲o̲r̲e̲s̲ d̲e̲b̲e̲r̲á̲n̲ p̲a̲t̲e̲a̲r̲ l̲o̲s̲ p̲e̲n̲a̲l̲e̲s̲ n̲u̲e̲v̲a̲m̲e̲n̲t̲e̲.",player.id,0x00FFBB,"normal",0)}
const inactivityTimeout=MinutosPermitidosAFK*60*1000;const playerInactivity=new Map();function checkAutoKickAFKs(){const afkNonAdmins=room.getPlayerList().filter(p=>afkPlayerIDs.has(p.id)&&!p.admin);if(afkNonAdmins.length>=LimiteMaximoDeJugadoresAFK){afkNonAdmins.forEach(p=>{room.kickPlayer(p.id,"⚠️ Muchos jugadores AFK",!1);afkPlayerIDs.delete(p.id);playerInactivity.delete(p.id)});room.sendAnnouncement("🚨 Se expulsaron automáticamente a jugadores AFK porque se superó el límite permitido. 🛑",null,0xff0000,'bold',2)}}
function afkFun(player,message){if(ganasigueEnabled&&!player.admin){room.sendAnnouncement("🚫 El comando !afk solo puede ser usado por administradores mientras 'Gana Sigue' está ACTIVADO.",player.id,0xFF4444,"bold",2);return}
if(player.admin){if(afkPlayerIDs.has(player.id)){clearTimeout(playerInactivity.get(player.id));playerInactivity.delete(player.id);afkPlayerIDs.delete(player.id);if(modoJueganTodos){const blueTeamCount=room.getPlayerList().filter(p=>p.team===1).length;const redTeamCount=room.getPlayerList().filter(p=>p.team===2).length;room.setPlayerTeam(player.id,blueTeamCount<=redTeamCount?1:2)}
room.sendAnnouncement("🚀 ¡"+player.name+" volvió y está listo para jugar! 🎮",null,0x00FFBB,"bold",0)}else{afkPlayerIDs.add(player.id);checkAutoKickAFKs();room.setPlayerTeam(player.id,0);setTimeout(()=>{room.sendAnnouncement("🌴   ¡"+player.name+" se encuentra actualmente A F K! 🕒 💤",null,0xff8400,'bold',2);if(playerPositions[player.id]){playerPositions[player.id].lastUpdateTime=Date.now()}},500);setTimeout(()=>{room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️",player.id,0xff8400,'small-bold',2)},1000);const admins=room.getPlayerList().filter(admin=>admin.admin);const adminNames=admins.map(admin=>admin.name).join(", ");setTimeout(()=>{const msg=admins.length>0?`🛠️ Administrador(es): ${adminNames}, ¡Pueden usar !kickafks para expulsar a los jugadores AFK!`:"📣 El administrador puede echar a los jugadores AFK con el comando !kickafks.";room.sendAnnouncement(msg,null,0x00FFBB,'bold',0)},3000);if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=6&&numJugadores<=7){maxPlayersPerTeam=3;nuevaConfiguracion={mapa:getFutx3Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=8&&numJugadores<=9){maxPlayersPerTeam=4;nuevaConfiguracion={mapa:getFutx4Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=10&&numJugadores<=11){maxPlayersPerTeam=5;nuevaConfiguracion={mapa:getFutx5Map(),scoreLimit:GolesFutsalx5,timeLimit:TiempoFutsalx5}}else if(numJugadores>=14){maxPlayersPerTeam=7;nuevaConfiguracion={mapa:getFutx7Map(),scoreLimit:GolesFutsalx7,timeLimit:TiempoFutsalx7}}
if(nuevaConfiguracion!==null){if(JSON.stringify(nuevaConfiguracion)===JSON.stringify(configuracionActual)){return}
var scores=room.getScores();if(scores!==null){var gameTime=scores.time;if(gameTime<=tiempoLimiteCambio){configuracionActual=nuevaConfiguracion;setTimeout(function(){room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()},tiempoEsperaCambio)}}else{configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}}}}}else{if(afkPlayerIDs.has(player.id)){clearTimeout(playerInactivity.get(player.id));playerInactivity.delete(player.id);afkPlayerIDs.delete(player.id);if(modoJueganTodos){const blueTeamCount=room.getPlayerList().filter(p=>p.team===1).length;const redTeamCount=room.getPlayerList().filter(p=>p.team===2).length;room.setPlayerTeam(player.id,blueTeamCount<=redTeamCount?1:2)}
room.sendAnnouncement("🚀 ¡"+player.name+" volvió y está listo para jugar! 🎮",null,0x00FFBB,"bold",0)}else{afkPlayerIDs.add(player.id);checkAutoKickAFKs();const inactivityTimer=setTimeout(()=>{room.kickPlayer(player.id,"⌛️ EXPULSADO por INACTIVIDAD 😴🚫",!1);playerInactivity.delete(player.id)},inactivityTimeout);playerInactivity.set(player.id,inactivityTimer);room.setPlayerTeam(player.id,0);setTimeout(()=>{room.sendAnnouncement("🌴   ¡"+player.name+" se encuentra actualmente A F K! 🕒 💤",null,0xff8400,'bold',2);if(playerPositions[player.id]){playerPositions[player.id].lastUpdateTime=Date.now()}},500);setTimeout(()=>{room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️",player.id,0xff8400,'small-bold',2)},1000);setTimeout(()=>{room.sendAnnouncement("🚨 ¡ATENCIÓN! Si te quedas AFK por "+MinutosPermitidosAFK+" MINUTOS ⌛, serás EXPULSADO del host. 🛑",player.id,0xff8400,'small-bold',2)},1500);setTimeout(()=>{room.sendAnnouncement("📌   RECUERDA QUE:        ⚠️ Si el administrador lo decide, puede echarte del host usando !kickafks. ⚠️",player.id,0xff8400,'small-bold',2)},2000);const admins=room.getPlayerList().filter(admin=>admin.admin);const adminNames=admins.map(admin=>admin.name).join(", ");setTimeout(()=>{const msg=admins.length>0?`🛠️ Administrador(es): ${adminNames}, ¡Pueden usar !kickafks para expulsar a los jugadores AFK!`:"📣 El administrador puede echar a los jugadores AFK con el comando !kickafks.";room.sendAnnouncement(msg,null,0x00FFBB,'bold',0)},3000);if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=6&&numJugadores<=7){maxPlayersPerTeam=3;nuevaConfiguracion={mapa:getFutx3Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=8&&numJugadores<=9){maxPlayersPerTeam=4;nuevaConfiguracion={mapa:getFutx4Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=10&&numJugadores<=11){maxPlayersPerTeam=5;nuevaConfiguracion={mapa:getFutx5Map(),scoreLimit:GolesFutsalx5,timeLimit:TiempoFutsalx5}}else if(numJugadores>=14){maxPlayersPerTeam=7;nuevaConfiguracion={mapa:getFutx7Map(),scoreLimit:GolesFutsalx7,timeLimit:TiempoFutsalx7}}
if(nuevaConfiguracion!==null){if(JSON.stringify(nuevaConfiguracion)===JSON.stringify(configuracionActual)){return}
var scores=room.getScores();if(scores!==null){var gameTime=scores.time;if(gameTime<=tiempoLimiteCambio){configuracionActual=nuevaConfiguracion;setTimeout(function(){room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()},tiempoEsperaCambio)}}else{configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}}}}}}
function afksFun(player,message){const afkPlayers=room.getPlayerList().filter(player=>afkPlayerIDs.has(player.id));if(afkPlayers.length===0){room.sendAnnouncement("❎ No hay jugadores AFK en este host. ¡Todos están listos para jugar!",player.id,0x00FFBB,"bold",0)}else{const afkPlayersString=afkPlayers.map(player=>player.name).join(", ");room.sendAnnouncement("💤 Jugadores AFK: "+afkPlayersString,player.id,0x00FFBB,"bold",0)}}
function kickafksFun(player,message){if(player.admin){const adminName=player.name;const afkPlayers=room.getPlayerList().filter(x=>afkPlayerIDs.has(x.id));for(const afkPlayer of afkPlayers){if(!afkPlayer.admin){room.kickPlayer(afkPlayer.id,"⚠️ ¡Expulsado por "+adminName+" por estar AFK!",!1)}}}}
function initBallCarrying(redTeam,blueTeam){var ballCarrying=new Map();var playing=redTeam.concat(blueTeam);for(var i=0;i<playing.length;i++){ballCarrying.set(playing[i].name,[0,playing[i].team])}
return ballCarrying}
function updateTeamPoss(value){if(value[1]==1)redPoss+=value[0];if(value[1]==2)bluePoss+=value[0]}
var bluePoss;var redPoss;var timeOnHalves;function PosesionBalonFun(player,message){if(room.getScores()==null)return!1;bluePoss=0;redPoss=0;ballCarrying.forEach(updateTeamPoss);var redPossPercent=Math.round((redPoss/(redPoss+bluePoss+0.000001))*100);var bluePossPercent=Math.round((bluePoss/(redPoss+bluePoss+0.000001))*100);var totalPosesion=posesionEquipoA+posesionEquipoB;var porcentajeEquipoA=totalPosesion===0?0:(posesionEquipoA/totalPosesion)*100;var porcentajeEquipoB=totalPosesion===0?0:(posesionEquipoB/totalPosesion)*100;var mensaje='Posesión de balón ⚽ 𒁂 [ 🔴 '+teamRed+': '+porcentajeEquipoA.toFixed(2)+'% ] 🆚 [ 🔵 '+teamBlue+': '+porcentajeEquipoB.toFixed(2)+'% ] 𒁂';room.sendAnnouncement(mensaje,player.id,0xc2ff33,"bold",0);var timeOnRedHalf=Math.round((timeOnHalves[0]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);var timeOnBlueHalf=Math.round((timeOnHalves[1]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);var timeAnnouncement='Pelota en campo ⚽ 𒁂 [ 🔴 '+teamRed+' '+timeOnRedHalf+'% ] 🆚 [ 🔵 '+teamBlue+' '+timeOnBlueHalf+'% ] 𒁂';room.sendAnnouncement(timeAnnouncement,player.id,0xc2ff33,"bold",0)}
function teamPossFun(player,message){if(room.getScores()==null)return!1;bluePoss=0;redPoss=0
ballCarrying.forEach(updateTeamPoss);var redPossPercent=Math.round((redPoss/(redPoss+bluePoss+0.000001))*100);var bluePossPercent=Math.round((bluePoss/(redPoss+bluePoss+0.000001))*100);var totalPosesion=posesionEquipoA+posesionEquipoB;var porcentajeEquipoA=totalPosesion===0?0:(posesionEquipoA/totalPosesion)*100;var porcentajeEquipoB=totalPosesion===0?0:(posesionEquipoB/totalPosesion)*100;var AnuncioPosesion='Posesión de balón ⚽ 𒁂 [ 🔴 '+teamRed+': '+porcentajeEquipoA.toFixed(2)+'% ] 🆚 [ 🔵 '+teamBlue+': '+porcentajeEquipoB.toFixed(2)+'% ] 𒁂';room.sendAnnouncement(AnuncioPosesion,null,0xc2ff33,"bold",0);var timeOnRedHalf=Math.round((timeOnHalves[0]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);var timeOnBlueHalf=Math.round((timeOnHalves[1]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);var AnuncioPelotaEnCampo='Pelota en campo ⚽ 𒁂 [ 🔴 '+teamRed+' '+timeOnRedHalf+'% ] 🆚 [ 🔵 '+teamBlue+' '+timeOnBlueHalf+'% ] 𒁂';room.sendAnnouncement(AnuncioPelotaEnCampo,null,0xc2ff33,"bold",0)}
function BanIpFun(player,message){if(player.admin==!0){let ipToAdd=message.substr(7);const NickDelJugador=getPlayerNameByIP(ipToAdd);if(!IpPlayers.includes(ipToAdd)){IpPlayers.push(ipToAdd);room.sendAnnouncement(`El Administrador ${player.name} ha añadido la IP de ${NickDelJugador} a la Blacklist`,null,0x05ff02,"normal",0);const targetPlayer=room.getPlayerList().find(p=>p.name===NickDelJugador);if(targetPlayer){room.kickPlayer(targetPlayer.id,MensajeBaneoPorIp,!0)}else{room.sendAnnouncement(`Admin ${player.name}: La forma correcta de usar !banip es: !banip <IP del Jugador> | Ejemplo: !banip 123.456.789`,player.id,0xFF5252,"normal",0);room.sendAnnouncement(`Para ver la IP de un jugador, utiliza el comando: !ip NICKNAME DEL JUGADOR | Ejemplo: !ip Lionel Messi #10`,player.id,0x05ff02,"normal",0)}}}}
function unBanIpFun(player,message){if(player.admin==!0){let ipToRemove=message.substr(9);const NickDelJugador=getPlayerNameByIP(ipToRemove);let pos=IpPlayers.indexOf(ipToRemove);if(pos!==-1){IpPlayers.splice(pos,1);room.sendAnnouncement(`El Administrador ${player.name} ha retirado la IP de ${NickDelJugador} de la Blacklist`,null,0x05ff02,"normal",0)}}}
function getPlayerNameByIP(ip){const playerInfo=playerIPs.find(info=>info.ip===ip);return playerInfo?playerInfo.nickname:"Jugador Desconocido"}
var JugadoresBaneadosXIp=!1;function unBanAllIpsFun(player,message){if(player.admin==!0){JugadoresBaneadosXIp=!1;IpPlayers=[];room.clearBans();room.sendAnnouncement("[✅ 🔓] "+player.name+" ha eliminado la lista de jugadores baneados por IP.",null,0xd733ff,"normal",0)}}
function pushMute(playerId,duration,adminName){const targetPlayer=room.getPlayer(playerId);if(targetPlayer){const muteTime=duration===Infinity?Infinity:Date.now()+(duration*60*1000);mutedPlayers[targetPlayer.name]={muteTime:muteTime,admin:adminName};var announcement;if(duration===Infinity){announcement="🔇 "+targetPlayer.name+" ha sido MUTEADO 🤐 indefinidamente por "+adminName+"."}else{announcement="🔇 "+targetPlayer.name+" ha sido MUTEADO 🤐 por "+duration+" minutos por "+adminName+"."}
room.sendAnnouncement(announcement,null,0xFF0000,"bold",0)}else{var usageMessage="❗️ No se encontró ningún jugador con el ID especificado. Por favor, asegúrate de usar el formato correcto: !mute ID [duration] ❗️";room.sendAnnouncement(usageMessage,null,0xFF0000,"bold",2)}}
function unmuteFun(player,message){if(player.admin===!0){const spacePos=message.search(" ");const targetPlayerId=parseInt(message.substr(spacePos+1));if(isNaN(targetPlayerId)||spacePos===-1){var usageMessage="❗️ Uso incorrecto del comando !unmute. Por favor, asegúrate de usar el formato correcto: !unmute ID ❗️";room.sendAnnouncement(usageMessage,player.id,0xFF0000,"bold",2);return}
const targetPlayer=room.getPlayer(targetPlayerId);if(targetPlayer){delete mutedPlayers[targetPlayer.name];var announcement="🔊 "+targetPlayer.name+" ha sido DESMUTEADO 🔓 por "+player.name+" 🔊";room.sendAnnouncement(announcement,null,0x00FF00,"bold",0)}}}
var isRoomMuted=!1;function UnmuteAll(player,message){if(player.admin==!0){isRoomMuted=!1;mutedPlayers=[];room.sendAnnouncement("📣 "+player.name+" ha desmuteado a todos los jugadores. 🗣️🔓",null,0x32cd32,"bold",0)}}
function EspecialesFun(player){room.sendAnnouncement('⎝༽  | ︻╦̵̵╤── | ඞ |  ⊹ | ✧ | ✦ | ツ | ♬ | ᕦ( ͡° ͜ʖ ͡°)ᕤ | 乡 | 『』 | 卍 | 〘〙| ༒ |  ௵ | 々| 𒆜 | 𒐫 | 𒈞',player.id,0xFF003C,"normal",0)}
function NumeroUnoFun(player){room.sendAnnouncement('🔢  𝟭         ౹         𝟏          𝟷          𝟣         １         ߗ1𐰯¹₁⥠↿˥⒈         𝟏        𝟷𐰯 І        Ι         Ӏ        ᅵ        𝗹        ।         ⅂        𐐑        ⓵        ①         ➀         ➊         ⅼ   para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroDosFun(player){room.sendAnnouncement('🔢  𝟮        Ƨ        2️⃣        ౽        ੨ 	       ૨        ২        २        ௨        𝟐        ２        2        ᒿ        𝟤        ᒾ        ²        ₂        շ        𝟸        ᘖ        𝟚        Ձ        ⒉        ƻ        Չ        Զ        ϩ        ⓶        ②        ➁        ❷        ㈃        ⒛ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroTresFun(player){room.sendAnnouncement('🔢  Ʒ        3        3️⃣        ३        ੩        ʒ        ӡ        Ӡ        ᴣ        ᶾ        э        Э        ℈        ぅ        う        ㄋ        ȝ        Ȝ        𝟯        𝟥        з        ɜ        ᴈ        ᢃ        ౩        ⓷        ③        ➂        ❸        ੩        ૩        ३ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroCuatroFun(player){room.sendAnnouncement('🔢  𝟰        ㏣        ㍜        𝟒        ４        𝟺        𝟦        4        ₄        ⁴        Ϥ        կ        Կ        Ч        ч        ɥ        ౺        ⒋ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroCincoFun(player){room.sendAnnouncement('🔢  Ƽ        ƽ        𐐠        𐑈        𝟱        𝟓        ５        ㏤        5        ㍝        5️⃣        𝟻        5        ₅        ⁵        ⒌ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroSeisFun(player){room.sendAnnouncement('🔢  𝟲        𝟔        ６        𝟼        ㏥        ㍞        6        𝟨        ₆        ⁶        𝟞        ⒍        ⑥        ⓺        ➅        ➏        ❻        ɓ        ꕃ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroSieteFun(player){room.sendAnnouncement('🔢 𐓒        𐒇        ⅂        𐐑        ヿ        ⏋        ⌉        𝟳        𝟕        𝟟        7        𝟽        ７        ⁊        ₇        ⁷        𝟩        7️⃣        ⒎        ꔔ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroOchoFun(player){room.sendAnnouncement('🔢  𝟴        𝟖        8        𝟪        ৪        ⁸        ₈        ８        𐌚        𝟾        ꖉ        ⊟        𝛉        ⒏        ㏧        ㍠        8️⃣ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroNueveFun(player){room.sendAnnouncement('🔢  𝟵        𝟗        9        𝟿        ９        𝟫        ⁹        ₉        ୨        ց        ɡ        ᕤ        ⒐        9        ㏨        ㍡        9️⃣        𝟡        ۹        ٩        ᑫ        ᑴ        𐒘 para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function NumeroDiezFun(player){room.sendAnnouncement('🔢  ⒑        🔟        ⑩        ➉        ➓        ❿        ю        Ю        ㍢        ㏩        ⑽ para más ve a https://tell.wtf',player.id,0xFF003C,"normal",0)}
function LinkDiscordFun(player){room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ",player.id,0x7289da,"normal",0)
room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ",player.id,0x7289da,"normal",0)
room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ",player.id,0x7289da,"normal",0);room.sendAnnouncement("                                        💬👥 𝑼𝑵𝑨𝑵𝑺𝑬 𝑨𝑳 𝑫𝑰𝑺𝑪𝑶𝑹𝑫 ➡ "+DiscordLink+" ⬅",player.id,0xF6FF43,"normal",0)}
function LinkTwitchFun(player){room.sendAnnouncement("                                        ▀▀█▀▀ ▒█░░▒█ ▀█▀ ▀▀█▀▀ ▒█▀▀█ ▒█░▒█  ",player.id,0x9146FF,"normal",0)
room.sendAnnouncement("                                        ░▒█░░ ▒█▒█▒█ ▒█░ ░▒█░░ ▒█░░░ ▒█▀▀█  ",player.id,0x9146FF,"normal",0)
room.sendAnnouncement("                                        ░▒█░░ ▒█▄▀▄█ ▄█▄ ░▒█░░ ▒█▄▄█ ▒█░▒█ ",player.id,0x9146FF,"normal",0);room.sendAnnouncement("                                         ⬅",player.id,0xF6FF43,"normal",0)}
function LinkYoutubeFun(player){room.sendAnnouncement("                                        ▒█░░▒█ ▒█▀▀▀█ ▒█░▒█ ▀▀█▀▀ ▒█░▒█ ▒█▀▀█ ▒█▀▀▀   ",player.id,0xe52d27,"normal",0)
room.sendAnnouncement("                                        ▒█▄▄▄█ ▒█░░▒█ ▒█░▒█ ░▒█░░ ▒█░▒█ ▒█▀▀▄ ▒█▀▀▀   ",player.id,0xe52d27,"normal",0)
room.sendAnnouncement("                                        ░░▒█░░ ▒█▄▄▄█ ░▀▄▄▀ ░▒█░░ ░▀▄▄▀ ▒█▄▄█ ▒█▄▄▄ ",player.id,0xe52d27,"normal",0);room.sendAnnouncement("                                        🔴📺 𝑼𝑵𝑬𝑻𝑬 𝑨 𝒀𝑶𝑼𝑻𝑼𝑩𝑬 ➡ "+YoutubeLink+" ⬅",player.id,0xF6FF43,"normal",0)}
function LinkScriptFun(player){var ColoresRandomBot2=[0xF6FF43,0x00ffd5,0xbfff50,0xffd050];var GeneradorColoresRandom2=ColoresRandomBot2[(Math.random()*ColoresRandomBot2.length)|0]
room.sendAnnouncement('❔ SERVIDOR PARA REALIZAR CONSULTAS: discord.gg/tDEUbJU8QB',player.id,GeneradorColoresRandom2,"normal",0);room.sendAnnouncement('📺 VIDEOTUTORIAL: youtu.be/xkgB_5V7BZk?si=RNG3LmGOh1EnKAaY',player.id,GeneradorColoresRandom2,"normal",0);room.sendAnnouncement('🔗 LINK DEL SCRIPT: bit.ly/GLH-Script',player.id,GeneradorColoresRandom2,"normal",0)}
function AvatarNumerosFun(player){var ColoresRandomBot2=[0xF6FF43,0x00ffd5,0xbfff50,0xffd050];var GeneradorColoresRandom2=ColoresRandomBot2[(Math.random()*ColoresRandomBot2.length)|0]
room.sendAnnouncement('Para ver números para tu avatar escribe !1, !2, !3, !4, !5, !6, !7, !8, !9 o !10.',player.id,GeneradorColoresRandom2,"normal",0)}
function TamanoJugadorFun(player){var ColoresRandomBot2=[0xF6FF43,0x00ffd5,0xbfff50,0xffd050];var GeneradorColoresRandom2=ColoresRandomBot2[(Math.random()*ColoresRandomBot2.length)|0]
room.sendAnnouncement('🏀 ¡Elige el tamaño de tu jugador! 📏 \n\nPara ajustar el tamaño de tu jugador, escribe "!size Número". Debe ser un número entre '+TamanoMinimoPermitido+' y '+TamanoMaximoPermitido+', siendo 15 el tamaño normal. \n\n🔽 Cuanto más pequeño sea el número, más pequeño será tu jugador. \n\n🔼 Si colocas un número grande, ¡tu jugador será más grande! 🎉',player.id,GeneradorColoresRandom2,"normal",0);room.sendAnnouncement('Ejemplo: !size 12',player.id,0x34F73A,"normal",0)}
var cantidadDeCambios={};function changeOurSize(player,message){const DEFAULT_SIZE=15;var MIN_SIZE=TamanoMinimoPermitido;var MAX_SIZE=TamanoMaximoPermitido;if(player.team!==0&&(!tookASize.hasOwnProperty(player.id)||cantidadDeCambios[player.id]<CantidadCambiarTamano)){let size=message.substr("!size ".length);if(!isNaN(size)&&size>=MIN_SIZE&&size<=MAX_SIZE){let invMass=Math.max(0.01,0.5+(DEFAULT_SIZE-size)*0.02);room.setPlayerDiscProperties(player.id,{radius:size,invMass:invMass});tookASize[player.id]=size;cantidadDeCambios[player.id]=(cantidadDeCambios[player.id]||0)+1;room.sendAnnouncement("📏 ¡Tu tamaño ha sido cambiado a "+size+"! ⚽️",player.id,0xbfff35,"normal",0);let cambiosRestantes=CantidadCambiarTamano-cantidadDeCambios[player.id];if(cambiosRestantes>0){let mensajeCambio=(cambiosRestantes===1)?"vez":"veces";room.sendAnnouncement("🔄 ¡Puedes cambiar tu tamaño "+cambiosRestantes+" "+mensajeCambio+" más por partido! ⚽️",player.id,0xbfff35,"normal",0)}else{room.sendAnnouncement("🔄 ¡Ya no puedes cambiar tu tamaño más por partido! ⚽️",player.id,0xbfff35,"normal",0)}}else{room.sendAnnouncement("📏 ¡Personaliza tu tamaño por el que quieras! 🏀\nSolo escribe !size seguido de un número entre "+MIN_SIZE+" y "+MAX_SIZE+" para ajustar tu tamaño. 😄 Si escribes !size 12, por ejemplo, te volverás más pequeño. El tamaño que tienen por defecto es 15.\n¡Diviértete jugando! 🎉",player.id,0xbfff35,"normal",0)}}else{if(cantidadDeCambios[player.id]>=CantidadCambiarTamano){room.sendAnnouncement("🔄 ¡Ya has alcanzado el límite de cambios de tamaño por partido! ⚽️\nRecuerda que solo puedes cambiar tu tamaño "+CantidadCambiarTamano+" vez por partido. ¡Elige sabiamente! 🎉",player.id,0xbfff35,"normal",0)}else{let cambiosRestantes=CantidadCambiarTamano-cantidadDeCambios[player.id];let mensajeCambio=(cambiosRestantes===1)?"vez":"veces";room.sendAnnouncement("🔄 ¡Puedes cambiar tu tamaño "+cambiosRestantes+" "+mensajeCambio+" más por partido! ⚽️",player.id,0xbfff35,"normal",0)}}
return!1}
function InvertirColores(player){if(player.admin==!0){room.setTeamColors(1,blueAngle,blueTextColor,blueColor);room.setTeamColors(2,redAngle,redTextColor,redColor);room.sendAnnouncement("[🔄👕] ¡Camisetas intercambiadas con éxito!",null,0x00FF00,"bold",2);let saveCamiAngle=blueAngle;let saveCamiColor=blueColor;let saveCamiText=blueTextColor;blueAngle=redAngle;blueTextColor=redTextColor;blueColor=redColor;redAngle=saveCamiAngle;redColor=saveCamiColor;redTextColor=saveCamiText;let tempTeamName=teamRed;teamRed=teamBlue;teamBlue=tempTeamName}}
function UEFAFun(player){room.sendAnnouncement("UEFA 🌍: !premierleague ✦ !ligue1 ✦  !bundesliga ✦ !seriea ✦ !serieb ✦ !laliga ✦ !eredivisie ✦ !primeiraliga ✦ !superlig ✦ !campeonatoruso ✦ !1hnl ✦ !premierucrania  !superligasuiza ✦ !nb1 ",player.id,0xea9999,"bold",0)}
function CONMEBOLFun(player){room.sendAnnouncement("CONMEBOL 🌎: !primera ✦ !ascenso ✦ !brasileirao ✦ !campeonatouruguayo ✦ !ligaparaguaya ✦ !ligaaguila ✦ !ligapro ✦ !liga1peru ✦ !campeonatochileno ✦ !ligaboliviana ✦ !ligavenezolana",player.id,0xa4c2f4,"bold",0)}
function CONCACAFFun(player){room.sendAnnouncement("CONCACAF 🌎: !ligamx ✦ !mls",player.id,0xffd966,"bold",0)}
function CamisetasFun(player){room.sendAnnouncement("!UEFA 🌍✦ !CONMEBOL 🌎✦ !CONCACAF 🌎✦ !paises 🌐✦ !fantasmas  👻 ✦ !amateurs 🛡✦ !superheroes 🦸 | !haxball | !esports",player.id,0xb4a7d6,"bold",0);setTimeout(function(){var paso1="📢 ¡Hola! ¿Quieres jugar con la camiseta de tu equipo favorito? Es muy fácil, sigue estos pasos:\n\n";paso1+="1️⃣ Escribe las letras abreviadas de tu equipo (por ejemplo, riv para River Plate, boc para Boca Juniors, arg para Argentina, bra para Brasil, etc.) 🏟️";room.sendAnnouncement(paso1,player.id,0xffffff,"bold",0)},5000);setTimeout(function(){var paso2="2️⃣ Luego, escribe qué tipo de camiseta deseas (titular, alternativa, tercera, clásica o bandera para selecciones nacionales) 🌟";room.sendAnnouncement(paso2,player.id,0xffffff,"bold",0)},8000);setTimeout(function(){var paso3="3️⃣ Por último, elige si quieres la camiseta para el equipo rojo 🔴 (red) o azul 🔵(blue)";room.sendAnnouncement(paso3,player.id,0xffffff,"bold",0)},11000);setTimeout(function(){var ejemplo="\nPor ejemplo, si quieres ver la camiseta titular de River Plate en el equipo rojo, escribe: riv/titular/red";ejemplo+="\nSi quieres la camiseta titular de Boca Juniors en el equipo azul, escribe: boc/titular/blue";ejemplo+="\nRecuerda poner el símbolo '/' entre cada parte del comando.";room.sendAnnouncement(ejemplo,player.id,0xffffff,"bold",0)},14000);setTimeout(function(){var final="\n¡Y listo! 🎉 Verás la camiseta del equipo que elegiste en el equipo que quieras. ¡Disfruta representando a tu equipo favorito! ⚽️👕";room.sendAnnouncement(final,player.id,0xffffff,"bold",0)},17000)}
function SuperHeroesFun(player){room.sendAnnouncement("💪 SUPERHÉROES: ",player.id,0xfaebd6,"bold",0);room.sendAnnouncement("MARVEL: SPIDERMAN | HULK | CAPITANAMERICA",player.id,0xfaebd6,"bold",0);room.sendAnnouncement("DC: BATMAN",player.id,0xfaebd6,"bold",0)}
function FantasmasFun(player){room.sendAnnouncement("📜 👻 EQUIPOS FANTASMAS: ",player.id,0xfaebd6,"bold",0);room.sendAnnouncement("🌍 exSelecciones:  | URSS | YUG | CZE",player.id,0xfaebd6,"bold",0);room.sendAnnouncement("🛡 exClubes: | ALU | LOA | OCFC | BAC | ROAC | CAPORT",player.id,0xfaebd6,"bold",0)}
function SuperligaFun(player){room.sendAnnouncement("🅰 PRIMERA DIVISIÓN: | RIV | BOC | RAC | IND | SLO | EST | VEL | LAN | DYJ",player.id,0xADF4FF,"bold",0);room.sendAnnouncement(" | AAAJ | NOB | CEN | ARSE | BAND | TAL | CSF | HUR | GIM ",player.id,0xADF4FF,"bold",0);room.sendAnnouncement(" | UNI | ALD | ATU | CCS | GOD | PAT | BARR | TIG | PLA | SAR",player.id,0xADF4FF,"bold",0)}
function AscensoFun(player){room.sendAnnouncement('🅱 ASCENSO: | ALB | FCO | CHA | ATL |  SMT | OLP | BEL | QUI | MOR | NCH | ALM | SMSJ | ABROWN',player.id,0xDB1414,"bold",0);room.sendAnnouncement('| DOC | SCH | RIE | AGR | ALV | STEL​ | MER | AdQ | CJA | GyT | CADU | VSC | EBA | BOCHZ | CDE | SIT | MDY | CDN | LAF | SM | DOU',player.id,0xDB1414,"bold",0)}
function EquiposAmateursFun(player){room.sendAnnouncement('🔰 AMATEURS (LIGAS BARRIALES) : | CDYBGR',player.id,0xDB1414,"bold",0)}
function CampeonatoChilenoFun(player){room.sendAnnouncement("(🇨🇱) CAMPEONATO CHILENO:  | CCO | UDC | UCA | CDP | COB | EVDM | ULC |",player.id,0xFF2A12,"bold",0);room.sendAnnouncement("| AUD | HUA | IQU | OHI | UES | SWA | CUR | CDA | UCON | DLS | COQ",player.id,0xFF2A12,"bold",0)}
function LigaBolivianaFun(player){room.sendAnnouncement("(🇧🇴) LIGA BOLIVIANA:  | BLV | STG | WTM | PET | ALWR",player.id,0x5ACC31,"bold",0)}
function MLSFun(player){room.sendAnnouncement("(🇺🇸) MLS: | LA | TOFC | NYC | ATLU | LAFC | SEA | NYRB | PTIM | ORL | MIA",player.id,0x1930FF,"bold",0)}
function LigaUruguayaFun(player){room.sendAnnouncement('(🇺🇾) CAMPEONATO URUGUAYO: | NAC | PEN | DAN | RAM | RIU | WAN | MCT | CRL | DFS | PCOL',player.id,0x69CDFF,"bold",0)}
function CampeonatoRusoFun(player){room.sendAnnouncement('(🇷🇺) CAMPEONATO RUSO: | SPM | CSK | ZEN | LOK | DIN',player.id,0xe11a22,"bold",0)}
function PremierUcranianaFun(player){room.sendAnnouncement('(🇺🇦) LIGA PREMIER UCRANIA: | SHA | DYK | NYV',player.id,0xFFF954,"bold",0)}
function LaLigaFun(player){room.sendAnnouncement('(🇪🇸) LALIGA: | RMA | BAR | ATM | SEV | VIL | VAL | ATH | GET | CEL | BET | LEV | RAY | RCDE | MLL',player.id,0xFF2A00,"bold",0)}
function LigaAguilaFun(player){room.sendAnnouncement('(🇨🇴) LIGA ÁGUILA: | ATN | MIL | AME | SFE | CAL | ONC | DEPTOL',player.id,0xFFE959,"bold",0)}
function LigaParaguayaFun(player){room.sendAnnouncement('(🇵🇾) LIGA PARAGUAYA: | CCP | OLI | GUA | LIB',player.id,0xa3a3a3,"bold",0)}
function SerieATIMFun(player){room.sendAnnouncement('(🇮🇹) SERIE A: | JUV | INT | ACM | ATA | NAP | LAZ | ROM | FIO | TOR | GEN | PLM | CHVER',player.id,0x6699FF,"bold",0)}
function SerieBItaliaFun(player){room.sendAnnouncement('(🇮🇹) SERIE B: | VENFC',player.id,0x6699FF,"bold",0)}
function BrasilLeagueFun(player){room.sendAnnouncement('(🇧🇷) BRASILEIRAO: SAO | SAN | CRU | FLA | PAL | CAM | SCI | GRE | COR | BOT | PAR | FLU | VAS | FORT | RBB | AMCMIN',player.id,0xF7FF19,"bold",0)}
function PremierLeagueFun(player){room.sendAnnouncement('(🇬🇧) PREMIER LEAGUE: MCI | LIV | CHE | MUN | TOT | LEI | ARS | EVE | WHU | WOL | AVL | NEW | SOU | WAT | CRY | LEE | FUL | WBA | HUL',player.id,0xFFFFFF,"bold",0)}
function SuperLigFun(player){room.sendAnnouncement('(🇹🇷) SUPER LIG: | GS | FB | BJK ',player.id,0xFA0000,"bold",0)}
function LigaVenezolanaFun(player){room.sendAnnouncement('(🇻🇪) Liga Venezolana: TACH | CARC | MNG | DLAR',player.id,0xF7FF19,"bold",0)}
function PaisesFun(player){room.sendAnnouncement('🌍 EUROPA: FRA | ALE | ITA | ESP | ING | BELG | POR | HOL | CRO | | GAL | RUS | SWE | SUI | AUT | UKR | POL | MAR | SRB | TUN | DEN',player.id,0x5793FA,"bold",0);room.sendAnnouncement('🌎 AMÉRICA: BRA | ARG | COL | URU | CHI | USA  | MEX | ECU | PGY | PER | VEN | BOL | CAN | CRC',player.id,0x5793FA,"bold",0);room.sendAnnouncement('🌏 ASIA y OCEANIA: JAP | QAT | CNO | NZE | IRN | KOR | KSA | AUS',player.id,0x5793FA,"bold",0);room.sendAnnouncement('🌍 AFRICA: NGA | CDM | CMR | SEN | GHA',player.id,0x5793FA,"bold",0)}
function BundesligaFun(player){room.sendAnnouncement('(🇩🇪) BUNDESLIGA: | FCB | BVB | RBL | B04 | HSV',player.id,0xF5FAF8,"bold",0)}
function EredivisieFun(player){room.sendAnnouncement('(🇳🇱) EREDIVISIE: | AJA | FEY | PSV | WIL',player.id,0xFA6400,"bold",0)}
function Ligue1Fun(player){room.sendAnnouncement('(🇫🇷) LIGUE 1: | PSG | OGC | OM | OL | ASM | FCN | REN | STE',player.id,0x3744FA,"bold",0)}
function LigaMXFun(player){room.sendAnnouncement('(🇲🇽) LIGA MX: | AMC | CHV | CRUZ | TGS | MTY',player.id,0x75FF59,"bold",0)}
function LigaProFun(player){room.sendAnnouncement('(🇪🇨) LIGA PRO: | LDU | BSC | EME | IDV | DEPUCA',player.id,0xFAFF5C,"bold",0)}
function RaiffeisenSuperLeagueFun(player){room.sendAnnouncement('(🇨🇭) RAIFFEISEN SUPER LEAGUE: | BAS | ',player.id,0xFF0A0A,"bold",0)}
function Liga1PeruFun(player){room.sendAnnouncement('(🇵🇪) LIGA 1: | UNV | ALI | CRI | MEL | UCV',player.id,0xFF1C1C,"bold",0)}
function PrimeiraLigaFun(player){room.sendAnnouncement('(🇵🇹) Primeira Liga: | BEN | SPO | FCP | SCB',player.id,0xFF3B3B,"bold",0)}
function EquiposEsportsFun(player){room.sendAnnouncement("(🎮) EQUIPOS ESPORTS:  | FURIA | ISURUS | 9Z | KUNISPORT | TRONCOS | PORCINOS | SAIYANS | BARRIO | ANIQUILADORES |",player.id,0x00FF00,"bold",0);room.sendAnnouncement("| JIJANTES | MOSTOLES | RAYO | XBUYER | 1K | FURIUS | PIO |",player.id,0x00FF00,"bold",0)}
var comandosGLH={"!swapcolors":InvertirColores,"!help":helpFun,"!ayuda":helpFun,"!ids":ListaDeJugadoresFun,"!tutorial":TutorialFun,"!resultados":ResultadosFun,"!reglamento":ReglamentoFun,"!fixture":FixtureFun,"!size":changeOurSize,"!tamaño":TamanoJugadorFun,"!discord":LinkDiscordFun,"!youtube":LinkYoutubeFun,"!twitch":LinkTwitchFun,"!script":LinkScriptFun,"!avatar":AvatarNumerosFun,"!numeros":AvatarNumerosFun,"!1":NumeroUnoFun,"!especiales":EspecialesFun,"!2":NumeroDosFun,"!3":NumeroTresFun,"!4":NumeroCuatroFun,"!5":NumeroCincoFun,"!6":NumeroSeisFun,"!7":NumeroSieteFun,"!8":NumeroOchoFun,"!9":NumeroNueveFun,"!10":NumeroDiezFun,"!banip":BanIpFun,"!unbanip":unBanIpFun,"!unbanallips":unBanAllIpsFun,"!unmuteall":UnmuteAll,"!afk":afkFun,"!poss":PosesionBalonFun,"!afks":afksFun,"!kickafks":kickafksFun,"!reglas":ReglasFun,"!clearbans":clearbansFun,"!clear_password":clearpasswordFun,"!swap":swapFun,"!tenis":TenisFun,"!mapas":MapasFun,"!rr":resetFun,"!nv":leaveFun,"!bb":leaveFun,"!adormir":leaveFun,"!acomer":leaveFun,"!camisetas":CamisetasFun,"!ksk":CamisetasFun,"!conmebol":CONMEBOLFun,"!uefa":UEFAFun,"!concacaf":CONCACAFFun,"!superheroes":SuperHeroesFun,"!primera":SuperligaFun,"!fantasmas":FantasmasFun,"!amateurs":EquiposAmateursFun,"!ascenso":AscensoFun,"!ligaboliviana":LigaBolivianaFun,"!campeonatochileno":CampeonatoChilenoFun,"!mls":MLSFun,"!campeonatouruguayo":LigaUruguayaFun,"!campeonatoruso":CampeonatoRusoFun,"!premierucrania":PremierUcranianaFun,"!laliga":LaLigaFun,"!seriea":SerieATIMFun,"!serieb":SerieBItaliaFun,"!brasileirao":BrasilLeagueFun,"!premierleague":PremierLeagueFun,"!superlig":SuperLigFun,"!paises":PaisesFun,"!bundesliga":BundesligaFun,"!eredivisie":EredivisieFun,"!ligaaguila":LigaAguilaFun,"!ligaparaguaya":LigaParaguayaFun,"!ligue1":Ligue1Fun,"!ligamx":LigaMXFun,"!ligapro":LigaProFun,"!superligasuiza":RaiffeisenSuperLeagueFun,"!liga1peru":Liga1PeruFun,"!primeiraliga":PrimeiraLigaFun,"!ligavenezolana":LigaVenezolanaFun,"!esports":EquiposEsportsFun,}
var commands={"!adminhelp":adminHelpFun,"!unmute":unmuteFun,"!md":pmFun,"!pv":pmFun,"!set_password":setpasswordFun}
function LinkDelScript(player){var scores=room.getScores();var ColoresRandomBot=[0xF6FF43,0x00ffd5,0xbfff50,0xffd050];var GeneradorColoresRandom=ColoresRandomBot[(Math.random()*ColoresRandomBot.length)|0]
var AvisosRandomBot=['🤖 CREÁ TU PROPIO HOST CON BOT:','🔗 LINK DEL BOT DE ESTE HOST:','📚 TUTORIAL PARA CREAR TU HOST CON BOT:','🏟️ CREÁ TU PROPIA SALA DE REAL SOCCER REVOLUTION:','📖 TUTORIAL PARA CREAR HOST DE RS REVOLUTION:']
var GeneradorAvisosRandom=AvisosRandomBot[(Math.random()*AvisosRandomBot.length)|0]
if(scores.time>3&&!isTimeAddedShownseis){room.sendAnnouncement("                                        𒁂 ✨ "+GeneradorAvisosRandom+"  ➡ https://youtu.be/Mkh7WcN8pSg ⬅ 𒁂",player,GeneradorColoresRandom,"normal",0);isTimeAddedShownseis=!0}
if(scores.time>0.3&&!isTimeAddedShownseis){isGamePaused=!1;room.sendAnnouncement("   🏆    E S T A N    J U G A N D O  :       "+teamRed+"   vs   "+teamBlue,player,GeneradorColoresRandom,"normal",0);room.sendAnnouncement("Escribe !help para ver los comandos disponibles.",player,GeneradorColoresRandom,"normal",0);isTimeAddedShownseis=!0}}
function hexToInt(hexColor){return parseInt(hexColor,16)}
function LinkDelScript3(player){var scores=room.getScores();var TiempoEnElQueApareceElMensaje=AnuncioMinuto*60+AnuncioSegundos;if(scores.time>TiempoEnElQueApareceElMensaje&&!DetenerAviso){var colorAnuncioInt=hexToInt(ColorAnuncio);room.sendAnnouncement(Anuncio,player,colorAnuncioInt,`${TipoDeLetraAnuncio}`,0);DetenerAviso=!0}}
function LinkDelScript4(player){var scores=room.getScores();var TiempoEnElQueApareceElMensaje2=Anuncio2Minuto*60+Anuncio2Segundos;if(scores.time>TiempoEnElQueApareceElMensaje2&&!DetenerAviso2){var colorAnuncio2Int=hexToInt(ColorAnuncio2);room.sendAnnouncement(Anuncio2,player,colorAnuncio2Int,`${TipoDeLetraAnuncio2}`,0);DetenerAviso2=!0}}
function LinkDelScript2(player){if(room.getScores().time>=5&&!DetenerAnuncio){var players=room.getPlayerList();var redPlayers=players.filter(player=>player.team===1);var bluePlayers=players.filter(player=>player.team===2);ArqueroRED=redPlayers.reduce((minXPlayer,currentPlayer)=>{return minXPlayer.position.x<currentPlayer.position.x?minXPlayer:currentPlayer},redPlayers[0]);ArqueroBLUE=bluePlayers.reduce((maxXPlayer,currentPlayer)=>{return maxXPlayer.position.x>currentPlayer.position.x?maxXPlayer:currentPlayer},bluePlayers[0]);var message="🔴 🧤⚽ GK "+teamRed+": "+(ArqueroRED?ArqueroRED.name:"No tiene")+" ------- 🔵 🧤⚽ GK "+teamBlue+": "+(ArqueroBLUE?ArqueroBLUE.name:"No tiene");room.sendAnnouncement(message,null,0xFFFFFF,"bold",0);DetenerAnuncio=!0}}
function ReiniciarPuntosJugadores(player){if(room.getScores().time>0.1&&!ReiniciarStatsEnCero){playerGoals={};playerAssists={};playerPoints={};ReiniciarStatsEnCero=!0}}
function DetectorGK(player){if(room.getScores().time>=0.2){var players=room.getPlayerList();var redPlayers=players.filter(player=>player.team===1);var bluePlayers=players.filter(player=>player.team===2);ArqueroRED=redPlayers.reduce((minXPlayer,currentPlayer)=>{return minXPlayer.position.x<currentPlayer.position.x?minXPlayer:currentPlayer},redPlayers[0]);ArqueroBLUE=bluePlayers.reduce((maxXPlayer,currentPlayer)=>{return maxXPlayer.position.x>currentPlayer.position.x?maxXPlayer:currentPlayer},bluePlayers[0]);var message="🔴 🧤⚽ GK "+teamRed+": "+(ArqueroRED?ArqueroRED.name:"No tiene")+" ------- 🔵 🧤⚽ GK "+teamBlue+": "+(ArqueroBLUE?ArqueroBLUE.name:"No tiene")}}
function GetTeam(id){return room.getPlayerList().filter((player)=>player.id!=0&&player.team==id)}
function CreatePlayer(player){ListaDeJugadores[ListaDeJugadores.length]={name:player.name,id:player.id,auth:undefined,conn:undefined,jointime:0}}
function DeletePlayer(id){for(var i=0;i<ListaDeJugadores.length;i++){if(ListaDeJugadores[i].id==id){ListaDeJugadores.splice(i,1)}}}
function GetPlayer(id){for(var i=0;i<ListaDeJugadores.length;i++){if(ListaDeJugadores[i].id==id){return ListaDeJugadores[i]}}}
function GetIDByName(name){for(var i=0;i<ListaDeJugadores.length;i++){if(ListaDeJugadores[i].name==name){return ListaDeJugadores[i].id}}}
function GetAuthByID(id){for(var i=0;i<ListaDeJugadores.length;i++){if(ListaDeJugadores[i].id==id){return GetPlayer(ListaDeJugadores[i].id).auth}}}
function generar_respuesta_aleatoria(player){var respuestas=["Sí. 🗿","Naa, ni en pedo flaco ❌","Puede ser capo... ಠ_ಠ","Obvio que sí, papá (ง︡'-'︠)ง","Ni a palos, hermano ❎","Capaz, ¿por qué no? 🤔","Sin duda alguna rey 💯","¡Por supuesto que sí! (ง︡'-'︠)ง","Es probable 🤔","No ❌","Sin duda alguna, hermano 💯","¡Ni en pedo, flaco! ❌","Podría ser, no te aseguro nada capo 🤔","Totalmente rey 💯","No, olvidate ❎","Ni en pedo, ni lo sueñes ❌","Tristemente sí. ಥ_ಥ","Tristemente no. ಥ_ಥ",];var respuesta=respuestas[Math.floor(Math.random()*respuestas.length)];return respuesta}
function removeAccents(str){const accents="ÁÉÍÓÚáéíóú";const replacements="AEIOUaeiou";const accentMap=new Map();for(let i=0;i<accents.length;i++){accentMap.set(accents[i],replacements[i])}
return str.replace(/[ÁÉÍÓÚáéíóú]/g,(character)=>accentMap.get(character))}
function shuffleTeams(){const players=room.getPlayerList();const activePlayers=players.filter(player=>!player.spectator);const team1Players=activePlayers.filter(player=>player.team===1);const team2Players=activePlayers.filter(player=>player.team===2);const shuffledPlayers=shuffleArray(team1Players.concat(team2Players));const totalPlayers=shuffledPlayers.length;const halfPlayers=Math.floor(totalPlayers/2);for(let i=0;i<totalPlayers;i++){const player=shuffledPlayers[i];const team=(i<halfPlayers)?1:2;room.setPlayerTeam(player.id,team)}
const remainingPlayers=players.filter(player=>!activePlayers.includes(player));for(const player of remainingPlayers){room.setPlayerTeam(player.id,0)}
room.sendAnnouncement("¡Los equipos han sido mezclados de forma aleatoria!")}
function balanceTeams(){const players=room.getPlayerList();const activePlayers=players.filter(player=>!player.spectator);const totalPlayers=activePlayers.length;const targetPlayersPerTeam=Math.floor(totalPlayers/2);const team1Players=activePlayers.filter(player=>player.team===1);const team2Players=activePlayers.filter(player=>player.team===2);const diff=Math.abs(team1Players.length-team2Players.length);if(diff>1){const playersToMove=Math.floor(diff/2);if(team1Players.length>team2Players.length){const playersToMoveFromTeam1=team1Players.slice(-playersToMove);for(const player of playersToMoveFromTeam1){room.setPlayerTeam(player.id,2)}}else{const playersToMoveFromTeam2=team2Players.slice(-playersToMove);for(const player of playersToMoveFromTeam2){room.setPlayerTeam(player.id,1)}}
room.sendAnnouncement("¡Los equipos han sido equilibrados!")}else{room.sendAnnouncement("No es necesario equilibrar los equipos.")}}
function autoBalanceTeams(){if(!autoBalanceEnabled||autoBalancePaused){return}
const players=room.getPlayerList();const activePlayers=players.filter(player=>!player.spectator);const totalPlayers=activePlayers.length;const targetPlayersPerTeam=Math.floor(totalPlayers/2);const team1Players=activePlayers.filter(player=>player.team===1);const team2Players=activePlayers.filter(player=>player.team===2);const diff=Math.abs(team1Players.length-team2Players.length);if(diff>1){const playersToMove=Math.floor(diff/2);if(team1Players.length>team2Players.length){const playersToMoveFromTeam1=team1Players.slice(-playersToMove);for(const player of playersToMoveFromTeam1){room.setPlayerTeam(player.id,2)}}else{const playersToMoveFromTeam2=team2Players.slice(-playersToMove);for(const player of playersToMoveFromTeam2){room.setPlayerTeam(player.id,1)}}
room.sendAnnouncement("¡Los equipos han sido equilibrados automáticamente! 🔄⚖️",null,0x00ff00,"bold",0)}}
function sendAnnouncementInChat(message,targetId,color,style,sound){room.sendAnnouncement(message,targetId,color,style,sound)}
function getRankEmoji(rank){const rankEmojis=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","1️⃣0️⃣","1️⃣1️⃣","1️⃣2️⃣","1️⃣3️⃣","1️⃣4️⃣","1️⃣5️⃣","1️⃣6️⃣","1️⃣7️⃣","1️⃣8️⃣","1️⃣9️⃣","2️⃣0️⃣","2️⃣1️⃣","2️⃣2️⃣","2️⃣3️⃣","2️⃣4️⃣","2️⃣5️⃣","2️⃣6️⃣","2️⃣7️⃣","2️⃣8️⃣","2️⃣9️⃣","3️⃣0️⃣","3️⃣1️⃣","3️⃣2️⃣","3️⃣3️⃣","3️⃣4️⃣","3️⃣5️⃣","3️⃣6️⃣","3️⃣7️⃣","3️⃣8️⃣","3️⃣9️⃣","4️⃣0️⃣","4️⃣1️⃣","4️⃣2️⃣","4️⃣3️⃣","4️⃣4️⃣","4️⃣5️⃣","4️⃣6️⃣","4️⃣7️⃣","4️⃣8️⃣","4️⃣9️⃣","5️⃣0️⃣","5️⃣1️⃣","5️⃣2️⃣","5️⃣3️⃣","5️⃣4️⃣","5️⃣5️⃣","5️⃣6️⃣","5️⃣7️⃣","5️⃣8️⃣","5️⃣9️⃣","6️⃣0️⃣","6️⃣1️⃣","6️⃣2️⃣","6️⃣3️⃣","6️⃣4️⃣","6️⃣5️⃣","6️⃣6️⃣","6️⃣7️⃣","6️⃣8️⃣","6️⃣9️⃣","7️⃣0️⃣","7️⃣1️⃣","7️⃣2️⃣","7️⃣3️⃣","7️⃣4️⃣","7️⃣5️⃣","7️⃣6️⃣","7️⃣7️⃣","7️⃣8️⃣","7️⃣9️⃣","8️⃣0️⃣","8️⃣1️⃣","8️⃣2️⃣","8️⃣3️⃣","8️⃣4️⃣","8️⃣5️⃣","8️⃣6️⃣","8️⃣7️⃣","8️⃣8️⃣","8️⃣9️⃣","9️⃣0️⃣","9️⃣1️⃣","9️⃣2️⃣","9️⃣3️⃣","9️⃣4️⃣","9️⃣5️⃣","9️⃣6️⃣","9️⃣7️⃣","9️⃣8️⃣","9️⃣9️⃣","1️⃣0️⃣0️⃣","1️⃣0️⃣1️⃣","1️⃣0️⃣2️⃣","1️⃣0️⃣3️⃣","1️⃣0️⃣4️⃣","1️⃣0️⃣5️⃣","1️⃣0️⃣6️⃣","1️⃣0️⃣7️⃣","1️⃣0️⃣8️⃣","1️⃣0️⃣9️⃣","1️⃣1️⃣0️⃣","1️⃣1️⃣1️⃣","1️⃣1️⃣2️⃣","1️⃣1️⃣3️⃣","1️⃣1️⃣4️⃣","1️⃣1️⃣5️⃣","1️⃣1️⃣6️⃣","1️⃣1️⃣7️⃣","1️⃣1️⃣8️⃣","1️⃣1️⃣9️⃣","1️⃣2️⃣0️⃣","1️⃣2️⃣1️⃣","1️⃣2️⃣2️⃣","1️⃣2️⃣3️⃣","1️⃣2️⃣4️⃣","1️⃣2️⃣5️⃣","1️⃣2️⃣6️⃣","1️⃣2️⃣7️⃣","1️⃣2️⃣8️⃣","1️⃣2️⃣9️⃣","1️⃣3️⃣0️⃣","1️⃣3️⃣1️⃣","1️⃣3️⃣2️⃣","1️⃣3️⃣3️⃣","1️⃣3️⃣4️⃣","1️⃣3️⃣5️⃣","1️⃣3️⃣6️⃣","1️⃣3️⃣7️⃣","1️⃣3️⃣8️⃣","1️⃣3️⃣9️⃣","1️⃣4️⃣0️⃣","1️⃣4️⃣1️⃣","1️⃣4️⃣2️⃣","1️⃣4️⃣3️⃣","1️⃣4️⃣4️⃣","1️⃣4️⃣5️⃣","1️⃣4️⃣6️⃣","1️⃣4️⃣7️⃣","1️⃣4️⃣8️⃣","1️⃣4️⃣9️⃣","1️⃣5️⃣0️⃣","1️⃣5️⃣1️⃣","1️⃣5️⃣2️⃣","1️⃣5️⃣3️⃣","1️⃣5️⃣4️⃣","1️⃣5️⃣5️⃣","1️⃣5️⃣6️⃣","1️⃣5️⃣7️⃣","1️⃣5️⃣8️⃣","1️⃣5️⃣9️⃣","1️⃣6️⃣0️⃣","1️⃣6️⃣1️⃣","1️⃣6️⃣2️⃣","1️⃣6️⃣3️⃣","1️⃣6️⃣4️⃣","1️⃣6️⃣5️⃣","1️⃣6️⃣6️⃣","1️⃣6️⃣7️⃣","1️⃣6️⃣8️⃣","1️⃣6️⃣9️⃣","1️⃣7️⃣0️⃣","1️⃣7️⃣1️⃣","1️⃣7️⃣2️⃣","1️⃣7️⃣3️⃣","1️⃣7️⃣4️⃣","1️⃣7️⃣5️⃣","1️⃣7️⃣6️⃣","1️⃣7️⃣7️⃣","1️⃣7️⃣8️⃣","1️⃣7️⃣9️⃣","1️⃣8️⃣0️⃣","1️⃣8️⃣1️⃣","1️⃣8️⃣2️⃣","1️⃣8️⃣3️⃣","1️⃣8️⃣4️⃣","1️⃣8️⃣5️⃣","1️⃣8️⃣6️⃣","1️⃣8️⃣7️⃣","1️⃣8️⃣8️⃣","1️⃣8️⃣9️⃣","1️⃣9️⃣0️⃣","1️⃣9️⃣1️⃣","1️⃣9️⃣2️⃣","1️⃣9️⃣3️⃣","1️⃣9️⃣4️⃣","1️⃣9️⃣5️⃣","1️⃣9️⃣6️⃣","1️⃣9️⃣7️⃣","1️⃣9️⃣8️⃣","1️⃣9️⃣9️⃣","2️⃣0️⃣0️⃣"];return rank<rankEmojis.length?rankEmojis[rank]:rankEmojis[3]}
function getNumericEmoji(number){const numericEmojis=["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];return number.toString().split("").map((digit)=>numericEmojis[parseInt(digit)]).join("")}
let adminVotingActive=!1;let adminVotes={};let kickVotingActive=!1;let kickVotes={};function getLevelInfo(points){if(points>=0&&points<0.7){return{level:"Noob 😅 (Nivel 1)",nextPoints:0.7-points,nextLevel:"Amateur 🎮 (Nivel 2)"}}else if(points>=0.7&&points<1){return{level:"Amateur 🎮 (Nivel 2)",nextPoints:1-points,nextLevel:"Aficionado ⚽️ (Nivel 3)"}}else if(points>=1&&points<2){return{level:"Aficionado ⚽️ (Nivel 3)",nextPoints:2-points,nextLevel:"Promesa 🌱 (Nivel 4)"}}else if(points>=2&&points<3){return{level:"Promesa 🌱 (Nivel 4)",nextPoints:3-points,nextLevel:"Avanzado 🚀 (Nivel 5)"}}else if(points>=3&&points<4){return{level:"Avanzado 🚀 (Nivel 5)",nextPoints:4-points,nextLevel:"Experto 🧠 (Nivel 6)"}}else if(points>=4&&points<5){return{level:"Experto 🧠 (Nivel 6)",nextPoints:5-points,nextLevel:"Profesional 🎯 (Nivel 7)"}}else if(points>=5&&points<10){return{level:"Profesional 🎯 (Nivel 7)",nextPoints:10-points,nextLevel:"Estrella ⭐ (Nivel 8)"}}else if(points>=10&&points<20){return{level:"Estrella ⭐ (Nivel 8)",nextPoints:20-points,nextLevel:"Distinto 👽 (Nivel 9)"}}else if(points>=20&&points<30){return{level:"Distinto 👽 (Nivel 9)",nextPoints:30-points,nextLevel:"Maestro 🎓 (Nivel 10)"}}else if(points>=30&&points<40){return{level:"Maestro 🎓 (Nivel 10)",nextPoints:40-points,nextLevel:"Sobrenatural 🌌 (Nivel 11)"}}else if(points>=40&&points<50){return{level:"Sobrenatural 🌌 (Nivel 11)",nextPoints:50-points,nextLevel:"Crack 💥 (Nivel 12)"}}else if(points>=50&&points<60){return{level:"Crack 💥 (Nivel 12)",nextPoints:60-points,nextLevel:"Figura Máxima 👑 (Nivel 13)"}}else if(points>=60&&points<70){return{level:"Figura Máxima 👑 (Nivel 13)",nextPoints:70-points,nextLevel:"Elite 💎 (Nivel 14)"}}else if(points>=70&&points<80){return{level:"Elite 💎 (Nivel 14)",nextPoints:80-points,nextLevel:"Invencible 🛡️ (Nivel 15)"}}else if(points>=80&&points<90){return{level:"Invencible 🛡️ (Nivel 15)",nextPoints:90-points,nextLevel:"Prodigio 🌟 (Nivel 16)"}}else if(points>=90&&points<95){return{level:"Prodigio 🌟 (Nivel 16)",nextPoints:95-points,nextLevel:"Leyenda 🏆 (Nivel 17)"}}else if(points>=95&&points<100){return{level:"Leyenda 🏆 (Nivel 17)",nextPoints:100-points,nextLevel:"Legendario 🐉 Bronce (Nivel 18)"}}else if(points>=100&&points<110){return{level:"Legendario 🐉 Bronce (Nivel 18) 🥉",nextPoints:110-points,nextLevel:"Legendario 🐉 Plata (Nivel 19) 🥈"}}else if(points>=110&&points<120){return{level:"Legendario 🐉 Plata (Nivel 19) 🥈",nextPoints:120-points,nextLevel:"Legendario 🐉 Oro (Nivel 20) 🥇"}}else if(points>=120&&points<130){return{level:"Legendario 🐉 Oro (Nivel 20) 🥇",nextPoints:130-points,nextLevel:"Legendario 🐉 Zafiro (Nivel 21) 🔷"}}else if(points>=130&&points<140){return{level:"Legendario 🐉 Zafiro (Nivel 21) 🔷",nextPoints:140-points,nextLevel:"Legendario 🐉 Rubí (Nivel 22) 🔴"}}else if(points>=140&&points<150){return{level:"Legendario 🐉 Rubí (Nivel 22) 🔴",nextPoints:150-points,nextLevel:"Legendario 🐉 Esmeralda (Nivel 23) 🟢"}}else if(points>=150&&points<160){return{level:"Legendario 🐉 Esmeralda (Nivel 23) 🟢",nextPoints:160-points,nextLevel:"Legendario 🐉 Amatista (Nivel 24) 🟣"}}else if(points>=160&&points<170){return{level:"Legendario 🐉 Amatista (Nivel 24) 🟣",nextPoints:170-points,nextLevel:"Legendario 🐉 Perla (Nivel 25) ⚪"}}else if(points>=170&&points<180){return{level:"Legendario 🐉 Perla (Nivel 25) ⚪",nextPoints:180-points,nextLevel:"Legendario 🐉 Obsidiana (Nivel 26) ⚫"}}else if(points>=180&&points<190){return{level:"Legendario 🐉 Obsidiana (Nivel 26) ⚫",nextPoints:190-points,nextLevel:"Legendario 🐉 Diamante (Nivel 27) 💎"}}else{return{level:"Legendario 🐉 Diamante (Nivel 27) 💎",nextPoints:0,nextLevel:null}}}
var AnuncioGolDeOro=!1;let playerStats={};function getLastGamesMessage(playerName){const lastGames=getLastGames(playerName);const reversedLastGames=lastGames.reverse();const lastGamesMessage=`📊 Historial (Últimos 10 Partidos): ${reversedLastGames.map(getResultEmoji).join('')}`;return lastGamesMessage}
function getLastGames(playerName){if(!playerStats[playerName]||!playerStats[playerName].gameResults){return[]}
const gameResults=playerStats[playerName].gameResults;const startIndex=Math.max(0,gameResults.length-10);const lastGames=gameResults.slice(startIndex);return lastGames}
function getResultEmoji(result){if(result==='victory'){return'✅'}else if(result==='draw'){return'➖'}else if(result==='defeat'){return'❌'}
return''}
function updatePlayerStats(playerName,result){if(!playerStats[playerName]){playerStats[playerName]={victories:0,draws:0,defeats:0,totalGames:0,currentStreak:0,highestStreak:0,gameResults:[]}}
playerStats[playerName].totalGames++;if(result==='victory'){playerStats[playerName].victories++;playerStats[playerName].currentStreak++;playerStats[playerName].highestStreak=Math.max(playerStats[playerName].highestStreak,playerStats[playerName].currentStreak)}else if(result==='draw'){playerStats[playerName].draws++;playerStats[playerName].currentStreak=0}else if(result==='defeat'){playerStats[playerName].defeats++;playerStats[playerName].currentStreak=0}
if(!Array.isArray(playerStats[playerName].gameResults)){playerStats[playerName].gameResults=[]}
playerStats[playerName].gameResults.push(result);playerStats[playerName].highestStreak=playerStats[playerName].highestStreak||0;playerStats[playerName].currentStreak=playerStats[playerName].currentStreak||0;localStorage.setItem(playerName,JSON.stringify(playerStats[playerName]))}
function llamarAdmins(playerName,motivo){const mensaje=`# 🚨 LLAMARON A LOS ADMINS 🚨\n## El jugador ${playerName} está llamando a los administradores del host.   ||<@&${RolAdminHost}> ||\n# 🔗 LINK DEL HOST: ${roomLink}\n# 🔑 CLAVE PARA SER ADMINISTRADOR: ||${ClaveParaSerAdmin}|| \n# 📑 MOTIVO: ${motivo}`;const webhook=new XMLHttpRequest();webhook.open('POST',WebhookParaLlamarAdmins);const formData=new FormData();formData.append('content',mensaje);webhook.send(formData)}
const MIN_PLAYERS_FOR_MAP_VOTE=3;const MAP_VOTE_DURATION=60;let mapVotes={};let mapVotingActive=!1;function startMapVoting(){const totalPlayers=room.getPlayerList().length;const votesNeeded=Math.floor(totalPlayers/2)+1;if(!mapVotingActive&&totalPlayers>=MIN_PLAYERS_FOR_MAP_VOTE){mapVotingActive=!0;mapVotes={};setTimeout(function(){endMapVoting()},MAP_VOTE_DURATION*1000);room.sendAnnouncement(`🗳️ 🔄 ¡LA VOTACIÓN PARA CAMBIAR DE MAPA HA COMENZADO! Escribe "!votarmapa nombre_del_mapa" para votar por un mapa. Se necesitan al menos ${votesNeeded} votos para finalizar la votación. 🏟️✅`,null,0xFFA359,"bold",2)}}
function endMapVoting(){if(mapVotingActive){mapVotingActive=!1;let maxVotes=0;let winningMap=null;for(const votedMap in mapVotes){const voteCount=mapVotes[votedMap].length;if(voteCount>maxVotes){maxVotes=voteCount;winningMap=votedMap}}
if(winningMap!==null&&isMajorityVote(maxVotes,room.getPlayerList().length)){applyMapConfiguration(winningMap);room.sendAnnouncement(`¡La Votación de Mapa ha llegado a su Fin! 🗳️ | 🌟 ¡Gracias a todos por participar! ${getVoteResultsString()} 🎉`,null,0xffe32b,"bold",0)}else{room.sendAnnouncement('La votación no ha tenido éxito. No se ha seleccionado un mapa mayoritario. ❌🗳️',null,0xff4d4d,"bold",0)}}}
async function applyMapConfiguration(winningMap,message){if(winningMap==='entrenamientofutsal'||winningMap==='futx5'||winningMap==='futx7'||winningMap==='futx2'||winningMap==='futx3'||winningMap==='futx4'||winningMap==='futx5cesped'){room.stopGame();if(isMajorityVote(mapVotes[winningMap].length,room.getPlayerList().length)){await new Promise(resolve=>setTimeout(resolve,300));if(winningMap==='realfutsal'){currentMap=getMapName(message);room.setCustomStadium(getRealFutsal());room.setScoreLimit(0);room.setTimeLimit(0)}else if(winningMap==='futx5'){currentMap=getMapName(message);room.setCustomStadium(getFutx5Map());room.setScoreLimit(5);room.setTimeLimit(5)}else if(winningMap==='futx5cesped'){currentMap=getMapName(message);room.setCustomStadium(getFutx5cespedMap());room.setScoreLimit(3);room.setTimeLimit(4)}else if(winningMap==='entrenamientofutsal'){currentMap=getMapName(message);room.setCustomStadium(getEntrenamientoFutsalMap());room.setScoreLimit(0);room.setTimeLimit(0)}else if(winningMap==='futx7'){currentMap=getMapName(message);room.setCustomStadium(getFutx7Map());room.setScoreLimit(4);room.setTimeLimit(10)}else if(winningMap==='campeones'){isAFKpaused=!0;currentMap=getMapName(message);room.setCustomStadium(getCampeonesMap());room.setScoreLimit(0);room.setTimeLimit(0)}else if(winningMap==='futx2'){currentMap=getMapName(message);room.setCustomStadium(getFutx2Map());room.setScoreLimit(3);room.setTimeLimit(3)}else if(winningMap==='futx3'){currentMap=getMapName(message);room.setCustomStadium(getFutx3Map());room.setScoreLimit(3);room.setTimeLimit(3)}else if(winningMap==='futx4'){currentMap=getMapName(message);room.setCustomStadium(getFutx4Map());room.setScoreLimit(4);room.setTimeLimit(4)}
await new Promise(resolve=>setTimeout(resolve,300));room.startGame()}else{room.sendAnnouncement(`El mapa "${winningMap}" no ha obtenido más de la mitad de los votos. No se realizarán cambios. 🚫`,null,0xff2b52,"bold",0)}}}
function isMajorityVote(votes,totalPlayers){return votes>Math.floor(totalPlayers/2)}
function getVoteResultsString(){let resultsString='';for(const votedMap in mapVotes){resultsString+=`"${votedMap}": ${mapVotes[votedMap].length} votos, `}
return resultsString.slice(0,-2)}
const discordQueue=[];let discordSending=!1;const DISCORD_DELAY=1100;function enqueueDiscord(payload){discordQueue.push(payload);processDiscordQueue()}
function processDiscordQueue(){if(discordSending||discordQueue.length===0)return;discordSending=!0;const payload=discordQueue.shift();fetch(webhookMensajesJugadores,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}).catch(()=>{}).finally(()=>{setTimeout(()=>{discordSending=!1;processDiscordQueue()},DISCORD_DELAY)})}
const discordCooldown={};const DISCORD_PLAYER_COOLDOWN=1500;function canSendToDiscord(playerId){const now=Date.now();if(!discordCooldown[playerId]||now-discordCooldown[playerId]>=DISCORD_PLAYER_COOLDOWN){discordCooldown[playerId]=now;return!0}
return!1}
let lastDiscordGlobal=0;const DISCORD_GLOBAL_COOLDOWN=900;function canSendGlobal(){const now=Date.now();if(now-lastDiscordGlobal>=DISCORD_GLOBAL_COOLDOWN){lastDiscordGlobal=now;return!0}
return!1}
const floodData={};function registerFlood(player){const id=player.id;if(!floodData[id]){floodData[id]={count:0,timer:null,name:player.name}}
floodData[id].count++;if(!floodData[id].timer){floodData[id].timer=setTimeout(()=>{const count=floodData[id].count;const name=floodData[id].name;if(count>3){enqueueDiscord({embeds:[{description:`🚫 **${count} mensajes omitidos de ${name} por flood**`,color:0xFF0000,timestamp:new Date().toISOString()}]})}
delete floodData[id]},3000)}}
function sendChatToDiscord(player,message){if(!canSendToDiscord(player.id)){registerFlood(player);return}
if(!canSendGlobal()){registerFlood(player);return}
if(/[@#*]/.test(message))return;const color=player.admin?0xFFD700:player.team===1?0xff8e8e:player.team===2?0x8eb1ff:0xf0f6ff;enqueueDiscord({embeds:[{description:`**${player.name}:** ${message}`,color,timestamp:new Date().toISOString()}]})}
var ultimaLlamadaAdmins=0;var TiempoEsperaEnMilisegundos=tiempoEsperaAdminsEnMinutos*60*1000;var ofiHabilitado=!1;var jugadoresFirmados=[];var usedValues={};var lastCommandUse={};var cooldown=15*1000;var comentarios={micropene:["¡Es más fácil encontrar a Wally que eso!","¡Ese tiene que ser el Minion más pequeño que existe!","¡Eso no es un pito, es un error de la fábrica!","¿Necesitas pinzas para manejar eso?","¡Es tan chiquito que ni el Viagra lo encuentra!","¡Eso es más chico que la autoestima de un cornudo!","¡Necesitás un microscopio para ver esa mierda!","¡Parece que la madre naturaleza se quedó sin material!","¡Eres la definición viviente de 'chiquito pero peligroso'!"],debajoPromedio:["¡Tranquilo! No todos pueden ser estrellas porno.","¡A veces menos es más... o eso dicen!","¡La compensación viene en otras áreas, amigo!","¡No te preocupes, el carisma lo es todo!","¡Vos te bajás los pantalones y sube la autoestima de todos!","¡Con eso no hacés ni cosquillas!","¡Eso es tan chico que ni para mear bien sirve!"],promedio:["¡Ni muy grande ni muy pequeño, perfecto para cualquier agujero!","¡Eres el término medio, el equilibrio perfecto!","¡Lo importante es cómo lo usas, dicen por ahí!","¡No es el tamaño, es cómo lo mueves!","¡Lo justo para no pasar vergüenza, pero tampoco para presumir!","¡Cumplís, pero sin pena ni gloria!"],encimaPromedio:["¡Tenés un misil entre las piernas!","¡El tamaño sí importa, y lo sabes!","¡Te bajás los pantalones y aplauden!","¡Con eso podés asustar hasta a King Kong!","¡Tremenda anaconda tenes ahí!","¡Te bajás los pantalones y parece una película porno!","¡Con esa cosa puedes hacer feliz a varias de una vez!","¡Cuidado, que eso podría necesitar un permiso de armas!"],grande:["¡Con eso hasta los caballos te respetan!","¡Con eso podés colgar la ropa de toda la cuadra!","¡Eso sí que es un 'paquete' de verdad!","¡Eres el orgullo del Host!","¡Con eso puedes hacer sombras en un día soleado!","¡Eso podría causar un eclipse solar!","¡Eso no es un pene, es un arma de destrucción masiva!"]};function obtenerComentario(valor){if(valor>=1&&valor<=7){return comentarios.micropene[Math.floor(Math.random()*comentarios.micropene.length)]}else if(valor>7&&valor<=12){return comentarios.debajoPromedio[Math.floor(Math.random()*comentarios.debajoPromedio.length)]}else if(valor>12&&valor<=16){return comentarios.promedio[Math.floor(Math.random()*comentarios.promedio.length)]}else if(valor>16&&valor<=20){return comentarios.encimaPromedio[Math.floor(Math.random()*comentarios.encimaPromedio.length)]}else{return comentarios.grande[Math.floor(Math.random()*comentarios.grande.length)]}}
function sendTeamMessage(player,teamMsg){const teamColor=player.team==1?RedTeamChatColor:BlueTeamChatColor;const teamIcon=player.team==1?'🔴':'🔵';const teamPlayers=room.getPlayerList().filter(p=>p.team==player.team);teamPlayers.forEach(p=>{room.sendAnnouncement(`[TEAM CHAT ${teamIcon}] ${player.name}: ${teamMsg}`,p.id,teamColor,"bold",2)})}
function getMentionedPlayers(message){return message.split(' ').reduce((mentioned,word)=>{if(word.startsWith('@')){const playerName=word.substring(1).replace(/_/g,' ');const player=room.getPlayerList().find(p=>p.name.toLowerCase()===playerName.toLowerCase());if(player)mentioned.push(player);}
return mentioned},[])}
function getPlayerPrefix(player){const option=ColocarJuntoAlNickname.toLowerCase();if(option==="nivel"){const goals=totalPlayerGoals[player.name]||0;const assists=totalPlayerAssists[player.name]||0;const totalPoints=goals+(assists*0.7);const levelInfo=getLevelInfo(totalPoints);return `«${levelInfo.level}»`}else if(option==="id"){return `« 🆔: ${player.id} »`}else{return ``}}
function sendMentionedMessage(player,message,mentionedPlayers,color,roleName){const prefix=getPlayerPrefix(player);mentionedPlayers.forEach(mentionedPlayer=>{room.sendAnnouncement(`【${prefix} ${roleName}】 ${player.name} :    ${message}`,mentionedPlayer.id,color,"bold",2)})}
function sendMessageToOthers(player,message,mentionedPlayers,color,roleName){const prefix=getPlayerPrefix(player);room.getPlayerList().forEach(p=>{if(!mentionedPlayers.includes(p)){const roleAttr=RoleAttributes[roleName]||{style:"normal",sound:1};room.sendAnnouncement(`【${prefix}${roleName}】 ${player.name} :    ${message}`,p.id,color,roleAttr.style,roleAttr.sound)}})}
function handleMentions(player,message,color,roleName,isAdmin){const prefix=getPlayerPrefix(player);const allPlayers=room.getPlayerList();if(message.toLowerCase().includes('@everyone')&&isAdmin){allPlayers.forEach(p=>{room.sendAnnouncement(`【${prefix}${roleName}】 ${player.name} :    ${message}`,p.id,color,"bold",2)});return!1}
if(message.toLowerCase().includes('@here')&&isAdmin){allPlayers.forEach(p=>{const isAFK=afkPlayerIDs.has(p.id);room.sendAnnouncement(`【${prefix}${roleName}】 ${player.name} :    ${message}`,p.id,color,isAFK?"normal":"bold",isAFK?1:2)});return!1}
return!0}
function handleCooldown(player){if(!cooldownEnabled){return!0}
const now=Date.now();if(player.admin){return!0}
if(!messageTimestamps[player.id]){messageTimestamps[player.id]=[]}
messageTimestamps[player.id]=messageTimestamps[player.id].filter(timestamp=>now-timestamp<MESSAGE_COOLDOWN);messageTimestamps[player.id].push(now);if(playerCooldowns[player.id]&&now<playerCooldowns[player.id]){whisper(`[⚠️] Estás escribiendo demasiado rápido. Espera unos segundos antes de enviar otro mensaje.`,player.id);return!1}
if(messageTimestamps[player.id].length>SPAM_LIMIT){playerCooldowns[player.id]=now+COOLDOWN_TIME;spamWarnings[player.id]=(spamWarnings[player.id]||0)+1;if(spamWarnings[player.id]>=KICK_THRESHOLD){room.kickPlayer(player.id,"Has sido expulsado por spam.",!1);return!1}else{whisper(`[⚠️] Has enviado demasiados mensajes rápidamente. Estás en cooldown por ${COOLDOWN_TIME / 1000} segundos. Advertencia ${spamWarnings[player.id]} de ${KICK_THRESHOLD}.`,player.id)}
return!1}
return!0}
function handleAdminCommand(player,message){const[command,...args]=message.toLowerCase().split(" ");switch(command){case "!spam_limit":if(args.length===1&&!isNaN(args[0])){SPAM_LIMIT=parseInt(args[0],10);room.sendAnnouncement(`[INFO] ${player.name} ha actualizado SPAM_LIMIT a ${SPAM_LIMIT}`,null,adminChatColor,"bold",1)}else{room.sendAnnouncement(`[ERROR] Uso: !SPAM_LIMIT <Cantidad de Mensajes>`,player.id,adminChatColor,"bold",1)}
return!1;case "!cooldown_time":if(args.length===1&&!isNaN(args[0])){COOLDOWN_TIME=parseInt(args[0],10)*1000;room.sendAnnouncement(`[INFO] ${player.name} ha actualizado COOLDOWN_TIME a ${COOLDOWN_TIME / 1000} segundos`,null,adminChatColor,"bold",1)}else{room.sendAnnouncement(`[ERROR] Uso: !COOLDOWN_TIME <Cantidad de Segundos>`,player.id,adminChatColor,"bold",1)}
return!1;case "!toggle_cooldown":cooldownEnabled=!cooldownEnabled;room.sendAnnouncement(`[INFO] ${player.name} ha ${cooldownEnabled ? "habilitado" : "deshabilitado"} el cooldown`,null,adminChatColor,"bold",1);return!1;case "!kick_threshold":if(args.length===1&&!isNaN(args[0])){KICK_THRESHOLD=parseInt(args[0],10);room.sendAnnouncement(`[INFO] ${player.name} ha actualizado KICK_THRESHOLD a ${KICK_THRESHOLD}`,null,adminChatColor,"bold",1)}else{room.sendAnnouncement(`[ERROR] Uso: !KICK_THRESHOLD <Número de Advertencias>`,player.id,adminChatColor,"bold",1)}
return!1;default:return!0}}
function isCooldown(player,command){const now=Date.now();if(!cooldowns[player.name]){cooldowns[player.name]={}}
if(!cooldowns[player.name][command]||now-cooldowns[player.name][command]>COOLDOWN_TIEMPO){cooldowns[player.name][command]=now;return!1}
return!0}
let camisetaRedActual="riv/titular/red";let camisetaBlueActual="boc/titular/blue";const camisetasOrdenRed=Object.keys(camisetasEquipos).filter(c=>c.endsWith("/red"));const camisetasOrdenBlue=Object.keys(camisetasEquipos).filter(c=>c.endsWith("/blue"));function elegirNuevaCamiseta(actualClave,equipoColor){let lista=equipoColor==="red"?camisetasOrdenRed:camisetasOrdenBlue;let indiceActual=lista.indexOf(actualClave);if(indiceActual===-1){return lista[0]}
let siguienteIndice=(indiceActual+1)%lista.length;return lista[siguienteIndice]}
function obtenerCamiseta(equipoClave){let equipo=camisetasEquipos[equipoClave];if(!equipo){room.sendAnnouncement(`[❌] Equipo no encontrado: ${equipoClave}`,null,0xFF0000,"bold",2);return null}
let datos=parseColors(equipo.codigo);if(equipoClave.includes("red")){redAngle=datos.angle;redTextColor=datos.textColor;redColor=datos.colors;teamRed=equipo.nombreEquipo}else if(equipoClave.includes("blue")){blueAngle=datos.angle;blueTextColor=datos.textColor;blueColor=datos.colors;teamBlue=equipo.nombreEquipo}
return{angle:datos.angle,textColor:datos.textColor,colors:datos.colors,nombreEquipo:equipo.nombreEquipo}}
function asignarCamisetaPorClave(equipoClave){let equipo=obtenerCamiseta(equipoClave);if(!equipo)return;if(equipoClave.endsWith("/red")){room.setTeamColors(1,equipo.angle,equipo.textColor,equipo.colors);teamRed=equipo.nombreEquipo;room.sendAnnouncement(`[✅] Camiseta asignada al equipo rojo: ${teamRed}`,null,0x00FF00,"bold",2)}else if(equipoClave.endsWith("/blue")){room.setTeamColors(2,equipo.angle,equipo.textColor,equipo.colors);teamBlue=equipo.nombreEquipo;room.sendAnnouncement(`[✅] Camiseta asignada al equipo azul: ${teamBlue}`,null,0x00FF00,"bold",2)}else{room.sendAnnouncement(`[❌] No se pudo determinar el equipo para la camiseta: ${equipoClave}`,null,0xFF0000,"bold",2)}}
let avatarIntervals={};const AVATAR_COOLDOWN=5000;const playerAvatarCooldowns={};function reemplazarPorEmojis(texto){let palabras=texto.split(" ");return palabras.map(palabra=>reemplazosEmoji[palabra.toLowerCase()]||palabra).join(" ")}
let chatPausado=!1;function getFechaArchivo(){const meses=["ENE","FEB","MAR","ABR","MAY","JUN","JUL","AGO","SEP","OCT","NOV","DIC"];const ahora=new Date();const dia=ahora.getDate().toString().padStart(2,"0");const mes=meses[ahora.getMonth()];const anio=ahora.getFullYear();return `${dia}${mes}${anio}`}
function puedeUsarComando(player){const tiempoIngreso=playerJoinTimes[player.id];if(!tiempoIngreso)return!1;const segundosTranscurridos=(Date.now()-tiempoIngreso)/1000;return segundosTranscurridos>=COOLDOWN_COMANDOS}
room.onPlayerChat=function(player,message){const MensajesJugadores=message.toLowerCase().trim();if((MensajesJugadores.startsWith('!admin')||MensajesJugadores.startsWith('!expulsar'))&&!puedeUsarComando(player)){const tiempoIngreso=playerJoinTimes[player.id];const segundosTranscurridos=(Date.now()-tiempoIngreso)/1000;const segundosRestantes=Math.ceil(COOLDOWN_COMANDOS-segundosTranscurridos);room.sendAnnouncement(`⏳ ${player.name}, aún debes esperar ${segundosRestantes} segundo${segundosRestantes !== 1 ? 's' : ''} antes de poder usar comandos de votación.`,player.id,0xFFFFFF,"bold",2);return!1}
if(message==="!cerrar"&&player.admin){if(grabando){const data=room.stopRecording();grabando=!1;room.sendAnnouncement("💾 Grabación finalizada. Enviando a Discord...",null,0x00FF00,"bold",2);const embed={embeds:[{author:{name:`🎬 GRABACIÓN COMPLETA: ${NombreHost}`,icon_url:player.avatar||""},description:`La grabación ha sido finalizada por **${player.name}**`,color:0xFFD700,timestamp:new Date().toISOString(),footer:{text:"Grabación automática de la sala"}}]};const formEmbed=new FormData();formEmbed.append("payload_json",JSON.stringify(embed));const webhook1=new XMLHttpRequest();webhook1.open("POST",WebhookGrabacionesSalaCompleta);webhook1.send(formEmbed);const nombreArchivo=`${NombreHost}_${getFechaArchivo()}.hbr2`;const file=new File([data],nombreArchivo,{type:"text/plain"});const formFile=new FormData();formFile.append("content","📥🎦 Descargar la repetición del Host:");formFile.append("file",file);const webhook2=new XMLHttpRequest();webhook2.open("POST",WebhookGrabacionesSalaCompleta);webhook2.send(formFile);room.sendAnnouncement("✅ Grabación enviada a Discord correctamente.",null,0x00FF00,"bold",2)}else{room.sendAnnouncement("⚠️ No hay grabación activa.",null,0xFF0000,"bold",2)}
return!1}
if(message==="!pausechat"){if(!player.admin){room.sendAnnouncement("⚠️ 🔴 Sólo los admins pueden usar este comando.",player.id,0xFF0000,"bold",2);return!1}
chatPausado=!chatPausado;if(chatPausado){room.sendAnnouncement("🔇 ⏸️ El chat ha sido pausado. Sólo los admins pueden hablar.",null,0xFFA500,"bold",2)}else{room.sendAnnouncement("💬 ▶️ El chat ha sido reactivado. Todos pueden hablar.",null,0x00FF00,"bold",2)}
return!1}
if(chatPausado&&!player.admin){room.sendAnnouncement("🛑 🚫 El chat está pausado. Sólo los admins pueden hablar.",player.id,0xFF0000,"bold",2);return!1}
if(message.trim().toLowerCase()==="!togglecamisetas"&&player.admin){if(cambioCami){cambioCami=!1;room.sendAnnouncement("👕 !clubcolors DESACTIVADO ❌ | Para camisetas aleatorias usá: !clubcolors",null,0xff363e,"bold",2)}
CamisetasGanaSigue=!CamisetasGanaSigue;let estado=CamisetasGanaSigue?"ACTIVADO":"DESACTIVADO";room.sendAnnouncement(`👕 !togglecamisetas ${estado} | Ganás = mantenés camiseta | Perdés/Empatás = cambia | Para camisetas aleatorias usá: !clubcolors`,null,0x00FFFF,"bold",2);return!1}
if(message.toLowerCase()==="!emoji"){if(jugadoresConEmojis.has(player.id)){jugadoresConEmojis.delete(player.id);whisper("🔕 Modo emoji desactivado. Tus mensajes no se transformarán.",player.id)}else{jugadoresConEmojis.add(player.id);whisper("🔔 Modo emoji activado. Algunas palabras serán reemplazadas por emojis.",player.id)}
return!1}
let lowerMessage=message.toLowerCase();if(lowerMessage.startsWith("!tamañominimo")&&player.admin){let newMinSize=parseInt(message.split(" ")[1]);if(!isNaN(newMinSize)&&newMinSize>0){TamanoMinimoPermitido=newMinSize;room.sendAnnouncement("✅ El tamaño mínimo ha sido cambiado a "+TamanoMinimoPermitido+" por "+player.name,null,0xbfff35,"normal",0)}else{room.sendAnnouncement("❌ Por favor, ingresa un número válido para el tamaño mínimo.",player.id,0xbfff35,"normal",0)}
return!1}
if(lowerMessage.startsWith("!tamañomaximo")&&player.admin){let newMaxSize=parseInt(message.split(" ")[1]);if(!isNaN(newMaxSize)&&newMaxSize>0){TamanoMaximoPermitido=newMaxSize;room.sendAnnouncement("✅ El tamaño máximo ha sido cambiado a "+TamanoMaximoPermitido+" por "+player.name,null,0xbfff35,"normal",0)}else{room.sendAnnouncement("❌ Por favor, ingresa un número válido para el tamaño máximo.",player.id,0xbfff35,"normal",0)}
return!1}
if(lowerMessage.startsWith("!limitesize")&&player.admin){let newLimit=parseInt(message.split(" ")[1]);if(!isNaN(newLimit)&&newLimit>0){CantidadCambiarTamano=newLimit;room.sendAnnouncement("✅ El límite de cambios de tamaño por partido ha sido cambiado a "+CantidadCambiarTamano+" por "+player.name,null,0xbfff35,"normal",0)}else{room.sendAnnouncement("❌ Por favor, ingresa un número válido para el límite de cambios de tamaño.",player.id,0xbfff35,"normal",0)}
return!1}
if(message==="!bazinga"&&player.admin){TipoPelotaFutsal="bazinga";room.sendAnnouncement("Pelota cambiada a Bazinga, detén el juego y escribe !futx2, !futx3, !futx4, !futx5 o !futx7 para colocar el mapa con la nueva pelota",player.id,0x00FF00,"bold",2);return!1}else if(message==="!oveja"&&player.admin){TipoPelotaFutsal="oveja";room.sendAnnouncement("Pelota cambiada a Oveja, detén el juego y escribe !futx2, !futx3, !futx4, !futx5 o !futx7 para colocar el mapa con la nueva pelota",player.id,0x00FF00,"bold",2);return!1}else if(message==="!glh"&&player.admin){TipoPelotaFutsal="glh";room.sendAnnouncement("Pelota cambiada a GLH, detén el juego y escribe !futx2, !futx3, !futx4, !futx5 o !futx7 para colocar el mapa con la nueva pelota",player.id,0x00FF00,"bold",2);return!1}
if(message.toLowerCase()==="!comba"){if(player.admin){combaMode=!combaMode;room.sendAnnouncement(`Modo Comba ${combaMode ? "ACTIVADO ✅" : "DESACTIVADO ❌"}`,null,0xFFD700,"bold",1)}else{room.sendAnnouncement("❌ No tienes permisos para usar este comando.",player.id,0xFF0000,"bold",1)}
return!1}
if(message.toLowerCase()==="!jabulani"){if(player.admin){JabulaniMode=!JabulaniMode;powerShotMode=JabulaniMode;room.sendAnnouncement(`Modo Jabulani ${JabulaniMode ? "ACTIVADO ✅ (PowerShot también activado)" : "DESACTIVADO ❌"}`,null,0xFF4500,"bold",1)}else{room.sendAnnouncement("❌ No tienes permisos para usar este comando.",player.id,0xFF0000,"bold",1)}
return!1}
if(message.startsWith('!avatar ')){let currentTime=Date.now();if(playerAvatarCooldowns[player.id]&&currentTime-playerAvatarCooldowns[player.id]<AVATAR_COOLDOWN){room.sendAnnouncement("⏳ Espera un momento antes de usar este comando nuevamente.",player.id,0xFF0000,"bold",7);return!1}
let avatars=message.substring(8).split(',');if(avatars.length<2){room.sendAnnouncement('Debes ingresar al menos dos avatares separados por comas.',player.id,0xFF0000,'normal',1);return!1}
if(avatarIntervals[player.id]){clearInterval(avatarIntervals[player.id])}
let index=0;avatarIntervals[player.id]=setInterval(()=>{room.setPlayerAvatar(player.id,avatars[index]);index=(index+1)%avatars.length},1000);room.sendAnnouncement(`¡Ciclo de avatares iniciado! Usa !avatarstop para detenerlo.`,player.id,0x00FF00,'normal',1);room.sendAnnouncement(`${player.name} ha utilizado el comando !avatar ${message.substring(8)}`,null,0xFFFFFF,'bold',1);playerAvatarCooldowns[player.id]=currentTime;return!1}
if(message==='!avatarstop'){if(avatarIntervals[player.id]){clearInterval(avatarIntervals[player.id]);delete avatarIntervals[player.id];room.setPlayerAvatar(player.id,null);room.sendAnnouncement(`Ciclo de avatares detenido.`,player.id,0xFFFF00,'normal',1)}else{room.sendAnnouncement(`No tienes un ciclo de avatares activo.`,player.id,0xFF0000,'normal',1)}
return!1}
if(camisetasEquipos.hasOwnProperty(message)&&player.admin){asignarCamisetaPorClave(message);return!1}
if(message==="!pausarafk"&&player.admin){isAFKpaused=!isAFKpaused;let status=isAFKpaused?"⏸️ Detector de AFK PAUSADO.":"▶️ Detector de AFK ACTIVADO.";room.sendAnnouncement(status+" ⚠️",null,0x00FF00,"bold",2);return!1}
const afkKeywords=["mtm","meteme","volvi","estoy","listo"];if(afkKeywords.some(keyword=>message.toLowerCase().includes(keyword))){let currentTime=Date.now();if(playerCooldowns[player.id]&&currentTime-playerCooldowns[player.id]<MESSAGE_COOLDOWN){room.sendAnnouncement("⏳ Espera un momento antes de usar ese comando nuevamente.",player.id,0xFF0000,"bold",7);return!1}
if(!messageTimestamps[player.id]){messageTimestamps[player.id]=[]}
messageTimestamps[player.id].push(currentTime);messageTimestamps[player.id]=messageTimestamps[player.id].filter(timestamp=>currentTime-timestamp<COOLDOWN_TIME);if(messageTimestamps[player.id].length>SPAM_LIMIT){playerCooldowns[player.id]=currentTime;room.sendAnnouncement("🚫 Estás enviando demasiados comandos. Espera antes de volver a usar el comando.",player.id,0xFF0000,"bold",7);return!1}
playerCooldowns[player.id]=currentTime;if(afkKeywords.some(keyword=>message.toLowerCase().includes(keyword))){if(afkPlayerIDs.has(player.id)){clearTimeout(playerInactivity.get(player.id));playerInactivity.delete(player.id);afkPlayerIDs.delete(player.id);if(modoJueganTodos){const blueTeamCount=room.getPlayerList().filter(p=>p.team===1).length;const redTeamCount=room.getPlayerList().filter(p=>p.team===2).length;if(blueTeamCount<=redTeamCount){room.setPlayerTeam(player.id,1)}else{room.setPlayerTeam(player.id,2)}}
room.sendAnnouncement("🚀 ¡"+player.name+" volvió y está listo para jugar! 🎮",null,0x00FFBB,"bold",0)}}
return!1}
if(!handleCooldown(player)){return!1}
const mensajeEnMinusculas=message.toLowerCase();if(mensajeEnMinusculas==="!memide"){if(isCooldown(player,"!memide")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
if(usedValues[player.id]!==undefined){var comentario=obtenerComentario(usedValues[player.id]);room.sendAnnouncement("📏 A "+player.name+" le mide "+usedValues[player.id]+" cm 🍌 "+comentario,null,0xFFFFFF,"bold")}else{var randomValue=Math.random()*(30-1)+1;randomValue=Math.round(randomValue*10)/10;usedValues[player.id]=randomValue;var comentarioNuevo=obtenerComentario(randomValue);room.sendAnnouncement("📏 A "+player.name+" le mide "+randomValue+" cm 🍌 "+comentarioNuevo,null,0xFFFFFF,"bold")}
return!1}
if(mutedPlayers[player.name]&&Date.now()<mutedPlayers[player.name].muteTime){return!1}
if(player.admin===!0){if(message.startsWith("!mute")){const parts=message.split(" ");if(parts.length>=2){const playerId=parseInt(parts[1]);const duration=parts.length>=3?parseInt(parts[2]):Infinity;pushMute(playerId,duration,player.name);return!1}}}
if(message==="!sorteo"){if(player.admin){var team=Math.floor(Math.random()*2)+1;var teamName=(team===1)?teamRed:teamBlue;var emoji=(team===1)?"🔴":"🔵";room.sendAnnouncement("¡El equipo ganador del sorteo es: "+emoji+" "+teamName+"!",null,0xFFFFFF,"bold",2)}else{room.sendAnnouncement("¡Solo los administradores pueden utilizar este comando!",player.id,0xFFFFFF,"normal",1)}
return!1}
if(player.admin&&message==="!reset-stats"){totalPlayerGoals={};totalPlayerAssists={};totalPlayerPoints={};playerGoals={};playerAssists={};playerPoints={};playerGoals2={};playerAssists2={};playerPoints2={};playerFiguraCount={};playerMinutesPlayed={};playerGoalkeeperTime={};playerGoalsReceived={};playerCleanSheets={};localStorage.removeItem('totalPlayerGoals');localStorage.removeItem('totalPlayerAssists');localStorage.removeItem('totalPlayerPoints');localStorage.removeItem('playerGoals2');localStorage.removeItem('playerAssists2');localStorage.removeItem('playerPoints2');localStorage.removeItem('playerFiguraCount');localStorage.removeItem('playerMinutesPlayed');localStorage.removeItem('playerGoalkeeperTime');localStorage.removeItem('playerGoalsReceived');localStorage.removeItem('playerCleanSheets');room.sendAnnouncement("🔄 ¡Todas las estadísticas han sido reiniciadas por el administrador "+player.name+"! 📊🚀",null,0xff6a6a,"bold",1);return!1}
if(player.admin&&message==="!ganasigue"){ganasigueEnabled=!ganasigueEnabled;var status=ganasigueEnabled?"ACTIVADO ✅":"DESACTIVADO ❌";room.sendAnnouncement("⏭️🎮 ¡El sistema 'gana sigue' ha sido "+status+" por "+player.name+"!",null,0xFFFFFF,"bold",1);return!1}
if(message.startsWith("ac ")&&player.admin){var adminMessage="🌟👑 [ADMIN CHAT] - "+player.name+": "+message.substring(2);var adminPlayers=room.getPlayerList().filter(function(p){return p.admin});for(var i=0;i<adminPlayers.length;i++){room.sendAnnouncement(adminMessage,adminPlayers[i].id,0xffdb72,"bold",1)}
return!1}
if(message.startsWith('t ')&&player.team===0){var teamMsg=message.slice(2);var spectators=room.getPlayerList().filter(function(player){return player.team===0});spectators.forEach(function(spectator){room.sendAnnouncement('[SPECT CHAT 👁️] '+player.name+': '+teamMsg,spectator.id,0xc0c0c0,"bold",1)});return!1}
if(player.admin&&message==='!ofi'){ofiHabilitado=!ofiHabilitado;NombreAdmin=player.name;var status=ofiHabilitado?'habilitado':'deshabilitado';var emoji=ofiHabilitado?'✅':'❌';var mensaje=`¡El sistema de firmas para partidos oficiales ha sido ${status} por ${NombreAdmin}! Los jugadores ${ofiHabilitado ? 'pueden' : 'ya no pueden'} firmar utilizando el comando !firmo.`;room.sendAnnouncement(`${emoji}📝 ${mensaje}`,null,0xe5d72f,"bold",2);return!1}
if(ofiHabilitado&&message==='!firmo'){const yaFirmado=jugadoresFirmados.includes(player.name);if(yaFirmado){room.sendAnnouncement(`✋ ¡${player.name} ya has firmado anteriormente!`,player.id,0xff352e,"bold",0)}else{const playerInfo=playerIPs.find(info=>info.nickname===player.name);const playerIP=playerInfo?playerInfo.ip:"IP Desconocida";jugadoresFirmados.push(player.name);sendFirmaToDiscord(player,playerIP);room.sendAnnouncement(`✍️ ¡${player.name} ha firmado!`,player.id,0x05ff02,"bold",0)}
return!1}
if(message.trim().toLowerCase()==="!clubcolors"&&player.admin){if(CamisetasGanaSigue){CamisetasGanaSigue=!1;room.sendAnnouncement("👕 !togglecamisetas DESACTIVADO ❌ | Para mantener camiseta al ganar usá: !togglecamisetas",null,0xff363e,"bold",2)}
toggleSwapColors();return!1}
if(message==="!gks"){sendGKAnnouncement(player);return!1}
const lowerCaseMensaje=message.toLowerCase();if(!mapVotingActive&&room.getPlayerList().length>=MIN_PLAYERS_FOR_MAP_VOTE&&lowerCaseMensaje.startsWith('!votarmapa')){startMapVoting();return!1}
if(mapVotingActive&&lowerCaseMensaje.startsWith('!votarmapa ')){const votedMap=lowerCaseMensaje.slice(11);if(['futx5','futx7','futx2','futx3','futx4','futx5cesped','entrenamientofutsal'].includes(votedMap)&&!ElJugadorYaVoto(player.id,mapVotes)){mapVotes[votedMap]=mapVotes[votedMap]||[];mapVotes[votedMap].push(player.id);room.sendAnnouncement(`🗳️ ¡@${player.name} ha votado por el mapa "${votedMap}"! (${mapVotes[votedMap].length} votos). ✔️`,null,0x0EFF00,"bold",0);room.sendAnnouncement(`🗳️ VOTOS REALIZADOS: ${getVoteResultsString()} | ⏳ VOTOS RESTANTES: ${getRemainingVotes()}`,null,0xFFB600,"bold",0);if(isMajorityVote(mapVotes[votedMap].length,room.getPlayerList().length)){endMapVoting()}}else{room.sendAnnouncement(`[❌] ${player.name}, el mapa que mencionaste no es válido o ya has votado por ese mapa. Asegúrate de usar "!votarmapa <nombre del mapa> y que no hayas votado previamente.`,player.id,0xff2b52,"bold",0)}
return!1}
if(message.startsWith('!puntajes')){const sortedPlayers=Object.entries(playerPoints).sort(([,pointsA],[,pointsB])=>pointsB-pointsA);let announcementMessage="📋 PUNTUACIONES DEL PARTIDO ⚽️🕒:";sortedPlayers.forEach(([playerName,points],index)=>{const emoji=index===0?"🌟 FIGURA ":index===1?"🥈":index===2?"🥉":"➖";const CantidadGolesEnElPartido=playerGoals[playerName]||0;const CantidadAsistenciasEnElPartido=playerAssists[playerName]||0;announcementMessage+=`\n${emoji} ${playerName}: ${points} PUNTOS 🔥 (⚽️ GOLES: ${CantidadGolesEnElPartido} | 👟 ASISTENCIAS: ${CantidadAsistenciasEnElPartido} )`});room.sendAnnouncement(announcementMessage,player.id,0xFFD700,"bold",0);return!1}
if(player.admin&&message.startsWith('!ip')){const ElNickname=message.substr(4).trim();const playerInfo=playerIPs.find(info=>info.nickname===ElNickname);if(playerInfo){room.sendAnnouncement(`🌐🔒 IP de "${ElNickname}": ${playerInfo.ip}`,player.id,0x05ff02,"normal",0)}else{room.sendAnnouncement(`🚫👤 No hubo ningún jugador que haya ingresado con el nickname: "${ElNickname}"`,player.id,0xFF5252,"normal",0)}
return!1}
var args=message.split(" ");if(args[0]==='!minutosllamada'&&args.length===2&&player.admin){const newWaitTime=parseInt(args[1]);if(!isNaN(newWaitTime)&&newWaitTime>=0){TiempoEsperaEnMilisegundos=newWaitTime*60000;room.sendAnnouncement(`Tiempo de espera para !llamaradmins establecido a ${newWaitTime} minutos.`,null,0x00FF00,'bold')}else{room.sendAnnouncement('Por favor, ingrese un valor válido para el tiempo de espera.',player.id,0xFF0000,'bold')}
return!1}
var MensajeEnMinusculas=message.toLowerCase();if(MensajeEnMinusculas.match(/^!llamaradmin(s)?\s*.*$/)){var ahora=new Date().getTime();if(ahora-ultimaLlamadaAdmins>=TiempoEsperaEnMilisegundos){const motivo=args.length>1?message.substring(message.indexOf(" ")+1):"No especifica";llamarAdmins(player.name,motivo);room.sendAnnouncement(`¡${player.name} ha llamado a los administradores para que vengan al host! 🔔`,null,0xFFC83D,'bold');ultimaLlamadaAdmins=ahora}else{room.sendAnnouncement(`Debes esperar al menos ${TiempoEsperaEnMilisegundos / 60000} minutos entre cada llamada a los admins ⏰`,player.id,0xff6666,'bold')}
return!1}
if(message==="!mvp"){let topMVPs=[];for(const playerName in playerFiguraCount){const figuraCount=playerFiguraCount[playerName];topMVPs.push({playerName,figuraCount})}
topMVPs.sort((a,b)=>b.figuraCount-a.figuraCount);topMVPs=topMVPs.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.figuraCount} ${entry.figuraCount === 1 ? 'vez MVP' : 'veces MVP'}`);topMVPs=topMVPs.join("\n");let messageContent=`⚽✨ Tabla de Jugadores MVP ✨⚽\n\n${topMVPs}`;room.sendAnnouncement(messageContent,player.id,0xFFD700,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(message==="!niveles"){const levelTablePart1=`Tabla de Niveles:\nNoob 😅 (Nivel 1) - 0 puntos\nAmateur 🎮 (Nivel 2) - 1 punto\nAficionado ⚽️ (Nivel 3) - 2 puntos\nPromesa 🌱 (Nivel 4) - 3 puntos\nAvanzado 🚀 (Nivel 5) - 4 puntos\nExperto 🧠 (Nivel 6) - 5 puntos\nProfesional 🎯 (Nivel 7) - 10 puntos\nEstrella ⭐ (Nivel 8) - 15 puntos\nDistinto 👽 (Nivel 9) - 20 puntos\nMaestro 🎓 (Nivel 10) - 30 puntos`;const levelTablePart2=`Sobrenatural 🌌 (Nivel 11) - 40 puntos\nCrack 💥 (Nivel 12) - 50 puntos\nFigura Máxima 👑 (Nivel 13) - 60 puntos\nElite 💎 (Nivel 14) - 70 puntos\nInvencible 🛡️ (Nivel 15) - 80 puntos\nProdigio 🌟 (Nivel 16) - 90 puntos\nLeyenda 🏆 (Nivel 17) - 95 puntos\nLegendario 🐉 Bronce (Nivel 18) 🥉 - 100 puntos\nLegendario 🐉 Plata (Nivel 19) 🥈 - 110 puntos`;const levelTablePart3=`Legendario 🐉 Oro (Nivel 20) 🥇 - 120 puntos\nLegendario 🐉 Zafiro (Nivel 21) 🔷 - 130 puntos\nLegendario 🐉 Rubí (Nivel 22) 🔴 - 140 puntos\nLegendario 🐉 Esmeralda (Nivel 23) 🟢 - 150 puntos\nLegendario 🐉 Amatista (Nivel 24) 🟣 - 160 puntos\nLegendario 🐉 Perla (Nivel 25) ⚪ - 170 puntos\nLegendario 🐉 Obsidiana (Nivel 26) ⚫ - 180 puntos\nLegendario 🐉 Diamante (Nivel 27) 💎 - 190 puntos\nNota: 1 gol equivale a 1 punto y 1 asistencia equivale a 0.7 puntos`;setTimeout(function(){room.sendAnnouncement(levelTablePart1,player.id,0xFFFFFF,"normal",0)},0);setTimeout(function(){room.sendAnnouncement(levelTablePart2,player.id,0xFFFFFF,"normal",0)},1000);setTimeout(function(){room.sendAnnouncement(levelTablePart3,player.id,0xFFFFFF,"normal",0)},2000);return!1}
if(player.admin){if(message==="!goldeoro"){GolDeOroActivado=!GolDeOroActivado;if(GolDeOroActivado){room.sendAnnouncement("🌟 El modo Gol de Oro está activado.",null,0xFFD700,"bold")}else{room.sendAnnouncement("🌟 El modo Gol de Oro está desactivado.",null,0xCCCC00,"bold")}
return!1}}
if(player.admin){if(message==="!fairplay"){FairPlayActivado=!FairPlayActivado;if(FairPlayActivado){room.sendAnnouncement("👍 El modo Fair Play está activado.",null,0x00FF00,"bold")}else{room.sendAnnouncement("👎 El modo Fair Play está desactivado.",null,0xFF0000,"bold")}
return!1}}
if(player.admin){if(message==="!automatizado"){if(automatizadoActivado){automatizadoActivado=!1;room.sendAnnouncement("🛑 Modo automatizado desactivado 🛑",null,0x00FF00,"bold")}else{automatizadoActivado=!0;room.sendAnnouncement("✅ Modo automatizado activado ✅",null,0x00FF00,"bold")}
return!1}}
if(RSRMap&&player.admin){if(message.startsWith("!minutos ")){var minutos=parseInt(message.substr(9));if(!isNaN(minutos)){gameTime=minutos;room.sendAnnouncement("La duración del juego ha sido establecida en "+gameTime+" minutos por "+player.name+".",null,0x00FF00,"bold")}
return!1}}
if(mensajeEnMinusculas==="!me"){if(isCooldown(player,"!me")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
const playerId=player.id;const playerName=player.name;const goals=totalPlayerGoals[playerName]||0;const assists=totalPlayerAssists[playerName]||0;const totalPoints=goals+assists*0.7;const levelInfo=getLevelInfo(totalPoints);const minutesPlayed=playerMinutesPlayed[playerName]||0;const goalkeeperTime=playerGoalkeeperTime[playerName]||0;const minutesPlayedInMinutes=(minutesPlayed/60)/60;const goalkeeperTimeInMinutes=(goalkeeperTime/60)/60;const goalPerMinute=goals/minutesPlayedInMinutes;const messageHeader=`🏆 Estadísticas de ${playerName} 🏆`;const goalsMessage=`⚽ Goles: ${getNumericEmoji(goals)}`;const assistsMessage=`👟 Asistencias: ${getNumericEmoji(assists)}`;const minutes=Math.floor(minutesPlayedInMinutes);const seconds=Math.floor((minutesPlayedInMinutes*60)%60);let minutesPlayedMessage="";if(minutesPlayedInMinutes>=60){const hours=Math.floor(minutesPlayedInMinutes/60);const remainingMinutes=minutes-hours*60;minutesPlayedMessage=`⏱️ Tiempo Jugado: ${hours} hora${hours > 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else if(minutesPlayedInMinutes>=1){minutesPlayedMessage=`⏱️ Tiempo Jugado: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else{minutesPlayedMessage=`⏱️ Tiempo Jugado: ${seconds} segundo${seconds > 1 ? 's' : ''}`}
let goalkeeperTimeMessage="";if(goalkeeperTimeInMinutes>=60){const goalkeeperHours=Math.floor(goalkeeperTimeInMinutes/60);const goalkeeperRemainingMinutes=goalkeeperTimeInMinutes-goalkeeperHours*60;const goalkeeperMinutes=Math.floor(goalkeeperRemainingMinutes);const goalkeeperSeconds=Math.floor((goalkeeperRemainingMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperHours} hora${goalkeeperHours > 1 ? 's' : ''}, ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}else if(goalkeeperTimeInMinutes>=1){const goalkeeperMinutes=Math.floor(goalkeeperTimeInMinutes);const goalkeeperSeconds=Math.floor((goalkeeperTimeInMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}else{const goalkeeperSeconds=Math.floor((goalkeeperTimeInMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}
let goalPerMinuteMessage="";let goalFrequencyMessage="";if(goalPerMinute===0){goalPerMinuteMessage="⚽🕒 Promedio de gol por minuto: 0 (No ha marcado goles)"}else{goalPerMinuteMessage=`⚽🕒 Promedio de gol por minuto: ${goalPerMinute.toFixed(2)}`;const goalFrequency=60/goalPerMinute;const hoursBetweenGoals=Math.floor(goalFrequency/3600);const minutesBetweenGoals=Math.floor((goalFrequency%3600)/60);const secondsBetweenGoals=Math.floor(goalFrequency%60);let frequencyMessage="";if(hoursBetweenGoals>0){frequencyMessage+=`${hoursBetweenGoals} hora${hoursBetweenGoals > 1 ? 's' : ''}`}
if(minutesBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}}
if(secondsBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}}
goalFrequencyMessage=` (1 gol cada ${frequencyMessage})`}
const levelMessage=`🔝 Nivel: ${levelInfo.level} | [ ${totalPoints.toFixed(2)} Puntos ]`;const figuraCount=playerFiguraCount[playerName]||0;const figuraCountMessage=`⭐️ Figura del Partido: ${getNumericEmoji(figuraCount)} ${figuraCount === 1 ? 'vez' : 'veces'}`;if(!playerStats[playerName]){playerStats[playerName]={victories:0,draws:0,defeats:0,totalGames:0}}
const totalGamesMessage=`🎮 Partidos Jugados: ${getNumericEmoji(playerStats[playerName].totalGames)}`;const victoryPercentage=(playerStats[playerName].victories/playerStats[playerName].totalGames)*100;const victoryPercentageMessage=`📈 Porcentaje de Victorias: ${victoryPercentage.toFixed(2)}%`;const victoriesMessage=`✅ Victorias: ${getNumericEmoji(playerStats[playerName].victories)}`;const drawsMessage=`➖ Empates: ${getNumericEmoji(playerStats[playerName].draws)}`;const defeatsMessage=`❌ Derrotas: ${getNumericEmoji(playerStats[playerName].defeats)}`;const lastGamesMessage=getLastGamesMessage(playerName);const highestStreakMessage=`🏆 Racha Histórica: ${playerStats[playerName].highestStreak}`;const currentStreakMessage=`🔥 Racha Actual: ${playerStats[playerName].currentStreak}`;const goalsReceived=playerGoalsReceived[playerName]||0;const cleanSheets=playerCleanSheets[playerName]||0;const goalsReceivedMessage=`🥅 Goles Recibidos: ${getNumericEmoji(goalsReceived)}`;const cleanSheetsMessage=`🧤 Vallas Invictas: ${getNumericEmoji(cleanSheets)}`;const intervaloMinutos=5;const golesRecibidosPorIntervalo=goalsReceived/(goalkeeperTimeInMinutes/intervaloMinutos);let golesRecibidosPorIntervaloMessage="";if(golesRecibidosPorIntervalo===0){golesRecibidosPorIntervaloMessage=`⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: 0 (No ha recibido goles)`}else{golesRecibidosPorIntervaloMessage=`⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: ${golesRecibidosPorIntervalo.toFixed(2)}`}
const messageContent=`${messageHeader}\n${levelMessage}\n${highestStreakMessage} ${currentStreakMessage}\n${totalGamesMessage} ${minutesPlayedMessage} ${victoryPercentageMessage}\n${victoriesMessage} ${drawsMessage} ${defeatsMessage}\n${goalsMessage} ${assistsMessage} ${figuraCountMessage}\n${lastGamesMessage}\n${goalPerMinuteMessage}${goalFrequencyMessage}\n${goalkeeperTimeMessage} ${goalsReceivedMessage} ${cleanSheetsMessage}\n${golesRecibidosPorIntervaloMessage}`;room.sendAnnouncement(messageContent,playerId,0x04FF5D,"bold");sendToDiscord(player,messageContent,0x04FF5D);return!0}
if(mensajeEnMinusculas.startsWith("!stats ")){if(isCooldown(player,"!stats")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
const playerId=parseInt(message.split(" ")[1]);if(!isNaN(playerId)){const playerInfo=room.getPlayer(playerId);if(playerInfo){const playerName=playerInfo.name;const goals=totalPlayerGoals[playerName]||0;const assists=totalPlayerAssists[playerName]||0;const totalPoints=goals+(assists*0.7);const levelInfo=getLevelInfo(totalPoints);const minutesPlayed=playerMinutesPlayed[playerName]||0;const minutesPlayedInMinutes=(minutesPlayed/60)/60;const goalPerMinute=goals/minutesPlayedInMinutes;const goalkeeperTime=playerGoalkeeperTime[playerName]||0;const goalkeeperTimeInMinutes=(goalkeeperTime/60)/60;const playerIdMessage=`ID del jugador: ${playerId}`;const goalsMessage=`⚽ Goles: ${getNumericEmoji(goals)}`;const assistsMessage=`👟 Asistencias: ${getNumericEmoji(assists)}`;const minutes=Math.floor(minutesPlayedInMinutes);const seconds=Math.floor((minutesPlayedInMinutes*60)%60);let minutesPlayedMessage="";if(minutesPlayedInMinutes>=60){const hours=Math.floor(minutesPlayedInMinutes/60);const remainingMinutes=minutes-hours*60;minutesPlayedMessage=`⏱️ Tiempo Jugado: ${hours} hora${hours > 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else if(minutesPlayedInMinutes>=1){minutesPlayedMessage=`⏱️ Tiempo Jugado: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else{minutesPlayedMessage=`⏱️ Tiempo Jugado: ${seconds} segundo${seconds > 1 ? 's' : ''}`}
let goalPerMinuteMessage="";let goalFrequencyMessage="";let goalkeeperTimeMessage="";if(goalkeeperTimeInMinutes>=60){const goalkeeperHours=Math.floor(goalkeeperTimeInMinutes/60);const goalkeeperRemainingMinutes=goalkeeperTimeInMinutes-goalkeeperHours*60;const goalkeeperMinutes=Math.floor(goalkeeperRemainingMinutes);const goalkeeperSeconds=Math.floor((goalkeeperRemainingMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperHours} hora${goalkeeperHours > 1 ? 's' : ''}, ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}else if(goalkeeperTimeInMinutes>=1){const goalkeeperMinutes=Math.floor(goalkeeperTimeInMinutes);const goalkeeperSeconds=Math.floor((goalkeeperTimeInMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperMinutes} minuto${goalkeeperMinutes > 1 ? 's' : ''} y ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}else{const goalkeeperSeconds=Math.floor((goalkeeperTimeInMinutes*60)%60);goalkeeperTimeMessage=`⏱️🧤 Tiempo Atajando: ${goalkeeperSeconds} segundo${goalkeeperSeconds > 1 ? 's' : ''}`}
if(goalPerMinute===0){goalPerMinuteMessage="⚽🕒 Promedio de gol por minuto: 0 (No ha marcado goles)"}else{goalPerMinuteMessage=`⚽🕒 Promedio de gol por minuto: ${goalPerMinute.toFixed(2)}`;const goalFrequency=60/goalPerMinute;const hoursBetweenGoals=Math.floor(goalFrequency/3600);const minutesBetweenGoals=Math.floor((goalFrequency%3600)/60);const secondsBetweenGoals=Math.floor(goalFrequency%60);let frequencyMessage="";if(hoursBetweenGoals>0){frequencyMessage+=`${hoursBetweenGoals} hora${hoursBetweenGoals > 1 ? 's' : ''}`}
if(minutesBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}}
if(secondsBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}}
goalFrequencyMessage=` (1 gol cada ${frequencyMessage})`}
const levelMessage=`🔝 Nivel: ${levelInfo.level} | [ ${totalPoints.toFixed(2)} Puntos ]`;const figuraCount=playerFiguraCount[playerName]||0;const figuraCountMessage=`⭐️ Figura del Partido: ${getNumericEmoji(figuraCount)} ${figuraCount === 1 ? 'vez' : 'veces'}`;if(!playerStats[playerName]){playerStats[playerName]={victories:0,draws:0,defeats:0,totalGames:0}}
const totalGamesMessage=`🎮 Partidos Jugados: ${getNumericEmoji(playerStats[playerName].totalGames)}`;const victoryPercentage=(playerStats[playerName].victories/playerStats[playerName].totalGames)*100;const victoryPercentageMessage=`📈 Porcentaje de Victorias: ${victoryPercentage.toFixed(2)}%`;const victoriesMessage=`✅ Victorias: ${getNumericEmoji(playerStats[playerName].victories)}`;const drawsMessage=`➖ Empates: ${getNumericEmoji(playerStats[playerName].draws)}`;const defeatsMessage=`❌ Derrotas: ${getNumericEmoji(playerStats[playerName].defeats)}`;const lastGamesMessage=getLastGamesMessage(playerName);const highestStreakMessage=`🏆 Racha Histórica: ${playerStats[playerName].highestStreak}`;const currentStreakMessage=`🔥 Racha Actual: ${playerStats[playerName].currentStreak}`;const goalsReceived=playerGoalsReceived[playerName]||0;const cleanSheets=playerCleanSheets[playerName]||0;const goalsReceivedMessage=`🥅 Goles Recibidos: ${getNumericEmoji(goalsReceived)}`;const cleanSheetsMessage=`🧤 Vallas Invictas: ${getNumericEmoji(cleanSheets)}`;const intervaloMinutos=5;const golesRecibidosPorIntervalo=goalsReceived/(goalkeeperTimeInMinutes/intervaloMinutos);let golesRecibidosPorIntervaloMessage="";if(golesRecibidosPorIntervalo===0){golesRecibidosPorIntervaloMessage=`⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: 0 (No ha recibido goles)`}else{golesRecibidosPorIntervaloMessage=`⚽🕒 Promedio de goles recibidos cada ${intervaloMinutos} minutos: ${golesRecibidosPorIntervalo.toFixed(2)}`}
const messageContent=`${playerName} | ${playerIdMessage}\n${levelMessage}\n${highestStreakMessage} ${currentStreakMessage}\n${totalGamesMessage} ${minutesPlayedMessage} ${victoryPercentageMessage}\n${victoriesMessage} ${drawsMessage} ${defeatsMessage}\n${goalsMessage} ${assistsMessage} ${figuraCountMessage}\n${lastGamesMessage}\n${goalPerMinuteMessage}${goalFrequencyMessage}\n${goalkeeperTimeMessage} ${goalsReceivedMessage} ${cleanSheetsMessage}\n${golesRecibidosPorIntervaloMessage}`;room.sendAnnouncement(messageContent,null,0x04FF5D,"bold");sendToDiscord(player,messageContent,0x04FF5D);return!0}else{room.sendAnnouncement("⚠️ Jugador no encontrado | Coloca !ids para ver los IDs de los jugadores",player.id,0xFFFF00,"bold")}}else{room.sendAnnouncement("⚠️ Debes poner !stats ID | Ejemplo: !stats 15 (Para ver las stats del jugador con ID 15). Con !ids puedes ver los IDs de todos los jugadores.",player.id,0xFFFF00,"bold")}
return!1}
if(mensajeEnMinusculas==="!stats"){if(isCooldown(player,"!stats")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
room.sendAnnouncement("⚠️ Debes poner !stats ID | Ejemplo: !stats 15 (Para ver las stats del jugador con ID 15). Con !ids puedes ver los IDs de todos los jugadores.",player.id,0xFFFF00,"bold");return!1}
if(mensajeEnMinusculas==="!racha-actual"){if(isCooldown(player,"!racha-actual")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByCurrentStreak=Object.keys(playerStats).map(playerName=>({playerName,currentStreak:playerStats[playerName].currentStreak}));playersByCurrentStreak.sort((a,b)=>b.currentStreak-a.currentStreak);let currentStreakTable=playersByCurrentStreak.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.currentStreak} victorias consecutivas`);currentStreakTable=currentStreakTable.join("\n");let messageContent=`🔥 ¡Tabla de Rachas Actuales! 🔥\n\n${currentStreakTable}`;room.sendAnnouncement(messageContent,player.id,0xFF6347,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!racha-historica"){if(isCooldown(player,"!racha-historica")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByHighestStreak=Object.keys(playerStats).map(playerName=>({playerName,highestStreak:playerStats[playerName].highestStreak}));playersByHighestStreak.sort((a,b)=>b.highestStreak-a.highestStreak);let highestStreakTable=playersByHighestStreak.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.highestStreak} victorias consecutivas`);highestStreakTable=highestStreakTable.join("\n");let messageContent=`🏆 ¡Tabla Histórica de Rachas! 🏆\n\n${highestStreakTable}`;room.sendAnnouncement(messageContent,player.id,0xFFB915,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!victorias"){if(isCooldown(player,"!victorias")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topVictories=[];for(const player in playerStats){topVictories.push({player,victories:playerStats[player].victories})}
topVictories.sort((a,b)=>b.victories-a.victories);topVictories=topVictories.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.victories} victorias`);topVictories=topVictories.join("\n");let messageContent=`🏆 ¡Tabla de Victorias! ✅\n\n${topVictories}`;room.sendAnnouncement(messageContent,player.id,0x00FF00,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!vallas-invictas"){if(isCooldown(player,"!vallas-invictas")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByCleanSheets=Object.keys(playerCleanSheets).map(playerName=>({playerName,cleanSheets:playerCleanSheets[playerName]}));playersByCleanSheets.sort((a,b)=>b.cleanSheets-a.cleanSheets);let cleanSheetsTable=playersByCleanSheets.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.cleanSheets} vallas invictas`);cleanSheetsTable=cleanSheetsTable.join("\n");let messageContent=`🥅⛔️ ¡Tabla de Vallas Invictas! ⛔🥅\n\n${cleanSheetsTable}`;room.sendAnnouncement(messageContent,player.id,0x04FF5D,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!goles-recibidos"){if(isCooldown(player,"!goles-recibidos")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByGoalsReceived=Object.keys(playerGoalsReceived).map(playerName=>({playerName,goalsReceived:playerGoalsReceived[playerName]}));playersByGoalsReceived.sort((a,b)=>b.goalsReceived-a.goalsReceived);let goalsReceivedTable=playersByGoalsReceived.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.goalsReceived} goles recibidos`);goalsReceivedTable=goalsReceivedTable.join("\n");let messageContent=`⚽🥅 ¡Tabla de Goles Recibidos! 🥅⚽\n\n${goalsReceivedTable}`;room.sendAnnouncement(messageContent,player.id,0xFF5C29,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!promedios-recibidos"){if(isCooldown(player,"!promedios-recibidos")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playersByGoalAverage=Object.keys(playerStats).map(playerName=>{const goalsReceived=playerGoalsReceived[playerName]||0;const goalkeeperTime=playerGoalkeeperTime[playerName]||0;const goalkeeperTimeInMinutes=(goalkeeperTime/60)/60;const intervaloMinutos=5;const golesRecibidosPorIntervalo=goalsReceived/(goalkeeperTimeInMinutes/intervaloMinutos);return{playerName,goalAverage:golesRecibidosPorIntervalo}});playersByGoalAverage.sort((a,b)=>a.goalAverage-b.goalAverage);let goalAverageTable=playersByGoalAverage.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.goalAverage.toFixed(2)} goles cada 5 minutos`);goalAverageTable=goalAverageTable.join("\n");let messageContent=`📊🥅 ¡Promedio de Goles Recibidos Cada 5 Minutos! \n\n${goalAverageTable}`;room.sendAnnouncement(messageContent,player.id,0xF9FF08,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!presencias"){if(isCooldown(player,"!presencias")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topPresences=[];for(const player in playerStats){topPresences.push({player,totalGames:playerStats[player].totalGames})}
topPresences.sort((a,b)=>b.totalGames-a.totalGames);topPresences=topPresences.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.totalGames} partidos jugados`);topPresences=topPresences.join("\n");let messageContent=`🏆 ¡Tabla de Partidos Jugados! 🎮\n\n${topPresences}`;room.sendAnnouncement(messageContent,player.id,0xFFB900,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!viciosos"){if(isCooldown(player,"!viciosos")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topViciosos=[];for(const player in playerMinutesPlayed){const minutesPlayedInMinutes=playerMinutesPlayed[player]/60/60;const minutes=Math.floor(minutesPlayedInMinutes);const seconds=Math.floor((minutesPlayedInMinutes*60)%60);let timePlayedMessage="";if(minutesPlayedInMinutes>=60){const hours=Math.floor(minutesPlayedInMinutes/60);const remainingMinutes=minutes-hours*60;timePlayedMessage=`⏱️ Tiempo Jugado: ${hours} hora${hours > 1 ? 's' : ''}, ${remainingMinutes} minuto${remainingMinutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else if(minutesPlayedInMinutes>=1){timePlayedMessage=`⏱️ Tiempo Jugado: ${minutes} minuto${minutes > 1 ? 's' : ''} y ${seconds} segundo${seconds > 1 ? 's' : ''}`}else{timePlayedMessage=`⏱️ Tiempo Jugado: ${seconds} segundo${seconds > 1 ? 's' : ''}`}
topViciosos.push({player,minutesPlayed:playerMinutesPlayed[player],timePlayedMessage})}
topViciosos.sort((a,b)=>b.minutesPlayed-a.minutesPlayed);topViciosos=topViciosos.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.timePlayedMessage}`);topViciosos=topViciosos.join("\n");let messageContent=`🏆 ¡Tabla de Tiempo Jugado! ⏱️\n\n${topViciosos}`;room.sendAnnouncement(messageContent,player.id,0xFFA500,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!ganadores"){if(isCooldown(player,"!ganadores")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topWinners=[];for(const player in playerStats){const victories=playerStats[player].victories;const totalGames=playerStats[player].totalGames;const winPercentage=totalGames===0?0:(victories/totalGames)*100;topWinners.push({player,winPercentage})}
topWinners.sort((a,b)=>b.winPercentage-a.winPercentage);topWinners=topWinners.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.winPercentage.toFixed(2)}% de victorias`);topWinners=topWinners.join("\n");let messageContent=`🏆 ¡Tabla de Porcentaje de Victorias! 📈\n\n${topWinners}`;room.sendAnnouncement(messageContent,player.id,0xFFD700,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(message==="!equilibrar"&&player.admin){const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));room.sendAnnouncement("¡Equipos equilibrados según los niveles de los jugadores! ⚖️📊",null,0xffff99,"bold",0);return!1}
if(mensajeEnMinusculas==="!puntos"){if(isCooldown(player,"!puntos")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let playerScoresAndLevels=[];for(const playerName in totalPlayerGoals){const goals=totalPlayerGoals[playerName]||0;const assists=totalPlayerAssists[playerName]||0;const totalPoints=goals+(assists*0.7);const levelInfo=getLevelInfo(totalPoints);playerScoresAndLevels.push({playerName,totalPoints,level:levelInfo.level})}
playerScoresAndLevels.sort((a,b)=>b.totalPoints-a.totalPoints);playerScoresAndLevels=playerScoresAndLevels.map((entry,index)=>`${getRankEmoji(index)} ${entry.playerName}: ${entry.totalPoints.toFixed(2)} puntos - Nivel: ${entry.level}`);playerScoresAndLevels=playerScoresAndLevels.join("\n");let messageContent=`🏆 ¡Lista de Puntajes y Niveles! 📊\n\n${playerScoresAndLevels}`;room.sendAnnouncement(messageContent,player.id,0x00FF00,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!goleadores"){if(isCooldown(player,"!goleadores")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topScorers=[];for(const player in totalPlayerGoals){topScorers.push({player,goals:totalPlayerGoals[player]})}
topScorers.sort((a,b)=>b.goals-a.goals);topScorers=topScorers.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.goals} goles`);topScorers=topScorers.join("\n");let messageContent=`🏆 ¡Tabla de Goleadores! ⚽\n\n${topScorers}`;room.sendAnnouncement(messageContent,player.id,0xffff00,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!asistidores"){if(isCooldown(player,"!asistidores")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topAssisters=[];for(const player in totalPlayerAssists){topAssisters.push({player,assists:totalPlayerAssists[player]})}
topAssisters.sort((a,b)=>b.assists-a.assists);topAssisters=topAssisters.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.assists} asistencias`);topAssisters=topAssisters.join("\n");let messageContent=`🏆 ¡Tabla de Asistidores! 👟\n\n${topAssisters}`;room.sendAnnouncement(messageContent,player.id,0x7DFFF9,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
if(mensajeEnMinusculas==="!promedios"){if(isCooldown(player,"!promedios")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
let topGoalScorersPerMinute=[];for(const player in totalPlayerGoals){const goals=totalPlayerGoals[player]||0;const minutesPlayed=playerMinutesPlayed[player]||1;const minutesPlayedInMinutes=(minutesPlayed/60)/60;const goalPerMinute=goals/minutesPlayedInMinutes;let frequencyMessage="";if(goalPerMinute>0){const goalFrequency=60/goalPerMinute;const hoursBetweenGoals=Math.floor(goalFrequency/3600);const minutesBetweenGoals=Math.floor((goalFrequency%3600)/60);const secondsBetweenGoals=Math.floor(goalFrequency%60);if(hoursBetweenGoals>0){frequencyMessage+=`${hoursBetweenGoals} hora${hoursBetweenGoals > 1 ? 's' : ''}`}
if(minutesBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${minutesBetweenGoals} minuto${minutesBetweenGoals > 1 ? 's' : ''}`}}
if(secondsBetweenGoals>0){if(frequencyMessage!==""){frequencyMessage+=` ${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}else{frequencyMessage+=`${secondsBetweenGoals} segundo${secondsBetweenGoals > 1 ? 's' : ''}`}}}
topGoalScorersPerMinute.push({player,goalPerMinute,frequencyMessage})}
topGoalScorersPerMinute.sort((a,b)=>b.goalPerMinute-a.goalPerMinute);topGoalScorersPerMinute=topGoalScorersPerMinute.map((entry,index)=>`${getRankEmoji(index)} ${entry.player}: ${entry.goalPerMinute.toFixed(2)} goles por minuto${entry.frequencyMessage ? `(1 gol cada ${entry.frequencyMessage})` : ''}`);topGoalScorersPerMinute=topGoalScorersPerMinute.join("\n");let messageContent=`⚽🏆 ¡Ranking de Promedios de Gol por Minuto! ⏱️⚽\n\n${topGoalScorersPerMinute}`;room.sendAnnouncement(messageContent,player.id,0xFFB900,"bold");sendToDiscord(player,messageContent,0xFFFF00);return!1}
var lowerCaseMessage=removeAccents(message.toLowerCase());if(!adminVotingActive&&room.getPlayerList().length>=MIN_PLAYERS_FOR_ADMIN_VOTE&&message.startsWith('!admin')){startAdminVoting();return!1}
if(adminVotingActive&&message.startsWith('!admin ')){const votedPlayerId=parseInt(message.slice(7));if(!isNaN(votedPlayerId)&&room.getPlayer(votedPlayerId)&&votedPlayerId!==player.id&&!isPlayerVoted(player.id,adminVotes)){adminVotes[votedPlayerId]=adminVotes[votedPlayerId]||[];adminVotes[votedPlayerId].push(player.id);const voteCount=adminVotes[votedPlayerId].length;const votesNeededToBecomeAdmin=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosAdmin/100));const votesRemaining=votesNeededToBecomeAdmin-voteCount;const voteType=voteCount===1?'voto':'votos';const votedPlayer=room.getPlayer(votedPlayerId);const votedPlayerInfo=votedPlayer?`${votedPlayer.name} (ID: ${votedPlayerId})`:votedPlayerId.toString();room.sendAnnouncement(`🗳️ ¡@${player.name} ha votado a ${votedPlayerInfo} para ser ADMINISTRADOR del host! (${voteCount} ${voteType}). 🗦👑🗧 \n 📢 🗳️ VOTOS OBTENIDOS: ${voteCount} ✅ | ⏳ VOTOS RESTANTES: ${votesRemaining > 0 ? votesRemaining : 0}`,null,0x00ff59,"bold",2);if(voteCount>=votesNeededToBecomeAdmin){room.setPlayerAdmin(votedPlayerId,!0);room.sendAnnouncement(`🎉 ¡El jugador ${votedPlayerInfo} ha sido elegido como el nuevo administrador! (${voteCount} votos a favor) ¡Felicidades! 🥳`,null,0x00FF00);endAdminVoting()}}else{room.sendAnnouncement(`¨[❌] ${player.name}, el jugador que mencionaste no se encuentra en el host, ingresaste un valor incorrecto o ya has votado por ese jugador. Asegúrate de usar "!admin ID" con el número de ID correcto y que no hayas votado previamente. ✅  \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1)}
return!1}else if(!adminVotingActive&&room.getPlayerList().length<MIN_PLAYERS_FOR_ADMIN_VOTE&&message.startsWith('!admin ')){room.sendAnnouncement(`[❗] La votación para elegir administrador no se puede iniciar. \n ⏬ Se necesitan un mínimo de ${MIN_PLAYERS_FOR_ADMIN_VOTE} jugadores para iniciar una votación de administrador. 🗳️`,player.id,0xffbf00,"small-bold",1);return!1}else if(adminVotingActive&&message.startsWith('!admin')){room.sendAnnouncement(`[❗] ${player.name}, para votar a un jugador como administrador, usa "!admin ID" con el número de ID correcto. \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1);return!1}
if(!kickVotingActive&&room.getPlayerList().length>=MIN_PLAYERS_FOR_KICK_VOTE&&message.startsWith('!expulsar')){startKickVoting();return!1}
if(kickVotingActive&&message.startsWith('!expulsar ')){const kickedPlayerId=parseInt(message.slice(9));if(!isNaN(kickedPlayerId)&&room.getPlayer(kickedPlayerId)){const kickedPlayer=room.getPlayer(kickedPlayerId);if(esAdminValido(kickedPlayer)){const mensajeHumillante=obtenerMensajeHumillante();room.kickPlayer(player.id,mensajeHumillante,!1);room.sendAnnouncement(`[${player.name}] intentó expulsar a un admin con el comando !expulsar y terminó kickeado como un completo idiota. Aprendan de su error. 🤡`,null,0xFFFFFF,"bold",2);return!1}
if(kickedPlayerId!==player.id&&!isPlayerVoted(player.id,kickVotes)){kickVotes[kickedPlayerId]=kickVotes[kickedPlayerId]||[];kickVotes[kickedPlayerId].push(player.id);const voteCount=kickVotes[kickedPlayerId].length;const votesNeededToKick=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosBan/100));const votesRemaining=votesNeededToKick-voteCount;const voteType=voteCount===1?'voto':'votos';const kickedPlayerInfo=kickedPlayer?`${kickedPlayer.name} (ID: ${kickedPlayerId})`:kickedPlayerId.toString();room.sendAnnouncement(`🗳️ ¡@${player.name} ha votado para EXPULSAR a ${kickedPlayerInfo} del host! (${voteCount} ${voteType}). 🚫 \n 📢 🗳️ VOTOS OBTENIDOS: ${voteCount} ✅ | ⏳ VOTOS RESTANTES: ${votesRemaining > 0 ? votesRemaining : 0}`,null,0xFFE000,"bold",2);if(voteCount>=votesNeededToKick){room.kickPlayer(kickedPlayerId,"Expulsado por votación de la comunidad",!0);room.sendAnnouncement(`👢 ¡El jugador ${kickedPlayerInfo} ha sido expulsado por votación de la comunidad! (${voteCount} votos a favor)`,null,0xFF0000);endKickVoting()}}}else if(isNaN(kickedPlayerId)){room.sendAnnouncement(`[❗] ${player.name}, después de "!expulsar" debes ingresar el número de ID del jugador que deseas expulsar. \n Ejemplo: !expulsar 123 \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1)}else{room.sendAnnouncement(`[❌] ${player.name}, el jugador que mencionaste no se encuentra en el host, ingresaste un valor incorrecto o ya has votado por ese jugador. Asegúrate de usar "!expulsar ID" con el número de ID correcto y que no hayas votado previamente. \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1)}
return!1}else if(!kickVotingActive&&room.getPlayerList().length<MIN_PLAYERS_FOR_KICK_VOTE&&message.startsWith('!expulsar ')){room.sendAnnouncement(`[❗] La votación para expulsar a un jugador no se puede iniciar. \n ⏬ Se necesitan un mínimo de ${MIN_PLAYERS_FOR_KICK_VOTE} jugadores para iniciar una votación de expulsión. 🗳️`,player.id,0xffbf00,"small-bold",1);return!1}else if(kickVotingActive&&message.startsWith('!expulsar')){room.sendAnnouncement(`[❗] ${player.name}, para votar la expulsión de un jugador, usa "!expulsar ID" con el número de ID correcto. \n Ejemplo: !expulsar 123 \n 📋🔍 Lista de IDs de jugadores: !ids`,player.id,0xffbf00,"small-bold",1);return!1}
if(player.admin&&message.startsWith('!publicidad')){const command=message.split(' ');if(command.length>=3){const minutes=parseFloat(command[1]);const msg=command.slice(2).join(' ');if(!isNaN(minutes)&&minutes>0){advertisingMinutes=minutes;advertisingMessage=msg;clearInterval(advertisingInterval);advertisingInterval=setInterval(sendAdvertisingMessage,advertisingMinutes*60*1000);room.sendAnnouncement(`Publicidad programada para cada ${advertisingMinutes} minutos: "${advertisingMessage}"`)}else{if(minutes===0){room.sendAnnouncement('Error: La cantidad de minutos debe ser un número mayor a 0.')}else{room.sendAnnouncement('Error: La cantidad de minutos debe ser un número mayor a 0.')}}}else{room.sendAnnouncement('Error: Comando de publicidad inválido. Formato correcto: !publicidad <minutos> <mensaje>')}
return!1}
if(player.admin){if(message.indexOf('!silenciar')===0){var palabra=message.split(' ')[1];palabrasSilenciadas.push(palabra);room.sendAnnouncement('La palabra "'+palabra+'" ha sido silenciada.',null,0xFF0000,"bold");return!1}else if(message.indexOf('!desilenciar')===0){var palabra=message.split(' ')[1];var indice=palabrasSilenciadas.indexOf(palabra);if(indice!==-1){palabrasSilenciadas.splice(indice,1);room.sendAnnouncement('La palabra "'+palabra+'" ha sido habilitada.',null,0xFF0000,"bold")}
return!1}}else{if(palabrasSilenciadas.some(function(palabra){return message.indexOf(palabra)!==-1})){return!1}}
if(player.admin){if(message==="!random"){shuffleTeams();return!1}else if(message==="!balance"){balanceTeams();return!1}else if(message==="!auto_balance"){if(autoBalanceEnabled){autoBalanceEnabled=!1;room.sendAnnouncement("¡El equilibrio automático de equipos ha sido desactivado! ⚖️⚙️❌",null,0xff2020,"bold")}else{autoBalanceEnabled=!0;room.sendAnnouncement("¡El equilibrio automático de equipos ha sido activado! ⚖️⚙️✅",null,0x00ff3c,"bold")}
return!1}}
if(lowerCaseMessage.includes("como me hago gordo")||lowerCaseMessage.includes("como me hago pequeño")||lowerCaseMessage.includes("como me hago grande")||lowerCaseMessage.includes("porque hay un gordo")||lowerCaseMessage.includes("porque hay uno pequeño")||lowerCaseMessage.includes("porque hay un enano")||lowerCaseMessage.includes("por que hay un gordo")||lowerCaseMessage.includes("por que hay uno pequeño")||lowerCaseMessage.includes("por que hay un enano")||lowerCaseMessage.includes("quiero ser enano")||lowerCaseMessage.includes("quiero ser gordo")||lowerCaseMessage.includes("como me hago gigante")){room.sendAnnouncement("Para cambiar tu tamaño, utiliza el comando !size",player.id,0xFF0000);return!1}
if(message==="!posesion"){const totalPosesion=equipoAzulPosesion+equipoRojoPosesion;let porcentajeAzul=0;let porcentajeRojo=0;if(totalPosesion>0){porcentajeAzul=(equipoAzulPosesion/totalPosesion)*100;porcentajeRojo=(equipoRojoPosesion/totalPosesion)*100}
room.sendAnnouncement(` `+teamRed+`  ${porcentajeAzul.toFixed(2)}% - `+teamBlue+` : ${porcentajeRojo.toFixed(2)}%`);return!1}
if(player.admin){const parts=message.split(' ');if(parts[0]==='!juegan'&&parts.length===2){const maxPlayers=parseInt(parts[1]);if(!isNaN(maxPlayers)&&maxPlayers>=1&&maxPlayers<=15){maxPlayersPerTeam=maxPlayers;room.sendAnnouncement(player.name+' ha establecido el número máximo de jugadores por equipo en '+maxPlayersPerTeam+' 🏆',null,0x00ff55,'bold');modoJueganAlgunos=!0;modoJueganTodos=!1}else{room.sendAnnouncement(player.name+', por favor, introduce un número válido entre 1 y 15. 🛑',player.id,0xff6340,'bold')}
return!1}else if(parts[0]==='!juegantodos'){modoJueganTodos=!modoJueganTodos;modoJueganAlgunos=!1;if(modoJueganTodos){room.sendAnnouncement(player.name+' ha ACTIVADO el Modo 🎮 JUEGAN TODOS 🤩',null,0x00ff55,'bold')}else{room.sendAnnouncement(player.name+' ha DESACTIVADO el Modo 🎮 JUEGAN TODOS 🚫',null,0xff6340,'bold')}
return!1}else if(parts[0]==='!juegan-off'){modoJueganAlgunos=!1;room.sendAnnouncement(player.name+' ha DESACTIVADO el Modo 🎮 JUEGAN ALGUNOS 🚫',null,0xff6340,'bold');return!1}}
if(mensajeEnMinusculas.startsWith("!pregunta")){if(isCooldown(player,"!pregunta")){room.sendAnnouncement("⚠️ Espera unos segundos antes de usar este comando nuevamente.",player.id,0xFFFF00,"bold");return!1}
var pregunta=message.substring(9).trim();var respuesta=generar_respuesta_aleatoria();var anuncio=player.name+" ha preguntado: "+pregunta+" || 🗿 CHAD dice: \""+respuesta+"\"";room.sendAnnouncement(anuncio,null,0xffac5e,"bold");return!1}
if(message.startsWith("@@")){message=message.substr(2).trim();if(message.indexOf(' ')!==-1){let args=message.match(/^(\S+)\s(.*)/).slice(1);if(args.length>1){var pmMsg=args[1];var players=room.getPlayerList();var pmSent=!1;players.forEach(function(pmPlayer){if(pmPlayer.name===args[0]||pmPlayer.name===args[0].replace(/_/g,' ')){whisper("[💬 PM ➤ "+pmPlayer.name+"] "+player.name+": "+pmMsg,player.id,0xc7a2ff,"bold",1);whisper("[💬 PM] "+player.name+": "+pmMsg,pmPlayer.id,0xc7a2ff,"bold",2);pmSent=!0}});if(pmSent==!1){whisper("No se pudo encontrar el usuario '"+args[0]+"'",player.id,0xff20ff,"normal",1)}
return!1}}
return!1}
if(filter(message))return!1;var Jugadores=room.getPlayerList();console.log(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+"."+new Date().getMilliseconds()+" 💬 "+player.name+" ["+player.id+"]: "+message);if(message.includes(ClaveParaSerAdmin)){room.setPlayerAdmin(player.id,!0);return!1}
playerFound=!0;var _0x21989d=_0x3c81f9;let spacePos=message.search(" ");let command=message.substr(0,spacePos!==-1?spacePos:message.length);if(commands.hasOwnProperty(command)){let currentTime=Date.now();if(player.admin||!lastCommandTime[player.id]||currentTime-lastCommandTime[player.id]>commandCooldown){commands[command](player,message);lastCommandTime[player.id]=currentTime;return!0}else{room.sendAnnouncement("Por favor, espera antes de usar otro comando.",player.id);return!1}}
spacePos=message.search(" ");let comandoGLH=message.substr(0,spacePos!==-1?spacePos:message.length).toLowerCase();if(comandosGLH.hasOwnProperty(comandoGLH)){let currentTime=Date.now();if(player.admin||!lastCommandTime[player.id]||currentTime-lastCommandTime[player.id]>commandCooldown){comandosGLH[comandoGLH](player,message);lastCommandTime[player.id]=currentTime;return!0}else{room.sendAnnouncement("Por favor, espera antes de usar otro comando.",player.id);return!1}}
if(playerInactivity.has(player.id)){clearTimeout(playerInactivity.get(player.id));const inactivityTimer=setTimeout(()=>{room.kickPlayer(player.id,"⌛️ EXPULSADO por INACTIVIDAD 😴🚫",!1);playerInactivity.delete(player.id)},inactivityTimeout);playerInactivity.set(player.id,inactivityTimer)}
if(message.includes("!tiempo")&&PartidoArrancado==!0)return penalespregunta(player,message);if(message.includes("!equipos")&&PartidoArrancado==!0)return QuienJuegaPregunta(player,message);if(message=='!realfutsal'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getRealFutsal())}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message=='!futx5'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getFutx5Map());room.setScoreLimit(5);room.setTimeLimit(5)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message=='!futx5cesped'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getFutx5cespedMap());room.setScoreLimit(3);room.setTimeLimit(4)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message=='!entrenamientofutsal'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getEntrenamientoFutsalMap());room.setScoreLimit(0);room.setTimeLimit(0)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message=='!futx7'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getFutx7Map());room.setScoreLimit(4);room.setTimeLimit(10)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message=='!campeones'&&player.admin==!0){if(room.getScores()==null){isAFKpaused=!0;currentMap=getMapName(message);room.setCustomStadium(getCampeonesMap());room.setScoreLimit(0);room.setTimeLimit(0)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message==='!premios'&&player.admin===!0){if(room.getScores()===null){cambioCami=!1;CamisetasGanaSigue=!1;camisetaRed="/colors blue 180 000000 FFFFFF";NombreEquipoRojo="Staff";camisetaBlue="/colors red 180 F0F0F0 000000";NombreEquipoAzul="Participantes";redData=parseColors(camisetaRed);blueData=parseColors(camisetaBlue);redAngle=redData.angle;blueAngle=blueData.angle;redTextColor=redData.textColor;blueTextColor=blueData.textColor;redColor=redData.colors;blueColor=blueData.colors;room.setTeamColors(1,redAngle,redTextColor,redColor);room.setTeamColors(2,blueAngle,blueTextColor,blueColor);teamRed=NombreEquipoRojo;teamBlue=NombreEquipoAzul;isAFKpaused=!0;currentMap=getMapName(message);room.setCustomStadium(getPremiosMap());room.setScoreLimit(0);room.setTimeLimit(0);autoBalanceEnabled=!1;ganasigueEnabled=!1;modoJueganAlgunos=!1;var listajugadores=room.getPlayerList();for(var i=0;i<listajugadores.length;i++){var currentPlayer=listajugadores[i];if(!currentPlayer.admin){room.setPlayerTeam(currentPlayer.id,2)}else{room.setPlayerTeam(currentPlayer.id,1)}}}else{whisper("No puedes cambiar el mapa mientras el juego está en progreso",player.id)}}
if(message=='!powershot'&&player.admin==!0){if(powerShotMode==!1){powerShotMode=!0;announce("POWERSHOT ACTIVADO POR "+player.name,null,0x00FF00)}else{powerShotMode=!1;announce("POWERSHOT DESACTIVADO POR "+player.name,null,0xFF0000)}}
if(message=='!futx2'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getFutx2Map());room.setScoreLimit(3);room.setTimeLimit(3)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message=='!futx3'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getFutx3Map());room.setScoreLimit(3);room.setTimeLimit(3)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message=='!futx4'&&player.admin==!0){if(room.getScores()==null){currentMap=getMapName(message);room.setCustomStadium(getFutx4Map());room.setScoreLimit(4);room.setTimeLimit(4)}else{whisper("No puedes cambiar el mapa mientras el juego esta en progreso",player.id)}}
if(message.indexOf("!")===0){if(player.admin){return handleAdminCommand(player,message)}
return!1}
sendChatToDiscord(player,message);if(message.startsWith('t ')){const teamMsg=message.substring(2).trim();if(player.team===0){whisper('[⚠️] Debes estar en el Equipo Rojo 🔴 o en el Equipo Azul 🔵 para poder utilizar el Team Chat',player.id);return!1}
sendTeamMessage(player,teamMsg);return!1}
const isAdmin=player.admin===!0;const mentionedPlayers=getMentionedPlayers(message);if(!handleMentions(player,message,adminChatColor,NombreROLAdmin,isAdmin)){return!1}
if(mentionedPlayers.length>0){const prefix=getPlayerPrefix(player);const playerRole=NickNamesRol1.includes(player.name)?{name:NombreROL1,color:ColorDelChatROL1}:NickNamesRol2.includes(player.name)?{name:NombreROL2,color:ColorDelChatROL2}:NickNamesRol3.includes(player.name)?{name:NombreROL3,color:ColorDelChatROL3}:NickNamesRol4.includes(player.name)?{name:NombreROL4,color:ColorDelChatROL4}:NickNamesRol5.includes(player.name)?{name:NombreROL5,color:ColorDelChatROL5}:NickNamesRol6.includes(player.name)?{name:NombreROL6,color:ColorDelChatROL6}:NickNamesRol7.includes(player.name)?{name:NombreROL7,color:ColorDelChatROL7}:NickNamesRol8.includes(player.name)?{name:NombreROL8,color:ColorDelChatROL8}:NickNamesRol9.includes(player.name)?{name:NombreROL9,color:ColorDelChatROL9}:NickNamesRol10.includes(player.name)?{name:NombreROL10,color:ColorDelChatROL10}:isAdmin?{name:NombreROLAdmin,color:adminChatColor}:player.team===1?{name:NombreROLRed,color:RedChatColor}:player.team===2?{name:NombreROLBlue,color:BlueChatColor}:{name:NombreROLSpect,color:SpectChatColor};const mensajeFinal=jugadoresConEmojis.has(player.id)?reemplazarPorEmojis(message):message;mentionedPlayers.forEach(mentionedPlayer=>{room.sendAnnouncement(`【${prefix}${playerRole.name}】 ${player.name} :    ${mensajeFinal}`,mentionedPlayer.id,playerRole.color,"bold",2)});const mentionedIDs=mentionedPlayers.map(p=>p.id);const remainingPlayers=room.getPlayerList().filter(p=>!mentionedIDs.includes(p.id));remainingPlayers.forEach(p=>{room.sendAnnouncement(`【${prefix}${playerRole.name}】 ${player.name} :    ${mensajeFinal}`,p.id,playerRole.color,RoleAttributes[playerRole.name]?.style||"normal",RoleAttributes[playerRole.name]?.sound||1)});return!1}
const prefix=getPlayerPrefix(player);const playerRole=NickNamesRol1.includes(player.name)?{name:NombreROL1,color:ColorDelChatROL1}:NickNamesRol2.includes(player.name)?{name:NombreROL2,color:ColorDelChatROL2}:NickNamesRol3.includes(player.name)?{name:NombreROL3,color:ColorDelChatROL3}:NickNamesRol4.includes(player.name)?{name:NombreROL4,color:ColorDelChatROL4}:NickNamesRol5.includes(player.name)?{name:NombreROL5,color:ColorDelChatROL5}:NickNamesRol6.includes(player.name)?{name:NombreROL6,color:ColorDelChatROL6}:NickNamesRol7.includes(player.name)?{name:NombreROL7,color:ColorDelChatROL7}:NickNamesRol8.includes(player.name)?{name:NombreROL8,color:ColorDelChatROL8}:NickNamesRol9.includes(player.name)?{name:NombreROL9,color:ColorDelChatROL9}:NickNamesRol10.includes(player.name)?{name:NombreROL10,color:ColorDelChatROL10}:isAdmin?{name:NombreROLAdmin,color:adminChatColor}:player.team===1?{name:NombreROLRed,color:RedChatColor}:player.team===2?{name:NombreROLBlue,color:BlueChatColor}:{name:NombreROLSpect,color:SpectChatColor};const roleAttr=RoleAttributes[playerRole.name]||{style:"normal",sound:1};const mensajeFinal=jugadoresConEmojis.has(player.id)?reemplazarPorEmojis(message):message;room.sendAnnouncement(`【${prefix}${playerRole.name}】 ${player.name} :    ${mensajeFinal}`,null,playerRole.color,roleAttr.style,roleAttr.sound);return!1};function whisper(message,playerId){room.sendAnnouncement(message,playerId,0xFFFF00,"bold",2)}
function sendAdvertisingMessage(){const currentTimez=Date.now();if(currentTimez-lastAdvertisingTime>=advertisingMinutes*60*1000){room.sendAnnouncement("　",null,0xFFFFFF,"bold",0);room.sendAnnouncement("　　　　　　　　"+advertisingMessage,null,0xFFFFFF,"bold",2);lastAdvertisingTime=currentTimez}}
function ElJugadorYaVoto(playerId,votesObject){for(const votedMap in votesObject){if(votesObject[votedMap].includes(playerId)){return!0}}
return!1}
function getRemainingVotes(){const totalPlayers=room.getPlayerList().length;let playersVoted=0;for(const votedMap in mapVotes){playersVoted+=mapVotes[votedMap].length}
const remainingVotes=totalPlayers-playersVoted;if(remainingVotes===0){endMapVoting()}
return Math.max(0,remainingVotes)}
let votacionTimer;function isPlayerVoted(playerId,votesObject){for(const votedPlayerId in votesObject){if(votesObject[votedPlayerId].includes(playerId)){return!0}}
return!1}
function startAdminVoting(){if(!adminVotingActive){if(room.getPlayerList().length>=MIN_PLAYERS_FOR_ADMIN_VOTE){adminVotingActive=!0;adminVotes={};setTimeout(function(){endAdminVoting()},DURACION_VOTACION*1000);room.sendAnnouncement('📢 ¡La votación para elegir un nuevo administrador ha comenzado! Escribe "!admin id" para votar por agregar un jugador como administrador. 🗳️',null,0xFF0000);room.sendAnnouncement('📝 Para votar, escribe "!admin id" donde "id" es el número de ID del jugador que deseas votar para ser administrador del host. ¡Con !ids podrás ver los IDs de todos los jugadores! 🗳️',null,0xFFFFFF)}else{room.sendAnnouncement(`❗ Se necesitan al menos ${MIN_PLAYERS_FOR_ADMIN_VOTE} jugadores para iniciar la votación de administrador. ¡Espera a que se unan más jugadores! ❗`,null,0xFF0000)}}}
function endAdminVoting(){if(adminVotingActive){adminVotingActive=!1;let maxVotes=0;let adminToAdd=null;for(const votedPlayerId in adminVotes){const voteCount=adminVotes[votedPlayerId].length;if(voteCount>maxVotes){maxVotes=voteCount;adminToAdd=votedPlayerId}}
const votesNeeded=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosAdmin/100));if(adminToAdd!==null&&maxVotes>=votesNeeded){room.setPlayerAdmin(adminToAdd,!0);const votedPlayer=room.getPlayer(adminToAdd);const votedPlayerInfo=votedPlayer?`${votedPlayer.name} (ID: ${adminToAdd})`:adminToAdd.toString();room.sendAnnouncement(`🎉 ¡El jugador ${votedPlayerInfo} ha sido elegido como el nuevo administrador! (${maxVotes} votos a favor) ¡Felicidades! 🥳`,null,0x00FF00)}else{room.sendAnnouncement('¡La Votación de Administrador ha llegado a su Fin! 🗳️ |🌟 ¡Gracias a todos por participar! 🌟',null,0xFF0000)}}}
function startKickVoting(){if(!kickVotingActive){if(room.getPlayerList().length>=MIN_PLAYERS_FOR_KICK_VOTE){kickVotingActive=!0;kickVotes={};setTimeout(function(){endKickVoting()},DURACION_VOTACION*1000);room.sendAnnouncement('📢 ¡La votación para expulsar a un jugador ha comenzado! Escribe "!expulsar id" para votar por la expulsión de un jugador. 🗳️',null,0xFF0000);room.sendAnnouncement('📝 Para votar, escribe "!expulsar id" donde "id" es el número de ID del jugador que deseas expulsar. ¡Con !ids podrás ver los IDs de todos los jugadores! 🗳️',null,0xFFFFFF)}else{room.sendAnnouncement(`❗ Se necesitan al menos ${MIN_PLAYERS_FOR_KICK_VOTE} jugadores para iniciar la votación de expulsión. ¡Espera a que se unan más jugadores! ❗`,null,0xFF0000)}}}
function endKickVoting(){if(kickVotingActive){kickVotingActive=!1;let maxVotes=0;let playerToKick=null;for(const kickedPlayerId in kickVotes){const voteCount=kickVotes[kickedPlayerId].length;if(voteCount>maxVotes){maxVotes=voteCount;playerToKick=kickedPlayerId}}
const votesNeeded=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosBan/100));if(playerToKick!==null&&maxVotes>=votesNeeded){room.kickPlayer(playerToKick,"Expulsado por votación de la comunidad",!1);const kickedPlayer=room.getPlayer(playerToKick);const kickedPlayerInfo=kickedPlayer?`${kickedPlayer.name} (ID: ${playerToKick})`:playerToKick.toString();room.sendAnnouncement(`👢 ¡El jugador ${kickedPlayerInfo} ha sido expulsado por votación de la comunidad! (${maxVotes} votos a favor)`,null,0xFF0000)}else{room.sendAnnouncement('¡La Votación de Expulsión ha llegado a su Fin! 🗳️ |🌟 ¡Gracias a todos por participar! 🌟',null,0xFF0000)}}}
function shuffleArray(array){for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]}
return array}
setInterval(autoBalanceTeams,1000);function extraTime(){var extraSeconds=Math.ceil(game.extraTimeCount/60);var extraMinutes=Math.floor(extraSeconds/60);var remainingSeconds=extraSeconds-(extraMinutes*60);game.extraTimeEnd=gameTime*60+extraSeconds;var timeAddedMessage=`⌚ TIEMPO DE JUEGO: ${gameTime} MINUTO${gameTime === 1 ? '' : 'S'} ➕ ⏳ TIEMPO ADICIONADO: `;if(extraMinutes>0){timeAddedMessage+=`${extraMinutes} MINUTO`;if(extraMinutes>1){timeAddedMessage+="S"}}
if(remainingSeconds>0){if(extraMinutes>0){timeAddedMessage+=" y "}
timeAddedMessage+=`${remainingSeconds} SEGUNDO`;if(remainingSeconds>1){timeAddedMessage+="S"}}
announce(`                                   ${timeAddedMessage}`,null,null,null,1)}
function QuienJuegaPregunta(player,message){announce("--- ESTAN JUGANDO: "+teamRed+" vs "+teamBlue+" ---",player.id,null,null,1)}
function penalespregunta(player,message){var extraSeconds=Math.ceil(game.extraTimeCount/60);var extraMinutes=Math.round((extraSeconds-(100*0))/60);var SegundosDeSobra1min=Math.round((extraSeconds-(100*0))-60);var SegundosDeSobra2min=Math.round((extraSeconds-(100*0))-120);var SegundosDeSobra3min=Math.round((extraSeconds-(100*0))-180);var SegundosDeSobra4min=Math.round((extraSeconds-(100*0))-240);var SegundosDeSobra5min=Math.round((extraSeconds-(100*0))-300);var SegundosDeSobra6min=Math.round((extraSeconds-(100*0))-360);game.extraTimeEnd=(gameTime*60)+extraSeconds;if(extraSeconds<60){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO:  "+extraSeconds+" SEGUNDOS [Por ahora] ",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>59&&extraSeconds<61){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 1 MINUTO [Por ahora] ",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>60&&extraSeconds<120){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 1 MINUTO y "+SegundosDeSobra1min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>119&&extraSeconds<121){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 2 MINUTOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>120&&extraSeconds<180){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 2 MINUTOS  y "+SegundosDeSobra2min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>179&&extraSeconds<181){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 3 MINUTOS ",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>180&&extraSeconds<240){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 3 MINUTOS  y "+SegundosDeSobra3min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>239&&extraSeconds<241){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 4 MINUTOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>240&&extraSeconds<300){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 4 MINUTOS  y "+SegundosDeSobra4min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>299&&extraSeconds<301){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 5 MINUTOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>300&&extraSeconds<360){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 5 MINUTOS  y "+SegundosDeSobra5min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>359&&extraSeconds<361){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 6 MINUTOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}else if(extraSeconds>360&&extraSeconds<420){announce("                                   ⌚ TIEMPO DE JUEGO: "+gameTime+" MINUTOS               ➕ ⏳     TIEMPO ADICIONADO: 6 MINUTOS  y "+SegundosDeSobra6min+" SEGUNDOS [Por ahora]",player.id,null,null,1);room.sendAnnouncement("Cada segundo que demoren en ejecutar los Laterales, Saques de Arco y Tiros de Esquina se sumarán al tiempo adicionado.",player.id,0xE7D1FF,"small",1)}}
function displayHelp(_0x13aab6,_0x878a40){var _0x37f4ef=_0x3c81f9;_0x878a40==null&&whisper(_0x37f4ef(0x124),_0x13aab6,null,'small')}
function sendGKAnnouncement(player){var players=room.getPlayerList();var redPlayers=players.filter(player=>player.team===1);var bluePlayers=players.filter(player=>player.team===2);ArqueroRED=redPlayers.reduce((minXPlayer,currentPlayer)=>{return minXPlayer.position.x<currentPlayer.position.x?minXPlayer:currentPlayer},redPlayers[0]);ArqueroBLUE=bluePlayers.reduce((maxXPlayer,currentPlayer)=>{return maxXPlayer.position.x>currentPlayer.position.x?maxXPlayer:currentPlayer},bluePlayers[0]);var message="";if(ArqueroRED){message+="🔴 🧤⚽ GK "+teamRed+": "+ArqueroRED.name}else{message+="🔴 🧤⚽ GK "+teamRed+": ❌ No tiene "}
message+=" ------- ";if(ArqueroBLUE){message+="🔵 🧤⚽ GK "+teamBlue+": "+ArqueroBLUE.name}else{message+="🔵 🧤⚽ GK "+teamBlue+": ❌ No tiene "}
if(!ArqueroRED&&!ArqueroBLUE){message="❌ 🧤⚽ No hay arqueros en ninguno de los dos equipos."}
room.sendAnnouncement(message,player.id,0xFFFFFF,"bold",0)}
room[_0x3c81f9(0x138)]=function(player){registerPlayerTime(player.id,player.team);if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=6&&numJugadores<=7){maxPlayersPerTeam=3;nuevaConfiguracion={mapa:getFutx3Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=8&&numJugadores<=9){maxPlayersPerTeam=4;nuevaConfiguracion={mapa:getFutx4Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=10&&numJugadores<=11){maxPlayersPerTeam=5;nuevaConfiguracion={mapa:getFutx5Map(),scoreLimit:GolesFutsalx5,timeLimit:TiempoFutsalx5}}else if(numJugadores>=14){maxPlayersPerTeam=7;nuevaConfiguracion={mapa:getFutx7Map(),scoreLimit:GolesFutsalx7,timeLimit:TiempoFutsalx7}}
if(nuevaConfiguracion!==null){if(JSON.stringify(nuevaConfiguracion)===JSON.stringify(configuracionActual)){return}
var scores=room.getScores();if(scores!==null){var gameTime=scores.time;if(gameTime<=tiempoLimiteCambio){configuracionActual=nuevaConfiguracion;setTimeout(function(){room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()},tiempoEsperaCambio)}}else{configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit);room.startGame()}}}
if(room.getScores()!=null){if(1<=player.team<=2)ballCarrying.set(player.name,[0,player.team]);}
var _0x2dee93=_0x3c81f9;map==_0x2dee93(0x1ca)&&(room[_0x2dee93(0x172)]()!=null&&(game[_0x2dee93(0x189)]==![]&&room[_0x2dee93(0x145)]()[_0x2dee93(0x19a)](function(_0x96d16c){var _0x50b12d=_0x2dee93;if(_0x96d16c!=undefined){if(game[_0x50b12d(0x165)]==!![]||game[_0x50b12d(0x133)]==!![]){var _0x4bfeae={};_0x4bfeae[_0x50b12d(0x13e)]=0x98967f,room[_0x50b12d(0x125)](_0x96d16c.id,_0x4bfeae)}}})));if(player.team!==0&&afkPlayerIDs.has(player.id)){room.setPlayerTeam(player.id,0);room.sendAnnouncement("😴 ¡El jugador "+player.name+" sigue A F K!",null,0xff8400,'bold',2);room.sendAnnouncement("🚨 Con !kickafks podrás kickearlo. Si "+player.name+" escribe !afk nuevamente saldrá del AFK. 🚨",null,0xff8400,'bold',1)}}
function getRandomScorerMessage(){let equipoRival=game.lastKickerTeam===1?teamBlue:teamRed;let arqueroRival=game.lastKickerTeam===1?(ArqueroBLUE?ArqueroBLUE.name:"nadie"):(ArqueroRED?ArqueroRED.name:"nadie");const scorerMessages=[`🔥⚽ ${game.lastKickerName} se cogió a ${equipoRival} y ${arqueroRival} no pudo hacer nada.`,`💥🔥🍆 ${game.lastKickerName} no para de repartir pija, se coge absolutamente a todos los de ${equipoRival}. 😈🥵`,`🤯💥⚡ El golazo que clavó ${game.lastKickerName}, pijudo hijo de re mil puta. ⚽🔥`,`👌⚽👏 ¡Bien definido ${game.lastKickerName}! Si esto no es el fútbol, el fútbol ¿dónde está? 🍷🚬🗿`,`🍷🚬🗿 La definición de ${game.lastKickerName} definitivamente es cine.`,`⚽🔥 ¡Golazo de ${game.lastKickerName} que está jugando desnudo! 🔞🍆`,`🔥⚽ Eduque ${game.lastKickerName}, eduque 👏👏`,`⚡⚽🍆 ${game.lastKickerName} se cogió a ${arqueroRival} con ese gol, alta putita el arquero de ${equipoRival}! 🧤🥵`,`⚽🔥 ${game.lastKickerName} definió con la punta de su tremenda pija! 🍆🔥`,`⚽🔥 ${game.lastKickerName} le rompió bien el ojete a ${arqueroRival}. 🍑💥🔥`,`🔥 Parece que a los de ${equipoRival} les encanta comer pija de ${game.lastKickerName} 🍆🥵`,`🔥⚽ ${game.lastKickerName} le rompió bien el orto a ${equipoRival} con ese golazo. 🍑💥🥵`,`👅🍑🔥 Los de ${equipoRival} son la puta preferida de ${game.lastKickerName}. 😏⚽`,`🧤🍩 ${arqueroRival} entregó el rosquete y ${game.lastKickerName} se lo cogió con ese gol. ⚽🔥`,`🔥⚽ El jugador ${game.lastKickerName} no para de coger a los de ${equipoRival}. 😈`,`🍆💦🥵 ${game.lastKickerName} le pasó toda la pija en la cara a ${arqueroRival} con ese golazo. ⚽🔥`,`😈🔥⚽ Otra vez ${game.lastKickerName} repartiendo pija. Un camión de leche tiene en la chota el hijo de mil putas 🍆🥵`,`👅🍑🔥 El arquero ${arqueroRival} goloso como siempre entregándole el marrón a ${game.lastKickerName}. 😏🍩`,`💦🍩🔥 ${game.lastKickerName} le glaseó toda la rosca a ${arqueroRival} con ese gol! 🥵⚽`,`💦🍩 ${game.lastKickerName} les glaseó la rosca a todos los de ${equipoRival} con ese gol! 🥵⚽`,];return scorerMessages[Math.floor(Math.random()*scorerMessages.length)]}
function getRandomScorerMessage2(){const scorerMessages2=["⚽🔥 ¡**GOL** de **"+game.lastKickerName+"**!","⚽💥 ¡**GOL** de **"+game.lastKickerName+"**!",];return scorerMessages2[Math.floor(Math.random()*scorerMessages2.length)]}
function getRandomOwnGoalScorerMessage(){let equipoRival=game.lastKickerTeam===1?teamBlue:teamRed;let arqueroRival=game.lastKickerTeam===1?(ArqueroBLUE?ArqueroBLUE.name:"nadie"):(ArqueroRED?ArqueroRED.name:"nadie");let equipoPropio=game.lastKickerTeam===1?teamRed:teamBlue;let arqueroPropio=game.lastKickerTeam===1?(ArqueroRED?ArqueroRED.name:"nadie"):(ArqueroBLUE?ArqueroBLUE.name:"nadie");const ownGoalScorerMessages=[`😵‍💫 Alto pelotudo ${game.lastKickerName}, se olvidó que tenía que patear al otro arco el hijo de re mil puta. 🎯🤦‍♂️`,`🔥 ¡El virgo de ${game.lastKickerName} se acaba de meter un gol en contra, no puede ser tan burro, por Dios. 🫏💀`,`🍑💦 ${game.lastKickerName} entregó la cola con ese autogol, alto virgen el hijo de puta. 🤡🔥`,`🎁 ¡Alta putita ${game.lastKickerName}!, le regaló el gol a ${equipoRival} como si fuera Navidad. 🎄⚽`,`🕵️‍♂️ Parece infiltrado el pelotudo ${game.lastKickerName}, no puede ser tan pete. 🤦‍♂️💀`,`🙃 Parece que al jugador ${game.lastKickerName} le encanta entregarle el rosquete a ${equipoRival}, alta putita. 🍑🔥`,`⚽🤦‍♂️ ${game.lastKickerName} pensó que jugaba para ${equipoRival} y les regaló un gol. 🎭💀`,`😨 Se cagó todo ${game.lastKickerName} con ese gol en contra, le encanta entregar el marrón a los de ${equipoPropio}. 🍩💦`,`🔥 Alta putita ${game.lastKickerName}, ni los de ${equipoRival} le hacen ese gol a ${equipoPropio} como él lo hizo. ⚽💀`,`🥴 Está re drogado el hijo de puta de ${game.lastKickerName}, mirá el autogol que se hace. 💊💀`,`💀🔥 El jugador ${game.lastKickerName} se confundió de arco, tremendo pelotudo el jugador de ${equipoPropio}. 🤦‍♂️⚽`,`🤣 Ni los de ${equipoRival} le meten goles a ${equipoPropio} como el autogol que hizo ${game.lastKickerName}, qué hijo de puta. ⚽🔥`];return ownGoalScorerMessages[Math.floor(Math.random()*ownGoalScorerMessages.length)]}
function getRandomOwnGoalScorerMessage2(){const ownGoalScorerMessages2=["💀 ¡**AUTOGOL** de **"+game.lastKickerName+"** !","❌ ¡**GOL EN CONTRA** de **"+game.lastKickerName+"** !"];return ownGoalScorerMessages2[Math.floor(Math.random()*ownGoalScorerMessages2.length)]}
function getRandomGoalEmoji(){const goalEmojis=["🔥","🐐","👑","⚽","😎"];return goalEmojis[Math.floor(Math.random()*goalEmojis.length)]}
function getRandomAutoGoalEmoji(){const autoGoalEmojis=["💩","😭","🤡","😅","💀","🐒","🥴","☠️","😞"];return autoGoalEmojis[Math.floor(Math.random()*autoGoalEmojis.length)]}
var playerGoalsReceived=JSON.parse(localStorage.getItem("playerGoalsReceived"))||{};var playerCleanSheets=JSON.parse(localStorage.getItem("playerCleanSheets"))||{};function updateStats(team,goals){var goalkeeper=team===1?ArqueroBLUE:ArqueroRED;if(goalkeeper){var playerName=goalkeeper.name;playerGoalsReceived[playerName]=(playerGoalsReceived[playerName]||0)+1;localStorage.setItem("playerGoalsReceived",JSON.stringify(playerGoalsReceived))}}
room.onTeamGoal=function(team){if(TiempoCumplidoGanaSigue&&!partidoEmpatado){TiempoCumplidoGanaSigue=!1;partidoEmpatado=!1;room.sendAnnouncement("⚽ ¡SE DESEMPATÓ EL PARTIDO!",null,0x00FF00,"bold",1)}
if(team===1)currentRedScore++;if(team===2)currentBlueScore++;golesPartido.push({goleador:game.lastKickerName||null,asistidor:game.secondLastKickerName||null,equipo:team});if(GolDeOroActivado&&AnuncioGolDeOro&&FairPlayActivado===!1){room.pauseGame(!0);handleTeamVictory();AnuncioGolDeOro=!1;setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();if(!GrabarTodo){room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")}},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,GolesTotalesRED>GolesTotalesBLUE?'victory':(GolesTotalesRED<GolesTotalesBLUE?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,GolesTotalesBLUE>GolesTotalesRED?'victory':(GolesTotalesBLUE<GolesTotalesRED?'defeat':'draw'))});return}
var ballProps=room.getDiscProperties(0);var velocidad=Math.sqrt(ballProps.xspeed**2+ballProps.yspeed**2);var velocidadPorSegundo=velocidad*60;var velocidadMetrosPorSegundo=velocidadPorSegundo/100;var velocidadKmPorHora=velocidadMetrosPorSegundo*3.6;room.sendAnnouncement("Velocidad del tiro: "+velocidadKmPorHora.toFixed(2)+" km/h",null,0x00FF00,"bold",2);var scores=room.getScores();var goals=team===1?scores.red:scores.blue;updateStats(team,goals);const goleador=game.lastKickerName;const asistidor=game.secondLastKickerName;if(goleador&&game.lastKickerTeam===team){playerGoals[goleador]=(playerGoals[goleador]||0)+1;playerGoals2[goleador]=(playerGoals2[goleador]||0)+1;actualizarPuntos(goleador)}
if(asistidor&&game.secondLastKickerTeam===team&&game.lastKickerId!==game.secondLastKickerId){playerAssists[asistidor]=(playerAssists[asistidor]||0)+1;playerAssists2[asistidor]=(playerAssists2[asistidor]||0)+1;actualizarPuntos(asistidor)}
game.rsActive=!1;let goalTime=secondsToMinutes(Math.floor(room.getScores().time));let scorer;let assister="";let scorer2;let assister2="";let goalType;if(team==1){if(game.lastKickerTeam==1){const goalMessages=["⚡ ¡GOOOLAZO!","🔥 ¡GOLAZO INCREÍBLE!","💥 ¡LA RED TIEMBLA CON ESE GOL!","🚀 ¡GOLAZO DE OTRO PLANETA!","⚽ ¡GOOOOOOL!",];goalType=goalMessages[Math.floor(Math.random()*goalMessages.length)];scorer=getRandomScorerMessage();scorer2=getRandomScorerMessage2();avatarCelebration(game.lastKickerId,getRandomGoalEmoji());if(game.secondLastKickerTeam==1&&game.lastKickerId!=game.secondLastKickerId){const assistMessages=["👟 ¡Gran pase de "+game.secondLastKickerName+"!","🎯 ¡Preciso pase de "+game.secondLastKickerName+"!","🔑 ¡La jugada se gestó con una asistencia de "+game.secondLastKickerName+"!","🤝 ¡"+game.secondLastKickerName+" brinda la asistencia para el gol!","⚽ ¡Asistencia perfecta de "+game.secondLastKickerName+"!","👌 ¡Excelente pase de "+game.secondLastKickerName+"!","🔥 ¡Jugada brillante de "+game.secondLastKickerName+"!","🤩 ¡"+game.secondLastKickerName+" crea la oportunidad de gol!","👏 ¡Fantástica asistencia de "+game.secondLastKickerName+"!","💫 ¡"+game.secondLastKickerName+" demuestra su visión de juego!",];const assistMessages2=["⚽👟 ¡**ASISTENCIA** de **"+game.secondLastKickerName+"**!","👥⚽ ¡**PASE** de **"+game.secondLastKickerName+"**!"];assister=" ("+assistMessages[Math.floor(Math.random()*assistMessages.length)]+")";assister2=" ("+assistMessages2[Math.floor(Math.random()*assistMessages2.length)]+")";avatarCelebration(game.secondLastKickerId,"👟")}}
if(game.lastKickerTeam==2){const ownGoalMessages=["❌ ¡HAN MARCADO UN AUTOGOL!","❌ ¡GOL EN CONTRA INESPERADO!","❌ ¡EL EQUIPO EQUIVOCADO MARCA EN SU PROPIA PORTERÍA!","❌ ¡UN DESAFORTUNADO AUTOGOL!",];goalType=ownGoalMessages[Math.floor(Math.random()*ownGoalMessages.length)];scorer=getRandomOwnGoalScorerMessage();scorer2=getRandomOwnGoalScorerMessage2();avatarCelebration(game.lastKickerId,getRandomAutoGoalEmoji());if(game.secondLastKickerTeam==1){const assistMessages=["👟🌟 ¡El gol en contra es gracias a la jugada de "+game.secondLastKickerName+"!","⚠️ ¡"+game.secondLastKickerName+"  contribuye al autogol del rival!","🌟 ¡"+game.secondLastKickerName+" arma la jugada!","⚠️ ¡Jugada maestra de "+game.secondLastKickerName+"! ¡El rival termina anotando un autogol! ⚽😮",];const assistMessages2=["👟 ¡**ASISTENCIA** de **"+game.secondLastKickerName+"**!","🌟 ¡**JUGADA** de **"+game.secondLastKickerName+"**!",];assister=" ("+assistMessages[Math.floor(Math.random()*assistMessages.length)]+")";assister2=" ("+assistMessages2[Math.floor(Math.random()*assistMessages2.length)]+")";avatarCelebration(game.secondLastKickerId,"👟")}}
game.redScore++}
if(team==2){if(game.lastKickerTeam==2){const goalMessages=["⚡ ¡GOOOLAZO!","🔥 ¡GOLAZO INCREÍBLE!","💥 ¡LA RED TIEMBLA CON ESE GOL!","🚀 ¡GOLAZO DE OTRO PLANETA!","⚽ ¡GOOOOOOL!",];goalType=goalMessages[Math.floor(Math.random()*goalMessages.length)];scorer=getRandomScorerMessage();scorer2=getRandomScorerMessage2();avatarCelebration(game.lastKickerId,getRandomGoalEmoji());if(game.secondLastKickerTeam==2&&game.lastKickerId!=game.secondLastKickerId){const assistMessages=["👟 ¡Gran pase de "+game.secondLastKickerName+"!","🎯 ¡Preciso pase de "+game.secondLastKickerName+"!"," ¡⚽️ Que pelota, "+game.secondLastKickerName+"! 👏","🤝 ¡"+game.secondLastKickerName+" brinda la asistencia para el gol!","⚽ ¡Asistencia perfecta de "+game.secondLastKickerName+"!","👌 ¡Excelente pase de "+game.secondLastKickerName+"!","🔥 ¡Jugada brillante de "+game.secondLastKickerName+"!","🤩 ¡"+game.secondLastKickerName+" crea la oportunidad de gol!","👏 ¡Fantástica asistencia de "+game.secondLastKickerName+"! 💯 ","💫 ¡"+game.secondLastKickerName+" demuestra su visión de juego!",];const assistMessages2=["⚽👟 ¡**ASISTENCIA** de **"+game.secondLastKickerName+"**!","👥⚽ ¡**PASE** de **"+game.secondLastKickerName+"**!"];assister=" ("+assistMessages[Math.floor(Math.random()*assistMessages.length)]+")";assister2=" ("+assistMessages2[Math.floor(Math.random()*assistMessages2.length)]+")";avatarCelebration(game.secondLastKickerId,"👟")}}
if(game.lastKickerTeam==1){const ownGoalMessages=["❌ ¡HAN MARCADO UN AUTOGOL!","❌ ¡GOL EN CONTRA INESPERADO!","❌ ¡EL EQUIPO EQUIVOCADO MARCA EN SU PROPIA PORTERÍA!","❌ ¡UN DESAFORTUNADO AUTOGOL!",];goalType=ownGoalMessages[Math.floor(Math.random()*ownGoalMessages.length)];scorer=getRandomOwnGoalScorerMessage();scorer2=getRandomOwnGoalScorerMessage2();avatarCelebration(game.lastKickerId,getRandomAutoGoalEmoji());if(game.secondLastKickerTeam==2){const assistMessages=["👟🌟 ¡El gol en contra es gracias a la jugada de "+game.secondLastKickerName+"!","⚠️ ¡"+game.secondLastKickerName+"  contribuye al autogol del rival!","🌟 ¡"+game.secondLastKickerName+" arma la jugada!","⚠️ ¡Jugada maestra de "+game.secondLastKickerName+"! ¡El rival termina anotando un autogol! ⚽😮",];const assistMessages2=["👟 ¡**ASISTENCIA** de **"+game.secondLastKickerName+"**!","⚠ ¡**JUGADA** de **"+game.secondLastKickerName+"**!",];assister=" ("+assistMessages[Math.floor(Math.random()*assistMessages.length)]+")";assister2=" ("+assistMessages2[Math.floor(Math.random()*assistMessages2.length)]+")";avatarCelebration(game.secondLastKickerId,"👟")}}
game.blueScore++}
const redScore=replaceNumbers(game.redScore);const blueScore=replaceNumbers(game.blueScore);announce(`${goalType}       ${toMathBoldSmall(teamRed)} ${redScore} 🆚 ${blueScore} ${toMathBoldSmall(teamBlue)}   A los ${goalTime} 🕒\n\n ${scorer}${assister}`);goalAnnouncementsSum.push(`🟥 **${teamRed} ${redScore} **\n🟦 **${teamBlue} ${blueScore}**\n🕒 **${goalTime}**  ⚊ ${scorer2}${assister2}\n`);game.lastKicker=undefined;game.secondLastKicker=undefined;game.lastKickerTeam=undefined;game.secondLastKickerTeam=undefined;if(AnuncioGolDeOro){AnuncioGolDeOro=!1;setTimeout(function(){const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
localStorage.setItem('playerCleanSheets',JSON.stringify(playerCleanSheets));const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))});const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);handleTeamVictory();setTimeout(function(){sendDiscordWebhook();if(!GrabarTodo){room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")}},150)},800);setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}})},3000);setTimeout(function(){room.startGame()},4000)}};function replaceNumbers(number){const replacements={0:"0️⃣",1:"1️⃣",2:"2️⃣",3:"3️⃣",4:"4️⃣",5:"5️⃣",6:"6️⃣",7:"7️⃣",8:"8️⃣",9:"9️⃣"};return number.toString().replace(/\d/g,match=>replacements[match])}
function toMathBoldSmall(text){const mathBoldSmallMap={a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",h:"𝐡",i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳",A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",F:"𝐅",G:"𝐆",H:"𝐇",I:"𝐈",J:"𝐉",K:"𝐊",L:"𝐋",M:"𝐌",N:"𝐍",O:"𝐎",P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",U:"𝐔",V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",Z:"𝐙"};return text.split("").map(char=>mathBoldSmallMap[char]||char).join("")}
room.onPositionsReset=function(){const DEFAULT_SIZE=15;var MIN_SIZE=TamanoMinimoPermitido;var MAX_SIZE=TamanoMaximoPermitido;let id=Object.keys(tookASize);let size;for(var i=0;i<id.length;i++){if(tookASize.hasOwnProperty(id[i])){size=tookASize[id[i]];if(size>=MIN_SIZE&&size<=MAX_SIZE){let invMass=Math.max(0.01,0.5+(DEFAULT_SIZE-size)*0.02);room.setPlayerDiscProperties(id[i],{radius:size,invMass:invMass})}}}
var _0x1a3b51=_0x3c81f9;if(game.lastPlayAnnounced==!0){room.pauseGame(!0);game.lastPlayAnnounced=!1;if(GolDeOroActivado&&room.getScores().red===room.getScores().blue){room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥",null,0xffd700,"bold",2);AnuncioGolDeOro=!0;setTimeout(function(){room.pauseGame(!1)},1000)}else{handleTeamVictory();setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();if(!GrabarTodo){room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")}},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))})}
if(FairPlayActivado){var scoreDifference=Math.abs(room.getScores().red-room.getScores().blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},3500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},3500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}}
let isGamePaused=!1;function updatePlayerMinutes(player){const playerId=player.id;const playerName=player.name;if(!isGamePaused&&isBallMoving()){if(player.position&&player.team!==0){if(!playerMinutesPlayed[playerName]){playerMinutesPlayed[playerName]=0}
playerMinutesPlayed[playerName]+=1;localStorage.setItem('playerMinutesPlayed',JSON.stringify(playerMinutesPlayed))}}}
function updateGoalkeeperTime(player){const playerId=player.id;const playerName=player.name;if(!isGamePaused&&isBallMoving()){if(player.position){if(player.id===ArqueroRED?.id||player.id===ArqueroBLUE?.id){const goalkeeperName=player.id===ArqueroRED?.id?ArqueroRED.name:ArqueroBLUE.name;if(!playerGoalkeeperTime[goalkeeperName]){playerGoalkeeperTime[goalkeeperName]=0}
playerGoalkeeperTime[goalkeeperName]+=1;localStorage.setItem('playerGoalkeeperTime',JSON.stringify(playerGoalkeeperTime))}}}}
const playerPositions={};function checkPlayerActivity(){const players=room.getPlayerList();const currentTime=Date.now();players.forEach((player)=>{const playerId=player.id;const playerPosition=player.position;if(!playerPositions[playerId]&&player.team!==0&&!player.admin){playerPositions[playerId]={position:playerPosition,lastUpdateTime:currentTime,}}else if(player.team!==0&&!player.admin){if(playerPositions[playerId]&&playerPositions[playerId].position.x===playerPosition.x&&playerPositions[playerId].position.y===playerPosition.y){const timeDifference=currentTime-playerPositions[playerId].lastUpdateTime;if(!isAFKpaused&&!isGamePaused&&timeDifference>=SegundosPermitidosAFK*1000){if(!afkPlayerIDs.has(playerId)){afkPlayerIDs.add(player.id);const inactivityTimeout=MinutosPermitidosAFK*60*1000;const inactivityTimer=setTimeout(()=>{room.kickPlayer(player.id,"⌛️ EXPULSADO por INACTIVIDAD 😴🚫",!1);playerInactivity.delete(player.id)},inactivityTimeout);playerInactivity.set(player.id,inactivityTimer);room.setPlayerTeam(player.id,0);setTimeout(()=>{room.sendAnnouncement("🌴   ¡"+player.name+" se encuentra actualmente A F K! 🕒 💤",null,0xff8400,'bold',2);if(playerPositions[playerId]){playerPositions[playerId].lastUpdateTime=currentTime}},500);setTimeout(()=>{room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️",player.id,0xff8400,'small-bold',2)},1000);setTimeout(()=>{room.sendAnnouncement("🚨 ¡ATENCIÓN! Si te quedas AFK por "+MinutosPermitidosAFK+" MINUTOS ⌛, serás EXPULSADO del host. 🛑",player.id,0xff8400,'small-bold',2)},1500);setTimeout(()=>{room.sendAnnouncement("📌   RECUERDA QUE:        ⚠️ Si el administrador lo decide, puede echarte del host usando !kickafks. ⚠️",player.id,0xff8400,'small-bold',2)},2000);const admins=room.getPlayerList().filter(admin=>admin.admin);if(admins.length>0){const adminNames=admins.map(admin=>admin.name).join(", ");setTimeout(()=>{room.sendAnnouncement(`🛠️ Administrador(es): ${adminNames}, ¡Pueden usar !kickafks para expulsar a los jugadores AFK!`,null,0x00FFBB,'bold',0)},3000)}else{setTimeout(()=>{room.sendAnnouncement("📣 El administrador puede echar a los jugadores AFK con el comando !kickafks.",null,0x00FFBB,'bold',0)},3000)}}}}else{playerPositions[playerId]={position:playerPosition,lastUpdateTime:currentTime,};if(afkPlayerIDs.has(playerId)){afkPlayerIDs.delete(playerId)}}}else if(player.team!==0&&player.admin){if(playerPositions[playerId]&&playerPositions[playerId].position.x===playerPosition.x&&playerPositions[playerId].position.y===playerPosition.y){const timeDifference=currentTime-playerPositions[playerId].lastUpdateTime;if(!isAFKpaused&&!isGamePaused&&timeDifference>=SegundosPermitidosAFK*1000){if(!afkPlayerIDs.has(playerId)){afkPlayerIDs.add(player.id);room.setPlayerTeam(player.id,0);setTimeout(()=>{room.sendAnnouncement("🌴   ¡El administrador 👑 "+player.name+" se encuentra actualmente A F K! 🕒 💤",null,0xff8400,'bold',2);if(playerPositions[playerId]){playerPositions[playerId].lastUpdateTime=currentTime}},500);setTimeout(()=>{room.sendAnnouncement("📢   Para salir del AFK, escribe !afk otra vez. ↩️",player.id,0xff8400,'small-bold',2)},1000)}}}else{playerPositions[playerId]={position:playerPosition,lastUpdateTime:currentTime,};if(afkPlayerIDs.has(playerId)){afkPlayerIDs.delete(playerId)}}}})}
function isBallMoving(){const ballPosition=room.getBallPosition();return ballPosition&&(ballPosition.x!==0||ballPosition.y!==0)}
var gameTickPaused=!1;function handleGameTick(){if(modoJueganAlgunos){if(!gameTickPaused){const activePlayers=room.getPlayerList().filter(p=>!afkPlayerIDs.has(p.id));let blueTeamCount=activePlayers.filter(p=>p.team===1).length;let redTeamCount=activePlayers.filter(p=>p.team===2).length;movePlayersIfNeeded(activePlayers,blueTeamCount,redTeamCount)}}}
function movePlayersIfNeeded(activePlayers,blueTeamCount,redTeamCount){const spectators=room.getPlayerList().filter(p=>p.team===0&&!afkPlayerIDs.has(p.id));while(spectators.length>0&&(blueTeamCount<maxPlayersPerTeam||redTeamCount<maxPlayersPerTeam)){const spectatorToMove=spectators.shift();if(blueTeamCount<redTeamCount){room.setPlayerTeam(spectatorToMove.id,1);blueTeamCount++}else{room.setPlayerTeam(spectatorToMove.id,2);redTeamCount++}}
while(blueTeamCount>maxPlayersPerTeam){const playerToMove=activePlayers.find(p=>p.team===1);if(playerToMove){room.setPlayerTeam(playerToMove.id,0);blueTeamCount--}}
while(redTeamCount>maxPlayersPerTeam){const playerToMove=activePlayers.find(p=>p.team===2);if(playerToMove){room.setPlayerTeam(playerToMove.id,0);redTeamCount--}}}
function balanceTeams2(activePlayers){const bluePlayers=activePlayers.filter(p=>p.team===1);const redPlayers=activePlayers.filter(p=>p.team===2);while(bluePlayers.length>maxPlayersPerTeam){const playerToMove=bluePlayers.pop();room.setPlayerTeam(playerToMove.id,0)}
while(redPlayers.length>maxPlayersPerTeam){const playerToMove=redPlayers.pop();room.setPlayerTeam(playerToMove.id,0)}}
function pauseGameTick(){gameTickPaused=!0}
function resumeGameTick(){gameTickPaused=!1}
let lastTick=0;const TICK_INTERVAL=100;room[_0x3c81f9(0x19c)]=function(player){if(ganasigueEnabled&&TiempoCumplidoGanaSigue&&!partidoEmpatado){const ballPosition=room.getBallPosition();if(ballPosition){const posXActual=ballPosition.x;if((ultimaPosicionXPelota<0&&posXActual>=0)||(ultimaPosicionXPelota>0&&posXActual<=0)){partidoEmpatado=!0;room.sendAnnouncement("🏁 ¡Partido terminado por empate!",null,0xFFA500,"bold",2);room.pauseGame(!0);game.lastKicker=undefined;game.secondLastKicker=undefined;game.lastKickerTeam=undefined;game.secondLastKickerTeam=undefined;const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
localStorage.setItem('playerCleanSheets',JSON.stringify(playerCleanSheets));const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){const scores=room.getScores();const isRealEmpate0_0=scores&&scores.red===0&&scores.blue===0;if(isRealEmpate0_0){sendEmpate0_0Embed()}else{sendDiscordWebhook()}
if(!GrabarTodo){room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")}},150);handleEmpate()}
ultimaPosicionXPelota=posXActual}}
DetectorGK();var _0x59120c=_0x3c81f9;if(RSRMap==!0){updateGameStatus();if(THERealFutsalMap==!0){handleBallTouchFUTSAL()}else{handleBallTouch()}
realSoccerRef()}else{updateGameStatus();handleBallTouchFUTSAL()}
const now=Date.now();if(now-lastTick<TICK_INTERVAL)return;lastTick=now;var scores=room.getScores();if(scores)lastKnownMatchTime=scores.time;if(ganasigueEnabled&&!TiempoCumplidoGanaSigue&&!partidoEmpatado&&!RSRMap){const empateEnMarcador=currentRedScore===currentBlueScore;const tiempoCumplido=lastKnownMatchTime>=duracionPartido;if(empateEnMarcador&&tiempoCumplido){TiempoCumplidoGanaSigue=!0;room.sendAnnouncement("⚽ SI LA PELOTA PASA AL LADO DEL EQUIPO CONTRARIO SE TERMINA EL PARTIDO EN EMPATE Y SALEN AMBOS EQUIPOS.",null,0xFFFF00,"bold",2)}}
handleGameTick();checkPlayerActivity();const playersz=room.getPlayerList();for(const player of playersz){updatePlayerMinutes(player);updateGoalkeeperTime(player)}
var players=room.getPlayerList();var ballPosition=room.getBallPosition();for(var i=0;i<players.length;i++){var p=players[i];if(!p.position)continue;var pp=room.getPlayerDiscProperties(p.id);var d=Math.sqrt(Math.pow(pp.x-ballPosition.x,2)+Math.pow(pp.y-ballPosition.y,2));if(d<50){if(p.team===1)posesionEquipoA++;else if(p.team===2)posesionEquipoB++}}
PartidoArrancado=!0;if(whoTouchedLast&&ballCarrying.get(whoTouchedLast.name)){ballCarrying.get(whoTouchedLast.name)[0]+=1/60}
updateTimeOnHalves();LinkDelScript();LinkDelScript2();LinkDelScript3();LinkDelScript4();ReiniciarPuntosJugadores()};function sendEmpate0_0Embed(){console.log("🎯 ENVIANDO EMBED COMPLETO PARA EMPATE 0-0");const red=room.getPlayerList().filter((player)=>player.team==1);const blue=room.getPlayerList().filter((player)=>player.team==2);const printRed=red.map((player)=>player.name);const printBlue=blue.map((player)=>player.name);const scores=room.getScores();const timeRemaining=scores?scores.time:0;const totalPosesion=posesionEquipoA+posesionEquipoB;const porcentajeEquipoA=totalPosesion===0?50:(posesionEquipoA/totalPosesion)*100;const porcentajeEquipoB=totalPosesion===0?50:(posesionEquipoB/totalPosesion)*100;const timeOnRedHalf=Math.round((timeOnHalves[0]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);const timeOnBlueHalf=Math.round((timeOnHalves[1]/(timeOnHalves[0]+timeOnHalves[1]+0.000001))*100);const admins=room.getPlayerList().filter((player)=>player.admin);const adminNames=admins.map((admin)=>admin.name);const adminList=adminNames.length>0?adminNames.join(', '):'Sin Administrador';const figuraDelPartido2=getFiguraDelPartido2();console.log("📊 Datos para embed:",{teamRed:teamRed,teamBlue:teamBlue,jugadoresRed:printRed.length,jugadoresBlue:printBlue.length,posesionRed:porcentajeEquipoA,posesionBlue:porcentajeEquipoB});const embed={title:"🏆 RESULTADO FINAL",color:0xFFFF00,description:`**🟥 ${teamRed} 0**\n**🟦 ${teamBlue} 0**\n\n⚔️ **Partido empatado sin goles**`,fields:[{name:`👥 Formación ${teamRed} 🔴`,value:printRed.length>0?printRed.join('\n'):"Sin jugadores",inline:!0},{name:`👥 Formación ${teamBlue} 🔵`,value:printBlue.length>0?printBlue.join('\n'):"Sin jugadores",inline:!0},{name:"🌟 Figura del partido:",value:figuraDelPartido2||"No hubo"},{name:"📊 ESTADÍSTICAS DEL PARTIDO",value:`**⚽️ Posesión de balón:**\n🔴 ${teamRed}: ${porcentajeEquipoA.toFixed(2)}%\n🔵 ${teamBlue}: ${porcentajeEquipoB.toFixed(2)}%\n\n**🔄 Pelota en campo:**\n🔴 ${teamRed}: ${timeOnRedHalf}%\n🔵 ${teamBlue}: ${timeOnBlueHalf}%\n\n⏰ **Tiempo Jugado**: ${getScoresObjectTime(timeRemaining)}`},{name:"🛠️ CONFIGURACIÓN",value:`**🎮 Sala:** ${NombreHost}\n**👑 Admins:** ${adminList}\n**📍 Ubicación:** ${countryOfHost}\n**🏟️ Mapa:** ${currentMap}\n**⚽️ Límite Goles:** ${scores.scoreLimit}\n**⏱️ Límite Tiempo:** ${getScoresObjectTime(scores.timeLimit)}`}],};console.log("📤 Enviando embed COMPLETO de empate 0-0 a Discord...");const webhookData=new FormData();webhookData.append("payload_json",JSON.stringify({embeds:[embed]}));const webhook=new XMLHttpRequest();webhook.onload=function(){console.log("✅ Embed COMPLETO de empate 0-0 enviado exitosamente a Discord")};webhook.onerror=function(){console.log("❌ Error al enviar embed de empate 0-0 a Discord")};webhook.open("POST",WebhookGrabaciones);webhook.send(webhookData);setTimeout(()=>{sendHBR2File()},80)}
updateTimeOnHalves=function(){if(room.getBallPosition().x<0){timeOnHalves[0]+=1/60}else if(room.getBallPosition().x>0){timeOnHalves[1]+=1/60}}
var ScoresNumbers='0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣';room.onGamePause=function(){isGamePaused=!0};room.onGameUnpause=function(){isGamePaused=!1};function scorerNumber(num){var result='';var reversedDigits=[];do{reversedDigits.push(num%10);num=Math.floor(num/10)}while(num>0);for(var i=reversedDigits.length;i-->0;){result+=ScoresNumbers.substr(reversedDigits[i]*3,3)}
return result}
function realSoccerRef(){blockThrowIn();blockGoalKick();removeBlock();if(game.time==gameTime){game.rsCorner2=!1;game.rsGoalKick2=!1;game.lateral2=!1}
if(game.time==gameTime*60&&game.extraTimeAnnounced==!1){extraTime();game.extraTimeAnnounced=!0}
if(game.time==game.extraTimeEnd&&game.lastPlayAnnounced==!1){room.sendAnnouncement("                                    😱 ⏰  🔥          Ú L T I M A     J U G A D A    D E L    P A R T I D O      🔥  ⏰ 😱",null,0xffff00,'bold',2);room.sendAnnouncement("                                                       💔 🚫   Si la pelota sale del terreno de juego, se finalizará el partido. ✋ 🛑",null,0xf9fa00,'small',0);game.lastPlayAnnounced=!0}
if(game.rsCorner2==!0||game.rsGoalKick2==!0||game.lateral2==!0){game.extraTimeCount++}
if(game.rsTimer<99999&&game.paused==!1&&game.rsActive==!1&&game.rsReady==!0){game.rsTimer++}
if(game.rsSwingTimer<150&&game.rsCorner==!1&&game.rsGoalKick==!1){game.rsSwingTimer++;if(game.rsSwingTimer>5){room.setDiscProperties(0,{xgravity:room.getDiscProperties(0).xgravity*0.97,ygravity:room.getDiscProperties(0).ygravity*0.97})}
if(game.rsSwingTimer==150){room.setDiscProperties(0,{xgravity:0,ygravity:0})}}
if(game.boosterState==!0){game.boosterCount++}
if(game.boosterCount>30){game.boosterState=!1;game.boosterCount=0;room.setDiscProperties(0,{cMask:63})}
if(room.getBallPosition().x==0&&room.getBallPosition().y==0){game.rsActive=!0;game.outStatus=""}
if(game.rsActive==!1&&game.rsReady==!0){if(game.outStatus=="redThrow"){if(game.rsTimer==throwTimeOut-120){ballWarning("0xff223c",++game.warningCount)}
if(game.rsTimer==throwTimeOut&&game.bringThrowBack==!1){game.outStatus="blueThrow";game.rsTimer=0;room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{color:"0x00ccff",xspeed:0,yspeed:0,x:game.ballOutPositionX,y:game.throwInPosY})})}}else if(game.outStatus=="blueThrow"){if(game.rsTimer==throwTimeOut-120){ballWarning("0x00ccff",++game.warningCount)}
if(game.rsTimer==throwTimeOut&&game.bringThrowBack==!1){game.outStatus="redThrow";game.rsTimer=0;room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{color:"0xff223c",xspeed:0,yspeed:0,x:game.ballOutPositionX,y:game.throwInPosY})})}}else if(game.outStatus=="blueGK"||game.outStatus=="redGK"){if(game.rsTimer==gkTimeOut-120){if(game.outStatus=="blueGK"){ballWarning("0x00ccff",++game.warningCount)}
if(game.outStatus=="redGK"){ballWarning("0xff223c",++game.warningCount)}}
if(game.rsTimer==gkTimeOut){game.outStatus="";room.setDiscProperties(0,{color:`0x${PelotaRS}`});game.rsTimer=1000000}}else if(game.outStatus=="blueCK"||game.outStatus=="redCK"){if(game.rsTimer==ckTimeOut-120){if(game.outStatus=="blueCK"){ballWarning("0x00ccff",++game.warningCount)}
if(game.outStatus=="redCK"){ballWarning("0xff223c",++game.warningCount)}}
if(game.rsTimer==ckTimeOut){game.outStatus="";room.setDiscProperties(1,{x:0,y:2000,radius:0});room.setDiscProperties(2,{x:0,y:2000,radius:0});room.setDiscProperties(0,{color:`0x${PelotaRS}`});game.rsTimer=1000000}}}
if(game.rsActive==!0){if((room.getBallPosition().y>612||room.getBallPosition().y<-612)){game.rsActive=!1;if(game.lastPlayAnnounced==!0){room.pauseGame(!0);game.lastPlayAnnounced=!1;if(GolDeOroActivado&&room.getScores().red===room.getScores().blue){room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥",null,0xffd700,"bold",2);AnuncioGolDeOro=!0;setTimeout(function(){room.pauseGame(!1)},1000)}else{handleTeamVictory();setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();if(!GrabarTodo){room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")}},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))})}
if(FairPlayActivado){var scoreDifference=Math.abs(room.getScores().red-room.getScores().blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},3500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},3500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}
room.setDiscProperties(0,{xgravity:0,ygravity:0});game.ballOutPositionX=Math.round(room.getBallPosition().x*10)/10;if(room.getBallPosition().y>612){game.ballOutPositionY=400485;game.throwInPosY=618}
if(room.getBallPosition().y<-612){game.ballOutPositionY=-400485;game.throwInPosY=-618}
if(room.getBallPosition().x>1130){game.ballOutPositionX=1130}
if(room.getBallPosition().x<-1130){game.ballOutPositionX=-1130}
if(game.rsTouchTeam==1){room.setDiscProperties(3,{x:game.ballOutPositionX,y:game.throwInPosY,radius:18});sleep(100).then(()=>{game.outStatus="blueThrow";game.throwinKicked=!1;game.rsTimer=0;game.rsReady=!0;game.lateral=!0;game.lateral2=!0;room.setDiscProperties(0,{xspeed:0,yspeed:0,x:game.ballOutPositionX,y:game.throwInPosY,xgravity:0,ygravity:0});room.setDiscProperties(0,{color:"0x00ccff"})});sleep(100).then(()=>{room.setDiscProperties(3,{x:0,y:2000,radius:0})})}else{room.setDiscProperties(3,{x:game.ballOutPositionX,y:game.throwInPosY,radius:18});sleep(100).then(()=>{game.outStatus="redThrow";game.throwinKicked=!1;game.rsTimer=0;game.rsReady=!0;game.lateral=!0;game.lateral2=!0;room.setDiscProperties(0,{xspeed:0,yspeed:0,x:game.ballOutPositionX,y:game.throwInPosY,xgravity:0,ygravity:0});room.setDiscProperties(0,{color:"0xff223c"})});sleep(100).then(()=>{room.setDiscProperties(3,{x:0,y:2000,radius:0})})}}
if(room.getBallPosition().x>1162&&(room.getBallPosition().y>124||room.getBallPosition().y<-124)){game.rsActive=!1;if(game.lastPlayAnnounced==!0){room.pauseGame(!0);game.lastPlayAnnounced=!1;if(GolDeOroActivado&&room.getScores().red===room.getScores().blue){room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥",null,0xffd700,"bold",2);AnuncioGolDeOro=!0;setTimeout(function(){room.pauseGame(!1)},1000)}else{handleTeamVictory();setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();if(!GrabarTodo){room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")}},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))})}
if(FairPlayActivado){var scoreDifference=Math.abs(room.getScores().red-room.getScores().blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},3500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},3500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}
room.setDiscProperties(0,{xgravity:0,ygravity:0});room.getPlayerList().forEach(function(player){room.setPlayerDiscProperties(player.id,{invMass:100000})});if(game.rsTouchTeam==1){room.setDiscProperties(3,{x:1060,y:0,radius:18});sleep(100).then(()=>{game.outStatus="blueGK";game.rsTimer=0;game.rsReady=!0;game.rsGoalKick=!0;game.rsGoalKick2=!0;game.rsSwingTimer=0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{xspeed:0,yspeed:0,x:1060,y:0,color:"0x00ccff",cMask:268435519,xgravity:0,ygravity:0})});sleep(3000).then(()=>{room.setDiscProperties(3,{x:0,y:2000,radius:0})})}else{game.rsSwingTimer=0;if(room.getBallPosition().y<-124){room.setDiscProperties(3,{x:1140,y:-590,radius:18});sleep(100).then(()=>{game.rsCorner=!0;game.rsCorner2=!0;game.outStatus="redCK";game.rsTimer=0;game.rsReady=!0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{x:1140,y:-590,xspeed:0,yspeed:0,color:"0xff223c",cMask:268435519,xgravity:0,ygravity:0});room.setDiscProperties(2,{x:1150,y:-670,radius:420});room.setDiscProperties(3,{x:0,y:2000,radius:0})})}
if(room.getBallPosition().y>124){room.setDiscProperties(3,{x:1140,y:590,radius:18});sleep(100).then(()=>{game.rsCorner=!0;game.rsCorner2=!0;game.outStatus="redCK";game.rsTimer=0;game.rsReady=!0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{x:1140,y:590,xspeed:0,yspeed:0,color:"0xff223c",cMask:268435519,xgravity:0,ygravity:0});room.setDiscProperties(2,{x:1150,y:670,radius:420});room.setDiscProperties(3,{x:0,y:2000,radius:0})})}}}
if(room.getBallPosition().x<-1162&&(room.getBallPosition().y>124||room.getBallPosition().y<-124)){game.rsActive=!1;if(game.lastPlayAnnounced==!0){room.pauseGame(!0);game.lastPlayAnnounced=!1;if(GolDeOroActivado&&room.getScores().red===room.getScores().blue){room.sendAnnouncement("　　　¡GOL DE ORO!　　🔥 ⚽️　　EL PRIMERO EN MARCAR GOL, GANA.  🏆💥",null,0xffd700,"bold",2);AnuncioGolDeOro=!0;setTimeout(function(){room.pauseGame(!1)},1000)}else{handleTeamVictory();setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+getNumericEmoji(room.getScores().red)+"      🞬      "+getNumericEmoji(room.getScores().blue)+"  "+teamBlue+" ███████████████████",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();if(!GrabarTodo){room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")}},150)},800);const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))})}
if(FairPlayActivado){var scoreDifference=Math.abs(room.getScores().red-room.getScores().blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},3500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},3500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}
room.setDiscProperties(0,{xgravity:0,ygravity:0});room.getPlayerList().forEach(function(player){room.setPlayerDiscProperties(player.id,{invMass:100000})});if(game.rsTouchTeam==1){game.rsSwingTimer=0;if(room.getBallPosition().y<-124){room.setDiscProperties(3,{x:-1140,y:-590,radius:18});sleep(100).then(()=>{game.rsCorner=!0;game.rsCorner2=!0;game.outStatus="blueCK";game.rsTimer=0;game.rsReady=!0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{x:-1140,y:-590,xspeed:0,yspeed:0,color:"0x00ccff",cMask:268435519,xgravity:0,ygravity:0});room.setDiscProperties(1,{x:-1150,y:-670,radius:420});room.setDiscProperties(3,{x:0,y:2000,radius:0})})}
if(room.getBallPosition().y>124){room.setDiscProperties(3,{x:-1140,y:590,radius:18});sleep(100).then(()=>{game.rsCorner=!0;game.rsCorner2=!0;game.outStatus="blueCK";game.rsTimer=0;game.rsReady=!0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{x:-1140,y:590,xspeed:0,yspeed:0,color:"0x00ccff",cMask:268435519,xgravity:0,ygravity:0});room.setDiscProperties(1,{x:-1150,y:670,radius:420});room.setDiscProperties(3,{x:0,y:2000,radius:0})})}}else{room.setDiscProperties(3,{x:-1060,y:0,radius:18});sleep(100).then(()=>{game.outStatus="redGK";game.rsTimer=0;game.rsReady=!0;game.rsGoalKick=!0;game.rsGoalKick2=!0;game.rsSwingTimer=0;game.boosterCount=0;game.boosterState=!1;room.setDiscProperties(0,{xspeed:0,yspeed:0,x:-1060,y:0,color:"0xff223c",cMask:268435519,xgravity:0,ygravity:0})});sleep(3000).then(()=>{room.setDiscProperties(3,{x:0,y:2000,radius:0})})}}}
if(game.rsActive==!1&&(game.outStatus=="redThrow"||game.outStatus=="blueThrow")){if((room.getBallPosition().y>612||room.getBallPosition().y<-612)&&(room.getBallPosition().x<game.ballOutPositionX-throwinDistance||room.getBallPosition().x>game.ballOutPositionX+throwinDistance)&&game.bringThrowBack==!1){game.bringThrowBack=!0;if(game.outStatus=="redThrow"){game.rsTimer=0;game.warningCount++;game.outStatus="blueThrow";room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{xspeed:0,yspeed:0,color:"0x00ccff",x:game.ballOutPositionX,y:game.throwInPosY})})}else if(game.outStatus=="blueThrow"){game.rsTimer=0;game.warningCount++;game.outStatus="redThrow";room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{xspeed:0,yspeed:0,color:"0xff223c",x:game.ballOutPositionX,y:game.throwInPosY})})}}
if(room.getBallPosition().y<612&&room.getBallPosition().y>-612&&game.throwinKicked==!1&&game.pushedOut==!1){if(game.outStatus=="redThrow"){game.rsTimer=0;game.warningCount++;game.outStatus="blueThrow";room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{xspeed:0,yspeed:0,color:"0x00ccff",x:game.ballOutPositionX,y:game.throwInPosY})})}else if(game.outStatus=="blueThrow"){game.rsTimer=0;game.warningCount++;game.outStatus="redThrow";room.setDiscProperties(3,{x:0,y:2000,radius:0});sleep(100).then(()=>{room.setDiscProperties(0,{xspeed:0,yspeed:0,color:"0xff223c",x:game.ballOutPositionX,y:game.throwInPosY})})}
game.pushedOut=!0}
if(room.getBallPosition().y<612&&room.getBallPosition().y>-612&&game.throwinKicked==!0){game.lateral=!1;game.lateral2=!1;game.outStatus="";game.rsActive=!0;game.rsReady=!1;room.setDiscProperties(0,{color:`0x${PelotaRS}`});game.rsTimer=1000000;game.warningCount++}
if(room.getBallPosition().y.toFixed(1)==game.throwInPosY.toFixed(1)&&room.getBallPosition().x.toFixed(1)==game.ballOutPositionX.toFixed(1)){game.bringThrowBack=!1;game.pushedOut=!1}}}
function handleBallTouchFUTSAL(){var players=room.getPlayerList();var ballPosition=room.getBallPosition();var ballRadius=game.ballRadius;var triggerDistance=ballRadius+0.01;var distanciaMinimaParaCancelarDisparo=15;for(var i=0;i<players.length;i++){var player=players[i];if(player.position==null)continue;var distanceToBall=pointDistance(player.position,ballPosition);var playerRadius=room.getPlayerDiscProperties(player.id).radius;var triggerDistanceWithPlayer=ballRadius+playerRadius+0.01;if(distanceToBall<triggerDistanceWithPlayer){game.rsTouchTeam=player.team;game.throwinKicked=!1;if(game.rsCorner==!1&&game.rsGoalKick==!1&&game.outStatus!="blueThrow"&&game.outStatus!="redThrow"&&powerShotMode==!0){if(game.powershotID!=player.id){game.powershotID=player.id;game.powershotTrigger=!1;game.powershotCounter=0}else{game.powershotCounter++;if(game.powershotCounter>52&&game.powershotTrigger==!1&&Math.round(room.getDiscProperties(0).invMass)!=PotenciaPowerShot){room.setDiscProperties(0,{"bCoef":0.4,"invMass":PotenciaPowerShot,"damping":0.99,color:`0x${PelotaFutsal_PowerShot}`});room.sendAnnouncement("POWERSHOT ACTIVADO!",game.powershotID,0x33dd33,"bold",1);game.powershotTrigger=!0}}}
if(game.rsCorner==!1&&room.getDiscProperties(0).xgravity!=0){room.setDiscProperties(0,{xgravity:0,ygravity:0});game.rsSwingTimer=5200}}else if(distanceToBall>triggerDistanceWithPlayer+distanciaMinimaParaCancelarDisparo){if(game.powershotID===player.id&&game.powershotTrigger===!0&&powerShotMode===!0){game.powershotTrigger=!1;game.powershotCounter=0;game.powershotID=0;if(parseFloat(room.getDiscProperties(0).invMass.toFixed(2))!==1.5){room.setDiscProperties(0,{"bCoef":0.4,"invMass":1.5,"damping":0.99,color:`0x${PelotaFutsal}`});room.sendAnnouncement("POWERSHOT CANCELADO!",player.id,0xdd3333,"bold",2)}}}}}
function handleBallTouch(){var players=room.getPlayerList();var ballPosition=room.getBallPosition();var ballRadius=game.ballRadius;var triggerDistance=ballRadius+0.01;var distanciaMinimaParaCancelarDisparo=15;if(RSRMap==!0&&THERealFutsalMap==!0){for(var i=0;i<players.length;i++){var player=players[i];if(player.position==null)continue;var distanceToBall=pointDistance(player.position,ballPosition);var playerRadius=room.getPlayerDiscProperties(player.id).radius;var triggerDistanceWithPlayer=ballRadius+playerRadius+0.01;if(distanceToBall<triggerDistanceWithPlayer){game.rsTouchTeam=player.team;game.throwinKicked=!1;if(game.rsCorner==!1&&game.rsGoalKick==!1&&game.outStatus!="blueThrow"&&game.outStatus!="redThrow"&&powerShotMode==!0){if(game.powershotID!=player.id){game.powershotID=player.id;game.powershotTrigger=!1;game.powershotCounter=0}else{game.powershotCounter++;if(game.powershotCounter>52&&game.powershotTrigger==!1&&Math.round(room.getDiscProperties(0).invMass)!=PotenciaPowerShot){room.setDiscProperties(0,{"bCoef":0.4,"invMass":PotenciaPowerShot,"damping":0.99,color:`0x${PelotaFutsal_PowerShot}`});room.sendAnnouncement("POWERSHOT ACTIVADO!",game.powershotID,0x33dd33,"bold",1);game.powershotTrigger=!0}}}
if(game.rsCorner==!1&&room.getDiscProperties(0).xgravity!=0){room.setDiscProperties(0,{xgravity:0,ygravity:0});game.rsSwingTimer=5200}}else if(distanceToBall>triggerDistanceWithPlayer+distanciaMinimaParaCancelarDisparo){if(game.powershotID===player.id&&game.powershotTrigger===!0&&powerShotMode===!0){game.powershotTrigger=!1;game.powershotCounter=0;game.powershotID=0;if(parseFloat(room.getDiscProperties(0).invMass.toFixed(2))!==1.5){room.setDiscProperties(0,{"bCoef":0.4,"invMass":1.5,"damping":0.99,color:`0x${PelotaFutsal}`});room.sendAnnouncement("POWERSHOT CANCELADO!",player.id,0xdd3333,"bold",2)}}}}
return}
for(var i=0;i<players.length;i++){var player=players[i];if(player.position==null)continue;var distanceToBall=pointDistance(player.position,ballPosition);var playerRadius=room.getPlayerDiscProperties(player.id).radius;var triggerDistanceWithPlayer=ballRadius+playerRadius+0.01;if(distanceToBall<triggerDistanceWithPlayer){game.rsTouchTeam=player.team;game.throwinKicked=!1;if(game.rsCorner==!1&&game.rsGoalKick==!1&&game.outStatus!="blueThrow"&&game.outStatus!="redThrow"&&powerShotMode==!0){if(game.powershotID!=player.id){game.powershotID=player.id;game.powershotTrigger=!1;game.powershotCounter=0}else{game.powershotCounter++;if(game.powershotCounter>52&&game.powershotTrigger==!1&&Math.round(room.getDiscProperties(0).invMass)!=PotenciaPowerShotRS){room.setDiscProperties(0,{invMass:PotenciaPowerShotRS,color:`0x${PelotaRS_PowerShot}`});room.sendAnnouncement("POWERSHOT ACTIVADO!",game.powershotID,0x33dd33,"bold",1);game.powershotTrigger=!0}}}
if(game.rsCorner==!1&&room.getDiscProperties(0).xgravity!=0){room.setDiscProperties(0,{xgravity:0,ygravity:0});game.rsSwingTimer=5200}}else if(distanceToBall>triggerDistanceWithPlayer+distanciaMinimaParaCancelarDisparo){if(game.powershotID===player.id&&game.powershotTrigger===!0&&powerShotMode===!0){game.powershotTrigger=!1;game.powershotCounter=0;game.powershotID=0;if(parseFloat(room.getDiscProperties(0).invMass.toFixed(2))!==1.05){room.setDiscProperties(0,{invMass:1.05,color:`0x${PelotaRS}`});room.sendAnnouncement("POWERSHOT CANCELADO!",player.id,0xdd3333,"bold",2)}}}}}
var game={time:0,ballRadius:0,ticks:0};function updateGameStatus(){var _0x28cb48=_0x3c81f9;game.time=Math[_0x28cb48(0x1c3)](room[_0x28cb48(0x172)]()['time']);game.ballRadius=room.getDiscProperties(0x0)[_0x28cb48(0x121)];game.ticks++}
function announce(_0x2f0a83,_0x3a75ce,_0x2c2aa7,_0x3614b0,_0x28f16f){var _0xdb5dc1=_0x3c81f9;_0x2c2aa7==null&&(_0x2c2aa7=0xfffd82),_0x3614b0==null&&(_0x3614b0=_0xdb5dc1(0x17a)),_0x28f16f==null&&(_0x28f16f=0x0),room.sendAnnouncement(_0x2f0a83,_0x3a75ce,_0x2c2aa7,_0x3614b0,_0x28f16f)}
function whisper(_0x1efb47,_0x166a3c,_0x37ade9,_0x3c8c4c,_0x3d8947){var _0x341048=_0x3c81f9;_0x37ade9==null&&(_0x37ade9=0x66c7ff),_0x3c8c4c==null&&(_0x3c8c4c=_0x341048(0x1d6)),_0x3d8947==null&&(_0x3d8947=0x0),room[_0x341048(0x1d2)](_0x1efb47,_0x166a3c,_0x37ade9,_0x3c8c4c,_0x3d8947)}
function isAdminPresent(){var players=room.getPlayerList();if(players.find((player)=>player.admin)!=null){return!0}else{return!1}}
function displayAdminMessage(){if(isAdminPresent()===!1&&allowPublicAdmin===!0){room.sendAnnouncement("🔒 ¡No hay administrador en la sala! Para hacer a alguien administrador, escribe:",null,0xFFFFFF,"small-bold",1);setTimeout(function(){room.sendAnnouncement("       !admin NúmeroID         Por ejemplo: !admin 20 (Para votar al jugador con ID nº 20.)",null,0x00FF00,"bold",1)},500);setTimeout(function(){room.sendAnnouncement("¡RECUERDA, EL NÚMERO es el Nº de ID del JUGADOR que quieres VOTAR PARA ADMINISTRADOR! Puedes ver los IDs con !ids. Si más de la mitad de los jugadores vota por un mismo jugador, dicho jugador será administrador.",null,0xFFFFFF,"small-bold",1)},1000)}}
function pointDistance(_0x6b9cc5,_0x21a1e7){var _0x43d01b=_0x3c81f9,_0x132800=_0x6b9cc5.x-_0x21a1e7.x,_0x26e284=_0x6b9cc5.y-_0x21a1e7.y;return Math[_0x43d01b(0x193)](_0x132800*_0x132800+_0x26e284*_0x26e284)}
function sleep(_0x17ee36){return new Promise(_0x1d5abb=>setTimeout(_0x1d5abb,_0x17ee36))}
function ballWarning(origColour,warningCount){sleep(200).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(400).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}});sleep(600).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(800).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}});sleep(1000).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(1200).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}});sleep(1400).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(1600).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}});sleep(1675).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:`0x${PelotaRS}`})}});sleep(1750).then(()=>{if(game.warningCount==warningCount){room.setDiscProperties(0,{color:origColour})}})}
function avatarCelebration(_0x324e3c,_0x3eba06){var _0x56d7e8=_0x3c81f9;room[_0x56d7e8(0x15e)](_0x324e3c,_0x3eba06),sleep(0xfa)[_0x56d7e8(0x174)](()=>{var _0x4c9cb0=_0x56d7e8;room[_0x4c9cb0(0x15e)](_0x324e3c,null)}),sleep(0x1f4)[_0x56d7e8(0x174)](()=>{var _0x6a5198=_0x56d7e8;room[_0x6a5198(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0x2ee)[_0x56d7e8(0x174)](()=>{room.setPlayerAvatar(_0x324e3c,null)}),sleep(0x3e8)[_0x56d7e8(0x174)](()=>{var _0x431ddc=_0x56d7e8;room[_0x431ddc(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0x4e2)[_0x56d7e8(0x174)](()=>{var _0x2bea31=_0x56d7e8;room[_0x2bea31(0x15e)](_0x324e3c,null)}),sleep(0x5dc)['then'](()=>{var _0x5ca3a7=_0x56d7e8;room[_0x5ca3a7(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0x6d6)[_0x56d7e8(0x174)](()=>{var _0x5225e9=_0x56d7e8;room[_0x5225e9(0x15e)](_0x324e3c,null)}),sleep(0x7d0)[_0x56d7e8(0x174)](()=>{var _0x5558dd=_0x56d7e8;room[_0x5558dd(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0x8ca)[_0x56d7e8(0x174)](()=>{var _0x6872e4=_0x56d7e8;room[_0x6872e4(0x15e)](_0x324e3c,null)}),sleep(0x9c4)[_0x56d7e8(0x174)](()=>{var _0x3f6153=_0x56d7e8;room[_0x3f6153(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0xabe)['then'](()=>{var _0x170109=_0x56d7e8;room[_0x170109(0x15e)](_0x324e3c,null)}),sleep(0xbb8)['then'](()=>{var _0x47ef1d=_0x56d7e8;room[_0x47ef1d(0x15e)](_0x324e3c,_0x3eba06)}),sleep(0xcb2)[_0x56d7e8(0x174)](()=>{var _0x3e1d25=_0x56d7e8;room[_0x3e1d25(0x15e)](_0x324e3c,null)})}
function secondsToMinutes(_0x46ebc4){var _0x1b57ad=~~(_0x46ebc4/0xe10),_0x58786b=~~(_0x46ebc4%0xe10/0x3c),_0x43c8d3=~~_0x46ebc4%0x3c,_0x58bd92='';return _0x1b57ad>0x0&&(_0x58bd92+=''+_0x1b57ad+':'+(_0x58786b<0xa?'0':'')),_0x58bd92+=''+_0x58786b+':'+(_0x43c8d3<0xa?'0':''),_0x58bd92+=''+_0x43c8d3,_0x58bd92}
function blockThrowIn(){var players=room.getPlayerList().filter((player)=>player.team!=0);if(room.getBallPosition().y<0){if(game.outStatus=="redThrow"){players.forEach(function(player){if(player.team==2&&room.getPlayerDiscProperties(player.id).y<0){if(room.getPlayerDiscProperties(player.id).cGroup!=536870918){room.setPlayerDiscProperties(player.id,{cGroup:536870918})}
if(player.position.y<-485){room.setPlayerDiscProperties(player.id,{y:-470})}}
if(player.team==1&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}
if(room.getDiscProperties(17).x!=1149){room.setDiscProperties(17,{x:1149})}
if(room.getDiscProperties(19).x!=-1149){room.setDiscProperties(19,{x:-1149})}})}
if(game.outStatus=="blueThrow"){players.forEach(function(player){if(player.team==1&&room.getPlayerDiscProperties(player.id).y<0){if(room.getPlayerDiscProperties(player.id).cGroup!=536870918){room.setPlayerDiscProperties(player.id,{cGroup:536870918})}
if(player.position.y<-485){room.setPlayerDiscProperties(player.id,{y:-470})}}
if(player.team==2&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}
if(room.getDiscProperties(19).x!=1149){room.setDiscProperties(19,{x:1149})}
if(room.getDiscProperties(17).x!=-1149){room.setDiscProperties(17,{x:-1149})}})}}
if(room.getBallPosition().y>0){if(game.outStatus=="redThrow"){players.forEach(function(player){if(player.team==2&&room.getPlayerDiscProperties(player.id).y>0){if(room.getPlayerDiscProperties(player.id).cGroup!=536870918){room.setPlayerDiscProperties(player.id,{cGroup:536870918})}
if(player.position.y>485){room.setPlayerDiscProperties(player.id,{y:470})}}
if(player.team==1&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}
if(room.getDiscProperties(21).x!=1149){room.setDiscProperties(21,{x:1149})}
if(room.getDiscProperties(23).x!=-1149){room.setDiscProperties(23,{x:-1149})}})}
if(game.outStatus=="blueThrow"){players.forEach(function(player){if(player.team==1&&room.getPlayerDiscProperties(player.id).y>0){if(room.getPlayerDiscProperties(player.id).cGroup!=536870918){room.setPlayerDiscProperties(player.id,{cGroup:536870918})}
if(player.position.y>485){room.setPlayerDiscProperties(player.id,{y:470})}}
if(player.team==2&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}
if(room.getDiscProperties(23).x!=1149){room.setDiscProperties(23,{x:1149})}
if(room.getDiscProperties(21).x!=-1149){room.setDiscProperties(21,{x:-1149})}})}}}
function blockGoalKick(){var players=room.getPlayerList().filter((player)=>player.team!=0);if(room.getBallPosition().x<0){if(game.outStatus=="redGK"){players.forEach(function(player){if(player.team==2&&room.getPlayerDiscProperties(player.id).x<0){if(room.getPlayerDiscProperties(player.id).cGroup!=268435462){room.setPlayerDiscProperties(player.id,{cGroup:268435462})}
if(player.position.x<-740&&player.position.y>-320&&player.position.y<320){room.setPlayerDiscProperties(player.id,{x:-700})}}
if(player.team==1&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}})}}
if(room.getBallPosition().x>0){if(game.outStatus=="blueGK"){players.forEach(function(player){if(player.team==1&&room.getPlayerDiscProperties(player.id).x>0){if(room.getPlayerDiscProperties(player.id).cGroup!=268435462){room.setPlayerDiscProperties(player.id,{cGroup:268435462})}
if(player.position.x>740&&player.position.y>-320&&player.position.y<320){room.setPlayerDiscProperties(player.id,{x:700})}}
if(player.team==2&&room.getPlayerDiscProperties(player.id).cGroup!=2){room.setPlayerDiscProperties(player.id,{cGroup:2})}})}}}
function removeBlock(){var players=room.getPlayerList().filter((player)=>player.team!==0);if(game.outStatus===""){players.forEach(function(player){if(player.team===1&&room.getPlayerDiscProperties(player.id).cGroup!==room.CollisionFlags.red){room.setPlayerDiscProperties(player.id,{cGroup:room.CollisionFlags.red})}
if(player.team===2&&room.getPlayerDiscProperties(player.id).cGroup!==room.CollisionFlags.blue){room.setPlayerDiscProperties(player.id,{cGroup:room.CollisionFlags.blue})}});var disc17=room.getDiscProperties(17);if(disc17!==null&&disc17.x!==-1149){room.setDiscProperties(17,{x:-1149})}
var disc19=room.getDiscProperties(19);if(disc19!==null&&disc19.x!==-1149){room.setDiscProperties(19,{x:-1149})}
var disc21=room.getDiscProperties(21);if(disc21!==null&&disc21.x!==-1149){room.setDiscProperties(21,{x:-1149})}
var disc23=room.getDiscProperties(23);if(disc23!==null&&disc23.x!==-1149){room.setDiscProperties(23,{x:-1149})}}}
function sendFirmaToDiscord(player){const authJugador=authJugadores[player.name]||"Desconocido";const jugadoresPresentes=room.getPlayerList().map(p=>p.name);const jugadoresNoFirmados=jugadoresPresentes.filter(n=>!jugadoresFirmados.includes(n));const registrado=ListaDeJogadores.find(j=>j.nicks.includes(player.name));let esDU=!1;let estadoIdentidad="";if(registrado){if(registrado.auth&&registrado.auth!==""){esDU=registrado.auth!==authJugador;estadoIdentidad=esDU?"⚠️ ES DU ❌":"NO ES DU ✅"}else{estadoIdentidad="NO REGISTRADO 🚫 (SIN AUTH REGISTRADO)"}}else{estadoIdentidad="NO REGISTRADO 🚫"}
let mensaje="\n";mensaje+=`**✅ YA FIRMARON:**\n${jugadoresFirmados.length ? jugadoresFirmados.join(", ") : "Ninguno"}`;mensaje+=`\n\n**❎ AÚN NO HAN FIRMADO:**\n${jugadoresNoFirmados.length ? jugadoresNoFirmados.join(", ") : "Todos han firmado"}`;mensaje+=`\n\n✍️ El jugador ${player.name} ha firmado.`;mensaje+=`\n\n🌐 Auth del jugador: ${authJugador}`;mensaje+=`\n\n👤 Identidad del jugador: ${estadoIdentidad}`;const embed={embeds:[{title:"📝 FIRMAS DE LOS JUGADORES",description:mensaje,color:0x00e5ff,timestamp:new Date().toISOString(),footer:{text:`Firmado en ${NombreHost}`}}]};fetch(WebhookParaFirmar,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(embed)})}
const apiKeys=['041e9455309144cdab1527ae21c925c2','4a158c1a381f4dadaa5a797030297ece','844f0f2d3e7c45c3a47f5d2f433bac7b','208ba847068942e8a53966f5765b0a13','c0943ea614d547ba8b5b29503da49d93','47876cef5b0f4a38889d2d2d1a6ac378','441b309c470d4458bd93edeb76adcd07','af0fca4fb4954fd18e982db2ae21f05b','8e924d6e57404131bcb4955f77d746f5','5903e5d666094644949eaa626a009624','7ba7f8ef9f4543d88d696a60e52538b9','20b4cc00a9e0494691c9099de64bef11','4b24dfcbeeb24792a05a3126b6083952','f395661119174b8d98aa026c1a41bb65','1f5bad2a8ab94d52bd9024b1798f2a61','8a4d55cfbf124c5881785daf6be80753','f260bad253f64867948c27db295b60d0','4efde075a78e4313b98c9a3e03ef1710','c66cbb9d2bca49ae949fefde1026f473','7be5c21189204fb9922cfd08c1baf09c','d786c98df4174d3aba4a52e825b7aa0e','a31f6c4728fd4abc8f519ea761ead479','e1b925d1222f4434b1914933e19cca3a','02b19a38eae44778a95acb528a1db0f4','674f65fa9d6949118723f7a7a5ad6fb6','533ac932bef5417dadcbd59998de6fa1'];function barajarClaves(array){for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]]}}
barajarClaves(apiKeys);barajarClaves(apiKeys);let currentApiKeyIndex=0;let usedKeys=[];function getGeoLocation(ip){if(usedKeys.length===apiKeys.length){usedKeys=[];barajarClaves(apiKeys);barajarClaves(apiKeys);currentApiKeyIndex=0}
const apiKey=apiKeys[currentApiKeyIndex];usedKeys.push(currentApiKeyIndex);currentApiKeyIndex=(currentApiKeyIndex+1)%apiKeys.length;const apiUrl=`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;return fetch(apiUrl).then(response=>response.json()).then(data=>({country:data.country_name,region:data.state_prov,city:data.city}))}
let connections=[];let UsedNames=[];const usedUsernames={};let playerIPs=[];const jugadoresIngresados=new Set();function toLowerCase(str){return str.toLowerCase()}
function enviarMensajePorPartes(player,partes,delay){for(let i=0;i<partes.length;i++){setTimeout(()=>{room.sendAnnouncement(partes[i],player.id,`0x${colormensaje}`,TipoDeLetra,0)},i*delay)}}
function anunciarEntradaAdmin(player){const frasesBienvenidaAdmin=["👑 Llegó "+player.name+". Se terminó la joda. 🛑","👑 Entró "+player.name+". A comportarse todos. 🛑","👑 Llegó "+player.name+". Basta de boludeces. 🛑","👑 "+player.name+" ha ingresado al Host. Se terminó el circo. 🛑","👑 Apareció "+player.name+". El que jode, vuela. 🛑","👑 Ya está "+player.name+" en el Host. A portarse bien. 🔥","👑 Llegó "+player.name+". El que se hace el vivo, afuera. 🔥",];const mensaje=frasesBienvenidaAdmin[Math.floor(Math.random()*frasesBienvenidaAdmin.length)];room.sendAnnouncement("━━━━━━━━━━━━━━━",null,0xFFD700,"bold",2);room.sendAnnouncement(mensaje,null,0xFFD700,"bold",2);room.sendAnnouncement("━━━━━━━━━━━━━━━",null,0xFFD700,"bold",2)}
function obterJogadorRegistrado(nick){return ListaDeJogadores.find(j=>j.nicks.includes(nick))}
const authJugadores={};let playerJoinTimes={};room.onPlayerJoin=function(player){const now=Date.now();joinFloodTimestamps.push(now);joinFloodTimestamps=joinFloodTimestamps.filter(t=>now-t<2000);if(joinFloodTimestamps.length>=5){room.kickPlayer(player.id,"🚫 Demasiados ingresos en poco tiempo. Intenta nuevamente en unos segundos.",!1);return}
let ipHex=player.conn;let ipReal=decryptHex(ipHex);if(!ipReal)return;if(IpPlayers.includes(ipReal)){room.kickPlayer(player.id,MensajeBaneoPorIp,!0);return}
playerJoinTimes[player.id]=Date.now();room.sendAnnouncement(`${player.name}! Debes esperar ${COOLDOWN_COMANDOS} segundos antes de usar los comandos de votación (!admin / !expulsar).`,player.id,0xffffff,"small",1);authJugadores[player.name]=player.auth||"";const authAtual=player.auth||"";const jogadorRegistrado=obterJogadorRegistrado(player.name);if(jogadorRegistrado){if(jogadorRegistrado.auth&&jogadorRegistrado.auth!==""){if(authAtual===jogadorRegistrado.auth){room.sendAnnouncement(`✅ ${player.name} verificado corretamente.`,null,0x00FF00)}else{room.kickPlayer(player.id,"🚫 Nick registrado, pero tu auth no coincide. (DU detectado)",!1)}}else{room.sendAnnouncement(`⚠️ ${player.name} sin auth registrado. Entrada permitida.`,null,0xFFFF00)}}else{room.sendAnnouncement(`ℹ️ ${player.name} no está registrado en el sistema Anti-DU.`,null,0xAAAAAA)}
var admin=getAdminByNick(player.name);if(admin){if(!admin.auth){admin.auth=player.auth||"";room.sendAnnouncement(`Auth asignado para admin ${player.name}`,player.id,0x00FF00);room.setPlayerAdmin(player.id,!0);anunciarEntradaAdmin(player);playerAuths[player.id]=player.auth;return}else{if(player.auth===admin.auth){room.setPlayerAdmin(player.id,!0);anunciarEntradaAdmin(player);playerAuths[player.id]=player.auth;return}else{room.kickPlayer(player.id,"⚠️ Este nick está reservado y tu auth no coincide con el autorizado.");return}}}
playerAuths[player.id]=player.auth||"";if(usedUsernames[player.name]&&usedUsernames[player.name]!==player.auth){if(!esAdminValido(player)){room.kickPlayer(player.id,"🚫 Ese NICKNAME ya está en uso por otro jugador 🚫",!1);return}}else{usedUsernames[player.name]=player.auth}
const playerIp=decryptHex(player.conn);getGeoLocation(playerIp).then(location=>{const paisJugador=location.country?location.country.toLowerCase():"";if(PaisesProhibidos.includes(paisJugador)){room.kickPlayer(player.id,"🚫 País restringido para jugar en esta sala 🚫",!0);return}
if(NicknamesPROHIBIDOS.includes(player.name)){room.kickPlayer(player.id,"NICKNAME PROHIBIDO 🚫",!1);return}
if(automatizadoActivado){const jugadores=room.getPlayerList();const jugadoresNoAFK=jugadores.filter(p=>!afkPlayerIDs.has(p.id));const numJugadores=jugadoresNoAFK.length;modoJueganAlgunos=!0;var nuevaConfiguracion=null;if(numJugadores===1){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getEntrenamientoFutsalMap(),scoreLimit:GolesEntrenamientoFutsal,timeLimit:TiempoEntrenamientoFutsal}}else if(numJugadores>1&&numJugadores<=3){maxPlayersPerTeam=1;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=4&&numJugadores<=5){maxPlayersPerTeam=2;nuevaConfiguracion={mapa:getFutx2Map(),scoreLimit:GolesFutsalx2,timeLimit:TiempoFutsalx2}}else if(numJugadores>=6&&numJugadores<=7){maxPlayersPerTeam=3;nuevaConfiguracion={mapa:getFutx3Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=8&&numJugadores<=9){maxPlayersPerTeam=4;nuevaConfiguracion={mapa:getFutx4Map(),scoreLimit:GolesFutsalx3,timeLimit:TiempoFutsalx3}}else if(numJugadores>=10&&numJugadores<=11){maxPlayersPerTeam=5;nuevaConfiguracion={mapa:getFutx5Map(),scoreLimit:GolesFutsalx5,timeLimit:TiempoFutsalx5}}else if(numJugadores>=14){maxPlayersPerTeam=7;nuevaConfiguracion={mapa:getFutx7Map(),scoreLimit:GolesFutsalx7,timeLimit:TiempoFutsalx7}}
if(nuevaConfiguracion!==null&&JSON.stringify(nuevaConfiguracion)!==JSON.stringify(configuracionActual)){const scores=room.getScores();if(scores!==null&&scores.time<=tiempoLimiteCambio){setTimeout(function(){room.stopGame();room.setCustomStadium(nuevaConfiguracion.mapa);room.setScoreLimit(nuevaConfiguracion.scoreLimit);room.setTimeLimit(nuevaConfiguracion.timeLimit);room.startGame()},tiempoEsperaCambio)}else if(scores===null){configuracionActual=nuevaConfiguracion;room.stopGame();room.setCustomStadium(nuevaConfiguracion.mapa);room.setScoreLimit(nuevaConfiguracion.scoreLimit);room.setTimeLimit(nuevaConfiguracion.timeLimit);room.startGame()}}}
verificarReserva();if(modoJueganAlgunos&&room.getScores()&&room.getScores().spectators===0){const activePlayers=room.getPlayerList().filter(p=>!afkPlayerIDs.has(p.id));const blueTeamCount=activePlayers.filter(p=>p.team===1).length;const redTeamCount=activePlayers.filter(p=>p.team===2).length;if(blueTeamCount<=maxPlayersPerTeam){room.setPlayerTeam(player.id,1)}else if(redTeamCount<=maxPlayersPerTeam){room.setPlayerTeam(player.id,2)}}else if(modoJueganTodos){const blueTeamCount=room.getPlayerList().filter(p=>p.team===1).length;const redTeamCount=room.getPlayerList().filter(p=>p.team===2).length;room.setPlayerTeam(player.id,blueTeamCount<=redTeamCount?1:2)}
const totalPlayers=room.getPlayerList().length;const NombreDelJugadorNickname=player.name;if(!containsInvalidCharacters(NombreDelJugadorNickname)){let color=65280;let message=`🎮 ${NombreDelJugadorNickname} ha ingresado al host -- ${totalPlayers}/${maxPlayers} 🚀`;if(totalPlayers>=maxPlayers){color=16776960;message+="\n\n**[❌] SALA LLENA**"}else{const remainingSpots=maxPlayers-totalPlayers;message+=remainingSpots===1?"\n\n**[🟢] QUEDA 1 LUGAR**":`\n\n**[🟢] QUEDAN ${remainingSpots} LUGARES**`}
if(salaCerrada){message+=`\n\n**🔒 La sala está momentáneamente con contraseña para reservarles el lugar a los administradores.**`}
if(PasswordDelHost!==null&&PasswordDelHost!==""){message+=`\n\n**🔒 ESTE HOST TIENE CONTRASEÑA**`}else{message+=`\n\n**🌍 HOST PÚBLICO**`}
sendBoleteroToDiscord(message,roomName,roomLink,color)}
const jugadorName=player.name;const storedPlayerFiguraCount=JSON.parse(localStorage.getItem('playerFiguraCount')||"{}");if(storedPlayerFiguraCount[jugadorName]){playerFiguraCount[jugadorName]=storedPlayerFiguraCount[jugadorName]}
if(localStorage.getItem(player.name+'_cleanSheets')){playerCleanSheets[player.name]=parseInt(localStorage.getItem(player.name+'_cleanSheets'))}
playerMinutesPlayed[jugadorName]=playerMinutesPlayed[jugadorName]||0;playerGoalkeeperTime[jugadorName]=playerGoalkeeperTime[jugadorName]||0;const storedGoals=JSON.parse(localStorage.getItem('totalPlayerGoals')||"{}");const storedAssists=JSON.parse(localStorage.getItem('totalPlayerAssists')||"{}");const storedPoints=JSON.parse(localStorage.getItem('totalPlayerPoints')||"{}");if(storedGoals[jugadorName]!==undefined){totalPlayerGoals[jugadorName]=storedGoals[jugadorName];totalPlayerAssists[jugadorName]=storedAssists[jugadorName];totalPlayerPoints[jugadorName]=storedPoints[jugadorName];playerGoals2[jugadorName]=storedGoals[jugadorName];playerAssists2[jugadorName]=storedAssists[jugadorName];actualizarPuntos(jugadorName)}else{totalPlayerGoals[jugadorName]=0;totalPlayerAssists[jugadorName]=0;totalPlayerPoints[jugadorName]=0;playerGoals2[jugadorName]=0;playerAssists2[jugadorName]=0}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_MAP_VOTE){room.sendAnnouncement(`[💡] ${player.name}, la votación para elegir mapa está disponible. ¡Escribe "!votarmapa nombre_del_mapa" para votar! 🗳️`,player.id,0xFFFFFF,'bold',0)}else{room.sendAnnouncement(`[🗳️] ${player.name} actualmente hay menos de ${MIN_PLAYERS_FOR_MAP_VOTE} jugadores en el host para la votación de mapa. La votación no puede iniciar. ❌`,player.id,0xFF0000,'normal',0)}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_ADMIN_VOTE){room.sendAnnouncement(`[💡] ${player.name} puedes escribir "!admin ID" para votar a un jugador para que sea administrador. 🗳️`,player.id,0xFFFFFF,'bold',0);updateAdminVotesNeeded()}else{room.sendAnnouncement(`[🗳️] ${player.name} actualmente hay menos de ${MIN_PLAYERS_FOR_ADMIN_VOTE} jugadores en el host para la votación de administrador. La votación no puede iniciar. ❌`,player.id,0xFF0000,'normal',0)}
if(room.getPlayerList().length>=MIN_PLAYERS_FOR_KICK_VOTE){room.sendAnnouncement(`[💡] ${player.name} puedes escribir "!expulsar ID" para votar la expulsión de un jugador. 🗳️`,player.id,0xFFFFFF,'bold',0);updateKickVotesNeeded()}else{room.sendAnnouncement(`[🗳️] ${player.name} actualmente hay menos de ${MIN_PLAYERS_FOR_KICK_VOTE} jugadores en el host para la votación de expulsión. La votación no puede iniciar. ❌👥`,player.id,0xFF0000,'normal',0)}
CreatePlayer(player);GetPlayer(player.id).auth=player.auth;GetPlayer(player.id).conn=player.conn;conexion.push([player.id,player.name,player.auth,player.conn]);console.log(new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()+"."+new Date().getMilliseconds()+" ➡️ "+player.name+" ["+player.id+"] has joined. (auth: "+player.auth+" | conn: "+player.conn+")");GetPlayer(player.id).jointime=Date.now();if(localStorage.getItem(player.auth)==null){var playerObject={auth:player.auth,votes:0};localStorage.setItem(player.auth,JSON.stringify(playerObject))}
let ipCount=connections.filter(a=>a[1]===player.conn).length;if(ipCount>=MaximoJugadoresPorIp){room.kickPlayer(player.id,`🚫 Sólo se permiten hasta ${MaximoJugadoresPorIp} jugadores con la misma IP.`,!1)}else{connections.push([player.id,player.conn])}
UsedNames.push({name:player.name,conn:player.conn});playerIPs.push({nickname:player.name,ip:decryptHex(player.conn)});const players=room.getPlayerList();let playerName=player.name.replace(/ /g,"_");const adminPlayer=players.find(player=>player.admin);getGeoLocation(decryptHex(player.conn)).then(location=>{let announcementPart=`@${playerName}\n`;if(MostrarIps.toLowerCase()==="si"){announcementPart+=`🌐🔒 IP Pública: ${decryptHex(player.conn)}\n`}
announcementPart+=`🗺️ Provincia: ${location.region} ➖ 🏙️ Ciudad: ${location.city}`;if(adminPlayer&&adminPlayer.id){room.sendAnnouncement(announcementPart,adminPlayer.id,0x19FF00,'bold',0)}
room.sendAnnouncement(`📛 Nickname: @${playerName} ➖ 🌎 Pais: ${location.country}`,null,0x19FF00,'normal',0)});setTimeout(function(){room.sendAnnouncement("⚽️ ¡EQUIPOS SELECCIONADOS! ⚔️ \n\nEquipo Rojo 🔴: "+teamRed+"  vs  Equipo Azul 🔵: "+teamBlue+" \n\n¡Que empiece el juego! 🎉⚽️",player.id,0xA1E9AE,"normal",0)},3000);const shortGreetings=["⚽ ¡Hola @"+playerName+"! ¿Todo bien?","⚽️ ¡Qué onda @"+playerName+"?","⚽ ¡Todo piola @"+playerName+"?","👾 ¡¿Cómo va, @"+playerName+"?","⚽ ¡Hey @"+playerName+"! ¿Cómo andás?","⚽ ¡Qué hacés @"+playerName+"?","🏆 ¡Hey @"+playerName+"! ¿Qué contas?","⚽ ¡Qué tal, @"+playerName+"?"];const additionalPhrases=["¡A meter huevo! ⚡","¡Rompela toda, crack! 🚀","¡Dejá la vida en la cancha! 🌟","¡A demostrar quién manda! 💪","¡Hoy la rompes! 🎯","¡Jugá con el corazón! ❤️","¡A dejar huella en el césped! 🌱","¡Gambeta y magia en cada jugada! ✨","¡A jugar como un campeón! 🏆","¡Destaca en el campo, @"+playerName+"! 🌟","¡Hoy es tu día, a brillar en la cancha! 🌈","¡Hazte leyenda en el Haxball, @"+playerName+"! 🏅","¡La victoria te espera, no te rindas! 🏁"];setTimeout(function(){const randomGreeting=shortGreetings[Math.floor(Math.random()*shortGreetings.length)];const randomPhrase=additionalPhrases[Math.floor(Math.random()*additionalPhrases.length)];room.sendAnnouncement(randomGreeting+" "+randomPhrase+" ¡Escribe '!help' en el chat para ver los comandos! ⚽",player.id,0xA1E9AE,"normal",0)},5000)});enviarMensajePorPartes(player,MensajeDeBienvenida,6000)};function updateAdminVotesNeeded(){if(adminVotingActive){const votesNeeded=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosAdmin/100));room.sendAnnouncement(`📢 ¡La cantidad de votos necesarios para la votación de administrador ha sido actualizada a ${votesNeeded}! 🗳️`,null,0xFF0000)}}
function updateKickVotesNeeded(){if(kickVotingActive){const votesNeeded=Math.ceil(room.getPlayerList().length*(PorcentajeDeVotosBan/100));room.sendAnnouncement(`📢 ¡La cantidad de votos necesarios para la votación de expulsión ha sido actualizada a ${votesNeeded}! 🗳️`,null,0xFF0000)}}
function registerPlayerTime(playerId,team){if(!playerMatchTime[playerId]){playerMatchTime[playerId]={joinTime:null,totalTime:0}}
if(playerMatchTime[playerId].joinTime!==null){const elapsedTime=lastKnownMatchTime-playerMatchTime[playerId].joinTime;if(elapsedTime>0){playerMatchTime[playerId].totalTime+=elapsedTime}}
if(team!==0){playerMatchTime[playerId].joinTime=lastKnownMatchTime}else{playerMatchTime[playerId].joinTime=null}}
function handleEmpate(){if(!ganasigueEnabled){room.pauseGame(!1);TiempoCumplidoGanaSigue=!1;partidoEmpatado=!1;return}
pauseGameTick();autoBalancePaused=!0;setTimeout(function(){const scores=room.getScores();const totalMatchTime=scores?scores.time:lastKnownMatchTime;const originalRedPlayers=room.getPlayerList().filter(p=>p.team===1);const originalBluePlayers=room.getPlayerList().filter(p=>p.team===2);const targetRedCount=originalRedPlayers.length;const targetBlueCount=originalBluePlayers.length;const previousRedTeamPlayerIDs=new Set(originalRedPlayers.map(p=>p.id));const previousBlueTeamPlayerIDs=new Set(originalBluePlayers.map(p=>p.id));const allFieldPlayersAtEmpate=[...originalRedPlayers,...originalBluePlayers];allFieldPlayersAtEmpate.forEach(player=>{updatePlayerStats(player.name,'draw')});setTimeout(function(){const allFieldPlayers=room.getPlayerList().filter(player=>player.team===1||player.team===2);allFieldPlayers.forEach(player=>{registerPlayerTime(player.id,0);room.setPlayerTeam(player.id,0)})},400);setTimeout(function(){const allPlayers=room.getPlayerList();allPlayers.forEach(player=>{if(player.team!==0){registerPlayerTime(player.id,0)}});const formerRedPlayers=allPlayers.filter(p=>previousRedTeamPlayerIDs.has(p.id));const lowTimeRedPlayers=formerRedPlayers.filter(p=>{const time=playerMatchTime[p.id]?.totalTime||0;return time>0&&time<totalMatchTime/2});const freshSpectatorsRed=allPlayers.filter(p=>p.team===0&&!afkPlayerIDs.has(p.id)&&!previousRedTeamPlayerIDs.has(p.id)&&!previousBlueTeamPlayerIDs.has(p.id));const newPlayersRed=freshSpectatorsRed.filter(p=>!playerMatchTime[p.id]||playerMatchTime[p.id].totalTime===0);const othersRed=allPlayers.filter(p=>{const time=playerMatchTime[p.id]?.totalTime||0;return(p.team===0&&!afkPlayerIDs.has(p.id)&&!lowTimeRedPlayers.some(l=>l.id===p.id)&&!newPlayersRed.some(n=>n.id===p.id)&&!previousBlueTeamPlayerIDs.has(p.id)&&time>=totalMatchTime/2)});const orderedPlayersRed=[...lowTimeRedPlayers,...newPlayersRed,...othersRed];orderedPlayersRed.slice(0,targetRedCount).forEach(player=>{registerPlayerTime(player.id,1);room.setPlayerTeam(player.id,1)});const formerBluePlayers=allPlayers.filter(p=>previousBlueTeamPlayerIDs.has(p.id));const lowTimeBluePlayers=formerBluePlayers.filter(p=>{const time=playerMatchTime[p.id]?.totalTime||0;return time>0&&time<totalMatchTime/2});const freshSpectatorsBlue=allPlayers.filter(p=>p.team===0&&!afkPlayerIDs.has(p.id)&&!previousRedTeamPlayerIDs.has(p.id)&&!previousBlueTeamPlayerIDs.has(p.id));const newPlayersBlue=freshSpectatorsBlue.filter(p=>!playerMatchTime[p.id]||playerMatchTime[p.id].totalTime===0);const othersBlue=allPlayers.filter(p=>{const time=playerMatchTime[p.id]?.totalTime||0;return(p.team===0&&!afkPlayerIDs.has(p.id)&&!lowTimeBluePlayers.some(l=>l.id===p.id)&&!newPlayersBlue.some(n=>n.id===p.id)&&!previousRedTeamPlayerIDs.has(p.id)&&time>=totalMatchTime/2)});const orderedPlayersBlue=[...lowTimeBluePlayers,...newPlayersBlue,...othersBlue];orderedPlayersBlue.slice(0,targetBlueCount).forEach(player=>{registerPlayerTime(player.id,2);room.setPlayerTeam(player.id,2)})},1000);setTimeout(function(){room.stopGame();room.startGame();autoBalancePaused=!1;resumeGameTick();TiempoCumplidoGanaSigue=!1;ultimaPosicionXPelota=0;partidoEmpatado=!1},2600)},3000)}
function handleTeamVictory(){const scores=room.getScores();const GolesTotalesRED=scores.red;const GolesTotalesBLUE=scores.blue;if(CamisetasGanaSigue){if(GolesTotalesRED>GolesTotalesBLUE){camisetaBlueActual=elegirNuevaCamiseta(camisetaBlueActual,"blue")}else if(GolesTotalesBLUE>GolesTotalesRED){camisetaRedActual=elegirNuevaCamiseta(camisetaRedActual,"red")}
room.sendAnnouncement("Partido terminado. Próximo partido con nuevas camisetas...",null,0xFFFF00,"bold",2)}
if(ganasigueEnabled){pauseGameTick();autoBalancePaused=!0;setTimeout(function(){const totalMatchTime=lastKnownMatchTime;const winningTeam=GolesTotalesRED>GolesTotalesBLUE?1:2;const losingTeam=winningTeam===1?2:1;const previousLosingTeamPlayerIDs=new Set(room.getPlayerList().filter(player=>player.team===losingTeam).map(player=>player.id));setTimeout(function(){const losingTeamPlayers=room.getPlayerList().filter(player=>player.team===losingTeam).reverse();losingTeamPlayers.forEach(player=>{registerPlayerTime(player.id,0);room.setPlayerTeam(player.id,0)})},400);setTimeout(function(){const allPlayers=room.getPlayerList();const winningPlayersCount=allPlayers.filter(p=>p.team===winningTeam).length;const formerLosingPlayers=allPlayers.filter(p=>previousLosingTeamPlayerIDs.has(p.id));const lowTimeLosers=formerLosingPlayers.filter(p=>{const time=playerMatchTime[p.id]?.totalTime||0;return time>0&&time<totalMatchTime/2});const freshSpectators=allPlayers.filter(p=>p.team===0&&!afkPlayerIDs.has(p.id)&&!previousLosingTeamPlayerIDs.has(p.id));const newPlayers=freshSpectators.filter(p=>!playerMatchTime[p.id]);const others=allPlayers.filter(p=>{const time=playerMatchTime[p.id]?.totalTime||0;return(p.team===0&&!afkPlayerIDs.has(p.id)&&!lowTimeLosers.some(l=>l.id===p.id)&&!newPlayers.some(n=>n.id===p.id)&&time>=totalMatchTime/2)});const orderedPlayers=[...lowTimeLosers,...newPlayers,...others];orderedPlayers.slice(0,winningPlayersCount).forEach(player=>{registerPlayerTime(player.id,losingTeam);room.setPlayerTeam(player.id,losingTeam)})},1000);setTimeout(function(){room.stopGame();room.startGame();autoBalancePaused=!1;resumeGameTick()},2600)},3000)}}
room.onTeamVictory=function(scores){handleTeamVictory();const GolesTotalesRED=room.getScores().red;const GolesTotalesBLUE=room.getScores().blue;if(GolesTotalesRED===0&&ArqueroBLUE){playerCleanSheets[ArqueroBLUE.name]=(playerCleanSheets[ArqueroBLUE.name]||0)+1}
if(GolesTotalesBLUE===0&&ArqueroRED){playerCleanSheets[ArqueroRED.name]=(playerCleanSheets[ArqueroRED.name]||0)+1}
localStorage.setItem('playerCleanSheets',JSON.stringify(playerCleanSheets));const redTeamPlayerNames=room.getPlayerList().filter(player=>player.team===1).map(player=>player.name);const blueTeamPlayerNames=room.getPlayerList().filter(player=>player.team===2).map(player=>player.name);const redTeamGoals=room.getScores().red;const blueTeamGoals=room.getScores().blue;redTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,redTeamGoals>blueTeamGoals?'victory':(redTeamGoals<blueTeamGoals?'defeat':'draw'))});blueTeamPlayerNames.forEach(playerName=>{updatePlayerStats(playerName,blueTeamGoals>redTeamGoals?'victory':(blueTeamGoals<redTeamGoals?'defeat':'draw'))});setTimeout(function(){const figuraDelPartido=getFiguraDelPartido();enviarAnuncioFiguraDelPartido(figuraDelPartido);var teamRedScore=scorerNumber(scores.red);var teamBlueScore=scorerNumber(scores.blue);teamPossFun();room.sendAnnouncement("███████████████████ "+teamRed+"  "+teamRedScore+"      🞬      "+teamBlueScore+"  "+teamBlue+" ███████████████████ ",null,0xffd559,"normal",1);setTimeout(function(){sendDiscordWebhook();if(!GrabarTodo){room.sendAnnouncement("📼 La grabación de la partida fue enviada a "+GrabacionesDiscord+" . ¡Bien jugado! 🎉")}},150)},800);if(configuracionActual!==null){setTimeout(function(){room.setCustomStadium(configuracionActual.mapa);room.setScoreLimit(configuracionActual.scoreLimit);room.setTimeLimit(configuracionActual.timeLimit)},tiempoEsperaCambio)}
if(FairPlayActivado){var scoreDifference=Math.abs(scores.red-scores.blue);if(scoreDifference===1){setTimeout(function(){room.stopGame();var players=room.getPlayerList().filter(function(player){return player.id!==0});if(players.length===0){return!1}
players.forEach(function(player){if(player.team===1){room.setPlayerTeam(player.id,2)}
if(player.team===2){room.setPlayerTeam(player.id,1)}});room.startGame()},4500)}else if(scoreDifference===2){setTimeout(function(){room.stopGame();shuffleTeams();room.startGame()},4500)}else if(scoreDifference>=3){setTimeout(function(){room.stopGame();shuffleTeams();const players=room.getPlayerList();const activePlayers=players.filter(p=>p.team!==0&&p.position!==null);const sortedPlayers=activePlayers.sort((a,b)=>{const aPoints=(totalPlayerGoals[a.name]||0)+((totalPlayerAssists[a.name]||0)*0.7);const bPoints=(totalPlayerGoals[b.name]||0)+((totalPlayerAssists[b.name]||0)*0.7);return bPoints-aPoints});const team1=[];const team2=[];let totalPointsTeam1=0;let totalPointsTeam2=0;for(let i=0;i<sortedPlayers.length;i++){const currentPlayer=sortedPlayers[i];const currentPlayerPoints=(totalPlayerGoals[currentPlayer.name]||0)+((totalPlayerAssists[currentPlayer.name]||0)*0.7);if(totalPointsTeam1<=totalPointsTeam2){team1.push(currentPlayer);totalPointsTeam1+=currentPlayerPoints}else{team2.push(currentPlayer);totalPointsTeam2+=currentPlayerPoints}}
team1.forEach(player=>room.setPlayerTeam(player.id,1));team2.forEach(player=>room.setPlayerTeam(player.id,2));balanceTeams()},3000);setTimeout(function(){balanceTeams()},4000);setTimeout(function(){room.startGame()},4500)}}}
function rfc3986EncodeURIComponent(_0x23ab4f){var _0x151c08=_0x3c81f9;return encodeURIComponent(_0x23ab4f)[_0x151c08(0x17d)](/[!'()*]/g,escape)}
const allowedStadiums=["👑 RᴇᴀʟFᴜᴛsᴀʟ⚽","𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯² 🏆 𝗚𝗟𝗛","𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯³ 🏆 𝗚𝗟𝗛","𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁴ 🏆 𝗚𝗟𝗛","𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁵ 🏆 𝗚𝗟𝗛","𝙵 𝚄 𝚃 𝚂 𝙰 𝙻 ⨯⁷ 🏆 𝗚𝗟𝗛","⚽️ Futsal x5 👑","🏆 CAMPEONES 🌿⭐🌿","✨ ɢᴀʟᴀ ᴅᴇ ᴘʀᴇᴍɪᴏs 🏅 ✨ by GLH","Eɴᴛʀᴇɴᴀᴍɪᴇɴᴛᴏ (Futsal) 💪 by 𝗚𝗟𝗛"];room.onStadiumChange=function(newStadiumName,byPlayer){if(!allowedStadiums.includes(newStadiumName)){RSRMap=!1;currentMap="❔ Desconocido"}}
