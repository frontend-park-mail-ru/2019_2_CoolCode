import {bus, FetchModule} from "../main";
import {API, responseStatuses} from "../constants/config";

async function setUserInfo(user) {
	console.log(` Setting user ${user.id} info`);
	try {
		let response = await FetchModule._doPut(
			{path: API.userInfo(user.id),
				data: user,
				contentType:'application/json;charset=utf-8'}
		);
		switch (response.status) {
		case 400:
		    return new Error(
				'This email or phone number is already taken' //TODO: server should check email and phone
			);
		case 200:
			bus.emit('setUser', null, user);
			return null;
		default:
			return new Error(
				`Couldn't set user info: ${responseStatuses[response.status]}`
			);
		}
	} catch (error) {
		console.error(error);
	}
}

export {setUserInfo};