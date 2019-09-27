'use strict'

import { ProfileComponent } from './components/Profile/Profile.js'
import { MainPageComponent } from './components/MainPage/MainPage.js'
import { Header } from './components/Header/Header.js'
import { SignUp } from './components/Signup/Signup.js'
import { Login } from './components/Login/Login.js'
import { AjaxCreate } from './modules/Ajax/AjaxModule.js'

const application = document.getElementById('application')
AjaxCreate.init()
const ajaxModule = AjaxModule

const backend = 'http://127.0.0.1:8080'

import './styles/main.css'

const functions = {
    mainPage: createMainPage,
    signUp: createSignUp,
    login: createLogin,
    profile: createProfile,
    logout: handleLogout,
}

function createMainPage () {
    fetch(`${backend}/users`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
    }).then(response => {
        application.innerHTML = ''

        const header = new Header()
        header.parent = application
        header.renderHeader(response.status === 200)

        const mainPage = new MainPageComponent()
        mainPage.parent = application
        mainPage.renderMainPage()
    }).catch(err => {
        console.error(err)
        alert(err.message)
    })

}

function createSignUp () {

    application.innerHTML = ''

    const signUpComponent = new SignUp()
    signUpComponent.parent = application
    signUpComponent.renderSignUp()

    const form = application.querySelector('#sign-up-form')

    console.dir(form)

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const email = form.elements['email'].value
        const password = form.elements['password'].value

        fetch(`${backend}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            credentials: 'include',
            mode: 'cors',
        }).then(response => {
            console.dir(response)
            if (response.status === 400) {
                throw new Error(`Такая почта занята !!`)
            } else if (response.status !== 200) {
                throw new Error(`Неверный статус: ${response.status}`)
            }
            return response.text()
        }).then(data => {
            console.log('Зарегались')
            // TODO: Отправляемся в профиль
        }).catch(err => {
            console.error(err)
            alert(err.message)
        })
    })

}

function createLogin () {
    application.innerHTML = ''

    const loginComponent = new Login()
    loginComponent.parent = application
    loginComponent.renderLogin()

    const form = application.querySelector('#login-form')

    console.dir(form)

    form.addEventListener('submit', function (e) {
        e.preventDefault()

        const email = form.elements['email'].value
        const password = form.elements['password'].value

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
                    `Пользователь с данной почтой не зарегистрирован: ${response.status}`)
            }
            console.dir(response)
            return response.json()
        }).then(data => {
            console.log(data)
            console.log('Залогинились')

            application.innerHTML = ''

            const header = new Header()
            header.parent = application
            header.renderHeader(true)

            const profile = new ProfileComponent(data, application)
            profile.renderProfile()

            handleLogout()
        }).catch(err => {
            console.error(err)
            alert(err.message)
        })
    })

}

function handleLogout () {
    const logoutLink = application.querySelector('#logout-link')
    console.log(logoutLink)

    logoutLink.addEventListener('click', (e) => {
        e.preventDefault()

        fetch(`${backend}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: '',
            credentials: 'include',
            mode: 'cors',
        }).then(response => {
            console.log(response.status)
            if (response.status !== 200) {
                throw new Error(
                    `Не вышли: ${response.status}`)
            }
            return response.text()
        }).then(data => {
            console.log(data)
            createMainPage()
        }).catch(err => {
            console.error(err)
            alert(err.message)
        })
    })

}

function createProfile () {
    fetch(`${backend}/users`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
    }).then(response => {
        if (response.status !== 200) {
            throw new Error(
                `Не зашли: ${response.status}`)
        }
        return response.json()
    }).then(data => {
        console.log(data)
        application.innerHTML = ''

        const header = new Header()
        header.parent = application
        header.renderHeader(true)

        const profile = new ProfileComponent(data, application)
        profile.renderProfile()
    }).catch(err => {
        console.error(err)
        alert(err.message)
    })
}

application.addEventListener('click', function (evt) {
    const { target } = evt

    if (target instanceof HTMLAnchorElement) {
        evt.preventDefault()
        functions[target.dataset.section]()
    }
})

createMainPage()
