import BaseComponent from "../baseComponent";
const chatTemplate = require('./chat.pug');
const rightMsg = require('./Message/msgRight.pug');
const leftMsg = require('./Message/msgLeft.pug');

import './bemChannelHeader/bemChatColumn/bem-chat-column.css';
import './bemChannelHeader/channelHeader/channel-header.css';
import './bemChannelHeader/bemChatColumn/bemChatColumnMain/bem-chat-column-main.css';
import './bemChannelHeader/bemChatColumn/bemChatColumnMain/TypingBlock/MsgWindow/msgwindow.css';
import './bemChannelHeader/bemChatColumn/bemChatColumnMain/TypingBlock/InputBlock/input.css';
import './bemChannelHeader/bemChatColumn/bemChatColumnMain/TypingBlock/MsgWindow/chatMsg/chat-msg.css';
import './bemChannelHeader/bemChatColumn/bemChatColumnMain/MessageSettBlock/message-sett-block.css';
import './bemChannelHeader/bemChatColumn/bemChatColumnMain/TypingBlock/typing-block.css';
import ChatMessageComponent from "./Message/ChatMessageComponent";

class ChannelComponent extends BaseComponent {

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

	deleteMessage(messageId) {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		const message = contentListRoot.querySelector(`#message-${messageId}`);
		message.remove();
	}

	renderIncomingMessage(messageData) {

	}

	renderContent() {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		if (this._data.chatMessages) {
			this._data.chatMessages.forEach((message) => {
				const messageComponent = new ChatMessageComponent({message: message, user: this._data.user}, contentListRoot);
				contentListRoot.innerHTML += messageComponent.render();
			});
		}
		contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
	}

	render() {
		return chatTemplate(this._data);

	}
}

export default ChannelComponent;