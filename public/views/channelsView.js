import profileView from "./profileView";
import createChannel from "../modules/API/channel";
import {router} from "../../public/main.js";
const channelForm = require('../components/WrkSpace/Channels/creationForm.pug');

function createChannels(id) {
	let btnCreateChanel = document.querySelectorAll(".bem-wrkspace-add__icon");

	btnCreateChanel.forEach((btn)=>{
		btn.addEventListener('click', (event) => {
			event.preventDefault();
			document.querySelector('.bem-primary-container.bem-primary-container_style').innerHTML += channelForm();
			let wrspaceForm = document.querySelector('.bem-wrkspace-form__form');
			wrspaceForm.addEventListener('submit', (event) => {
				event.preventDefault();
				let id = 1;
				let inputField = wrspaceForm.querySelector('.bem-wrkspace-form__form__input-field');
				let channelName = inputField.value;
				if (channelName) {
					createChannel(channelName, id).then(() => router.go('/profile'));

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
