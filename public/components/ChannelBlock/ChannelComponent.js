import BaseComponent from "../baseComponent";
import '../ChatBlock/bemChatPageBlocks/bemChatColumn/bem-chat-column.scss';
import './bemChannelHeader/channelHeader/channel-header.scss';
import './bemChannelHeader/channelHeader/channelHeaderMenuItems/channel-header-menu.css';
import ChannelMessageComponent from "../TextingArea/Message/ChannelMessage/ChannelMessageComponent";
import TextingAreaComponent from "../TextingArea/TextingAreaComponent";
import {bus, data} from "../../main";
import {getChannelFile, getChatFile} from "../../backendDataFetchers/filesRequest";
import MyWorker from "../../workers/profile.worker";
import {Type} from "../../modules/getType";
import ChatMessageComponent from "../TextingArea/Message/ChatMessage/ChatMessageComponent";

const channelTemplate = require('./channel.pug');

class ChannelComponent extends BaseComponent {

	contentListRootSelector = '.msgwindow-container__msgwindow';
	textAreaComponent;

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
		if (messageData.message_type == 1) {
			this.setMessageContent(messageData);
		}
		if (messageData.message_type == 3) {
			this.setStickerContent(messageData);
		}
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

	async setStickerContent(message) {
		const sticker = document.querySelector(`#sticker${message.sticker_id}`);
		const messageBlock = document.getElementById(`message-${message.id}`);
		messageBlock.querySelector('.primary-row__image-container__image').src = sticker.src;
		bus.emit('showPhotoContent', null, messageBlock);
	}

	async setMessageContent(message) {
		const channelId = data.getCurrentChannelId();
		let buffer = await getChannelFile(channelId, message.file_id);
		const fileCheck = new Type();
		if (fileCheck.checkAudio(message.file_type) ||
			fileCheck.checkFile(message.file_type)) {
			buffer = buffer.slice(0, buffer.size, fileCheck.createMimeType(message.file_type));
		}
		const worker = new MyWorker();
		worker.postMessage(buffer);
		worker.onmessage = function (result) {
			const messageBlock = document.getElementById(`message-${message.id}`);
			if (fileCheck.checkImage(message.file_type)) {
				messageBlock.querySelector('.primary-row__image-container__image').src = result.data;
				bus.emit('showPhotoContent', null, messageBlock);
				bus.emit('createMessagePhotoHandler', null, message.id);
			} else if (fileCheck.checkAudio(message.file_type)) {
				messageBlock.querySelector('.primary-row__audio').src = result.data;
				bus.emit('showAudioContent', null, messageBlock);
			} else if (fileCheck.checkFile(message.file_type)) {
				messageBlock.querySelector('.primary-row__file-ref').download = `${message.file_id}.${message.file_type}`;
				messageBlock.querySelector('.primary-row__file-ref').href = result.data;
				messageBlock.querySelector('.file-ref__image-container__image').src = fileCheck.getImage(message.file_type);
				bus.emit('showFileContent', null, messageBlock);
			}
		};
	}

	async renderContent() {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		if (this._data.channelMessages) {
			for (const message of this._data.channelMessages) {
				if (message) {
					const messageComponent = new ChannelMessageComponent({
						messageUser: message.user, message: message.message,
						user: this._data.user, error: false, deleted: false, edited: false
					}, contentListRoot);
					contentListRoot.appendChild(messageComponent.render());
				}
			}
			contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
			for (const message of this._data.channelMessages.reverse()) {
				if (message) {
					if (message.message.message_type == 1) {
						await this.setMessageContent(message.message);
					}
					if (message.message.message_type == 3) {
						await this.setStickerContent(message.message);
					}
				}
			}
		}
	}

	renderTextingArea() {
		const contentListRoot = document.querySelector(this.contentListRootSelector);
		this.textAreaComponent = new TextingAreaComponent(this._data, contentListRoot);
		this.textAreaComponent.renderTo('.chat-column');
	}

	async renderFiles(files, type) {
		await this.textAreaComponent.renderFiles(files, type);
	}

	render() {
		return channelTemplate(this._data);
	}
}

export default ChannelComponent;