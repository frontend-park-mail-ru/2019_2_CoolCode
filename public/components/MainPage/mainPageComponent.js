import BaseComponent from "../baseComponent";
const mainPageTemplate = require('./mainPage.pug');

class MainPageComponent extends BaseComponent {

	render() {
		return mainPageTemplate(this._data);
	}
}

export default MainPageComponent;