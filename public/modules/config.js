const settings = {
	backend: 'http://localhost:8080',
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

export {settings, responseStatuses};
