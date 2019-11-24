class Data {

	constructor(loggedIn, user = {} , userPhoto, userChats = [], userWrkSpaces = [],
		currentChatId, currentChat = {}, currentChatUser = {}, currentChatUserPhoto, currentChatMessages = [],
		currentWrkspace = {}, currentWrkspaceCreator = {},
		lastSearchUsers = [], currentChannelID = {},
		webSocketConns = [], socketConnection = false,
		chosenMessageId, chosenMessageText) {
		if (Data.__instance) {
			return Data.__instance;
		}
		this.currentChannelID = currentChannelID;
		this.user = user;
		this.loggedIn = loggedIn;
		this.userChats = userChats;
		this.userWrkSpaces = userWrkSpaces;
		this.userPhoto = userPhoto;

		this.currentChatId = currentChatId;
		this.currentChat = currentChat;
		this.currentChatUser = currentChatUser;
		this.currentChatUserPhoto = currentChatUserPhoto;
		this.currentChatMessages = currentChatMessages;

		this.currentWrkspace = currentWrkspace;
		this.currentWrkspaceCreator = currentWrkspaceCreator;

		this.lastSearchUsers = lastSearchUsers;

		this.webSocketConns = webSocketConns;
		this.socketConnectionOn = socketConnection;

		this.chosenMessageId = chosenMessageId;
		this.chosenMessageText = chosenMessageText;

		Data.__instance = this;
	}

	clear() {

		this.user = undefined;
		this.userChats = [];
		this.userWrkSpaces = [];
		this.loggedIn = undefined;
		this.userPhoto = undefined;

		this.currentChatId = undefined;
		this.currentChat = undefined;
		this.currentChatUser = undefined;
		this.currentChatUserPhoto = undefined;
		this.currentChatMessages = [];

		this.currentWrkspace = undefined;
		this.currentWrkspaceCreator = undefined;

		this.lastSearchUsers = [];
		this.webSocketConns = [];
		this.socketConnectionOn = false;

		this.chosenMessageId = undefined;
		this.chosenMessageText = undefined;
	}

	createLogMessage(method, dataname, data) { //TODO: log module!
		if (method === 'get') {
			console.log(`returning ${dataname} : ${data} from Data storage`);
		}
		if (method === 'set') {
			console.log(`placing ${dataname} : ${data} in Data storage`);
		}
	}

	getUser() {
		this.createLogMessage('get', 'user', this.user);
		return this.user;
	}

	getUserId() {
		this.createLogMessage('get', 'userId', this.user.id);
		return this.user.id;
	}

	setUser(user) {
		this.user = user;
		this.loggedIn = true;
		this.createLogMessage('set', 'user', user);
	}

	getLoggedIn() {
		this.createLogMessage('get', 'loggedIn', this.loggedIn);
		return this.loggedIn;
	}

	setLoggedIn(loggedIn) {
		this.loggedIn = loggedIn;
		this.createLogMessage('set', 'loggedIn', loggedIn);
	}

	getUserPhoto() {
		this.createLogMessage('get', 'userPhoto', 'some file');
		return this.userPhoto;
	}

	setUserPhoto(userPhoto) {
		this.userPhoto = userPhoto;
		this.createLogMessage('set', 'userPhoto','some file');
	}

	getUserChats() {
		this.createLogMessage('get', 'userChats', 'some chats');
		return this.userChats;
	}

	setUserChats(userChats) {
		if (userChats) this.userChats = userChats;
		this.createLogMessage('set', 'userChats', userChats);
	}

	getUserWrkSpaces() {
		this.createLogMessage('get', 'userWrkSpaces', 'some wrkspaces');
		return this.userWrkSpaces;
	}

	setUserWrkSpaces(userWrkSpaces) {
		if (userWrkSpaces) this.userWrkSpaces = userWrkSpaces;
		this.createLogMessage('set', 'userWrkSpaces', userWrkSpaces);

	}

	setCurrentChatId(currentChatId) {
		this.currentChatId = currentChatId;
		this.createLogMessage('set', 'currentChatId', currentChatId);
		this.setCurrentChat(currentChatId);
	}

	getCurrentChatId() {
		this.createLogMessage('get', 'currentChatId', this.currentChatId);
		return this.currentChatId;
	}

	setCurrentChat(currentChatId) {
		for (let chat of this.userChats) {
			if (chat.ID == currentChatId) {
				this.currentChat = chat;
				break;
			}
		}
		this.createLogMessage('set', 'currentChat', this.currentChat);
	}

	getCurrentChat() {
		this.createLogMessage('get', 'currentChat', this.currentChat);
		return this.currentChat;
	}

	setCurrentChatUser(currentChatUser) {
		this.currentChatUser = currentChatUser;
		this.createLogMessage('set', 'currentChatUser', currentChatUser);
	}

	getCurrentChatUser() {
		this.createLogMessage('get', 'currentChatUser', this.currentChatUser);
		return this.currentChatUser;
	}

	getCurrentChatUserId() {
		this.createLogMessage('get', 'currentChatUserId', this.currentChatUser.id);
		return this.currentChatUser.id;
	}

	setCurrentChatUserPhoto(currentChatUserPhoto) {
		this.currentChatUserPhoto = currentChatUserPhoto;
		this.createLogMessage('set', 'currentChatUserPhoto', 'some file');
	}

	getCurrentChatUserPhoto() {
		this.createLogMessage('get', 'currentChatUserPhoto', 'some file');
		return this.currentChatUserPhoto;
	}

	setCurrentChatMessages(currentChatMessages) {
		this.currentChatMessages = currentChatMessages;
		this.createLogMessage('set', 'currentChatMessages', currentChatMessages);
	}

	getCurrentChatMessages() {
		this.createLogMessage('get', 'currentChatMessages', this.currentChatMessages);
		return this.currentChatMessages;
	}

	addWebSocketConn(chatId, conn) {
		this.webSocketConns.push({ chatId: chatId,
			connection : conn});
	}

	 checkWebsocketConn(chatId) {
		for (let conn of this.webSocketConns) {
			if (conn.chatId == chatId) {
				return true;
			}
		};
		return false;
	}

	setSocketConnection(socketConn) {
		this.socketConnectionOn = socketConn;
		this.createLogMessage('set', 'socketConnectionOn', socketConn);
	}

	getSocketConnection() {
		this.createLogMessage('get', 'socketConnectionOn', this.socketConnectionOn);
		return this.socketConnectionOn;
	}

	setLastSearchUsers(lastSearchUsers) {
		this.lastSearchUsers = lastSearchUsers;
		this.createLogMessage('set', 'lastSearchUsers', lastSearchUsers);
	}

	getLastSearchUsers() {
		this.createLogMessage('get', 'lastSearchUsers', this.lastSearchUsers);
		return this.lastSearchUsers;
	}

	deleteLastSearchUsers() {
		this.lastSearchUsers = undefined;
		this.createLogMessage('set', 'lastSearchUsers', this.lastSearchUsers);
	}

	setLastSearchMessages (lastSearchMessages) {
		this.lastSearchMessages = lastSearchMessages;
		this.createLogMessage('set', 'lastSearchMessages', lastSearchMessages);
	}

	getLastSearchMessages() {
		this.createLogMessage('get', 'lastSearchMessages', this.lastSearchMessages);
		return this.lastSearchMessages;
	}

	deleteLastSearchMessages() {
		this.lastSearchMessages = undefined;
		this.createLogMessage('set', 'lastSearchMessages', this.lastSearchMessages);
	}

	setCurrentWrkspace(currentWrkspace) {
		this.currentWrkspace = currentWrkspace;
		this.createLogMessage('set', 'currentWrkspace', currentWrkspace);
	}

	getCurrentWrkspace() {
		this.createLogMessage('get', 'currentWrkspace', this.currentWrkspace);
		return this.currentWrkspace;
	}

	getCurrentWrkspaceId() {
		this.createLogMessage('get', 'currentWrkspaceId', this.currentWrkspace.ID);
		return this.currentWrkspace.ID;
	}

	setCurrentWrkspaceCreator(currentWrkspaceCreator) {
		this.currentWrkspaceCreator = currentWrkspaceCreator;
		this.createLogMessage('set', 'currentWrkspaceCreator', currentWrkspaceCreator);
	}

	getCurrentWrkspaceCreator() {
		this.createLogMessage('get', 'currentWrkspaceCreator', this.currentWrkspaceCreator);
		return this.currentWrkspaceCreator;
	}

	addCurrentWrkspaceMember(id) {
		if (!this.currentWrkspace.Members.includes(id)) {
			this.currentWrkspace.Members.push(id);
		}
	}

	setCurrentChannel(currentChannel) {
		this.currentChannel = currentChannel;
		this.createLogMessage('set', 'currentChannel', currentChannel);
	}

	getCurrentChannel() {
		this.createLogMessage('get', 'currentChannel', this.currentChannel);
		return this.currentChannel;
	}

	setCurrentChannelID(currentChannelID) {
		this.currentChannelID = currentChannelID;
		this.createLogMessage('set', 'currentChannelID', currentChannelID);
	}

	getCurrentChannelID() {
		this.createLogMessage('get', 'currentChannelID', this.currentChannelID);
		return this.currentChannelID;
	}
	getChatIdByChatUserId(userId) {
		let chatId = null;
		for (let chat of this.userChats) {
			let otherId;
			if (chat["Members"][0] == this.user.id) {
				otherId = chat["Members"][1];
			} else {
				otherId = chat["Members"][0];
			}
			if (otherId == userId) {
				chatId = chat.ID;
				break;
			}
		}
		this.createLogMessage('get', 'chatId by UserId', chatId);
		return chatId;
	}

	getChatUserIdByChatId(chatId) {
		let userId = null;
		for (let chat of this.userChats) {
			if (chatId == chat.ID) {
				if (chat["Members"][0] == this.user.id) {
					userId = chat["Members"][1];
				} else {
					userId = chat["Members"][0];
				}
				break;
			}
		}
		this.createLogMessage('get', 'userId by chatId', userId);
		return userId;
	}

	getChatUsersIds() {
		const ids = [];
		this.userChats.forEach((chat) => {
			if (chat["Members"][0] == this.user.id) {
				ids.push(chat["Members"][1]);
			} else {
				ids.push(chat["Members"][0]);
			};
		});
		return ids;
	}

	getChatUsersWChatIDs() {
		const ids = [];
		this.userChats.forEach((chat) => {
			if (chat["Members"][0] == this.user.id) {
				ids.push({userId: chat["Members"][1],
					chatId : chat.ID});
			} else {
				ids.push({userId: chat["Members"][0],
					chatId : chat.ID});
			};
		});
		return ids;
	}

	setChosenMessageId(chosenMessageId) {
		this.chosenMessageId = chosenMessageId;
		this.createLogMessage('set', 'chosenMessageId', chosenMessageId);
	}

	getChosenMessageId() {
		this.createLogMessage('get', 'chosenMessageId', this.chosenMessageId);
		return this.chosenMessageId;
	}

	deleteChosenMessageId() {
		this.chosenMessageId = undefined;
		this.createLogMessage('set', 'chosenMessageId', undefined);

	}

	setChosenMessageText(chosenMessageText) {
		this.chosenMessageText = chosenMessageText;
		this.createLogMessage('set', 'chosenMessageText', chosenMessageText);
	}

	getChosenMessageText() {
		this.createLogMessage('get', 'chosenMessageText', this.chosenMessageText);
		return this.chosenMessageText;
	}

	deleteChosenMessageText() {
		this.chosenMessageText = undefined;
		this.createLogMessage('set', 'chosenMessageText', undefined);

	}
}

export default Data;