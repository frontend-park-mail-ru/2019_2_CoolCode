import BaseView from './baseView';
import {data, bus, router, promiseMaker, appLocalStorage, componentsStorage} from "../main";
import BasicsComponent from "../components/Basics/basicsComponent";
import MainPageComponent from "../components/MainPage/mainPageComponent";

class mainPageView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "mainPage", loggedIn: null}, parent);
	};

	setContent() {
		this._data.loggedIn = data.getLoggedIn();
	}

	show() {
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			this.setContent();
			this.render();
		});

	}
	drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
	}
	render() {
		this.drawBasics();
		let mainPage = new MainPageComponent(this._data, this._parent);
		this._parent.querySelector('.primary-container').innerHTML += mainPage.render();
		componentsStorage.clear();
	}
}

export default mainPageView;
