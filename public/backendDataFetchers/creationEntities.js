import {FetchModule, data, promiseMaker} from "../main";
import {API, responseStatuses} from "../constants/config";

async function createChat(id) { /*creating new chat and fetching all chats info*/
	console.log(`Creating chat with user: ${id}`);
	try {
		const response = await FetchModule._doPost({path: API.createChat, data: {
			user_id:parseFloat(id),
		},
		contentType : 'application/json;charset=utf-8'});
		if (response.status !== 200) {
			throw new Error(
				`Didn't create chat: ${responseStatuses[response.status]}`);
		}
		await promiseMaker.createPromise('getChats', data.getUserId());

	} catch (error) {
		console.error(error);
	}
}

async function createWrkspace(name) { /*creating new wrkspace and fetching all chats info*/
	console.log(`Creating wrkspace with name: ${name}`);
	try {
		const response = await FetchModule._doPost({path: API.createWrkSpace, data: {
			name: name,
		},
		contentType : 'application/json;charset=utf-8'});
		if (response.status !== 200) {
			throw new Error(
				`Didn't create wrkspace: ${responseStatuses[response.status]}`);
		}
		await promiseMaker.createPromise('getChats', data.getUserId());
	} catch (error) {
		console.error(error);
	}
}

async function createChannel(name, id) { /*creating new channel and fetching all chats info*/
	console.log(`Creating channel in wrkspace: ${id}`);
	try {
		const response = await FetchModule._doPost({path: API.createChannel(id), data: {
			name: name,
		},
		contentType : 'application/json;charset=utf-8'});
		if (response.status !== 200) {
			throw new Error(
				`Didn't create channel: ${responseStatuses[response.status]}`);
		}
		await promiseMaker.createPromise('getChats', data.getUserId());
	} catch (error) {
		console.error(error);
	}
}

export {createChat, createWrkspace, createChannel};

