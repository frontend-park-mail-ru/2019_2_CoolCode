import BaseView from "./baseView";
import {componentsStorage, data, promiseMaker, router} from "../main";
import ChatComponent from "../components/ChatBlock/ChatComponent";
import chatView from "./chatView";
import {creatingChats} from "../backendDataFetchers/websockets";
import BasicsComponent from "../components/Basics/basicsComponent";
import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import WrkspacePageComponent from "../components/WrkSpacePage/wrkspacePageComponent";
import ChannelComponent from "../components/ChannelBlock/ChannelComponent";
import {
	channelViewHandler,
	createChatBlockHndlr,
	createWorkspaceButtonHndlr,
	createWrkspaceBlockExpandHndlr, createWrkspaceBlockHndlr
} from "../handlers/chatsBlockHandlers";
import {createSearchInputHndlr} from "../handlers/searchFormHandlers";
import {createWorkspaceSettingsButtonHndlr} from "../handlers/wrkspaceBlockHandlers";
import {
	createCloseSettingsMessageHndlr, createDeleteMessageBlockHndlr,
	createEditMessageBlockHndlr,
	createMessageInputHndlr,
	createSendMessageBtnHndlr
} from "../handlers/chatViewHandlers";
import {menuHandlers} from "../handlers/channelViewHandlers";

class channelView extends BaseView {

	constructor(data, parent) {
		super({
			viewType: "channel", user: {}, loggedIn: null,
			wrkSpaces: [], chats: [], currentWrkspace:{}, currentChannel: {},
			importantMessage: {}, channelMessages: []}, parent);
	};

	setEvents() {
		// bus.emit('showLoader', null, '.profile-header__image-row');
		// getProfilePhoto(data.getUserId());
		// bus.emit('createProfileInputs', null, this._parent, this._data.user);
		// this.createClickablePic();
		createSearchInputHndlr();
		createWrkspaceBlockExpandHndlr();
		createMessageInputHndlr();
		createChatBlockHndlr();
		createSendMessageBtnHndlr();
		createWrkspaceBlockHndlr();
		createWorkspaceButtonHndlr();
		createEditMessageBlockHndlr();
		createCloseSettingsMessageHndlr();
		createDeleteMessageBlockHndlr();
		channelViewHandler();
		menuHandlers();

	}
	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.chats = data.getUserChats();
		this._data.wrkspaces = data.getUserWrkSpaces();
		this._data.currentChannel = data.getCurrentChannel();
		this._data.currentWrkspace = data.getCurrentWrkspace();
		this._data.importantMessage = {text: 'hello'};
		//this._data.channelMessages = data.getCurrentChannelMessages();
	}

	show(args) {
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			if (!data.getLoggedIn()) router.go('mainPageView');
			else {
				Promise.all(
					[creatingChats(this._parent),
						promiseMaker.createPromise('getWrkspaceInfo', args[0]),
						promiseMaker.createPromise('getChannelInfo', args[1]),
					]
				).then(
					() => {
						this.setContent();
						this.render();
						this.setEvents();
					}
				);
			}
		});
		console.log('show: channel page');
	}

	drawBasics() {
		const basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
	}

	drawLeftColumn() {
		const leftColumn = new ChatsColumnComponent(this._data, this._parent);
		this._parent.querySelector('.column_left').innerHTML = leftColumn.render();
		leftColumn.renderChatsContent();
		componentsStorage.setLeftColumn(leftColumn);
	}

	drawRightColumn() {
		let channelBlock = new ChannelComponent(this._data, this._parent);
		this._parent.querySelector('.column_right').innerHTML += channelBlock.render();
		channelBlock.renderContent();
		componentsStorage.setChatBlock(channelBlock);

	}

	render() {
		this.drawBasics();
		this.drawLeftColumn();
		this.drawRightColumn();
	}

}

export default channelView;