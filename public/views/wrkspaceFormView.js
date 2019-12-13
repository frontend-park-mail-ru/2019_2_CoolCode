import BaseView from "./baseView";
import {appLocalStorage, bus, componentsStorage, data, router} from "../main";
import {createOverlayHndlr, createWrkSpaceCreateSubmitHndlr} from "../handlers/creationFormHandlers";
import CreationFormComponent from "../components/CreationForm/creationFormComponent";

class wrkspaceFormView extends BaseView {

	constructor (data, parent) {
		super({viewType: "wrkspaceForm", user:{}, loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._parent = document.querySelector('.header');

	}

	show() {
		if (!data.getLoggedIn()) router.go('profileView');
		if (appLocalStorage.getUser()) {
			bus.emit('setUser', null, appLocalStorage.getUser());
		}
		this.setContent();
		this.render();
		createWrkSpaceCreateSubmitHndlr();
		createOverlayHndlr();
	}

	render() {
		//debugger;
		const creationForm = componentsStorage.getForm(this._data, this._parent);
	}

}
export default wrkspaceFormView;
