import BaseComponent from "../baseComponent";

const msgTempl = require('./message.pug');

class MessageComponent extends BaseComponent {
	render() {
		return msgTempl(this._data);
	}
}

export default MessageComponent;