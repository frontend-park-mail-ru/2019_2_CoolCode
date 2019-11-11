import BaseComponent from "../baseComponent";
const creationFormTemplate = require('./creationForm.pug');

import './bemWrkspaceForm/bem-wrkspace-form.css';
import './bemOverlay/bem-overlay.css';

class CreationFormComponent extends BaseComponent {

	render() {
		return creationFormTemplate(this._data);
	}
}

export default CreationFormComponent;