import BaseComponent from "../../baseComponent";
import {data, bus, router} from "../../../main";
import MessageComponent from "../Message/MessageComponent";
import WrkSpaceComponent from "./WrkSpace/WrkSpaceComponent";
const WrkSpacesBlockTemplate = require('./wrkspacesBlock.pug');

import './bemWrkspacesBlock/bem-wrkspaces-block.scss';

class WrkSpacesBlockComponent extends BaseComponent {

    contentListRootSelector = '.wrkspaces-block__content';

    drawSelected() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	const selectedMessage = document.querySelector('.chat-block_selected');
    	const selectedChannel = contentListRoot.querySelector('.wrkspace-chann_selected');
    	if (selectedMessage) {
    		selectedMessage.classList.remove('chat-block_selected');
    	}
    	if (selectedChannel) {
    		selectedChannel.classList.remove('wrkspace-chann_selected');
    	}
    	const channelElement = contentListRoot.querySelector(`#channel-${this._data.currentChannel.id}`);
    	channelElement.className = `${channelElement.className} wrkspace-chann_selected`;
    }

    render() {
    	return WrkSpacesBlockTemplate(this._data);
    }

    renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.wrkSpaces) {
    		this._data.wrkSpaces.forEach((wsp) => {
    			const wrkSpace = new WrkSpaceComponent(wsp, contentListRoot);
    			contentListRoot.appendChild(wrkSpace.render());
    		});
    	}
    }
}

export default WrkSpacesBlockComponent;