import {bus, data} from "../main";
import {setUserInfo, setUserPhoto} from "../backendDataFetchers/setUserInfo";
import Validation from "../modules/validation";
import {getProfilePhoto} from "./photosHandlers";

const validation = new Validation();

function emitError(block, errorSelector, textSelector, errorMessage) {
	bus.emit('showError', null, `.${errorSelector}`,
		errorMessage);

	bus.emit('addErrorStyle', null, block.querySelector(`.${textSelector}`),
		`${textSelector}_error`);
}

async function setProfileField(value, field, block, textSelector, errorSelector) {
	if (field === 'email') {
		if (!validation.validateEmail(value)) {
			emitError(block, errorSelector, textSelector, 'Please, input correct email');
			return value;
		}
	}
	if (field === 'phone') {
		if (!validation.validatePhone(value)) {
			emitError(block, errorSelector, textSelector, 'Please, input phone number containing from 10 to 12 numbers');
			return value;
		}
	}
	if (value === '') {
		emitError(block, errorSelector, textSelector, 'Please, input some info');
		return value;
	}
	const user = data.user;
	user[field] = value;
	const result = await setUserInfo(user);
	if (result) {
		emitError(block, errorSelector, textSelector, result.message);
		return null;
	} else {
		bus.emit('hideError', null, `.${errorSelector}`);
		bus.emit('removeErrorStyle', null, block.querySelector(`.${textSelector}`),
			`${textSelector}_error`);
		data.user[field] = value;
		return value;
	}
}

function dblClickEvent(params = {block: null, textSelector: null, inputSelector: null, errorSelector: null}) {
	const {block, textSelector, inputSelector, errorSelector} = params;
	event.preventDefault();
	const fieldName = block.id.split('-')[0];
	const textField = block.querySelector(`.${textSelector}`);
	const inputField = block.querySelector(`.${inputSelector}`);
	if (!textField.classList.contains(`${textSelector}_hidden`)) {
		textField.className += ` ${textSelector}_hidden`;
	}
	inputField.classList.remove(`${inputSelector}_hidden`);
	inputField.value = textField.innerHTML;
	inputField.placeholder = fieldName;
	inputField.focus();
}

function createDblClickInputHndlr(block, textSelector, inputSelector, errorSelector) {
	const textField = block.querySelector(`.${textSelector}`);
	textField.addEventListener('click', dblClickEvent.bind(event, {
		block: block, textSelector: textSelector,
		inputSelector: inputSelector, errorSelector: errorSelector
	}));
}

async function blurEvent(params = {block: null, textSelector: null, inputSelector: null, errorSelector: null}) {
	const {block, textSelector, inputSelector, errorSelector} = params;
	event.preventDefault();
	const fieldName = block.id.split('-')[0];
	const textField = block.querySelector(`.${textSelector}`);
	const inputField = block.querySelector(`.${inputSelector}`);
	const value = await setProfileField(inputField.value, fieldName, block, textSelector, errorSelector);
	if (value) {
		textField.innerHTML = value;
	}
	if (!inputField.classList.contains(`${inputSelector}_hidden`)) {
		inputField.className += ` ${inputSelector}_hidden`;
	}
	textField.classList.remove(`${textSelector}_hidden`);
	inputField.value = '';

}

function createBlurInputHndlr(block, textSelector, inputSelector, errorSelector) {
	const inputField = block.querySelector(`.${inputSelector}`);
	inputField.addEventListener('blur', blurEvent.bind(event, {
		block: block, textSelector: textSelector,
		inputSelector: inputSelector, errorSelector: errorSelector
	}));
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

async function imageUploading(params = {id: null, fileInput: null}) {
	const {id, fileInput} = params;
	if (!validation.validatePhotoFormat(fileInput.files[0])) {
		emitError(fileInput.parentNode.parentNode, 'profile-header__image-row__error', null, 'Please, input image');
	} else {
		bus.emit('hideError', null, `.profile-header__image-row__error`);
		const formData = new FormData();
		formData.append('file', fileInput.files[0]);
		const result = await setUserPhoto(formData);
		if (result) {
			bus.emit('showLoader', null, '.profile-header__content');
			getProfilePhoto(id);
		}
	}
}

function createImageUpload(id) {
	const imageInput = document.querySelector('.profile-header__content__input');
	imageInput.addEventListener('change', imageUploading.bind(null, {id: id, fileInput: imageInput}));
}

export {createProfileInputs};