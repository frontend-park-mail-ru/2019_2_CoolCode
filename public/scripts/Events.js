import {appLocalStorage, bus, data} from "../main";

import {createChat} from "../backendDataFetchers/creationEntities";
import {createWebsocketConn, createWebsocketConnChannel} from "../backendDataFetchers/websockets";
import {
	getChannelInfo,
	getChats, getCurrentChannelInfo,
	getCurrentChatInfo, getUserInfo,
	getWrkspaceCreatorInfo,
	getWrkspaceInfo, getWrkspaceUsers
} from "../backendDataFetchers/gettingInfo";
import handleLogout from "../backendDataFetchers/logout";
import {addErrorStyle, hideError, removeErrorStyle, showError} from "../handlers/errorHandlers";
import {createProfileInputs} from "../handlers/profileBlockHandlers";
import {createRegisterForm} from "../handlers/registerFormHandlers";
import {checkLogin} from "../backendDataFetchers/auth";
import {getMessagePhoto, getUserPhoto, hideLoader, setPicture, showLoader} from "../handlers/photosHandlers";
import {likeMessage, sendingMessage} from "../backendDataFetchers/messagesInteraction";
import {findUser, findMessagesFullInfo} from "../backendDataFetchers/findInfo";
import {alterChannel, alterWrkspace, deleteChannel, leaveChannel} from "../backendDataFetchers/alterEntities";
function createEvents() {

	/*setting data*/

	bus.on('setUser', data.setUser.bind(data));
	bus.on('setLoggedIn', data.setLoggedIn.bind(data));
	bus.on('setLastSearchUsers', data.setLastSearchUsers.bind(data));
	bus.on('deleteLastSearchUsers', data.deleteLastSearchUsers.bind(data));
	bus.on('setLastSearchMessages', data.setLastSearchMessages.bind(data));
	bus.on('deleteLastSearchMessages', data.deleteLastSearchMessages.bind(data));
	bus.on('addLastSearchMessageFull', data.addLastSearchMessageFull.bind(data));
	bus.on('deleteLastSearchMessagesFull', data.deleteLastSearchMessagesFull.bind(data));
	bus.on('setChatMessages', data.setCurrentChatMessages.bind(data));
	bus.on('addChannelMessageFull', data.addChannelMessageFull.bind(data));
	bus.on('deleteChannelMessagesFull', data.deleteChannelMessagesFull.bind(data));
	bus.on('setUserPhoto', data.setUserPhoto.bind(data));
	bus.on('setCurrentChatUser', data.setCurrentChatUser.bind(data));
	bus.on('setCurrentChatUserPhoto', data.setCurrentChatUserPhoto.bind(data));
	bus.on('setCurrentChatId', data.setCurrentChatId.bind(data));
	bus.on('setUserChats', data.setUserChats.bind(data));
	bus.on('setUserWrkSpaces', data.setUserWrkSpaces.bind(data));
	bus.on('setCurrentWrkspace', data.setCurrentWrkspace.bind(data));
	bus.on('setCurrentChannel', data.setCurrentChannel.bind(data));
	bus.on('setCurrentWrkspaceCreator', data.setCurrentWrkspaceCreator.bind(data));
	bus.on('addCurrentWrkspaceMember', data.addCurrentWrkspaceMember.bind(data));
	bus.on('addCurrentWrkspaceUser', data.addCurrentWrkspaceUser.bind(data));
	bus.on('deleteCurrentWrkspaceUsers', data.deleteCurrentWrkspaceUsers.bind(data));
	bus.on('addCurrentChannelMember', data.addCurrentChannelMember.bind(data));
	bus.on('setSocketConnection', data.setSocketConnection.bind(data));
	bus.on('setChosenMessageId', data.setChosenMessageId.bind(data));
	bus.on('deleteChosenMessageId', data.deleteChosenMessageId.bind(data));
	bus.on('setChosenMessageText', data.setChosenMessageText.bind(data));
	bus.on('deleteChosenMessageText', data.deleteChosenMessageText.bind(data));

	bus.on('clearData', data.clear.bind(data));

	/*fetching functions*/
	bus.on('checkLogin', checkLogin);
	bus.on('createChat', createChat);
	bus.on('createWebsocketConn', createWebsocketConn);
	bus.on('createWebsocketConnChannel', createWebsocketConnChannel);
	bus.on('logout', handleLogout);
	bus.on('findUser', findUser);
	bus.on('findMessagesFullInfo', findMessagesFullInfo);
	bus.on('alterWrkspace', alterWrkspace);
	bus.on('alterChannel', alterChannel);
	bus.on('deleteChannel', deleteChannel);
	bus.on('leaveChannel', leaveChannel);

	bus.on('getCurrentChatInfo', getCurrentChatInfo);
	bus.on('getCurrentChannelInfo', getCurrentChannelInfo);
	bus.on('getWrkspaceUsers', getWrkspaceUsers);
	bus.on('getChats', getChats);
	bus.on('sendMessage', sendingMessage);
	bus.on('likeMessage', likeMessage);

	bus.on('getWrkspaceInfo', getWrkspaceInfo);
	bus.on('getChannelInfo', getChannelInfo);
	bus.on('getWrkspaceCreatorInfo', getWrkspaceCreatorInfo);

	/**/
	bus.on('getUserInfo', getUserInfo);
	bus.on('getUserPhoto', getUserPhoto);
	bus.on('getMessagePhoto', getMessagePhoto);
	bus.on('hideLoader', hideLoader);
	bus.on('showLoader', showLoader);
	bus.on('setPicture', setPicture);

	bus.on('createProfileInputs', createProfileInputs);
	bus.on('createRegisterForm', createRegisterForm);

	bus.on('addErrorStyle', addErrorStyle);
	bus.on('showError', showError);
	bus.on('removeErrorStyle', removeErrorStyle);
	bus.on('hideError', hideError);

	bus.on('setLSChats', appLocalStorage.setChats.bind(appLocalStorage));
	bus.on('setLSUser', appLocalStorage.setUser.bind(appLocalStorage));
	bus.on('clearStorage', appLocalStorage.clear.bind(appLocalStorage));
	bus.on('setNotSentMessage', appLocalStorage.setNotSentMessage.bind(appLocalStorage));

}

export default createEvents;