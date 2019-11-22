import {bus, componentsStorage, data, router} from "../main";
import {deletingMessage} from "../backendDataFetchers/messagesInteraction";
const channelTemplate = require('../components/ChannelBlock/channel.pug');
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channel-header.css';
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channelHeaderMenuItems/channelHeaderMenuItems.css';
const addMemberTempl = require('../components/ChannelBlock/addMember.pug');
const infoTemplate = require('../components/ChannelBlock/info.pug');

function menuHandlers() {
	const contentListRoot = document.querySelector('.header');
	const menuInfo = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__info');
	const menuFind = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__find');
	const menuAdd = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__add');
	const menuDelete = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__delete');
	menuAdd.addEventListener('click', ()=>{
		contentListRoot.insertAdjacentHTML("beforebegin", addMemberTempl());
	 });
	menuInfo.addEventListener('click', ()=>{
		contentListRoot.insertAdjacentHTML("beforebegin", infoTemplate());
		const block = document.querySelector('.channelHeaderMenuItems__info.channelHeaderMenuItems__info_style');
		block.style.display = 'flex';
		const ok = block.querySelector('.wrkspace-form__form__submit-button.wrkspace-form__form__submit-button_style');
		ok.addEventListener('click', () => { block.style.display = "none"; });
	});
	// menuFind.addEventListener('click', ()=>{
	// 	contentListRoot.insertAdjacentHTML("beforebegin", creationFormTemplate({viewType: "addMember"}));
	// });
	// menuDelete.addEventListener('click', ()=>{
	// 	contentListRoot.insertAdjacentHTML("beforebegin", creationFormTemplate({viewType: "addMember"}));
	// });

}

// function channelEvent(event, wrkName, channelName) {
// 	event.preventDefault();
// 	document.querySelector(".column.column_right.column_right-outlined").innerHTML = '';
// 	//bus.emit('createChannelView', null);
// 	let importantMsg = "hello";
// 	document.querySelector(".column.column_right.column_right-outlined").innerHTML = channelTemplate({
// 		wrkName:wrkName,
// 		channelName:channelName,
// 		importantMessage : importantMsg
// 	});
//
// }

export { menuHandlers };