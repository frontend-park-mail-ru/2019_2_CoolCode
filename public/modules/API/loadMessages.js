import {settings} from '../config';
const {backend} = settings;
import {bus, FetchModule, router} from '../../main';
import {data} from "../../main";
import chatView from "../../views/chatView";
import {drawMessages} from "./chat";

async function loadAllMessages(idChat,idUser) {
	try {
		let response = await FetchModule._doGet({
			path: `/chats/${data.getChatIdByChatUserId(idChat)}/messages`,

			contentType: 'application/json;charset=utf-8'
		});
		if (response.status === 400) {
			showError("Wrong email or password");
			throw new Error(
				`Ошибочные данные: ${response.status}`);
		}
		if (response.status === 500) {
			showError("Server error:(");
			throw new Error(
				`Серверу плохо: ${response.status}`);
		}
		if (response.status === 200) {
			response.json().then(function(data) {
				drawMessages(data, idUser);
			});

		}
	}catch (error) {
		console.error(error);
	}
}

export default loadAllMessages;