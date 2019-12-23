import BaseComponent from "../baseComponent";
import './bemMainPage/bem-main-page.scss';

const mainPageTemplate = require('./mainPage.pug');

class MainPageComponent extends BaseComponent {

	renderTo(rootSelector) {
		this._parent.querySelector(rootSelector).innerHTML = "";
		this._parent.querySelector(rootSelector).innerHTML = this.render();
	}

	render() {
		return mainPageTemplate(this._data);
	}
}

export default MainPageComponent;