import BaseComponent from "../baseComponent";
const registerTemplate = require('./register.pug');

import './bemRegisterBlocks/bem-register-form.css';
import './bemRegisterBlocks/bemInputBlock/bem-input-block.css';

class RegisterComponent extends BaseComponent {

	render() {
		return registerTemplate(this._data);
	}
}

export default RegisterComponent;