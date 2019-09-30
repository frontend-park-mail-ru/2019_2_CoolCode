import settings from '../config';

const { backend } = settings;
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
function createInput (application, data, field, style) {
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

	settingInput.addEventListener('blur', function () {
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
			fetch(`${backend}/users/${data.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json;charset=utf-8',
				},
				body: JSON.stringify(data),
				credentials: 'include',
				mode: 'cors',
			}).then(response => {
				console.dir(response);
			})
				.catch(err => {
					console.log(err);
				});
		}
	});
}

export default createInput;