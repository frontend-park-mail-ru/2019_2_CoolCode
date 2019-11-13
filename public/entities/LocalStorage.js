import {appLocalStorage, bus, data, FetchModule, promiseMaker} from "../main";

class LocalStorage {

	constructor() {
		if (LocalStorage.__instance) {
			return LocalStorage.__instance;
		}
		this._storage = localStorage;
		LocalStorage.__instance = this;
	}

	clear() {
		this._storage.clear();
	}

	setItem(key, value) {
		this._storage.setItem(key, JSON.stringify(value));
	}

	getItem(key) {
		return JSON.parse(this._storage.getItem(key));
	}

	setUser() {
		this.setItem('user', data.getUser());
	}

	getUser() {
		return this.getItem('user');
	}

	setChats() {
		this.setItem('chats', data.getUserChats());
	}

	getChats() {
		return this.getItem('chats');
	}

	selectMessages(messages) {
		let storedMessages = [];
		for (let i = 0, j = messages.length - 1; i < 10; i++, j--) {
			storedMessages[i] = messages[j];
		}
		return storedMessages.reverse();
	}

	setChatMessages(messages, chatId) {
		let chatsMessages = [];
		if (this.getItem('chatsMessages')) {
			chatsMessages = this.getItem('chatsMessages');
		}
		chatsMessages[chatId] = this.selectMessages(messages);
		this.setItem('chatsMessages', chatsMessages);
	}

	getChatMessages(chatId) {
		const chatsMessages = this.getItem('chatsMessages');
		if (chatsMessages && chatId < chatsMessages.length) {
			return chatsMessages[chatId];
		} else {
			return [];
		}
	}

}

export default LocalStorage;