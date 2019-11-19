import BaseComponent from "../../../baseComponent";
const WrkspacePageHeaderTemlate = require('./wrkspacePageHeader.pug');

import './wrkspace-page-header.css.css';

class WrkspacePageHeaderComponent extends BaseComponent {

    render() {
        return WrkspacePageHeaderTemlate(this._data);
    }
}

export default WrkspacePageHeaderComponent;