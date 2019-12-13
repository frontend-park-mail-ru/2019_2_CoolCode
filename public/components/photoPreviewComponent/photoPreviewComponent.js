import BaseComponent from "../baseComponent";
import './photo-preview.scss';
import {bus, data, router} from "../../main";

const photoPreviewTemplate = require('./photoPreview.pug');

class PhotoPreviewComponent extends BaseComponent {

	createHandler() {
		const closeBtn = document.querySelector('.overlay_button__image-container__icon');
		closeBtn.addEventListener('click', () => {
			bus.emit('deleteCurrentPhotoSrc', null);
			router.return();
		});
	}

	renderTo() {
		this._parent.insertAdjacentHTML("beforebegin", this.render());
		this.setPhoto();
		this.createHandler();
	}

	setPhoto() {
		document.querySelector('.photo-preview__image').src = data.getCurrentPhotoSrc();
	}

	deleteSelf() {
		const parentContainer = this._parent.parentNode;
		parentContainer.firstChild.remove();
		parentContainer.firstChild.remove();
	}

	render() {
		return photoPreviewTemplate(this._data);
	}
}

export default PhotoPreviewComponent;