import BaseComponent from "../baseComponent";
import './Header/bemHeader/bem-header.scss';
import './Header/bemHeader/bemHeaderRefs/bem-header-refs.css';
import './PrimaryContainer/bemPrimaryContainer/bem-primary-container.scss';
import './PrimaryContainer/bemPrimaryContainer/bemColumn/bem-column.scss';
import {bus} from "../../main";

const headerTemplate = require('./Header/header.pug');
const containerTemplate = require('./PrimaryContainer/container.pug');

class BasicsComponent extends BaseComponent {

	renderTo() {
		this._parent.innerHTML = "";
		this._parent.innerHTML = this.render();
	}

	render() {
		return `${headerTemplate(this._data)}${containerTemplate(this._data)}`;
	}
}

export default BasicsComponent;