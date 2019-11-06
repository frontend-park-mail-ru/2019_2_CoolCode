import profileView from "../../views/profileView";
import createChannel from "./channel";
import {router} from "../../main.js";
import {data} from "../../main";
const channelForm = require('../../components/ChannelForm/channelForm.pug');

function createChannels() {
	let blocks = document.querySelectorAll(".bem-wrkspace-block");
	blocks.forEach((block)=>{
		let wrkSpaceId = parseFloat(block.id.split('-')[1]);
		let visibleBlock = block.querySelector('.bem-wrkspace-visible');
		let btn = block.querySelector(".bem-wrkspace-visible__info-column__chann-row__add-channel-button");
		let name = block.querySelector(".bem-wrkspace-visible__info-column__name-row").textContent;

		btn.addEventListener('click', (event) => {
			router.go('/createChannel', wrkSpaceId);

		});

	});

}
export {createChannels};
