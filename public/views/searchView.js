import BaseView from "./baseView";
import {foundUsersClick} from "../modules/API/chat";
import MessageComponent from "../components/Message/Message";
import WrkSpaceComponent from "../components/WrkSpace/WrkSpace";
import {data} from "../main";
import UserComponent from "../components/User/User";
import {getUserPhoto} from "../modules/API/profile";

class searchView extends BaseView {

	contentListRootSelector = '.chat-msg';

	constructor (data, parent) {
		super({user:{}, users:[]}, parent);
		this.createEvents();
	}

	createEvents() {
		this._bus.on('setUser', this.setUser.bind(this));
		this._bus.on('setUsers', this.setUsers.bind(this));
		this._bus.on('setUsersClick', foundUsersClick);

	}

	setUser() {
		this._data.user = data.user;
	}

	setUsers() {
		this._data.users = data.lastSearchUsers;
		console.log(data.lastSearchUsers);
	}

	show() {
		this._bus.emit('setUser');
		this._bus.emit('setUsers');
		this.render();
		this._bus.emit('setUsersClick');

	}
	render() {

		const contentListRoot = document.querySelector(this.contentListRootSelector);
		contentListRoot.innerHTML = "";
		if (this._data.users) {
			console.log(this._data.users);
			this._data.users.forEach((user) => {
				const userComponent = new UserComponent();
				userComponent.data = user;
				const userBlock = document.createElement('div');
				userBlock.className = 'row user';
				userBlock.id = "search-" + user.id;
				userBlock.innerHTML = userComponent.render();
				contentListRoot.appendChild(userBlock);
				getUserPhoto(user.id, 'search', '.user-search-pic');
			});
		}

	}

}

export default searchView;
