// ============================================================================
// 🔌 POLYFILLS E INTEGRACIÓN PARA NODE.JS PURO (PM2 / VPS)
// ============================================================================

// Declaración global primaria para evitar ReferenceError en Node.js / PM2
var localStorage, window, document, XMLHttpRequest, File;

if (typeof globalThis.window === 'undefined') {
  globalThis.window = globalThis;
}
if (typeof globalThis.document === 'undefined') {
  globalThis.document = {
    createElement: function() { return {}; },
    getElementsByTagName: function() { return []; },
    getElementById: function() { return null; }
  };
}

// Storage en memoria para sustituir localStorage en servidor
function MemoryStorage() {
  this._data = {};
}
MemoryStorage.prototype.getItem = function(key) {
  var val = this._data[String(key)];
  return val !== undefined ? val : null;
};
MemoryStorage.prototype.setItem = function(key, value) {
  this._data[String(key)] = String(value);
};
MemoryStorage.prototype.removeItem = function(key) {
  delete this._data[String(key)];
};
MemoryStorage.prototype.clear = function() {
  this._data = {};
};
MemoryStorage.prototype.key = function(index) {
  var keys = Object.keys(this._data);
  return keys[index] || null;
};
Object.defineProperty(MemoryStorage.prototype, 'length', {
  get: function() { return Object.keys(this._data).length; }
});

var _storageInstance = new MemoryStorage();
global.localStorage = _storageInstance;
globalThis.localStorage = _storageInstance;
localStorage = _storageInstance;
window = globalThis.window;
document = globalThis.document;

// ============================================================================
// ⚽ INICIALIZACIÓN HAXBALL HEADLESS
// ============================================================================

let HBInit;
try {
  HBInit = require("haxball-headless-api");
} catch (e) {
  if (typeof globalThis.HBInit !== "undefined") {
    HBInit = globalThis.HBInit;
  } else {
    console.error("❌ ERROR: No se encontró 'haxball-headless-api'. Instalalo en tu VPS con: npm install haxball-headless-api");
    process.exit(1);
  }
}

console.log("🚀 Iniciando Bot de Prueba en Node.js...");

// Configuración de la sala simple
const room = HBInit({
  roomName: "🏆 #FVA | SALA DE PRUEBA NODE.JS",
  maxPlayers: 12,
  public: true,
  noPlayer: true
});

room.setDefaultStadium("Classic");
room.setScoreLimit(3);
room.setTimeLimit(3);

room.onRoomLink = function(url) {
  console.log("\n==========================================");
  console.log("✅ SALA CREADA EXITOSAMENTE!");
  console.log("🔗 LINK DE LA SALA:", url);
  console.log("==========================================\n");
};

room.onPlayerJoin = function(player) {
  console.log("👤 Jugador conectado:", player.name);
  room.sendAnnouncement("👋 ¡Bienvenido " + player.name + " a la sala de prueba!", player.id, 0x00FF00, "bold");
};

room.onPlayerLeave = function(player) {
  console.log("👋 Jugador salió:", player.name);
};

room.onPlayerChat = function(player, message) {
  console.log("[" + player.name + "]: " + message);
  if (message === "!ping") {
    room.sendAnnouncement("🏓 Pong!", player.id, 0xFFFF00);
    return false;
  }
  if (message === "!help") {
    room.sendAnnouncement("🤖 Comandos de prueba: !ping, !help", player.id, 0x00FFFF);
    return false;
  }
};
