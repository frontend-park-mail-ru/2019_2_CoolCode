import BaseComponent from "../baseComponent";
const addMemberTempl = require('./addMember.pug');

class AddMemberComponent extends BaseComponent {

	render() {
		return addMemberTempl(this._data);
	}
}

export default AddMemberComponent;