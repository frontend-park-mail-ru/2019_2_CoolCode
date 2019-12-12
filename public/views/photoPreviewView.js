import BaseView from "./baseView";
import {appLocalStorage, bus, componentsStorage, data, router} from "../main";
import {createOverlayHndlr, createWrkSpaceCreateSubmitHndlr} from "../handlers/creationFormHandlers";

class photoPreviewView extends BaseView {

	constructor (data, parent) {
		super({viewType: "photoPreview", user:{}, messageId:null, loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._parent = document.querySelector('.header');

	}

	show(args) {
		if (!data.getLoggedIn()) router.go('profileView');
		if (appLocalStorage.getUser()) {
			bus.emit('setUser', null, appLocalStorage.getUser());
		}
		this._data.messageId = args[2];
		this.setContent();
		this.render();
		createOverlayHndlr();
	}

	render() {
		const photoPreviewForm = componentsStorage.getForm(this._data, this._parent);
	}

}
export default photoPreviewView;
