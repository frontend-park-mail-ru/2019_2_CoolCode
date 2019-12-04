class ResizeThrottler {

    callbacks = [];
    running = false;
    timeout = 66;

    constructor(callback) {
    	if (!this.callbacks.length) {
    		window.addEventListener('resize', this.resize.bind(this));
    	}
    	if (callback) {
    		this.callbacks.push(callback);
    	}
    }

    add(callback) {
    	if (!this.callbacks.length) {
    		window.addEventListener('resize', this.resize.bind(this));
    	}
    	if (callback) {
    		this.callbacks.push(callback);
    	}
    }

    setTimeout(timeout) {
    	this.timeout = timeout;
    }

    resize() {

    	if (!this.running) {
    		this.running = true;

    		if (window.requestAnimationFrame) {
    			window.requestAnimationFrame(this.runCallbacks.bind(this));
    		} else {
    			setTimeout(this.runCallbacks, this.timeout);
    		}
    	}

    }

    runCallbacks() {
    	this.callbacks.forEach(function(callback) {
    		callback();
    	});

    	this.running = false;
    }

}

export default ResizeThrottler;