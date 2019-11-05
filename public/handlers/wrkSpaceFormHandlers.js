import {router} from "../main";
import {createWrkspace} from "../modules/API/wrkspaceFormCreation";

function drawWrkspaceFormError(inputField) {
	inputField.className += " bem-wrkspace-form__form__input-field_error";
	let errorField = document.querySelector('.bem-wrkspace-form__form__error-field');
	errorField.innerText = "please, input name";
}

function createWrkSpaceEvent() {
	let inputField = document.querySelector('.bem-wrkspace-form__form__input-field');
	let channelName = inputField.value;
	if (channelName) {
		createWrkspace(channelName).then(() => router.go('/profile'));
	} else {
		drawWrkspaceFormError(inputField);
	}
}

function createWrkSpaceCreateSubmitHndlr() {
	let wrspaceForm = document.querySelector('.bem-wrkspace-form__form');
	wrspaceForm.addEventListener('submit', createWrkSpaceEvent);
}

function createOverlayHndlr() {
	let overlay = document.querySelector('.bem-overlay');
	overlay.addEventListener('click', () => router.return());
}

export {createWrkSpaceCreateSubmitHndlr, createOverlayHndlr};