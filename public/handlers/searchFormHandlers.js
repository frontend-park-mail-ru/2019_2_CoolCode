import findUser from "../backendDataFetchers/findUser";
import {router} from "../main";

function searchEvent() {
	let searchInput = document.querySelector('.bem-search-menu__form__input');
	let searchInputValue = searchInput.value;
	findUser(searchInputValue);
}

function createSearchInputHndlr() {
	let searchForm = document.querySelector('.bem-search-menu__form');
	searchForm.addEventListener('submit', searchEvent);
	let searchFormButton = searchForm.querySelector('.bem-search-menu__form__button');
	searchFormButton.addEventListener('click', searchEvent);
}

function createWorkspaceButtonHndlr() {
	let wrkSpaceButton = document.querySelector(".bem-search-menu__button");
	wrkSpaceButton.addEventListener('click', ()=>{
		router.go('/createWrkSpace');
	}
	);
}

export {createSearchInputHndlr, createWorkspaceButtonHndlr};