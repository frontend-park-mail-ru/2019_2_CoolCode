import BaseView from './baseView';
import {bus, componentsStorage, promiseMaker} from "../main";
import BasicsComponent from "../components/Basics/basicsComponent";
import RegisterComponent from "../components/RegisterBlock/registerComponent";

class loginView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "login", user:{}, loggedIn: null}, parent);
	};

	show() {
		this.render();
		bus.emit('createRegisterForm', null, this._data.viewType);
	}
	async drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
		await promiseMaker.createPromise('getHeaderPhoto');
	}
	render() {
		this.drawBasics();
		let login = new RegisterComponent(this._data, this._parent);
		this._parent.querySelector('.primary-container').innerHTML += login.render();
		componentsStorage.clear();
	}
}

export default loginView;