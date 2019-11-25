import {bus, data, promiseMaker, router} from "../main";
import {KEYWORDS} from "../constants/config";

function foundUserClickEvent(params = {personId:null, contentListRoot:null}) {
	const {personId, contentListRoot} = params;
	const ids = data.getChatUsersIds();
	const id = parseFloat(personId.split('-')[1]);
	if (contentListRoot.classList.contains('all-chats-window')) {
		if (!ids.includes(id)) {
			promiseMaker.createPromise('createChat', id).then(() => {
				const chatId = data.getChatIdByChatUserId(id);
				if (!chatId) {
					console.log('error finding chatId');
					router.go('mainPageView');
				} else {
					bus.emit('createWebsocketConn', null, chatId);
					promiseMaker.createPromise('getCurrentChatInfo', id, chatId).then(() => {
						bus.emit('deleteLastSearchUsers', null);
						router.open(KEYWORDS.chat, [chatId]);
					});
				}
			});
		} else {
			const chatId = data.getChatIdByChatUserId(id);
			bus.emit('deleteLastSearchUsers', null);
			router.open(KEYWORDS.chat, [chatId]);
		}
	}
	if (contentListRoot.classList.contains('wrkspace-search__search-container')) {
		bus.emit('addCurrentWrkspaceMember', null, id);
		const wrkspace = data.getCurrentWrkspace();
		promiseMaker.createPromise('alterWrkspace', wrkspace).then(() => {
			bus.emit('deleteLastSearchUsers', null);
			router.go('wrkspaceView', data.getCurrentWrkspaceId());
		});

	}
}

function createUserBlockHndlr(selector) {
	const contentListRoot = document.querySelector(selector);
	const persons = contentListRoot.querySelectorAll(".user-found");
	persons.forEach((person)=> {
		person.addEventListener('click', foundUserClickEvent.bind(null, {personId:person.id, contentListRoot : contentListRoot}));
	});
}

function foundMessageChatClickEvent(params = {messageId:null}) {
	const {messageId} = params;
	const fullMessage = data.getLastSearchFullMessageByMessageId(messageId.split('-')[1]);
	router.open(KEYWORDS.chatFoundMessage, [fullMessage.chatId, fullMessage.message.id]);
}

function createMessageFoundChatBlockHndlr() {
	const message = document.querySelectorAll(".message-chat-found");
	message.forEach((message)=> {
		message.addEventListener('click', foundMessageChatClickEvent.bind(null, {messageId:message.id}));
	});
}
function foundMessageChannelClickEvent(params = {messageId:null}) {
	const {messageId} = params;
	const fullMessage = data.getLastSearchFullMessageByMessageId(messageId.split('-')[1]);
	router.open(KEYWORDS.channelFoundMessage, [fullMessage.wrkspace.ID, fullMessage.channel.ID, fullMessage.message.id]);
}

function createMessageFoundChannelBlockHndlr() {
	const message = document.querySelectorAll(".message-channel-found");
	message.forEach((message)=> {
		message.addEventListener('click', foundMessageChannelClickEvent.bind(null, {messageId:message.id}));
	});
}

export {createUserBlockHndlr, createMessageFoundChatBlockHndlr, createMessageFoundChannelBlockHndlr};