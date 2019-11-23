import BaseComponent from "../../../baseComponent";
const WrkspacePageSearchTemlate = require('./wrkspacePageSearch.pug');

import './wrkspace-search.css';
import UserComponent from "../../../ChatsColumn/User/UserComponent";
import {bus} from "../../../../main";

class WrkspacePageSearchComponent extends BaseComponent {

	contentListRootSelector = '.wrkspace-search__msgwindow';

	createHandlers() {

	}

	renderContent() {
		const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
		contentListRoot.innerHTML = "";

		if (this._data.searchUsers) {
			this._data.searchUsers.forEach((user) => {
				const userComponent = new UserComponent(user, contentListRoot);
				const userBlock = document.createElement('div');
				userBlock.className = 'user-found wrkspace-search__user-found_style';
				userBlock.id = "search-" + user.id;
				userBlock.innerHTML = userComponent.render();
				contentListRoot.appendChild(userBlock);
				bus.emit('getUserPhoto', null, user.id ,'search', userComponent.getPhotoBlock());
			});
		}
	}

	render() {
		// const wrkspaceSearchBlock = document.querySelector('.wrkspace-search');
		// if (wrkspaceSearchBlock) {
		// 	console.log(wrkspaceSearchBlock);
		// 	wrkspaceSearchBlock.remove();
		// }
		// debugger;
		return WrkspacePageSearchTemlate(this._data);
	}
}

export default WrkspacePageSearchComponent;