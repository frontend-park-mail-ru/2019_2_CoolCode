import {settings, responseStatuses} from "../config";
class FetchError extends Error {
	constructor(response) {
		super();
		this.name = 'FetchError';
		this.message = responseStatuses[response.status] +
            " error occured while fetching " + response.url;
		this.status = response.status;
		this.url = response.url;
	}

}

export default FetchError;