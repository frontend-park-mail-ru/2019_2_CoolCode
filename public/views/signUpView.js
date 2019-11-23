import BaseView from './baseView';
import {data, bus, router, promiseMaker, componentsStorage} from "../main";
import BasicsComponent from "../components/Basics/basicsComponent";
import RegisterComponent from "../components/RegisterBlock/registerComponent";
import {clickSupport} from "../handlers/supportHandlers";
const signupTemplate = require('../components/RegisterBlock/register.pug');
const containerTemplate = require('../components/Basics/PrimaryContainer/container.pug');
const headerTemplate = require('../components/Basics/Header/header.pug');

class signUpView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "signUp", user:{}, loggedIn: null}, parent);
	};
	show() {
		this.render();
		bus.emit('createRegisterForm', null, this._data.viewType);

	}
	drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
		clickSupport();
	}
	render() {
		this.drawBasics();
		let signup = new RegisterComponent(this._data, this._parent);
		this._parent.querySelector('.primary-container').innerHTML += signup.render();
		componentsStorage.clear();
	}
}

export default signUpView;