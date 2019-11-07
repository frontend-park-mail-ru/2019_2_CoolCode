import {bus} from '../main';

class PromiseMaker {
	constructor(application) {
		if (PromiseMaker.__instance) {
			return PromiseMaker.__instance;
		}
		PromiseMaker.__instance = this;
	}

	createPromise(name, ...args) {
		let res = null;
		let stuff = new Promise((resolve, reject) => {
			res = resolve;
		});
		bus.emit(name, res, ...args); //TODO: ret rid of dependency
		return stuff;
	}
}

export default PromiseMaker;