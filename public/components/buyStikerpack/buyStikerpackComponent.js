import BaseComponent from "../baseComponent";
import {bus, data, router} from "../../main";
import {buy} from "../../handlers/stikersHandlers";
import './buy-stikerpack.scss';

const buyStikerpackTemplate = require('./buyStikerpack.pug');

class BuyStikerpackComponent extends BaseComponent {

	createHandler() {
		const closeBtn = document.querySelector('.overlay_button__image-container__icon');
		closeBtn.addEventListener('click', () => {
			router.return();
		});
		const ok = document.querySelector('.wrkspace-form__form__submit-button');
		ok.addEventListener('click', () => {
		    router.return();
		    console.log("asdf", data.getUserId(), data.getChosenStickerpack());
		    buy(data.getUserId(), data.getChosenStickerpack());
		});

	}

	renderTo() {
		this._parent.insertAdjacentHTML("beforebegin", this.render());
		this.createHandler();
	}

	deleteSelf() {
		const parentContainer = this._parent.parentNode;
		parentContainer.firstChild.remove();
		parentContainer.firstChild.remove();
		parentContainer.firstChild.remove();

	}

	render() {
		return buyStikerpackTemplate(this._data);
	}
}

export default BuyStikerpackComponent;