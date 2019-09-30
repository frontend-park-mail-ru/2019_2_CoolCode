const headerTemplate = require('./header.pug');

export class Header {
	constructor(data = {}, parent = document.body) {
		this._data = data;
		this._parent = parent;

	}

	get data() {
		return this._data;
	}

	set data(dataToSet) {
		this._data = {...dataToSet};
	}

	get parent() {
		return this._parent;
	}

	set parent(parent) {
		this._parent = parent;
	}
	renderHeader(loggedIn) {
		this._parent.innerHTML = '';
		this._data["login"] = loggedIn;
		this._parent.innerHTML = headerTemplate(this._data);
	}
}