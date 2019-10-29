import BaseView from './baseView';
import MessageComponent from "../components/Message/Message";
import WrkSpaceComponent from "../components/WrkSpace/WrkSpace";
const headerTemplate = require('../components/Header/header.pug');
const containerTemplate = require('../components/Container/container.pug');
const profileTemplateLeft = require('../components/Profile/profilePage.pug');

const chatTemplate = require('../components/Chat/chat.pug');
import {
	createChatPage,
	assignSomeData,
	getUserPhoto,
	getProfilePhoto as src,
	createProfile, setPicture
} from "../modules/API/profile";
import searchInteraction from "../modules/API/searchInteraction";
import {messages} from "../modules/API/chat";

import {data, bus, router} from "../main";
import openWrkSpaceInfo from "../modules/API/wrkspaceInteraction";
import chatInput from "../modules/API/chatInteraction";
import {chooseChat} from "../modules/API/websocketCreation";

class chatView extends BaseView {

	contentListRootSelector = '.bem-all-chats-window';

	constructor (data, parent) {
    	super ({user:{}, wrkSpaces:[], chats: [], loggedIn: null, chatUser:{}, chatUserPhoto: '../images/abkhazia.jpg'}, parent);
	};

	drawAll() {
    	this.render();
    	searchInteraction();
    	openWrkSpaceInfo();
    	chatInput();
		this.setWebSocketsInteraction();
	}

	setUser() {
    	this._data.user = data.getUser();
    	this._data.loggedIn = data.loggedIn;
	}

	setChatUser() {
		this._data.chatUser = data.getCurrentChatUser();
		bus.on('AAA', setPicture);
	}

	setContent() {

    	this._data.chats = data.userChats;
    	this._data.wrkspaces = data.userWrkSpaces;
	}

	setWebSocketsInteraction() {
		let chatUsersWChatID = data.getChatUsersWChatIDs();

		chatUsersWChatID.forEach((chat) => {
			chooseChat(chat.chatId, chat.userId);
		});
	}

	show() {
		if (!data.getCurrentChatUser()) router.go('/profile');
		else {
			createChatPage(this._parent).then(() => {
				this.setUser();
				this.setChatUser();
				this.setContent();
				this.drawAll();
			});
			console.log('CREATED CHAT PAGE');
		}

	}

	drawBasics() {
    	this._parent.innerHTML = headerTemplate(this._data);
    	this._parent.innerHTML += containerTemplate(this._data);
	}

	drawLeftColumn() {
    	this._parent.querySelector('.bem-column_left').innerHTML += profileTemplateLeft(this._data.user);
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.chats) {
    		this._data.chats.forEach((mes) => {
    		    console.log(mes);
    			const mess = new MessageComponent();
    			mess.data = mes;
    			const message = document.createElement('div');
    			message.className = 'bem-chat-block bem-chat-block_style';
    			var id;
    			if (mes["Members"][0] === data.user.id) id = mes["Members"][1];
    			else id = mes["Members"][0];
    			message.id = "chat-" + id;
    			message.innerHTML = mess.render();
    			contentListRoot.appendChild(message);
    			getUserPhoto(id,"chat", ".bem-chat-block__image-row__image");
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
    	this._parent.querySelector('.bem-column_right').innerHTML += chatTemplate(this._data);
		messages();
	}

	render() {
    	this.drawBasics();
    	this.drawLeftColumn();
    	this.drawRightColumn();
	}

}

export default chatView;