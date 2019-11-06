const CACHE = 'offline-fallback-v1';
let urlsToCache = [
    '/components/Basics/Container/container.pug',
    '/components/Basics/Header/header.pug',
    '/components/basicsComponent.js',
    '/components/MainPage/mainPage.pug',
    '/components/MainPage/mainPageComponent.js',
    '/scripts/Router.js',
    '/views/mainPageView.js',
    '/main.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE)
            .then((cache) => cache.addAll(urlsToCache)
            .then(() => self.skipWaiting())
    );
});


self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    event.respondWith(networkOrCache(event.request)
        .catch(() => useFallback()));
});

function networkOrCache(request) {
    return fetch(request)
        .then((response) => response.ok ? response : fromCache(request))
        .catch(() => fromCache(request));
}

function useFallback() {
    var reader = new FileReader();
    reader.readAsText('../Fallbac')
    return Promise.resolve(new Response(fallback.html, { headers: {
            'Content-Type': 'text/html; charset=utf-8'
        }}));
}

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ));
}