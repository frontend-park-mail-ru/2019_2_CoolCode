import BaseView from "./baseView";
import {
	createMessageFoundChannelBlockHndlr,
	createMessageFoundChatBlockHndlr,
	createUserBlockHndlr
} from "../handlers/searchViewHandlers";
import {appLocalStorage, bus, componentsStorage, data, router} from "./../main";

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
		if (appLocalStorage.getUser()) {
			bus.emit('setUser', null, appLocalStorage.getUser());
		}
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
		const form = componentsStorage.returnForm();
		if (form) {
			componentsStorage.clearForm();
		}
		const leftColumn = componentsStorage.getLeftColumn(this._data, this._parent, '.column_left');
		leftColumn.renderSearchContent(this._data);
	}

}

export default searchView;
