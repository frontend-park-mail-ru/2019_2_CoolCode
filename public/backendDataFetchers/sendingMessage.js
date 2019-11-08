import {API, responseStatuses} from '../constants/config';
import {FetchModule} from '../main';

async function sendingMessage(text, id) {
	console.log(`Sending message in chat: ${id} with text: ${text}`);
	try {
		const response = await FetchModule._doPost({
			path: API.currentChatMessages(id),
			data: {
				text: text,
			},
			contentType: 'application/json;charset=utf-8'
		});

		if (response.status !== 200) {
			throw new Error (`Haven't sent message: ${text} cause: ${responseStatuses[response.status]}`);
		}
		console.log(`Message sent : ${text}`);
	}catch (error) {
		console.error(error);
	}
}

export default sendingMessage;