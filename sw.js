// --- CONFIGURATION ---
const staticCacheName = 'career-app-static-v2';  // For the app shell
const dynamicCacheName = 'career-app-dynamic-v2'; // For dynamic content

// List of essential files for the app shell
const filesToCache = [
  '/',
  'index.html',
  'mainnow.html',
  'manifest.json',
  'images/icon-192x192.png',
  'images/icon-512x512.png',
  'tap.png', // I saw this in your HTML, let's cache it
'cube.png',
'cube.mp4'
];

// --- SERVICE WORKER LOGIC ---

// 1. INSTALL: Cache the App Shell
self.addEventListener('install', e => {
  console.log('Attempting to install service worker and cache static assets');
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting(); // Force the new service worker to activate
});

// 2. ACTIVATE: Clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// 3. FETCH: The smart interceptor
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      // Return from cache if found
      if (cacheRes) {
        return cacheRes;
      }

      // Not in cache, so fetch from network
      return fetch(e.request).then(fetchRes => {
        // --- THIS IS THE MAGIC PART ---
        // Check if we received a valid, basic (same-origin) response
        // If not, we don't cache it. This avoids the CORB error.
        if (!fetchRes || fetchRes.status !== 200 || fetchRes.type !== 'basic') {
          return fetchRes; // Return the problematic response without trying to cache it
        }

        // If it's a good, local response, we clone it and cache it.
        const responseToCache = fetchRes.clone();
        caches.open(dynamicCacheName).then(cache => {
          cache.put(e.request.url, responseToCache);
        });

        return fetchRes;
      });
    })
  );
});