import BaseComponent from "../../../baseComponent";
import {bus, promiseMaker, data} from "../../../../main";
import './wrkspace-info.scss';
import ChannelInfoComponent from "./ChannelInfo/ChannelInfoComponent";

const WrkspacePageSearchTemlate = require('./wrkspacePageInfo.pug');

class WrkspacePageInfoComponent extends BaseComponent {

    contentListRootSelector = '.wrkspace-info__msgwindow';

    createHandlers() {

    }

    async renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	contentListRoot.innerHTML = "";

    	if (this._data.currentWrkspace.channels) {
    		for (const channel of this._data.currentWrkspace.channels) {
    			await promiseMaker.createPromise('getChannelCreatorInfo', channel.creator_id);
    			const creator = data.getChannelCreator();
    			const channelComponent = new ChannelInfoComponent({
    				channel: channel,
    				creator: creator
    			}, contentListRoot);
    			contentListRoot.appendChild(channelComponent.render());
    			await channelComponent.renderContent();
    			bus.emit('getChannelInfoPhoto', null, channel.creator_id, channel.id, "channel_info", channelComponent.getPhotoBlock());
    		}
    	}
    }

    render() {
    	return WrkspacePageSearchTemlate(this._data);
    }
}

export default WrkspacePageInfoComponent;