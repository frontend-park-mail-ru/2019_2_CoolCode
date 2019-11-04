import BaseView from './baseView';
const profileTemplateRight = require('../components/Profile/profilePage.pug');
import {
	createInputs,
	showLoader,
	hideLoader, setPicture, getProfilePhoto, creatingChats
} from "../modules/API/profile";
import searchInteraction from "../modules/API/searchInteraction";
import {bus, componentsStorage, data, promiseMaker, router} from "../main";
import openWrkSpaceInfo from "../modules/API/wrkspaceInteraction";
import {chooseChat} from "../modules/API/websocketCreation";
import {wsBTM} from "../modules/API/wrkspaceFormCreation";
import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import BasicsComponent from "../components/Basics/basicsComponent";
import ProfilePageComponent from "../components/Profile/profilePageComponent";

class profileView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "profile", user:{}, wrkSpaces:[], chats: [], loggedIn: null}, parent);
	};

	setEvents() {
		bus.emit('showLoader', null, '.bem-profile-header__image-row');
		bus.emit('createProfileInputs', null, this._parent, this._data.user);
		this.createClickablePic();
		this.setChatClickInteraction();
		searchInteraction();
		openWrkSpaceInfo();
		wsBTM();
	}

	createClickablePic() {
		const img = document.querySelector('.bem-profile-header__image-row__image');
		const input = document.querySelector('.bem-profile-header__image-row__input');
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

	setChatClickInteraction() {
		let chatUsersWChatID = data.getChatUsersWChatIDs();

		chatUsersWChatID.forEach((chat) => {
			chooseChat(chat.chatId, chat.userId);
		});
	}

	show() {
		if (this._data.user.id) {
			this.render();
			this.setEvents();
		} else {
			promiseMaker.createPromise('checkLogin', this._parent).then(() => {
				if (!data.getLoggedIn()) router.go('/');
				else {
					creatingChats(this._parent).then(() => {
						getProfilePhoto(data.user.id);
						this.setContent();
						this.render();
						this.setEvents();
					});
				}
			});
		}
		console.log('show: profile');
	}

	drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
	}

	drawLeftColumn() {
		let leftColumn = new ChatsColumnComponent(this._data, this._parent);
		this._parent.querySelector('.bem-column_left').innerHTML = leftColumn.render();
		leftColumn.renderChatsContent();
		componentsStorage.setLeftColumn(leftColumn);
	}

	drawRightColumn() {
		let rightColumn = new ProfilePageComponent(this._data.user, this._parent);
		this._parent.querySelector('.bem-column_right').innerHTML += rightColumn.render();
	}

	render() {
		this.drawBasics();
		this.drawLeftColumn();
		this.drawRightColumn();
	}

}

export default profileView;
