import {FetchModule, promiseMaker, router} from "../main";
import {API, responseStatuses} from "../constants/config";

async function channelInfo(id) {
	try {
		const response = await FetchModule._doGet({path: API.currentChannelMessages(id)});
		if (response.status !== 200) {
			throw new Error(
				`Didn't find channel: ${responseStatuses[response.status]}`);
		}
		const data = await response.json();
		await promiseMaker.createPromise('setLastSearchUsers', data['users']);
	} catch (error) {
		console.error(error);
	}
}

export default channelInfo;