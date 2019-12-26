import {componentsStorage, router, bus} from "../main";
import {createChannel, createWrkspace} from "../backendDataFetchers/creationEntities";

function drawWrkspaceFormError(inputField) {
	inputField.className += " wrkspace-form__form__input-field_error";
	const errorField = document.querySelector('.wrkspace-form__form__error-field');
	errorField.innerText = "please, input name";
}

function createWrkSpaceEvent() {
	event.currentTarget.removeEventListener('submit', createWrkSpaceEvent);
	event.preventDefault();
	const inputField = document.querySelector('.wrkspace-form__form__input-field');
	const channelName = inputField.value;
	if (channelName) {
		createWrkspace(channelName).then(() => {
			const leftColumn = componentsStorage.returnLeftColumn();
			leftColumn.rerenderWrkspaces();
			router.return();
		});
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
	overlay.addEventListener('click', () => {
		bus.emit('deleteCurrentPhotoSrc', null);
		router.return();
	});
}

function createChannelEvent() {
	const {wrkSpaceId} = event.currentTarget.params;
	event.currentTarget.removeEventListener('submit', createChannelEvent);
	event.preventDefault();
	const inputField = document.querySelector('.wrkspace-form__form__input-field');
	const channelName = inputField.value;
	if (channelName) {
		createChannel(channelName, wrkSpaceId).then(() => {
			const leftColumn = componentsStorage.returnLeftColumn();
			leftColumn.rerenderWrkspaces();
			router.return();
		});
	} else {
		drawWrkspaceFormError(inputField);

	}
}

function createChannelCreateSubmitHndlr(wrkSpaceId) {
	const channelForm = document.querySelector('.wrkspace-form__form');
	channelForm.params = {wrkSpaceId:wrkSpaceId};
	channelForm.addEventListener('submit', createChannelEvent);
}

export {createWrkSpaceCreateSubmitHndlr, createOverlayHndlr, createChannelCreateSubmitHndlr};