import {bus, data, FetchModule, promiseMaker} from "../main";
import MyWorker from "../workers/profile.worker";
import {getPhoto} from "../backendDataFetchers/gettingInfo";

async function getProfilePhoto(id) {
	const buffer = await getPhoto(id);
	const worker = new MyWorker();
	worker.postMessage(buffer);

	worker.onmessage = function (result) {
		promiseMaker.createPromise('setUserPhoto', result.data).then(() => {
			bus.emit('setPicture', null, '.profile-header__image-row__image', data.getUserPhoto());
			bus.emit('hideLoader', null, '.profile-header__image-row');
		});
	};
}

async function saveUserPhoto(id) {
	const buffer = await getPhoto(id);
	const worker = new MyWorker();
	worker.postMessage(buffer);

	worker.onmessage = function (result) {
		promiseMaker.createPromise('setCurrentChatUserPhoto', result.data).then(() => {
			bus.emit('setPicture', null, '.chat-header__info-row__image-row__image', data.getCurrentChatUserPhoto());
			bus.emit('hideLoader', null, '.chat-header__info-row__image-row');
		});
	};
}

async function getUserPhoto(id, parentId, photoClass) {
	showLoaderSmall(id, parentId, photoClass);
	const buffer = await getPhoto(id);
	const worker = new MyWorker();
	worker.postMessage(buffer);

	worker.onmessage = function (result) {
		const person = document.getElementById(`${parentId}-${id.toString()}`);
		person.querySelector(photoClass).src = result.data;
		hideLoaderSmall(id, parentId, photoClass);
	};
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

export {setPicture, showLoader, hideLoader, saveUserPhoto, getUserPhoto, getProfilePhoto};