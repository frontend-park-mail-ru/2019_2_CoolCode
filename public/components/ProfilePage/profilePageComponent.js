import BaseComponent from "../baseComponent";
const ProfilePageTemplate = require('./profilePage.pug');

class ProfilePageComponent extends BaseComponent {

	render() {
		return ProfilePageTemplate(this._data);
	}
}

export default ProfilePageComponent;