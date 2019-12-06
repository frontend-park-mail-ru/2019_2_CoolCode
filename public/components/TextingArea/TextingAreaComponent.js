import BaseComponent from "../baseComponent";
import './TextingArea/bem-chat-column-main.scss';
import './TextingArea/MessageSettBlock/message-sett-block.scss';
import './TextingArea/TypingBlock/InputBlock/input.scss';
import './TextingArea/TypingBlock/InputBlock/Attaches/attaches.scss';
import './TextingArea/TypingBlock/MsgWindow/msgwindow.scss';
import './TextingArea/TypingBlock/typing-block.css';
import MyWorker from "../../workers/profile.worker";
import {bus, data, promiseMaker} from "../../main";
import AttachComponent from "./TextingArea/TypingBlock/InputBlock/Attaches/PhotoAttach/AttachComponent";

const textingAreaTemplate = require('./textarea.pug');

class TextingAreaComponent extends BaseComponent {

	renderPhotos(files) {
		const imagesContainer = document.querySelector('.content-container__images');
		document.querySelector('.input__text').classList += ' input__text_hidden';
		imagesContainer.classList.remove('content-container__images_hidden');
		for (let i = 0; i < files.length; i++) {
			const worker = new MyWorker();
			worker.postMessage(files[i]);
			worker.onmessage = function (result) {
				const photoAttach = new AttachComponent({imageSrc : result.data}, this._parent);
				photoAttach.renderTo('.content-container__images');
			};
		}
	}

	showTextArea() {
		document.querySelector('.input__text').classList.remove('input__text_hidden');
		document.querySelector('.content-container__images').classList += ' content-container__images_hidden';
	}

	renderTo(rootSelector) {
		const container = document.querySelector(rootSelector);
		container.innerHTML += this.render();
	}

	render() {
		return textingAreaTemplate(this._data);
	}
}

export default TextingAreaComponent;