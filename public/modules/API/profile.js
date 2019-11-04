import {responseStatuses, settings} from '../config';
import createInput from './forms';

import openWrkSpaceInfo from './wrkspaceInteraction';
import MyWorker from '../../workers/profile.worker';

const { backend } = settings;
import {bus, FetchModule, router} from '../../main';
import {data} from "../../main";
import {chooseChat, createWebsocketConn} from "./websocketCreation";

function redundantWrkSpace() {
	data.setUserWrkSpaces([
		{
			Name: "CoolCode",
			Channels: [{
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
			Members: ["AS", "Vasya Romanov", "Bono", "U"],
		}]
	);

}

async function checkLogin () {
	try {
		let response = await FetchModule._doGet({path: '/users'});
		if (response.status !== 200) {
			throw new Error(
				`Not logged in: ${response.status}`);
		}
		let user = await response.json();
		bus.emit('addUser', null, user);
	} catch (error) {
		console.error(error);
	}
}

async function openWebSocketConnections() {
	if (data.getSocketConnection() === false) {
		let chatUsersWChatID = data.getChatUsersWChatIDs();

		chatUsersWChatID.forEach((chat) => {
			createWebsocketConn(chat.chatId);
		});

		data.setSocketConnection(true);
	}
}

async function creatingChats() {
	redundantWrkSpace();
	await getChats(data.user.id);
	await openWebSocketConnections();
}

function createInputs (application, user) {
	createInput(application, user, 'fstatus',
		'border: none; outline: none; align-self: flex-start;');
	createInput(application, user, 'email',
		'border: none; outline: none; align-self: flex-start;');
	createInput(application, user, 'username',
		'border: none; outline: none; align-self: flex-start;');
	createInput(application, user, 'fullname',
		'`border: none; outline: none; align-self: flex-start;');
	createInput(application, user, 'phone',
		'border: none; outline: none; align-self: flex-start;');
	createImageUpload(user.id);

};

async function getChats(id) {
	console.log(` Getting user ${id} chats`);
	try {
		let response = await FetchModule._doGet({path: `/users/${id}/chats`});
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user chats: ${response.status}`);
		}
		let chats = await response.json();
		data.setUserChats(chats['Chats']);
		data.setUserWrkSpaces(chats['Workspaces']);
		console.log(chats);
	} catch (error) {
		console.error(error);
	}
}

async function getUserInfo(id) {
	console.log(` Getting user ${id} info`);
	try {
		let response = await FetchModule._doGet({path: `/users/${id}`});
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user info: ${response.status}`);
		}
		let user = await response.json();
		console.log(user);
		return user;
	} catch (error) {
		console.error(error);
	}
}

async function getProfilePhoto(id) {
	console.log(` Getting user ${id} photo`);
	try {
		let response = await FetchModule._doGet({path: `/photos/${id}`});
		if (response.status === 401) {
			throw new Error(responseStatuses["401"]);
		}
		if (response.status === 500) {
			document.querySelector('.bem-profile-header__image-row__image').src = 'images/sasha.jpeg';
		}
		let buffer = await response.blob();
		let worker = new MyWorker();
		worker.postMessage(buffer);

		worker.onmessage = function(result) {
			data.setUserPhoto(result.data);
			bus.emit('setPicture', null, '.bem-profile-header__image-row__image',data.getUserPhoto());
			bus.emit('hideLoader', null, '.bem-profile-header__image-row');
		};
	} catch (error) {
		console.error(error);
	}
}

async function saveUserPhoto(id) {
	console.log(` Getting user ${id} photo`);
	try {
		let response = await FetchModule._doGet({path: `/photos/${id}`});
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch chat user photo: ${response.status}`);
		}
		let buffer = await response.blob();
		let worker = new MyWorker();
		worker.postMessage(buffer);

		worker.onmessage = function(result) {
			data.setCurrentChatUserPhoto(result.data);
			bus.emit('setPicture', null, '.bem-chat-column-header__info-row__image-row__image', data.getCurrentChatUserPhoto());
			bus.emit('hideLoader', null, '.bem-chat-column-header__info-row__image-row');
		};
	} catch (error) {
		console.error(error);
	}
}

async function getUserPhoto(id, parentId, photoClass) {
	showLoaderSmall(id, parentId, photoClass);
	console.log(` Getting user ${id} photo`);
	try {
		let response = await FetchModule._doGet({path: `/photos/${id}`});
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user photo: ${response.status}`);
		}
		let buffer = await response.blob();
		let worker = new MyWorker();
		worker.postMessage(buffer);

		worker.onmessage = function(result) {
			let person = document.getElementById(parentId + '-' + id.toString());
			person.querySelector(photoClass).src = result.data;
			hideLoaderSmall(id, parentId, photoClass);
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
			bus.emit('showLoader', null, '.bem-profile-header__image-row');
			await getProfilePhoto(params.id);
		} else {
			throw new Error(
				'Error while upload image');
		}
	} catch (error) {
		console.error(error);
	}
}

function createImageUpload (id) {
	const imageInput = document.querySelector('.bem-profile-header__image-row__input');
	console.log('image upload created');
	imageInput.addEventListener('change', imageUploading.bind(null, {id:id,fileInput: imageInput}));
}

function hideLoader(selector) {
	document.querySelector(`${selector}__loader`).style.display = 'none';
	document.querySelector(`${selector}__image`).style.display = 'block';
}

function hideLoaderSmall(id, parentId, classSelector) {
	let person = document.getElementById(parentId + '-' + id.toString());
	person.querySelector(".bem-chat-block__image-row__loader").style.display = "none";
	person.querySelector(classSelector).style.display = "block";
}

function showLoader(selector) {
	document.querySelector(`${selector}__loader`).style.display = 'block';
	document.querySelector(`${selector}__image`).style.display = 'none';
}

function showLoaderSmall(id, parentId, classSelector) {
	let person = document.getElementById(parentId + '-' + id.toString());
	person.querySelector(".bem-chat-block__image-row__loader").style.display = "block";
	person.querySelector(classSelector).style.display = "none";
}

function setPicture(selector, photo) {
	let avatarElement = document.querySelector(selector);
	if (avatarElement) {
		avatarElement.src = photo;
	}
}

export {creatingChats, createInputs, getUserPhoto, getProfilePhoto, redundantWrkSpace,
	getChats, showLoader, hideLoader, getUserInfo, saveUserPhoto, setPicture, checkLogin};