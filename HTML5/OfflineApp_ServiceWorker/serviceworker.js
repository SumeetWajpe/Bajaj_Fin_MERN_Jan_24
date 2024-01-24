let assetsToBeCached = ["Index.html", "About.html"];
// to install the service worker

self.addEventListener("install", e => {
  console.log("Service Worker : Installed !");
  e.waitUntil(
    caches
      .open("v1")
      .then(cache => cache.addAll(assetsToBeCached))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", () => {
  console.log("Service Worker activated !");
});

self.addEventListener("fetch", e => {
  let url = e.request;
  e.respondWith(fetch(url).catch(() => caches.match(url)));
});
