import BaseComponent from "../baseComponent";
import './photo-create.scss';
import {bus, data, router} from "../../main";
import {capturePhotoEvent} from "../../handlers/createPhotoViewHandlers";

const PhotoCreateTemplate = require('./photoCreate.pug');

class PhotoCreateComponent extends BaseComponent {

	createHandler() {
		const closeBtn = document.querySelector('.overlay_button__image-container__icon');
		closeBtn.addEventListener('click', () => {
			router.return();
		});
		const captureBtns = document.querySelectorAll('.alert-photo__button-row_button');
		captureBtns.forEach((btn) => btn.addEventListener('click', () => {
			switch (event.target.dataset.section) {
			case 'capture':
				bus.emit('capturePhotoEvent', null);
				break;
			case 'recapture':
				bus.emit('recapturePhotoEvent', null);
				break;
			case 'sendPhoto':
				bus.emit('sendCapturedPhotoEvent', null);
				break;
			}
		}));
	}

	renderTo() {
		this._parent.insertAdjacentHTML("beforebegin", this.render());
		this.setStream();
		this.createHandler();
	}

	setStream() {
		document.querySelector('.photo-create__video').srcObject = data.getStream();
	}

	deleteSelf() {
		const parentContainer = this._parent.parentNode;
		for (let i = 0; i < 3; i++) {
			parentContainer.removeChild(parentContainer.firstElementChild);
		}
	}

	render() {
		return PhotoCreateTemplate(this._data);
	}
}

export default PhotoCreateComponent;