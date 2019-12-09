import {deletingMessage, editingMessage, sendingFile, sendingMessage} from "../backendDataFetchers/messagesInteraction";
import {bus, componentsStorage, data, router} from "../main";
import {keys} from "../constants/config";
import currentDate from "../modules/currentDate";
import {setUserPhoto} from "../backendDataFetchers/setUserInfo";
import MyWorker from "../workers/profile.worker";

function deleteMessageEvent() {
	const messageId = data.getChosenMessageId();
	deletingMessage(messageId);
	const chatBlock = componentsStorage.getChatBlock();
	chatBlock.deleteMessage(messageId);
	componentsStorage.setChatBlock(chatBlock);
	createHiddenSettingsMessageBlock();
}

function createDeleteMessageBlockHndlr() {
	const messageSettingsBlock = document.querySelector('.message-sett-block__content');
	const deleteMessageBlock = messageSettingsBlock.querySelector('#delete');
	deleteMessageBlock.addEventListener('click', deleteMessageEvent);
}

async function editMessageEvent() {
	const messageId = data.getChosenMessageId();
	const messageText = data.getChosenMessageText();
	const chatBlock = componentsStorage.getChatBlock();
	chatBlock.setMessageInputData(messageText);
	componentsStorage.setChatBlock(chatBlock);
}

function createEditMessageBlockHndlr() {
	const messageSettingsBlock = document.querySelector('.message-sett-block__content');
	const editMessageBlock = messageSettingsBlock.querySelector('#edit');
	editMessageBlock.addEventListener('click', editMessageEvent);
}

function deleteOpenSettingsEvents() {
	const settingsMessageBtns = document.querySelectorAll('.primary-row__icon-container');
	settingsMessageBtns.forEach((settingsMessageBtn) => {
		settingsMessageBtn.removeEventListener('mouseover', createVisibleSettingsMessageBlock);
		settingsMessageBtn.removeEventListener('mouseout', createVisibleSettingsMessageBlock);
	});
}

function createHiddenSettingsMessageBlock() {
	createOpenSettingsMessageHndlr();
	const settingsMessageBlock = document.querySelector('.message-sett-block__content');
	settingsMessageBlock.classList = `${settingsMessageBlock.classList} message-sett-block__content_hidden`;
	bus.emit('deleteChosenMessageId', null);
	bus.emit('deleteChosenMessageText', null);
}

function createVisibleSettingsMessageBlock(event) {
	const settingsMessageBlock = document.querySelector('.message-sett-block__content');
	if (event.type == 'click') {
		if (event.currentTarget.classList.contains('mouseover')) {
			event.currentTarget.classList.remove('mouseover');
			deleteOpenSettingsEvents();
		}
		const messageBlock = event.currentTarget.parentNode.parentNode.parentNode;
		const messageId = parseFloat(messageBlock.id.split('-')[1]);
		const messageText = messageBlock.querySelector(".primary-row__text").innerText;
		bus.emit('setChosenMessageId', null, messageId);
		bus.emit('setChosenMessageText', null, messageText);
	}
	if (event.type == 'mouseover') {
		event.currentTarget.classList.add('mouseover');
		settingsMessageBlock.classList.remove('message-sett-block__content_hidden');
	}
	if (event.type == 'mouseout') {
		event.currentTarget.classList.remove('mouseover');
		settingsMessageBlock.classList = `${settingsMessageBlock.classList} message-sett-block__content_hidden`;
	}

}

function createCloseSettingsMessageHndlr() {
	const closeSettingsMessageBtn = document.querySelector('.message-sett-block__content__button');
	closeSettingsMessageBtn.addEventListener('click', createHiddenSettingsMessageBlock);
}

