import {login} from './login';
import {settings} from '../config';
import {bus, FetchModule, router} from "../../main";

const {backend} = settings;

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function createSignUp(application) { //TODO: make beautiful function
	const form = application.querySelector('.sign-up-form');
	var error = document.createElement('div');
	error.className = 'error';
	error.style.color = 'red';

	const emailField = application.querySelector('#email');
	const passwordField = application.querySelector('#password');
	const fullnameField = application.querySelector('#fullname');
	const errorMessage = application.querySelector('.error_message');
	emailField.addEventListener('click', () => {
		emailField.style.borderColor = 'C4C4C4';
		errorMessage.innerHTML = '';
	});

	passwordField.addEventListener('click', () => {
		passwordField.style.borderColor = 'C4C4C4';
		errorMessage.innerHTML = '';
	});

	fullnameField.addEventListener('click', () => {
		fullnameField.style.borderColor = 'C4C4C4';
		errorMessage.innerHTML = '';
	});
	form.addEventListener('submit', async function (e) {
		e.preventDefault();
		error.innerHTML = '';
		let email, username;
		let password, fullname;
		let correct = true;
		if (form.elements['password'].value === '') {
			showError('Please, input password:(');
			passwordField.style.borderColor = '#ff6575';
			correct = false;
		}
		if (form.elements['fullname'].value === '') {
			showError('Please, input name:(');
			fullnameField.style.borderColor = '#ff6575';
			correct = false;
		}
		if (!validateEmail(form.elements['email'].value)) {
			showError('Please, input correct email:(');
			emailField.style.borderColor = '#ff6575';
			correct = false;
		}
		if (!correct) {
			return;
		}

		email = form.elements['email'].value;
		password = form.elements['password'].value;
		fullname = form.elements['fullname'].value;
		username = email;
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
				showError('Sorry, this email is already registered');
				emailField.style.borderColor = '#ff6575';
				throw new Error(`Такая почта занята !!`);
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
	const errorMessage = application.querySelector('.error_message');
	errorMessage.innerHTML = text;
}

export default createSignUp;