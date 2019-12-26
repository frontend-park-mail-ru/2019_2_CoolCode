import {bus, data, promiseMaker} from "../main";
import MyWorker from "../workers/profile.worker";
import {getPhoto, getPhotoWrkspace} from "../backendDataFetchers/getEntitiesRequests";

async function getWrkspacePhoto(id, parentId, photoClass) {
	showLoaderSmall(id, parentId, photoClass, ".wrkspace-visible__image-row__loader");
	const buffer = await getPhotoWrkspace(id);
	const worker = new MyWorker();
	worker.postMessage(buffer);

	worker.onmessage = function (result) {
		const person = document.getElementById(`${parentId}-${id.toString()}`);
		person.querySelector(photoClass).src = result.data;
		hideLoaderSmall(id, parentId, photoClass, ".wrkspace-visible__image-row__loader");
	};
}

async function getProfilePhoto(id) {
	const buffer = await getPhoto(id);
	const worker = new MyWorker();
	worker.postMessage(buffer);

	worker.onmessage = function (result) {
		promiseMaker.createPromise('setUserPhoto', result.data).then(() => {
			bus.emit('setPicture', null, '.profile-header__content__image', data.getUserPhoto());
			bus.emit('hideLoader', null, '.profile-header__content');
		});
	};
}

async function getHeaderPhoto() {
	const buffer = await getPhoto(data.getUserId());
	const worker = new MyWorker();
	worker.postMessage(buffer);

	worker.onmessage = function (result) {
		promiseMaker.createPromise('setUserPhoto', result.data).then(() => {
			bus.emit('setPicture', null, '.header__profile__image-row__image', data.getUserPhoto());
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

async function getMessagePhoto(userId, blockId, parentId, photoClass) {
	showLoaderSmall(blockId, parentId, photoClass, ".chat-block__image-row__loader");
	const buffer = await getPhoto(userId);
	const worker = new MyWorker();
	worker.postMessage(buffer);

	worker.onmessage = function (result) {
		const person = document.getElementById(`${parentId}-${blockId}`);
		person.querySelector(photoClass).src = result.data;
		hideLoaderSmall(blockId, parentId, photoClass, ".chat-block__image-row__loader");
	};
}

async function getChannelInfoPhoto(userId, blockId, parentId, photoClass) {
	const buffer = await getPhoto(userId);
	const worker = new MyWorker();
	worker.postMessage(buffer);
	worker.onmessage = function (result) {
		const person = document.getElementById(`${parentId}-${blockId}`);

		person.querySelector(photoClass).src = result.data;
	};
}

async function getUserPhoto(id, parentId, photoClass) {
	showLoaderSmall(id, parentId, photoClass, ".chat-block__image-row__loader");
	const buffer = await getPhoto(id);
	const worker = new MyWorker();
	worker.postMessage(buffer);

	worker.onmessage = function (result) {
		const person = document.getElementById(`${parentId}-${id.toString()}`);
		person.querySelector(photoClass).src = result.data;
		hideLoaderSmall(id, parentId, photoClass, ".chat-block__image-row__loader");
	};
}

function hideLoader(selector) {
	document.querySelector(`${selector}__loader`).style.display = 'none';
	document.querySelector(`${selector}__image`).style.display = 'block';
}

function hideLoaderSmall(id, parentId, classSelector, loaderSelector) {
	const person = document.getElementById(parentId + '-' + id.toString());
	person.querySelector(loaderSelector).style.display = "none";
	person.querySelector(classSelector).style.display = "block";
}

function showLoader(selector) {
	document.querySelector(`${selector}__loader`).style.display = 'block';
	document.querySelector(`${selector}__image`).style.display = 'none';
}

function showLoaderSmall(id, parentId, classSelector, loaderSelector) {
	const person = document.getElementById(parentId + '-' + id.toString());
	person.querySelector(loaderSelector).style.display = "block";
	person.querySelector(classSelector).style.display = "none";
}

function setPicture(selector, photo) {
	const avatarElement = document.querySelector(selector);
	if (avatarElement) {
		avatarElement.src = photo;
	}
}

export {setPicture, showLoader, hideLoader, saveUserPhoto, getUserPhoto, getHeaderPhoto, getProfilePhoto, getMessagePhoto, getChannelInfoPhoto, getWrkspacePhoto};