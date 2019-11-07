import BaseComponent from "../baseComponent";
const headerTemplate = require('./Header/header.pug');
const containerTemplate = require('./Container/container.pug');

class BasicsComponent extends BaseComponent {

	render() {
		let basics = headerTemplate(this._data);
		basics += containerTemplate(this._data);
		return basics;
	}
}

export default BasicsComponent;