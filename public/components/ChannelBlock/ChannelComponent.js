import BaseComponent from "../baseComponent";
const channelTemplate = require('./channel.pug');
const rightMsg = require('../ChatBlock/Message/msgRight.pug');
const leftMsg = require('../ChatBlock/Message/msgLeft.pug');

import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bem-chat-column.css';
import './bemChannelHeader/channelHeader/channel-header.css';
import './bemChannelHeader/channelHeader/channelHeaderMenuItems/channelHeaderMenuItems.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/bem-chat-column-main.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/MsgWindow/msgwindow.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/InputBlock/input.css';
import '../ChatBlock/Message/chatMsg/chat-msg.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/MessageSettBlock/message-sett-block.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/typing-block.css';
import ChatMessageComponent from "../ChatBlock/Message/ChatMessageComponent";

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
		return channelTemplate(this._data);

	}
}

export default ChannelComponent;