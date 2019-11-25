import BaseView from './baseView';
import {bus} from "../main";

class logoutView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "logout", user:{}, loggedIn: null}, parent);
	};
	show() {
		bus.emit('logout', null, this._parent);

	}
	render() {
		this._parent.innerHTML = '';
	}

}

export default logoutView;