import sendRight from "../modules/API/sendMessage";
import {componentsStorage, data} from "../main";
import {keys} from "../constants/config";

function createSendMessageBtnHndlr() {
	let sendBtn = document.querySelectorAll(".bem-chat-column-input__icon-container__icon")[1];
	sendBtn.addEventListener('click', sendMessageEvent);
}

function createMessageInputHndlr() {
	let messageInput = document.querySelector(".bem-chat-column-input__text");
	messageInput.addEventListener('keypress', function (event) {
		var key = event.which;
		if (key === keys.ENTER) sendMessageEvent();
	});
	messageInput.addEventListener('input', growInput.bind(null, messageInput));

}

function growInput(element) {
	element.style.height = element.scrollHeight;
}

function sendMessageEvent() {
	let chatBlock = componentsStorage.getChatBlock();
	let text = chatBlock.getMessageInputData();
	if (text !== '') {
		console.log(`new message : ${text}`);
		sendRight(text, data.getCurrentChatId());
		chatBlock.setMessageInputData('');
		let today = new Date();
		let time = today.getHours() + ":" + today.getMinutes();
		chatBlock.renderOutgoingMessage({text: text, time: time});
	}
}

export {createSendMessageBtnHndlr, createMessageInputHndlr};