const CACHE = 'offline-fallback-v1';

let urls_to_cache = [
	'/chat/3',
	'/main.js',
];

self.addEventListener('install', (e) => {
	e.waitUntil(caches.open(CACHE).then((cache) => {
		return cache.addAll(urls_to_cache);
	}) );
});

self.addEventListener('fetch', (e) => {
	e.respondWith(caches.match(e.request).then((response) => {
		console.log(e.request);
		console.log(response);
		if(response)
			return response;
		else {
			const response = fetch(e.request);
			if (response.ok) {
				return response;
			}
		}
	}) );
});