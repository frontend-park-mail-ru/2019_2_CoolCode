import {data, router} from "../main";

function wrkspaceDropdownClickEvent() {
	switch (event.target.dataset.section) {
	case 'inviteUser':
		router.go('wrkspaceSearchView', data.getCurrentWrkspaceId());
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