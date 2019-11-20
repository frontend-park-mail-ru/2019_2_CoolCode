import {bus, componentsStorage, data} from "../main";
import {deletingMessage} from "../backendDataFetchers/messagesInteraction";
const channelTemplate = require('../components/ChannelBlock/channel.pug');
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channel-header.css';
import '../components/ChannelBlock/bemChannelHeader/channelHeader/channelHeaderMenuItems/channelHeaderMenuItems.css';
const addMemberTempl = require('../components/ChannelBlock/addMember.pug');
const infoTemplate = require('../components/ChannelBlock/info.pug');

function channelView() {
	const wrks = document.querySelectorAll('.wrkspace-block.wrkspace-block_style');
	wrks.forEach((wrk)=>{
		const wrkName = wrk.querySelector('.wrkspace-visible__name-row__text.wrkspace-visible__name-row__text_style').textContent;
		const wrkPhoto = wrk.querySelector('.wrkspace-visible__image-row__image.wrkspace-visible__image-row__image_style').getAttribute('src');
		const channels = wrk.querySelectorAll('.wrkspace-chann');
		channels.forEach((channel) => {
			const channelName = channel.textContent;
			channel.addEventListener('click', (event)=>{
				document.querySelector(".column.column_right.column_right-outlined").innerHTML = '';
				//bus.emit('createChannelView', null);
				let importantMsg = "hello";
				document.querySelector(".column.column_right.column_right-outlined").innerHTML = channelTemplate({
					wrkName:wrkName,
					channelName:channelName,
					wrkPhoto:wrkPhoto,
					importantMessage : importantMsg,
				});
				menuHandlers();
			});
			//router.go('/channel', id);
		});
	});
}

function menuHandlers() {
	const contentListRoot = document.querySelector('.header');
	const menuInfo = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__info');
	const menuFind = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__find');
	const menuAdd = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__add');
	const menuDelete = document.querySelector('.channel-header__info-row__dropdown__dropdown-content__delete');
	menuAdd.addEventListener('click', ()=>{
		contentListRoot.insertAdjacentHTML("beforebegin", addMemberTempl({viewType: "addMember"}));
	 });
	menuInfo.addEventListener('click', ()=>{
		contentListRoot.insertAdjacentHTML("beforebegin", infoTemplate());
		const infoText = document.querySelector('.channelHeaderMenuItems__info__text.channelHeaderMenuItems__info_style__text');
		infoText.addEventListener('dblclick', (event)=>{
			alert("aa");
		});
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

export {channelView, menuHandlers };