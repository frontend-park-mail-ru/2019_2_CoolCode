import BaseComponent from "../../baseComponent";
import {bus, data} from "../../../main";
import MessageComponent from "../Message/MessageComponent";
import './bemChatsBlock/bem-chats-block.scss';

const ChatsBlockTemplate = require('./chatsBlock.pug');

class ChatsBlockComponent extends BaseComponent {
    contentListRootSelector = '.chats-block__content';

    drawSelected() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const selectedMessage = contentListRoot.querySelector('.chat-block_selected');
    	const selectedChannel = document.querySelector('.wrkspace-chann_selected');
    	if (selectedMessage) {
    		selectedMessage.classList.remove('chat-block_selected');
    	}
    	if (selectedChannel) {
    		selectedChannel.classList.remove('wrkspace-chann_selected');
    	}
    	const userId = data.getChatUserIdByChatId(this._data.currentChat.id);
    	const messageElement = contentListRoot.querySelector(`#chat-${userId}`);
    	messageElement.className = `${messageElement.className} chat-block_selected`;
    	const nameRowClassName = messageElement.querySelector('.chat-block__message-column__name-row').className;
    	messageElement.querySelector('.chat-block__message-column__name-row').className = `${nameRowClassName} chat-block__message-column__name-row_selected`;
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
    			const id = data.getChatUserIdByChatId(chat.id);
    			bus.emit('getUserPhoto', null, id ,"chat", message.getPhotoBlock());
    		});
    	}
    }
}

export default ChatsBlockComponent;