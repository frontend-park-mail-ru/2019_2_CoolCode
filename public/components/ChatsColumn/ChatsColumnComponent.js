import BaseComponent from "../baseComponent";
import {data, bus, router} from "../../main";
import MessageComponent from "./Message/MessageComponent";
import WrkSpaceComponent from "./WrkSpace/WrkSpaceComponent";
import UserComponent from "./User/UserComponent";
const chatsColumnTemplate = require('./chatsColumn.pug');

import './components/bem-main.css';
import './bemAllChats/bem-all-chats.css';
import './bemAllChats/bemAllChatsScrollWindow/bem-all-chats-window.css';
import './Message/bemChatBlock/bem-chat-block.css';
import './WrkSpace/bemWrkspaceBlock/bem-wrkspace-block.css';
import './WrkSpace/bemWrkspaceBlock/bemWrkscpaceVisibleBlock/bem-wrkspace-visible.css';
import './WrkSpace/bemWrkspaceBlock/bemWrkspaceExpandableBlock/bem-wrkspace-expandable.css';
import './WrkSpace/bemWrkspaceBlock/bemWrkspaceExpandableBlock/bemWrkspaceChannBlock/bem-wrkspace-chann.css';
import './User/bemUserFoundBlock/bem-user-found.css';

class ChatsColumnComponent extends BaseComponent {

    contentListRootSelector = '.all-chats-window';

    renderNewMessage(message) { //TODO: переделать когда на бэке появится дата
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const messageBlock = contentListRoot.querySelector(`#chat-${message.author_id}`);
    	const lastMessage = messageBlock.querySelector('.chat-block__message-column__message-row__last-message');
    	lastMessage.innerHTML = message.text;
    }
    renderSearchContent(searchUsers) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	contentListRoot.innerHTML = "";

    	if (searchUsers) {
    		searchUsers.forEach((user) => {
    			const userComponent = new UserComponent(user, contentListRoot);
    			const userBlock = document.createElement('div');
    			userBlock.className = 'user-found user-found_style';
    			userBlock.id = "search-" + user.id;
    			userBlock.innerHTML = userComponent.render();
    			contentListRoot.appendChild(userBlock);
    			bus.emit('getUserPhoto', null, user.id ,'search', userComponent.getPhotoBlock());
    		});
    	}

    }

    renderChatsContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);

    	if (this._data.chats) {
    		this._data.chats.forEach((chat) => {
    			const message = new MessageComponent(chat, contentListRoot);
    			contentListRoot.appendChild(message.render());
    			const id = data.getChatUserIdByChatId(chat.ID);
    			bus.emit('getUserPhoto', null, id ,"chat", message.getPhotoBlock());
    		});
    	}

    	if (this._data.wrkspaces) {
    		this._data.wrkspaces.forEach((wsp) => {
    			const wrkSpace = new WrkSpaceComponent(wsp, contentListRoot);
    			contentListRoot.appendChild(wrkSpace.render());
    		});
    	}
    }

    render() {
    	return chatsColumnTemplate(this._data.user);

    }
}

export default ChatsColumnComponent;