import {bus, FetchModule, promiseMaker, router} from "../main";
import {API, responseStatuses} from "../constants/config";

async function findUser(query) {
	console.log(`Finding user with query: ${query}`);
	try {
		const response = await FetchModule._doGet({path: API.findUser(query)});
		if (response.status !== 200) {
			throw new Error(
				`Didn't find user: ${responseStatuses[response.status]}`);
		}
		const data = await response.json();
		await promiseMaker.createPromise('setLastSearchUsers', data['users']);
	} catch (error) {
		console.error(error);
	}
}

export default findUser;