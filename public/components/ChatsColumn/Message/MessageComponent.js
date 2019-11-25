import BaseComponent from "../../baseComponent";
import {data} from "../../../main";

const msgTempl = require('./message.pug');
const msgFoundChatTempl = require('./messageFoundChat.pug');
const msgFoundChannelTempl = require('./messageFoundChannel.pug');

class MessageComponent extends BaseComponent {

	photoBlock = '.chat-block__image-row__image';

	getPhotoBlock() {
		return this.photoBlock;
	}

	renderMessageFoundInChannel() {
		const message = document.createElement('div');
		message.className = 'message-channel-found chat-block chat-block_found';
		message.innerHTML = msgFoundChannelTempl(this._data);
		message.id = "message-" + (this._data.message.id);
		return message;
	}

	renderMessageFoundInChat() {
		const message = document.createElement('div');
		message.className = 'message-chat-found chat-block chat-block_found-ch';
		message.innerHTML = msgFoundChatTempl(this._data);
		message.id = "message-" + (this._data.message.id);
		return message;
	}

	render() {
		const message = document.createElement('div');
		message.className = 'chat-block chat-block_style';
		message.innerHTML = msgTempl(this._data);
		message.id = "chat-" + data.getChatUserIdByChatId(this._data.ID);
		return message;
	}
}

export default MessageComponent;