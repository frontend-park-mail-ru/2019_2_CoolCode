import {bus, componentsStorage, data, router} from "../main";
import currentDate from "../modules/currentDate";
import {getRandomInt} from "../modules/random";
import {sendingFile} from "../backendDataFetchers/messagesInteraction";
import MyWorker from "../workers/profile.worker";
import {showFileContent, showPhotoContent} from "./chatViewHandlers";

function capturePhotoEvent() {
	const canvas = document.querySelector('.photo-create__canvas');
	const video = document.querySelector('.photo-create__video');
	const context = canvas.getContext('2d');
	context.drawImage(video, 0, 0, canvas.width, canvas.height);
	canvas.classList.remove('photo-create__canvas_hidden');
	if (!video.classList.contains('photo-create__video_hidden')) {
		video.classList = `${video.classList} photo-create__video_hidden`;
	}
	const captureBtns = document.querySelectorAll('.alert-photo__button-row_button');
	captureBtns.forEach((btn) => {
		switch (btn.dataset.section) {
		case 'capture':
			if (!btn.classList.contains('alert-photo__button-row_button_hidden')) {
				btn.classList = `${btn.classList} alert-photo__button-row_button_hidden`;
			}
			break;
		case 'recapture':
			btn.classList.remove('alert-photo__button-row_button_hidden');
			break;
		case 'sendPhoto':
			btn.classList.remove('alert-photo__button-row_button_hidden');
			break;
		}
	});
}

function recapturePhotoEvent() {
	const canvas = document.querySelector('.photo-create__canvas');
	const video = document.querySelector('.photo-create__video');
	video.classList.remove('photo-create__video_hidden');
	if (!canvas.classList.contains('photo-create__canvas_hidden')) {
		canvas.classList = `${canvas.classList} photo-create__canvas_hidden`;
	}
	const captureBtns = document.querySelectorAll('.alert-photo__button-row_button');
	captureBtns.forEach((btn) => {
		switch (btn.dataset.section) {
		case 'capture':
			btn.classList.remove('alert-photo__button-row_button_hidden');
			break;
		case 'recapture':
			if (!btn.classList.contains('alert-photo__button-row_button_hidden')) {
				btn.classList = `${btn.classList} alert-photo__button-row_button_hidden`;
			}
			break;
		case 'sendPhoto':
			if (!btn.classList.contains('alert-photo__button-row_button_hidden')) {
				btn.classList = `${btn.classList} alert-photo__button-row_button_hidden`;
			}
			break;
		}
	});
}

async function sendCapturedPhotoEvent() {
	const canvas = document.querySelector('.photo-create__canvas');
	const img = canvas.toDataURL("image/png");
	const date = new currentDate();
	const messageId = getRandomInt(10000);
	const chatBlock = componentsStorage.getChatBlock();
	let chatId = data.getCurrentChatId();
	if (!chatId) {
		chatId = data.getCurrentChannelId();
	}
	chatBlock.renderOutgoingMessage({
		id: messageId,
		author_id: data.getUserId(),
		message_time: date.getDate(),
		message_type: 1
	});
	const messageBlock = document.getElementById(`message-${messageId}`);
	messageBlock.querySelector('.primary-row__image-container__image').src = img;
	showPhotoContent(messageBlock);
	bus.emit('createMessagePhotoHandler', null, messageId);
	try {
		canvas.toBlob((async blob => {
			const formData = new FormData();
			formData.append('file', blob, `file${messageId}.png`);
			const result = await sendingFile(formData, chatId);
		}), 'image/png');

	} catch (error) {
		console.log(error);
		const date = new currentDate();
		chatBlock.renderErrorOutgoingMessage({author_id : data.getUserId(), text : 'haven\'t sent message', message_time:  date.getDate(), message_type: 1});
	}
	componentsStorage.setChatBlock(chatBlock);
	router.return();
}

export {capturePhotoEvent, recapturePhotoEvent, sendCapturedPhotoEvent};