import {data, bus, FetchModule} from "../../main";
import {responseStatuses} from "../../constants/config";

async function getCurrentChatMessages(chatId) {
	try {
		console.log(`Getting current chat  ${chatId} messages`);
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

export {getCurrentChatMessages};