class BaseComponent {
	constructor(data, parent) {
		this._data = data;
		this._parent = parent;

	}
	getData() {
		return this._data;
	}

	setData(dataToSet) {
		this._data = {...dataToSet};
	}

	getParent() {
		return this._parent;
	}

	setParent(parent) {
		this._parent = parent;
	}

	render() {
	}
}

export default BaseComponent;