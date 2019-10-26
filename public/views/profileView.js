import BaseView from './baseView';
import MessageComponent from "../components/Message/Message";
import WrkSpaceComponent from "../components/WrkSpace/WrkSpace";
const headerTemplate = require('../components/Header/header.pug');
const containerTemplate = require('../components/Container/container.pug');
const profileTemplateLeft = require('../components/Profile/profilePage.pug');
const profileTemplateRight = require('../components/Profile/profile.pug');
import {
	createProfile,
	getUserPhoto,
	createInputs,
	assignSomeData,
	getProfilePhoto,
	showLoader,
	hideLoader
} from "../modules/API/profile";
import searchInteraction from "../modules/API/searchInteraction";
import {bus, data, router} from "../main";
import openWrkSpaceInfo from "../modules/API/wrkspaceInteraction";

class profileView extends BaseView {

	contentListRootSelector = '.chat-msg-scroll';

	constructor (data, parent) {
		super ({user:{}, wrkSpaces:[], chats: [], loggedIn: null}, parent);
	};

	createEvents() {
		this._bus.on('fetchUser', createProfile);
		this._bus.on('fetchAvatar', getProfilePhoto);
		this._bus.on('createInputs', createInputs);
		this._bus.on('showLoader', showLoader);
	}

	deleteEvents() {
		console.log('DELETED');
		this._bus.off('fetchUser', createProfile);
		this._bus.off('fetchAvatar', getProfilePhoto);
		this._bus.off('createInputs', createInputs);
	}

	drawAll() {

		this.render();
		this._bus.on('hideLoader', hideLoader);
		getProfilePhoto(this._data.user.id);
		this._bus.emit('createInputs', this._parent, this._data.user);
		this.createClickablePic();
		searchInteraction();
		openWrkSpaceInfo();
	}

	setUser() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.loggedIn;
	}

	setContent() {

		this._data.chats = data.userChats;
		this._data.wrkspaces = data.userWrkSpaces;
		console.log(data.userChats);
	}

	show() {
		this.createEvents();
		//if (JSON.stringify(this._data.user) === '{}' || this._data.user === undefined) { //TODO:пофиксить баг
		createProfile(this._parent).then(() => {
			this.setUser();
			this.setContent();
			this.drawAll();
			this.deleteEvents();
		});
		console.log('CREATED PROFILE');
		//} else {
		//	this.drawAll();
		//	this.deleteEvents();
		//	}

	}

	drawBasics() {
		this._parent.innerHTML = headerTemplate(this._data);
		this._parent.innerHTML += containerTemplate(this._data);
	}

	drawLeftColumn() {
		this._parent.querySelector('.column.left').innerHTML += profileTemplateLeft(this._data.user);
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		if (this._data.chats) {
			this._data.chats.forEach((mes) => {
				const mess = new MessageComponent();
				mess.data = mes;
				const message = document.createElement('div');
				message.className = 'row msg';
				var id;
				if (mes["Members"][0] == data.user.id) id = mes["Members"][1];
				else message.id = mes["Members"][0];
				message.id = "chat-" + id;
				message.innerHTML = mess.render();
				contentListRoot.appendChild(message);
				getUserPhoto(id,"chat", ".messages-pic");
			});
		}

		if (this._data.wrkspaces) {
			this._data.wrkspaces.forEach((wsp) => {
				const wrkSpace = new WrkSpaceComponent();
				wrkSpace.data = wsp;
				const w = wrkSpace.render();
				contentListRoot.appendChild(w);
			});
		}
	}

	drawRightColumn() {
		this._parent.querySelector('.column.right').innerHTML += profileTemplateRight(this._data.user);
	}

	createClickablePic() {
		const img = document.getElementById('avatar');
		const input = document.getElementById('file');
		img.addEventListener('click', function () {
			input.click();
		});
	}

	render() {
		this.drawBasics();
		this.drawLeftColumn();
		this.drawRightColumn();
	}

}

export default profileView;