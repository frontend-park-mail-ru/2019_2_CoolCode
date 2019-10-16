'use strict';

import Router from './scripts/Router';
import Bus from './scripts/Bus';
import Fetch from "./modules/API/fetch";
import {settings, responseStatuses} from './modules/config';
const {backend} = settings;

import './styles/main.css';
import loginView from "./views/loginView";
import mainPageView from "./views/mainPageView";
import signUpView from "./views/signUpView";
import profileView from "./views/profileView";
import logoutView from "./views/logOutView";

const bus = new Bus();
const application = document.getElementById('application');
const router = new Router(application);
const FetchModule = new Fetch();
FetchModule.setUrl(backend);

router.register('/', mainPageView);
router.register('/profile', profileView);
router.register('/login', loginView);
router.register('/signup', signUpView);
router.register('/logout', logoutView);

router.start();

export {bus, router, FetchModule};
