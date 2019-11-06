import {bus, data, FetchModule} from "../main";
import {responseStatuses} from "../constants/config";

async function getCurrentChatMessages(chatId) {
	console.log(`Getting current chat: ${chatId} messages`);
	try {
		let response = await FetchModule._doGet({
			path: `/chats/${chatId}/messages`,
		});
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch messages: ${responseStatuses[response.status]}`);
		}
		let data = await response.json();
		bus.emit('setChatMessages', null, data['Messages']);
	} catch (error) {
		console.error(error);
	}
}

async function getChats(id) {
	console.log(` Getting user ${id} chats and wrkspaces`);
	try {
		let response = await FetchModule._doGet({path: `/users/${id}/chats`});
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user chats: ${responseStatuses[response.status]}`);
		}
		let chats = await response.json();
		bus.emit('setUserChats', null, chats['Chats']);
		bus.emit('setUserWrkSpaces', null, chats['Workspaces']);

	} catch (error) {
		console.error(error);
	}
}

async function getUserInfo(id) {
	console.log(` Getting user ${id} info`);
	try {
		let response = await FetchModule._doGet({path: `/users/${id}`});
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user info: ${responseStatuses[response.status]}`);
		}
		let user = await response.json();
		bus.emit('setCurrentChatUser', null, user);
	} catch (error) {
		console.error(error);
	}
}

async function getCurrentChatInfo(userId, chatId) {
	await getUserInfo(userId);
	bus.emit('setCurrentChatId', null, chatId);
	await getCurrentChatMessages(chatId);
}

export {getCurrentChatMessages, getChats, getUserInfo, getCurrentChatInfo};