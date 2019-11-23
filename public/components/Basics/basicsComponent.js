import BaseComponent from "../baseComponent";
const headerTemplate = require('./Header/header.pug');
const containerTemplate = require('./PrimaryContainer/container.pug');

import './Header/bemHeader/bem-header.css';
import './Header/bemHeader/bemHeaderRefs/bem-header-refs.css';
import './PrimaryContainer/bemPrimaryContainer/bem-primary-container.css';
import './PrimaryContainer/bemPrimaryContainer/bemColumn/bem-column.css';
import './Header/supportBtn/bemSupportBtn/bem-support-btn.css';

class BasicsComponent extends BaseComponent {

	render() {
		return `${headerTemplate(this._data)}${containerTemplate(this._data)}`;
	}
}

export default BasicsComponent;