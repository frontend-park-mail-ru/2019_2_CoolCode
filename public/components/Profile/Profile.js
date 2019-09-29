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

    setPhoto(photo){
        avatar=document.getElementById('avatar');


    }

    renderProfile () {
        this.data['chat'] = false;
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



        //const form = document.getElementsByClassName('avatar-form')[0];
       // form.addEventListener("submit", function (evt) {
            //alert('do something')
            // ajaxModule._ajax(
            //     'POST',
            //     '/login',
            //     {email, password},
            //     function (status, response) {
            //         if (status === 200) {
            //             alert('profile')
            //         } else {
            //             const {error} = JSON.parse(response);
            //             alert(error);
            //         }
            //     }
            // )
      //  })

        var validate = document.querySelector('#settings-row #email-setting ');
        console.log(validate.textContent);
        validate.addEventListener('click',function () {
            validate.click()

        });
        const img = document.getElementById('avatar');
        const input = document.getElementById('file');
        img.addEventListener('click',function () {
            input.click()

        })


    }
}
