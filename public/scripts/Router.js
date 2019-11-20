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
			viewClassName : view.name,
			viewObject: new view({}, this._application),
			parent : this._application,
			pathFunction: path,
		};
		keyWords.forEach((keyWord)=> {
			if (!(keyWord in this._keyWords)) {
				this._keyWords.push(keyWord);
			}
		});
	};

	return() {
		window.history.back();
	}

	create(pathObject, identities) {
		let path = "";
		if (identities.length !== 0) {
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
			console.log(viewName);
			console.log(path);
			if (this._paths[path].viewClassName === viewName) {
				this.create(this._paths[path], identities);
			}
		}
		console.log('couldn\'t open page');
	}

	open(keyWords, identities) {
		console.log(keyWords);
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
			const link = event.target.dataset.section;
			this.open([link], []);

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