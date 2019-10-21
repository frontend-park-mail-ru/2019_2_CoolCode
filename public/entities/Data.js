class Data {

	constructor(loggedIn, user , userChats = [], userWrkSpaces = []) {
		if (Data.__instance) {
			return Data.__instance;
		}
		this.user = user;
		this.loggedIn = loggedIn;
		this.userChats = userChats;
		this.userWrkSpaces = userWrkSpaces;
		this.lastSearchUsers = [];

		Data.__instance = this;
	}

	clear() {
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