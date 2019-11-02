import BaseView from './baseView';
import MessageComponent from "../components/Message/Message";
import WrkSpaceComponent from "../components/WrkSpace/WrkSpace";
const headerTemplate = require('../components/Header/header.pug');
const containerTemplate = require('../components/Container/container.pug');
const profileTemplateLeft = require('../components/Profile/profilePage.pug');

const chatTemplate = require('../components/Chat/chat.pug');
const rightMsg = require('../components/Chat/msgRight.pug');
const leftMsg = require('../components/Chat/msgLeft.pug');
import {
	createChatPage,
	redundantWrkSpace,
	getUserPhoto,
	getProfilePhoto as src,
	createProfile, setPicture, saveUserPhoto, showLoader, hideLoader, fetchViewInfo
} from "../modules/API/profile";
import searchInteraction from "../modules/API/searchInteraction";
import {messages} from "../modules/API/chat";

import {data, bus, router} from "../main";
import openWrkSpaceInfo from "../modules/API/wrkspaceInteraction";
import chatInput from "../modules/API/chatInteraction";
import {chooseChat, fetchUserInfo} from "../modules/API/websocketCreation";

class chatView extends BaseView {

	contentListRootSelector = '.bem-all-chats-window';

	constructor (data, parent) {
    	super ({user:{}, wrkSpaces:[], chats: [], loggedIn: null, chatUser:{}, importantMessage: {}, chatUserPhoto: '../images/abkhazia.jpg', chatMessages: []}, parent);
	};

	drawAll() {
    	this.render();
		this._bus.emit('showLoader', '.bem-chat-column-header__info-row__image-row');
		this._bus.on('hideLoader', hideLoader);
		saveUserPhoto(this._data.chatUser.id);
    	searchInteraction();
    	openWrkSpaceInfo();
    	chatInput(this._data.chatUser.id);
		this.setChatCLickInteraction();
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
		this._data.importantMessage = {text: 'hello'};
		this._data.chatMessages = data.getCurrentChatMessages();
		console.log(this._data.chatMessages);
		console.log(this._data.chats);
	}

	setChatCLickInteraction() {
		let chatUsersWChatID = data.getChatUsersWChatIDs();

		chatUsersWChatID.forEach((chat) => {
			chooseChat(chat.chatId, chat.userId);
		});
	}

	setData() {
		this._bus.on('showLoader', showLoader);
		this.setUser();
		this.setChatUser();
		this.setContent();
		this.drawAll();
		messages(this._data.chatUser.id);
	}

	show(args) {
		fetchViewInfo(this._parent).then(() => {
			if (!data.getCurrentChatUser()) {
				let chatUser = data.getChatUserIdByChatId(args.id);
				fetchUserInfo(chatUser, args.id).then(()=> {
					this.setData();
				});
			} else {
				this.setData();
			}
		});
		console.log('CREATED CHAT PAGE');
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
    	let msgWindow = document.querySelector('.bem-chat-column-msgwindow');
		if (this._data.chatMessages) {
			this._data.chatMessages.forEach((mes) => {
				if (mes.author_id === this._data.user.id) {
					msgWindow.innerHTML += rightMsg({text: mes.text, time: 'ADD TIME FIELD!'});
				} else {
					msgWindow.innerHTML += leftMsg({text: mes.text, time: 'ADD TIME FIELD!'});
				}

			});
		}
		msgWindow.scrollTop = msgWindow.scrollHeight - msgWindow.clientHeight;

	}

	render() {
    	this.drawBasics();
    	this.drawLeftColumn();
    	this.drawRightColumn();
	}

}

export default chatView;