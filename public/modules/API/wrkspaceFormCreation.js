import {data, FetchModule, router} from "../../main";
import {getChats} from "./profile";

async function createWrkspace(name) {
	try {
		let response = await FetchModule._doPost({path: '/workspaces', data: {
			name: name,
		},
		contentType : 'application/json;charset=utf-8'});
		if (response.status !== 200) {
			throw new Error(
				`Didn't create chat: ${response.status}`);
		}
		await getChats(data.user.id);
	} catch (error) {
		console.error(error);
	}
}

function workspaceFormInteration() {
	let wrspaceForm = document.querySelector('.bem-wrkspace-form__form');
	wrspaceForm.addEventListener('submit', (event) => {
		event.preventDefault();
		let inputField = wrspaceForm.querySelector('.bem-wrkspace-form__form__input-field');
		let channelName = inputField.value;
		createWrkspace(channelName).then(() => router.go('/profile'));
	});
}

function wsBTM() {
	let btm = document.querySelectorAll(".bem-search-menu__button.bem-search-menu__button_style")[0];
	btm.addEventListener("click", (event)=>{
		event.preventDefault();
		router.go('/wrkspaceForm');
	}
	);
}

export {wsBTM, workspaceFormInteration};