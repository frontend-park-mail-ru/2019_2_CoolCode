import {bus, FetchModule, router, data} from "../../main";
import {getChats, getUserInfo, saveUserPhoto} from "./profile";
import {createWebsocketConn} from "./websocketCreation";
import sendRight from "./sendMessege";
const rightMsg = require('../../components/Chat/msgRight.pug');


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
		await getChats(data.user.id);
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
						createWebsocketConn(chatId, id);
					}
				});
			}
			else{
				router.go('/profile');
			}
		});
	});
}

function messages(id) {
	let send = document.getElementsByClassName("icon-chat-container")[1];
	send.addEventListener("click", function (event) {
		event.preventDefault();
		let text = document.getElementsByClassName("message-text-input")[0].value;
		sendRight(text,id);
		document.querySelector('.bem-column_right').innerHTML += rightMsg({text:text});
	});

}

export {foundUsersClick, messages};