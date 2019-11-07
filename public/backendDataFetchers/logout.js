import {bus, FetchModule, router, data, promiseMaker} from '../main';
import {responseStatuses} from "../constants/config";
async function handleLogout() {
	try {
		let response = await FetchModule._doDelete({path: '/logout',
			data: '',
			contentType : 'application/json;charset=utf-8'});
		if (response.status !== 200) {
			`Error while logout: ${responseStatuses[response.status]}`;
		}
		await promiseMaker.createPromise('clearData');
		router.go('/');
	} catch (error) {
		console.error(error);
	}
}

export default handleLogout;