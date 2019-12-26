import BaseView from "./baseView";
import {createUserBlockHndlr} from "../handlers/searchViewHandlers";
import {appLocalStorage, bus, componentsStorage, data, promiseMaker, router} from "../main";
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
	createWrkspaceInfoColumnHandler, setPhotoWrkspace
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
		this._data.wrkSpaces = data.getUserWrkSpaces();
		this._data.currentWrkspace = data.getCurrentWrkspace();
		this._data.currentWrkspaceCreator = data.getCurrentWrkspaceCreator();
	}

	setEvents() {
		// bus.emit('showLoader', null, '.profile-header__image-row');
		// getProfilePhoto(data.getUserId());
		// bus.emit('createProfileInputs', null, this._parent, this._data.user);
		// this.createClickablePic();
		createSearchInputHndlr();
		createWorkspaceSettingsButtonHndlr();
		createUserBlockHndlr('.wrkspace-search__search-container');
		channelViewHandler();
		createWrkspaceDropdownHandler();
		createWrkspaceInfoColumnHandler();
		bus.emit('showLoader', null, '.wrkspace-page-header__info-row__image-row');
		setPhotoWrkspace(data.getCurrentWrkspaceId());
	}

	show(args) {
		if (!data.getLoggedIn()) router.go('profileView');
		if (appLocalStorage.getUser()) {
			bus.emit('setUser', null, appLocalStorage.getUser());
		}
		promiseMaker.createPromise('checkLogin', this._parent).then(() => {
			if (JSON.stringify(data.getCurrentWrkspace()) === '{}') {
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
			}
		});
		console.log('show: wrkspacePageSearch');
	}

	async drawBasics() {
		const header = componentsStorage.getHeader(this._data, this._parent, this._parent);
		await promiseMaker.createPromise('getHeaderPhoto');
	}

	drawLeftColumn() {
		const leftColumn = componentsStorage.getLeftColumn(this._data, this._parent, '.column_left');
		if (leftColumn.getState() === 'search') {
			leftColumn.renderChatsContent();
		}
		leftColumn.selectCurrentChat();
		//componentsStorage.setLeftColumn(leftColumn);
	}

	drawRightColumn() {
		const form = componentsStorage.returnForm();
		if (form) {
			componentsStorage.clearForm();
		} else {
			const wrkspacePage = new WrkspacePageComponent(this._data, this._parent);
			wrkspacePage.render();
			wrkspacePage.renderSearchContent(this._data);
			componentsStorage.setWrkspacePage(wrkspacePage);
			this.setEvents();
		}
	}

	render() {
		// const wrkspacePage = componentsStorage.getRightColumn();
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