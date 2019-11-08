import BaseView from './baseView';
import {createLogin} from "../modules/API/login";
import {router, data, promiseMaker, bus} from "../main";
import BasicsComponent from "../components/Basics/basicsComponent";
import RegisterComponent from "../components/Register/registerComponent";

class loginView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "login", user:{}, loggedIn: null}, parent);
		bus.on('login', createLogin);
	};

	show() {
		this.render();

		promiseMaker.createPromise('login', this._parent).then(() => console.log('BUSSSS'));
		console.log('HI');

	}
	drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
	}
	render() {
		this.drawBasics();
		let login = new RegisterComponent(this._data, this._parent);
		this._parent.querySelector('.primary-container').innerHTML += login.render();
	}
}

export default loginView;