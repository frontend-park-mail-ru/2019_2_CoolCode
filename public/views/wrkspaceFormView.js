import BaseView from "./baseView";
import {data, router} from "../main";
import {foundUsersClick} from "../modules/API/chat";
import UserComponent from "../components/User/User";
import {getUserPhoto} from "../modules/API/profile";
import {overlayInteration, workspaceFormInteration} from "../modules/API/wrkspaceFormCreation";

const wsForm = require('../components/WrkSpace/wsForm.pug');
const channelForm = require('../components/WrkSpace/Channels/creationForm.pug');

class wrkspaceFormView extends BaseView {

	contentListRootSelector = '.bem-header';

	constructor (data, parent) {
		super({viewType: "wrkspaceForm", user:{}, users:[], loggedIn: null}, parent);
	}

	setUser() {
		this._data.user = data.user;
		this._data.loggedIn = true;
	}

	show() {
		if (!data.loggedIn) router.go('/profile');
		else {
			this.setUser();
			this.render();
			workspaceFormInteration();
			overlayInteration();

		}
	}
	render() {
		const contentListRoot = document.querySelector(this.contentListRootSelector);
		contentListRoot.insertAdjacentHTML("beforebegin", wsForm());
	}

}
export default wrkspaceFormView;
