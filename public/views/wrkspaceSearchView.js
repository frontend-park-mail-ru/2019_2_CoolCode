import BaseView from "./baseView";
import {createUserBlockHndlr} from "../handlers/searchViewHandlers";
import {componentsStorage, data, promiseMaker, router} from "../main";
import WrkspacePageComponent from "../components/WrkSpacePage/wrkspacePageComponent";
import {
	channelViewHandler,
	createChatBlockHndlr,
	createWorkspaceButtonHndlr,
	createWrkspaceBlockExpandHndlr,
	createWrkspaceBlockHndlr
} from "../handlers/chatsBlockHandlers";
import {createSearchInputHndlr} from "../handlers/searchFormHandlers";
import {
	createWorkspaceSettingsButtonHndlr,
	createWrkspaceDropdownHandler,
	createWrkspaceInfoColumnHandler
} from "../handlers/wrkspaceBlockHandlers";
import {creatingChats} from "../backendDataFetchers/websockets";
import BasicsComponent from "../components/Basics/basicsComponent";
import ChatsColumnComponent from "../components/ChatsColumn/ChatsColumnComponent";

class wrkspaceSearchView extends BaseView {

	constructor (data, parent) {
		super({viewType: "wrkspaceSearch", user:{}, wrkSpaces:[], chats: [], currentWrkspace:{}, searchUsers:[], loggedIn: null}, parent);
	}

	setContent() {
		this._data.user = data.getUser();
		this._data.loggedIn = data.getLoggedIn();
		this._data.searchUsers = data.getLastSearchUsers();
		this._data.chats = data.getUserChats();
		this._data.wrkspaces = data.getUserWrkSpaces();
		this._data.currentWrkspace = data.getCurrentWrkspace();
		this._data.currentWrkspaceCreator = data.getCurrentWrkspaceCreator();
	}

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
		createUserBlockHndlr('.wrkspace-search__search-container');
		channelViewHandler();
		createWrkspaceDropdownHandler();
		createWrkspaceInfoColumnHandler();
	}

	show(args) {
		if (!data.getLoggedIn()) router.go('mainPageView');
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			if (JSON.stringify(data.getCurrentWrkspace()) === '{}') {
				console.log('here');
				Promise.all(
					[creatingChats(this._parent),
						promiseMaker.createPromise('getWrkspaceInfo', args[0]),
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
			} else {
				this.setContent();
				this.render();
				this.setEvents();
			}
		});
		console.log('show: wrkspacePageSearch');
	}

	drawBasics() {
		const basics = new BasicsComponent(this._data, this._parent);
		this._parent.innerHTML = basics.render();
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
		wrkspacePage.renderSearchContent(this._data);
		componentsStorage.setWrkspacePage(wrkspacePage);
	}

	render() {
		// let wrkspacePage = componentsStorage.getRightColumn();
		// if (!wrkspacePage || !(wrkspacePage instanceof WrkspacePageComponent)) {
		// 	this.drawBasics();
		// 	this.drawLeftColumn();
		// 	wrkspacePage = new WrkspacePageComponent(this._data, this._parent);
		// 	wrkspacePage.render();
		// }
		this.drawBasics();
		this.drawLeftColumn();
		this.drawRightColumn();
	}

}

export default wrkspaceSearchView;