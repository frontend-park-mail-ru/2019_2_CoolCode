import {bus, componentsStorage, data, router} from "../main";
import {deletingMessage, sendingMessage} from "../backendDataFetchers/messagesInteraction";
const channelTemplate = require('../components/ChannelBlock/channel.pug');
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channel-header.css';
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channelHeaderMenuItems/channelHeaderMenuItems.css';
import {keys} from "../constants/config";
import currentDate from "../modules/currentDate";
import {sendingMessageChannel} from "../backendDataFetchers/channelMessagesInteraction";
import {growInput} from "./chatViewHandlers";
const addMemberTempl = require('../components/ChannelBlock/addMember.pug');
const infoTemplate = require('../components/ChannelBlock/info.pug');

function menuHandlers(id) {
	const contentListRoot = document.querySelector('.header');
	const menuInfo = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__info');
	const menuFind = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__find');
	const menuAdd = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__add');
	const menuDelete = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__delete');
	menuAdd.addEventListener('click', ()=>{
		contentListRoot.insertAdjacentHTML("beforebegin", addMemberTempl({viewType: "addMember"}));
		//router.go('/addMember', id);
	 });
	menuInfo.addEventListener('click', ()=>{
		contentListRoot.insertAdjacentHTML("beforebegin", infoTemplate());
		const infoText = document.querySelector('.channelHeaderMenuItems__info__text.channelHeaderMenuItems__info_style__text');
		infoText.addEventListener('dblclick', (event)=>{
			alert(infoText.textContent);
		});
		//router.go('/channelInfo', id);
	});

}

function chooseSendMessageChannelEvent() {
	event.preventDefault();
	if (data.getChosenMessageId()) {
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

async function sendMessageChannelEvent() {
	const channelBlock = componentsStorage.getChatBlock();
	const text = channelBlock.getMessageInputData();
	if (text !== '') {
		console.log(`new message channel : ${text}`);
		channelBlock.setMessageInputData('');
		const date = new currentDate();
		try {
			const messageId = await sendingMessageChannel(text, date.getDate(), data.getCurrentChannelId());
			channelBlock.renderOutgoingMessage({id: messageId, author_id : data.getUserId(), text: text, message_time: date.getDate()});
		} catch (error) {
			console.log(`error sending message in channel : ${text}`);
			//channelBlock.renderErrorOutgoingMessage({author_id : data.getUserId(), text: text, message_time: date});
		}

	}
	componentsStorage.setChatBlock(channelBlock);
}

export { menuHandlers, createMessageInputChannelHndlr, createSendMessageBtnChannelHndlr};