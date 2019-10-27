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
		if (this._handlers[eventName].includes(callback)) return;
		this._handlers[eventName].push(callback);
	};

	off(eventName, callback) {

		let handlers = this._handlers && this._handlers[eventName];

		if (!handlers) return;

		for (let i = 0; i < handlers.length; i++) {
			if (handlers[i] === callback) {
				handlers.splice(i--, 1);
			}
		}
	};

	emit (eventName, ...data) {
		let handlers = this._handlers && this._handlers[eventName];

		if (!handlers) return;

		this._handlers[eventName].forEach(handler => handler.apply(this, data));
	};

}

export default Bus;