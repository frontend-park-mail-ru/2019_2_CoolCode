import BaseComponent from "../../baseComponent";
import {createVisibleSettingsMessageBlock} from "../../../handlers/chatViewHandlers";
import './chatMsg/chat-msg.css';
import './chatMsg/primaryRow/primary-row.css';
import './chatMsg/secondaryRow/secondary-row.css';

const rightMsg = require('./msgRight.pug');
const leftMsg = require('./msgLeft.pug');
const deletedMsg = require('./msgDeleted.pug');

class ChatMessageComponent extends BaseComponent {

	messageElement;

	createMessage() {
		let audio = document.getElementById('audio');
		let input = document.querySelector('.input__text.input__text_style');
		if(this._data.message.text == null) {
			audio.style.display = 'none';
			input.style.display = 'flex';
			this.messageElement = document.createElement('div');
			this.messageElement.className = 'chat-msg';
			this.messageElement.id = `message-${this._data.message.id}`;
		}else{
			this.messageElement = document.createElement('div');
			this.messageElement.className = 'chat-msg';
			this.messageElement.id = `message-${this._data.message.id}`;
		}

	}

	createHandlerRight() {
		const settingsMessageBtn = this.messageElement.querySelector('.primary-row__icon-container');
		settingsMessageBtn.addEventListener('mouseover', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('mouseout', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('click', createVisibleSettingsMessageBlock);
	}

	renderLeftDeleted() {
		this.messageElement.classList = `${this.messageElement.classList} chat-msg_left`;
		this.messageElement.innerHTML = deletedMsg();
	}

	renderRightDeleted() {
		this.messageElement.classList = `${this.messageElement.classList} chat-msg_right`;
		this.messageElement.innerHTML = deletedMsg();
	}

	renderLeft() {
		this.messageElement.classList = `${this.messageElement.classList} chat-msg_left`;
		this.messageElement.innerHTML = leftMsg(this._data.message);
	}

	renderRight() {
		this.messageElement.classList = `${this.messageElement.classList} chat-msg_right`;
		this.messageElement.innerHTML = rightMsg(this._data.message);
	}

	render() {
		if (this._data.message) {
			this._data.message.message_time = this._data.message.message_time.split(' ')[1];
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
						const textClassList = this.messageElement.querySelector('.primary-row__text').classList;
						this.messageElement.querySelector('.primary-row__text').classList = `${textClassList} primary-row__text_error`;
					}
					this.createHandlerRight();

				} else {
					this.renderLeft();
				}
				if (this._data.edited) {
					this.messageElement.querySelector('.secondary-row__edited').innerText = 'edited';
				}
			}
			return this.messageElement;
		}
	}

}

export default ChatMessageComponent;