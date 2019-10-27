class Data {

	constructor(loggedIn, user , userPhoto, userChats = [], userWrkSpaces = [], currentChatUser, currentChatUserPhoto) {
		if (Data.__instance) {
			return Data.__instance;
		}
		this.user = user;
		this.userPhoto = userPhoto;
		this.currentChatUser = currentChatUser;
		this.currentChatUserPhoto = currentChatUserPhoto;
		this.loggedIn = loggedIn;
		this.userChats = userChats;
		this.userWrkSpaces = userWrkSpaces;
		this.lastSearchUsers = [];

		Data.__instance = this;
	}

	clear() {
		this.currentChatUser = undefined;
		this.user = undefined;
		this.userChats = [];
		this.userWrkSpaces = [];
		this.loggedIn = undefined;
	}

	loggedInUser(value) {
		this.loggedIn = value;
	}

	addUser(value) {
	    this.user = value;
	    console.log(value);
	    this.loggedIn = true;
	}

	setCurrentChatUser(value) {
		this.currentChatUser = value;
		console.log('chatUser ' + value);
	}

	getCurrentChatUser() {
		return this.currentChatUser;
	}

	setCurrentChatUserPhoto(value) {
		this.currentChatUserPhoto = value;
	}

	getCurrentChatUserPhoto() {
		return this.currentChatUserPhoto;
	}

	setUserPhoto(value) {
		this.userPhoto = value;
	}

	getUserPhoto() {
		return this.userPhoto;
	}

	setChats(value) {
		if (value !== null) this.userChats = value;
	}

	setWrkSpaces(value) {
		if (value !== null) this.userWrkSpaces = value;
	}

	getUser() {
		console.log('returning' + this.user);
		return this.user;
	}

	addLastSearchUsers(value) {
		this.lastSearchUsers = value;
	}

	returnLastSearchUsers() {
		return this.lastSearchUsers;
	}

	getChatUsers() {
		const ids = [];
		this.userChats.forEach((chat) => {
			console.log(chat);
			if (chat["Members"][0] == this.user.id) {
				ids.push(chat["Members"][1]);
			} else {
				ids.push(chat["Members"][0]);
			};
		});
		return ids;
	}
}

export default Data;