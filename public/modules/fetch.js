import {ports} from "../constants/config";
import {microservices, settings} from "../constants/config";

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
	    	const option = path.split("/")[1];
	    	const port = ports[option];
	    	const service = microservices[option];
			//console.log(response.headers['X-CSRF-Token']);

			return await fetch(encodeURI(`${this._url}${service}${path}`), this._init);
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