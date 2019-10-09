const wrkSpaceTempl = require('./WrkSpace.pug');
const wrkSpaceChatTempl = require('./WrkSpaceChat.pug');

export class WrkSpace {
	constructor(data, parent) {
		this._data = data;
		this._parent = parent;

	}

	get data() {
		return this._data;
	}

	set data(dataToSet) {
		this._data = {...dataToSet};
	}

	get parent() {
		return this._parent;
	}

	set parent(parent) {
		this._parent = parent;
	}

	renderWSpace() {
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