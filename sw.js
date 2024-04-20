var cacheName = "static-v1";
var dynamiccacheName = "static-v2";
const assets = [
  "/",
  "/index.html",
  "/src/js/index.js",
  "/src/css/index.css",
  "/assets/img/burgermenu.svg",
  "/assets/img/pyramid.jpg",
  "/assets/img/rocket.jpg",
  "/assets/img/telegram.svg",
  "/assets/img/facebook.svg",
  "/assets/img/youtube.svg",
  "/service.js",
  "/assets/font/khmer1.woff2",
  "/assets/font/khmer2.tff",
  "/assets/img/favicon.jpg",
  "/sw.js",
  "/src/html/fallback.html",
];
self.addEventListener("install", (e) => {
  console.log("service worker has been installed");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});
self.addEventListener("active", (e) => {
  console.log("service worker has been actived");
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== cacheName).map((key) => caches.delete(key))
      );
    })
  );
});
self.addEventListener("fetch", (e) => {
  console.log("service worker has been fetched");
  e.respondWith(
    caches.match(e.request).then((response) => {
      return (
        response ||
        fetch(e.request)
          .then((fetchRes) => {
            return caches.open(dynamiccacheName).then((cache) => {
              cache.put(e.request.url, fetchRes.clone());
              return fetchRes;
            });
          })
          .catch(() => {
            if (e.request.url.indexOf(".html") > -1) {
              return caches.match("/src/html/fallback.html");
            }
          })
      );
    })
  );
});
