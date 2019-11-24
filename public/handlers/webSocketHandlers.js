import {bus, componentsStorage, data, promiseMaker} from "../main";

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
				});
				break;
			}
			break;
		default:
			console.log(`message in other channel sent: ${messageContent.text}`);
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
			chatBlock.renderCurrentChatIncomingMessage(messageContent);
			break;
		case data.getUserId():
			console.log(`my message sent: ${messageContent.text}`);
			break;
		default:
			const leftColumn = componentsStorage.getLeftColumn();
			leftColumn.renderNewMessage(messageContent);
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

export {webSocketOnMessage, webSocketOnMessageChannel};
