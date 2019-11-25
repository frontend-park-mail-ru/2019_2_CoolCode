import BaseComponent from "../baseComponent";
import './bemMainPage/bem-main-page.css';

const mainPageTemplate = require('./mainPage.pug');

class MainPageComponent extends BaseComponent {

	render() {
		return mainPageTemplate(this._data);
	}
}

export default MainPageComponent;