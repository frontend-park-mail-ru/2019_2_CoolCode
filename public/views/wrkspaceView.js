import BaseView from './baseView';

import {createSearchInputHndlr} from "../handlers/searchFormHandlers";
import {appLocalStorage, bus, componentsStorage, data, promiseMaker, router} from "../main";
import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";
import BasicsComponent from "../components/Basics/basicsComponent";
import {
	channelViewHandler,
	createChatBlockHndlr,
	createWorkspaceButtonHndlr,
	createWrkspaceBlockExpandHndlr,
	createWrkspaceBlockHndlr
} from "../handlers/chatsBlockHandlers";
import {creatingChats} from "../backendDataFetchers/websockets";
import WrkspacePageComponent from "../components/WrkSpacePage/wrkspacePageComponent";
import {
	createWorkspaceSettingsButtonHndlr,
	createWrkspaceDropdownHandler,
	createWrkspaceInfoColumnHandler
} from "../handlers/wrkspaceBlockHandlers";

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
		const img = document.querySelector('.profile-header__content__image');
		const input = document.querySelector('.profile-header__content__input');
		img.addEventListener('click', function () {
			input.click();
		});
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.chats = data.getUserChats();
		this._data.wrkSpaces = data.getUserWrkSpaces();
		this._data.currentWrkspace = data.getCurrentWrkspace();
		this._data.currentWrkspaceCreator = data.getCurrentWrkspaceCreator();
	}

	show(...args) {
		if (appLocalStorage.getUser()) {
			bus.emit('setUser', null, appLocalStorage.getUser());
		}
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			if (!data.getLoggedIn()) router.go('mainPageView');
			else {
				Promise.all(
					[creatingChats(this._parent),
						promiseMaker.createPromise('getWrkspaceInfo', args),
					]
				).then(() => {
					promiseMaker.createPromise('getWrkspaceCreatorInfo', data.getCurrentWrkspace().creator_id).then(
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

	async drawBasics() {
		let basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
		await promiseMaker.createPromise('getHeaderPhoto');
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
