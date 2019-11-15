import{messagesInteraction, deletingMessage} from "../backendDataFetchers/messagesInteraction";
import {componentsStorage, data, bus} from "../main";
import {keys} from "../constants/config";

function deleteMessageEvent() {
	const messageId = data.getChosenMessageId();
	deletingMessage(messageId);
	const chatBlock = componentsStorage.getChatBlock();
	chatBlock.deleteMessage(messageId);
	componentsStorage.setChatBlock(chatBlock);
	bus.emit('deleteChosenMessageId', null);
}

function createDeleteMessageBlockHndlr() {
	const messageSettingsBlock = document.querySelector('.message-sett-block__content');
	const deleteMessageBlock = messageSettingsBlock.querySelector('#delete');
	deleteMessageBlock.addEventListener('click', deleteMessageEvent);
}

function deleteOpenSettingsEvents() {
	const settingsMessageBtns = document.querySelectorAll('.chat-msg__icon-container');
	settingsMessageBtns.forEach((settingsMessageBtn) => {
		settingsMessageBtn.removeEventListener('mouseover', createVisibleSettingsMessageBlock);
		settingsMessageBtn.removeEventListener('mouseout', createVisibleSettingsMessageBlock);
	});
}

function createHiddenSettingsMessageBlock() {
	createOpenSettingsMessageHndlr();
	const settingsMessageBlock = document.querySelector('.message-sett-block__content');
	settingsMessageBlock.classList += ' message-sett-block__content_hidden';
	bus.emit('deleteChosenMessageId', null);
}

function createVisibleSettingsMessageBlock(event) {
	const settingsMessageBlock = document.querySelector('.message-sett-block__content');
	if (event.type == 'click') {
		if (event.currentTarget.classList.contains('mouseover')) {
			event.currentTarget.classList.remove('mouseover');
			deleteOpenSettingsEvents();
		}
		const messageId = parseFloat(event.currentTarget.parentNode.id.split('-')[1]);
		bus.emit('setChosenMessageId', null, messageId);
	}
	if (event.type == 'mouseover') {
		event.currentTarget.classList.add('mouseover');
		settingsMessageBlock.classList.remove('message-sett-block__content_hidden');
	}
	if (event.type == 'mouseout') {
		event.currentTarget.classList.remove('mouseover');
		settingsMessageBlock.classList += ' message-sett-block__content_hidden';
	}

}

function createCloseSettingsMessageHndlr() {
	const closeSettingsMessageBtn = document.querySelector('.message-sett-block__content__button');
	closeSettingsMessageBtn.addEventListener('click', createHiddenSettingsMessageBlock);
}

function createOpenSettingsMessageHndlr() {
	const userMessages = document.querySelectorAll('.chat-msg_right');
	userMessages.forEach((userMessage) => {
		const settingsMessageBtn = userMessage.querySelector('.chat-msg__icon-container');
		settingsMessageBtn.addEventListener('mouseover', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('mouseout', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('click', createVisibleSettingsMessageBlock);
	});
}

function createSendMessageBtnHndlr() {
	const sendBtn = document.querySelectorAll(".input__icon-container__icon")[1];
	sendBtn.addEventListener('click', sendMessageEvent);
}

function createMessageInputHndlr() {
	const messageInput = document.querySelector(".input__text");
	messageInput.addEventListener('keypress', function (event) {
		if (event.which === keys.ENTER) {
			sendMessageEvent();
		}
	});
	messageInput.addEventListener('input', growInput.bind(null, messageInput));

}

function growInput(element) {
	element.style.height = element.style.minHeight;
	element.style.height = element.scrollHeight;
}

function sendMessageEvent() {
	const chatBlock = componentsStorage.getChatBlock();
	const text = chatBlock.getMessageInputData();
	if (text !== '') {
		console.log(`new message : ${text}`);
		messagesInteraction(text, data.getCurrentChatId());
		chatBlock.setMessageInputData('');
		const today = new Date();
		const time = `${today.getHours()} : ${today.getMinutes()}`;
		chatBlock.renderOutgoingMessage({text: text, time: time});
	}
	componentsStorage.setChatBlock(chatBlock);
}

export {createSendMessageBtnHndlr, createMessageInputHndlr, createOpenSettingsMessageHndlr, createCloseSettingsMessageHndlr, createDeleteMessageBlockHndlr};