import {data, bus, router, FetchModule} from '../../main';

async function createMainPage () {
	try {
		let response = await FetchModule._doGet({path: '/users'});
		bus.emit('setLoggedIn', null, response.status === 200);
		//data.setLoggedIn(response.status === 200);
		router.go('/');

	} catch (error) {
		console.error(error);
	}
}

export default createMainPage;