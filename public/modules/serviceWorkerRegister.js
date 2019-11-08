function serviceWorkerRegister() {
	if ('serviceWorker' in navigator) {
		window.addEventListener('load', function() {
			navigator.serviceWorker.register('/serviceWorker.js', {scope: '/'}).then(function(registration) {
				console.log('ServiceWorker registration successful with scope: ', registration.scope);
			}, function(err) {
				console.log('ServiceWorker registration failed: ', err);
			});
		});
	}
}

export {serviceWorkerRegister};
