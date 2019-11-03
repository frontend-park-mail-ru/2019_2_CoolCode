import {bus, FetchModule, router} from "../../main";

async function findUser(query) {
	try {
		let response = await FetchModule._doGet({path: `/users/${query}`});
		if (response.status === 500) {
			throw new Error(
				`Серверу плохо:(: ${response.status}`);
		}
		if (response.status === 401) {
			throw new Error(
				`Ошибка авторизации: ${response.status}`);
		}
		if (response.status === 200) {
			let data = await response.json();
			console.log(data['users']);
			bus.emit('setLastSearchUsers', null, data['users']);
			router.go('/search', query);
		}
	} catch (error) {
		console.error(error);
	}
}

function searchEvent(event) {
	event.preventDefault();
	let searchInput = document.querySelector('.bem-search-menu__form__input');
	let searchInputValue = searchInput.value;
	findUser(searchInputValue);
}

function searchInteraction() {
	let searchForm = document.querySelector('.bem-search-menu__form');
	searchForm.addEventListener("submit", searchEvent);
	let searchFormButton = searchForm.querySelector('.bem-search-menu__form__button');
	searchFormButton.addEventListener('click', searchEvent);

}

export default searchInteraction;