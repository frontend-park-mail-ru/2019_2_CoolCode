const settings = {
	connection : 'http',
	backendPort : ':8080',
	//backend: '172.20.10.9:8080',
	backend: '95.163.209.195',
	//backend: '192.168.1.69:8080',
	//backend: 'localhost:8080'
};
const {backend} = settings;
const {backendPort} = settings;
const {connection} = settings;

const CACHE = 'chat-cache';
let urlsToCache = [
	'images/abkhazia.jpg',
	'images/add.png',
	'images/info.png',
	'images/lock.png',
	'images/logo_2.png',
	'images/loupe_2.png',
	'images/muted.png',
	'images/pinned.png',
	'images/plus.png',
	'images/post.png',
	'images/sasha.jpeg',
	'images/send.png',
	'images/settings.jpg',
	'images/square-root-mathematical-sign.png',
	'images/star.png',
	'images/therefore-mathematical-symbol.png',
	'/profile',
	'/',
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
		const response = await fetch(request);
		if (request.url.toString().startsWith(`${connection}://fonts.googleapis.com/`)) {
			return response;
		}
		if (response.ok) {
			return response;
		}
		 if (request.url.toString().startsWith(`${connection}://${backend}${backendPort}/photos/`)) {

			const cache = await caches.open(CACHE);
		     return cache.match("/images/abkhazia.jpg");
		}
	} catch (error) {
		if (request.url.toString().startsWith(`${connection}://fonts.googleapis.com/`)) {
			return response;
		}
		if (request.url.toString().startsWith(`${connection}://${backend}${backendPort}/photos/`)) {

			const cache = await caches.open(CACHE);
			return cache.match("/images/abkhazia.jpg");
		}
		return await fromCache(request);
	}
}

function useFallback() {
	return Promise.resolve( caches.match( '/'));
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