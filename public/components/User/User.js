import BaseComponent from "../baseComponent";

const userTempl = require('./User.pug');

class UserComponent extends BaseComponent {
	render() {
		return userTempl(this._data);
	}
}

export default UserComponent;