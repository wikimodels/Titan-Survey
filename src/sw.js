(function () {
  const cacheName = "titan-v2";
  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key !== cacheName) {
              console.log("[ServiceWorker] Removing old cache", key);
              return caches.delete(key);
            }
          })
        );
      })
    );
    event.waitUntil(
      caches
        .open(cacheName)
        .then((cache) =>
          cache.addAll([
            "./assets/images/female-boxer.jpg",
            "./assets/images/female-grey.jpg",
            "./assets/images/female-pink.jpg",
            "./assets/images/male-boxer.jpg",
            "./assets/images/male-grey.jpg",
            "./assets/images/male-pink.jpg",
            "./assets/images/joints-all-good.jpg",
            "./assets/images/joints-elbows.jpg",
            "./assets/images/joints-knees.jpg",
            "./assets/images/joints-shoulders.jpg",
            "./assets/images/spine-healthy.jpg",
            "./assets/images/spine-lowerback.jpg",
            "./assets/images/spine-chest.jpg",
            "./assets/images/spine-neck.jpg",
            "./assets/images/activity-running.jpg",
            "./assets/images/activity-pumping.jpg",
            "./assets/images/yes1.jpg",
            "./assets/images/dont-care.jpg",
            "./assets/images/spine-kyphosis.jpg",
            "./assets/images/spine-lordosis.jpg",
            "./assets/images/spine-scoliosis.jpg",
            "./assets/images/spine-ok.jpg",
          ])
        )
    );
  });

  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches
        .match(event.request, { ignoreSearch: true })
        .then(function (response) {
          if (response) {
            console.log("RESPONSE from CACHE", response);
            return response;
          }
          var requestToCache = event.request.clone();
          return fetch(requestToCache).then(function (response) {
            if (!response || response.status !== 200) {
              return response;
            }
            var responseToCache = response.clone();

            caches.open(cacheName).then(function (cache) {
              if (
                requestToCache.method === "GET" &&
                !requestToCache.url.includes("webhooks")
              ) {
                console.log("PUT TO CACHE", requestToCache.url);
                //cache.put(requestToCache, responseToCache);
              }
            });

            return response;
          });
        })
    );
  });
})();
