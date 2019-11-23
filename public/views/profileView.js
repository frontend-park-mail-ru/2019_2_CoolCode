import BaseView from './baseView';

import {createSearchInputHndlr} from "../handlers/searchFormHandlers";
import {appLocalStorage, bus, componentsStorage, data, promiseMaker, router} from "../main";
import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import BasicsComponent from "../components/Basics/basicsComponent";
import ProfilePageComponent from "../components/ProfilePage/profilePageComponent";

import {
	channelViewHandler,
	createChatBlockHndlr, createWorkspaceButtonHndlr,
	createWrkspaceBlockExpandHndlr,
	createWrkspaceBlockHndlr
} from "../handlers/chatsBlockHandlers";
import {getProfilePhoto} from "../handlers/photosHandlers";
import {creatingChats} from "../backendDataFetchers/websockets";
import {menuHandlers} from "../handlers/channelViewHandlers";
import WrkspacePageComponent from "../components/WrkSpacePage/wrkspacePageComponent";

class profileView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "profile", user:{}, wrkSpaces:[], chats: [], loggedIn: null}, parent);
	};

	setEvents() {
		bus.emit('showLoader', null, '.profile-header__image-row');
		getProfilePhoto(data.getUserId());
		bus.emit('createProfileInputs', null, this._parent, this._data.user);
		this.createClickablePic();
		createChatBlockHndlr();
		createSearchInputHndlr();
		createWrkspaceBlockExpandHndlr();
		createWorkspaceButtonHndlr();
		createWrkspaceBlockHndlr();
		channelViewHandler();
	}

	createClickablePic() {
		const img = document.querySelector('.profile-header__image-row__image');
		const input = document.querySelector('.profile-header__image-row__input');
		img.addEventListener('click', function () {
			input.click();
		});
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.chats = data.getUserChats();
		this._data.wrkspaces = data.getUserWrkSpaces();
	}

	show() {
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			if (!data.getLoggedIn()) router.go('mainPageView');
			else {
				creatingChats(this._parent).then(() => {
					this.setContent();
					this.render();
					this.setEvents();
				});
			}
		});
		console.log('show: profile');
	}

	drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
	}

	drawLeftColumn() {
		let leftColumn = new ChatsColumnComponent(this._data, this._parent);
		this._parent.querySelector('.column_left').innerHTML = leftColumn.render();
		leftColumn.renderChatsContent();
		componentsStorage.setLeftColumn(leftColumn);
	}

	drawRightColumn() {
		const profileBlock = new ProfilePageComponent(this._data.user, this._parent);
		this._parent.querySelector('.column_right').innerHTML = profileBlock.render();
		componentsStorage.setProfileBlock(profileBlock);
	}

	render() {
		this.drawBasics();
		this.drawLeftColumn();
		// let profileBlock = componentsStorage.getRightColumn();
		// if (!profileBlock || !(profileBlock instanceof ProfilePageComponent)) {
		// 	this.drawBasics();
		// 	this.drawLeftColumn();
		// 	profileBlock = new ProfilePageComponent(this._data.user, this._parent);
		// }
		this.drawRightColumn();
	}

}

export default profileView;
