import settings from '../config';

const { backend } = settings;

function createInput (application, data, field, style) {
    const settingField = application.querySelector(`#${field}-setting`);
    const settingInput = document.createElement('input');

    function createInput (e) {
        e.preventDefault();
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

    settingInput.addEventListener('blur', _ => {
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
                    data.email = settingInput.value;
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
            }).catch(err => {
                console.log(err);
            });
        }
    });
}

/*function createInput(data, field, style) {
    const settingField = application.querySelector(`#${field}-setting`);
    const settingInput = document.createElement('input');
    settingInput.cssText = "margin: 0 0 0 20px";

    settingField.addEventListener('dblclick', (e) => {
        e.preventDefault();
        settingInput.classList = settingField.classList;
        settingInput.id = `status-${field}-editable`;
        if (settingField.value === "") {
            settingInput.placeholder = `${field}`;
        } else {
            settingInput.placeholder = settingField.textContent;
        }
        settingInput.value = "";
        settingInput.style.cssText = style;
        settingField.replaceWith(settingInput);
        settingInput.focus()
    });

    settingInput.addEventListener('blur', e => {
        console.log(data.id);
        settingField.innerHTML = settingInput.value;
        settingInput.replaceWith(settingField);
        if (settingInput.value !== '') {
            switch (field) {
                case 'fstatus':
                    data.fstatus = settingInput.value;
                    break;
                case 'phone':
                    data.phone = settingInput.value;
                    break;
                case 'email':
                    data.email = settingInput.value;
                    break;
                case 'username':
                    data.username = settingInput.value;
                    break;
                case 'fullname':
                    data.fullname = settingInput.value;
                    break
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
                console.dir(response)
            }).catch(err => {
                console.log(err)
            })
        }
    })
}*/

export default createInput;