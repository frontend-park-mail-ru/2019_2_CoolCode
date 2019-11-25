import findUser from "../backendDataFetchers/findInfo";
import {data, promiseMaker, router} from "../main";

async function searchEvent(params = {parentContainer:null}) {
	const {parentContainer} = params;
	event.preventDefault();
	const searchInput = parentContainer.querySelector('.search-menu__form__input-container__input');
	const searchInputValue = searchInput.value;
	const parentParentContainer = parentContainer.parentNode;
	if (parentParentContainer.classList.contains('column_left')) {
		Promise.all([
			promiseMaker.createPromise('findUser', searchInputValue),
			promiseMaker.createPromise('findMessagesFullInfo', searchInputValue) ]
		).then(() => router.go('searchView', searchInputValue));
	} else {
		if (parentParentContainer.classList.contains('wrkspace-search__column')) {
			await promiseMaker.createPromise('findUser', searchInputValue);
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