import BaseComponent from "../baseComponent";
import './photo-preview.scss';
import {data} from "../../main";

const photoPreviewTemplate = require('./photoPreview.pug');

class PhotoPreviewComponent extends BaseComponent {

	renderTo() {
		this._parent.insertAdjacentHTML("beforebegin", this.render());
		this.setPhoto();
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