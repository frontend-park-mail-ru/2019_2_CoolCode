import {bus, FetchModule, router, data} from '../../main';
async function handleLogout() {
	try {
		let response = await FetchModule._doDelete({path: '/logout',
			data: '',
			contentType : 'application/json;charset=utf-8'});
		if (response.status === 500) {
			throw new Error(
				`Серверу плохо:(: ${response.status}`);
		}
		if (response.status === 401) {
			throw new Error(
				`Ошибка авторизации: ${response.status}`);
		}
		if (response.status === 200) {
			let responseAnswer = await response.text();
			console.log(responseAnswer);
			bus.emit('loggedInUser', false);
			data.clear();
			router.go('/');
		}
	} catch (error) {
		console.error(error);
	}
}

export default handleLogout;