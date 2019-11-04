import BaseComponent from "../../baseComponent";
import {data, bus, router} from "../../../main";
const msgTempl = require('./message.pug');

class MessageComponent extends BaseComponent {

	photoBlock = '.bem-chat-block__image-row__image';

	getPhotoBlock() {
		return this.photoBlock;
	}

	render() {
		const message = document.createElement('div');
		message.className = 'bem-chat-block bem-chat-block_style';
		message.innerHTML = msgTempl(this._data);
		message.id = "chat-" + data.getChatUserIdByChatId(this._data.ID);
		return message;
	}
}

export default MessageComponent;