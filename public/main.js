'use strict';

import Router from './scripts/Router';
import Bus from './scripts/Bus';
import Fetch from "./modules/API/fetch";
import {settings, responseStatuses} from './modules/config';
const {backend} = settings;

import './styles-bem/bem-main.css';

import loginView from "./views/loginView";
import mainPageView from "./views/mainPageView";
import signUpView from "./views/signUpView";
import profileView from "./views/profileView";
import logoutView from "./views/logOutView";
import searchView from "./views/searchView";
import Data from "./entities/Data";
import createEvents from "./scripts/Events";
import chatView from "./views/chatView";

const bus = new Bus();
const application = document.getElementById('application');

const baseBlock = document.createElement('div');
baseBlock.className = 'bem-main';
application.appendChild(baseBlock);
const router = new Router(baseBlock);
const FetchModule = new Fetch();
FetchModule.setUrl(`http://${backend}`);
const data = new Data();

createEvents();
router.register('/', mainPageView);
router.register('/profile', profileView);
router.register('/login', loginView);
router.register('/signup', signUpView);
router.register('/logout', logoutView);
router.register('/search', searchView);
router.register('/chat', chatView);

router.start();

export {bus, data, router, FetchModule};
