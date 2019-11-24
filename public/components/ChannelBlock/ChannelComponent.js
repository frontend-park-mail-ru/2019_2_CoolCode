import BaseComponent from "../baseComponent";
const channelTemplate = require('./channel.pug');
const rightMsg = require('./ChannelMessage/msgRightChannel.pug');
const leftMsg = require('./ChannelMessage/msgLeftChannel.pug');

import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bem-chat-column.css';
import './bemChannelHeader/channelHeader/channel-header.css';
import './bemChannelHeader/channelHeader/channelHeaderMenuItems/channelHeaderMenuItems.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/bem-chat-column-main.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/MsgWindow/msgwindow.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/InputBlock/input.css';
import './ChannelMessage/channelMsg/chat-msg.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/MessageSettBlock/message-sett-block.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/typing-block.css';
import ChannelMessageComponent from "./ChannelMessage/ChannelMessageComponent";
import ChatMessageComponent from "../ChatBlock/Message/ChatMessageComponent";

class ChannelComponent extends BaseComponent {

	contentListRootSelector = '.msgwindow-container__msgwindow';

	getMessageInputData() {
		return this._parent.querySelector('.input__text').value;
	}

	setMessageInputData(messageData) {
		this._parent.querySelector('.input__text').value = messageData;
	}

	renderOutgoingMessage(messageData) {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		const messageComponent = new ChannelMessageComponent({messageUser: this._data.user, message: messageData, user: this._data.user,
			error: false, deleted:false, edited:false}, contentListRoot);
		contentListRoot.appendChild(messageComponent.render());
		contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
	}

	renderCurrentChatIncomingMessage(user, messageData) {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		const messageComponent = new ChannelMessageComponent({messageUser: user, message: messageData, user: this._data.user,
			error: false, deleted:false, edited:false}, contentListRoot);
		contentListRoot.appendChild(messageComponent.render());
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
		if (this._data.channelMessages) {
			this._data.channelMessages.forEach((message) => {
				const messageComponent = new ChannelMessageComponent({messageUser: message.user, message: message.message,
					user: this._data.user, error: false, deleted:false, edited:false}, contentListRoot);
				contentListRoot.appendChild(messageComponent.render());
			});
		}
		contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
	}

	render() {
		return channelTemplate(this._data);

	}
}

export default ChannelComponent;