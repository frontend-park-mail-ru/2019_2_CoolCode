import {settings, responseStatuses} from '../../constants/config';
import {componentsStorage, data, FetchModule, router} from "../../main";
import {getChats, getUserInfo, saveUserPhoto} from "./profile";
import {renderNewMessage} from "../../backendDataFetchers/creationChat";
import {getCurrentChatMessages} from "./loadAllMessages";
import {webSocketOnMessage} from "../../handlers/webSocketHandlers";
const {backend} = settings;

async function fetchUserInfo(userId, chatId) {
	await getUserInfo(userId);
	data.setCurrentChatId(chatId);
	await getCurrentChatMessages(chatId);

}

function createWebsocketConn(chatId) {
	if (data.checkWebsocketConn(chatId)) return;
	let websocketConn = new WebSocket(`ws://${backend}/chats/${chatId}/notifications`);
	data.addWebSocketConn(chatId, websocketConn);

	websocketConn.onopen = () => {
		console.log('opened webSocket connection');
	};

	websocketConn.onmessage = (event) => webSocketOnMessage(event);

	websocketConn.onclose = (event) => {
		if (event.wasClean) {
			console.log(`webSocket was closed with code : ${event.code}, cause : ${event.reason}`);
		} else {
			console.log(`error occurred, webSocket was closed with code : ${event.code}`);
		}
	};

	websocketConn.onerror = (error) => {
		console.log(`websocket error : ${error.message}`);
		websocketConn.close();
	};

}

export {createWebsocketConn, fetchUserInfo};