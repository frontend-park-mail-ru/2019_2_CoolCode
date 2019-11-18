import {bus, componentsStorage, data} from "../main";

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

	}

}

export {webSocketOnMessage};
