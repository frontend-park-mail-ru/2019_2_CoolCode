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
			viewClassName : view,
			viewObject: new view({}, this._application),
			parent : this._application,
		};
	};

	go(path) {
		this.open(path);
	}

	open(path) {
		const currentPath = this._paths[path];
		if (window.location.pathname !== path) {
			window.history.pushState(
				null,
				'',
				path
			);
		}
		currentPath.viewObject.show();

	}

	start() {
		this._application.addEventListener('click', function (event) {
			const { target } = event;
			if (!(target instanceof HTMLAnchorElement)) {
				return;
			}

			event.preventDefault();
			const link = event.target;
			console.log({
				pathname: link.pathname
			});

			this.open(link.pathname);
		}.bind(this));

		window.onpopstate = function () {
			const currentPath = window.location.pathname;
			this.open(currentPath);
		}.bind(this);

		const currentPath = window.location.pathname;
		this.open(currentPath);
	};

}

export default Router;