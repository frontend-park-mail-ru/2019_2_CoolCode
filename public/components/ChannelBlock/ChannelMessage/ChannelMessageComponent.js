import BaseComponent from "../../baseComponent";
import {createVisibleSettingsMessageBlock} from "../../../handlers/chatViewHandlers";

const rightMsg = require('./msgRightChannel.pug');
const leftMsg = require('./msgLeftChannel.pug');
const deletedMsg = require('./msgDeletedChannel.pug');

import './channelMsg/chat-msg.css';
import './channelMsg/primaryRow/primary-row.css';
import './channelMsg/secondaryRow/secondary-row.css';
import './channelMsg/upperRow/upper-row.css';

class ChannelMessageComponent extends BaseComponent {

	messageElement;

	createMessage() {
		this.messageElement = document.createElement('div');
		this.messageElement.className = 'chat-msg';
		this.messageElement.id = `message-${this._data.message.id}`;
	}

	createHandlerRight() {
		const settingsMessageBtn = this.messageElement.querySelector('.primary-row__icon-container');
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
		this.messageElement.innerHTML = leftMsg({message: this._data.message, user: this._data.messageUser});
	}

	renderRight() {
		this.messageElement.classList += ' chat-msg_right';
		this.messageElement.innerHTML = rightMsg({message: this._data.message, user: this._data.messageUser});
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
						this.messageElement.querySelector('.primary-row__text').classList += ' primary-row__text_error';
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

export default ChannelMessageComponent;