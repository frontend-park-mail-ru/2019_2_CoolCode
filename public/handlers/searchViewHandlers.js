import {data, promiseMaker, router, bus} from "../main";

function foundUserClickEvent(params = {personId:null, contentListRoot:null}) {
	const ids = data.getChatUsersIds();
	const id = parseFloat(params.personId.split('-')[1]);
	if (params.contentListRoot.classList.contains('all-chats-window')) {
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
						router.go('chatView', chatId);
					});
				}
			});
		} else {
			const chatId = data.getChatIdByChatUserId(id);
			bus.emit('deleteLastSearchUsers', null);
			router.go('chatView', chatId);
		}
	}
	if (params.contentListRoot.classList.contains('wrkspace-search__search-container')) {
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

export {createUserBlockHndlr};