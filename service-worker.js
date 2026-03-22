const CACHE_NAME = "travel-guide-v1";

const urlsToCache = [
  "index.html",
  "images/vigan.jpg",
  "images/calle.jpg",
  "images/sanjuan.jpg",
  "images/tangadan.jpg",
  "images/hundredislands.jpg",
  "images/bolinao.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});