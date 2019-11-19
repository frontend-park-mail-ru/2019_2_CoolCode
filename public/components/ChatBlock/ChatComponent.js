import BaseComponent from "../baseComponent";
const chatTemplate = require('./chat.pug');
const rightMsg = require('./Message/msgRight.pug');
const leftMsg = require('./Message/msgLeft.pug');

import './bemChatPageBlocks/bemChatColumn/bem-chat-column.css';
import './bemChatPageBlocks/bemChatColumn/chatHeader/chat-header.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/bem-chat-column-main.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/MsgWindow/msgwindow.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/InputBlock/input.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/MessageSettBlock/message-sett-block.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/typing-block.css';
import ChatMessageComponent from "./Message/ChatMessageComponent";

class ChatComponent extends BaseComponent {

    contentListRootSelector = '.msgwindow-container__msgwindow';

    getMessageInputData() {
    	return this._parent.querySelector('.input__text').value;
    }

    setMessageInputData(inputData) {
    	this._parent.querySelector('.input__text').value = inputData;
    }

    renderErrorOutgoingMessage(messageData) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const messageComponent = new ChatMessageComponent({message: messageData, user: this._data.user, error: true, deleted:false}, contentListRoot);
    	contentListRoot.appendChild(messageComponent.render());
    	contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
    }

    renderOutgoingMessage(messageData) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const messageComponent = new ChatMessageComponent({message: messageData, user: this._data.user, error: false, deleted:false, edited:false}, contentListRoot);
    	contentListRoot.appendChild(messageComponent.render());
    	contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
    }

    renderCurrentChatIncomingMessage(messageData) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const messageComponent = new ChatMessageComponent({message: messageData, user: this._data.user, error: false, deleted:false, edited:false}, contentListRoot);
    	contentListRoot.appendChild(messageComponent.render());
    	contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
    }

    renderEditedMessage(messageData) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const message = contentListRoot.querySelector(`#message-${messageData.id}`);
    	const messageComponent = new ChatMessageComponent({message: messageData, user: this._data.user, error: false, deleted:false, edited:true}, contentListRoot);
    	message.insertAdjacentElement( 'beforebegin', messageComponent.render());
    	message.remove();
    	contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;

    }

    deleteMessage(messageId) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const message = contentListRoot.querySelector(`#message-${messageId}`);
    	message.remove();
    }

    deleteOldMessage(messageData) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const messageComponent = new ChatMessageComponent({message: messageData, user: this._data.user, error: false, deleted:true, edited:false}, contentListRoot);
    	const message = contentListRoot.querySelector(`#message-${messageData.id}`);
    	message.insertAdjacentElement( 'beforebegin', messageComponent.render());
    	message.remove();

    }

    renderIncomingMessage(messageData) {

    }

    renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.chatMessages) {
    		this._data.chatMessages.forEach((message) => {
    			const messageComponent = new ChatMessageComponent({message: message, user: this._data.user, error: false, deleted:false}, contentListRoot);
    			contentListRoot.appendChild(messageComponent.render());
    		});
    	}
    	contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
    }

    render() {
    	return chatTemplate(this._data);
    }
}

export default ChatComponent;