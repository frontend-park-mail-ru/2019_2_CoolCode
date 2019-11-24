import BaseComponent from "../baseComponent";
import UserComponent from "./userFoundChannel/userFoundChannelComponent.js";
import {getAnyUserInfo} from "../../backendDataFetchers/gettingInfo";
import {addMemberinChannel} from "../../handlers/channelViewHandlers";
const addMemberTempl = require('./addMember.pug');
import {data} from "../../main.js";
import './channelAddForm/channel-add-form.css';
import UserFoundChannelComponent from "./userFoundChannel/userFoundChannelComponent";
class AddMemberComponent extends BaseComponent {

	contentListRootSelector = '.channel-add-form__scroll';

	render() {
		return addMemberTempl(this._data);
	}
	renderContent() {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		this._data.wrkspaceMembers.forEach(user=> {
			if (user.id != this._data.user.id) {
				const userComponent = new UserFoundChannelComponent(user, contentListRoot);
				const userBlock = document.createElement('div');
				userBlock.className = 'member';
				userBlock.id = "member-" + user.id;
				userBlock.innerHTML = userComponent.render();
				contentListRoot.appendChild(userBlock);
			}
		}
		);

	}
}

export default AddMemberComponent;