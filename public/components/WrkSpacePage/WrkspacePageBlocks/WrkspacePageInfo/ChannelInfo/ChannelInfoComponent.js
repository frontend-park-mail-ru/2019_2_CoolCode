import BaseComponent from "../../../../baseComponent";
import './channel-info.scss';
import {bus, data, promiseMaker, router} from "../../../../../main";
import {KEYWORDS} from "../../../../../constants/config";

const ChannelInfoTemplate = require('./channelInfo.pug');

class ChannelInfoComponent extends BaseComponent {

	channelInfoElement;
	photoBlock = '.channel-info__creator__image-row__image';
	contentListRootSelector = '.channel-info__other__msgwindow';

	getPhotoBlock() {
		return this.photoBlock;
	}

	createElement() {
		this.channelInfoElement = document.createElement('div');
		this.channelInfoElement.className = 'channel-info channel-info_size channel-info_style';
		this.channelInfoElement.id = `channel_info-${this._data.channel.id}`;
	}

	createHandlers() {
		const name = this.channelInfoElement.querySelector(".channel-info__name");
		const id = this.channelInfoElement.id.split("-")[1];
		name.addEventListener("click", () => {
			router.open(KEYWORDS.channelPage, [data.getCurrentWrkspaceId(), id]);
		});
	}

	async renderContent() {
		const contentListRoot = this.channelInfoElement.querySelector(this.contentListRootSelector);
		if (this._data.channel.members) {
			for (const member of this._data.channel.members) {
				await promiseMaker.createPromise('getChannelCreatorInfo', member);
				const creator = data.getChannelCreator();
				const memberBlock = document.createElement('div');
				memberBlock.className = 'channel-info__member channel-info__member_style';
				memberBlock.innerText = creator.username;
				contentListRoot.appendChild(memberBlock);
			}
		}
	}

	render() {
		if (this._data) {
			this.createElement();
			this.channelInfoElement.innerHTML = ChannelInfoTemplate(this._data);
			this.createHandlers();
			return this.channelInfoElement;
		}
	}
}

export default ChannelInfoComponent;