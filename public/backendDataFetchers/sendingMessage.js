import {responseStatuses} from '../constants/config';
import {FetchModule} from '../main';

async function sendingMessage(text, id) {
	console.log(`Sending message in chat: ${id} with text: ${text}`);
	try {
		let response = await FetchModule._doPost({
			path: `/chats/${id}/messages`,
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