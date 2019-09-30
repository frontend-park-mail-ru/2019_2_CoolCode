'use strict';

import createMainPage from './modules/API/mainpage';
import createSignUp from './modules/API/signup';
import { createLogin } from './modules/API/login';
import { createProfile } from './modules/API/profile';
import handleLogout from './modules/API/logout';

import './styles/main.css';

const application = document.getElementById('application');

const functions = {
	mainPage: createMainPage,
	signUp: createSignUp,
	login: createLogin,
	profile: createProfile,
	logout: handleLogout,
};

application.addEventListener('click', function (evt) {
	const { target } = evt;

	if (target instanceof HTMLAnchorElement) {
		evt.preventDefault();
		functions[target.dataset.section](application);
	}
});

createMainPage(application);
