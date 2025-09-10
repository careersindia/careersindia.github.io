// Choose a cache name. Increment the version number when you update the app shell.
const staticCacheName = 'career-app-static-v1';  // For the app shell
const dynamicCacheName = 'career-app-dynamic-v1'; // For the other 1000+ files

// --- APP SHELL ---
// This is the small list of essential files to be cached immediately.
const filesToCache = [
  '/',
  'index.html',
  'mainnow.html',
  'manifest.json', // It's good practice to cache the manifest
  'images/icon-192x192.png',
  'images/icon-512x512.png',
  'cube.png', // Add your most important logo or background image
'cube.mp4'
];

// 1. INSTALL: Cache the App Shell
self.addEventListener('install', e => {
  console.log('Attempting to install service worker and cache static assets');
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

// 2. ACTIVATE: Clean up old caches
// This helps when you update your cache version number
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

// 3. FETCH: The magic happens here! Serve from cache or fetch and cache.
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      // If the file is in any cache, serve it (super fast)
      return cacheRes || fetch(e.request).then(fetchRes => {
        // If the file is not in the cache, fetch it from the network
        return caches.open(dynamicCacheName).then(cache => {
          // IMPORTANT: Save a copy of the fetched file to our dynamic cache
          cache.put(e.request.url, fetchRes.clone());
          // Return the original fetched response to the browser
          return fetchRes;
        });
      });
    })
  );
});