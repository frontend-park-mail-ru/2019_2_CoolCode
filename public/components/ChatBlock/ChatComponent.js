import BaseComponent from "../baseComponent";
import './bemChatPageBlocks/bemChatColumn/bem-chat-column.scss';
import './bemChatPageBlocks/bemChatColumn/chatHeader/chat-header.scss';
import ChatMessageComponent from "../TextingArea/Message/ChatMessage/ChatMessageComponent";
import TextingAreaComponent from "../TextingArea/TextingAreaComponent";

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

    renderTextingArea() {
    	const contentListRoot = document.querySelector(this.contentListRootSelector);
    	this.textAreaComponent = new TextingAreaComponent(this._data, contentListRoot);
    	this.textAreaComponent.renderTo('.chat-column');
    }

    async renderPhotos(files) {
    	await this.textAreaComponent.renderPhotos(files);
    }

    render() {
    	return chatTemplate(this._data);
    }
}

export default ChatComponent;