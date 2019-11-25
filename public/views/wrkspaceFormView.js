import BaseView from "./baseView";
import {data, router} from "../main";
import {createOverlayHndlr, createWrkSpaceCreateSubmitHndlr} from "../handlers/creationFormHandlers";
import CreationFormComponent from "../components/CreationForm/creationFormComponent";

class wrkspaceFormView extends BaseView {

	contentListRootSelector = '.header';

	constructor (data, parent) {
		super({viewType: "wrkspaceForm", user:{}, loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
	}

	show() {
		if (!data.getLoggedIn()) router.go('profileView');
		else {
			this.setContent();
			this.render();
			createWrkSpaceCreateSubmitHndlr();
			createOverlayHndlr();
		}
	}
	render() {
		let wsForm = new CreationFormComponent(this._data, this._parent);
		const contentListRoot = document.querySelector(this.contentListRootSelector);
		contentListRoot.insertAdjacentHTML("beforebegin", wsForm.render());
	}

}
export default wrkspaceFormView;
