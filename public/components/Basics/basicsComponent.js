import BaseComponent from "../baseComponent";
const headerTemplate = require('./Header/header.pug');
const containerTemplate = require('./Container/container.pug');

class BasicsComponent extends BaseComponent {

	render() {
		return `${headerTemplate(this._data)}${containerTemplate(this._data)}`;
	}
}

export default BasicsComponent;