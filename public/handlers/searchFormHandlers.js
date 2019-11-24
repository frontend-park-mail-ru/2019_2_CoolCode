import findUser from "../backendDataFetchers/findUser";
import {promiseMaker, router, data} from "../main";

async function searchEvent(params = {parentContainer:null}) {
	event.preventDefault();
	const searchInput = params.parentContainer.querySelector('.search-menu__form__input-container__input');
	const searchInputValue = searchInput.value;
	await promiseMaker.createPromise('findUser', searchInputValue);
	const parentParentContainer = params.parentContainer.parentNode;
	if (parentParentContainer.classList.contains('column_left')) {
		router.go('searchView', searchInputValue);
	} else {
		if (parentParentContainer.classList.contains('wrkspace-search__column')) {
			router.go('wrkspaceSearchView', data.getCurrentWrkspaceId(), searchInputValue);
		}
	}

}

function createSearchInputHndlr() {
	const searchFormContainers = document.querySelectorAll('.search-menu');
	searchFormContainers.forEach((searchFormContainer) => {
		const searchForm = searchFormContainer.querySelector('.search-menu__form');
		searchForm.addEventListener('submit', searchEvent.bind(event, {parentContainer: searchFormContainer}));
		const searchFormButton = searchFormContainer.querySelector('.search-menu__form__button');
		searchFormButton.addEventListener('click', searchEvent.bind(event, {parentContainer: searchFormContainer}));
	});
}

export {createSearchInputHndlr};