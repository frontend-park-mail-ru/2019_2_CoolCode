import {bus, data} from "../main";

class Data {

	constructor(loggedIn, user = {} , userPhoto, userChats = [], userWrkSpaces = [],
		currentChatId, currentChat = {}, currentChatUser = {}, currentChatUserPhoto, currentChatMessages = [], channelMessagesFull = [],
		currentWrkspace = {}, currentWrkspaceCreator = {}, currentWrkspaceUsers = [],
		lastSearchUsers = [], lastSearchMessages = [], lastSearchMessagesFull = [], currentChannelID = {},
		webSocketConns = [], socketConnection = false,
		chosenMessageId, chosenMessageText,userStickers = [], stickers = [],
		inputType, chosenFiles, chunks, stream) {
		if (Data.__instance) {
			return Data.__instance;
		}
		this.currentChannelID = currentChannelID;
		this.user = user;
		this.stickers = stickers;
		this.userStickers = userStickers;
		this.loggedIn = loggedIn;
		this.userChats = userChats;
		this.userWrkSpaces = userWrkSpaces;
		this.userPhoto = userPhoto;

		this.currentChatId = currentChatId;
		this.currentChat = currentChat;
		this.currentChatUser = currentChatUser;
		this.currentChatUserPhoto = currentChatUserPhoto;
		this.currentChatMessages = currentChatMessages;
		this.channelMessagesFull = channelMessagesFull;

		this.currentWrkspace = currentWrkspace;
		this.currentWrkspaceCreator = currentWrkspaceCreator;
		this.currentWrkspaceUsers = currentWrkspaceUsers;

		this.lastSearchUsers = lastSearchUsers;
		this.lastSearchMessages = lastSearchMessages;
		this.lastSearchMessagesFull = lastSearchMessagesFull;

		this.webSocketConns = webSocketConns;
		this.socketConnectionOn = socketConnection;

		this.chosenMessageId = chosenMessageId;
		this.chosenMessageText = chosenMessageText;

		this.inputType = inputType;
		this.chosenFiles = chosenFiles;
		this.chunks = chunks;

		this.stream = stream;

		Data.__instance = this;
	}

	clear() {

		this.user = undefined;
		this.userChats = [];
		this.userStickers = [];
		this.userWrkSpaces = [];
		this.loggedIn = undefined;
		this.userPhoto = undefined;

		this.currentChatId = undefined;
		this.currentChat = undefined;
		this.currentChatUser = undefined;
		this.currentChatUserPhoto = undefined;
		this.currentChatMessages = [];
		this.channelMessagesFull = [];

		this.currentWrkspace = undefined;
		this.currentWrkspaceCreator = undefined;
		this.currentWrkspaceUsers = [];

		this.lastSearchUsers = [];
		this.lastSearchMessages = [];
		this.lastSearchMessagesFull = [];

		this.webSocketConns = [];
		this.socketConnectionOn = false;

		this.chosenMessageId = undefined;
		this.chosenMessageText = undefined;

		this.inputType = undefined;
		this.chosenFiles = undefined;
		this.chunks = undefined;
		this.stream = undefined;

	}

	createLogMessage(method, dataname, data) { //TODO: log module!
		if (method === 'get') {
			console.log(`returning ${dataname} : ${data} from Data storage`);
		}
		if (method === 'set') {
			console.log(`placing ${dataname} : ${data} in Data storage`);
		}
	}

	getUserStickers() {
		this.userStickers = this.user.stickerpacks;
		return this.userStickers;
	}

	setUserStickers(userStickers) {
		this.userStickers = userStickers;
	}

	getStickers() {
		return this.stickers;
	}

	setStickers(stickers) {
		this.stickers = stickers;
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
		this.currentChannel = undefined;
		this.currentChatId = currentChatId;
		this.createLogMessage('set', 'currentChatId', currentChatId);
		this.setCurrentChat(currentChatId);
	}

	getCurrentChatId() {
		if (this.currentChat) {
			this.createLogMessage('get', 'currentChatId', this.currentChatId);
			return this.currentChatId;
		}
	}

