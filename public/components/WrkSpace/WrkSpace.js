import BaseComponent from "../baseComponent";

const wrkSpaceTempl = require('./WrkSpace.pug');
const wrkSpaceChatTempl = require('./WrkSpaceChat.pug');

class WrkSpaceComponent extends BaseComponent {
	render() {
		const wSpace = document.createElement('div');
		wSpace.className = 'bem-wrkspace-block bem-wrkspace-block_style';
		wSpace.innerHTML = wrkSpaceTempl(this._data);

		 const wspaceChannels = document.createElement('div');
		 wspaceChannels.className = "bem-wrkspace-expandable bem-wrkspace-expandable_style";
		 this.data.channels.forEach((ch)=>{
			wspaceChannels.innerHTML += wrkSpaceChatTempl({
				channel:ch,
			});
		});
		wSpace.appendChild(wspaceChannels);

		return wSpace;
	}
}

export default WrkSpaceComponent;