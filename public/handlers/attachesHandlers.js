import {data, router} from "../main";

function attachesDropdownClickEvent() {
	switch (event.target.dataset.section) {
	case 'inviteUser':
		router.go('wrkspaceSearchView', data.getCurrentWrkspaceId());
	}
}

function resizeAttach() {
	const attachMenu = document.querySelector('.attaches');
	const input = document.querySelector('.input');
	const inputBtn = document.querySelector('.input__icon-container');
	attachMenu.style.bottom = `${input.clientHeight + 10}px`;
	attachMenu.style.right = `${input.clientWidth - inputBtn.clientWidth * 2}px`;
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
		console.log('mouseleave');

		attachMenu.classList.remove('attaches_clicked');
		attachesContainer.removeEventListener('mouseleave', attachBtnEvent);
	}
	if (event.type == 'mouseenter') {
		console.log('mouseenter');

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