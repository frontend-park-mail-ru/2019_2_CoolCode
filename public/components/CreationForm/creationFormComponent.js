import BaseComponent from "../baseComponent";
import './bemWrkspaceForm/bem-wrkspace-form.scss';
import './bemOverlay/bem-overlay.css';

const creationFormTemplate = require('./creationForm.pug');

class CreationFormComponent extends BaseComponent {

	render() {
		return creationFormTemplate(this._data);
	}
}

export default CreationFormComponent;