
const settings = {
	//backend: '172.20.10.9:8080',
	backend: '95.163.209.195:8080',
	//backend: '192.168.1.69:8080',
	//backend: 'localhost:8080'
};
const responseStatuses = {
	200 : "OK" ,
	304 : "Not Modified",
	400 : "Bad Request",
	401 : "Unauthorized",
	403 : "Forbidden",
	404 : "Not Found",
	500 : "Internal Server Error",
};

const keys = {
	"ENTER": 13,
};

export {settings, responseStatuses, keys};
