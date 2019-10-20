import {bus, FetchModule, router} from '../../main';
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
			let data = await response.text();
			console.log(data);
			bus.emit('loggedInUser', false);
			router.go('/');
		}
	} catch (error) {
		console.error(error);
	}
}

export default handleLogout;