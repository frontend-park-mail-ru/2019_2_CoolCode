import {bus, data} from "../main";

import {createChat} from "../backendDataFetchers/creationEntities";
import {createWebsocketConn} from "../backendDataFetchers/websockets";
import {getChats, getCurrentChatInfo} from "../backendDataFetchers/gettingInfo";
import handleLogout from "../backendDataFetchers/logout";
import {addErrorStyle, hideError, removeErrorStyle, showError} from "../handlers/errorHandlers";
import {createProfileInputs} from "../handlers/profileBlockHandlers";
import {createRegisterForm} from "../handlers/registerFormHandlers";
import {checkLogin} from "../backendDataFetchers/auth";
import {getUserPhoto, hideLoader, setPicture, showLoader} from "../handlers/photosHandlers";
function createEvents() {

	/*setting data*/

	bus.on('setUser', data.setUser.bind(data));
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

	bus.on('clearData', data.clear.bind(data));

	/*fetching functions*/
	bus.on('checkLogin', checkLogin);
	bus.on('createChat', createChat);
	bus.on('createWebsocketConn', createWebsocketConn);
	bus.on('logout', handleLogout);

	bus.on('getCurrentChatInfo', getCurrentChatInfo);
	bus.on('getChats', getChats);
	/**/
	bus.on('getUserPhoto', getUserPhoto);
	bus.on('hideLoader', hideLoader);
	bus.on('showLoader', showLoader);
	bus.on('setPicture', setPicture);

	bus.on('createProfileInputs', createProfileInputs);
	bus.on('createRegisterForm', createRegisterForm);

	bus.on('addErrorStyle', addErrorStyle);
	bus.on('showError', showError);
	bus.on('removeErrorStyle', removeErrorStyle);
	bus.on('hideError', hideError);

}

export default createEvents;