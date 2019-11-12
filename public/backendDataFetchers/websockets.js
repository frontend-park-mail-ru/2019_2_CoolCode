import {bus, data} from "../main";
import {getCurrentChatMessages, getUserInfo} from "./gettionInfo";
import {webSocketOnMessage} from "../handlers/webSocketHandlers";
import {settings, responseStatuses, ROUTER} from '../constants/config';
const {backend} = settings;

function createWebsocketConn(chatId) {
	if (data.checkWebsocketConn(chatId)) {
		return;
	}
	const websocketConn = new WebSocket(`ws://${backend}/chats/${chatId}/notifications`);
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

export {createWebsocketConn};