import {login} from './login';
import {settings} from '../../constants/config';
import {bus, FetchModule, router} from "../../main";

const {backend} = settings;

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function createSignUp(application) { //TODO: make beautiful function
	const form = application.querySelector('.bem-register-form__form');
	var error = document.createElement('div');
	error.className = 'error';
	error.style.color = 'red';

	const emailField = application.querySelector('#email');
	const passwordField = application.querySelector('#password');
	const usernameField = application.querySelector('#username');
	const errorMessage = application.querySelector('.bem-input-block_error-field');
	emailField.addEventListener('click', () => {
		errorMessage.innerHTML = '';
	});

	passwordField.addEventListener('click', () => {

		errorMessage.innerHTML = '';
	});

	usernameField.addEventListener('click', () => {
		errorMessage.innerHTML = '';
	});
	form.addEventListener('submit', async function (e) {
		e.preventDefault();
		error.innerHTML = '';
		let email, username;
		let password, fullname;
		let correct = true;
		if (form.elements['password'].value === '') {
			showError('Please, input password ');
			passwordField.className += " bem-input-block_input-field_error";
			correct = false;
		}
		if (form.elements['username'].value === '') {
			showError('Please, input username');
			usernameField.className += " bem-input-block_input-field_error";
			correct = false;
		}
		if (!validateEmail(form.elements['email'].value)) {
			showError('Please, input correct email');
			emailField.className += " bem-input-block_input-field_error";
			correct = false;
		}
		if (!correct) {
			return;
		}

		email = form.elements['email'].value;
		password = form.elements['password'].value;
		username = form.elements['username'].value;
		fullname = 'CoolSlack User';
		try {
			let response = await FetchModule._doPost({path: '/users',
				data: {
					email: email,
					password: password,
					fullname: fullname,
					username: username,
				},
				contentType : 'application/json;charset=utf-8'});
			if (response.status === 400) {
				showError('Sorry, email or username is already registered:(');
				emailField.className += " bem-input-block_input-field_error";
				usernameField.className += " bem-input-block_input-field_error";
				throw new Error('This email is already taken, try another one');
			}
			if (response.status !== 200) {
				throw new Error(`Неверный статус: ${response.status}`);
			}
			login(email, password);
		} catch (error) {
			console.error(error);
		}
	});

}

function showError(text) {
	const errorMessage = application.querySelector('.bem-input-block_error-field');
	errorMessage.innerHTML = text;
}

export default createSignUp;