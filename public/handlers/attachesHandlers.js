import {bus, componentsStorage, data, promiseMaker, router} from "../main";
import {setUserPhoto} from "../backendDataFetchers/setUserInfo";
import {getProfilePhoto} from "./photosHandlers";
import MyWorker from "../workers/profile.worker";

function photoDeleteBtnEvent() {
	event.currentTarget.parentNode.remove();
}

async function attachPhotos() {
	if (event.currentTarget.files.length > 10) alert('10 photos');
	else {
		bus.emit('setChosenFiles', null, event.currentTarget.files);
		const chatBlock = componentsStorage.getChatBlock();
		await chatBlock.renderPhotos(event.currentTarget.files);
	}

}
//
// async function imageUploading(params = {id: null, fileInput: null}) {
// 	const {id, fileInput} = params;
// 	if (!validation.validatePhotoFormat(fileInput.files[0])) {
// 		emitError(fileInput.parentNode.parentNode, 'profile-header__image-row__error', null, 'Please, input image');
// 	} else {
// 		bus.emit('hideError', null, `.profile-header__image-row__error`);
// 		const formData = new FormData();
// 		formData.append('file', fileInput.files[0]);
// 		const result = await setUserPhoto(formData);
// 		if (result) {
// 			bus.emit('showLoader', null, '.profile-header__content');
// 			getProfilePhoto(id);
// 		}
// 	}
// }

function attachesDropdownClickEvent() {
	const input = event.target.firstElementChild;
	switch (event.target.dataset.section) {
	case 'attachFile':
		event.target.firstElementChild.click();
		input.addEventListener('change', attachFiles);
		break;
	case 'attachPhoto':
		event.target.firstElementChild.click();
		input.addEventListener('change', attachPhotos);
		break;
	}
}

function countOffset(inputWidth) {
	const inputBtnWidth = document.querySelector('.input__icon-container').clientWidth;
	const inputTextWidth = document.querySelector('.input__text').clientWidth;
	const freeSpace = (inputWidth - inputTextWidth - inputBtnWidth * 1.5);
	return freeSpace ;
}

function resizeAttach() {
	const attachMenu = document.querySelector('.attaches');
	const input = document.querySelector('.input');
	if (attachMenu && input) {
		attachMenu.style.bottom = `${input.clientHeight + 10}px`;
		attachMenu.style.right = `${input.clientWidth - countOffset(input.clientWidth)}px`;
	}
}

function attachBtnEvent(event) {
	event.preventDefault();
	const attachMenu = document.querySelector('.attaches');
	const attachesContainer = attachMenu.firstChild;
	if (event.type == 'click') {
		if (attachMenu.classList.contains('attaches_clicked')) {
			attachMenu.classList.remove('attaches_clicked');
		} else {
			attachMenu.classList = `${attachMenu.classList} attaches_clicked`;
		}
	}
	if (event.type == 'mouseleave') {
		attachMenu.classList.remove('attaches_clicked');
		attachesContainer.removeEventListener('mouseleave', attachBtnEvent);
	}
	if (event.type == 'mouseenter') {
		attachesContainer.addEventListener('mouseleave', attachBtnEvent);
		attachesContainer.addEventListener('click', attachesDropdownClickEvent);
	}
}

function createAttachButton() {
	const attachBtn = document.querySelectorAll(".input__icon-container__icon")[0];
	attachBtn.addEventListener('click', attachBtnEvent);
	const attachesContainer = document.querySelector(".attaches").firstChild;
	attachesContainer.addEventListener('mouseenter', attachBtnEvent);
}

export { createAttachButton, resizeAttach};