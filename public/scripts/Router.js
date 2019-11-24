class Router {
	constructor(application) {
		if (Router.__instance) {
			return Router.__instance;
		}

		this._keyWords = [];
		this._paths = {};
		this._application = application;

		Router.__instance = this;

	}

	register(path, view, keyWords) {
		this._paths[keyWords] = {
			viewClassName: view.name,
			viewObject: new view({}, this._application),
			parent: this._application,
			pathFunction: path,
		};
		keyWords.forEach((keyWord) => {
			if (!(this._keyWords.includes(keyWord))) {
				this._keyWords.push(keyWord);
			}
		});
	};

	return() {
		window.history.back();
	}

	create(pathObject, identities) {
		let path = "";
		if (pathObject.pathFunction instanceof Function) {
			path = pathObject.pathFunction(...identities);
		} else {
			path = pathObject.pathFunction;
		}
		if (window.location.pathname !== path) {
			window.history.pushState(
				{'id':identities},
				'',
				path,
			);
		};
		pathObject.viewObject.show(identities);
	}

	go(viewName, ...identities) {
		for (let path in this._paths) {
			if (this._paths[path].viewClassName === viewName) {
				this.create(this._paths[path], identities);
				break;
			}
			console.log(`couldn\'t open page : ${viewName}`);

		}
	}

	open(keyWords, identities) {
		const currentPath = this._paths[keyWords];
		this.create(currentPath, identities);
	}

	parsePath(path) {
		const pathSplitted = path.split(/\/|\?=/);
		const keyWords = [];
		const args = [];
		pathSplitted.slice(1, pathSplitted.length).forEach((argument) => {
			if (argument != "") {
				if (this._keyWords.includes(argument)) {
					keyWords.push(argument);
				} else {
					args.push(argument);
				}
			}
		});
		return {
			keyWords : keyWords,
			args: args,
		};
	}

	start() {
		this._application.addEventListener('click', function (event) {
			const { target } = event;
			if (!(target instanceof HTMLAnchorElement)) {
				return;
			}
			event.preventDefault();
			const link = event.target.href;
			const pathArgs = this.parsePath(link);
			this.open(pathArgs.keyWords, pathArgs.args);

		}.bind(this));

		window.onpopstate = function () {
			const currentPath = window.location.pathname;
			const pathArgs = this.parsePath(currentPath);
			this.open(pathArgs.keyWords, pathArgs.args);
		}.bind(this);

		const currentPath = window.location.pathname;
		const pathArgs = this.parsePath(currentPath);
		this.open(pathArgs.keyWords, pathArgs.args);
	};

}

export default Router;