const CACHE_NAME = "recipe-cache";
const urlsToCache = ["https://dummyjson.com/recipes"];

self.addEventListener("install", (event) => {
  console.log("[Service Worker] Install Event - Caching resources");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Opened cache");
      return cache.addAll(urlsToCache).then(() => {
        console.log("[Service Worker] Cached initial resources");
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log(`[Service Worker] Found in cache: ${event.request.url}`);
        return response;
      }

      console.log(`[Service Worker] Not found in cache, fetching from network: ${event.request.url}`);
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) {
          console.log(`[Service Worker] Fetch failed or response is invalid for: ${event.request.url}`);
          return response;
        }

        const responseClone = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
          cache.put(event.request, responseClone);
        });

        return response;
      });
    })
  );
});
