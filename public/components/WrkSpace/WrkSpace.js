import BaseComponent from "../baseComponent";

const wrkSpaceTempl = require('./WrkSpace.pug');
const wrkSpaceChatTempl = require('./WrkSpaceChat.pug');

class WrkSpaceComponent extends BaseComponent {
	render() {
		const wSpace = document.createElement('div');
		wSpace.className = 'row wrkspace-outer';
		wSpace.innerHTML = wrkSpaceTempl(this._data);

		 const wspaceChannels = document.createElement('div');
		 wspaceChannels.className = "row expandable";
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