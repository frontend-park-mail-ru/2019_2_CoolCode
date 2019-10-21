import BaseView from './baseView';
import {createLogin} from "../modules/API/login";
import Data from "../entities/Data";
import {router, data} from "../main";

const loginTemplate = require('../components/Login/login.pug');

class loginView extends BaseView {
	constructor (data, parent) {
		super (data, parent);
		this._bus.on('login', createLogin);
	};
	show() {
		if (data.loggedIn) {
			data.clear();
			router.go('/logout');
		}
		this.render();
		this._bus.emit('login', this._parent);

	}
	render() {
		this._parent.innerHTML = loginTemplate(this._data);
	}
}

export default loginView;