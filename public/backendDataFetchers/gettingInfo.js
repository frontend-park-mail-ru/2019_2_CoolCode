import {appLocalStorage, bus, data, FetchModule, promiseMaker} from "../main";
import {API, responseStatuses} from "../constants/config";

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

async function getUserInfo(id) {
	console.log(` Getting user ${id} info`);
	try {
		const response = await FetchModule._doGet(
			{path: API.userInfo(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user info: ${responseStatuses[response.status]}`);
		}
		const user = await response.json();
		bus.emit('setCurrentChatUser', null, user);
	} catch (error) {
		console.error(error);
	}
}

async function getCurrentChatInfo(userId, chatId) {
	await getUserInfo(userId);
	bus.emit('setCurrentChatId', null, chatId);
	bus.emit('setChatMessages', null, appLocalStorage.getChatMessages(chatId));
	await getCurrentChatMessages(chatId);
}

export {getCurrentChatMessages, getChats, getUserInfo, getCurrentChatInfo, getPhoto};