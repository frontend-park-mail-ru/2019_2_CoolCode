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
		const header = componentsStorage.getHeader(this._data, this._parent, this._parent);
	}
	render() {
		this.drawBasics();
		const login = new RegisterComponent(this._data, this._parent);
		this._parent.querySelector('.primary-container').innerHTML += login.render();
		componentsStorage.clear();
	}
}

export default loginView;