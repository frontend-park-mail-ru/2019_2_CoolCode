class Data {

	constructor(loggedIn, user , userPhoto, userChats = [], userWrkSpaces = [], currentChatUser, currentChatUserPhoto, webSocketConns = [],
		socketConnection = false, currentChatMessages = []) {
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
		this.webSocketConns = webSocketConns;
		this.socketConnectionOn = socketConnection;
		this.currentChatMessages = currentChatMessages;

		Data.__instance = this;
	}

	clear() {
		this.currentChatUser = undefined;
		this.user = undefined;
		this.userChats = [];
		this.userWrkSpaces = [];
		this.loggedIn = undefined;

		this.user = undefined;
		this.userPhoto = undefined;
		this.currentChatUser = undefined;
		this.currentChatUserPhoto = undefined;
		this.loggedIn = undefined;
		this.userChats = [];
		this.userWrkSpaces = [];
		this.lastSearchUsers = [];
		this.webSocketConns = [];
		this.socketConnectionOn = false;
		this.currentChatMessages = [];
	}

	setCurentChatMessages(value) {
		this.currentChatMessages = value;
	}

	getCurrentChatMessages() {
		return this.currentChatMessages;
	}

	addWebSocketConn(chatId, conn) {
		this.webSocketConns[chatId] = { chatId: chatId, connection : conn};
	}

	 checkWebsocketConn(chatId) {
		let contains = false;
		this.webSocketConns.forEach((conn) => {
			if (conn.chatId === chatId) contains = true;
		});
		return contains;
	}

	removeWebSocketConn(userId) {
		this.webSocketConns[userId] = null;
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

	getCurrentChatUserId() {
		return this.currentChatUser.id;
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

	getUserId() {
		console.log('returning' + this.user);
		return this.user.id;
	}

	setSocketConnection(val) {
		this.socketConnectionOn = val;
	}

	getSocketConnection() {
		return this.socketConnectionOn;
	}

	addLastSearchUsers(value) {
		this.lastSearchUsers = value;
	}

	returnLastSearchUsers() {
		return this.lastSearchUsers;
	}

	getChatUsersWChatIDs() {
		const ids = [];
		this.userChats.forEach((chat) => {
			console.log(chat);
			if (chat["Members"][0] === this.user.id) {
				ids.push({userId: chat["Members"][1],
					chatId : chat.ID});
			} else {
				ids.push({userId: chat["Members"][0],
					chatId : chat.ID});
			};
		});
		return ids;
	}

	getChatIdByChatUserId(userId) {
		let chatId = null;
		this.userChats.forEach((chat) => {
			let otherId;
			if (chat["Members"][0] === this.user.id) {
				otherId = chat["Members"][1];
			} else {
				otherId = chat["Members"][0];
			}
			if (otherId === userId) {
				chatId = chat.ID;
			}
		});
		return chatId;
	}

	getChatUsers() {
		const ids = [];
		this.userChats.forEach((chat) => {
			console.log(chat);
			if (chat["Members"][0] === this.user.id) {
				ids.push(chat["Members"][1]);
			} else {
				ids.push(chat["Members"][0]);
			};
		});
		return ids;
	}
}

export default Data;