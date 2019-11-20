import BaseComponent from "../../../baseComponent";
const WrkspacePageSearchTemlate = require('./wrkspacePageSearch.pug');

import './wrkspace-search.css';

class WrkspacePageSearchComponent extends BaseComponent {

	createHandlers() {

	}

	render() {
		return WrkspacePageSearchTemlate(this._data);
	}
}

export default WrkspacePageSearchComponent;