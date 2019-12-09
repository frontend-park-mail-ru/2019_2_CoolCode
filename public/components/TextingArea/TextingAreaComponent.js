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

	createHandlers(container) {
		const closeBtns = container.querySelectorAll('.overlay_button__image-container__icon');
		closeBtns.forEach((closeBtn) => {
			closeBtn.addEventListener('click', () => {
				const imagesContainer = document.querySelector('.content-container__images');
				const imageParent = event.target.parentNode.parentNode.parentNode;
				const imageId = imageParent.id.split('-')[1];
				bus.emit('deleteChosenFile', null, imageId);
				imageParent.remove();
				if (imagesContainer.childNodes.length === 0) {
					bus.emit('showTextArea', null, 0);
				}
			});
		});
	}

	async renderPhotosAll(files) {
		for (let i = 0; i < files.length; i++) {
			const photoAttach = new AttachComponent({id:i});
			photoAttach.renderTo('.content-container__images');
			const worker = new MyWorker();
			worker.postMessage(files[i]);
			worker.onmessage = function (result) {
				bus.emit('setPicture', null, `#photoattach-${i}`,result.data);
			};
		}
	}

	async renderPhotos(files) {
		const imagesContainer = document.querySelector('.content-container__images');
		document.querySelector('.input__text').classList += ' input__text_hidden';
		imagesContainer.classList.remove('content-container__images_hidden');
		await this.renderPhotosAll(files);
		this.createHandlers(imagesContainer);
		bus.emit('setInputType', null, 1);

	}

	renderTo(rootSelector) {
		const container = document.querySelector(rootSelector);
		container.innerHTML += this.render();
		bus.emit('setInputType', null, 0);
	}

	render() {
		return textingAreaTemplate(this._data);
	}
}

export default TextingAreaComponent;