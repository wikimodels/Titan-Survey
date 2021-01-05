(function () {
  const cacheName = "images";
  self.addEventListener("install", (event) => {
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
          ])
        )
    );
  });

  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches
        .match(event.request, { ignoreSearch: true })
        .then(function (response) {
          if (response && response.url.includes("images")) {
            console.log("response from cache", response.url);
          }
          console.log("==!response from cache", response);

          if (response) {
            return response;
          }
        })
    );
  });
})();
