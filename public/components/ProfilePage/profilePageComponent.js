import BaseComponent from "../baseComponent";
import './bemProfilePageBlocks/bemProfileHeader/bem-profile-header.css';
import './bemProfilePageBlocks/bemProfileInfo/bem-profile-info.css';

const ProfilePageTemplate = require('./profilePage.pug');

class ProfilePageComponent extends BaseComponent {

	render() {
		return ProfilePageTemplate(this._data);
	}
}

export default ProfilePageComponent;