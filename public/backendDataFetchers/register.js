import {FetchModule, promiseMaker} from "../main";
import {API, responseStatuses} from "../constants/config";

async function login(email, password) {
	try {
		const response = await FetchModule._doPost(
			{path: API.login,
				data:   {email: email,
					password: password},
				contentType : 'application/json;charset=utf-8'}
		);
		console.log(response);
		switch (response.status) {
		case 400:
			return new Error(
				'Wrong email or password'
			);
		case 200:
			const user = await response.json();
			await promiseMaker.createPromise('setUser', user);
			return null;
		default:
			return new Error(
				`Couldn't login `
			);
		}

	} catch (error) {
		console.error(error);
	}
}

async function signup(params = {email:null, password: null, fullname: null, username: null}) {
	const {email, password, fullname, username} = params;
	try {
		const response = await FetchModule._doPost({path: API.auth,
			data: {
				email: email,
				password: password,
				fullname: fullname,
				username: username,
			},
			contentType : 'application/json;charset=utf-8'});
		switch (response.status) {
		case 400:
			return new Error(
				'This username or email is already taken'
			);
		case 200:
			await login(email, password);
			return null;
		default:
			return new Error(
				`Couldn't register: ${responseStatuses[response.status]}`
			);
		}
	} catch (error) {
		console.error(error);
	}

}

export {login, signup};