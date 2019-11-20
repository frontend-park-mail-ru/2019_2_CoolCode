import {showError} from "./errorHandlers";
import {login, signup} from "../backendDataFetchers/register";
import Validation from "../modules/validation";
import {bus, data, router} from "../main";
import {setUserInfo} from "../backendDataFetchers/setUserInfo";

const validation = new Validation();

const errorSelector = 'input-block_error-field';
const textSelector = 'input-block_input-field';

function emitRegisterError(block, errorMessage) {
	bus.emit('showError', null, `.${errorSelector}`,
		errorMessage);

	bus.emit('addErrorStyle', null, block,
		`${textSelector}_error`);
}

async function createLoginEvent(params = {form: null}) {
	event.preventDefault();
	const emailField = params.form.elements['email'];
	const passwordField = params.form.elements['password'];
	if (passwordField.value === '') {
		emitRegisterError(passwordField, 'Please, input password');
		return;
	}
	if (emailField.value === '') {
		emitRegisterError(emailField, 'Please, input email');
		return;
	}
	if (!validation.validateEmail(emailField.value)) {
		emitRegisterError(emailField, 'Please, input correct email');
		return;
	}
	const result = await login(emailField.value, passwordField.value);
	if (result) {
		bus.emit('showError', null, `.${errorSelector}`, result.message);
		bus.emit('addErrorStyle', null, emailField, `${textSelector}_error`);
		bus.emit('addErrorStyle', null, passwordField, `${textSelector}_error`);
		return null;
	} else {
		bus.emit('hideError', null, `.${errorSelector}`);
		bus.emit('removeErrorStyle', null, emailField, `${textSelector}`);
		bus.emit('removeErrorStyle', null, passwordField, `${textSelector}`);
		router.go('profileView');
	}
}

async function createSignUpEvent(params = {form: null}) {
	event.preventDefault();
	const emailField = params.form.elements['email'];
	const passwordField = params.form.elements['password'];
	const usernameField = params.form.elements['username'];
	if (passwordField.value === '') {
		emitRegisterError(passwordField, 'Please, input password');
		return;
	}
	if (emailField.value === '') {
		emitRegisterError(emailField, 'Please, input email');
		return;
	}
	if (usernameField.value === '') {
		emitRegisterError(usernameField, 'Please, input username');
		return;
	}
	if (!validation.validateEmail(emailField.value)) {
		emitRegisterError(emailField, 'Please, input correct email');
		return;
	}
	const result = await signup({ email: emailField.value, password: passwordField.value,
		fullname: 'CoolSlack User', username: usernameField.value});
	if (result) {
		bus.emit('showError', null, `.${errorSelector}`, result.message);
		bus.emit('addErrorStyle', null, emailField, `${textSelector}_error`);
		bus.emit('addErrorStyle', null, passwordField, `${textSelector}_error`);
		bus.emit('addErrorStyle', null, usernameField, `${textSelector}_error`);
		return null;
	} else {
		bus.emit('hideError', null, `.${errorSelector}`);
		bus.emit('removeErrorStyle', null, emailField, `${textSelector}`);
		bus.emit('removeErrorStyle', null, passwordField, `${textSelector}`);
		bus.emit('removeErrorStyle', null, usernameField, `${textSelector}`);
		router.go('profileView');
	}
}

function createRegisterForm(viewName) {
	const form = document.querySelector('.register-form');
	if (viewName === 'login') {
		form.addEventListener('submit', createLoginEvent.bind(event, {form: form}));
	}
	if (viewName === 'signUp') {
		form.addEventListener('submit', createSignUpEvent.bind(event, {form: form}));
	}
}

export {createRegisterForm};