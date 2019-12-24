import BaseComponent from "../../../../baseComponent";
import './channel-info.scss';

const ChannelInfoTemplate = require('./channelInfo.pug');

class ChannelInfoComponent extends BaseComponent {

	channelInfoElement;

	createElement() {
		this.channelInfoElement = document.createElement('div');
		this.channelInfoElement.className = 'channel-info channel-info_size channel-info_style';
		this.channelInfoElement.id = `channel-info-${this._data.id}`;
	}

	createHandlers() {

	}

	render() {
		if (this._data) {
			this.createElement();
			this.channelInfoElement.innerHTML = ChannelInfoTemplate(this._data);
			return this.channelInfoElement;
		}
	}
}

export default ChannelInfoComponent;