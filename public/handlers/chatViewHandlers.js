import sendingMessage from "../backendDataFetchers/sendingMessage";
import {componentsStorage, data} from "../main";
import {keys} from "../constants/config";

function createSendMessageBtnHndlr() {
	const sendBtn = document.querySelectorAll(".chat-column-input__icon-container__icon")[1];
	sendBtn.addEventListener('click', sendMessageEvent);
}

function createMessageInputHndlr() {
	const messageInput = document.querySelector(".chat-column-input__text");
	messageInput.addEventListener('keypress', function (event) {
		if (event.which === keys.ENTER) {
			sendMessageEvent();
		}
	});
	messageInput.addEventListener('input', growInput.bind(null, messageInput));

}

function growInput(element) {
	element.style.height = element.scrollHeight;
}

function sendMessageEvent() {
	const chatBlock = componentsStorage.getChatBlock();
	const text = chatBlock.getMessageInputData();
	if (text !== '') {
		console.log(`new message : ${text}`);
		sendingMessage(text, data.getCurrentChatId());
		chatBlock.setMessageInputData('');
		const today = new Date();
		const time = `${today.getHours()} : ${today.getMinutes()}`;
		chatBlock.renderOutgoingMessage({text: text, time: time});
	}
}

export {createSendMessageBtnHndlr, createMessageInputHndlr};