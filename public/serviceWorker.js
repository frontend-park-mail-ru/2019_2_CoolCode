const CACHE = 'chat-cache';
let urlsToCache = [
	'/images/abkhazia.jpg',
	'/images/add.png',
	'/images/info.png',
	'/images/lock.png',
	'/images/logo_2.png',
	'/images/loupe_2.png',
	'/images/muted.png',
	'/images/pinned.png',
	'/images/plus.png',
	'/images/post.png',
	'/images/sasha.jpeg',
	'/images/send.png',
	'/images/square-root-mathematical-sign.png',
	'/images/star.png',
	'images/therefore-mathematical-symbol.png',
	'/profile',
	'/main.js'
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
		 if (request.url.toString().startsWith('http://95.163.209.195:8080/photos/')) {
			const response = await fetch(request);
			if (response.ok) {
				return response;
			}
			const cache = await caches.open(CACHE);
		     return cache.match("/images/abkhazia.jpg");
		}
		// }
		// 	//console.log(request.url);
		// 	const newResponse = new Response('http://localhost:3000/main.js', {headers: {
		// 					"Content-Type": "text/javascript",
		// 			 		}});
		// 	await cache.put(request, newResponse.clone());
		// 	return newResponse;
		// }
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
		return await fetch(request);
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
	console.log('using fallback');
	return Promise.resolve( caches.match( '/profile',	));
}

function fromCache(request) {
	return caches.open(CACHE).then((cache) =>
		cache.match(request).then((matching) => {
		    if (matching) {
				console.log(request.url);
				console.log('MATCH');
		        return (matching);
			} else {
		        return Promise.reject('no-match');
			}
		}
		));
}