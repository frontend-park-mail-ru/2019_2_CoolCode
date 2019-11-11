class Validation {

	constructor() {
		this._phoneRegex = /^((\+7|7|8)+([0-9]){10})$/;
		this._emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	}

	validateEmail(email) {
		return this._emailRegex.test(email);
	}

	validatePhone(phone) {
		return this._phoneRegex.test(phone);
	}

}

export default Validation;