import BaseComponent from "../../baseComponent";

const userTempl = require('./User.pug');

class UserComponent extends BaseComponent {

	photoBlock = '.chat-block__image-row__image';

	getPhotoBlock() {
		return this.photoBlock;
	}
	render() {
		return userTempl(this._data);
	}
}

export default UserComponent;