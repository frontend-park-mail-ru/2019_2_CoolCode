import { SignUp } from '../../components/Signup/Signup';
import { login } from './login';
import settings from '../config';

const { backend } = settings;
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function createSignUp (application) {
    application.innerHTML = '';

    const signUpComponent = new SignUp();
    signUpComponent.parent = application;
    signUpComponent.renderSignUp();

    const form = application.querySelector('.sign-up-form');
    var error = document.createElement('div');
    error.className='error';
    error.style.color = 'red';

    const emailField = application.querySelector('#email');
    const errorMessage = application.querySelector('.error_message');
    emailField.addEventListener('click', _ => {
        emailField.style.borderColor = 'C4C4C4';
        errorMessage.innerHTML = '';
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        error.innerHTML = '';
        let email, username;
        let password, fullname ;
        if(form.elements['email'].value===""||form.elements['password'].value===""
            ||form.elements['fullname'].value===""){
            error.innerHTML = '*cant be blank';
            form.elements['email'].parentElement.insertBefore(error,form.elements['email']);

        }else if (!validateEmail(form.elements['email'].value)){
            error.innerHTML = '*wrong form of email';
            form.elements['email'].parentElement.insertBefore(error,form.elements['email']);

        } else if(form.elements['password'].value.length<5){
            error.innerHTML = '*password must be longer than 5 letters';
            form.elements['email'].parentElement.insertBefore(error,form.elements['email']);

        }else{
            email = form.elements['email'].value;
            password = form.elements['password'].value;
            fullname = form.elements['fullname'].value;
            username = email.split('@')[0];
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
        }
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
                errorMessage.innerHTML = 'Sorry, this email is already registered';
                emailField.style.borderColor = '#ff6575';
                throw new Error(`Такая почта занята !!`);
            }
            if (response.status !== 200) {
                //alert(`Неверный статус: ${response.status}`);
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