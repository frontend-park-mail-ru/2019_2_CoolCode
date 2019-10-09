import { Header } from '../../components/Header/Header';
import { ProfileComponent } from '../../components/Profile/Profile';

import settings from '../config';
import createInput from './forms';

import openWrkSpaceInfo from './wrkspaceInteraction';

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
	user.chats = [
		{
			name: "Alex Spiridonova",
			number: 10,
			lastMsg: "WTF?"
		},
		{
			name: "Someone New",
			number: 3,
			lastMsg: "HYD?"
		},
		{
			name: "No One",
			number: 1,
			lastMsg: "?"
		},
		{
			name: "Bono u2",
			number: "1",
			lastMsg: "Come to concert tonight",
		}
	];

	user.wrkspaces = [
		{
			title: "CoolCode",
			channels: ["important-stuff", "some-weird-stuff", "Information", "Vasya Romanov"],
			members: ["AS", "Vasya Romanov", "Bono", "U"],
		}
	];

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
	openWrkSpaceInfo();

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
		if (response.status !== 200) {
			throw new Error(
				`Не зашли: ${response.status}`);
		}
		let buffer = await response.blob();
		let reader = new FileReader();
		reader.readAsDataURL(buffer);
		reader.onload = function() {
			profile.hideLoader();
			document.getElementById('avatar').src = reader.result;
		};

	} catch (e) {
		profile.hideLoader();
		console.log(e);
	}
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