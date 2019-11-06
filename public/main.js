'use strict';

import Router from './scripts/Router';
import Bus from './scripts/Bus';
import PromiseMaker from './scripts/PromiseMaker';
import Fetch from "./modules/fetch";
import {settings, responseStatuses} from './constants/config';
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
import wrkspaceFormView from "./views/wrkspaceFormView";
import ComponentsStorage from "./entities/ComponentsStorage";
import channelFormView from "./views/channelFormView";

const bus = new Bus();
const promiseMaker = new PromiseMaker();
const componentsStorage = new ComponentsStorage();
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
router.register('/createWrkSpace', wrkspaceFormView);

router.register('/channelForm', channelFormView);


router.start();

export {bus, data, router, promiseMaker, componentsStorage, FetchModule};
