import BaseComponent from "../baseComponent";
const mainPageTemplate = require('./mainPage.pug');

import './bemMainPage/bem-main-page.css';

class MainPageComponent extends BaseComponent {

	render() {
		return mainPageTemplate(this._data);
	}
}

export default MainPageComponent;