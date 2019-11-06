import {data, router} from "../main";
import {fetchUserInfo} from "../modules/API/websocketCreation";

function createWrkspaceBlockExpandHndlr() {
	let wrkspaceBlocksOuter = document.querySelectorAll('.bem-wrkspace-block');
	wrkspaceBlocksOuter.forEach((wrkspaceBlockOuter)=> {
		const wrkspaceBlockSmall = wrkspaceBlockOuter.querySelector('.bem-wrkspace-expandable');
		wrkspaceBlockOuter.addEventListener('click', wrkspaceBlockClickExpandEvent.bind(null, {wrkspaceBlockSmall: wrkspaceBlockSmall}));
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
	await fetchUserInfo(params.userId, params.chatId);
	router.go('/chat', params.chatId);
}

export {createChatBlockHndlr, createWrkspaceBlockExpandHndlr};