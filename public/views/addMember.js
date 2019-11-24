import BaseView from "./baseView";
import {data, router} from "../main";
import {addMemberOverlayHndlr, menuHandlersAdd} from "../handlers/channelViewHandlers";
import AddMemberComponent from "../components/ChannelBlock/addMemberComponent";

class addMember extends BaseView {
	contentListRootSelector = '.header';

	constructor (data, parent) {
		super({viewType: "addMember", user:{}, membersOfWrkS:{},membersOfChannel:{}, loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
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

	}
}

export default addMember;