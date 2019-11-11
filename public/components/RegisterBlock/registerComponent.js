import BaseComponent from "../baseComponent";
const registerTemplate = require('./register.pug');

class RegisterComponent extends BaseComponent {

	render() {
		return registerTemplate(this._data);
	}
}

export default RegisterComponent;