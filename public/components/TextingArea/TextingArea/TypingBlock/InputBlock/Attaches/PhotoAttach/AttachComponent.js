import BaseComponent from "../../../../../../baseComponent";
import './attach-component.scss';
const attachTemplate = require('./photoattach.pug');

class AttachComponent extends BaseComponent {

	renderTo(rootSelector) {
		const container = document.querySelector(rootSelector);
		container.innerHTML += this.render();
	}

	render() {
		return attachTemplate(this._data);
	}
}

export default AttachComponent;