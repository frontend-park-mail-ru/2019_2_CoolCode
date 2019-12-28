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
		const ok = document.querySelector('.buy-stickerpack__button-row__button');
		ok.addEventListener('click', () => {
		    router.return();
		    buy(data.getUserId(), data.getChosenStickerpack());
		});

	}

	renderTo() {
		this._parent.insertAdjacentHTML("beforebegin", this.render());
		this.createHandler();
	}

	deleteSelf() {
		const parentContainer = this._parent.parentNode;
		for (let i = 0; i < 3; i++) {
			parentContainer.removeChild(parentContainer.firstElementChild);
		}
	}

	render() {
		return buyStikerpackTemplate(this._data);
	}
}

export default BuyStikerpackComponent;