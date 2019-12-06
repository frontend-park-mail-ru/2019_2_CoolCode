'use strict';

import Router from './scripts/Router';
import Bus from './scripts/Bus';
import PromiseMaker from './scripts/PromiseMaker';
import Fetch from "./modules/fetch";
import {KEYWORDS, ROUTER, settings} from './constants/config';
import './components/bem-main.css';
import './scss/text-resize.scss';
import './scss/wrap.scss';

import loginView from "./views/loginView";
import mainPageView from "./views/mainPageView";
import signUpView from "./views/signUpView";
import profileView from "./views/profileView";
import logoutView from "./views/logOutView";
import searchView from "./views/searchView";
import Data from "./entities/Data";
import createEvents from "./scripts/Events";
import chatView from "./views/chatView";
import channelView from "./views/channelView";
import addMemberView from "./views/addMemberView";
import wrkspaceFormView from "./views/wrkspaceFormView";
import ComponentsStorage from "./entities/ComponentsStorage";
import channelFormView from "./views/channelFormView";
import LocalStorage from "./entities/LocalStorage";
import wrkspaceView from "./views/wrkspaceView";
import wrkspaceSearchView from "./views/wrkspaceSearchView";
import ResizeThrottler from "./modules/throttler";
import {resizeAttach} from "./handlers/attachesHandlers";

const {backend} = settings;
const {backendPort} = settings;
const {connection} = settings;

const bus = new Bus();
const promiseMaker = new PromiseMaker();
const componentsStorage = new ComponentsStorage();
const appLocalStorage = new LocalStorage();

const application = document.getElementById('application');
const baseBlock = document.createElement('div');
baseBlock.className = 'main';
application.appendChild(baseBlock);
const router = new Router(baseBlock);
const FetchModule = new Fetch();
FetchModule.setUrl(`${connection}://${backend}`);
const data = new Data();

const throttler = new ResizeThrottler(resizeAttach);

//serviceWorkerRegister();
createEvents();
router.register(ROUTER.mainPage, mainPageView, KEYWORDS.mainPage);
router.register(ROUTER.profile, profileView, KEYWORDS.profile);
router.register(ROUTER.login, loginView, KEYWORDS.login);
router.register(ROUTER.signup, signUpView, KEYWORDS.signup);
router.register(ROUTER.logout, logoutView, KEYWORDS.logout);
router.register(ROUTER.search, searchView, KEYWORDS.search);
router.register(ROUTER.chat, chatView, KEYWORDS.chat);
router.register(ROUTER.createWrkSpace, wrkspaceFormView, KEYWORDS.createWrkSpace);
router.register(ROUTER.createChannel, channelFormView, KEYWORDS.createChannel);
router.register(ROUTER.addMember, addMemberView, KEYWORDS.addMember);
router.register(ROUTER.wrkspacePage, wrkspaceView, KEYWORDS.wrkspacePage);
router.register(ROUTER.wrkspaceSearch, wrkspaceSearchView, KEYWORDS.wrkspaceSearch);
router.register(ROUTER.channelPage, channelView, KEYWORDS.channelPage);
router.register(ROUTER.chatFoundMessage, chatView, KEYWORDS.chatFoundMessage);
router.register(ROUTER.channelFoundMessage, channelView, KEYWORDS.channelFoundMessage);

router.start();

export {bus, data, router, promiseMaker, componentsStorage, appLocalStorage, FetchModule};