function createOpenSettingsMessageHndlr() {
	const userMessages = document.querySelectorAll('.chat-msg_right');
	userMessages.forEach((userMessage) => {
		const settingsMessageBtn = userMessage.querySelector('.primary-row__icon-container');
		settingsMessageBtn.addEventListener('mouseover', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('mouseout', createVisibleSettingsMessageBlock);
		settingsMessageBtn.addEventListener('click', createVisibleSettingsMessageBlock);
	});
}

function chooseSendMessageEvent() {
	event.preventDefault();
	switch (data.getInputType()) {
	case 0:
		if (data.getChosenMessageId()) {
			sendEditedMessageEvent();
		} else {
			sendMessageEvent();
		}
		break;
	case 1:
		sendPhotosEvent();
		break;
	}

}

function createSendMessageBtnHndlr() {
	const sendBtn = document.querySelectorAll(".input__icon-container__icon")[1];
	sendBtn.addEventListener('click', chooseSendMessageEvent);
}

function createMessageInputHndlr() {
	const messageInput = document.querySelector(".input__text");
	messageInput.addEventListener('keypress', function (event) {
		if (event.which === keys.ENTER) {
			chooseSendMessageEvent(event);
		}
	});
	messageInput.addEventListener('input', growInput.bind(null, messageInput));

}

function growInput(element) {
	element.style.height = element.style.minHeight;
	element.style.height = element.scrollHeight;
}

function deleteSendingPhoto() {
	const imagesContainer = document.querySelector('.content-container__images');
	// const image = imagesContainer.querySelector(`#photoattach-${id}`);
	//image.parentNode.remove();
	const image = imagesContainer.querySelector('.attach-component');
	image.remove();
	if (imagesContainer.childNodes.length === 0) {
		showTextArea();
	}
}

function showPhotoContent(messageBlock) {
	messageBlock.querySelector('.primary-row__image-container').classList.remove('primary-row__image-container_hidden');
	const imagesClassList = messageBlock.querySelector('.primary-row__image-container').classList;
	messageBlock.querySelector('.primary-row__loader-container').classList = `${imagesClassList} primary-row__loader-container_hidden`;
}

function showTextArea() {
	document.querySelector('.input__text').classList.remove('input__text_hidden');
	document.querySelector('.content-container__images').classList += ' content-container__images_hidden';
	bus.emit('setInputType', null, 0);
	bus.emit('deleteChosenFiles', null);
}

async function sendPhotosEvent() {
	const chatBlock = componentsStorage.getChatBlock();
	const chosenFiles = data.getChosenFiles();
	for (let i = 0; i < chosenFiles.length; i++) {
		if (chosenFiles[i]) {
			deleteSendingPhoto();

			const formData = new FormData();
			formData.append('file', chosenFiles[i].file);
			let chatId = data.getCurrentChatId();
			if (!chatId) {
				chatId = data.getCurrentChannelId();
			}
			try {
				const result = await sendingFile(formData, chatId);
				const messageId = result.id;
				chatBlock.renderOutgoingMessage(result);

				const worker = new MyWorker();
				worker.postMessage(chosenFiles[i].file);
				worker.onmessage = function (result) {
					const messageBlock = document.getElementById(`message-${messageId}`);
					messageBlock.querySelector('.primary-row__image-container__image').src = result.data;
					showPhotoContent(messageBlock);
				};
			} catch (error) {
				console.log(error);
				const date = new currentDate();
				chatBlock.renderErrorOutgoingMessage({author_id : data.getUserId(), text : 'haven\'t sent message', message_time:  date.getDate(), message_type: 1});
			}

		}
	}
	componentsStorage.setChatBlock(chatBlock);
}

async function sendMessageEvent() {
	const chatBlock = componentsStorage.getChatBlock();
	const text = chatBlock.getMessageInputData();
	if (text !== '') {
		console.log(`new message : ${text}`);
		chatBlock.setMessageInputData('');
		const date = new currentDate();
		try {
			const messageId = await sendingMessage(text, date.getDate(), data.getCurrentChatId());
			chatBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), text: text, message_time: date.getDate(), message_type: 0});

		} catch (error) {
			chatBlock.renderErrorOutgoingMessage({author_id : data.getUserId(), text: text, message_time: date, message_type: 0});
		}

	}
	componentsStorage.setChatBlock(chatBlock);
}

async function sendEditedMessageEvent() {
	const chatBlock = componentsStorage.getChatBlock();
	const text = chatBlock.getMessageInputData();
	if (text !== '') {
		console.log(`edited message : ${text}`);
		chatBlock.setMessageInputData('');
		const date = new currentDate();
		try {
			await editingMessage(text, date.getDate(), data.getChosenMessageId());
			chatBlock.renderEditedMessage({id: data.getChosenMessageId(), author_id : data.getUserId(), text: text, message_time: date.getDate()});
		} catch (error) {
			const messageText = data.getChosenMessageText();
			chatBlock.setMessageInputData(messageText);
		}
	} else {
		const messageText = data.getChosenMessageText();
		chatBlock.setMessageInputData(messageText);
	}
	createHiddenSettingsMessageBlock();
	componentsStorage.setChatBlock(chatBlock);
}

export {createSendMessageBtnHndlr, createMessageInputHndlr, createOpenSettingsMessageHndlr, createCloseSettingsMessageHndlr, createDeleteMessageBlockHndlr, createVisibleSettingsMessageBlock,
	createEditMessageBlockHndlr, growInput, createHiddenSettingsMessageBlock, showPhotoContent, showTextArea, deleteSendingPhoto
};