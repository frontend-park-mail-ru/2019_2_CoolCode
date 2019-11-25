import BaseView from "./baseView";
import {data, router} from "../main";
import {createChannelCreateSubmitHndlr, createOverlayHndlr} from "../handlers/creationFormHandlers";
import CreationFormComponent from "../components/CreationForm/creationFormComponent";

class channelFormView extends BaseView {

    contentListRootSelector = '.header';

    constructor (data, parent) {
    	super({viewType: "channelForm", user:{}, loggedIn: null}, parent);
    }

    setContent() {
    	this._data.user = data.getUser();
    	this._data.loggedIn = data.getLoggedIn();
    }

    show(...args) {
    	if (!data.getLoggedIn()) router.go('profileView');
    	else {
    		this.setContent();
    		this.render();
    		createChannelCreateSubmitHndlr(args);
    		createOverlayHndlr();
    	}
    }

    render() {
    	let channelForm = new CreationFormComponent(this._data, this._parent);
    	const contentListRoot = document.querySelector(this.contentListRootSelector);
    	contentListRoot.insertAdjacentHTML("beforebegin", channelForm.render());
    }

}
export default channelFormView;
