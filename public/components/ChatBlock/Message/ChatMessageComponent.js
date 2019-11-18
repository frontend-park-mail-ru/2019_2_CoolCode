import BaseComponent from "../../baseComponent";
import {createVisibleSettingsMessageBlock} from "../../../handlers/chatViewHandlers";

const rightMsg = require('./msgRight.pug');
const leftMsg = require('./msgLeft.pug');
const deletedMsg = require('./msgDeleted.pug');

class ChatMessageComponent extends BaseComponent {

	messageElement;

	createMessage() {
		this.messageElement = document.createElement('div');
		this.messageElement.className = 'chat-msg';
		this.messageElement.id = `message-${this._data.message.id}`;
	}

	createHandlerRight() {
		const settingsMessageBtn = this.messageElement.querySelector('.chat-msg__icon-container');
		settingsMessageBtn.addEventListener('mouseover', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('mouseout', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('click', createVisibleSettingsMessageBlock);
	}

	renderLeftDeleted() {
		this.messageElement.classList += ' chat-msg_left';
		this.messageElement.innerHTML = deletedMsg();
	}

	renderRightDeleted() {
		this.messageElement.classList += ' chat-msg_right';
		this.messageElement.innerHTML = deletedMsg();
	}

	renderLeft() {
		this.messageElement.classList += ' chat-msg_left';
		this.messageElement.innerHTML = leftMsg(this._data.message);
	}

	renderRight() {
		this.messageElement.classList += ' chat-msg_right';
		this.messageElement.innerHTML = rightMsg(this._data.message);
	}

	render() {
		if (this._data.message) {
			this.createMessage();
			if (this._data.deleted) {
				if (this._data.message.author_id === this._data.user.id) {
					this.renderRightDeleted();
				} else {
					this.renderLeftDeleted();
				}
			} else {
				if (this._data.message.author_id === this._data.user.id) {
					this.renderRight();
					if (this._data.error) {
						this.messageElement.querySelector('.chat-msg__text').classList += ' chat-msg__text_error';
					}
					this.createHandlerRight();
				} else {
					this.renderLeft();
				}
			}
			return this.messageElement;
		}
	}

}

export default ChatMessageComponent;