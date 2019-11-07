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
let fallback = new File(["fallback"], "Fallback/fallback.html", );
const FALLBACK =
    '<div>\n' +
    '    <div>App Title</div>\n' +
    '    <div>you are offline</div>\n' +
    '    <img src="images/abkhazia.jpg" alt="img"/>\n' +
    '</div>';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches
            .open(CACHE)
            .then((cache) => cache.addAll(urlsToCache)
            .then(() => self.skipWaiting())))
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
     let reader = new FileReader();
     let text = reader.readAsText(fallback);
    return Promise.resolve(new Response(text, { headers: {
            'Content-Type': 'text/html; charset=utf-8'
        }}));
}

function fromCache(request) {
    return caches.open(CACHE).then((cache) =>
        cache.match(request).then((matching) =>
            matching || Promise.reject('no-match')
        ));
}