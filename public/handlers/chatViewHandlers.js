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
	const stickers = document.querySelector(".input__content-container__sticker.input__content-container__sticker_style");
	stickers.style.display = "none";
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

function createSendMessageBtnHndlr() {
	const sendBtn = document.querySelectorAll(".input__icon-container__icon")[2];
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
	const image = imagesContainer.querySelector('.attach-component');
	image.remove();
	if (imagesContainer.childNodes.length === 0) {
		showTextArea();
	}
}

function showAudioBlock() {
	document.querySelector('.input__record').classList.remove('input__record_hidden');
	document.querySelector('.input__text').classList += ' input__text_hidden';
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

async function sendRecordEvent() {
	const chatBlock = componentsStorage.getChatBlock();
	const chunks = data.getChunks();
	if (chunks.length > 0) {
		showTextArea();
		const date = new currentDate();
		const formData = new FormData();
		formData.append('file', chunks[0],'file.webm');
		let chatId = data.getCurrentChatId();
		if (!chatId) {
			chatId = data.getCurrentChannelId();
		}
		try {
			const result = await sendingFile(formData, chatId);
			const messageId = result.id;
			chatBlock.renderOutgoingMessage(result);

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
		try {
			const messageId = await sendingMessage(text, date.getDate(), data.getCurrentChatId());
			chatBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), text: text, message_time: date.getDate(), message_type: 0});

		} catch (error) {
			chatBlock.renderErrorOutgoingMessage({author_id : data.getUserId(), text: text, message_time: date, message_type: 0});
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

function onRecordingReady(e) {
	let chunks = [];
	chunks.length = 0;
	chunks.push(e.data);
	bus.emit('setChunks', null, chunks);
	const audio = document.getElementById('audio');
	showAudioBlock();
	audio.src = URL.createObjectURL(e.data);// e.data contains a blob representing the recording
	//audio.play();
}

function recordEvent() {
	const microphone = event.currentTarget;
	const input = document.querySelector('.input__text');
	const {recorder} = microphone.params;
	if(recorder.state == 'recording') {
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

function recordMessage() {
	navigator.mediaDevices.getUserMedia({
		audio: true
	})
		.then(function (stream) {
			const recorder = new MediaRecorder(stream);
			recorder.addEventListener('dataavailable', onRecordingReady);
			const microphone = document.querySelectorAll(".input__icon-container__icon")[1];
			microphone.params = {recorder: recorder};
			microphone.addEventListener('click', recordEvent);
		});
}

function showStickers() {
	const stickers = document.querySelector(".input__content-container__sticker.input__content-container__sticker_style");
	stickers.addEventListener('click', (e)=>{
		const block = document.querySelector(".sticker-block");
		if(block.style.display == "flex") {
			block.style.display = "none";
		}else {
			block.style.display = "flex";
		}
	});
}
function buyStickers(stickers) {
	const stickersAll = data.getStickers();
	stickersAll.forEach((id)=>{
		const s = document.querySelector(`.stickerpack-${id}`);
		s.style.filter = 'grayscale(100%)';
	});
	for(let i = 0; i < stickers.length; i++) {
		const s = document.querySelector(`.stickerpack-${stickers[i]}`);
		s.style.filter = 'none';
		s.addEventListener('click', (e)=>{
			const stickerId = e.target.getAttribute("id");//чтобы отправить на сервер
			//нарисовать
		});
	};
	stickersAll.forEach((id)=>{
		const s = document.querySelector(`.stickerpack-${id}`);//id стикерпака
		if(s.style.filter == 'grayscale(100%)') {
			s.addEventListener('click',(e)=>{
				// const stickerId = e.target.getAttribute("id");
				// const stickerScr = e.target.src;
				//предложить купить
				adviceBuy(id);
			});
		}

	});

}
const infoTemplate = require('../components/ChatBlock/advice.pug');
function adviceBuy(stickerackID) {
	const contentListRoot = document.querySelector('.header');
	contentListRoot.insertAdjacentHTML("beforebegin", infoTemplate());
	const block = document.querySelector('.channel-header-menu__advice.channel-header-menu__advice_style');
	const lay = document.querySelector('.channel-header-menu__advice_overlay');
	block.style.display = 'flex';
	lay.style.display = 'flex';
	const ok = block.querySelector('.wrkspace-form__form__submit-button.wrkspace-form__form__submit-button_style');
	ok.addEventListener('click', () => {
		block.style.display = "none";
		lay.style.display = 'none';
		buy(stickerackID);
	});
	lay.addEventListener('click', () => {
		block.style.display = "none";
		lay.style.display = 'none';
	});
}
function buy(stickerackID) {
	const paymentMethods = [{
		supportedMethods: 'basic-card',
		data: {
			supportedNetworks: [
				'visa', 'mastercard', 'amex', 'discover',
				'diners', 'jcb', 'unionpay'
			]
		}
	}, {
		supportedMethods: 'https://bobpay.xyz/pay',
	}];
	const paymentDetails = {
		total: {
			label: 'Buy Stickers',
			amount: { currency: 'RUB', value: '0.99' },
		},
	};
	const paymentOptions = {
		requestShipping: false,
		requestPayerEmail: true,
		requestPayerPhone: true,
		requestPayerName: true,
		shippingType: 'delivery'
	};
	const request = new PaymentRequest(paymentMethods, paymentDetails, paymentOptions);
	request.show().then(response => {
		console.log(response);
		// [process payment]
		// send to a PSP etc.
		response.complete('success');
		const s = document.querySelector(`.stickerpack-${stickerackID}`);
		s.style.filter = 'none';
	});
}

export {buyStickers, showStickers, recordMessage, createSendMessageBtnHndlr, createMessageInputHndlr, createOpenSettingsMessageHndlr, createCloseSettingsMessageHndlr, createDeleteMessageBlockHndlr, createVisibleSettingsMessageBlock,
	createEditMessageBlockHndlr, growInput, createHiddenSettingsMessageBlock, showPhotoContent, showTextArea
};