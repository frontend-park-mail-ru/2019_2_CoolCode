import {bus, componentsStorage, data, promiseMaker, router} from "../main";
import {editingMessage, sendingFile, sendingMessage} from "../backendDataFetchers/messagesInteraction";
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channel-header.scss';
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channelHeaderMenuItems/channel-header-menu.css';
import {keys} from "../constants/config";
import currentDate from "../modules/currentDate";
import {sendingFileChannel, sendingMessageChannel} from "../backendDataFetchers/channelMessagesInteraction";
import {
	createHiddenSettingsMessageBlock,
	createVisibleSettingsMessageBlock, deleteSendingPhoto,
	growInput, showAudioContent, showFileContent,
	showPhotoContent, showTextArea
} from "./chatViewHandlers";
import {alterChannel} from "../backendDataFetchers/alterEntities";
import MyWorker from "../workers/profile.worker";
import {getRandomInt} from "../modules/random";
const infoTemplate = require('../components/ChannelBlock/info.pug');

async function menuClickEvent() {
	switch (event.target.dataset.section) {
	case 'addMember':
		router.go('addMemberView');
		break;
	case 'viewInfo':
		menuHandlersInfo();
		break;
	case 'deleteChannel':
		await promiseMaker.createPromise('deleteChannel', data.getCurrentChannelId());
		router.go('profileView');
		break;
	case 'leaveChannel':
		await promiseMaker.createPromise('leaveChannel', data.getCurrentChannelId());
		router.go('profileView');
		break;
	}
}

function menuHandlers() {
	const menuAdd = document.querySelector('.channel-header__dropdown__dropdown-content');
	menuAdd.addEventListener('click', menuClickEvent.bind(event, {}));
}

function menuHandlersInfo() {
	const contentListRoot = document.querySelector('.header');
	contentListRoot.insertAdjacentHTML("beforebegin", infoTemplate());
	const block = document.querySelector('.channel-header-menu__info.channel-header-menu__info_style');
	const lay = document.querySelector('.channel-header-menu__info_overlay');
	block.style.display = 'flex';
	lay.style.display = 'flex';
	const ok = block.querySelector('.wrkspace-form__form__submit-button.wrkspace-form__form__submit-button_style');
	ok.addEventListener('click', () => {
		block.style.display = "none";
		lay.style.display = 'none';
	});
	lay.addEventListener('click', () => {
		block.style.display = "none";
		lay.style.display = 'none';
	});
}

function addMemberClickEvent(params = {memberId:null, contentListRoot:null}) {
	const {memberId, contentListRoot} = params;
	const id = parseFloat(memberId.split('-')[1]);
	bus.emit('addCurrentChannelMember', null, id);
	const channel = data.getCurrentChannel();
	promiseMaker.createPromise('alterChannel', channel).then(() => {
		componentsStorage.clearForm();
		router.return();
	});

}

function createAddChannelMemberHndlr() {
	const contentListRoot = document.querySelector('.channel-add-form__form');
	const persons = contentListRoot.querySelectorAll(".member");
	persons.forEach((person)=> {
		person.addEventListener('click', addMemberClickEvent.bind(null, {memberId:person.id, contentListRoot : contentListRoot}));
	});
}

function chooseSendMessageChannelEvent() {
	event.preventDefault();
	switch (data.getInputType()) {
	case 0:
		if (data.getChosenMessageId()) {
			sendEditedMessageChannelEvent();
		} else {
			sendMessageChannelEvent();
		}
		break;
	case 1:
		sendPhotosChannelEvent();
		break;
	case 2:
		sendRecordEventChannel();
		break;
	}
}

function createMessageInputChannelHndlr() {
	const messageInput = document.querySelector(".input__text");
	messageInput.addEventListener('keypress', function (event) {
		if (event.which === keys.ENTER) {
			chooseSendMessageChannelEvent(event);
		}
	});
	messageInput.addEventListener('input', growInput.bind(null, messageInput));

}

function createSendMessageBtnChannelHndlr() {
	const sendBtn = document.querySelectorAll(".input__icon-container__icon")[2];
	sendBtn.addEventListener('click', chooseSendMessageChannelEvent);
}

