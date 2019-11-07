import {componentsStorage, data} from "../main";

function webSocketOnMessage(event) {
	console.log('new message from webSocket');
	let message = JSON.parse(event.data);
	if (message.event_type == 1) {
		let messageContent = message.body;
		if (messageContent.author_id == data.getCurrentChatUserId()) {
		    messageContent.time = "ADD time!!!";
			let chatBlock = componentsStorage.getChatBlock();
			chatBlock.renderCurrentChatIncomingMessage(messageContent);
		} else if (messageContent.author_id === data.getUserId()) { //TODO: не отправлять мне мое сообщение!!!
			console.log(`my message sent: ${messageContent.text}`);
		} else {
			let leftColumn = componentsStorage.getLeftColumn();
			leftColumn.renderNewMessage(messageContent);
		}
	}
}

export {webSocketOnMessage};
