import BaseComponent from "../baseComponent";
import './TextingArea/bem-chat-column-main.scss';
import './TextingArea/MessageSettBlock/message-sett-block.scss';
import './TextingArea/MessageSettBlock/stiker-block.scss';
import './TextingArea/TypingBlock/InputBlock/input.scss';
import './TextingArea/TypingBlock/InputBlock/Attaches/attaches.scss';
import './TextingArea/TypingBlock/MsgWindow/msgwindow.scss';
import './TextingArea/TypingBlock/typing-block.scss';
import MyWorker from "../../workers/profile.worker";
import {bus, data, promiseMaker} from "../../main";
import AttachComponent from "./TextingArea/TypingBlock/InputBlock/Attaches/PhotoAttach/AttachComponent";
import {getRandomInt} from "../../modules/random";

const textingAreaTemplate = require('./textarea.pug');

class TextingAreaComponent extends BaseComponent {

	renderStikers() {
		const classImg = "sticker-block__content__img__place-stickers__img";
		for (let pack = 1; pack < 7; pack++) {

			for (let n = 1; n < 62; n++) {
				const img = document.createElement('img');
				img.id = `sticker${pack}-${n}`;
				img.setAttribute("class", classImg);
				img.src = `/images/go/BeepCar${n}.png`;
				document.querySelector(`.stickerpack-${pack}`)
					.appendChild(img);
			}

			for (let n = 1; n < 65; n++) {
				const img = document.createElement('img');
				img.id = `sticker${pack}-${n}`;
				img.setAttribute("class", classImg);
				img.src = `/images/hate/Hate_everything${n}.png`;
				document.querySelector(`.stickerpack-${pack}`)
					.appendChild(img);
			}

			for (let n = 1; n < 4; n++) {
				const img = document.createElement('img');
				img.id = `sticker${pack}-${n}`;
				img.setAttribute("class", classImg);
				img.src = `/images/Sashuly/S_a_s_h_u_l_y_a${n}.png`;
				document.querySelector(`.stickerpack-${pack}`)
					.appendChild(img);
			}

			for (let n = 1; n < 35; n++) {
				const img = document.createElement('img');
				img.id = `sticker${pack}-${n}`;
				img.setAttribute("class", classImg);
				img.src = `/images/cats/Catkus${n}.png`;
				document.querySelector(`.stickerpack-${pack}`)
					.appendChild(img);
			}
			for (let n = 1; n < 39; n++) {
				const img = document.createElement('img');
				img.id = `sticker${pack}-${n}`;
				img.setAttribute("class", classImg);
				img.src = `/images/devyat/dev9tka${n}.png`;
				document.querySelector(`.stickerpack-${pack}`)
					.appendChild(img);
			}
			for (let n = 1; n < 26; n++) {
				const img = document.createElement('img');
				img.id = `sticker${pack}-${n}`;
				img.setAttribute("class", classImg);
				img.src = `/images/penny/MrPennywise${n}.png`;
				document.querySelector(`.stickerpack-${pack}`)
					.appendChild(img);
			}
		}
	}

	createHandlers(container) {
		const closeBtns = container.querySelectorAll('.overlay_button__image-container__icon');
		closeBtns.forEach((closeBtn) => {
			closeBtn.addEventListener('click', () => {
				const imagesContainer = document.querySelector('.content-container__images');
				const imageParent = event.target.parentNode.parentNode.parentNode;
				const imageId = imageParent.firstChild.id.split('-')[1];
				promiseMaker.createPromise('deleteChosenFile', imageId).then(
					() => {
						imageParent.remove();
						if (imagesContainer.childNodes.length === 0) {
							bus.emit('showTextArea', null);
						}
					}
				);
			});
		});
	}

	async renderFilesAll(files, type) {
		for (let i = 0; i < files.length; i++) {
			const attachId = getRandomInt(1000);
			bus.emit('setChosenFile', null, {file: files[i], id : attachId});
			const photoAttach = new AttachComponent({id:attachId});
			photoAttach.renderTo('.content-container__images');
			const worker = new MyWorker();
			worker.postMessage(files[i]);
			worker.onmessage = function (result) {
				const attach = document.getElementById(`photoattach-${attachId}`).parentNode;
				bus.emit('showAttachContent', null, attach);
				switch(type) {
				case 0:
					bus.emit('setPicture', null, `#photoattach-${attachId}`,result.data);
					break;
				case 1:
					attach.querySelector('.attach-component__text').innerText = files[i].name;
					bus.emit('setPicture', null, `#photoattach-${attachId}`,'/images/file.png');
					break;
				}

			};
		}
	}

	async renderFiles(files, type) {
		const imagesContainer = document.querySelector('.content-container__images');
		document.querySelector('.input__text').classList += ' input__text_hidden';
		imagesContainer.classList.remove('content-container__images_hidden');
		await this.renderFilesAll(files, type);
		this.createHandlers(imagesContainer);
		bus.emit('setInputType', null, 1);

	}

	renderTo(rootSelector) {
		const container = document.querySelector(rootSelector);
		container.innerHTML += this.render();
		this.renderStikers();
		bus.emit('setInputType', null, 0);
	}

	render() {
		return textingAreaTemplate(this._data);
	}
}

export default TextingAreaComponent;