class Validation {

	constructor() {
		this._phoneRegex = /^(\+)?([ 0-9]){10,12}$/;
		this._emailRegex = /.*(@).*(\.).*/;
	}

	validateEmail(email) {
		return this._emailRegex.test(email);
	}

	validatePhone(phone) {
		return this._phoneRegex.test(phone);
	}

	validatePhotoFormat(file) {
		return file.type.includes('image');
	}

}

export default Validation;