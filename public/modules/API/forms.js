import {settings} from '../config';
import {FetchModule} from "../../main";
import {getUserPhoto} from "./profile";

const { backend } = settings;
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
function createInput (application, data, field, style) { //TODO: make it beautiful function
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
		if (settingInput.value !== '') {
			switch (field) {
			case 'fstatus':
				data.fstatus = settingInput.value;
				break;
			case 'phone':
				data.phone = settingInput.value;
				break;
			case 'email':
				if(!validateEmail(settingInput.value)) {
					settingField.innerHTML = '';

					settingField.innerHTML = '<p><span   style="font-size: large; color: red; font-family: Arial; ">*very wrong input</span>';
					data.email = '';
				}else{
					data.email = settingInput.value;
				}
				break;
			case 'username':
				data.username = settingInput.value;
				break;
			case 'fullname':
				data.fullname = settingInput.value;
				break;
			}
			try {
				let response = await FetchModule._doPut({path: `/users/${data.id}`,
					data: data,
					contentType:'application/json;charset=utf-8'});
				if (response.status === 200) {
					let resolve = await response.text(); //TODO: change response from server
					console.log(resolve);
				}
			} catch (error) {
				console.error(error);
			}
		}
	});
}

export default createInput;