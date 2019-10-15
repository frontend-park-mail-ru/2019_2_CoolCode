import settings from '../config';
const { backend } = settings;

import {bus, router} from '../../main';

async function createMainPage () {
	try {
		let response = await fetch(`${backend}/users`, {
			method: 'GET',
			credentials: 'include',
			mode: 'cors',
		});
		bus.emit('userLoggedIn', response.status === 200);
		router.go('/');

	} catch (error) {
		console.error(error);
	}
}

export default createMainPage;