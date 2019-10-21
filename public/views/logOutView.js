import BaseView from './baseView';
import handleLogout from "../modules/API/logout";

class logoutView extends BaseView {
	constructor (data, parent) {
		super (data, parent);
		this._bus.on('logout', handleLogout);
	};
	show() {
		this._bus.emit('logout', this._parent);

	}
	render() {
		this._parent.innerHTML = '';
	}

}

export default logoutView;