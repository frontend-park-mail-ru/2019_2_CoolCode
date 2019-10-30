import {messages} from "./chat";

function growInput (element) {
	element.style.height = 'inherit';
	element.style.height = element.scrollHeight;
}
function chatInput() {
	let textContainer = document.querySelector('.input-container');
	let input = textContainer.querySelector('.message-text-input');
	input.addEventListener('input', growInput.bind(null, input));
}

export default chatInput;