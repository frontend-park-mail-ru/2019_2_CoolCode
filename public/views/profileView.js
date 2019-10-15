import BaseView from './baseView';
import MessageComponent from "../components/Message/Message";
import WrkSpaceComponent from "../components/WrkSpace/WrkSpace";
import {createProfile, getUserPhoto, createInputs, assignSomeData} from "../modules/API/profile";
const profileTemplate = require('../components/Profile/profile.pug');
const headerTemplate = require('../components/Header/header.pug');

class profileView extends BaseView {
	constructor (data, parent) {
		super (data, parent);
		this._bus.on('drawProfilePage', this.drawAll.bind(this));
		this._bus.on('getUser', this.getUser.bind(this));
		this._bus.on('fetchUser', createProfile);
		this._bus.on('fetchAvatar', getUserPhoto);
		this._bus.on('createInputs', createInputs);
		this._bus.on('assignData', assignSomeData);
	};

	drawAll() {
		this._bus.emit('assignData', this._data);
		this.render();
		this.showLoader();
		this._bus.on('hideLoader', this.hideLoader);
		this._bus.emit('fetchAvatar', this._data["user"].id);
		this._bus.emit('createInputs', this._parent, this._data["user"]);
	}

	getUser(user) {
		this._data["user"] = user;
	}
	show() {
	    if (!this._data["user"])
	        this._bus.emit('fetchUser', this._parent);
	    else this._bus.emit('drawProfilePage');
	}

	hideLoader() {
		document.getElementById("loader").style.display = "none";
		document.getElementById("avatar").style.display = "block";
	}

	showLoader() {
		document.getElementById("avatar").style.display = "none";
		document.getElementById("loader").style.display = "block";

	}

	render() {
		this._parent.innerHTML = '';
		this._data["login"] = true;
		this._parent.innerHTML = headerTemplate(this._data);

		this.data['chat'] = false;
		this.parent.innerHTML += profileTemplate(this._data.user);

		const root = document.getElementsByClassName('chat-msg')[0];

		if (this._data["chats"]) {
			this.data.chats.forEach((mes) => {
				const mess = new MessageComponent();
				mess.data = mes;
				const message = document.createElement('div');
				message.className = 'row msg';
				message.innerHTML = mess.render();
				root.appendChild(message);
			});
		}

		if (this._data["wrkspaces"]) {
			this.data.wrkspaces.forEach((wsp) => {
				const wrkSpace = new WrkSpaceComponent();
				wrkSpace.data = wsp;
				const w = wrkSpace.render();
				root.appendChild(w);
			});
		}

		const img = document.getElementById('avatar');
		const input = document.getElementById('file');
		img.addEventListener('click', function () {
			input.click();

		});

	}

}

export default profileView;
