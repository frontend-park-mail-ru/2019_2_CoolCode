import {data, bus, router, FetchModule} from '../../main';

async function createMainPage () {
	try {
		let response = await FetchModule._doGet({path: '/users'});
		bus.emit('loggedInUser', response.status === 200);
		//data.loggedInUser(response.status === 200);
		router.go('/');

	} catch (error) {
		console.error(error);
	}
}

export default createMainPage;