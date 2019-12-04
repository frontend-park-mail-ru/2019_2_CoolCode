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
		const header = componentsStorage.getHeader(this._data, this._parent, this._parent);
		await promiseMaker.createPromise('getHeaderPhoto');
	}

	render() {
		this.drawBasics();
		const mainPage = new MainPageComponent(this._data, this._parent);
		mainPage.renderTo('.primary-container');
		componentsStorage.clear();
	}
}

export default mainPageView;
