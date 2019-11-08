'use strict';

import Router from './scripts/Router';
import Bus from './scripts/Bus';
import PromiseMaker from './scripts/PromiseMaker';
import Fetch from "./modules/fetch";
import {settings, responseStatuses, ROUTER} from './constants/config';
const {backend} = settings;

import './styles-bem/bem-main.css';
import './scss/text-resize.scss';

import loginView from "./views/loginView";
import mainPageView from "./views/mainPageView";
import signUpView from "./views/signUpView";
import profileView from "./views/profileView";
import logoutView from "./views/logOutView";
import searchView from "./views/searchView";
import Data from "./entities/Data";
import createEvents from "./scripts/Events";
import chatView from "./views/chatView";
import wrkspaceFormView from "./views/wrkspaceFormView";
import ComponentsStorage from "./entities/ComponentsStorage";
import channelFormView from "./views/channelFormView";
import {serviceWorkerRegister} from "./modules/serviceWorkerRegister";

const bus = new Bus();
const promiseMaker = new PromiseMaker();
const componentsStorage = new ComponentsStorage();
const application = document.getElementById('application');
const baseBlock = document.createElement('div');
baseBlock.className = 'main';
application.appendChild(baseBlock);
const router = new Router(baseBlock);
const FetchModule = new Fetch();
FetchModule.setUrl(`http://${backend}`);
const data = new Data();

serviceWorkerRegister();
createEvents();
router.register(ROUTER.mainPage, mainPageView);
router.register(ROUTER.profile, profileView);
router.register(ROUTER.login, loginView);
router.register(ROUTER.signup, signUpView);
router.register(ROUTER.logout, logoutView);
router.register(ROUTER.search, searchView);
router.register(ROUTER.chat, chatView);
router.register(ROUTER.createWrkSpace, wrkspaceFormView);
router.register(ROUTER.createChannel, channelFormView);

router.start();

export {bus, data, router, promiseMaker, componentsStorage, FetchModule};
