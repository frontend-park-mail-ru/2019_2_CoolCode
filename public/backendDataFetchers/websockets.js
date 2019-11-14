import {appLocalStorage, bus, data, promiseMaker} from "../main";
import {getCurrentChatMessages, getUserInfo} from "./gettingInfo";
import {webSocketOnMessage} from "../handlers/webSocketHandlers";
import {settings, responseStatuses, ROUTER} from '../constants/config';
import sendingMessage from "./sendingMessage";
const {backend} = settings;
const {backendPort} = settings;

function createWebsocketConn(chatId) {
	if (data.checkWebsocketConn(chatId)) {
		return;
	}
	const websocketConn = new WebSocket(`ws://${backend}${backendPort}/chats/${chatId}/notifications`);
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

async function sendNotSentMessages() {
	const notSentMessages = appLocalStorage.getNotSentMessages();
	if (notSentMessages) {
		for (let i = 0; i < notSentMessages.length; i++) {
			if (notSentMessages[i]) {
				for (const message of notSentMessages[i]) {
					await promiseMaker.createPromise('sendMessage', message, i);
				}
			}
		}

	}
}

async function storeMessages() {
	const chats = data.getUserChats();
	for (const chat of chats) {
		bus.emit('setChatMessages', null, appLocalStorage.getChatMessages(chat.ID));
		await getCurrentChatMessages(chat.ID);
	}

}

async function creatingChats() {
	await promiseMaker.createPromise('setUserChats', appLocalStorage.getItem('chats'));
	await promiseMaker.createPromise('getChats', data.getUserId());
	await sendNotSentMessages();
	await storeMessages();
	await openWebSocketConnections();

}

export {createWebsocketConn, openWebSocketConnections, creatingChats};