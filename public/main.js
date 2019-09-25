import {ProfileComponent} from './components/Profile/Profile.js';
import {MainPageComponent, Header} from './components/MainPage/MainPage.js';
import {SignUp} from './components/Signup/Signup.js';
import {Login} from './components/Login/Login.js';
import {AjaxCreate} from './components/Ajax/AjaxModule.js';

const application = document.getElementById('application');
AjaxCreate.init();
const ajaxModule = AjaxModule;


const functions = {
    mainPage: createMainPage,
    signUp: createSignUp,
    login: createLogin,
    profile: createProfile,
    logout:createMainPage,
};

function createMainPage() {
    application.innerHTML = '';

    const header = new Header();
    header.parent = application;
    header.renderHeader();

    const mainPage = new MainPageComponent();
    mainPage.parent = application;
    mainPage.renderMainPage();
}




function createSignUp() {

    application.innerHTML = '';

    const signUpComponent = new SignUp();
    signUpComponent.parent = application;
    signUpComponent.renderSignUp();

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = form.elements['email'].value;
        const age = parseInt(form.elements['age'].value);
        const password = form.elements['password'].value;

        ajaxModule._ajax('POST', '/signup', {email, age, password}, function (status, responseText) {
            if (status === 201) {
                createProfile();
                return;
            }

            const {error} = JSON.parse(responseText);
            alert(error);
        })
    });

}

function createLogin() {
    application.innerHTML = '';

    const loginComponent = new Login();
    loginComponent.parent = application;
    loginComponent.renderLogin();


    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        ajaxModule._ajax(
            'POST',
            '/login',
            {email, password},
            function (status, response) {
                if (status === 200) {
                    createProfile();
                } else {
                    const {error} = JSON.parse(response);
                    alert(error);
                }
            }
        )

    });

}

function createProfile() {
    application.innerHTML = '';

    const header = new Header();
    header.parent = application;
    header.renderHeader();

    ajaxModule._ajax('GET', '/profile', null, function (status, responseText) {
        let isMe = false;
        if (status === 200) {
            isMe = true;
        }
        if (status === 401) {
            isMe = false;
        }
        if (isMe) {
            const responseBody = JSON.parse(responseText);

            const profile = new ProfileComponent(responseBody, application);
            profile.renderProfile();

        } else {
            alert('АХТУНГ нет авторизации');
            createSignUp();
        }
    });
}


application.addEventListener('click', function (evt) {
    const {target} = evt;

    if (target instanceof HTMLAnchorElement) {
        evt.preventDefault();
        functions[target.dataset.section]();
    }
});

createMainPage();
