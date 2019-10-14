const searchTemplate = require('../../modules/API/search.pug');

export class Search {
    constructor(data = {}, parent = document.body) {
        this._data = data;
        this._parent = parent;

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
    renderSearch(search) {
        this._data["search"] = true;
        this._parent.innerHTML = searchTemplate(this._data);
    }
}