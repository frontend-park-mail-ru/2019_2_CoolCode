import BaseView from "./baseView";
import {
	createMessageFoundChannelBlockHndlr,
	createMessageFoundChatBlockHndlr,
	createUserBlockHndlr
} from "../handlers/searchViewHandlers";
import {componentsStorage, data, router} from "./../main";

class searchView extends BaseView {

	constructor (data, parent) {
		super({viewType: "search", user:{}, searchUsers:[], searchMessages:[], loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.searchUsers = data.getLastSearchUsers();
		this._data.searchMessages = data.getLastSearchMessagesFull();
	}

	show() {
		if (data.getLastSearchUsers() && data.getLastSearchUsers().length === 0 ||
		data.getLastSearchMessages() && data.getLastSearchMessages().length === 0 ) {
			router.go('mainPageView');
		} /*checking if reloading page*/
		else {
			this.setContent();
			this.render();
			createUserBlockHndlr('.all-chats-window');
			createMessageFoundChatBlockHndlr();
			createMessageFoundChannelBlockHndlr();
		}
	}
	render() {
		let leftColumn = componentsStorage.getLeftColumn();
		leftColumn.renderSearchContent(this._data);
	}

}

export default searchView;
