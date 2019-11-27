import BaseComponent from "../baseComponent";
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bem-chat-column.css';
import './bemChannelHeader/channelHeader/channel-header.css';
import './bemChannelHeader/channelHeader/channelHeaderMenuItems/channel-header-menu.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/bem-chat-column-main.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/MsgWindow/msgwindow.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/InputBlock/input.css';
import './ChannelMessage/channelMsg/chat-msg.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/MessageSettBlock/message-sett-block.css';
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bemChatColumnMain/TypingBlock/typing-block.css';
import ChannelMessageComponent from "./ChannelMessage/ChannelMessageComponent";

const channelTemplate = require('./channel.pug');

class ChannelComponent extends BaseComponent {

	contentListRootSelector = '.msgwindow-container__msgwindow';

	slideToMessage() {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		const foundMessage = contentListRoot.querySelector(`#message-${this._data.foundMessageId}`);
		foundMessage.scrollIntoView({ behavior: 'smooth', block: 'start'});
		foundMessage.firstElementChild.classList = `${foundMessage.firstElementChild.classList} chat-msg__container_found`;
	}

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

	renderEditedMessage(user, messageData) {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		const message = contentListRoot.querySelector(`#message-${messageData.id}`);
		const messageComponent = new ChannelMessageComponent({messageUser: user, message: messageData, user: this._data.user,
			error: false, deleted:false, edited:true}, contentListRoot);
		message.insertAdjacentElement( 'beforebegin', messageComponent.render());
		message.remove();
		contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;

	}

	deleteMessage(messageId) {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		const message = contentListRoot.querySelector(`#message-${messageId}`);
		message.remove();
	}

	likeMessage(messageId) {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		const message = contentListRoot.querySelector(`#message-${messageId}`);
		const innerText = message.querySelector('.secondary-row__like__count').innerText;
		if (innerText) {
			const oldNumber = parseFloat(innerText);
			message.querySelector('.secondary-row__like__count').innerText = oldNumber + 1;
		} else {
			message.querySelector('.secondary-row__like__count').innerText = 1;
		}
		message.querySelector('.secondary-row__like__add').innerText = '+1';
		setTimeout(() => {
			message.querySelector('.secondary-row__like__add').innerText = '';
		}, 1000);
	}

	deleteOldMessage(messageData) {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		const messageComponent = new ChannelMessageComponent({messageUser: undefined, message: messageData, user: this._data.user,
			error: false, deleted:true, edited:false}, contentListRoot);
		const message = contentListRoot.querySelector(`#message-${messageData.id}`);
		message.insertAdjacentElement( 'beforebegin', messageComponent.render());
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