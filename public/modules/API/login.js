import {Login} from '../../components/Login/Login';
import settings from '../config';
import {renderProfile} from './profile';

const {backend} = settings;

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function createLogin(application) {
    application.innerHTML = '';

    const loginComponent = new Login();
    loginComponent.parent = application;
    loginComponent.renderLogin();

    const form = application.querySelector('.login-form');
    const errorMessage = application.querySelector('.error_message');
    const emailField = document.querySelector('#email');
    const passwordField = document.querySelector('#password');

    emailField.addEventListener('click', _ => {
        emailField.style.borderColor = 'C4C4C4';
        errorMessage.innerHTML = '';
    });

    passwordField.addEventListener('click', _ => {
        passwordField.style.borderColor = 'C4C4C4';
        errorMessage.innerHTML = '';
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let email;
        let password;
        let correct = true;

        email = form.elements['email'].value;
        password = form.elements['password'].value;

        if (form.elements['password'].value === '') {
            showError('Please, input password:(');
            passwordField.style.borderColor = '#ff6575';
            correct = false
        }
        if (!validateEmail(form.elements['email'].value)) {
            showError('Please, input correct email:(');
            emailField.style.borderColor = '#ff6575';
            correct = false
        }
        if (!correct) {
            return
        }
        login(application, email, password);


    });
}

function login(application, email, password) {

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
        if (response.status === 400) {
            showError("Wrong email or password");
            throw new Error(
                `Ошибочные данные: ${response.status}`);
        }
        if (response.status === 500) {
            showError("Server error:(");
            throw new Error(
                `Серверу плохо: ${response.status}`);
        }
        if (response.status === 200) {
            return response.json();
        }
    }).then(user => {
        console.log(`Logged in: ${user.email}`);

        renderProfile(application, user);
    }).catch(err => {
        console.error(err);
    });
}

function showError(text) {
    const emailField = application.querySelector('#email');
    const errorMessage = application.querySelector('.error_message');
    errorMessage.innerHTML = text;
}

export {createLogin, login};