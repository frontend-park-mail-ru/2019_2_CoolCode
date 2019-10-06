import { Header } from '../../components/Header/Header';
import { MainPageComponent } from '../../components/MainPage/MainPage';
import settings from '../config';

const { backend } = settings;

function createMainPage (application) {
	fetch(`${backend}/users`, {
		method: 'GET',
		credentials: 'include',
		mode: 'cors',
	}).then(response => {
		application.innerHTML = '';

		const header = new Header();
		header.parent = application;
		header.renderHeader(response.status === 200);

		const mainPage = new MainPageComponent();
		mainPage.parent = application;
		mainPage.renderMainPage();
	})
		.catch(err => {
			console.error(err);
		});
}

export default createMainPage;