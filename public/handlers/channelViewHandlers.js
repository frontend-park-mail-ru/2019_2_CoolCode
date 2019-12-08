import {bus, componentsStorage, data, promiseMaker, router} from "../main";
import {editingMessage} from "../backendDataFetchers/messagesInteraction";
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channel-header.scss';
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channelHeaderMenuItems/channel-header-menu.css';
import {keys} from "../constants/config";
import currentDate from "../modules/currentDate";
import {sendingMessageChannel} from "../backendDataFetchers/channelMessagesInteraction";
import {createHiddenSettingsMessageBlock, createVisibleSettingsMessageBlock, growInput} from "./chatViewHandlers";
import {alterChannel} from "../backendDataFetchers/alterEntities";
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

function addMemberOverlayHndlr() {
	const lay = document.querySelector('.channel-header-menu__info_overlay');
	lay.style.display = 'flex';
	lay.addEventListener('click', () => {
		lay.style.display = 'none';
		router.return();
	});
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
	if (data.getChosenMessageId()) {
		sendEditedMessageChannelEvent();
	} else {
		sendMessageChannelEvent();
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
	const sendBtn = document.querySelectorAll(".input__icon-container__icon")[1];
	sendBtn.addEventListener('click', chooseSendMessageChannelEvent);
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
		try {
			const messageId = await sendingMessageChannel(text, date.getDate(), data.getCurrentChannelId());
			channelBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), text: text, message_time: date.getDate(), message_type: 0});
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
	menuHandlers, addMemberOverlayHndlr, createLikeBtnHndlr, likeEvent};

