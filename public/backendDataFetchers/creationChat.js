import {FetchModule, data, promiseMaker} from "../main";
import {getChats} from "../modules/API/profile";
import {responseStatuses} from "../constants/config";

async function createChat(id) { /*creating new chat and fetching all chats info*/
	console.log(`Creating chat with user: ${id}`);
	try {
		let response = await FetchModule._doPost({path: '/chats', data: {
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

export {createChat};

