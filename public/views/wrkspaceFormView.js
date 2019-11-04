import BaseView from "./baseView";
import {data, bus, router} from "../main";
import {overlayInteration, workspaceFormInteration} from "../modules/API/wrkspaceFormCreation";
import WorkSpaceComponent from "../components/WrkspaceForm/wsFormComponent";

const wsForm = require('../components/WrkspaceForm/wsForm.pug');

class wrkspaceFormView extends BaseView {

	contentListRootSelector = '.bem-header';

	constructor (data, parent) {
		super({viewType: "wrkspaceForm", user:{}, loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
	}

	show() {
		if (!data.getLoggedIn()) router.go('/profile');
		else {
			this.setContent();
			this.render();
			workspaceFormInteration();
			overlayInteration();
		}
	}
	render() {
		let wsForm = new WorkSpaceComponent(this._data, this._parent);
		const contentListRoot = document.querySelector(this.contentListRootSelector);
		contentListRoot.insertAdjacentHTML("beforebegin", wsForm.render());
	}

}
export default wrkspaceFormView;
