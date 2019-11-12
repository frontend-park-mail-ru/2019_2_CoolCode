const CACHE = 'offline-fallback-v1';
let urlsToCache = [
	'/styles-bem/PrimaryContainer/bem-primary-container.css',
	'/styles-bem/MainPage/bem-main-page.css',
	'/styles-bem/Header/bem-header.css',
	'/Fallback/fallback.html',
	'/images/logo_2.png'
];

self.addEventListener('install', (event) => {
	event.waitUntil(
		caches
			.open(CACHE)
			.then((cache) => cache.addAll(urlsToCache)
				.then(() => self.skipWaiting())));
});

self.addEventListener('activate', (event) => {
	event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
	event.respondWith(networkOrCache(event.request)
		.catch(() => useFallback()));
});

async function networkOrCache(request) {
	try{
		return await fetch(request);
	} catch (error) {
		return await fromCache(request);
	}
}

function useFallback() {
	return Promise.resolve( caches.match('/Fallback/fallback.html'));
}

function fromCache(request) {
	return caches.open(CACHE).then((cache) =>
		cache.match(request).then((matching) =>
			matching || Promise.reject('no-match')
		));
}