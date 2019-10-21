class Bus {
	constructor () {
		if (Bus.__instance) {
			return Bus.__instance;
		}

		this._handlers = {};

		Bus.__instance = this;
	}

	on(eventName, callback) {
		if (!this._handlers) this._handlers = {};
		if (!this._handlers[eventName]) {
			this._handlers[eventName] = [];
		}
		this._handlers[eventName].push(callback);
	};

	off(eventName, callback) {
		this._handlers[eventName] = this._handlers[eventName]
			.filter(function (listener) {
				return listener !== callback;
			});
	};

	emit (eventName, ...data) {
		if (!this._handlers || !this._handlers[eventName]) {
			return;
		}

		this._handlers[eventName].forEach(handler => handler.apply(this, data));
	};

}

export default Bus;