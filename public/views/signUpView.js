import BaseView from './baseView';
import createSignUp from "../modules/API/signup";
import {data, bus, router, promiseMaker} from "../main";
import BasicsComponent from "../components/Basics/basicsComponent";
import RegisterComponent from "../components/Register/registerComponent";
const signupTemplate = require('../components/Register/register.pug');
const containerTemplate = require('../components/Basics/Container/container.pug');
const headerTemplate = require('../components/Basics/Header/header.pug');

class signUpView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "signUp", user:{}, loggedIn: null}, parent);
		bus.on('signUp', createSignUp);
	};
	show() {
		this.render();
		promiseMaker.createPromise('signUp', this._parent).then(() => console.log('BUSSSS'));

	}
	drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
	}
	render() {
		this.drawBasics();
		let signup = new RegisterComponent(this._data, this._parent);
		this._parent.querySelector('.primary-container').innerHTML += signup.render();
	}
}

export default signUpView;