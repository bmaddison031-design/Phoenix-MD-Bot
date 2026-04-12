let cached;

async function load() {
  if (!cached) {
    cached = await import("@whiskeysockets/baileys");
  }
  return cached;
}

module.exports = new Proxy({}, {
  get(_, prop) {
    return async (...args) => {
      const mod = await load();
      return mod[prop](...args);
    };
  }
});
