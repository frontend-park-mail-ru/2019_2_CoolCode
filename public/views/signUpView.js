import BaseView from './baseView';
import {bus, componentsStorage} from "../main";
import BasicsComponent from "../components/Basics/basicsComponent";
import RegisterComponent from "../components/RegisterBlock/registerComponent";

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
	}
	render() {
		this.drawBasics();
		let signup = new RegisterComponent(this._data, this._parent);
		this._parent.querySelector('.primary-container').innerHTML += signup.render();
		componentsStorage.clear();
	}
}

export default signUpView;