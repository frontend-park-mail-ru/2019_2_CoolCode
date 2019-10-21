import BaseView from './baseView';
import createSignUp from "../modules/API/signup";
import {router, data} from "../main";
import Data from "../entities/Data";
const signupTemplate = require('../components/Signup/signup.pug');

class signUpView extends BaseView {
	constructor (data, parent) {
		super (data, parent);
		this._bus.on('signUp', createSignUp);
	};
	show() {
		if (data.loggedIn) {
			data.clear();
			router.go('/logout');
		}
		this.render();
		this._bus.emit('signUp', this._parent);

	}
	render() {
		this._parent.innerHTML = signupTemplate(this._data);
	}
}

export default signUpView;