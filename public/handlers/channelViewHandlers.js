import '../components/ChannelBlock/bemChannelHeader/channelHeader/channel-header.css';
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channelHeaderMenuItems/channelHeaderMenuItems.css';
import {router} from "../main";
const addMemberTempl = require('../components/ChannelBlock/addMember.pug');
const infoTemplate = require('../components/ChannelBlock/info.pug');

function menuHandlersDelete() {
	const menuDelete = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__delete');
}

function menuHandlersSearch() {
	const menuSearch = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__find');
}

function menuHandlersAdd() {
	const contentListRoot = document.querySelector('.header');
	const menuAdd = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__add');
	menuAdd.addEventListener('click', ()=>{
		router.go('addMember');
	});
}

function addMemberOverlayHndlr() {
	const lay = document.querySelector('.channelHeaderMenuItems__info_overlay');
	lay.style.display = 'flex';
	lay.addEventListener('click', () => {
		lay.style.display = 'none';
		router.return();
	});
}

function menuHandlersInfo() {
	const contentListRoot = document.querySelector('.header');
	const menuInfo = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__info');
	menuInfo.addEventListener('click', ()=>{
		contentListRoot.insertAdjacentHTML("beforebegin", infoTemplate());
		const block = document.querySelector('.channelHeaderMenuItems__info.channelHeaderMenuItems__info_style');
		const lay = document.querySelector('.channelHeaderMenuItems__info_overlay');
		block.style.display = 'flex';
		lay.style.display = 'flex';
		const ok = block.querySelector('.wrkspace-form__form__submit-button.wrkspace-form__form__submit-button_style');
		ok.addEventListener('click', () => {
			block.style.display = "none";
			lay.style.display = 'none';
		});
		lay.addEventListener('click', () => {
			block.style.display = "none";
			lay.style.display = 'none';
		});
	});
}

export { menuHandlersAdd,menuHandlersInfo, menuHandlersDelete, menuHandlersSearch, addMemberOverlayHndlr };