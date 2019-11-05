import BaseComponent from "../baseComponent";
import {data, bus, router} from "../../main";
import MessageComponent from "./Message/MessageComponent";
import WrkSpaceComponent from "./WrkSpace/WrkSpace";
import UserComponent from "./User/UserComponent";
import {getUserPhoto} from "../../modules/API/profile";
const chatsColumnTemplate = require('./chatsColumn.pug');

class ChatsColumnComponent extends BaseComponent {

    contentListRootSelector = '.bem-all-chats-window';

    renderNewMessage(message) { //TODO: переделать когда на бэке появится дата
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	let messageBlock = contentListRoot.querySelector(`#chat-${message.author_id}`);
    	let lastMessage = messageBlock.querySelector('.bem-chat-block__message-column__message-row__last-message');
    	lastMessage.innerHTML = message.text;
    }
    renderSearchContent(searchUsers) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	contentListRoot.innerHTML = "";

    	if (searchUsers) {
    		searchUsers.forEach((user) => {
    			const userComponent = new UserComponent(user, contentListRoot);
    			const userBlock = document.createElement('div');
    			userBlock.className = 'bem-user-found bem-user-found_style';
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
    			let id = data.getChatUserIdByChatId(chat.ID);
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