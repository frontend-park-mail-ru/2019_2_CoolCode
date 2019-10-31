import {settings, responseStatuses} from '../../modules/config';
import {data, FetchModule, router} from "../../main";
import {getChats, getUserInfo, saveUserPhoto} from "./profile";
import {renderNewMessage} from "./chat";
import {loadAllMessages} from "./loadAllMessages";
const {backend} = settings;

async function fetchUserInfo(userId, chatId) {
	await getUserInfo(userId).then((user) => {
		data.setCurrentChatUser(user);
	});
	await loadAllMessages(chatId).then((val) => {
		data.setCurentChatMessages(val);
	});
	//saveUserPhoto(userId);
}

function chooseChat(chatId, userId) {
	let messageWindow = document.querySelector('.bem-all-chats-window');
	let messageBlock = messageWindow.querySelector(`#chat-${userId}`);

	messageBlock.addEventListener('click', () => {
		fetchUserInfo(userId, chatId).then(() => router.go('/chat', chatId));
	});
}

function createWebsocketConn(chatId) {
	if (data.checkWebsocketConn(chatId)) return;
	let websocketConn = new WebSocket(`ws://${backend}/chats/${chatId}/notifications`);
	data.addWebSocketConn(chatId, websocketConn);

	websocketConn.onopen = () => {
		console.log('opened webSocket connection');
	};

	websocketConn.onmessage = (event) => {
	    console.log('message recieved');
		renderNewMessage(JSON.parse(event.data));
	};

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

export {chooseChat, createWebsocketConn, fetchUserInfo};