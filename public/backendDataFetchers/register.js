import {bus, FetchModule, promiseMaker, router} from "../main";
import {API, responseStatuses} from "../constants/config";
import {showError} from "../handlers/errorHandlers";

async function login(email, password) {
	try {
		let response = await FetchModule._doPost(
			{path: API.login,
				data:   {email: email,
					password: password},
				contentType : 'application/json;charset=utf-8'}
		);
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
				`Couldn't login: ${responseStatuses[response.status]}`
			);
		}

	} catch (error) {
		console.error(error);
	}
}

async function signup(params = {email:null, password: null, fullname: null, username: null}) {
	try {
		let response = await FetchModule._doPost({path: API.auth,
			data: {
				email: params.email,
				password: params.password,
				fullname: params.fullname,
				username: params.username,
			},
			contentType : 'application/json;charset=utf-8'});
		switch (response.status) {
		case 400:
			return new Error(
				'This username or email is already taken'
			);
		case 200:
			await login(params.email, params.password);
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