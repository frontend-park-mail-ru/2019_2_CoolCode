function showError (selector, text) {
	const errorField = document.querySelector(selector);
	errorField.innerText = text;
}
function addErrorStyle (element, selector) {
	if (!element.classList.contains(selector)) {
		element.classList += ` ${selector}`;
	}
}

function hideError (selector) {
	const errorField = document.querySelector(selector);
	errorField.innerText = '';
}
function removeErrorStyle (element, selector) {
	if (element.classList.contains(selector)) {
		element.classList.remove(selector);
	}
}
export {showError, addErrorStyle, hideError, removeErrorStyle};