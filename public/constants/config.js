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
	frontend: 'localhost',
	//backend: '172.20.10.9:8080',
	backend: '95.163.209.195',
	//backend: '192.168.1.69:8080',
	//backend: 'localhost:8080'
};

const keys = {
	"ENTER": 13,
};

const API = {
	createChat: 'api/chats',
	createChannel : (id) => {
		return `api/workspaces/${id}/channels`;
	},
	createWrkSpace: 'api/workspaces',
	findUser : (query) => {
		return `api/users/${query}`;
	},
	currentChatMessages : (chatId) => {
		return `api/chats/${chatId}/messages`;
	},
	getUserChats : (id) => {
		return `api/users/${id}/chats`;
	},
	userInfo: (id) => {
		return `api/users/${id}`;
	},
	logout: 'api/logout',
	login: 'api/login',
	auth: 'api/users',
	getPhoto : (id) => {
		return `api/photos/${id}`;
	},
	postPhoto : 'api/photos',

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
