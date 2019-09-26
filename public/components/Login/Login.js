const loginTemplate = require('./login.pug');

export class Login {
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

    renderLogin() {
        this._parent.innerHTML = '';
        this._parent.innerHTML = loginTemplate(this._data)
    }
}
