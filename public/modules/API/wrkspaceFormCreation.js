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

export {createWrkspace};