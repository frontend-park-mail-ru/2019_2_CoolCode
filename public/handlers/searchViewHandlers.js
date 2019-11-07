import {data, promiseMaker, router, bus} from "../main";

function foundUserClickEvent(params = {personId:null}) {
	let ids = data.getChatUsersIds();
	let id = parseFloat(params.personId.split('-')[1]);
	if (!(ids.includes(id))) {
		promiseMaker.createPromise('createChat', id).then(() => {
			let chatId = data.getChatIdByChatUserId(id);
			if (!chatId) {
				console.log('error finding chatId');
				router.go('/');
			} else {
				bus.emit('createWebsocketConn', null, chatId);
				promiseMaker.createPromise('getCurrentChatInfo', id, chatId).then(() => router.go('/chat', chatId));
			}
		});
	}
	else{
		let chatId = data.getChatIdByChatUserId(id);
		router.go('/chat', chatId);
	}
}

function createUserBlockHndlr() {
	let persons = document.querySelectorAll(".bem-user-found");
	persons.forEach((person)=> {
		person.addEventListener('click', foundUserClickEvent.bind(null, {personId:person.id}));
	});
}

export {createUserBlockHndlr};