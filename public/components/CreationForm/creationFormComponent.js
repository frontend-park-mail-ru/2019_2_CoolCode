import BaseComponent from "../baseComponent";
import './bemWrkspaceForm/bem-wrkspace-form.scss';
import './bemOverlay/bem-overlay.css';

const creationFormTemplate = require('./creationForm.pug');

class CreationFormComponent extends BaseComponent {

	renderTo() {
		this._parent.insertAdjacentHTML("beforebegin", this.render());
	}

	deleteSelf() {
		const parentContainer = this._parent.parentNode;
		parentContainer.firstChild.remove();
		parentContainer.firstChild.remove();
	}

	render() {
		return creationFormTemplate(this._data);
	}
}

export default CreationFormComponent;