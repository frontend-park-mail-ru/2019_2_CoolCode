import {
	deletingMessage,
	editingMessage,
	sendingFile,
	sendingMessage,
	sendingSticker
} from "../backendDataFetchers/messagesInteraction";
import {bus, componentsStorage, data, router} from "../main";
import {keys} from "../constants/config";
import currentDate from "../modules/currentDate";
import {setUserPhoto, setUserStickers} from "../backendDataFetchers/setUserInfo";
import MyWorker from "../workers/profile.worker";
import {getRandomInt} from "../modules/random";

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
	if (messageText) {
		const chatBlock = componentsStorage.getChatBlock();
		chatBlock.setMessageInputData(messageText);
		componentsStorage.setChatBlock(chatBlock);
	}
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
		const stikerBlock = document.querySelector('.sticker-block');
		if (!stikerBlock.classList.contains('sticker-block_hidden')) {
			stikerBlock.classList = `${stikerBlock.classList} sticker-block_hidden`;
		}
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
	case 2:
		sendRecordEvent();
		break;
	}
}

function deleteSendMessageBtnHndlr() {
	const sendBtn = document.querySelectorAll(".input__icon-container__icon")[2];
	sendBtn.removeEventListener('click', chooseSendMessageEvent);
}

function createSendMessageBtnHndlr() {
	const sendBtn = document.querySelectorAll(".input__icon-container__icon")[2];
	sendBtn.addEventListener('click', chooseSendMessageEvent);
}

