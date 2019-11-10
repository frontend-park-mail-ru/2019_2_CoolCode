import {API, settings} from '../../constants/config';
import {bus, FetchModule} from "../../main";
import {getUserPhoto} from "./profile";
import {validateEmail} from "./login";
import {setUserInfo} from "../../backendDataFetchers/setUserInfo";

function createInput (application, data, field, style) { //TODO: make it beautiful function

	const phoneBlock = document.querySelector('#phone-setting');
	const emailBlock = document.querySelector('#email-setting');

	const settingField = application.querySelector(`#${field}-setting`);
	const settingInput = document.createElement('input');

	function createInput (e) {
		e.preventDefault();
		settingField.innerHTML = '';
		settingInput.classList = settingField.classList;
		settingInput.id = `status-${field}-editable`;
		let temp = settingField.innerHTML;
		settingField.innerHTML = '';
		settingInput.value = temp;
		settingInput.placeholder = `${field}`;
		settingInput.style.cssText = style;
		settingField.appendChild(settingInput);
		settingInput.focus();
		e.target.removeEventListener('dblclick', createInput);
	}

	settingField.addEventListener('dblclick', createInput);

	settingInput.addEventListener('blur', async function () {
		console.log(data.id);

	});
}

export default createInput;