import {bus, data} from "../main";

function createEvents() {

	/*setting data*/

	bus.on('addUser', data.setUser.bind(data));
	bus.on('setLoggedIn', data.setLoggedIn.bind(data));
	bus.on('setLastSearchUsers', data.setLastSearchUsers.bind(data));
	bus.on('setChatMessages', data.setCurrentChatMessages.bind(data));
	bus.on('setUserPhoto', data.setUserPhoto.bind(data));
	bus.on('setCurrentChatUser', data.setCurrentChatUser.bind(data));
	bus.on('setCurrentChatUserPhoto', data.setCurrentChatUserPhoto.bind(data));
	bus.on('setUserChats', data.setUserChats.bind(data));
	bus.on('setUserWrkSpaces', data.setUserWrkSpaces.bind(data));
	bus.on('setSocketConnection', data.setSocketConnection.bind(data));

}

export default createEvents;