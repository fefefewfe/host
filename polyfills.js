// ============================================================================
// 🔌 POLYFILLS Y ADAPTACIÓN PARA NODE.JS PURO (HAXBALL HEADLESS BOT)
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

// 2. Polyfill para localStorage en Memoria (Evita crash de ReferenceError)
if (typeof globalThis.localStorage === 'undefined' || globalThis.localStorage === null) {
  const _inMemoryStorage = new Map();
  globalThis.localStorage = {
    getItem: (key) => {
      const val = _inMemoryStorage.get(String(key));
      return val !== undefined ? val : null;
    },
    setItem: (key, value) => {
      _inMemoryStorage.set(String(key), String(value));
    },
    removeItem: (key) => {
      _inMemoryStorage.delete(String(key));
    },
    clear: () => {
      _inMemoryStorage.clear();
    },
    key: (index) => {
      const keys = Array.from(_inMemoryStorage.keys());
      return keys[index] || null;
    },
    get length() {
      return _inMemoryStorage.size;
    }
  };
}

// 3. Polyfill para XMLHttpRequest usando fetch de Node.js (Node 18+)
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
    // Si se ejecuta mediante node-haxball o un runner externo, HBInit estará inyectado globalmente.
  }
}

module.exports = {
  initialized: true
};
