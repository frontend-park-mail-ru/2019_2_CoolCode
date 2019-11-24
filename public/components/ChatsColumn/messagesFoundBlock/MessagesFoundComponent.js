import BaseComponent from "../../baseComponent";
import {data, bus, router} from "../../../main";
import MessageComponent from "../Message/MessageComponent";
const MessagesFoundBlockTemplate = require('./messagesFoundBlock.pug');

import '../ChatsBlock/bemChatsBlock/bem-chats-block.css';
import UserComponent from "../User/UserComponent";

class MessagesFoundBlockComponent extends BaseComponent {
    contentListRootSelector = '.mess-found-block__content';

    render() {
    	return MessagesFoundBlockTemplate(this._data);
    }

    renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.searchMessages) {
    		this._data.searchMessages.forEach((message) => {
    		    console.log(message);
    			const messageComponent = new MessageComponent(message, contentListRoot);

    			if (message.user) {
    				const messageElement = messageComponent.renderMessageFoundInChat();
    				contentListRoot.appendChild(messageElement);
    				bus.emit('getMessagePhoto', null, message.user.id, message.message.id ,"message", messageComponent.getPhotoBlock());
    			} else {
    				const messageElement = messageComponent.renderMessageFoundInChannel();
    				contentListRoot.appendChild(messageElement);
    			}
    		});
    	}
    }
}

export default MessagesFoundBlockComponent;