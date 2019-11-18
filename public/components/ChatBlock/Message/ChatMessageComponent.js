import BaseComponent from "../../baseComponent";
import ChatComponent from "../ChatComponent";
import {data} from "../../../main";
import {createVisibleSettingsMessageBlock} from "../../../handlers/chatViewHandlers";

const rightMsg = require('./msgRight.pug');
const leftMsg = require('./msgLeft.pug');

class ChatMessageComponent extends BaseComponent {

	messageElement;

	createMessage() {
		this.messageElement = document.createElement('div');
		this.messageElement.className = 'chat-msg';
		this.messageElement.id = `message-${this._data.message.id}`;
	}

	renderLeft() {
		this.messageElement.classList += ' chat-msg_left';
		this.messageElement.innerHTML = leftMsg({text: this._data.message.text, time: 'time'});
	}

	createHandlerRight() {
		const settingsMessageBtn = this.messageElement.querySelector('.chat-msg__icon-container');
		settingsMessageBtn.addEventListener('mouseover', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('mouseout', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('click', createVisibleSettingsMessageBlock);
	}

	renderRight() {
		this.messageElement.classList += ' chat-msg_right';
		this.messageElement.innerHTML = rightMsg({text: this._data.message.text, time: 'time'});
	}

	render() {
		if (this._data.message) {
			this.createMessage();
			if (this._data.message.author_id === this._data.user.id) {
				this.renderRight();
				if (this._data.error) {
					this.messageElement.querySelector('.chat-msg__text').classList += ' chat-msg__text_style-error';
				}
				this.createHandlerRight();
			} else {
				this.renderLeft();
			}
			return this.messageElement;
		}
	}

}

export default ChatMessageComponent;