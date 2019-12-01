import BaseComponent from "../baseComponent";
import './TextingArea/bem-chat-column-main.css';
import './TextingArea/MessageSettBlock/message-sett-block.scss';
import './TextingArea/TypingBlock/InputBlock/input.scss';
import './TextingArea/TypingBlock/MsgWindow/msgwindow.css';
import './TextingArea/TypingBlock/typing-block.css';

const textingAreaTemplate = require('./textarea.pug');

class TextingAreaComponent extends BaseComponent {

	render() {
		return textingAreaTemplate(this._data);
	}
}

export default TextingAreaComponent;