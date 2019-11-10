import createInput from "../modules/API/forms";
import {createChannel} from "../backendDataFetchers/creationEntities";
import {bus, data, router} from "../main";
import {validateEmail} from "../modules/API/login";
import {setUserInfo} from "../backendDataFetchers/setUserInfo";
import {createImageUpload} from "../modules/API/profile";

async function setProfileField(value, field, block, textSelector, errorSelector) {
	if (field === 'email') {
		if (!validateEmail(value)) {
			bus.emit('showError', null, `.${errorSelector}`,
				'Please, input correct email');

			bus.emit('addErrorStyle', null, block.querySelector(`.${textSelector}`),
				`${textSelector}_error`);
			return null;
		}
	}
	if (value !== '') {
		const user = data.user;
		user[field] = value;
		const result = await setUserInfo(user);
		if (result) {
			bus.emit('showError', null, `.${errorSelector}`,
				'Please, input correct email');

			bus.emit('addErrorStyle', null, block.querySelector(`.${textSelector}`),
				`${textSelector}_error`);
			return null;
		} else {
			bus.emit('hideError', null, `.${errorSelector}`);
			bus.emit('removeErrorStyle', null, block.querySelector(`.${textSelector}`),
				`${textSelector}_error`);
			data.user[field] = value;
			return value;
		}
	}
}

function dblClickEvent(params = {block: null, textSelector: null, inputSelector: null, errorSelector: null}) {
	event.preventDefault();
	const fieldName = params.block.id.split('-')[0];
	const textField = params.block.querySelector(`.${params.textSelector}`);
	const inputField = params.block.querySelector(`.${params.inputSelector}`);
	if (!textField.classList.contains(`${params.textSelector}_hidden`)) {
		textField.className += ` ${params.textSelector}_hidden`;
	}
	inputField.classList.remove(`${params.inputSelector}_hidden`);
	inputField.innerHTML = textField.innerHTML;
	inputField.placeholder = fieldName;
	inputField.focus();
}

function createDblClickInputHndlr(block, textSelector, inputSelector, errorSelector) {
	const textField = block.querySelector(`.${textSelector}`);
	textField.addEventListener('dblclick', dblClickEvent.bind(event, {block:block, textSelector: textSelector,
		inputSelector: inputSelector, errorSelector: errorSelector}));
}

async function blurEvent(params = {block: null, textSelector: null, inputSelector: null, errorSelector: null}) {
	event.preventDefault();
	const fieldName = params.block.id.split('-')[0];
	const textField = params.block.querySelector(`.${params.textSelector}`);
	const inputField = params.block.querySelector(`.${params.inputSelector}`);
	const value = await setProfileField(inputField.value, fieldName, params.block, params.textSelector, params.errorSelector);
	if (value) {
		textField.innerHTML = value;
	}
	if (!inputField.classList.contains(`${params.inputSelector}_hidden`)) {
		inputField.className += ` ${params.inputSelector}_hidden`;
	}
	textField.classList.remove(`${params.textSelector}_hidden`);
	inputField.value = '';

}

function createBlurInputHndlr(block, textSelector, inputSelector, errorSelector) {
	const inputField = block.querySelector(`.${inputSelector}`);
	inputField.addEventListener('blur', blurEvent.bind(event, {block:block, textSelector: textSelector,
		inputSelector: inputSelector, errorSelector: errorSelector}));
}

function createProfileInputs() {
	const phoneBlock = document.querySelector('#phone-setting');
	const emailBlock = document.querySelector('#email-setting');
	const statusBlock = document.querySelector('#fstatus-setting');
	const usernameBlock = document.querySelector('#username-setting');
	const fullnameBlock = document.querySelector('#fullname-setting');
	createDblClickInputHndlr(phoneBlock, 'profile-info__field__info',
		'profile-info__field__input', 'profile-info__error');
	createDblClickInputHndlr(emailBlock, 'profile-info__field__info',
		'profile-info__field__input', 'profile-info__error');
	createDblClickInputHndlr(statusBlock, 'profile-info__field__info',
		'profile-info__field__input', 'profile-info__error');
	createDblClickInputHndlr(usernameBlock, 'profile-header__username-column__username__text',
		'profile-header__username-column__username__input', 'profile-header__username-column__error');
	createDblClickInputHndlr(fullnameBlock, 'profile-header__username-column__fullname__text',
		'profile-header__username-column__fullname__input', 'profile-header__username-column__error');
	createBlurInputHndlr(phoneBlock, 'profile-info__field__info',
		'profile-info__field__input', 'profile-info__error');
	createBlurInputHndlr(emailBlock, 'profile-info__field__info',
		'profile-info__field__input', 'profile-info__error');
	createBlurInputHndlr(statusBlock, 'profile-info__field__info',
		'profile-info__field__input', 'profile-info__error');
	createBlurInputHndlr(usernameBlock, 'profile-header__username-column__username__text',
		'profile-header__username-column__username__input', 'profile-header__username-column__error');
	createBlurInputHndlr(fullnameBlock, 'profile-header__username-column__fullname__text',
		'profile-header__username-column__fullname__input', 'profile-header__username-column__error');
	createImageUpload(data.getUserId());
}

export {createProfileInputs};