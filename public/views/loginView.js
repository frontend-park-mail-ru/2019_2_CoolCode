import BaseView from './baseView';
import {createLogin} from "../modules/API/login";
import Data from "../entities/Data";
import {router, data, promiseMaker, bus} from "../main";

const loginTemplate = require('../components/Register/register.pug');
const containerTemplate = require('../components/Container/container.pug');
const headerTemplate = require('../components/Header/header.pug');

class loginView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "login", user:{}, loggedIn: null}, parent);
		bus.on('login', createLogin);
	};
	async show() {
		if (data.loggedIn) {
			data.clear();
			router.go('/logout');
		}
		this.render();

		promiseMaker.createPromise('login', this._parent).then(() => console.log('BUSSSS'));
		console.log('HI');

	}
	drawBasics() {
		this._parent.innerHTML = headerTemplate(this._data);
		this._parent.innerHTML += containerTemplate(this._data);
	}
	render() {
		this.drawBasics();
		this._parent.querySelector('.bem-primary-container').innerHTML += loginTemplate(this._data);
	}
}

export default loginView;