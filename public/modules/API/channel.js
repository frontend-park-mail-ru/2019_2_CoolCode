import {data, FetchModule} from "../../main";
import {getChats} from "./profile";

async function createChannel(name, id) {
	try {
		let response = await FetchModule._doPost({path: `/workspaces/${id}/channels`, data: {
			name: name,
		},
		contentType : 'application/json;charset=utf-8'});
		if (response.status !== 200) {
			throw new Error(
				`Didn't create chat: ${response.status}`);
		}
		console.log("POST OK");
		console.log("AAA ", data.userWrkSpaces);
	} catch (error) {
		console.error(error);
	}
}
export default createChannel;