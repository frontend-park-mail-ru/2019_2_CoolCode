import BaseComponent from "../baseComponent";
const creationFormTemplate = require('./creationForm.pug');

class CreationFormComponent extends BaseComponent {

	render() {
		return creationFormTemplate(this._data);
	}
}

export default CreationFormComponent;