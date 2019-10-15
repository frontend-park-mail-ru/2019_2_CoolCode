import BaseView from './baseView';
import createMainPage from "../modules/API/mainpage";
const bodyTemplate = require('../components/MainPage/body.pug');
const headerTemplate = require('../components/Header/header.pug');

class mainPageView extends BaseView {
	constructor (data, parent) {
		super (data, parent);
		this._bus.on('fetchUsers', createMainPage);
		this._bus.on('userLoggedIn', this.userStatus.bind(this));
	};
	userStatus(loggedIn) {
		this._data["login"] = loggedIn;

	}
	show() {
		if (!("login" in this._data))
			this._bus.emit('fetchUsers', this._parent);
		else this.render();
	}
	render() {
		this._parent.innerHTML = '';
		this._parent.innerHTML = headerTemplate(this._data);
		this._parent.innerHTML += bodyTemplate(this._data);
	}
}

export default mainPageView;
