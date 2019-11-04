import BaseView from './baseView';
import handleLogout from "../modules/API/logout";

class logoutView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "logout", user:{}, loggedIn: null}, parent);
		this._bus.on('logout', handleLogout);
	};
	show() {
		this._bus.emit('logout', null, this._parent);

	}
	render() {
		this._parent.innerHTML = '';
	}

}

export default logoutView;