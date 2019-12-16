import BaseComponent from "../../baseComponent";
import {bus} from "../../../main";
import '../ChatsBlock/bemChatsBlock/bem-chats-block.scss';
import UserComponent from "../User/UserComponent";

const UsersFoundBlockTemplate = require('./usersFoundBlock.pug');

class UsersFoundBlockComponent extends BaseComponent {
    contentListRootSelector = '.users-found-block__content';

    render() {
    	return UsersFoundBlockTemplate(this._data);
    }

    renderContent() {
    	const contentListRoot = this._parent.querySelector(this.contentListRootSelector);
    	if (this._data.searchUsers) {
    		this._data.searchUsers.forEach((user) => {
    			const userComponent = new UserComponent(user, contentListRoot);
    			const userBlock = document.createElement('div');
    			userBlock.className = 'user-found user-found_size user-found_style';
    			userBlock.id = "search-" + user.id;
    			userBlock.innerHTML = userComponent.render();
    			contentListRoot.appendChild(userBlock);
    			bus.emit('getUserPhoto', null, user.id, 'search', userComponent.getPhotoBlock());
    		});
    	}
    }
}

export default UsersFoundBlockComponent;