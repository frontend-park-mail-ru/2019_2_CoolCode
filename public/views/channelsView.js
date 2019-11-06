import profileView from "./profileView";
import createChannel from "../modules/API/channel";
import {router} from "../../public/main.js";
import {data} from "../../public/main";
const channelForm = require('../components/WrkSpace/Channels/creationForm.pug');

function createChannels() {
	let blocks = document.querySelectorAll(".bem-wrkspace-block");
	blocks.forEach((block)=>{
		let btn = block.querySelector(".bem-wrkspace-add__icon");
		let name = block.querySelector(".bem-wrkspace-visible__info-column__name-row").textContent;
		// console.log(name);
		// let id = data.getWrksID(name);
		btn.addEventListener('click', (event) => {
			event.preventDefault();
			document.querySelector('.bem-primary-container.bem-primary-container_style').innerHTML += channelForm();
			let wrspaceForm = document.querySelector('.bem-wrkspace-form__form');
			wrspaceForm.addEventListener('submit', (event) => {
				event.preventDefault();
				let inputField = wrspaceForm.querySelector('.bem-wrkspace-form__form__input-field');
				let channelName = inputField.value;
				if (channelName) {
					createChannel(channelName, 1).then(() => router.go('/profile'));

				} else {
					inputField.className += " bem-wrkspace-form__form__input-field_error";
					let errorField = document.querySelector('.bem-wrkspace-form__form__error-field');
					errorField.innerText = "please, input name";
				}
			});
		});

	});

}
export default createChannels;
