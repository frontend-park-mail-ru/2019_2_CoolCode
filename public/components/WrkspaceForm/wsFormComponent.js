import BaseComponent from "../baseComponent";
const wsFormTemplate = require('./wsForm.pug');

class WorkSpaceComponent extends BaseComponent {

	render() {
		return wsFormTemplate(this._data);
	}
}

export default WorkSpaceComponent;