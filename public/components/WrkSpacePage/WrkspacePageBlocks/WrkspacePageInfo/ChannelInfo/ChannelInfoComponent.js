import BaseComponent from "../../../../baseComponent";
import './channel-info.scss';

const ChannelInfoTemlate = require('./channelInfo.pug');

class ChannelInfoComponent extends BaseComponent {

    createHandlers() {

    }

    render() {
        return ChannelInfoTemlate(this._data);
    }
}

export default ChannelInfoComponent;