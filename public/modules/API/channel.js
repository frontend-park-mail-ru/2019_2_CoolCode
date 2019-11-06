import {data, FetchModule, promiseMaker} from "../../main";
import {getChats} from "./profile";
import {responseStatuses} from "../../constants/config";

async function createChannel(name, id) { /*creating new channel and fetching all chats info*/
	console.log(`Creating channel in wrkspace: ${id}`);
	try {
		let response = await FetchModule._doPost({path: `/workspaces/${id}/channels`, data: {
			name: name,
		},
		contentType : 'application/json;charset=utf-8'});
		if (response.status !== 200) {
			throw new Error(
				`Didn't create channel: ${responseStatuses[response.status]}`);
		}
		await promiseMaker.createPromise('getChats', data.getUserId());
	} catch (error) {
		console.error(error);
	}
}
export default createChannel;