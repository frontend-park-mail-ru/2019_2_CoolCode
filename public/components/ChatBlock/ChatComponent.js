import BaseComponent from "../baseComponent";
const chatTemplate = require('./chat.pug');
const rightMsg = require('./msgRight.pug');
const leftMsg = require('./msgLeft.pug');

import './bemChatPageBlocks/bemChatColumn/bem-chat-column.css';
import './bemChatPageBlocks/bemChatColumn/chatHeader/chat-header.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/bem-chat-column-main.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/MsgWindow/msgwindow.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/InputBlock/input.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/MsgWindow/chatMsg/chat-msg.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/MessageSettBlock/message-sett-block.css';
import './bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/typing-block.css';

class ChatComponent extends BaseComponent {

    contentListRootSelector = '.msgwindow-container__msgwindow';

    getMessageInputData() {
    	return this._parent.querySelector('.input__text').value;
    }

    setMessageInputData(messageData) {
    	this._parent.querySelector('.input__text').value = '';
    }

    renderOutgoingMessage(messageData) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	contentListRoot.innerHTML += rightMsg({text: messageData.text, time: messageData.time});
    	contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
    }

    renderCurrentChatIncomingMessage(messageData) {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	contentListRoot.innerHTML += leftMsg({text: messageData.text, time: messageData.time});
    	contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
    }

    renderIncomingMessage(messageData) {

    }

    renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.chatMessages) {
    		this._data.chatMessages.forEach((message) => {
    			if (message) {
    				if (message.author_id === this._data.user.id) {
    					contentListRoot.innerHTML += rightMsg({text: message.text, time: 'time'});
    				} else {
    					contentListRoot.innerHTML += leftMsg({text: message.text, time: 'time'});
    				}
    			}

    		});
    	}
    	contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
    }

    render() {
    	return chatTemplate(this._data);

    }
}

export default ChatComponent;