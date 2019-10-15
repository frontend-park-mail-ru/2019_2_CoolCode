import BaseView from './baseView';
import {createLogin} from "../modules/API/login";
const loginTemplate = require('../components/Login/login.pug');

class loginView extends BaseView {
	constructor (data, parent) {
		super (data, parent);
		this._bus.on('login', createLogin);
	};
	show() {
		this.render();
		this._bus.emit('login', this._parent);

	}
	render() {
		this._parent.innerHTML = loginTemplate(this._data);
	}
}

export default loginView;