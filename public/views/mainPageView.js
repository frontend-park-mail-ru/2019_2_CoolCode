import BaseView from './baseView';
import createMainPage from "../modules/API/mainpage";
const bodyTemplate = require('../components/MainPage/body.pug');
const containerTemplate = require('../components/Container/container.pug');
const headerTemplate = require('../components/Header/header.pug');
import {data} from '../main';

class mainPageView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "mainPage", user:{}, loggedIn: null}, parent);
		this._bus.on('fetchUsers', createMainPage);
	};
	setUserStatus() {
		console.log(data.loggedIn);
		this._data.loggedIn = data.loggedIn;

	}
	show() {
		this.setUserStatus();
		if (this._data.loggedIn === null || this._data.loggedIn == undefined) {
			this._bus.emit('fetchUsers', this._parent);
		}
		else {
			this.render();
		}
	}
	drawBasics() {
		this._parent.innerHTML = headerTemplate(this._data);
		this._parent.innerHTML += containerTemplate(this._data);
	}
	render() {
		this.drawBasics();
		this._parent.querySelector('.bem-primary-container').innerHTML += bodyTemplate(this._data);
	}
}

export default mainPageView;
