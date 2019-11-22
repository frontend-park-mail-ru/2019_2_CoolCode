class Router {
	constructor(application) {
		if (Router.__instance) {
			return Router.__instance;
		}

		this._paths = {};
		this._application = application;

		Router.__instance = this;

	}

	register(path, view) {
		this._paths[path] = {
			viewClassName : view.name,
			viewObject: new view({}, this._application),
			parent : this._application,
		};
	};

	return() {
		window.history.back();
	}

	go(path, identity) {
		this.open(path, identity);
	}

	open(path, identity) {
		const currentPath = this._paths[path];
		if (identity) {
			if (currentPath.viewClassName === 'chatView') path = `${path}/${identity}`;
			if (currentPath.viewClassName === 'channelFormView') path = `${path}/${identity}`;
			if (currentPath.viewClassName === 'channelView') path = `${path}/${identity}`;
			if (currentPath.viewClassName === 'searchView') path = `${path}?=${identity}`;
			if (currentPath.viewClassName === 'searchView') path = `${path}?=${identity}`;
		}
		if (window.location.pathname !== path) {
			window.history.pushState(
				{'id':identity},
				'',
				path,
			);
		};
		console.log("AAAAA",currentPath.viewObject );
		currentPath.viewObject.show({id: identity});

	}

	parsePath(path) {
		if (this._paths[path]) {
			return path;
		}
		let pathArgs = path.split('/');
		pathArgs[1] = `/${pathArgs[1]}`;
		if (pathArgs.length === 2) {
			let pathRegExp = /\?=/;
			if (pathRegExp.test(pathArgs[1])) {
				pathArgs[1].split('?=');
			}
			return pathArgs[1];
		} else {
			return pathArgs.slice(1, 3);
		}
	}

	start() {
		this._application.addEventListener('click', function (event) {
			const { target } = event;
			if (!(target instanceof HTMLAnchorElement)) {
				return;
			}

			event.preventDefault();
			const link = event.target;
			// console.log({
			// 	pathname: link.pathname
			// });

			this.open(link.pathname);
		}.bind(this));

		window.onpopstate = function () {
			const currentPath = window.location.pathname;
			let pathArgs = this.parsePath(currentPath);
			if (typeof(pathArgs) === 'string') {
				this.open(pathArgs);
			} else {
				this.open(pathArgs[0], pathArgs[1]);
			}
		}.bind(this);

		const currentPath = window.location.pathname;
		let pathArgs = this.parsePath(currentPath);
		if (typeof(pathArgs) === 'string') {
			this.open(pathArgs);
		} else {
			this.open(pathArgs[0], pathArgs[1]);
		}
	};

}

export default Router;