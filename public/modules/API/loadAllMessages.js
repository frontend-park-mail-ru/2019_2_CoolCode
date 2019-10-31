import {FetchModule} from "../../main";

async function loadAllMessages(chatId) {
	try {
		let response = await FetchModule._doGet({
			path: `/chats/${chatId}/messages`,
		});
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch messages: ${response.status}`);
		}
		let data = await response.json();
		return data['Messages'];
	} catch (error) {
		console.error(error);
	}
}

export {loadAllMessages};