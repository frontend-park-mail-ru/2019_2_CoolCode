import {bus, data} from "../main";

function createEvents() {
	bus.on('addUser', data.addUser.bind(data));
	bus.on('addUser1', data.addUser.bind(data));
	bus.on('loggedInUser', data.loggedInUser.bind(data));
	bus.on('addSearchResults', data.addLastSearchUsers.bind(data));

}

export default createEvents;