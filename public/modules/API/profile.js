import {API, responseStatuses, settings} from '../../constants/config';
import createInput from './forms';
import MyWorker from '../../workers/profile.worker';

const { backend } = settings;
import {bus, FetchModule, promiseMaker, router} from '../../main';
import {data} from "../../main";
import {chooseChat, createWebsocketConn} from "../../backendDataFetchers/websockets";
import {getChats} from "../../backendDataFetchers/gettingInfo";

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
		const response = await FetchModule._doGet(
			{path: API.auth}
		);
		switch (response.status) {
		case 401:
			bus.emit('setLoggedIn', null, false);
			break;
		case 200:
			const user = await response.json();
			bus.emit('setUser', null, user);
			break;
		default:
			throw new Error(
				`Could't check logged in status : ${response.status}`
			);
		}
	} catch (error) {
		console.error(error);
	}
}

async function openWebSocketConnections() {
	if (data.getSocketConnection() === false) {
		const chatUsersWChatID = data.getChatUsersWChatIDs();
		chatUsersWChatID.forEach((chat) => {
			bus.emit('createWebsocketConn', null, chat.chatId);
		});
		bus.emit('setSocketConnection', null, true);
	}
}

async function creatingChats() {
	redundantWrkSpace();
	await promiseMaker.createPromise('getChats', data.getUserId());
	await openWebSocketConnections();
}

async function getProfilePhoto(id) {
	console.log(` Getting user ${id} photo`);
	try {
		const response = await FetchModule._doGet(
			{path: API.getPhoto(id)}
		);
		if (response.status === 401) {
			throw new Error(responseStatuses["401"]);
		}
		if (response.status === 500) {
			document.querySelector('.profile-header__image-row__image').src = 'images/sasha.jpeg';
		}
		const buffer = await response.blob();
		const worker = new MyWorker();
		worker.postMessage(buffer);

		worker.onmessage = function(result) {
			data.setUserPhoto(result.data);
			bus.emit('setPicture', null, '.profile-header__image-row__image',data.getUserPhoto());
			bus.emit('hideLoader', null, '.profile-header__image-row');
		};
	} catch (error) {
		console.error(error);
	}
}

async function saveUserPhoto(id) {
	console.log(` Getting user ${id} photo`);
	try {
		const response = await FetchModule._doGet(
			{path: API.getPhoto(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch chat user photo: ${response.status}`);
		}
		const buffer = await response.blob();
		const worker = new MyWorker();
		worker.postMessage(buffer);

		worker.onmessage = function(result) {
			data.setCurrentChatUserPhoto(result.data);
			bus.emit('setPicture', null, '.chat-header__info-row__image-row__image', data.getCurrentChatUserPhoto());
			bus.emit('hideLoader', null, '.chat-header__info-row__image-row');
		};
	} catch (error) {
		console.error(error);
	}
}

async function getUserPhoto(id, parentId, photoClass) {
	showLoaderSmall(id, parentId, photoClass);
	console.log(` Getting user ${id} photo`);
	try {
		const response = await FetchModule._doGet(
			{path: API.getPhoto(id)}
		);
		if (response.status !== 200) {
			throw new Error(
				`Couldn't fetch user photo: ${response.status}`);
		}
		const buffer = await response.blob();
		const worker = new MyWorker();
		worker.postMessage(buffer);

		worker.onmessage = function(result) {
			const person = document.getElementById(`${parentId}-${id.toString()}`);
			person.querySelector(photoClass).src = result.data;
			hideLoaderSmall(id, parentId, photoClass);
		};
	} catch (error) {
		console.error(error);
	}
}

async function imageUploading(params = {id:null, fileInput:null}) {
	const formData = new FormData();
	formData.append('file', params.fileInput.files[0]);
	console.log('image upload', params.fileInput.files[0]);
	try {
		const response = await FetchModule._doPost(
			{path: API.postPhoto,
				data: formData,
				contentType:'multipart/form-data'}
		);
		if (response.status === 200) {
			bus.emit('showLoader', null, '.profile-header__image-row');
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
	const imageInput = document.querySelector('.profile-header__image-row__input');
	console.log('image upload created');
	imageInput.addEventListener('change', imageUploading.bind(null, {id:id,fileInput: imageInput}));
}

function hideLoader(selector) {
	document.querySelector(`${selector}__loader`).style.display = 'none';
	document.querySelector(`${selector}__image`).style.display = 'block';
}

function hideLoaderSmall(id, parentId, classSelector) {
	const person = document.getElementById(parentId + '-' + id.toString());
	person.querySelector(".chat-block__image-row__loader").style.display = "none";
	person.querySelector(classSelector).style.display = "block";
}

function showLoader(selector) {
	document.querySelector(`${selector}__loader`).style.display = 'block';
	document.querySelector(`${selector}__image`).style.display = 'none';
}

function showLoaderSmall(id, parentId, classSelector) {
	const person = document.getElementById(parentId + '-' + id.toString());
	person.querySelector(".chat-block__image-row__loader").style.display = "block";
	person.querySelector(classSelector).style.display = "none";
}

function setPicture(selector, photo) {
	const avatarElement = document.querySelector(selector);
	if (avatarElement) {
		avatarElement.src = photo;
	}
}

export {creatingChats, getUserPhoto, getProfilePhoto, redundantWrkSpace,
	showLoader, hideLoader, saveUserPhoto, setPicture, checkLogin, createImageUpload};