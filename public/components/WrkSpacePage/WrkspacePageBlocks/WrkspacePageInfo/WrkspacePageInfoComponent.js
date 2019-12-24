import BaseComponent from "../../../baseComponent";
import {bus} from "../../../../main";
import './wrkspace-info.scss';
import ChannelInfoComponent from "./ChannelInfo/ChannelInfoComponent";

const WrkspacePageSearchTemlate = require('./wrkspacePageInfo.pug');

class WrkspacePageInfoComponent extends BaseComponent {

    contentListRootSelector = '.wrkspace-info__msgwindow';

    createHandlers() {

    }

    renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	contentListRoot.innerHTML = "";

    	if (this._data.currentWrkspace.channels) {
    		this._data.currentWrkspace.channels.forEach((channel) => {
    			const channelComponent = new ChannelInfoComponent(channel, contentListRoot);
    			contentListRoot.appendChild(channelComponent.render());
    			//bus.emit('getUserPhoto', null, user.id, 'search', userComponent.getPhotoBlock());
    		});
    	}
    }

    render() {
    	return WrkspacePageSearchTemlate(this._data);
    }
}

export default WrkspacePageInfoComponent;