import { Header } from '../../components/Header/Header';
import { ProfileComponent } from '../../components/Profile/Profile';

import settings from '../config';
import createInput from './forms';

const { backend } = settings;

function createProfile (application) {
    fetch(`${backend}/users`, {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
    }).then(response => {
        if (response.status !== 200) {
            throw new Error(
                `Не зашли: ${response.status}`);
        }
        return response.json();
    }).then(user => {
        console.log(user);

        renderProfile(application, user);
    }).catch(err => {
        console.error(err);
        alert(err.message);
    });
}

function renderProfile (application, user) {
    application.innerHTML = '';

    const header = new Header();
    header.parent = application;
    header.renderHeader(true);

    const profile = new ProfileComponent(user, application);
    profile.renderProfile();

    createInput(application, user, 'fstatus',
        `border: none; outline: none; padding: 0; height: 30px; margin: 0`);
    createInput(application, user, 'email',
        `border: none; outline: none; padding: 0; height: 30px; margin: 0`);
    //createInput(application, user, 'phone', `border-top: none; border-left: none; border-right: none; outline: none; height: 30px; margin-top: 20px;`)
    createInput(application, user, 'username',
        `border: none; outline: none; margin: 0`);
    createInput(application, user, 'fullname',
        `border: none; outline: none; margin: 0`);
}

export {createProfile, renderProfile}