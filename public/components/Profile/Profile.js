const profileTempl = require('./profile.pug');
const msgTempl = require('./message.pug');

export class Message {
    constructor (data, parent) {
        this._data = data;
        this._parent = parent

    }

    get data () {
        return this._data
    }

    set data (dataToSet) {
        this._data = { ...dataToSet }
    }

    get parent () {
        return this._parent
    }

    set parent (parent) {
        this._parent = parent
    }

    renderMsg () {
        return msgTempl(this._data)
    }
}

export class ProfileComponent {

    constructor (data, parent) {
        this._data = data;
        this._parent = parent

    }

    get data () {
        return this._data
    }

    set data (dataToSet) {
        this._data = { ...dataToSet }
    }

    get parent () {
        return this._parent
    }

    set parent (parent) {
        this._parent = parent
    }


    renderProfile () {
        this.data[`chat`] = false;
        this.parent.innerHTML += profileTempl(this._data);

        const root = document.getElementsByClassName('chat-msg')[0];

        if (this._data.chats !== undefined) {
            for (let i = 0; i < this._data.chats.length; i++) {
                const mess = new Message();
                mess.data = this._data.chats[i];
                const message = document.createElement('div');
                message.className = 'row';
                message.id = 'msg';
                message.innerHTML = mess.renderMsg();
                root.appendChild(message)
            }
        }

        const img = document.getElementById('avatar');
        const input = document.getElementById('file');
        img.addEventListener('click',function () {
            input.click()

        })


    }

    hideLoader(avatar) {
        document.getElementById("loader").style.display="none";
        document.getElementById("avatar").style.display="initial";
    }

    showLoader(){
        document.getElementById("avatar").style.display="none";
        document.getElementById("loader").style.display="initial";

    }
}
