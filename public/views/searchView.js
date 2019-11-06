import BaseView from "./baseView";
import {createChatHndlr} from "../handlers/searchViewHandlers";
import {data, bus, router, componentsStorage} from "../main";
import {wsBTM} from "../modules/API/wrkspaceFormCreation";
import {createChannels} from "../modules/API/channelCreation";

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
			createChatHndlr();
			createChannels();
			wsBTM();
		}
	}
	render() {
		let leftColumn = componentsStorage.getLeftColumn();
		leftColumn.renderSearchContent(this._data.searchUsers);
	}

}

export default searchView;
