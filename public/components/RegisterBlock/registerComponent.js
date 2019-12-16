import BaseComponent from "../baseComponent";

import './bemRegisterBlocks/bem-register-form.scss';
import './bemRegisterBlocks/bemInputBlock/bem-input-block.css';

const registerTemplate = require('./register.pug');

class RegisterComponent extends BaseComponent {

	render() {
		return registerTemplate(this._data);
	}
}

export default RegisterComponent;