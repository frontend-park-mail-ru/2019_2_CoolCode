const responseStatuses = {
	200 : "OK" ,
	304 : "Not Modified",
	400 : "Bad Request",
	401 : "Unauthorized",
	403 : "Forbidden",
	404 : "Not Found",
	500 : "Internal Server Error",
};

const settings = {
	connection : 'http',
	frontendPort : ':3000',
	backendPort : ':8080',
	frontend: 'https://boiling-chamber-90136.herokuapp.com',
	//backend: '172.20.10.9:8080',
	backend: '95.163.209.195',
	//backend: '192.168.1.69:8080',
	//backend: 'localhost:8080'
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
	createChat: '/chats',
	createChannel : (id) => {
		return `/workspaces/${id}/channels`;
	},
	createWrkSpace: '/workspaces',
	findUser : (query) => {
		return `/users/${query}`;
	},
	findMessages : (query) => {
		return `/messages/${query}`;
	},
	currentChatMessages : (chatId) => {
		return `/chats/${chatId}/messages`;
	},
	currentChannelMessages : (chanId) => {
		return `/channels/${chanId}/messages`;
	},
	getUserChats : (id) => {
		return `/users/${id}/chats`;
	},
	userInfo: (id) => {
		return `/users/${id}`;
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
	logout: '/logout',
	login: '/login',
	auth: '/users',
	getPhoto : (id) => {
		return `/photos/${id}`;
	},
	postPhoto : '/photos',

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

export {settings, responseStatuses, keys, API, ROUTER, KEYWORDS};
