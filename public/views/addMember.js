import BaseView from "./baseView";
import {data, router} from "../main";
import {
	addMemberinChannel,
	addMemberOverlayHndlr,
	arrayMembers,
	menuHandlersAdd
} from "../handlers/channelViewHandlers";
import AddMemberComponent from "../components/ChannelBlock/addMemberComponent";

class addMember extends BaseView {
	contentListRootSelector = '.header';

	constructor (data, parent) {
		super({viewType: "addMember", user:{}, membersOfWrkS:[], currentChannel:[], loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.membersOfWrkS = data.getCurrentWrkspace().Members;
		this._data.currentChannel = data.getCurrentChannel();
	}
	show() {
		if (!data.getLoggedIn()) router.go('profileView');
		if (document.querySelector(this.contentListRootSelector) === null) router.return();
		else {
			this.setContent();
			this.render();
			addMemberOverlayHndlr();

		}
	}
	render() {
		let addMemberForm = new AddMemberComponent(this._data, this._parent);
		const contentListRoot = document.querySelector(this.contentListRootSelector);
		contentListRoot.insertAdjacentHTML("beforebegin", addMemberForm.render());
		addMemberForm.renderContent();
	}
}

export default addMember;