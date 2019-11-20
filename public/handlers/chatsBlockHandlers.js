import {data, promiseMaker, router} from "../main";

function createWrkspaceBlockExpandHndlr() {
	const wrkspaceBlocksOuter = document.querySelectorAll('.wrkspace-block');
	wrkspaceBlocksOuter.forEach((wrkspaceBlockOuter)=> {
		const wrkspaceBlockSmall = wrkspaceBlockOuter.querySelector('.wrkspace-expandable');
		const wrkspaceBlockVisible = wrkspaceBlockOuter.querySelector('.wrkspace-visible');
		wrkspaceBlockVisible.addEventListener('click', wrkspaceBlockClickExpandEvent.bind(null, {wrkspaceBlockSmall: wrkspaceBlockSmall, wrkspaceBlockVisible:wrkspaceBlockVisible}));
	});
}

function wrkspaceBlockClickExpandEvent(params = {wrkspaceBlockSmall:null,wrkspaceBlockVisible : null}) {
	if (params.wrkspaceBlockSmall !== null) {
		if (!params.wrkspaceBlockSmall.classList.contains('wrkspace-expandable_clicked')) {
			params.wrkspaceBlockSmall.className += ' wrkspace-expandable_clicked';
			const arrowDown = params.wrkspaceBlockVisible.querySelector('.wrkspace-visible__chann-row__arrow__icon-down');
			arrowDown.classList.remove('hidden');
			const arrowUp = params.wrkspaceBlockVisible.querySelector('.wrkspace-visible__chann-row__arrow__icon-up');
			arrowUp.className += ' hidden';
		}
		else {
			params.wrkspaceBlockSmall.classList.remove('wrkspace-expandable_clicked');
			const arrowDown = params.wrkspaceBlockVisible.querySelector('.wrkspace-visible__chann-row__arrow__icon-down');
			arrowDown.className += ' hidden';
			const arrowUp = params.wrkspaceBlockVisible.querySelector('.wrkspace-visible__chann-row__arrow__icon-up');
			arrowUp.classList.remove('hidden');
		}

	}
}

function createChatBlockHndlr() {
	const messageWindow = document.querySelector('.all-chats-window');
	const chatUsersWChatID = data.getChatUsersWChatIDs();
	chatUsersWChatID.forEach((chat) => {
		const messageBlock = messageWindow.querySelector(`#chat-${chat.userId}`);
		messageBlock.addEventListener('click', chatBlockClickEvent.bind(null, {userId:chat.userId, chatId: chat.chatId}));
	});
}

async function chatBlockClickEvent(params = {userId:null, chatId:null}) {
	await promiseMaker.createPromise('getCurrentChatInfo', params.userId, params.chatId);
	router.go('/chat', params.chatId);
}

function createWrkspaceBlockHndlr() {
	const wrkspaceBlocksOuter = document.querySelectorAll('.wrkspace-block');
	wrkspaceBlocksOuter.forEach((wrkspaceBlockOuter)=> {
		const wrkSpaceId = parseFloat(wrkspaceBlockOuter.id.split('-')[1]);
		const visibleBlock = wrkspaceBlockOuter.querySelector('.wrkspace-visible');
		const createButton = visibleBlock.querySelector(".wrkspace-visible__chann-row__add-channel-button");
		createButton.addEventListener('click', () => router.go('/createChannel', wrkSpaceId));
		const infoButton = visibleBlock.querySelector(".wrkspace-visible__name-row__info-button");
		infoButton.addEventListener('click', () => router.go('/wrkspace', wrkSpaceId));
	});
}

function createWorkspaceButtonHndlr() {
	const wrkSpaceButton = document.querySelector(".wrkspaces-block__header__button__icon");
	wrkSpaceButton.addEventListener('click', ()=>{
		router.go('/createWrkSpace');
	}
	);
}

export {createChatBlockHndlr, createWrkspaceBlockExpandHndlr, createWrkspaceBlockHndlr, createWorkspaceButtonHndlr};