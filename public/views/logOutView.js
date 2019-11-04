import BaseView from './baseView';
import handleLogout from "../modules/API/logout";
import {data, bus, router} from "../main";

class logoutView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "logout", user:{}, loggedIn: null}, parent);
		bus.on('logout', handleLogout);
	};
	show() {
		bus.emit('logout', null, this._parent);

	}
	render() {
		this._parent.innerHTML = '';
	}

}

export default logoutView;