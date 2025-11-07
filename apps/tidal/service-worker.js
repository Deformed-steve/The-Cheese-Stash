const t = location.pathname.split("/").slice(0, -1).join("/"),
  o = [t + "/_app/immutable/entry/app.caxkPSJ3.js", t + "/_app/immutable/nodes/0.D8BJ3P4d.js", t + "/_app/immutable/assets/0.BKfxzDJ6.css", t + "/_app/immutable/nodes/1.DzxmEZee.js", t + "/_app/immutable/nodes/2.Bsao_W6u.js", t + "/_app/immutable/assets/2.Dy61mSq3.css", t + "/_app/immutable/nodes/3.D-DQ34WS.js", t + "/_app/immutable/nodes/4.BNDyZ0aE.js", t + "/_app/immutable/nodes/5.C5HwRgVZ.js", t + "/_app/immutable/chunks/B8ZBYVEN.js", t + "/_app/immutable/chunks/Bjspi3f-.js", t + "/_app/immutable/chunks/C61yF-TN.js", t + "/_app/immutable/chunks/CDI0ADii.js", t + "/_app/immutable/chunks/CMGKbhlM.js", t + "/_app/immutable/chunks/CMJ4YqVY.js", t + "/_app/immutable/chunks/CW-Blk_o.js", t + "/_app/immutable/chunks/CdiA3-15.js", t + "/_app/immutable/chunks/CgOeFQae.js", t + "/_app/immutable/chunks/Cu9fi7rt.js", t + "/_app/immutable/chunks/CyZ77wti.js", t + "/_app/immutable/chunks/DW1I4PKZ.js", t + "/_app/immutable/chunks/Dl3XAuxE.js", t + "/_app/immutable/chunks/DoVIE7Ch.js", t + "/_app/immutable/assets/TrackList.D3oINjsv.css", t + "/_app/immutable/chunks/DsnmJJEf.js", t + "/_app/immutable/chunks/gXH1sMvH.js", t + "/_app/immutable/chunks/v8ejrc4O.js", t + "/_app/immutable/chunks/ChtlpTNl.js", t + "/_app/immutable/chunks/607UPNXL.js", t + "/_app/immutable/entry/start.CM9Np0Po.js", t + "/_app/immutable/chunks/Cf9SoGPP.js", t + "/_app/immutable/chunks/C0b1-sF3.js"],
  u = [t + "/fonts/figtree-v9-latin_latin-ext-700.ttf", t + "/fonts/figtree-v9-latin_latin-ext-700.woff2", t + "/fonts/figtree-v9-latin_latin-ext-700italic.ttf", t + "/fonts/figtree-v9-latin_latin-ext-700italic.woff2", t + "/fonts/figtree-v9-latin_latin-ext-italic.ttf", t + "/fonts/figtree-v9-latin_latin-ext-italic.woff2", t + "/fonts/figtree-v9-latin_latin-ext-regular.ttf", t + "/fonts/figtree-v9-latin_latin-ext-regular.woff2", t + "/icons/icon-192.png", t + "/icons/icon.svg", t + "/manifest.webmanifest", t + "/offline.html", t + "/robots.txt"],
  f = "1761777204973",
  l = "binitidal",
  c = `${l}-v${f}`,
  p = [...o, ...u, "/offline.html"];
self.addEventListener("install", a => {
  self.skipWaiting(), a.waitUntil(caches.open(c).then(e => e.addAll(p)))
});
self.addEventListener("activate", a => {
  a.waitUntil((async () => {
    const e = await caches.keys();
    await Promise.all(e.filter(i => i.startsWith(l) && i !== c).map(i => caches.delete(i))), await self.clients.claim()
  })())
});
self.addEventListener("message", a => {
  a.data?.type === "SKIP_WAITING" && self.skipWaiting()
});
self.addEventListener("fetch", a => {
  const e = a.request;
  if (e.method !== "GET") return;
  const i = new URL(e.url);
  if (i.origin === self.location.origin) {
    if (p.includes(i.pathname)) {
      a.respondWith(h(e));
      return
    }
    if (e.mode === "navigate") {
      a.respondWith(m(e));
      return
    }
    a.respondWith(r(e))
  }
});
async function h(a) {
  const e = await caches.open(c),
    i = await e.match(a);
  if (i) return i;
  const s = await fetch(a);
  return s && s.ok && e.put(a, s.clone()), s
}
async function m(a) {
  const e = await caches.open(c);
  try {
    const i = await fetch(a);
    return e.put(a, i.clone()), i
  } catch (i) {
    const s = await e.match(a);
    if (s) return s;
    const n = await e.match("/offline.html");
    if (n) return n;
    throw i
  }
}
async function r(a) {
  const e = await caches.open(c),
    i = await e.match(a),
    s = fetch(a).then(n => (n && n.ok && e.put(a, n.clone()), n)).catch(() => {});
  return i ?? await s ?? await m(a)
}