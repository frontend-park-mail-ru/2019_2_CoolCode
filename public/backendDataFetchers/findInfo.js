import {bus, FetchModule, promiseMaker, data} from "../main";
import {API, responseStatuses} from "../constants/config";

async function findUser(query) {
	console.log(`Finding user with query: ${query}`);
	try {
		const response = await FetchModule._doGet({path: API.findUser(query)});
		if (response.status !== 200) {
			throw new Error(
				`Didn't find user: ${responseStatuses[response.status]}`);
		}
		const data = await response.json();
		await promiseMaker.createPromise('setLastSearchUsers', data['users']);
	} catch (error) {
		console.error(error);
	}
}

async function findMessages(query) {
	console.log(`Finding messages with query: ${query}`);
	try {
		const response = await FetchModule._doGet({path: API.findMessages(query)});
		if (response.status !== 200) {
			throw new Error(
				`Didn't find user: ${responseStatuses[response.status]}`);
		}
		const data = await response.json();
		await promiseMaker.createPromise('setLastSearchMessages', data['Messages']);
	} catch (error) {
		console.error(error);
	}
}

async function setFoundMessageUser(fullMessage, userId) {
	await promiseMaker.createPromise('getUserInfo', userId);
	fullMessage.user = data.getCurrentChatUser();
	await promiseMaker.createPromise('addLastSearchMessageFull', fullMessage);
}

async function setFoundMessageChannelContent(fullMessage) {
	await promiseMaker.createPromise('getWrkspaceInfo', fullMessage.channel.workspace_id);
	fullMessage.wrkspace = data.getCurrentWrkspace();
	await promiseMaker.createPromise('addLastSearchMessageFull', fullMessage);
}

async function setFoundMessageChannel(fullMessage, channelId) {
	await promiseMaker.createPromise('getChannelInfo', channelId);
	fullMessage.channel = data.getCurrentChannel();
	await setFoundMessageChannelContent(fullMessage);

}

async function findMessagesFullInfo(query) {
	await promiseMaker.createPromise('deleteLastSearchMessagesFull');
	await findMessages(query);
	const messages = data.getLastSearchMessages();
	if (messages) {
		for (const message of messages) {
			const fullMessage = {message: message, user: null, chatId: message.chat_id, channel: null, wrkspace: null};
			if (data.checkIfChat(message.chat_id) === true) {
				const userId = data.getChatUserIdByChatId(message.chat_id);
				await setFoundMessageUser(fullMessage, userId);

			} else {
				await setFoundMessageChannel(fullMessage, message.chat_id);

			}
		}
	}
}

export {findUser, findMessagesFullInfo};