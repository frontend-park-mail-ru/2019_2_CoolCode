import BaseComponent from "../../../baseComponent";

const wrkSpaceTempl = require('./WrkSpace.pug');
const wrkSpaceChatTempl = require('./WrkSpaceChat.pug');

class WrkSpaceComponent extends BaseComponent {
	render() {
		const wSpace = document.createElement('div');
		wSpace.className = 'wrkspace-block wrkspace-block_style';
		wSpace.id = "wrkspace-" + this._data.id;
		wSpace.innerHTML = wrkSpaceTempl(this._data);

		if (this._data.channels) {
			const wspaceChannels = document.createElement('div');
			wspaceChannels.className = "wrkspace-expandable wrkspace-expandable_style";
			this._data.channels.forEach((ch) => {
				wspaceChannels.innerHTML += wrkSpaceChatTempl({
					channel: ch,
					name: ch.name,
					id: `channel-${ch.id}`
				});
			});
			wSpace.appendChild(wspaceChannels);
		}

		return wSpace;
	}
}

export default WrkSpaceComponent;