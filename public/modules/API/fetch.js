import FetchError from "./fetchError";
import {responseStatuses} from '../config';

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
	    this.setInit(method, data, contentType);
	    try {
			let response = await fetch(this._url + path, this._init);
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

}

export default Fetch;