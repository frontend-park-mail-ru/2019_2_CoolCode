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
	createChat: '/chats',
	createChannel : (id) => {
		return `/workspaces/${id}/channels`;
	},
	createWrkSpace: '/workspaces',
	findUser : (query) => {
		return `/users/${query}`;
	},
	currentChatMessages : (chatId) => {
		return `/chats/${chatId}/messages`;
	},
	getUserChats : (id) => {
		return `/users/${id}/chats`;
	},
	userInfo: (id) => {
		return `/users/${id}`;
	},
	logout: '/logout',
	login: '/login',
	auth: '/users',
	getPhoto : (id) => {
		return `/photos/${id}`;
	},
	postPhoto : '/photos',

};

const ROUTER = {
	mainPage : '/',
	profile : '/profile',
 	login :  '/login',
 	logout : '/logout',
 	signup : '/signup',
	search : '/search',
 	chat : '/chat',
 	createWrkSpace: '/createWrkSpace',
	createChannel : '/createChannel',
};

export {settings, responseStatuses, keys, API, ROUTER};
