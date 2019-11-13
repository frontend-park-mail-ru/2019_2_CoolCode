const CACHE = 'chat-cache';
let urlsToCache = [
	'/fallback/fallback.html',
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
		console.log(request.url);
		const response = await fetch(request);
		if (request.url.toString().startsWith('http://localhost:3000/main.js')){
			//console.log(request.url);
			const newResponse = new Response('http://localhost:3000/main.js', {headers: {
							"Content-Type": "text/javascript",
					 		}});
			await cache.put(request, newResponse.clone());
			return newResponse;
		}
		//console.log(request.url);
		//console.log(request.url.toString().startsWith('http://fonts.googleapis.com/cs'));
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
	// caches.open(CACHE).then((cache) =>
	// 		fetch('../public/main.js').then((response) =>
	// 			cache.put('../public/main.js', response)
	// 		)
	// 	);
	return Promise.resolve( caches.match('/fallback/fallback.html'	));
}

function fromCache(request) {
	return caches.open(CACHE).then((cache) =>
		cache.match(request).then((matching) =>
			matching || Promise.reject('no-match')
		));
}