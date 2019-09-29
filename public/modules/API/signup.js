import { SignUp } from '../../components/Signup/Signup';
import { login } from './login';
import settings from '../config';

const { backend } = settings;

function createSignUp (application) {
    application.innerHTML = '';

    const signUpComponent = new SignUp();
    signUpComponent.parent = application;
    signUpComponent.renderSignUp();

    const form = application.querySelector('#sign-up-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = form.elements['email'].value;
        const password = form.elements['password'].value;
        const fullname = form.elements['fullname'].value;
        const username = email.split('@')[0];

        fetch(`${backend}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                fullname: fullname,
                username: username,
            }),
            credentials: 'include',
            mode: 'cors',
        }).then(response => {
            console.dir(response);
            if (response.status === 400) {
                alert(`Такая почта занята !!`);
                throw new Error(`Такая почта занята !!`);
            }
            if (response.status !== 200) {
                alert(`Неверный статус: ${response.status}`);
                throw new Error(`Неверный статус: ${response.status}`);
            }
            return response.text();
        }).then(data => {
            console.log(`Signed up: ${email}`);
            login(application, email, password);
        }).catch(err => {
            console.error(err);
        });
    });

}

export default createSignUp;