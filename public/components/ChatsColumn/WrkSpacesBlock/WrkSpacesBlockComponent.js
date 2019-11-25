import BaseComponent from "../../baseComponent";
import {data, bus, router} from "../../../main";
import MessageComponent from "../Message/MessageComponent";
import WrkSpaceComponent from "./WrkSpace/WrkSpaceComponent";
const WrkSpacesBlockTemplate = require('./wrkspacesBlock.pug');

import './bemWrkspacesBlock/bem-wrkspaces-block.css';

class WrkSpacesBlockComponent extends BaseComponent {

    contentListRootSelector = '.wrkspaces-block__content';

    render() {
    	return WrkSpacesBlockTemplate(this._data);
    }

    renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.wrkspaces) {
    		this._data.wrkspaces.forEach((wsp) => {
    			const wrkSpace = new WrkSpaceComponent(wsp, contentListRoot);
    			contentListRoot.appendChild(wrkSpace.render());
    		});
    	}
    }
}

export default WrkSpacesBlockComponent;