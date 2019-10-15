'use strict';

import Router from './scripts/Router';
import Bus from './scripts/Bus';

import './styles/main.css';
import loginView from "./views/loginView";
import mainPageView from "./views/mainPageView";
import signUpView from "./views/signUpView";
import profileView from "./views/profileView";
import logoutView from "./views/logOutView";

export const bus = new Bus();
const application = document.getElementById('application');
export const router = new Router(application);

router.register('/', mainPageView);
router.register('/profile', profileView);
router.register('/login', loginView);
router.register('/signup', signUpView);
router.register('/logout', logoutView);

router.start();
