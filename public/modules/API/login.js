import { Login } from '../../components/Login/Login';
import settings from '../config';
import { renderProfile } from './profile';

const { backend } = settings;

function createLogin (application) {
    application.innerHTML = '';

    const loginComponent = new Login();
    loginComponent.parent = application;
    loginComponent.renderLogin();

    const form = application.querySelector('#login-form');

    console.dir(form);

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = form.elements['email'].value;
        const password = form.elements['password'].value;

        login(application, email, password);
    });
}

function login (application, email, password) {
    fetch(`${backend}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        credentials: 'include',
        mode: 'cors',
    }).then(response => {
        if (response.status !== 200) {
            throw new Error(
                `Пользователь с данной почтой не зарегистрирован: ${response.status}`);
        }
        console.dir(response);
        return response.json();
    }).then(user => {
        console.log(user);
        console.log('Залогинились');

        renderProfile(application, user);
    }).catch(err => {
        console.error(err);
        alert(err.message);
    });
}

export { createLogin, login };