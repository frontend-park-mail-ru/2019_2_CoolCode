import BaseView from './baseView';

import {createSearchInputHndlr} from "../handlers/searchFormHandlers";
import {appLocalStorage, bus, componentsStorage, data, promiseMaker, router} from "../main";
import {creatingChats} from "../backendDataFetchers/websockets";
import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import ChatComponent from "../components/ChatBlock/ChatComponent";
import BasicsComponent from "../components/Basics/basicsComponent";
import {
	createCloseSettingsMessageHndlr,
	createDeleteMessageBlockHndlr,
	createEditMessageBlockHndlr,
	createMessageInputHndlr,
	createSendMessageBtnHndlr, recordMessage,
} from "../handlers/chatViewHandlers";
import {saveUserPhoto} from "../handlers/photosHandlers";
import {createAttachButton, resizeAttach} from "../handlers/attachesHandlers";
import {buyStickers, showStickers} from "../handlers/stikersHandlers";

class chatView extends BaseView {

	constructor (data, parent) {
    	super ({viewType: "chat", user:{}, loggedIn: null,
			wrkSpaces:[], chats: [], currentChat: {}, usersStickers: [], foundMessageId: null,
			chatUser:{}, importantMessage: {}, chatMessages: [], chatUserPhoto: '../images/abkhazia.jpg',}, parent);
	};

	setEvents() {
		bus.emit('showLoader', null, '.chat-header__info-row__image-row');
		saveUserPhoto(this._data.chatUser.id);

		createMessageInputHndlr();

		createSendMessageBtnHndlr();
		recordMessage();
		showStickers();
		buyStickers();
		createEditMessageBlockHndlr();
		createCloseSettingsMessageHndlr();
		createDeleteMessageBlockHndlr();
		createAttachButton();
		resizeAttach();
	}

	setContent() {
		bus.emit('deleteCurrentChannel', null);
    	this._data.user = data.getUser();
    	this._data.loggedIn = data.getLoggedIn();
		this._data.chatUser = data.getCurrentChatUser();
		this._data.chats = data.getUserChats();
		this._data.wrkSpaces = data.getUserWrkSpaces();
		this._data.currentChat = data.getCurrentChat();
		this._data.importantMessage = {text: 'hello'};
		this._data.chatMessages = data.getCurrentChatMessages();
	}

	findUser(chatId) {
		const chatUser = data.getChatUserIdByChatId(chatId);
		if (chatUser) {
			promiseMaker.createPromise('getCurrentChatInfo',chatUser, chatId).then(() => {
				this.setContent();
				this.render();
			});
		} else {
			router.go('profileView');
		}
	}

	show(args) {
		if (args.length === 2) {
			this._data.foundMessageId = args[1];
		}
		if (appLocalStorage.getUser()) {
			bus.emit('setUser', null, appLocalStorage.getUser());
		}
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			if (!data.getLoggedIn()) router.go('mainPageView');
			creatingChats(this._parent).then(() => {
				this.findUser(args[0]);
			});
		});
		console.log('show: chat page');
	}

	async drawBasics() {
		const header = componentsStorage.getHeader(this._data, this._parent, this._parent);
		await promiseMaker.createPromise('getHeaderPhoto');
	}

	drawLeftColumn() {
		const leftColumn = componentsStorage.getLeftColumn(this._data, this._parent, '.column_left');
		if (leftColumn.getState() !== 'chats') {
			leftColumn.renderChatsContent();
		}
		leftColumn.selectCurrentChat();
		//componentsStorage.setLeftColumn(leftColumn);
	}

	async drawRightColumn() {
		const form = componentsStorage.returnForm();
		if (form) {
			componentsStorage.clearForm();
		} else {
			const chatBlock = new ChatComponent(this._data, this._parent);
			this._parent.querySelector('.column_right').innerHTML = "";
			this._parent.querySelector('.column_right').innerHTML = chatBlock.render();
			chatBlock.renderTextingArea();
			chatBlock.renderContent();
			if (this._data.foundMessageId) {
				chatBlock.slideToMessage();
			}
			componentsStorage.setChatBlock(chatBlock);
			this.setEvents();
		}
	}

	render() {
    	this.drawBasics();
    	this.drawLeftColumn();
    	this.drawRightColumn();
	}

}

export default chatView;