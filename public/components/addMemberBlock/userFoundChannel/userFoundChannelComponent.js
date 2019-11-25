import BaseComponent from "../../baseComponent";

const userTempl = require('./userInWrks.pug');

class UserFoundChannelComponent extends BaseComponent {

	render() {
		return userTempl(this._data);
	}
}

export default UserFoundChannelComponent;