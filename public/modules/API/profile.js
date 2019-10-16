import {settings} from '../config';
import createInput from './forms';

import openWrkSpaceInfo from './wrkspaceInteraction';

import MyWorker from '../../workers/profile.worker';

const { backend } = settings;
import {bus, FetchModule, router} from '../../main';
import {login} from "./login";

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
		let response = await FetchModule._doGet({path: '/users'});
		if (response.status !== 200) {
			throw new Error(
				`Not logged in: ${response.status}`);
		}
		let user = await response.json();

		console.log(user);
		bus.emit('getUser', user);
		router.go('/profile');
	} catch (error) {
		console.error(error);
	}
}

function createInputs (application, user) {
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

async function getUserPhoto(id) {
	console.log(` Getting user ${id} photo`);
	try {
		let response = await FetchModule._doGet({path: `/photos/${id}`});
		if (response.status !== 200) {
			throw new Error(
				`Не зашли: ${response.status}`);
		}
		let buffer = await response.blob();
		let worker = new MyWorker();
		worker.postMessage(buffer);

		worker.onmessage = function(result) {
			document.getElementById('avatar').src = result.data;
			bus.emit('hideLoader');
		};
	} catch (error) {
		console.error(error);
	}
}

async function imageUploading(params = {id:null, fileInput:null}) {
	let formData = new FormData();
	formData.append('file', params.fileInput.files[0]);
	console.log('image upload', params.fileInput.files[0]);
	try {
		let response = await FetchModule._doPost({path: '/photos',
			data: formData, contentType:'multipart/form-data'});
		if (response.status === 200) {
			await getUserPhoto(params.id);
		} else {
			throw new Error(
				'Error while upload image');
		}
	} catch (error) {
		console.error(error);
	}
}

function createImageUpload (id) {
	const imageInput = document.getElementById('file');
	console.log('image upload created');
	imageInput.addEventListener('change', imageUploading.bind(null, {id:id,fileInput: imageInput}));
}

export { createProfile, createInputs, getUserPhoto, assignSomeData};