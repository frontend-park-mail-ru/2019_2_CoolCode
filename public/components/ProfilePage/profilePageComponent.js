import BaseComponent from "../baseComponent";
const ProfilePageTemplate = require('./profilePage.pug');

import './bemProfilePageBlocks/bemProfileHeader/bem-profile-header.css';
import './bemProfilePageBlocks/bemProfileInfo/bem-profile-info.css';

class ProfilePageComponent extends BaseComponent {

	render() {
		return ProfilePageTemplate(this._data);
	}
}

export default ProfilePageComponent;