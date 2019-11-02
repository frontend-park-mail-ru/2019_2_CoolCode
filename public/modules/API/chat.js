import {bus, FetchModule, router, data} from "../../main";
import {getChats, getUserInfo, saveUserPhoto} from "./profile";
import {createWebsocketConn, fetchUserInfo} from "./websocketCreation";
import sendRight from "./sendMessage";
const rightMsg = require('../../components/Chat/msgRight.pug');
const leftMsg = require('../../components/Chat/msgLeft.pug');

async function createChat(id) {
	try {
		let response = await FetchModule._doPost({path: '/chats', data: {
			user_id:parseFloat(id),
		},
		contentType : 'application/json;charset=utf-8'});
		if (response.status !== 200) {
			throw new Error(
				`Didn't create chat: ${response.status}`);
		}
		await getChats(data.user.id, 0);
		// getUserInfo(id).then((user) => {
		// 	console.log('USER ' + user);
		// 	data.setCurrentChatUser(user);
		// });
		// await saveUserPhoto(id);
	} catch (error) {
		console.error(error);
	}
}

function foundUsersClick() {
	let persons = document.querySelectorAll(".bem-user-found");
	persons.forEach((person)=> {
		person.addEventListener("click", function (event) {
			event.preventDefault();
			let ids = data.getChatUsers();
			let id = parseFloat(person.id.split('-')[1]);
			console.log(ids.includes(id));
			if (!(ids.includes(id))) {
				console.log('!!!' + id);
				createChat(id).then(() => {
					let chatId = data.getChatIdByChatUserId(id);
					if (!chatId) {
						console.log('error finding chatId');
						router.go('/');
					} else {
						createWebsocketConn(chatId);
						fetchUserInfo(id, chatId).then(() => router.go('/chat', chatId));

					}
				});
			}
			else{
				router.go('/profile');
			}
		});
	});
}
function messages(userId) {
	let send = document.getElementsByClassName("bem-chat-column-input__icon-container__icon")[1];
	console.log("send right msg", send);
	send.addEventListener("click", function (event) {
		event.preventDefault();
		let msgWindow = document.querySelector('.bem-chat-column-msgwindow');
		let text = document.getElementsByClassName('bem-chat-column-input__text')[0].value;
		if(text !== "") {
			console.log(text);
			sendRight(text,data.getChatIdByChatUserId(userId));
			document.getElementsByClassName('bem-chat-column-input__text')[0].value = '';
			let today = new Date();
			let time = today.getHours() + ":" + today.getMinutes();
			msgWindow.innerHTML += rightMsg({text:text, time:time});
		}
		msgWindow.scrollTop = msgWindow.scrollHeight - msgWindow.clientHeight;
	});
}

function renderNewMessage(message) {
	if (message.event_type === 1) {
		let mesgBody = message.body;
		if (mesgBody.author_id === data.getUserId()) {
			console.log(`my message sent: ${mesgBody.text}`);
		} else if (mesgBody.author_id === data.getCurrentChatUserId()) {
			let msgWindow = document.querySelector('.bem-chat-column-msgwindow');
			msgWindow.innerHTML += leftMsg({text: mesgBody.text, time: 'add time field'});
			msgWindow.scrollTop = msgWindow.scrollHeight - msgWindow.clientHeight;
		} else {
			let messageWindow = document.querySelector('.bem-all-chats-window'); //TODO: render whole template, but only if messages have date!!!
			let messageBlock = messageWindow.querySelector(`#chat-${mesgBody.author_id}`);
			let lastMessage = messageBlock.querySelector('.bem-chat-block__message-column__message-row__last-message');
			lastMessage.innerHTML = mesgBody.text;
		}
	}
}

export {foundUsersClick, messages, renderNewMessage};

