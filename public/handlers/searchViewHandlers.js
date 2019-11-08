import {data, promiseMaker, router, bus} from "../main";

function foundUserClickEvent(params = {personId:null}) {
	const ids = data.getChatUsersIds();
	const id = parseFloat(params.personId.split('-')[1]);
	if (!ids.includes(id)) {
		promiseMaker.createPromise('createChat', id).then(() => {
			const chatId = data.getChatIdByChatUserId(id);
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
		const chatId = data.getChatIdByChatUserId(id);
		router.go('/chat', chatId);
	}
}

function createUserBlockHndlr() {
	const persons = document.querySelectorAll(".user-found");
	persons.forEach((person)=> {
		person.addEventListener('click', foundUserClickEvent.bind(null, {personId:person.id}));
	});
}

export {createUserBlockHndlr};