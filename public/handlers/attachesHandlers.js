import {bus, componentsStorage, data, promiseMaker, router} from "../main";
import AddMemberComponent from "../components/addMemberBlock/addMemberComponent";
import AlertPhotoComponent from "../components/filesAlertComponent/alertPhotoComponent";
import {KEYWORDS} from "../constants/config";

async function attachFiles() {
	const {type} = event.currentTarget.params;
	if (event.currentTarget.files.length > (10 - data.getChosenFilesLength())) {
		const parent = document.querySelector('.header');
		const form = new AlertPhotoComponent({}, parent);
		form.renderTo();
		const button = document.querySelector('.alert-photo__button-row_button');
		button.addEventListener('click', () => {
			form.deleteSelf();
		});
	}
	else {
		const chatBlock = componentsStorage.getChatBlock();
		await chatBlock.renderFiles(event.currentTarget.files, type);
	}
}

async function captureImage() {
	navigator.mediaDevices.getUserMedia({
		video:  {
			width: { ideal: 800},
			height: { ideal: 720}
		},
	}).then(
		function (stream) {
			bus.emit('setStream', null, stream);
			if (data.getCurrentChannelId()) {
				router.open(KEYWORDS.photoCreateChannel, [data.getCurrentWrkspaceId(), data.getCurrentChannelId()]);
			} else {
				router.open(KEYWORDS.photoCreateChat, [data.getCurrentChatId()]);
			}
		}
	);
}

function attachesDropdownClickEvent() {
	const input = event.target.firstElementChild;
	switch (event.target.dataset.section) {
	case 'attachFile':
		event.target.firstElementChild.click();
		input.params = {type : 1};
		input.addEventListener('change', attachFiles);
		break;
	case 'attachPhoto':
		event.target.firstElementChild.click();
		input.params = {type : 0};
		input.addEventListener('change', attachFiles);
		break;
	case 'makePhoto':
		captureImage();
		break;
	}
}

function showAttachContent(attach) {
	attach.querySelector('.attach-component__image').classList.remove('attach-component__image_hidden');
	attach.querySelector('.overlay_button').classList.remove('overlay_button_hidden');
	const imagesClassList = attach.querySelector('.attach-component__loader-container').classList;
	attach.querySelector('.attach-component__loader-container').classList = `${imagesClassList} attach-component__loader-container_hidden`;
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

export { createAttachButton, resizeAttach, showAttachContent};