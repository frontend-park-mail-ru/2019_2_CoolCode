import {componentsStorage, data} from "../main";

function webSocketOnMessage(event) {
	console.log('new message from webSocket');
	const message = JSON.parse(event.data);
	if (message.event_type === 1) {
		const messageContent = message.body;
		switch (messageContent.author_id) {
		case data.getCurrentChatUserId():
			messageContent.time = "ADD time!!!";
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
	}
}

export {webSocketOnMessage};
