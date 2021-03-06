import BaseView from "./baseView";
import {data, promiseMaker, router} from "../main";
import {createAddChannelMemberHndlr} from "../handlers/channelViewHandlers";
import AddMemberComponent from "../components/addMemberBlock/addMemberComponent";
import {createOverlayHndlr} from "../handlers/creationFormHandlers";

class addMemberView extends BaseView {
	contentListRootSelector = '.header';

	constructor (data, parent) {
		super({viewType: "addMember", user:{}, membersOfWrkS:[], currentChannel:[], loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.wrkspaceMembers = data.getCurrentWrkspaceUsers();
		this._data.currentChannel = data.getCurrentChannel();
	}
	show() {
		if (!data.getLoggedIn()) router.go('profileView');
		if (document.querySelector(this.contentListRootSelector) === null) router.return();
		else {
			promiseMaker.createPromise('getWrkspaceUsers').then(() => {
				this.setContent();
				this.render();
				createOverlayHndlr();
				createAddChannelMemberHndlr();
			});

		}
	}
	render() {
		let addMemberForm = new AddMemberComponent(this._data, this._parent);
		const contentListRoot = document.querySelector(this.contentListRootSelector);
		contentListRoot.insertAdjacentHTML("beforebegin", addMemberForm.render());
		addMemberForm.renderContent();
	}
}

export default addMemberView;