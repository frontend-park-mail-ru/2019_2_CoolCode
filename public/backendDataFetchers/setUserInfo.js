import {bus, FetchModule, promiseMaker, data} from "../main";
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
			await promiseMaker.createPromise('setUser', user);
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

async function setUserPhoto(formData) {
	console.log(` Setting user ${data.user.id} info`);
	try {
		const response = await FetchModule._doPost(
			{path: API.postPhoto,
				data: formData,
				contentType:'multipart/form-data'}
		);
		if (response.status === 200) {
			return true;
		} else {
			throw new Error(
				`Error while upload image : ${responseStatuses[response.status]}`);
		}
	} catch (error) {
		console.error(error);
		return false;
	}

}

export {setUserInfo, setUserPhoto};