class Data {

	constructor(loggedIn, user , userChats = [], userWrkSpaces ) {
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

	loggedInUser(value) {
		this.loggedIn = value;
	}

	addUser(value) {
	    this.user = value;
	    console.log(value);
	    this.loggedIn = true;
	}

	addChat(value) {
	    this.userChats.push(value);
	}

	addChats(value) {
		console.log("CHATS");
		console.log(value);
		this.userChats.push(...value);
		console.log(this.userChats);
	}

	addWrkSpace(value) {
		this.userWrkSpaces.push(value);
	}

	setChats(value) {
		if (value !== null) this.userChats = value;
	}

	setWrkSpaces(value) {
	    this.userWrkSpaces = value;
	}

	getUser() {
		console.log(this.user);
		return this.user;
	}

	addLastSearchUsers(value) {
		this.lastSearchUsers = value;
		console.log('search' + value);
	}

	returnLastSearchUsers() {
		return this.lastSearchUsers;
	}

	getChatUsers() {
		const ids = [];
		console.log(this.userChats);
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