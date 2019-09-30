const signupTemplate = require('./signup.pug');

export class SignUp {
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

	renderSignUp() {
		this._parent.innerHTML = signupTemplate(this._data);
	}
}