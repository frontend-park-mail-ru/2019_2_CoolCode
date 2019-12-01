import BaseView from './baseView';
import {bus, componentsStorage, data, promiseMaker} from "../main";
import BasicsComponent from "../components/Basics/basicsComponent";
import MainPageComponent from "../components/MainPage/mainPageComponent";

class mainPageView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "mainPage", user: {}, loggedIn: null}, parent);
	};

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
	}

	show() {
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			this.setContent();
			this.render();
		});

	}
	async drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
		await promiseMaker.createPromise('getHeaderPhoto');
	}
	render() {
		this.drawBasics();
		let mainPage = new MainPageComponent(this._data, this._parent);
		this._parent.querySelector('.primary-container').innerHTML += mainPage.render();
		componentsStorage.clear();
	}
}

export default mainPageView;
