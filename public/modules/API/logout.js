import createMainPage from './mainpage';
import settings from '../config';

const {backend} = settings;

function handleLogout(application) {
	fetch(`${backend}/logout`, {
		method: 'DELETE',
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
		if (response.status!==200){
			throw new Error(
				`Ошибка выхода: ${response.status}`);
		}
	})
		.then(data => {
			console.log(data);
			createMainPage(application);
		})
		.catch(err => {
			console.error(err);
		});
}

export default handleLogout;