import BaseView from './baseView';

import {createSearchInputHndlr} from "../handlers/searchFormHandlers";
import {appLocalStorage, bus, componentsStorage, data, promiseMaker, router} from "../main";
import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import BasicsComponent from "../components/Basics/basicsComponent";
import ProfilePageComponent from "../components/ProfilePage/profilePageComponent";
import {
	channelViewHandler,
	createChatBlockHndlr, createWorkspaceButtonHndlr,
	createWrkspaceBlockExpandHndlr,
	createWrkspaceBlockHndlr
} from "../handlers/chatsBlockHandlers";
import {getProfilePhoto} from "../handlers/photosHandlers";
import {creatingChats} from "../backendDataFetchers/websockets";
import WrkspacePageComponent from "../components/WrkSpacePage/wrkspacePageComponent";
import {
	createWorkspaceSettingsButtonHndlr,
	createWrkspaceDropdownHandler,
	createWrkspaceInfoColumnHandler
} from "../handlers/wrkspaceBlockHandlers";
import {clickSupport} from "../handlers/supportHandlers";

class wrkspaceView extends BaseView {
	constructor (data, parent) {
		super ({viewType: "wrkspace", user:{}, wrkSpaces:[], chats: [], currentWrkspace:{}, loggedIn: null}, parent);
	};

	setEvents() {
		// bus.emit('showLoader', null, '.profile-header__image-row');
		// getProfilePhoto(data.getUserId());
		// bus.emit('createProfileInputs', null, this._parent, this._data.user);
		// this.createClickablePic();
		createChatBlockHndlr();
		createSearchInputHndlr();
		createWrkspaceBlockExpandHndlr();
		createWorkspaceButtonHndlr();
		createWrkspaceBlockHndlr();
		createWorkspaceSettingsButtonHndlr();
		channelViewHandler();
		createWrkspaceDropdownHandler();
		createWrkspaceInfoColumnHandler();
	}

	createClickablePic() {
		const img = document.querySelector('.profile-header__image-row__image');
		const input = document.querySelector('.profile-header__image-row__input');
		img.addEventListener('click', function () {
			input.click();
		});
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.chats = data.getUserChats();
		this._data.wrkspaces = data.getUserWrkSpaces();
		this._data.currentWrkspace = data.getCurrentWrkspace();
		this._data.currentWrkspaceCreator = data.getCurrentWrkspaceCreator();
	}

	show(...args) {
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			if (!data.getLoggedIn()) router.go('mainPageView');
			else {
				Promise.all(
					[creatingChats(this._parent),
						promiseMaker.createPromise('getWrkspaceInfo', args),
					]
				).then(() => {
					promiseMaker.createPromise('getWrkspaceCreatorInfo', data.getCurrentWrkspace().CreatorID).then(
						() => {
							this.setContent();
							this.render();
							this.setEvents();
						}
					);
				});
			}
		});
		console.log('show: wrkspacePage');
	}

	drawBasics() {
		const basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
		clickSupport();
	}

	drawLeftColumn() {
		const leftColumn = new ChatsColumnComponent(this._data, this._parent);
		this._parent.querySelector('.column_left').innerHTML = leftColumn.render();
		leftColumn.renderChatsContent();
		componentsStorage.setLeftColumn(leftColumn);
	}

	drawRightColumn() {
		const wrkspacePage = new WrkspacePageComponent(this._data, this._parent);
		wrkspacePage.render();
		componentsStorage.setWrkspacePage(wrkspacePage);
	}

	render() {
		this.drawBasics();
		this.drawLeftColumn();
		this.drawRightColumn();
	}

}

export default wrkspaceView;
