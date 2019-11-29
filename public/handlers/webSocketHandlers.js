import {componentsStorage, data, promiseMaker} from "../main";
import {getAnyUserInfo} from "../backendDataFetchers/gettingInfo";

function webSocketOnMessageChannel(event) {
	console.log('new message from webSocketChannel');
	const message = JSON.parse(event.data);
	const messageContent = message.body;
	switch (message.event_type) {
	case 1:
		switch (messageContent.chat_id) {
		case data.getCurrentChannelId():
			switch (messageContent.author_id) {
			case data.getUserId():
				console.log(`my message sent: ${messageContent.text}`);
				break;
			default:
				const chatBlock = componentsStorage.getChatBlock();
				promiseMaker.createPromise('getUserInfo', messageContent.author_id).then(() => {
					chatBlock.renderCurrentChatIncomingMessage(data.getCurrentChatUser(), messageContent);
					componentsStorage.setChatBlock(chatBlock);
				});
				break;
			}
			break;
		default:
			console.log(`message in other channel sent: ${messageContent.text}`);
			break;
		}
		break;
	case 2:
		switch (messageContent.chat_id) {
		case data.getCurrentChannelId():
			switch (messageContent.author_id) {
			case data.getUserId():
				console.log(`my message deleted: ${messageContent.text}`);
				break;
			default:
				const chatBlock = componentsStorage.getChatBlock();
				chatBlock.deleteOldMessage(messageContent);
				componentsStorage.setChatBlock(chatBlock);
			}
			break;
		default:
			console.log(`message in other channel deleted: ${messageContent.text}`);
			break;
		}
		break;
	case 3:
		switch (messageContent.chat_id) {
		case data.getCurrentChannelId():
			switch (messageContent.author_id) {
			case data.getUserId():
				console.log(`my message edited: ${messageContent.text}`);
				break;
			default:
				const chatBlock = componentsStorage.getChatBlock();
				promiseMaker.createPromise('getUserInfo', messageContent.author_id).then(() => {
					chatBlock.renderEditedMessage(data.getCurrentChatUser(), messageContent);
					componentsStorage.setChatBlock(chatBlock);
				});
				break;
			}
			break;
		default:
			console.log(`message in other channel edited: ${messageContent.text}`);
			break;
		}
		break;

	}
}

function webSocketOnMessage(event) {
	console.log('new message from webSocket');
	const message = JSON.parse(event.data);
	const messageContent = message.body;
	switch (message.event_type) {
	case 1:
		switch (messageContent.author_id) {
		case data.getCurrentChatUserId():
			const chatBlock = componentsStorage.getChatBlock();
			console.log(chatBlock);
			console.log(messageContent);
			console.log(message);

			chatBlock.renderCurrentChatIncomingMessage(messageContent);
			console.log(`message accepted: ${messageContent.text}`);
			sendNotification(chatBlock._data.chatUser.username, {
				body: messageContent.text
			});
			break;
		case data.getUserId():
			console.log(`my message sent: ${messageContent.text}`);
			break;
		default:
			const leftColumn = componentsStorage.getLeftColumn();
			leftColumn.renderNewMessage(messageContent);
			console.log(`message accepted in back: ${messageContent.text}`);

			const chats = leftColumn._data.chats;
			sendNotification(chatNameIterate(messageContent.chat_id, chats), {
				body: messageContent.text
			});
		}
		break;
	case 2:
		switch (messageContent.author_id) {
		case data.getCurrentChatUserId():
			const chatBlock = componentsStorage.getChatBlock();
			chatBlock.deleteOldMessage(messageContent);
			componentsStorage.setChatBlock(chatBlock);
			break;
		case data.getUserId():
			console.log(`my message deleted: ${messageContent.text}`);
			break;
		default:
			console.log(`user: ${messageContent.author_id} deleted message`);
		}
		break;
	case 3:
		switch (messageContent.author_id) {
		case data.getCurrentChatUserId():
			const chatBlock = componentsStorage.getChatBlock();
			chatBlock.renderEditedMessage(messageContent);
			componentsStorage.setChatBlock(chatBlock);
			break;
		case data.getUserId():
			console.log(`my message edited: ${messageContent.text}`);
			break;
		default:
			console.log(`user: ${messageContent.author_id} edited message`);
		}
		break;
	}
}

function chatNameIterate(chatID, chats) {
	for (let i = 0; i < chats.length; i++) {
		if (chats[i].id === chatID) {
			return chats[i].name;
		}
	}
}

function sendNotification(title, options) {
	if ("Notification" in window) {
		if (Notification.permission === 'granted') {
			let notification = new Notification(title, options);
			//TODO: onclick -> messagedChat
		} else if (Notification.permission !== 'denied') {
			Notification.requestPermission(function (permission) {
				if (permission === 'granted') {
					let notification = new Notification(title, options);
				}
			});
		}
	}
}

export {webSocketOnMessage, webSocketOnMessageChannel};
