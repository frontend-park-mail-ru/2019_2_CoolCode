import {appLocalStorage, bus, data, FetchModule, promiseMaker} from "../main";
import {API, responseStatuses} from "../constants/config";

async function getChannelInfo(id) {
	console.log(` Getting channel ${id} info`);
	try {
		const response = await FetchModule._doGet(
			{path: API.channelInfo(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch channel info: ${responseStatuses[response.status]}`);
		}
		const channel = await response.json();
		bus.emit('setCurrentChannel', null, channel);
	} catch (error) {
		console.error(error);
	}

}

async function getWrkspaceInfo(id) {
	console.log(` Getting wrkspace ${id} info`);
	try {
		const response = await FetchModule._doGet(
			{path: API.wrkspaceInfo(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch wrkspace info: ${responseStatuses[response.status]}`);
		}
		const wrkspace = await response.json();
		bus.emit('setCurrentWrkspace', null, wrkspace);
	} catch (error) {
		console.error(error);
	}

}

async function getPhoto(id) {
	console.log(` Getting user ${id} photo`);
	try {
		const response = await FetchModule._doGet(
			{path: API.getPhoto(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user photo: ${response.status}`);
		}
		return await response.blob();
	} catch (error) {
		console.error(error);
		return null;
	}
}

async function getCurrentChatMessages(chatId) {
	console.log(`Getting current chat: ${chatId} messages`);
	try {
		const response = await FetchModule._doGet({
			path: API.currentChatMessages(chatId),
		});
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch messages: ${responseStatuses[response.status]}`);
		}
		const data = await response.json();
		bus.emit('setChatMessages', null, data['Messages']);
		appLocalStorage.setChatMessages(data['Messages'], chatId);
	} catch (error) {
		console.error(error);
	}
}

async function getChats(id) {
	console.log(` Getting user ${id} chats and wrkspaces`);
	try {
		let response = await FetchModule._doGet(
			{path: API.getUserChats(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user chats: ${responseStatuses[response.status]}`);
		}
		let chats = await response.json();
		await promiseMaker.createPromise('setUserChats', chats['Chats']);
		await promiseMaker.createPromise('setUserWrkSpaces', chats['Workspaces']);
		bus.emit('setLSChats', null);

	} catch (error) {
		console.error(error);
	}
}

async function getAnyUserInfo(id) {
	console.log(` Getting user ${id} info`);
	try {
		const response = await FetchModule._doGet(
			{path: API.userInfo(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user info: ${responseStatuses[response.status]}`);
		}
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

async function getUserInfo(id) {
	const user = await getAnyUserInfo(id);
	if (user) {
		bus.emit('setCurrentChatUser', null, user);
	}
}

async function getWrkspaceCreatorInfo(id) {
	const user = await getAnyUserInfo(id);
	if (user) {
		bus.emit('setCurrentWrkspaceCreator', null, user);
	}
}

async function getCurrentChatInfo(userId, chatId) {
	await getUserInfo(userId);
	bus.emit('setChatMessages', null, appLocalStorage.getChatMessages(chatId));
	console.log(data.getCurrentChatMessages());
	await getCurrentChatMessages(chatId);
	bus.emit('setCurrentChatId', null, chatId);
}

export {getCurrentChatMessages, getChats, getUserInfo, getCurrentChatInfo, getPhoto, getWrkspaceInfo, getWrkspaceCreatorInfo, getChannelInfo};