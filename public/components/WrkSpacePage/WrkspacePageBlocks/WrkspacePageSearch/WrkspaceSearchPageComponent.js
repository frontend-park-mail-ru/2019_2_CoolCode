import BaseComponent from "../../../baseComponent";
import './wrkspace-search.scss';
import UserComponent from "../../../ChatsColumn/User/UserComponent";
import {bus} from "../../../../main";

const WrkspacePageSearchTemlate = require('./wrkspacePageSearch.pug');

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
				userBlock.className = 'user-found user-found_size wrkspace-search__user-found_style';
				userBlock.id = "search-" + user.id;
				userBlock.innerHTML = userComponent.render();
				contentListRoot.appendChild(userBlock);
				bus.emit('getUserPhoto', null, user.id, 'search', userComponent.getPhotoBlock());
			});
		}
	}

	render() {
		return WrkspacePageSearchTemlate(this._data);
	}
}

export default WrkspacePageSearchComponent;