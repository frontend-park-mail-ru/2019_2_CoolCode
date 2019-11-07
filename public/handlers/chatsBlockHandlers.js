import {data, promiseMaker, router} from "../main";

function createWrkspaceBlockExpandHndlr() {
	let wrkspaceBlocksOuter = document.querySelectorAll('.bem-wrkspace-block');
	wrkspaceBlocksOuter.forEach((wrkspaceBlockOuter)=> {
		const wrkspaceBlockSmall = wrkspaceBlockOuter.querySelector('.bem-wrkspace-expandable');
		const wrkspaceBlockVisible = wrkspaceBlockOuter.querySelector('.bem-wrkspace-visible');
		wrkspaceBlockVisible.addEventListener('click', wrkspaceBlockClickExpandEvent.bind(null, {wrkspaceBlockSmall: wrkspaceBlockSmall}));
	});
}

function wrkspaceBlockClickExpandEvent(params = {wrkspaceBlockSmall:null}) {
	if (!params.wrkspaceBlockSmall.classList.contains('bem-wrkspace-expandable_clicked')) params.wrkspaceBlockSmall.className += ' bem-wrkspace-expandable_clicked';
	else params.wrkspaceBlockSmall.classList.remove('bem-wrkspace-expandable_clicked');
}

function createChatBlockHndlr() {
	let messageWindow = document.querySelector('.bem-all-chats-window');
	let chatUsersWChatID = data.getChatUsersWChatIDs();
	chatUsersWChatID.forEach((chat) => {
		let messageBlock = messageWindow.querySelector(`#chat-${chat.userId}`);
		messageBlock.addEventListener('click', chatBlockClickEvent.bind(null, {userId:chat.userId, chatId: chat.chatId}));
	});
}

async function chatBlockClickEvent(params = {userId:null, chatId:null}) {
	await promiseMaker.createPromise('getCurrentChatInfo', params.userId, params.chatId);
	router.go('/chat', params.chatId);
}

function createWrkspaceBlockHndlr() {
	let wrkspaceBlocksOuter = document.querySelectorAll('.bem-wrkspace-block');
	wrkspaceBlocksOuter.forEach((wrkspaceBlockOuter)=> {
		let wrkSpaceId = parseFloat(wrkspaceBlockOuter.id.split('-')[1]);
		let visibleBlock = wrkspaceBlockOuter.querySelector('.bem-wrkspace-visible');
		let createButton = visibleBlock.querySelector(".bem-wrkspace-visible__info-column__chann-row__add-channel-button");
		createButton.addEventListener('click', () => router.go('/createChannel', wrkSpaceId));
	});
}

export {createChatBlockHndlr, createWrkspaceBlockExpandHndlr, createWrkspaceBlockHndlr};