import BaseComponent from "../baseComponent";
import './bemChatPageBlocks/bemChatColumn/bem-chat-column.css';
import './bemChatPageBlocks/bemChatColumn/chatHeader/chat-header.scss';
import ChatMessageComponent from "../TextingArea/Message/ChatMessage/ChatMessageComponent";
import TextingAreaComponent from "../TextingArea/TextingAreaComponent";

const chatTemplate = require('./chat.pug');

class ChatComponent extends BaseComponent {

    contentListRootSelector = '.msgwindow-container__msgwindow';

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

    renderOutgoingRecord(messageData) {
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
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const textingArea = new TextingAreaComponent(this._data, contentListRoot);
    	const container = document.querySelector('.chat-column');
    	container.innerHTML += textingArea.render();
    }

    render() {
    	return chatTemplate(this._data);
    }
}

export default ChatComponent;