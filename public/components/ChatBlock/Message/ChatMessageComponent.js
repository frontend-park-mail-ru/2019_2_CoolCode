import BaseComponent from "../../baseComponent";
import ChatComponent from "../ChatComponent";
import {data} from "../../../main";

const rightMsg = require('./msgRight.pug');
const leftMsg = require('./msgLeft.pug');

class ChatMessageComponent extends BaseComponent {

	renderLeft() {
		return leftMsg({text: this._data.message.text, id: `message-${this._data.message.id}`, time: 'time'});

	}

	renderRight() {
		return rightMsg({text: this._data.message.text, id: `message-${this._data.message.id}`, time: 'time'});

	}

	render() {
		if (this._data.message) {
			if (this._data.message.author_id === this._data.user.id) {
				return this.renderRight();
			} else {
				return this.renderLeft();
			}
		}
	}

}

export default ChatMessageComponent;