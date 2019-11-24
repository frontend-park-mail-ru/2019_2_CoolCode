import {bus, componentsStorage, data, router} from "../main";
import {deletingMessage, sendingMessage} from "../backendDataFetchers/messagesInteraction";
const channelTemplate = require('../components/ChannelBlock/channel.pug');
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channel-header.css';
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channelHeaderMenuItems/channelHeaderMenuItems.css';
import {keys} from "../constants/config";
import currentDate from "../modules/currentDate";
import {sendingMessageChannel} from "../backendDataFetchers/channelMessagesInteraction";
import {growInput} from "./chatViewHandlers";
import {
	addMemberinChanell,
	addMemberinChanellFunc,
	getAnyUserInfo,
	getUserbyId
} from "../backendDataFetchers/gettingInfo";

const addMemberTempl = require('../components/ChannelBlock/addMember.pug');
const infoTemplate = require('../components/ChannelBlock/info.pug');

function menuHandlersDelete() {
	const menuDelete = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__delete');
}

function menuHandlersSearch() {
	const menuSearch = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__find');
}

function menuHandlersAdd() {
	const contentListRoot = document.querySelector('.header');
	const menuAdd = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__add');
	menuAdd.addEventListener('click', ()=>{
		router.go('addMember');
	});
}

function addMemberOverlayHndlr() {
	const lay = document.querySelector('.channelHeaderMenuItems__info_overlay');
	lay.style.display = 'flex';
	lay.addEventListener('click', () => {
		lay.style.display = 'none';
		router.return();
	});
}

function addMemberinChannel(member, idMember, channel) {
	member.addEventListener('click',()=>{
		let members = channel.Members;
		let admin = channel.Admins;
		let idChannel = channel.ID;
		let nameChannel = channel.Name;
		members.push(idMember);
		addMemberinChanellFunc(idChannel, admin, members, nameChannel);
		const lay = document.querySelector('.channelHeaderMenuItems__info_overlay');
		lay.style.display = 'none';
		router.return();
	});
}

function menuHandlersInfo() {
	const contentListRoot = document.querySelector('.header');
	const menuInfo = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__info');
	menuInfo.addEventListener('click', ()=>{
		contentListRoot.insertAdjacentHTML("beforebegin", infoTemplate());
		const block = document.querySelector('.channelHeaderMenuItems__info.channelHeaderMenuItems__info_style');
		const lay = document.querySelector('.channelHeaderMenuItems__info_overlay');
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

export { createMessageInputChannelHndlr, createSendMessageBtnChannelHndlr, addMemberinChannel,
	menuHandlersAdd,menuHandlersInfo, menuHandlersDelete, menuHandlersSearch, addMemberOverlayHndlr };

