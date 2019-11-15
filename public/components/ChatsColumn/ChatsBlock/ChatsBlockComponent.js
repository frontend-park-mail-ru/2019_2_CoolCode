import BaseComponent from "../../baseComponent";
import {data, bus, router} from "../../../main";
import MessageComponent from "../Message/MessageComponent";
const ChatsBlockTemplate = require('./chatsBlock.pug');

import './bemChatsBlock/bem-chats-block.css';

class ChatsBlockComponent extends BaseComponent {
    contentListRootSelector = '.chats-block__content';

    drawSelected(chatId, messageElement) {
    	if (chatId == this._data.currentChat.ID) {
    		messageElement.className += ' chat-block_selected';
    		messageElement.querySelector('.chat-block__message-column__name-row').className += ' chat-block__message-column__name-row_selected';
    	}
    }

    render() {
    	return ChatsBlockTemplate(this._data);
    }

    renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.chats) {
    		this._data.chats.forEach((chat) => {
    			const message = new MessageComponent(chat, contentListRoot);
    			const messageElement = message.render();
    			contentListRoot.appendChild(messageElement);
    			if (this._data.currentChat) {
    				this.drawSelected(chat.ID, messageElement);
    			}
    			const id = data.getChatUserIdByChatId(chat.ID);
    			bus.emit('getUserPhoto', null, id ,"chat", message.getPhotoBlock());
    		});
    	}
    }
}

export default ChatsBlockComponent;