	setCurrentChat(currentChatId) {
		this.currentChannel = undefined;
		for (let chat of this.userChats) {
			if (chat.id == currentChatId) {
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

	deleteCurrentChat() {
		this.currentChat = undefined;
		this.createLogMessage('set', 'currentChat', this.currentChat);
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

	getChannelMessagesFull() {
		this.createLogMessage('get', 'channelMessagesFull', this.channelMessagesFull);
		return this.channelMessagesFull;
	}

	deleteChannelMessagesFull() {
		this.channelMessagesFull = [];
		this.createLogMessage('set', 'channelMessagesFull', this.channelMessagesFull);
	}

	addChannelMessageFull(channelMessageFull) {
		this.channelMessagesFull.push(channelMessageFull);
		this.createLogMessage('set', 'channelMessagesFull', this.channelMessagesFull);
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
		this.createLogMessage('set', 'lastSearchUsers', 'lastSearchUsers');
	}

	getLastSearchUsers() {
		this.createLogMessage('get', 'lastSearchUsers', 'lastSearchUsers');
		return this.lastSearchUsers;
	}

	deleteLastSearchUsers() {
		this.lastSearchUsers = undefined;
		this.createLogMessage('set', 'lastSearchUsers','lastSearchUsers');
	}

	setLastSearchMessages (lastSearchMessages) {
		this.lastSearchMessages = lastSearchMessages;
		this.createLogMessage('set', 'lastSearchMessages', lastSearchMessages);
	}

	getLastSearchMessages() {
		this.createLogMessage('get', 'lastSearchMessages', 'lastSearchMessages');
		return this.lastSearchMessages;
	}

	deleteLastSearchMessages() {
		this.lastSearchMessages = [];
		this.createLogMessage('set', 'lastSearchMessages', 'lastSearchMessages');
	}

	getLastSearchMessagesFull() {
		this.createLogMessage('get', 'lastSearchMessagesFull', 'lastSearchMessagesFull');
		return this.lastSearchMessagesFull;
	}

	deleteLastSearchMessagesFull() {
		this.lastSearchMessagesFull = [];
		this.createLogMessage('set', 'lastSearchMessagesFull', 'lastSearchMessagesFull');
	}

	addLastSearchMessageFull(lastSearchMessageFull) {
		this.lastSearchMessagesFull.push(lastSearchMessageFull);
		this.createLogMessage('set', 'lastSearchMessagesFull', 'lastSearchMessagesFull');
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
		this.createLogMessage('get', 'currentWrkspaceId', this.currentWrkspace.id);
		return this.currentWrkspace.id;
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
		if (!this.currentWrkspace.members.includes(id)) {
			this.currentWrkspace.members.push(id);
		}
	}
	getCurrentWrkspaceMembers() {
		this.createLogMessage('get', 'currentWrkspaceMembers', 'currentWrkspaceMembers');
		return this.currentWrkspace.members;

	}

	deleteCurrentWrkspaceUsers() {
		this.currentWrkspaceUsers = [];
		this.createLogMessage('set', 'currentWrkspaceUsers', this.currentWrkspaceUsers);
	}

	addCurrentWrkspaceUser(user) {
		this.currentWrkspaceUsers.push(user);
		this.createLogMessage('set', 'currentWrkspaceUsers', 'currentWrkspaceUsers');
	}
	getCurrentWrkspaceUsers() {
		this.createLogMessage('get', 'currentWrkspaceUsers', 'currentWrkspaceUsers');
		return this.currentWrkspaceUsers;

	}

	setCurrentChannel(currentChannel) {
		this.currentChat = undefined;
		this.currentChannel = currentChannel;
		this.createLogMessage('set', 'currentChannel', currentChannel);
	}

	deleteCurrentChannel() {
		this.currentChannel = undefined;
		this.createLogMessage('set', 'currentChannel', this.currentChannel);
	}
	getCurrentChannel() {
		this.createLogMessage('get', 'currentChannel', this.currentChannel);
		return this.currentChannel;
	}
	getCurrentChannelId() {
		if (this.currentChannel) {
			this.createLogMessage('get', 'currentChannelId', this.currentChannel.id);
			return this.currentChannel.id;
		}
	}

	addCurrentChannelMember(id) {
		if (!this.currentChannel.members.includes(id)) {
			this.currentChannel.members.push(id);
		}
	}

	checkIfChat(chatId) {
		for (let chat of this.userChats) {
			if (chatId == chat.id) {
				return true;
			}
		}
		return false;

	}

	getLastSearchFullMessageByMessageId(id) {
		for (let fullMessage of this.lastSearchMessagesFull) {
			if (fullMessage.message.id == id) {
				return fullMessage;
			}
		}
		return undefined;
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
			if (chat["members"][0] == this.user.id) {
				otherId = chat["members"][1];
			} else {
				otherId = chat["members"][0];
			}
			if (otherId == userId) {
				chatId = chat.id;
				break;
			}
		}
		this.createLogMessage('get', 'chatId by UserId', chatId);
		return chatId;
	}

	getChatUserIdByChatId(chatId) {
		let userId = null;
		for (let chat of this.userChats) {
			if (chatId == chat.id) {
				if (chat["members"][0] == this.user.id) {
					userId = chat["members"][1];
				} else {
					userId = chat["members"][0];
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
			if (chat["members"][0] == this.user.id) {
				ids.push(chat["members"][1]);
			} else {
				ids.push(chat["members"][0]);
			};
		});
		return ids;
	}

	getChatUsersWChatIDs() {
		const ids = [];
		this.userChats.forEach((chat) => {
			if (chat["members"][0] == this.user.id) {
				ids.push({userId: chat["members"][1],
					chatId : chat.id});
			} else {
				ids.push({userId: chat["members"][0],
					chatId : chat.id});
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

	setInputType(inputType) {
		if(inputType != 3) {
			this.inputType = inputType;
			this.createLogMessage('set', 'inputType', inputType);
		}
	}

	getInputType() {
		this.createLogMessage('get', 'inputType', this.inputType);
		return this.inputType;
	}

	setChosenFile(file) {
		if (this.chosenFiles) {
			this.chosenFiles.push(file);
		} else {
			var files = [];
			files.push(file);
			this.chosenFiles = files;
		}
		this.createLogMessage('set', 'chosenFiles', this.chosenFiles);
	}

	getChosenFiles() {
		this.createLogMessage('get', 'chosenFiles', this.chosenFiles);
		return this.chosenFiles;
	}

	deleteChosenFiles() {
		this.chosenFiles = undefined;
		this.createLogMessage('set', 'chosenFiles', this.chosenFiles);
	}

	deleteChosenFile(id) {
		var newFiles = [];
		let i = 0;
		for ( ; i < this.chosenFiles.length; i++) {
			if (this.chosenFiles[i].id == id) {
				break;
			} else {
				newFiles[i] = this.chosenFiles[i];
			}
		}
		for (let j = i; j < this.chosenFiles.length - 1 ; j++) {
			newFiles[j] = this.chosenFiles[j + 1];
		}
		this.chosenFiles = newFiles;

	}

	getChosenFilesLength() {
		if (this.chosenFiles) {
			return this.chosenFiles.length;
		} else {
			return 0;
		}

	}

	setChunks(chunks) {
		this.chunks = chunks;
		this.createLogMessage('set', 'chunks', this.chunks);
	}

	getChunks() {
		this.createLogMessage('get', 'chunks', this.chunks);
		return this.chunks;
	}

	deleteChunks() {
		this.chunks = undefined;
		this.createLogMessage('set', 'chunks', this.chunks);
	}

	setCurrentPhotoSrc(src) {
		this.currentPhotoSrc = src;
		this.createLogMessage('set', 'currentPhotoSrc', 'photoSrc');
	}

	deleteCurrentPhotoSrc() {
		this.currentPhotoSrc = undefined;
		this.createLogMessage('set', 'currentPhotoSrc', this.currentPhotoSrc);
	}

	getCurrentPhotoSrc() {
		this.createLogMessage('get', 'currentPhotoSrc', 'photoSrc');
		return this.currentPhotoSrc;
	}

	setStream(stream) {
		this.stream = stream;
	}

	getStream() {
		return this.stream;
	}

	deleteStream() {
		this.stream = undefined;
	}

}

export default Data;