import BaseComponent from "../baseComponent";
import ChatsBlockComponent from "./ChatsBlock/ChatsBlockComponent";
import WrkSpacesBlockComponent from "./WrkSpacesBlock/WrkSpacesBlockComponent";
import './bemAllChats/bem-all-chats.scss';
import './bemAllChats/bemAllChatsScrollWindow/bem-all-chats-window.scss';
import './Message/bemChatBlock/bem-chat-block.scss';
import './WrkSpacesBlock/WrkSpace/bemWrkspaceBlock/bem-wrkspace-block.scss';
import './WrkSpacesBlock/WrkSpace/bemWrkspaceBlock/bemWrkscpaceVisibleBlock/bem-wrkspace-visible.scss';
import './WrkSpacesBlock/WrkSpace/bemWrkspaceBlock/bemWrkspaceExpandableBlock/bem-wrkspace-expandable.css';
import './WrkSpacesBlock/WrkSpace/bemWrkspaceBlock/bemWrkspaceExpandableBlock/bemWrkspaceChannBlock/bem-wrkspace-chann.scss';
import './User/bemUserFoundBlock/bem-user-found.scss';
import './bemSearchMenu/bem-search-menu.scss';
import UsersFoundBlockComponent from "./usersFoundBlock/UsersFoundBlockComponent";
import MessagesFoundBlockComponent from "./messagesFoundBlock/MessagesFoundComponent";
import {createSearchInputHndlr} from "../../handlers/searchFormHandlers";
import {
	channelViewHandler,
	createChatBlockHndlr, createWorkspaceButtonHndlr,
	createWrkspaceBlockExpandHndlr,
	createWrkspaceBlockHndlr
} from "../../handlers/chatsBlockHandlers";

const chatsColumnTemplate = require('./chatsColumn.pug');

class ChatsColumnComponent extends BaseComponent {

    contentListRootSelector = '.all-chats-window';

    createChatContentHandlers() {
    	createSearchInputHndlr();
    	createWrkspaceBlockExpandHndlr();
    	createChatBlockHndlr();
    	createWrkspaceBlockHndlr();
    	createWorkspaceButtonHndlr();
    	channelViewHandler();
    }

    renderNewMessage(message) { //TODO: переделать когда на бэке появится дата
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const messageBlock = contentListRoot.querySelector(`#chat-${message.author_id}`);
    	const lastMessage = messageBlock.querySelector('.chat-block__message-column__message-row__last-message');
    	lastMessage.innerHTML = message.text;
    }

    renderSearchContent(data) {
    	this._data = data;
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	contentListRoot.innerHTML = "";

    	const usersFoundBlock = new UsersFoundBlockComponent(this._data, contentListRoot);
    	const messagesFoundBlock = new MessagesFoundBlockComponent(this._data, contentListRoot);
    	contentListRoot.innerHTML += usersFoundBlock.render();
    	contentListRoot.innerHTML += messagesFoundBlock.render();
    	usersFoundBlock.renderContent();
    	messagesFoundBlock.renderContent();

    }

    renderChatsContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const chatsBlock = new ChatsBlockComponent(this._data, contentListRoot);
    	const wrkSpacesBlock = new WrkSpacesBlockComponent(this._data, contentListRoot);
    	contentListRoot.innerHTML += chatsBlock.render();
    	contentListRoot.innerHTML += wrkSpacesBlock.render();
    	chatsBlock.renderContent();
    	wrkSpacesBlock.renderContent();
    }

    renderTo(rootSelector) {
    	this._parent.querySelector(rootSelector).innerHTML = "";
    	this._parent.querySelector(rootSelector).innerHTML = this.render();
    	this.renderChatsContent();
    	this.createChatContentHandlers();
    }

    render() {
    	return chatsColumnTemplate(this._data.user);
    }
}

export default ChatsColumnComponent;