const CACHE_NAME = "moamal-alaa-v13";

const urlsToCache = [
  "/",
  "/archive",
  "/offline",
  "/manifest.json",
  "/resume.pdf",
  "/images/aster-information-project.webp",
  "/images/e-commercew-project.webp",
  "/PWA/icons/maskable-icon.webp",
];

async function installServiceWorker() {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(urlsToCache);
  } catch (error) {
    console.error("Failed to install service worker:", error);
  }
}

// Cache-first strategy
async function handleFetchRequest(event) {
  try {
    const cachedResponse = await caches.match(event.request);
    if (cachedResponse) return cachedResponse;

    const response = await fetch(event.request);
    const isValidResponse =
      response && response.status === 200 && response.type === "basic";

    if (!isValidResponse) return response;

    await storeResponseInCache(event.request, response.clone());
    return response;
  } catch (error) {
    const isNavigationRequest = event.request.mode === "navigate";
    if (isNavigationRequest) return caches.match("/offline");
    return null;
  }
}

async function storeResponseInCache(request, response) {
  try {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response);
  } catch (error) {
    console.error("Failed to cache response for request:", request.url, error);
  }
}

async function cleanupOldCaches() {
  try {
    const cacheNames = await caches.keys();
    const cachesToDelete = cacheNames
      .filter((cacheName) => cacheName !== CACHE_NAME)
      .map((name) => caches.delete(name));

    await Promise.all(cachesToDelete.filter(Boolean));
  } catch (error) {
    console.error("Failed to cleanup old caches:", error);
  }
}

self.addEventListener("install", (event) => {
    self.skipWaiting();
  event.waitUntil(installServiceWorker());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(handleFetchRequest(event));
});

self.addEventListener("activate", (event) => {
  clients.claim();
  event.waitUntil(cleanupOldCaches());
});
