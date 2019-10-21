import {bus, FetchModule, router, data} from "../../main";
import {getChats} from "./profile";

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
		router.go('/chat');
	} catch (error) {
		console.error(error);
	}
}

function foundUsersClick() {
	let persons = document.querySelectorAll(".row.user");
	persons.forEach((person)=> {
		person.addEventListener("click", function (event) {
			event.preventDefault();
			let ids = data.getChatUsers();
			let id = person.id[person.id.length - 1];
			console.log(ids.includes(parseFloat(id)));
			if (!(ids.includes(parseFloat(id)))) {
				createChat(id);
			}
			else{
				router.go('/profile');
			}
		});
	});
}

export {foundUsersClick};