async function sendRecordEventChannel() {
	const channelBlock = componentsStorage.getChatBlock();
	const chunks = data.getChunks();
	if (chunks.length > 0) {
		const date = new currentDate();
		showTextArea();
		const formData = new FormData();
		formData.append('file', chunks[0], 'file.webm');
		const channelId = data.getCurrentChannelId();
		try {
			const messageId = getRandomInt(10000);
			channelBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), message_time: date.getDate(), message_type: 1});
			const result = await sendingFileChannel(formData, channelId);
			const worker = new MyWorker();
			worker.postMessage(chunks[0]);
			worker.onmessage = function (result) {
				const messageBlock = document.getElementById(`message-${messageId}`);
				messageBlock.querySelector('.primary-row__audio').src = result.data;
				showAudioContent(messageBlock);
			};
		} catch (error) {
			console.log(error);
			// const date = new currentDate();
			// channelBlock.renderErrorOutgoingMessage({
			// 	author_id: data.getUserId(),
			// 	text: 'haven\'t sent message',
			// 	message_time: date.getDate(),
			// 	message_type: 1
			// });
		}
	}
	componentsStorage.setChatBlock(channelBlock);
}

async function sendPhotosChannelEvent() {
	const channelBlock = componentsStorage.getChatBlock();
	const chosenFiles = data.getChosenFiles();
	for (let i = 0; i < chosenFiles.length; i++) {
		if (chosenFiles[i]) {
			const currentFile = chosenFiles[i].file;
			deleteSendingPhoto();
			const date = new currentDate();
			const formData = new FormData();
			formData.append('file', currentFile);
			const chatId = data.getCurrentChannelId();
			try {
				const messageId = getRandomInt(10000);
				channelBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), message_time: date.getDate(), message_type: 1});
				const result = await sendingFileChannel(formData, chatId);
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
				console.log(`error sending message in channel`);
				// const date = new currentDate();
				// chatBlock.renderErrorOutgoingMessage({
				// 	author_id: data.getUserId(),
				// 	text: 'haven\'t sent message',
				// 	message_time: date.getDate(),
				// 	message_type: 1
				// });
			}

		}
	}
	componentsStorage.setChatBlock(channelBlock);
}

async function sendEditedMessageChannelEvent() {
	const chatBlock = componentsStorage.getChatBlock();
	const text = chatBlock.getMessageInputData();
	if (text !== '') {
		console.log(`edited message : ${text}`);
		chatBlock.setMessageInputData('');
		const date = new currentDate();
		try {
			await editingMessage(text, date.getDate(), data.getChosenMessageId());
			chatBlock.renderEditedMessage(data.getUser(), {id: data.getChosenMessageId(), author_id : data.getUserId(), text: text, message_time: date.getDate(), message_type: 0});
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

async function sendMessageChannelEvent() {
	const channelBlock = componentsStorage.getChatBlock();
	const text = channelBlock.getMessageInputData();
	if (text !== '') {
		console.log(`new message channel : ${text}`);
		channelBlock.setMessageInputData('');
		const date = new currentDate();
		const messageId = getRandomInt(10000);
		try {
			channelBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), text: text, message_time: date.getDate(), message_type: 0});
			const messageIdValid = await sendingMessageChannel(text, date.getDate(), data.getCurrentChannelId());
			const messageBlock = document.getElementById(`message-${messageId}`);
			messageBlock.id = `message-${messageIdValid}`;
		} catch (error) {
			console.log(`error sending message in channel : ${text}`);
			//channelBlock.renderErrorOutgoingMessage({author_id : data.getUserId(), text: text, message_time: date});
		}

	}
	componentsStorage.setChatBlock(channelBlock);
}

function likeEvent() {
	const {messageId} = event.currentTarget.params;
	const eventTarget = event.target;
	eventTarget.removeEventListener('click', likeEvent);
	setTimeout(() => {
	 	eventTarget.addEventListener('click', likeEvent);
	}, 1000);
	const id = parseFloat(messageId.split('-')[1]);
	promiseMaker.createPromise('likeMessage', id).then(() => {
		const channelBlock = componentsStorage.getChatBlock();
		channelBlock.likeMessage(id);
	});
};

function likeHoverEvent() {
	if (event.type == 'mouseover') {
		event.currentTarget.src = '/images/like_hover.png';
	}
	if (event.type == 'mouseout') {
		event.currentTarget.src = '/images/like_1.png';
	}
}

function createLikeBtnHndlr() {
	const userMessages = document.querySelectorAll('.chat-msg_left');
	userMessages.forEach((userMessage) => {
		const settingsMessageBtn = userMessage.querySelector('.secondary-row__like__button__icon');
		settingsMessageBtn.addEventListener('mouseover', likeHoverEvent);
		settingsMessageBtn.addEventListener('mouseout', likeHoverEvent);
	});
}

export { createMessageInputChannelHndlr, createSendMessageBtnChannelHndlr, createAddChannelMemberHndlr,
	menuHandlers, createLikeBtnHndlr, likeEvent};

