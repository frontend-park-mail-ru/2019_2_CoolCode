import BaseComponent from "../../../baseComponent";
import './wrkspace-page-header.scss';
import './WrkspacePageDropdown/wrkspace-page-dropdown.css';

const WrkspacePageHeaderTemlate = require('./wrkspacePageHeader.pug');

class WrkspacePageHeaderComponent extends BaseComponent {

	createHandlers() {

	}

	render() {
		return WrkspacePageHeaderTemlate(this._data);
	}
}

export default WrkspacePageHeaderComponent;