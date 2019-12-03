import BaseView from "./baseView";
import {bus, componentsStorage, data, promiseMaker, router} from "../main";
import {creatingChats} from "../backendDataFetchers/websockets";
import BasicsComponent from "../components/Basics/basicsComponent";
import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import ChannelComponent from "../components/ChannelBlock/ChannelComponent";
import {
	channelViewHandler,
	createChatBlockHndlr,
	createWorkspaceButtonHndlr,
	createWrkspaceBlockExpandHndlr,
	createWrkspaceBlockHndlr
} from "../handlers/chatsBlockHandlers";
import {createSearchInputHndlr} from "../handlers/searchFormHandlers";
import {
	createCloseSettingsMessageHndlr,
	createDeleteMessageBlockHndlr,
	createEditMessageBlockHndlr
} from "../handlers/chatViewHandlers";

import {
	createLikeBtnHndlr,
	createMessageInputChannelHndlr,
	createSendMessageBtnChannelHndlr,
	menuHandlers,
	menuHandlersInfo
} from "../handlers/channelViewHandlers";

class channelView extends BaseView {

	constructor(data, parent) {
		super({
			viewType: "channel", user: {}, loggedIn: null, foundMessageId: null,
			wrkSpaces: [], chats: [], currentWrkspace:{}, currentChannel: {},
			importantMessage: {}, channelMessages: []}, parent);
	};

	setEvents() {
		createSendMessageBtnChannelHndlr();
		createMessageInputChannelHndlr();
		menuHandlers();
		createLikeBtnHndlr();
		createEditMessageBlockHndlr();
		createCloseSettingsMessageHndlr();
		createDeleteMessageBlockHndlr();
	}
	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.chats = data.getUserChats();
		this._data.wrkSpaces = data.getUserWrkSpaces();
		this._data.currentChannel = data.getCurrentChannel();
		this._data.currentWrkspace = data.getCurrentWrkspace();
		this._data.importantMessage = {text: 'hello'};
		this._data.channelMessages = data.getChannelMessagesFull();
	}

	show(args) {
		if (args.length === 3) {
			this._data.foundMessageId = args[2];
		}
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			if (!data.getLoggedIn()) router.go('mainPageView');
			else {
				Promise.all(
					[creatingChats(this._parent),
						promiseMaker.createPromise('getCurrentChannelInfo', args[0], args[1]),
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

	async drawBasics() {
		const header = componentsStorage.getHeader(this._data, this._parent, this._parent);
		await promiseMaker.createPromise('getHeaderPhoto');
	}

	drawLeftColumn() {
		const leftColumn = componentsStorage.getLeftColumn(this._data, this._parent, '.column_left');
		//componentsStorage.setLeftColumn(leftColumn);
	}

	drawRightColumn() {
		const channelBlock = new ChannelComponent(this._data, this._parent);
		this._parent.querySelector('.column_right').innerHTML = "";
		this._parent.querySelector('.column_right').innerHTML = channelBlock.render();
		channelBlock.renderTextingArea();
		channelBlock.renderContent();
		if (this._data.foundMessageId) {
			channelBlock.slideToMessage();
		}
		componentsStorage.setChatBlock(channelBlock);

	}

	render() {
		this.drawBasics();
		this.drawLeftColumn();
		this.drawRightColumn();
	}

}

export default channelView;