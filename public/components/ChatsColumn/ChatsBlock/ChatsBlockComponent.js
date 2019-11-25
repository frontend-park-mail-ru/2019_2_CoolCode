import BaseComponent from "../../baseComponent";
import {bus, data} from "../../../main";
import MessageComponent from "../Message/MessageComponent";
import './bemChatsBlock/bem-chats-block.css';

const ChatsBlockTemplate = require('./chatsBlock.pug');

class ChatsBlockComponent extends BaseComponent {
    contentListRootSelector = '.chats-block__content';

    drawSelected(chatId, messageElement) {
    	if (chatId == this._data.currentChat.ID) {
    		messageElement.className = `${messageElement.className} chat-block_selected`;
    		const nameRowClassName = messageElement.querySelector('.chat-block__message-column__name-row').className;
    		messageElement.querySelector('.chat-block__message-column__name-row').className = `${nameRowClassName} chat-block__message-column__name-row_selected`;
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