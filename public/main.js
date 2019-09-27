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
    logout: createMainPage,
}

function createMainPage () {
    application.innerHTML = ''

    const header = new Header()
    header.parent = application
    header.renderHeader(false)

    const mainPage = new MainPageComponent()
    mainPage.parent = application
    mainPage.renderMainPage()
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
            // Отправляемся в профиль
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
            // Отправляемся в профиль
        }).catch(err => {
            console.error(err)
            alert(err.message)
        })
    })

}

function createProfile () {

    ajaxModule._ajax('GET', '/profile', null, function (status, responseText) {
        let isMe = false
        if (status === 200) {
            isMe = true
        }
        if (status === 401) {
            isMe = false
        }
        if (isMe) {

            application.innerHTML = ''

            const header = new Header()
            header.parent = application
            header.renderHeader(true)
            const responseBody = JSON.parse(responseText)

            const profile = new ProfileComponent(responseBody, application)
            profile.renderProfile()

        } else {
            alert('АХТУНГ нет авторизации')
            createSignUp()
        }
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
