const bodyTemplate = require('./body.pug');

export class MainPageComponent {

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

    renderMainPage() {
        this._parent.innerHTML += bodyTemplate(this._data)
    }
}