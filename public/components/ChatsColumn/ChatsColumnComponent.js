import BaseComponent from "../baseComponent";
import ChatsBlockComponent from "./ChatsBlock/ChatsBlockComponent";
import WrkSpacesBlockComponent from "./WrkSpacesBlock/WrkSpacesBlockComponent";
import './bemAllChats/bem-all-chats.css';
import './bemAllChats/bemAllChatsScrollWindow/bem-all-chats-window.css';
import './Message/bemChatBlock/bem-chat-block.css';
import './WrkSpacesBlock/WrkSpace/bemWrkspaceBlock/bem-wrkspace-block.css';
import './WrkSpacesBlock/WrkSpace/bemWrkspaceBlock/bemWrkscpaceVisibleBlock/bem-wrkspace-visible.css';
import './WrkSpacesBlock/WrkSpace/bemWrkspaceBlock/bemWrkspaceExpandableBlock/bem-wrkspace-expandable.css';
import './WrkSpacesBlock/WrkSpace/bemWrkspaceBlock/bemWrkspaceExpandableBlock/bemWrkspaceChannBlock/bem-wrkspace-chann.css';
import './User/bemUserFoundBlock/bem-user-found.css';
import './bemSearchMenu/bem-search-menu.css';
import UsersFoundBlockComponent from "./usersFoundBlock/UsersFoundBlockComponent";
import MessagesFoundBlockComponent from "./messagesFoundBlock/MessagesFoundComponent";

const chatsColumnTemplate = require('./chatsColumn.pug');

class ChatsColumnComponent extends BaseComponent {

    contentListRootSelector = '.all-chats-window';

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

    render() {
    	return chatsColumnTemplate(this._data.user);
    }
}

export default ChatsColumnComponent;