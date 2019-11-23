import BaseView from './baseView';
import {router, data, promiseMaker, bus, componentsStorage} from "../main";
import BasicsComponent from "../components/Basics/basicsComponent";
import RegisterComponent from "../components/RegisterBlock/registerComponent";
import {clickSupport} from "../handlers/supportHandlers";

class loginView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "login", user:{}, loggedIn: null}, parent);
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
		let login = new RegisterComponent(this._data, this._parent);
		this._parent.querySelector('.primary-container').innerHTML += login.render();
		componentsStorage.clear();
	}
}

export default loginView;