import BaseView from './baseView';
import createSignUp from "../modules/API/signup";
import {router, data} from "../main";
import Data from "../entities/Data";
const signupTemplate = require('../components/Register/register.pug');
const containerTemplate = require('../components/Container/container.pug');
const headerTemplate = require('../components/Header/header.pug');

class signUpView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "signUp", user:{}, loggedIn: null}, parent);
		this._bus.on('signUp', createSignUp);
	};
	show() {
		if (data.loggedIn) {
			data.clear();
			router.go('/logout');
		}
		this.render();
		this._bus.emit('signUp', null, this._parent);

	}
	drawBasics() {
		this._parent.innerHTML = headerTemplate(this._data);
		this._parent.innerHTML += containerTemplate(this._data);
	}
	render() {
		this.drawBasics();
		this._parent.querySelector('.bem-primary-container').innerHTML += signupTemplate(this._data);
	}
}

export default signUpView;