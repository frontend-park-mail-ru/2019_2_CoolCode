import {bus, FetchModule, promiseMaker, router} from "../main";
import {responseStatuses} from "../constants/config";

async function findUser(query) {
	console.log(`Finding user with query: ${query}`);
	try {
		let response = await FetchModule._doGet({path: `/users/${query}`});
		if (response.status !== 200) {
			throw new Error(
				`Didn't find user: ${responseStatuses[response.status]}`);
		}
		let data = await response.json();
		await promiseMaker.createPromise('setLastSearchUsers', data['users']);
		router.go('/search', query);
	} catch (error) {
		console.error(error);
	}
}

export default findUser;