import {appLocalStorage, bus, data, promiseMaker} from "../main";
import {getCurrentChatMessages, getUserInfo} from "./gettingInfo";
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

async function openWebSocketConnections() {
	if (data.getSocketConnection() === false) {
		const chatUsersWChatID = data.getChatUsersWChatIDs();
		for (const chat of chatUsersWChatID) {
			await promiseMaker.createPromise('createWebsocketConn', chat.chatId);
		}
		await promiseMaker.createPromise('setSocketConnection', true);
	}
}

async function storeMessages() {
	const chats = data.getUserChats();
	for (const chat of chats) {
		await getCurrentChatMessages(chat.ID).then( () =>
			appLocalStorage.setChatMessages(data.getCurrentChatMessages(), chat.ID)
		);
	}

}

async function creatingChats() {
	bus.emit('setUserChats', null, appLocalStorage.getItem('chats'));
	await promiseMaker.createPromise('getChats', data.getUserId());

	await storeMessages();
	await openWebSocketConnections();

}

export {createWebsocketConn, openWebSocketConnections, creatingChats};