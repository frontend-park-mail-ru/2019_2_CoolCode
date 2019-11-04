import BaseView from './baseView';

import { saveUserPhoto, showLoader, creatingChats } from "../modules/API/profile";
import searchInteraction from "../modules/API/searchInteraction";
import {messages} from "../modules/API/chat";

import {data, bus, router, promiseMaker, componentsStorage} from "../main";
import openWrkSpaceInfo from "../modules/API/wrkspaceInteraction";
import chatInput from "../modules/API/chatInteraction";
import {chooseChat, fetchUserInfo} from "../modules/API/websocketCreation";
import {wsBTM} from "../modules/API/wrkspaceFormCreation";
import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import ChatComponent from "../components/Chat/ChatComponent";
import BasicsComponent from "../components/Basics/basicsComponent";

class chatView extends BaseView {

	constructor (data, parent) {
    	super ({viewType: "chat", user:{}, loggedIn: null,
			wrkSpaces:[], chats: [],
			chatUser:{}, importantMessage: {}, chatMessages: [], chatUserPhoto: '../images/abkhazia.jpg',}, parent);
	};

	setEvents() {
		bus.emit('showLoader', null, '.bem-chat-column-header__info-row__image-row');
		saveUserPhoto(this._data.chatUser.id);
    	searchInteraction();
    	openWrkSpaceInfo();
		wsBTM();
    	chatInput(this._data.chatUser.id);
		this.setChatCLickInteraction();
		messages(this._data.chatUser.id);
	}

	setContent() {
    	this._data.user = data.getUser();
    	this._data.loggedIn = data.getLoggedIn();
		this._data.chatUser = data.getCurrentChatUser();
		this._data.chats = data.getUserChats();
		this._data.wrkspaces = data.getUserWrkSpaces();
		this._data.importantMessage = {text: 'hello'};
		this._data.chatMessages = data.getCurrentChatMessages();
	}

	setChatCLickInteraction() {
		let chatUsersWChatID = data.getChatUsersWChatIDs();

		chatUsersWChatID.forEach((chat) => {
			chooseChat(chat.chatId, chat.userId);
		});
	}

	findUser(chatId) {
		let chatUser = data.getChatUserIdByChatId(chatId);
		if (chatUser) {
			fetchUserInfo(chatUser, chatId).then(() => {
				this.setContent();
				this.render();
				this.setEvents();
			});
		} else {
			router.go('/profile');
		}
	}

	show(args) {
		if (this._data.chatUser.id) {
			this.findUser(args.id);
		} else {
			promiseMaker.createPromise('checkLogin', this._parent).then(() => {
				if (!data.getLoggedIn()) router.go('/');
				creatingChats(this._parent).then(() => {
					this.findUser(args.id);
				});
			});
		}

		console.log('show: chat page');
	}

	drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
    	this._parent.innerHTML = basics.render();
	}

	drawLeftColumn() {
		let leftColumn = new ChatsColumnComponent(this._data, this._parent);
    	this._parent.querySelector('.bem-column_left').innerHTML += leftColumn.render();
    	leftColumn.renderChatsContent();
		componentsStorage.setLeftColumn(leftColumn);

	}

	drawRightColumn() {
		let chatBlock = new ChatComponent(this._data, this._parent);
		this._parent.querySelector('.bem-column_right').innerHTML += chatBlock.render();
		chatBlock.renderContent();
	}

	render() {
    	this.drawBasics();
    	this.drawLeftColumn();
    	this.drawRightColumn();
	}

}

export default chatView;