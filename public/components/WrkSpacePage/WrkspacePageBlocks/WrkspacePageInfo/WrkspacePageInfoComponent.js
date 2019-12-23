import BaseComponent from "../../../baseComponent";
import {bus} from "../../../../main";
import ChannelInfoComponent from "./ChannelInfo/ChannelInfoComponent";

const WrkspacePageSearchTemlate = require('./wrkspacePageInfo.pug');

class WrkspacePageSearchComponent extends BaseComponent {

    contentListRootSelector = '.wrkspace-search__msgwindow';

    createHandlers() {

    }

    renderContent() {
        const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
        contentListRoot.innerHTML = "";

        if (this._data.currentWrkspace.channels) {
            this._data.currentWrkspace.channels.forEach((channel) => {
                const channelComponent = new ChannelInfoComponent(channel, contentListRoot);
                const userBlock = document.createElement('div');
                userBlock.className = 'user-found user-found_size wrkspace-search__user-found_style';
                userBlock.id = "search-" + user.id;
                userBlock.innerHTML = userComponent.render();
                contentListRoot.appendChild(userBlock);
                bus.emit('getUserPhoto', null, user.id, 'search', userComponent.getPhotoBlock());
            });
        }
    }

    render() {
        return WrkspacePageSearchTemlate(this._data);
    }
}

export default WrkspacePageSearchComponent;