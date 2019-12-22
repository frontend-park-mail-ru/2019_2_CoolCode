import BaseComponent from "../baseComponent";
import './channelAddForm/channel-add-form.scss';
import UserFoundChannelComponent from "./userFoundChannel/userFoundChannelComponent";

const addMemberTempl = require('./addMember.pug');

class AddMemberComponent extends BaseComponent {

	contentListRootSelector = '.channel-add-form__scroll';

	renderTo() {
		this._parent.insertAdjacentHTML("beforebegin", this.render());
		this.renderContent();
	}

	render() {
		return addMemberTempl(this._data);
	}

	deleteSelf() {
		const parentContainer = this._parent.parentNode;
		for (let i = 0; i < 2; i++) {
			parentContainer.removeChild(parentContainer.firstElementChild);
		}
	}
	renderContent() {
		const contentListRoot = document.querySelector(this.contentListRootSelector);
		this._data.wrkspaceMembers.forEach(user=> {
			if (user.id != this._data.user.id) {
				const userComponent = new UserFoundChannelComponent(user, contentListRoot);
				const userBlock = document.createElement('div');
				userBlock.className = 'member';
				userBlock.id = "member-" + user.id;
				userBlock.style.borderBottom = "solid slategrey";
				userBlock.innerHTML = userComponent.render();
				contentListRoot.appendChild(userBlock);
			}
		}
		);
	}
}

export default AddMemberComponent;