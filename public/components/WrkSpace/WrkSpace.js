import BaseComponent from "../baseComponent";
import {data} from "../../main";
import createChannels from "../../views/channelsView";

const wrkSpaceTempl = require('./WrkSpace.pug');
const wrkSpaceChatTempl = require('./WrkSpaceChat.pug');
const channelForm = require('./Channels/creationForm.pug');

class WrkSpaceComponent extends BaseComponent {
	render() {
		const wSpace = document.createElement('div');
		wSpace.className = 'bem-wrkspace-block bem-wrkspace-block_style';
		wSpace.innerHTML = wrkSpaceTempl(this._data);

		if (this._data.Channels !== null) {
			const wspaceChannels = document.createElement('div');
			wspaceChannels.className = "bem-wrkspace-expandable bem-wrkspace-expandable_style";
			this._data.Channels.forEach((ch) => {
				wspaceChannels.innerHTML += wrkSpaceChatTempl({
					channel: ch,
				});
			});
			wSpace.appendChild(wspaceChannels);
		}

		return wSpace;
	}
}

export default WrkSpaceComponent;