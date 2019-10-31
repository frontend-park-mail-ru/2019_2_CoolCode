import {messages} from "./chat";

function growInput (element) {
	element.style.height = 'inherit';
	element.style.height = element.scrollHeight;
}
function chatInput() {
	let input = document.querySelector('.bem-chat-column-input__text');
	input.addEventListener('input', growInput.bind(null, input));
}

export default chatInput;