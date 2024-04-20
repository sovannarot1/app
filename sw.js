var cacheName = "static-v1";
var dynamiccacheName = "static-v2";
const assets = [
  "/",
  "/index.html",
  "/src/js/index.js",
  "/src/css/index.css",
  "/src/html/about.html",
  "/src/css/about.css",
  "/src/js/about.js",
  "/src/html/clock.html",
  "/src/html/fallback.html",
  "/src/css/clock.css",
  "/src/js/clock.js",
  "/src/html/post.html",
  "/src/css/post.css",
  "/service.js",
  "/sw.js",
  "/src/js/post.js",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/sound/ring.mp3",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/font/khmer1.woff2",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/font/khmer2.ttf",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/favicon.jpg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/activerecall.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/learningpyramid.jpg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/about.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/burgermenu.svg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/facebook.svg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/feynman.avif",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/flowtime.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/map.svg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/photo1.jpg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/photo2.jpg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/pyramid.jpg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/sovannarot.jpg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/telegram.svg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/youtube.svg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/img/xmark.svg",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/icon/maskable_icon_x144.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/icon/maskable_icon_x72.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/icon/maskable_icon_x96.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/icon/maskable_icon_x512.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/icon/maskable_icon_x384.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/icon/maskable_icon_x192.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/icon/maskable_icon_x57.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/icon/maskable_icon_x180.png",
  "https://raw.githubusercontent.com/sovannarot1/app/main/assets/icon/shortcut.jpg",
  "https://raw.githubusercontent.com/sovannarot1/sovannarotapi/main/post.js",
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
          .then(async (fetchRes) => {
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
