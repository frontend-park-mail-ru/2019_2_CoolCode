import BaseComponent from "../baseComponent";
import './bemChatPageBlocks/bemChatColumn/bem-chat-column.scss';
import './bemChatPageBlocks/bemChatColumn/chatHeader/chat-header.scss';
import ChatMessageComponent from "../TextingArea/Message/ChatMessage/ChatMessageComponent";
import TextingAreaComponent from "../TextingArea/TextingAreaComponent";
import MyWorker from "../../workers/profile.worker";
import {bus, data} from "../../main";
import {getChatFile} from "../../backendDataFetchers/filesRequest";
import { Type} from "../../modules/getType";
import {showAudioContent, showPhotoContent} from "../../handlers/chatViewHandlers";

const chatTemplate = require('./chat.pug');

class ChatComponent extends BaseComponent {

    contentListRootSelector = '.msgwindow-container__msgwindow';
    textAreaComponent;

    slideToMessage() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const foundMessage = contentListRoot.querySelector(`#message-${this._data.foundMessageId}`);
    	foundMessage.scrollIntoView({ behavior: 'smooth', block: 'start'});
    	const foundMessageClassList = foundMessage.firstElementChild.classList;
    	foundMessage.firstElementChild.classList = `${foundMessageClassList} chat-msg__container_found`;
    }

    getMessageInputData() {
    	return this._parent.querySelector('.input__text').value;
    }
    getMessageInputRecord() {
    	return this._parent.querySelector('input__record').value;
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
    	if (messageData.message_type == 1) {
    		this.setMessageContent(messageData);
    	}
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

    async setMessageContent(message) {
    	let chatId = data.getCurrentChatId();
    	if (!chatId) {
    		chatId = data.getCurrentChannelId();
    	}
    	let buffer = await getChatFile(chatId, message.file_id);
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
    			bus.emit('showFileContent', null, messageBlock);
    		}
    	};
    }

    async renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.chatMessages) {
    		for (const message of this._data.chatMessages) {
    			const messageComponent = new ChatMessageComponent({
    				message: message,
    				user: this._data.user,
    				error: false,
    				deleted: false
    			}, contentListRoot);
    			contentListRoot.appendChild(messageComponent.render());
    		}
    		contentListRoot.scrollTop = contentListRoot.scrollHeight - contentListRoot.clientHeight;
    		for (const message of this._data.chatMessages.reverse()) {
    			if (message.message_type == 1) {
    				await this.setMessageContent(message);
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
    	return chatTemplate(this._data);
    }
}

export default ChatComponent;