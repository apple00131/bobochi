const cacheName = 'food-order-cache-v1';
const filesToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/sw.js',
    '/icon-192.png',
    '/icon-512.png',
    'https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
