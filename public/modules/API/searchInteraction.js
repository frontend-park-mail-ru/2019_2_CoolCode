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
			bus.emit('addSearchResults', data['users']);
			router.go('/search');
		}
	} catch (error) {
		console.error(error);
	}
}

function searchInteraction() {
	let searchForm = document.querySelectorAll("#search")[0];
	searchForm.addEventListener("submit", function (event) {
		event.preventDefault();
		let searchInput = document.querySelectorAll("#search-input")[0];
		let searchInputValue = searchInput.value;
		findUser(searchInputValue);

	});

}

export default searchInteraction;