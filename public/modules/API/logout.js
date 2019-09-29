import createMainPage from './mainpage';
import settings from '../config';

const { backend } = settings;

function handleLogout (application) {
    fetch(`${backend}/logout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: '',
        credentials: 'include',
        mode: 'cors',
    }).then(response => {
        console.log(response.status);
        if (response.status !== 200) {
            throw new Error(
                `Not logged out: ${response.status}`);
        }
        return response.text();
    }).then(data => {
        console.log(data);
        createMainPage(application);
    }).catch(err => {
        console.error(err);
    });
}

export default handleLogout;