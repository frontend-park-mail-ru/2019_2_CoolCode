import settings from '../config';
import createInput from './forms';

import openWrkSpaceInfo from './wrkspaceInteraction';

import MyWorker from '../../workers/profile.worker';

const { backend } = settings;
import {bus, router} from '../../main';

function assignSomeData (data) {
	data["chats"] = [
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

	data["wrkspaces"] = [
		{
			title: "CoolCode",
			channels: [{
				title: "important-stuff",
				members: 4,
				messages: null,
				muted: true,
				starred: true,
				public: false,
				private: false,
			},
			{
				title: "some-weird-stuff",
				members: 3,
				messages: 5,
				muted: true,
				starred: false,
				public: false,
				private: false,
			},
			{
				title: "Information",
				members: null,
				messages: 1,
				muted: false,
				starred: false,
				public: true,
				private: false,
			},
			{
				title: "Vasya Romanov",
				members: null,
				messages: null,
				muted: true,
				starred: false,
				public: false,
				private: true,
			}],
			members: ["AS", "Vasya Romanov", "Bono", "U"],
		}
	];

}

async function createProfile () {
	try {
		let response = await fetch(`${backend}/users`, {
			method: 'GET',
			credentials: 'include',
			mode: 'cors',
		});
		if (response.status !== 200) {
			throw new Error(
				`Not logged in: ${response.status}`);
		}
		let user = await response.json();

		console.log(user);
		bus.emit('getUser', user);
		router.go('/profile');
	}
	catch (error) {
		console.error(error);
	}
}

async function createInputs (application, user) {
	createInput(application, user, 'fstatus',
		`border: none; outline: none; padding: 0; height: 30px; margin: 0`);
	createInput(application, user, 'email',
		`border: none; outline: none; padding: 0; height: 30px; margin: 0`);
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
		let worker = new MyWorker();
		worker.postMessage(buffer);

		 worker.onmessage = function(result) {
		 	document.getElementById('avatar').src = result.data;
			bus.emit('hideLoader' );
		};
	} catch (error) {
		console.log(error);
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
			getUserPhoto(id);

		});
	});
}

export { createProfile, createInputs, getUserPhoto, assignSomeData};