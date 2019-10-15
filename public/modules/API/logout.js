import settings from '../config';
const {backend} = settings;
import {bus, router} from '../../main';
function handleLogout() {
	fetch(`${backend}/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: '',
		credentials: 'include',
		mode: 'cors',
	}).then(response => {
		if (response.status === 500) {
			throw new Error(
				`Серверу плохо:(: ${response.status}`);
		}
		if (response.status === 401) {
			throw new Error(
				`Ошибка авторизации: ${response.status}`);
		}
		if (response.status === 200) {
			return response.text();
		}
	})
		.then(data => {
			console.log(data);
			bus.emit('userLoggedIn', false);
			router.go('/');
		})
		.catch(err => {
			console.error(err);
		});
}

export default handleLogout;