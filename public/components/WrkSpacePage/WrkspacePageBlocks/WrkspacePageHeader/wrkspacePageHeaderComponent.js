import BaseComponent from "../../../baseComponent";
const WrkspacePageHeaderTemlate = require('./wrkspacePageHeader.pug');

import './wrkspace-page-header.css';
import './WrkspacePageDropdown/wrkspace-page-dropdown.css';

class WrkspacePageHeaderComponent extends BaseComponent {

	createHandlers() {

	}

	render() {
		return WrkspacePageHeaderTemlate(this._data);
	}
}

export default WrkspacePageHeaderComponent;