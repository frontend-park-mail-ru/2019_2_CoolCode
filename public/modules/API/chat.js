import {bus, FetchModule, router, data} from "../../main";

async function createChat(id, username) {
	try {
		let response = await FetchModule._doPost({path: '/chats', data: {
			user_id:parseFloat(id),
		},
		contentType : 'application/json;charset=utf-8'});
		if (response.status !== 200) {
			throw new Error(
				`Didn't create chat: ${response.status}`);
		}
		data.addChat({name: username,
			members : [parseFloat(id)],
			number: 0,
			lastMsg: "",});
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
			console.log(ids.includes(parseFloat(person.id)));
			if (!(ids.includes(parseFloat(person.id)))) {
				let name = person.querySelector(".person-search");
				createChat(person.id, name.innerHTML);
			}
			else{
				router.go('/profile');
			}
		});
	});
}

export {foundUsersClick};