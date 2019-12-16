import {bus, data, promiseMaker, router} from "../main";
import {setUserPhoto, setWrkspacePhoto} from "../backendDataFetchers/setUserInfo";
import {getProfilePhoto} from "./photosHandlers";
import {getPhoto} from "../backendDataFetchers/getEntitiesRequests";
import MyWorker from "../workers/profile.worker";

async function setPhotoWrkspace(id) {
	const buffer = await getPhotoWrkspace(id);
	const worker = new MyWorker();
	worker.postMessage(buffer);

	worker.onmessage = function (result) {
		bus.emit('setPicture', null, '.wrkspace-page-header__info-row__image-row__image', result.data);
		bus.emit('hideLoader', null, '.wrkspace-page-header__info-row__image-row');
	};
}

async function wrkspaceImageUploading() {
	const formData = new FormData();
	formData.append('file', event.currentTarget.files[0]);
	const result = await setWrkspacePhoto(formData, data.getCurrentWrkspaceId());
	if (result) {
		bus.emit('showLoader', null, '.wrkspace-page-header__info-row__image-row');
		setPhotoWrkspace(id);
	}
}

function wrkspaceDropdownClickEvent() {
	switch (event.target.dataset.section) {
	case 'inviteUser':
		router.go('wrkspaceSearchView', data.getCurrentWrkspaceId());
		break;
	case 'changePicture':
		 event.target.firstElementChild.click();
		 event.target.firstElementChild.addEventListener('change', wrkspaceImageUploading);
		 break;

	}
}

function createWrkspaceDropdownHandler() {
	const wrkspaceDropdown = document.querySelector('.wrkspace-page-dropdown');
	wrkspaceDropdown.addEventListener('click', wrkspaceDropdownClickEvent.bind(event, {}));
}

function createWorkspaceSettingsButtonHndlr() {
	const wrkSpaceButton = document.querySelector(".wrkspace-page-header__info-row__settings-column__container__button");
	const wrkspaceSettingsColumn = wrkSpaceButton.parentNode;
	const wrkspaceSettingsDropdown = wrkspaceSettingsColumn.querySelector('.wrkspace-page-dropdown');
	wrkSpaceButton.addEventListener('click', wrkspaceDropdownExpandEvent.bind(null, {wrkspaceSettingsDropdown:wrkspaceSettingsDropdown}));
}

function wrkspaceDropdownExpandEvent(params = {wrkspaceSettingsDropdown:null}) {
	const {wrkspaceSettingsDropdown} = params;
	if (wrkspaceSettingsDropdown !== null) {
		if (!wrkspaceSettingsDropdown.classList.contains('wrkspace-page-dropdown_clicked')) {
			wrkspaceSettingsDropdown.className = `${wrkspaceSettingsDropdown.className} wrkspace-page-dropdown_clicked`;
		}
		else {
			wrkspaceSettingsDropdown.classList.remove('wrkspace-page-dropdown_clicked');
		}
	}
}

function wrkspaceInfoColumnClickEvent() {
	switch (event.target.dataset.section) {
	case 'wrkspaceName':
		router.go('wrkspaceView', data.getCurrentWrkspaceId());
	}
}

function createWrkspaceInfoColumnHandler() {
	const wrkspaceInfoColumn = document.querySelector('.wrkspace-page-header__info-row__info-column');
	wrkspaceInfoColumn.addEventListener('click', wrkspaceInfoColumnClickEvent.bind(event, {}));

}

export {createWorkspaceSettingsButtonHndlr,createWrkspaceDropdownHandler, createWrkspaceInfoColumnHandler};