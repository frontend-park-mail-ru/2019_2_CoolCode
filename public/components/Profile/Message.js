const msgTempl = require('./message.pug');

export class Message {
    constructor(data, parent) {
        this._data = data;
        this._parent = parent

    }

    get data() {
        return this._data
    }

    set data(dataToSet) {
        this._data = {...dataToSet}
    }

    get parent() {
        return this._parent
    }

    set parent(parent) {
        this._parent = parent
    }

    renderMsg() {
        return msgTempl(this._data)
    }
}