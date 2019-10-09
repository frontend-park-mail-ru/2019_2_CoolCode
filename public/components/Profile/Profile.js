import {Message} from "./Message";
import {WrkSpace} from "./WrkSpace";

const profileTempl = require('./profile.pug');

export class ProfileComponent {

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

	renderProfile() {
		this.data[`chat`] = false;
		this.parent.innerHTML += `${profileTempl(this._data)}`;

		const root = document.getElementsByClassName('chat-msg')[0];

		if (this._data.chats) {
		    this.data.chats.forEach((mes) => {
				const mess = new Message();
				mess.data = mes;
				const message = document.createElement('div');
				message.className = 'row msg';
				message.innerHTML = mess.renderMsg();
				root.appendChild(message);
			});
		}

		if (this._data.wrkspaces) {
			this.data.wrkspaces.forEach((wsp) => {
				const wrkSpace = new WrkSpace();
				wrkSpace.data = wsp;
				const wSpace = document.createElement('div');
				wSpace.className = 'row msg';
				wSpace.innerHTML = wrkSpace.renderWSpace();
				root.appendChild(wSpace);
			});
		}

		const img = document.getElementById('avatar');
		const input = document.getElementById('file');
		img.addEventListener('click', function () {
			input.click();

		});

	}

	hideLoader() {
		document.getElementById("loader").style.display = "none";
		document.getElementById("avatar").style.display = "block";
	}

	showLoader() {
		document.getElementById("avatar").style.display = "none";
		document.getElementById("loader").style.display = "block";

	}
}
