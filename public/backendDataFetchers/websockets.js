import {appLocalStorage, bus, data, promiseMaker} from "../main";
import {getCurrentChatMessages} from "./gettingInfo";
import {webSocketOnMessage, webSocketOnMessageChannel} from "../handlers/webSocketHandlers";
import {settings} from '../constants/config';

const {backend} = settings;
const {backendNotificationsPort} = settings;

function createWebsocketConnChannel(channelId) {
	if (data.checkWebsocketConn(channelId)) {
		return;
	}
	const websocketConn = new WebSocket(`ws://${backend}${backendNotificationsPort}/notifications/channels/${channelId}`);
	data.addWebSocketConn(channelId, websocketConn);

	websocketConn.onopen = () => {
		console.log('opened webSocket connection channel');
	};

	websocketConn.onmessage = (event) => webSocketOnMessageChannel(event);

	websocketConn.onclose = (event) => {
		if (event.wasClean) {
			console.log(`webSocketChannel was closed with code : ${event.code}, cause : ${event.reason}`);
		} else {
			console.log(`error occurred, webSocketChannel was closed with code : ${event.code}`);
		}
	};

	websocketConn.onerror = (error) => {
		console.log(`websocketChannel error : ${error.message}`);
		websocketConn.close();
	};

}

function createWebsocketConn(chatId) {
	if (data.checkWebsocketConn(chatId)) {
		return;
	}
	const websocketConn = new WebSocket(`ws://${backend}${backendNotificationsPort}/notifications/chats/${chatId}`);
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

async function openChatSockets() {
	const chatUsersWChatID = data.getChatUsersWChatIDs();
	for (const chat of chatUsersWChatID) {
		await promiseMaker.createPromise('createWebsocketConn', chat.chatId);
	}
}

async function openWrkspacesSockets() {
	const userWrkspaces = data.getUserWrkSpaces();
	if (userWrkspaces) {
		for (const wrkspace of userWrkspaces) {
			if (wrkspace.channels) {
				for (const channel of wrkspace.channels) {
					await promiseMaker.createPromise('createWebsocketConnChannel', channel.id);
				}
			}
		}
	}
}

async function openWebSocketConnections() {
	if (data.getSocketConnection() === false) {
		await openChatSockets();
		await openWrkspacesSockets();
		await promiseMaker.createPromise('setSocketConnection', true);
	}
}

async function sendNotSentMessages() {
	const notSentMessages = appLocalStorage.getNotSentMessages();
	if (notSentMessages) {
		for (const item of notSentMessages) {
			if (item) {
				for (const message of item) {
					await promiseMaker.createPromise('sendMessage', message, i);
				}
			}

		}
	}
}

async function storeMessages() {
	const chats = data.getUserChats();
	for (const chat of chats) {
		bus.emit('setChatMessages', null, appLocalStorage.getChatMessages(chat.id));
		await getCurrentChatMessages(chat.id);
	}

}

async function creatingChats() {
	await promiseMaker.createPromise('setUserChats', appLocalStorage.getItem('chats'));
	await promiseMaker.createPromise('getChats', data.getUserId());
	await sendNotSentMessages();
	await storeMessages();
	await openWebSocketConnections();

}

export {createWebsocketConn, openWebSocketConnections, creatingChats, createWebsocketConnChannel};