import {bus, FetchModule, router, data, promiseMaker} from '../main';
import {API, responseStatuses} from "../constants/config";
async function handleLogout() {
	try {
		const response = await FetchModule._doDelete(
			{path: API.logout,
				data: '',
				contentType : 'application/json;charset=utf-8'}
		);
		if (response.status !== 200) {
			`Error while logout: ${responseStatuses[response.status]}`;
		}
		await promiseMaker.createPromise('clearData');
		await promiseMaker.createPromise('clearStorage');
		router.go('mainPageView');
	} catch (error) {
		console.error(error);
	}
}

export default handleLogout;