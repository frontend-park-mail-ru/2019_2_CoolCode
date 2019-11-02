import {messages} from "./chat";
import sendRight from "./sendMessage";
import {data} from "../../main";
const rightMsg = require('../../components/Chat/msgRight.pug');

function growInput (element) {
	//element.style.height = 'inherit';
	element.style.height = element.scrollHeight;
}

function chatInput(id) {
	let input = document.querySelector('.bem-chat-column-input__text');
	input.addEventListener('input', growInput.bind(null, input));
	input.addEventListener('keypress', function (event) {
		var key = event.which;
		if (key === 13) {
			event.preventDefault();
			let msgWindow = document.querySelector('.bem-chat-column-msgwindow');
			let text = document.getElementsByClassName('bem-chat-column-input__text')[0].value;
			if(text !== "") {
				console.log(text);
				sendRight(text,data.getChatIdByChatUserId(id));
				document.getElementsByClassName('bem-chat-column-input__text')[0].value = '';
				let today = new Date();
				let time = today.getHours() + ":" + today.getMinutes();
				msgWindow.innerHTML += rightMsg({text:text, time:time});
			}
			msgWindow.scrollTop = msgWindow.scrollHeight - msgWindow.clientHeight;
		}
	});
}

export default chatInput;