import chatView from "../views/chatView";

const responseStatuses = {
	200 : "OK",
	304 : "Not Modified",
	400 : "Bad Request",
	401 : "Unauthorized",
	403 : "Forbidden",
	404 : "Not Found",
	500 : "Internal Server Error",
};

const ports = {
	'users' : ':8001',
	'chats' : ':8002',
	'workspaces' : ':8002',
	'channels' : ':8002',
	'notifications' : ':8003',
	'messages' : ':8004',
};

const microservices = {
	'users' : 'users',
	'chats' : 'chats',
	'workspaces' : 'chats',
	'channels' : 'chats',
	'notifications' : 'notifications',
	'messages' : 'messages',
};

const settings = {
	connection : 'https',
	frontendPort : ':8000',
	frontend: 'https://coolcode.site',
	backend: 'coolcode.site',
	backendSuffix: '/api/',
};

const keys = {
	"ENTER": 13,
};

const API = {
	likingMessage: (id) => {
		return `/messages/${id}/likes`;
	},
	messageInteraction : (id) => {
		return `/messages/${id}`;
	},
	messageFile : (id) => {
		return `/messages/chats/${id}/files`;
	},
	messageFileChannel : (id) => {
		return `/messages/channels/${id}/files`;
	},
	messageFileRequest : (id, fileId) => {
		return `/messages/chats/${id}/files/${fileId}`;
	},
	messageFileRequestChannel : (id, fileId) => {
		return `/messages/channels/${id}/files/${fileId}`;
	},
	createChat: '/chats',
	createChannel : (id) => {
		return `/workspaces/${id}/channels`;
	},
	createWrkSpace: '/workspaces',
	findUser : (query) => {
		return `/users/names/${query}`;
	},
	findMessages : (query) => {
		return `/messages/${query}`;

	},
	currentChatMessages : (chatId) => {
		return `/messages/chats/${chatId}`;
	},
	currentChannelMessages : (chanId) => {
		return `/messages/channels/${chanId}`;
	},
	getUserChats : (id) => {
		return `/chats/users/${id}`;
	},
	userInfo: (id) => {
		return `/users/${id}`;
	},
	addStickers: (userId, stickerpackId) =>{
		return `/users/${userId}/stickers/${stickerpackId}`;
	},
	channelInfo: (id) => {
		return `/channels/${id}`;
	},
	channelLeave:(id) => {
		return `/channels/${id}/members`;
	},
	wrkspaceInfo: (id) => {
		return `/workspaces/${id}`;
	},
	logout: '/users/logout',
	login: '/users/login',
	auth: '/users',
	getPhoto : (id) => {
		return `/users/photos/${id}`;
	},
	postPhoto : '/users/photos',
	photoWrkspace : (id) => {
		return `/workspaces/${id}/photos`;
	},
};

const KEYWORDS = {
	mainPage : [],
	profile : ['profile'],
	login :  ['login'],
	logout : ['logout'],
	signup : ['signup'],
	search :  ['search'],
	chat : ['chat'],
	chatFoundMessage : ['chat', 'message'],
	channelFoundMessage : ['wrkspace', 'channel', 'message'],
	createWrkSpace: ['createWrkSpace'],
	createChannel : ['createChannel'],
	wrkspacePage : ['wrkspace'],
	addMember : ['addMember'],
	wrkspaceSearch: ['wrkspace', 'search'],
	channelPage: ['wrkspace', 'channel'],
	photoPreviewChat: ['chat', 'photo'],
	photoPreviewChannel: ['wrkspace', 'channel', 'photo'],
	photoCreateChat: ['chat', 'makePhoto'],
	photoCreateChannel: ['wrkspace', 'channel', 'makePhoto'],
	buyStikerpackChat: ['chat', 'buystikerpack'],
	buyStikerpackChannel: ['wrkspace', 'channel', 'buystikerpack'],
};

const ROUTER = {
	mainPage : '/',
	profile : '/profile',
 	login :  '/login',
 	logout : '/logout',
 	signup : '/signup',
	search :  (query) => {
		if (query) {
			return `/search?=${query}`;
		} else {
			return '/search';
		}
	},
	chat : (id) => {
		return `/chat/${id}`;
	},
	chatFoundMessage : (id, messageId) => {
		return `/chat/${id}/message?=${messageId}`;
	},
	channelFoundMessage : (wrkspaceId, channelId, messageId) => {
		return `/wrkspace/${wrkspaceId}/channel/${channelId}/message?=${messageId}`;
	},
	channelPage: (wrkspaceId, channelId) => {
		return `/wrkspace/${wrkspaceId}/channel/${channelId}`;
	},
	photoPreviewChat: (chatId, messageId) => {
		return `/chat/${chatId}/photo/${messageId}`;
	},
	photoPreviewChannel: (wrkspaceId, channelId, messageId) => {
		return `/wrkspace/${wrkspaceId}/channel/${channelId}/photo/${messageId}`;
	},
	photoCreateChat: (chatId) => {
		return `/chat/${chatId}/makePhoto`;
	},
	photoCreateChannel: (wrkspaceId, channelId) => {
		return `/wrkspace/${wrkspaceId}/channel/${channelId}/makePhoto`;
	},
	buyStikerpackChat: (chatId) => {
		return `/chat/${chatId}/buystikerpack`;
	},
	buyStikerpackChannel: (wrkspaceId, channelId) => {
		return `/wrkspace/${wrkspaceId}/channel/${channelId}/buystikerpack`;
	},
	addMember: '/addMember',
	createWrkSpace: '/createWrkSpace',
	createChannel : (id) => {
		return `/createChannel/${id}`;
	},
	wrkspacePage : (id) => {
		return `/wrkspace/${id}`;
	},
	wrkspaceSearch: (id, query) => {
		if (query) {
			return `/wrkspace/${id}/search?=${query}`;
		} else {
			return `/wrkspace/${id}/search`;
		}
	},
};

export {settings, responseStatuses, keys, API, ROUTER, KEYWORDS, ports, microservices};
