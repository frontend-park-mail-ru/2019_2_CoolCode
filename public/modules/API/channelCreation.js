import profileView from "../../views/profileView";
import createChannel from "./channel";
import {router} from "../../main.js";
import {data} from "../../main";
const channelForm = require('../../components/ChannelForm/channelForm.pug');

function createChannelInteraction(wrkSpaceId) {

	let channelForm = document.querySelector('.bem-wrkspace-form__form');
	channelForm.addEventListener('submit', (event) => {
		event.preventDefault();
		let inputField = channelForm.querySelector('.bem-wrkspace-form__form__input-field');
		let channelName = inputField.value;
		if (channelName) {
			createChannel(channelName, wrkSpaceId).then(() => router.go('/profile'));

		} else {
			inputField.className += " bem-wrkspace-form__form__input-field_error";
			let errorField = document.querySelector('.bem-wrkspace-form__form__error-field');
			errorField.innerText = "please, input name";
		}
	});

}

function createChannels() {
	let blocks = document.querySelectorAll(".bem-wrkspace-block");
	blocks.forEach((block)=>{
		let wrkSpaceId = parseFloat(block.id.split('-')[1]);
		let visibleBlock = block.querySelector('.bem-wrkspace-visible');
		let btn = block.querySelector(".bem-wrkspace-visible__info-column__chann-row__add-channel-button");
		let name = block.querySelector(".bem-wrkspace-visible__info-column__name-row").textContent;

		btn.addEventListener('click', (event) => {
			router.go('/channelForm', wrkSpaceId);

		});

	});

}
export {createChannels, createChannelInteraction};
