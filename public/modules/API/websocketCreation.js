import {settings, responseStatuses} from '../../modules/config';
import {data, router} from "../../main";
import {getUserInfo, saveUserPhoto} from "./profile";
const {backend} = settings;

async function fetchUserInfo(chatId) {
	getUserInfo(chatId).then((user) => {
		data.setCurrentChatUser(user);
	});
	await saveUserPhoto(chatId);
}

function chooseChat(chatId, userId) {
	let messageWindow = document.querySelector('.bem-all-chats-window');
	let messageBlock = messageWindow.querySelector(`#chat-${userId}`);

	messageBlock.addEventListener('click', createWebsocketConn.bind(null, chatId, userId));
}

function createWebsocketConn(chatId, userId) {
	let websocketConn = new WebSocket(`ws://${backend}/chats/${chatId}/notifications`);
	data.addWebSocketConn(chatId, websocketConn);

	websocketConn.onopen = () => {
		console.log('opened webSocket connection');
		fetchUserInfo(userId).then(() => router.go('/chat'));
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

export {chooseChat};