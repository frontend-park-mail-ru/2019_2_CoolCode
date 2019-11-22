import BaseView from "./baseView";
import {componentsStorage, data, promiseMaker, router} from "../main";
import {channelViewHandler} from "../handlers/channelViewHandlers";
import ChatComponent from "../components/ChatBlock/ChatComponent";
import chatView from "./chatView";
import {creatingChats} from "../backendDataFetchers/websockets";

class channelView extends BaseView {

	constructor(data, parent) {
		super({
			viewType: "channel", user: {}, loggedIn: null,
			wrkSpaces: [], chats: [], currentChat: {},
			chatUser: {}, importantMessage: {}, chatMessages: [], chatUserPhoto: '../images/abkhazia.jpg',
		}, parent);
	};
	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.chatUser = data.getCurrentChatUser();
		this._data.chats = data.getUserChats();
		this._data.wrkspaces = data.getUserWrkSpaces();
		this._data.currentChat = data.getCurrentChat();
		this._data.importantMessage = {text: 'hello'};
		this._data.chatMessages = data.getCurrentChatMessages();
	}

	show(arg) {
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			if (!data.getLoggedIn()) router.go('/');
			else {
				channelViewHandler(arg.id);
				console.log('show: CHANNEL', arg.id);
			}

		});
		console.log('show: chat page');
	}

	drawRightColumn() {
		let chatBlock = new ChatComponent(this._data, this._parent);
		this._parent.querySelector('.column_right').innerHTML += chatBlock.render();
		chatBlock.renderContent();
		componentsStorage.setChatBlock(chatBlock);

	}
}

export default channelView;