import {bus, data} from "../main";
import {
	createInputs,
	getUserPhoto,
	hideLoader,
	setPicture,
	showLoader,
	checkLogin,
} from "../modules/API/profile";
import {createChat} from "../backendDataFetchers/creationEntities";
import {createWebsocketConn} from "../backendDataFetchers/websockets";
import {getChats, getCurrentChatInfo} from "../backendDataFetchers/gettionInfo";
function createEvents() {

	/*setting data*/

	bus.on('addUser', data.setUser.bind(data));
	bus.on('setLoggedIn', data.setLoggedIn.bind(data));
	bus.on('setLastSearchUsers', data.setLastSearchUsers.bind(data));
	bus.on('setChatMessages', data.setCurrentChatMessages.bind(data));
	bus.on('setUserPhoto', data.setUserPhoto.bind(data));
	bus.on('setCurrentChatUser', data.setCurrentChatUser.bind(data));
	bus.on('setCurrentChatUserPhoto', data.setCurrentChatUserPhoto.bind(data));
	bus.on('setCurrentChatId', data.setCurrentChatId.bind(data));
	bus.on('setUserChats', data.setUserChats.bind(data));
	bus.on('setUserWrkSpaces', data.setUserWrkSpaces.bind(data));
	bus.on('setSocketConnection', data.setSocketConnection.bind(data));

	bus.on('clearData', data.clear);

	/*fetching functions*/
	bus.on('checkLogin', checkLogin);

	bus.on('getUserPhoto', getUserPhoto);
	bus.on('hideLoader', hideLoader);
	bus.on('showLoader', showLoader);
	bus.on('setPicture', setPicture);

	bus.on('createProfileInputs', createInputs);

	bus.on('createChat', createChat);
	bus.on('createWebsocketConn', createWebsocketConn);

	bus.on('getCurrentChatInfo', getCurrentChatInfo);
	bus.on('getChats', getChats);

}

export default createEvents;