import BaseView from "./baseView";
import {createUserBlockHndlr} from "../handlers/searchViewHandlers";
import {data, bus, router, componentsStorage} from "../main";
import {createWorkspaceButtonHndlr} from "../handlers/searchFormHandlers";

class searchView extends BaseView {

	constructor (data, parent) {
		super({viewType: "search", user:{}, searchUsers:[], loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.searchUsers = data.getLastSearchUsers();
	}

	show() {
		if (!data.getLoggedIn()) router.go('/'); /*checking if reloading page*/
		else {
			this.setContent();
			this.render();
			createUserBlockHndlr();
			createWorkspaceButtonHndlr();
		}
	}
	render() {
		let leftColumn = componentsStorage.getLeftColumn();
		leftColumn.renderSearchContent(this._data.searchUsers);
	}

}

export default searchView;
