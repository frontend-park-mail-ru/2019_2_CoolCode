import {deletingMessage, editingMessage, sendingMessage} from "../backendDataFetchers/messagesInteraction";
import {bus, componentsStorage, data} from "../main";
import {keys} from "../constants/config";
import currentDate from "../modules/currentDate";
let chunks = [];

function deleteMessageEvent() {
	const messageId = data.getChosenMessageId();
	deletingMessage(messageId);
	const chatBlock = componentsStorage.getChatBlock();
	chatBlock.deleteMessage(messageId);
	componentsStorage.setChatBlock(chatBlock);
	createHiddenSettingsMessageBlock();
}

function onRecordingReady(e) {
	let audio = document.getElementById('audio');
	let input = document.querySelector('.input__text.input__text_style');
	audio.style.display = 'flex';
	input.style.display = 'none';

	audio.src = URL.createObjectURL(e.data);// e.data contains a blob representing the recording
	chunks.push(URL.createObjectURL(e.data));
	//audio.play();
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
	if (data.getChosenMessageId()) {
		sendEditedMessageEvent();
	} else {
		sendMessageEvent();
	}
}

function createSendMessageBtnHndlr() {
	const sendBtn = document.querySelectorAll(".input__icon-container__icon")[1];
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

async function sendMessageEvent() {
	let audio = document.getElementById('audio');
	let input = document.querySelector('.input__text.input__text_style');
	const chatBlock = componentsStorage.getChatBlock();
	if(chunks.length > 0) {
		console.log("CHUNKS2", chunks);
		audio.style.display = 'none';
		input.style.display = 'flex';
		const date = new currentDate();
		chatBlock.renderOutgoingRecord({id: 100, author_id : data.getUserId(),text: null, record: chunks[0], message_time: date.getDate()});
		chunks.length = 0;
	}else {
		const text = chatBlock.getMessageInputData();
		if (text !== '') {
			console.log(`new message : ${text}`);
			chatBlock.setMessageInputData('');
			const date = new currentDate();
			try {
				const messageId = await sendingMessage(text, date.getDate(), data.getCurrentChatId());
				chatBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), text: text, message_time: date.getDate()});

			} catch (error) {
				chatBlock.renderErrorOutgoingMessage({author_id : data.getUserId(), text: text, message_time: date});
			}

		}
		componentsStorage.setChatBlock(chatBlock);
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

function recordMessage() {
	let recorder;
	let audio = document.getElementById('audio');
	let input = document.querySelector('.input__text.input__text_style');
	let microphone = document.querySelector('.input__icon-container__icon_microphone.input__icon-container__icon_microphone_style');
	navigator.mediaDevices.getUserMedia({
		audio: true
	})
		.then(function (stream) {
			recorder = new MediaRecorder(stream);
			recorder.addEventListener('dataavailable', onRecordingReady);
			microphone.addEventListener('click',()=>{
				if(recorder.state == 'recording') {
					recorder.stop();
					audio.style.display = 'flex';
					input.style.display = 'none';
					console.log(recorder.state);
					microphone.style.background = 'white';
					microphone.style.filter = 'opacity(0.9)';
					input.value = '';
					input.style.color = '#000000';
				}else if(recorder.state == 'inactive') {
					recorder.start();
					audio.style.display = 'none';
					input.style.display = 'flex';
					microphone.style.background = 'red';
					microphone.style.borderRadius = '20px';
					microphone.style.filter = 'invert(0.1) brightness(300%) saturate(100%)';
					input.value = "recording...";
					input.style.color = 'red';
					console.log(recorder.state);

				}
			});
		});
}

export {recordMessage, createSendMessageBtnHndlr, createMessageInputHndlr, createOpenSettingsMessageHndlr, createCloseSettingsMessageHndlr, createDeleteMessageBlockHndlr, createVisibleSettingsMessageBlock,
	createEditMessageBlockHndlr, growInput, createHiddenSettingsMessageBlock
};