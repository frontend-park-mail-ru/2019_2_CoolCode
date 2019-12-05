import {componentsStorage, data, promiseMaker, router} from "../main";
import {KEYWORDS} from "../constants/config";

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
			sendNotification(
				chatBlock._data.chatUser.username,
				{
					body: messageContent.text
				},
				{
					messageID: messageContent.id,
					chatID: messageContent.chat_id
				}
			);
			break;
		case data.getUserId():
			console.log(`my message sent: ${messageContent.text}`);
			break;
		default:
			const leftColumn = componentsStorage.getLeftColumn();
			console.log(`message accepted in back: ${messageContent.text}`);
			console.log(messageContent);
			leftColumn.renderNewMessage(messageContent);

			const chats = leftColumn._data.chats;
			sendNotification(
				getChatNameIterate(messageContent.chat_id, chats),
				{
					body: messageContent.text
				},
				{
					messageID: messageContent.id,
					chatID: messageContent.chat_id
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

function getChatNameIterate(chatID, chats) {
	for (let i = 0; i < chats.length; i++) {
		if (chats[i].id === chatID) {
			return chats[i].name;
		}
	}
}

function createNotification(title, options, chatParams) {
	const notification = new Notification(title, options);

	function clickFunc() {
		router.open(KEYWORDS.chatFoundMessage, [chatParams.chatID, chatParams.messageID]);
		window.focus();
	}

	notification.onclick = clickFunc;
}

function sendNotification(title, options, chatParams) {
	if ("Notification" in window) {
		if (Notification.permission === 'granted') {
			console.log('notifications granted');
			createNotification(title, options, chatParams);
		} else if (Notification.permission !== 'denied') {
			console.log('notifications default');
			Notification.requestPermission(function (permission) {
				if (permission === 'granted') {
					sendNotification(title, options, chatParams);
				}
			});
		} else {
			console.log('notifications denied');
		}
	}
}

export {webSocketOnMessage, webSocketOnMessageChannel};
