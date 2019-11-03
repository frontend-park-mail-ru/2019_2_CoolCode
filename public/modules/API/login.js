import {settings} from '../config';
const {backend} = settings;
import {bus, FetchModule, router} from '../../main';
import {data} from "../../main";

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function createLogin(application) {

	const form = application.querySelector('.bem-register-form__form');
	const errorMessage = application.querySelector('.bem-input-block_error-field');
	const emailField = document.querySelector('#email');
	const passwordField = document.querySelector('#password');

	emailField.addEventListener('click', () => {
		errorMessage.innerHTML = '';
	});

	passwordField.addEventListener('click', () => {
		errorMessage.innerHTML = '';
	});

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		let email;
		let password;
		let correct = true;

		email = form.elements['email'].value;
		password = form.elements['password'].value;

		if (form.elements['password'].value === '') {
			showError('Please, input password:(');
			passwordField.className += " bem-input-block_input-field_error";
			correct = false;
		}
		if (!validateEmail(form.elements['email'].value)) {
			showError('Please, input correct email:(');
			emailField.className += " bem-input-block_input-field_error";
			correct = false;
		}
		if (!correct) {
			return;
		}
		//bus.on('fetchUser', createProfile);
		login(email, password);

	});
}

async function login(email, password) {
	try {
		let response = await FetchModule._doPost({path: '/login',
			data: {email: email,
				password: password},
			contentType : 'application/json;charset=utf-8'});
		if (response.status === 400) {
			showError("Wrong email or password");
			throw new Error(
				`Ошибочные данные: ${response.status}`);
		}
		if (response.status === 500) {
			showError("Server error:(");
			throw new Error(
				`Серверу плохо: ${response.status}`);
		}
		if (response.status === 200) {
			let user = await response.json();
			console.log(`Logged in: ${user.email}`);
			//bus.emit('addUser', user);
			data.setLoggedIn(true);
			router.go('/profile');
		}
	} catch (error) {
		console.error(error);
	}
}

function showError(text) {
	const errorMessage = application.querySelector('.bem-input-block_error-field');
	errorMessage.innerHTML = text;
}

export {createLogin, login};