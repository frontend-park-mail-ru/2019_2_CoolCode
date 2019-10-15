import Bus from "../scripts/Bus";

class BaseView {
	constructor (data = {}, parent = document.body) {
		this._data = data;
	    this._parent = parent;
	    this._active = false;
	    this._bus = new Bus();
	};
	render() {
	    this._parent.innerText = "NOTHING TO RENDER";
	}
	activate() {
	    this._active = true;
	    render();
	}
	deactivate() {
	    this._active = false;
	    this._parent.innerHTML = "";
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

	get active() {
	    return this._active;
	}
}
export default BaseView;