import {bus, componentsStorage, data, promiseMaker, router} from "../main";

async function attachPhotos() {
	if (event.currentTarget.files.length > (10 - data.getChosenFilesLength())) alert('Can upload maximum 10 photos');
	else {
		const chatBlock = componentsStorage.getChatBlock();
		await chatBlock.renderPhotos(event.currentTarget.files);
	}
}

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