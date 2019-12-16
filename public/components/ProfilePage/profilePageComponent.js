import BaseComponent from "../baseComponent";
import './bemProfilePageBlocks/bemProfileHeader/bem-profile-header.scss';
import './bemProfilePageBlocks/bemProfileInfo/bem-profile-info.scss';

const ProfilePageTemplate = require('./profilePage.pug');

class ProfilePageComponent extends BaseComponent {

	render() {
		return ProfilePageTemplate(this._data);
	}
}

export default ProfilePageComponent;