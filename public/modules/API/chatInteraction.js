import {messages} from "./chat";
import sendRight from "./sendMessege";
import {data} from "../../main";
const rightMsg = require('../../components/Chat/msgRight.pug');

function growInput (element) {
	element.style.height = 'inherit';
	element.style.height = element.scrollHeight;
}
function chatInput(id) {
	let textContainer = document.querySelector('.input-container');
	let input = textContainer.querySelector('.message-text-input');
	input.addEventListener('input', growInput.bind(null, input));
	input.addEventListener('keypress', function (event) {
		var key = event.which;
		if (key === 13) {
			event.preventDefault();
			let text = document.getElementsByClassName("message-text-input")[0].value;
			sendRight(text,data.getChatIdByChatUserId(id));
			document.getElementsByClassName("message-text-input")[0].value='';
			document.querySelector('.chat-scroll').innerHTML += rightMsg({text:text});
		}
	});
}

export default chatInput;