import {settings, responseStatuses, ROUTER, KEYWORDS} from './../constants/config';
const {backendUsersPort} = settings;
const {backendChatsPort} = settings;
const {backendNotificationsPort} = settings;
const {backendMessagesPort} = settings;

class Fetch {

	constructor() {
		this._init = null;
		this._url = '/';
	}
	setUrl(url = '/') {
	    this._url = url;
	}
	getUrl() {
	    return this._url;
	}
	setInit(method = null,
		data = null,
		contentType = null) {
		 if (data !== null && contentType !== 'multipart/form-data')
		 	data = JSON.stringify(data);
		this._init = {
			headers: {},
			method: method,
			body: data,
			credentials: 'include',
			mode: 'cors',
		};
		if (contentType !== null && contentType !== 'multipart/form-data') {
			this._init ["headers"]["Content-Type"] = contentType;
		}
	};

	async _fetch({path = '/', method = null, data = null, contentType = null} = {}) {
		let port = "";
	    this.setInit(method, data, contentType);
	    try {
	    	switch (path.split("/")[1]) {
			case "users":
				port = backendUsersPort;
				break;
			case "messages":
				port = backendMessagesPort;
				break;
			case "chats":
				port = backendChatsPort;
				break;
			case "channels":
				port = backendChatsPort;
				break;
			case "workspaces":
				port = backendChatsPort;
				break;
			case "notifications":
				port = backendNotificationsPort;
				break;
			}

			console.log(path);

			let response = await fetch(encodeURI(this._url + port + path), this._init);
			//console.log(response.headers['X-CSRF-Token']);
			return response;
		} catch (error) {
	        return error;
		}
	}

	async _doPost(params = {}) {
		return this._fetch({...params, method : "POST"});
	}
	async _doGet(params = {}) {
		return this._fetch({...params, method : "GET"});
	}
	async _doPut(params = {}) {
		return this._fetch({...params, method : "PUT"});
	}
	async _doDelete(params = {}) {
		return this._fetch({...params, method : "DELETE"});
	}

}

export default Fetch;