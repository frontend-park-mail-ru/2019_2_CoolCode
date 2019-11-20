import {router} from "../main";

function wrkspaceDropdownClickEvent() {
	switch (event.target.dataset.section) {
	case inviteUser:

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
	if (params.wrkspaceSettingsDropdown !== null) {
		if (!params.wrkspaceSettingsDropdown.classList.contains('wrkspace-page-dropdown_clicked')) {
			params.wrkspaceSettingsDropdown.className += ' wrkspace-page-dropdown_clicked';
		}
		else {
			params.wrkspaceSettingsDropdown.classList.remove('wrkspace-page-dropdown_clicked');
		}
	}
}

export {createWorkspaceSettingsButtonHndlr};