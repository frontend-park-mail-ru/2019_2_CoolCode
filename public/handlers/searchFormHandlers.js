import findUser from "../backendDataFetchers/findUser";
import {router} from "../main";

function searchEvent() {
	event.preventDefault();
	const searchInput = document.querySelector('.search-menu__form__input');
	const searchInputValue = searchInput.value;
	findUser(searchInputValue);
}

function createSearchInputHndlr() {
	const searchForm = document.querySelector('.search-menu__form');
	searchForm.addEventListener('submit', searchEvent);
	const searchFormButton = searchForm.querySelector('.search-menu__form__button');
	searchFormButton.addEventListener('click', searchEvent);
}

function createWorkspaceButtonHndlr() {
	const wrkSpaceButton = document.querySelector(".search-menu__button");
	wrkSpaceButton.addEventListener('click', ()=>{
		router.go('/createWrkSpace');
	}
	);
}

export {createSearchInputHndlr, createWorkspaceButtonHndlr};