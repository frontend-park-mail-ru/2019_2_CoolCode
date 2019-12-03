import BaseView from "./baseView";
import {appLocalStorage, bus, componentsStorage, data, router} from "../main";
import {createChannelCreateSubmitHndlr, createOverlayHndlr} from "../handlers/creationFormHandlers";
import CreationFormComponent from "../components/CreationForm/creationFormComponent";

class channelFormView extends BaseView {

	constructor (data, parent) {
    	super({viewType: "channelForm", user:{}, loggedIn: null}, parent);
	}

	setContent() {
    	this._data.user = data.getUser();
    	this._data.loggedIn = data.getLoggedIn();
		this._parent = document.querySelector('.header');
	}

	show(...args) {
    	if (!data.getLoggedIn()) router.go('profileView');
    	if (appLocalStorage.getUser()) {
    		bus.emit('setUser', null, appLocalStorage.getUser());
    	}
    	this.setContent();
    	this.render();
    	createChannelCreateSubmitHndlr(args);
    	createOverlayHndlr();

	}

	render() {
		const creationForm = componentsStorage.getForm(this._data, this._parent);
	}

}
export default channelFormView;
