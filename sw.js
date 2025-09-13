// --- CONFIGURATION ---
// v3 is a new version number to ensure the browser updates it.
const staticCacheName = 'career-app-static-v4';
const dynamicCacheName = 'career-app-dynamic-v4';

// A smaller, more robust list of essential files.
// Make sure these files all exist at the root of your project!
const filesToCache = [
  '/', // This caches the root of your site
  'mainnow.html',
  'manifest.json',
  'images/icon-192x192.png',
  'images/icon-512x512.png'
  // We will let other images like image203.png be cached dynamically.
];

// --- SERVICE WORKER LOGIC ---

// 1. INSTALL: Cache the App Shell
self.addEventListener('install', e => {
  console.log('Attempting to install service worker and cache static assets');
  e.waitUntil(
    caches.open(staticCacheName).then(cache => {
      console.log('Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

// 2. ACTIVATE: Clean up old caches
self.addEventListener('activate', e => {
  console.log('Service worker activating...');
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName && key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});

// 3. FETCH: Smart interceptor that handles partial content
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      // Return from cache if found
      return cacheRes || fetch(e.request).then(fetchRes => {
        // Open the dynamic cache
        return caches.open(dynamicCacheName).then(cache => {
          // --- THIS IS THE FIX ---
          // Only cache successful, complete responses (status 200).
          // This will ignore partial (206) and other responses.
          if (fetchRes.status === 200) {
            // IMPORTANT: Only try to cache GET requests.
            if (e.request.method === 'GET') {
              cache.put(e.request.url, fetchRes.clone());
            }
          }
          // Always return the response from the network, regardless of whether we cached it.
          return fetchRes;
        });
      });
    })
  );
});