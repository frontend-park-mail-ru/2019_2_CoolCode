import {router} from "../main";
import {createWrkspace, createChannel} from "../backendDataFetchers/creationEntities";

function drawWrkspaceFormError(inputField) {
	inputField.className += " wrkspace-form__form__input-field_error";
	const errorField = document.querySelector('.wrkspace-form__form__error-field');
	errorField.innerText = "please, input name";
}

function createWrkSpaceEvent() {
	event.preventDefault();
	const inputField = document.querySelector('.wrkspace-form__form__input-field');
	const channelName = inputField.value;
	if (channelName) {
		createWrkspace(channelName).then(() => router.go('profileView'));
	} else {
		drawWrkspaceFormError(inputField);
	}
}

function createWrkSpaceCreateSubmitHndlr() {
	const wrspaceForm = document.querySelector('.wrkspace-form__form');
	wrspaceForm.addEventListener('submit', createWrkSpaceEvent);
}

function createOverlayHndlr() {
	const overlay = document.querySelector('.overlay');
	overlay.addEventListener('click', () => router.return());
}

function createChannelEvent(params = {wrkSpaceId:null}) {
	event.preventDefault();
	const inputField = document.querySelector('.wrkspace-form__form__input-field');
	const channelName = inputField.value;
	if (channelName) {
		createChannel(channelName, params.wrkSpaceId).then(() => router.go('profilePaageView'));
	} else {
		drawWrkspaceFormError(inputField);

	}
}

function createChannelCreateSubmitHndlr(wrkSpaceId) {
	const channelForm = document.querySelector('.wrkspace-form__form');
	channelForm.addEventListener('submit', createChannelEvent.bind(event, {wrkSpaceId:wrkSpaceId}));
}

export {createWrkSpaceCreateSubmitHndlr, createOverlayHndlr, createChannelCreateSubmitHndlr};