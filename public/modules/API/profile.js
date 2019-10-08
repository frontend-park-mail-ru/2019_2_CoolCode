import { Header } from '../../components/Header/Header';
import { ProfileComponent } from '../../components/Profile/Profile';

import settings from '../config';
import createInput from './forms';

const { backend } = settings;
let profile;

function createProfile (application) {
	fetch(`${backend}/users`, {
		method: 'GET',
		credentials: 'include',
		mode: 'cors',
	}).then(response => {
		if (response.status !== 200) {
			throw new Error(
				`Not logged in: ${response.status}`);
		}
		return response.json();
	})
		.then(user => {
			console.log(user);
			renderProfile(application, user);
		})
		.catch(err => {
			console.error(err);
		});
}

async function renderProfile (application, user) {
	application.innerHTML = '';

	const header = new Header();
	header.parent = application;
	header.renderHeader(true);

	profile = new ProfileComponent(user, application);
	profile.renderProfile();
	await getUserPhoto(user.id);
	createInput(application, user, 'fstatus',
		`border: none; outline: none; padding: 0; height: 30px; margin: 0`);
	createInput(application, user, 'email',
		`border: none; outline: none; padding: 0; height: 30px; margin: 0`);
	/*    createInput(application, user, 'phone',
            `border: none; outline: none; padding: 0; height: 30px; margin: 0`);*/
	createInput(application, user, 'username',
		`border: none; outline: none; margin: 0`);
	createInput(application, user, 'fullname',
		`border: none; outline: none; margin: 0`);
	createInput(application, user, 'phone',
		`border: none; outline: none; margin: 0`);

	createImageUpload(user.id);

}

async function getUserPhoto (id) {
	profile.showLoader();
	console.log(` Getting user ${id} photo`);
	try{
		let response = await fetch(`${backend}/photos/${id}`, {
			method: 'GET',
			credentials: 'include',
			mode: 'cors',
		});

		let buffer = await response.arrayBuffer();

		if (response.status !== 200) {
			throw new Error(
				`Не зашли: ${response.status}`);
		}

		let base64Flag = 'data:image/jpeg;base64,';
		let imageStr = await arrayBufferToBase64(buffer);

		document.getElementById('avatar').src = base64Flag + imageStr;
		profile.hideLoader();
	} catch (e) {
		//profile.hideLoader();
		console.log(e);
		
	}
}

function getPhoto(binary, res) {
	res.forEach((b) => binary += String.fromCharCode(b));
	return binary;
}

function arrayBufferToBase64 (buffer) {
	let binary = '';
	let bytes = [].slice.call(new Uint8Array(buffer));

	binary = getPhoto(binary, bytes);
	return window.btoa(binary);
}

function createImageUpload (id) {
	const imageInput = document.getElementById('file');
	console.log('image upload created');
	const formData = new FormData();

	formData.append('file', imageInput.files[0]);

	imageInput.addEventListener('change', function () {
		let formData = new FormData();
		formData.append('file', imageInput.files[0]);
		console.log('image upload', imageInput.files[0]);
		fetch(`${backend}/photos`, {
			method: 'POST',
			body: formData,
			credentials: 'include',
			mode: 'cors',
		}).then(response => {
			if (response.status !== 200) {
				console.log('Error while upload image');
			}
			getUserPhoto(id,);

		});
	});
}

export { createProfile, renderProfile };