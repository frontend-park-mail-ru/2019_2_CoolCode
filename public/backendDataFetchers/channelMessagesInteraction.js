import {FetchModule} from "../main";
import {API, responseStatuses} from "../constants/config";

async function sendingMessageChannel(text, time, id) {
	console.log(`Sending message in channel: ${id} with text: ${text}`);
	try {
		const response = await FetchModule._doPost({
			path: API.currentChannelMessages(id),
			data: {
				text: text,
				message_time : time,
			},
			contentType: 'application/json;charset=utf-8'
		});

		if (response.status !== 200) {
			throw new Error (`Haven't sent message in channel: ${text} cause: ${responseStatuses[response.status]}`);
		}
		const message = await response.json();
		console.log(`Message sent : ${message.id}`);
		return message.id;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export {sendingMessageChannel};