function createMessageInputHndlr() {
	const messageInput = document.querySelector(".input__text.input__text_style");
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

export function deleteSendingPhoto() {
	const imagesContainer = document.querySelector('.content-container__images');
	const image = imagesContainer.querySelector('.attach-component');
	image.remove();
	if (imagesContainer.childNodes.length === 0) {
		showTextArea();
	}
}

function showAudioBlock() {
	document.querySelector('.input__record').classList.remove('input__record_hidden');
	let textarea = document.querySelector('.input__text').classList;
	if (!textarea.contains('input__text_hidden')) {
		document.querySelector('.input__text').classList = `${textarea} input__text_hidden`;
	}
	bus.emit('setInputType', null, 2);
}

function showPhotoContent(messageBlock) {
	messageBlock.querySelector('.primary-row__image-container').classList.remove('primary-row__image-container_hidden');
	const imagesClassList = messageBlock.querySelector('.primary-row__loader-container').classList;
	messageBlock.querySelector('.primary-row__loader-container').classList = `${imagesClassList} primary-row__loader-container_hidden`;
}

function showAudioContent(messageBlock) {
	messageBlock.querySelector('.primary-row__audio').classList.remove('primary-row__audio_hidden');
	const imagesClassList = messageBlock.querySelector('.primary-row__loader-container').classList;
	messageBlock.querySelector('.primary-row__loader-container').classList = `${imagesClassList} primary-row__loader-container_hidden`;
}

function showFileContent(messageBlock) {
	messageBlock.querySelector('.primary-row__file-ref').classList.remove('primary-row__file-ref_hidden');
	const imagesClassList = messageBlock.querySelector('.primary-row__loader-container').classList;
	messageBlock.querySelector('.primary-row__loader-container').classList = `${imagesClassList} primary-row__loader-container_hidden`;
}

function showTextArea() {
	document.querySelector('.input__text').classList.remove('input__text_hidden');
	switch (data.getInputType()) {
	case 1:
		document.querySelector('.content-container__images').classList += ' content-container__images_hidden';
		break;
	case 2:
		document.querySelector('.input__record').classList += ' input__record_hidden';
		break;
	}
	bus.emit('setInputType', null, 0);
	bus.emit('deleteChosenFiles', null);
	bus.emit('deleteChunks', null);
}

async function sendPhotosEvent() {
	const chatBlock = componentsStorage.getChatBlock();
	const chosenFiles = data.getChosenFiles();
	for (let i = 0; i < chosenFiles.length; i++) {
		if (chosenFiles[i]) {
			const currentFile = chosenFiles[i].file;
			deleteSendingPhoto();
			const date = new currentDate();
			const formData = new FormData();
			formData.append('file', currentFile);
			const chatId = data.getCurrentChatId();
			try {
				const messageId = getRandomInt(10000);
				chatBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), message_time: date.getDate(), message_type: 1});
				const result = await sendingFile(formData, chatId);
				const worker = new MyWorker();
				worker.postMessage(currentFile);
				worker.onmessage = function (result) {
					const messageBlock = document.getElementById(`message-${messageId}`);
					if (currentFile.type.startsWith('image')) {
						messageBlock.querySelector('.primary-row__image-container__image').src = result.data;
						showPhotoContent(messageBlock);
						bus.emit('createMessagePhotoHandler', null, messageId);
					} else {
						messageBlock.querySelector('.primary-row__file-ref').download = currentFile.name;
						messageBlock.querySelector('.primary-row__file-ref').href = result.data;
						showFileContent(messageBlock);
					}

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

async function sendRecordEvent() {
	const chatBlock = componentsStorage.getChatBlock();
	const chunks = data.getChunks();
	if (chunks.length > 0) {
		const date = new currentDate();

		showTextArea();
		const formData = new FormData();
		formData.append('file', chunks[0], 'file.webm');
		let chatId = data.getCurrentChatId();
		if (!chatId) {
			chatId = data.getCurrentChannelId();
		}
		try {
			const messageId = getRandomInt(10000);
			chatBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), message_time: date.getDate(), message_type: 1});
			const result = await sendingFile(formData, chatId);
			const worker = new MyWorker();
			worker.postMessage(chunks[0]);
			worker.onmessage = function (result) {
				const messageBlock = document.getElementById(`message-${messageId}`);
				messageBlock.querySelector('.primary-row__audio').src = result.data;
				showAudioContent(messageBlock);
			};
		} catch (error) {
			console.log(error);
			const date = new currentDate();
			chatBlock.renderErrorOutgoingMessage({
				author_id: data.getUserId(),
				text: 'haven\'t sent message',
				message_time: date.getDate(),
				message_type: 1
			});
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
		const messageId = getRandomInt(10000);
		try {
			chatBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), text: text, message_time: date.getDate(), message_type: 0});
			const messageIdValid = await sendingMessage(text, date.getDate(), data.getCurrentChatId());
			const messageBlock = document.getElementById(`message-${messageId}`);
			messageBlock.id = `message-${messageIdValid}`;

		} catch (error) {
			bus.emit('setNotSentMessage', null, text, data.getCurrentChatId());
			chatBlock.renderErrorOutgoingMessage({id: messageId, author_id : data.getUserId(), text: text, message_time: date.getDate(), message_type: 0});
		}
	}
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
			chatBlock.renderEditedMessage({id: data.getChosenMessageId(), author_id : data.getUserId(), text: text, message_time: date.getDate(), message_type: 0});
		} catch (error) {
		    console.log(error);
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

function onRecordingReady(e) {
	let chunks = [];
	chunks.push(e.data);
	bus.emit('setChunks', null, chunks);
	const audio = document.getElementById('audio');
	showAudioBlock();
	const worker = new MyWorker();
	worker.postMessage(chunks[0]);
	worker.onmessage = function (result) {
		audio.src = result.data;
	};
}

function recordEvent() {
	const microphone = event.currentTarget;
	const input = document.querySelector('.input__text');
	const {recorder} = microphone.params;
	if(recorder.state == 'recording') {
		createSendMessageBtnHndlr();
		recorder.stop();
		showAudioBlock();
		console.log("STOP RECORD", recorder.state);
		if (!microphone.classList.contains('input__icon-container__icon_microphone')) {
			microphone.classList.remove('input__icon-container__icon_microphone-recording');
			microphone.classList = `${microphone.classList} input__icon-container__icon_microphone`;
		}
		if (input.classList.contains('input__text_recording')) {
			input.classList.remove('input__text_recording');
		}
		input.value = '';
	}else if(recorder.state == 'inactive') {
		deleteSendMessageBtnHndlr();
		recorder.start();
		showTextArea();
		if (!microphone.classList.contains('input__icon-container__icon_microphone-recording')) {
			microphone.classList.remove('input__icon-container__icon_microphone');
			microphone.classList = `${microphone.classList} input__icon-container__icon_microphone-recording`;
		}
		if (!input.classList.contains('input__text_recording')) {
			input.classList = `${input.classList} input__text_recording`;
		}
		input.value = "recording...";
		console.log("START RECORD", recorder.state);
	}
}

function getMedia() {
	const microphone = event.currentTarget;
	navigator.mediaDevices.getUserMedia({
		audio: true
	}).then(
		function (stream) {
			const recorder = new MediaRecorder(stream);
			recorder.addEventListener('dataavailable', onRecordingReady);
			microphone.params = {recorder: recorder};
			microphone.addEventListener('click', recordEvent);
			microphone.removeEventListener('click', getMedia);
			microphone.click();
		}
	);
}
function recordMessage() {
	const microphone = document.querySelectorAll(".input__icon-container__icon")[1];
	microphone.addEventListener('click', getMedia);
}

export { recordMessage, createSendMessageBtnHndlr, createMessageInputHndlr, createOpenSettingsMessageHndlr, createCloseSettingsMessageHndlr, createDeleteMessageBlockHndlr, createVisibleSettingsMessageBlock,
	createEditMessageBlockHndlr, growInput, createHiddenSettingsMessageBlock, showPhotoContent, showTextArea, showAudioContent, showFileContent
};