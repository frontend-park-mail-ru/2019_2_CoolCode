import BaseComponent from "../baseComponent";
import './alert-photo.scss';

const alertPhotoTemplate = require('./alertPhotoForm.pug');

class AlertPhotoComponent extends BaseComponent {

	renderTo() {
		this._parent.insertAdjacentHTML("beforebegin", this.render());
	}

	deleteSelf() {
		const parentContainer = this._parent.parentNode;
		parentContainer.firstChild.remove();
	}

	render() {
		return alertPhotoTemplate(this._data);
	}
}

export default AlertPhotoComponent;