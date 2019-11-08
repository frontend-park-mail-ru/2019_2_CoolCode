const CACHE = 'offline-fallback-v1';
let urlsToCache = [
	'/styles-bem/bemPrimaryContainer/bem-primary-container.css',
	'/styles-bem/bemMainPage/bem-main-page.css',
	'/styles-bem/bemHeader/bem-chat-header.css',
	'/fallback/fallback.html',
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
		const response = await fetch(request);
		//console.log(request.url);
		//console.log(request.url.toString().startsWith('http://fonts.googleapis.com/css'));
		// if (request.url.toString().startsWith('http://fonts.googleapis.com/css')) {
		// 	console.log(request.url);
		// 	const cache = await caches.open(CACHE);
		// 	const cacheResponse = await cache.match(request);
		// 	if (cacheResponse) {
		// 		return cacheResponse;
		// 	}
		// 	const css = await response.text();
		// 	const patched = css.replace(/}/g, "font-display: swap; }");
		// 	const newResponse = new Response(patched, {headers: {
		// 			"Content-Type": "text/css",
		// 		}});
		// 	await cache.put(request, newResponse.clone());
		// 	return newResponse;
		// }
		return response;
	} catch (error) {
		return await fromCache(request);
	}
}

function useFallback() {
	return Promise.resolve( caches.match('/fallback/fallback.html'));
}

function fromCache(request) {
	return caches.open(CACHE).then((cache) =>
		cache.match(request).then((matching) =>
			matching || Promise.reject('no-match')
		));
}