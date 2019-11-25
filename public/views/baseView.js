class BaseView {
	constructor (data = {}, parent = document.body) {
		this._data = data;
	    this._parent = parent;
	};
	render() {
	    this._parent.innerText = "NOTHING TO RENDER";
	}
	show(args) {

	}

	setContent() {

	}

	get data() {
		return this._data;
	}

	set data(dataToSet) {
		this._data = {...dataToSet};
	}

	get parent() {
		return this._parent;
	}

	set parent(parent) {
		this._parent = parent;
	}

}
export default BaseView;