export class ProfileComponent{

    constructor(data, parent) {
        this._data = data;
        this._parent = parent;

    }
    get data () {
        return this._data;
    }
    set data (dataToSet) {
        this._data = {...dataToSet};
    }
    get parent () {
        return this._parent;
    }
    set parent (parent){
        this._parent = parent;
    }
    renderProfile(){
        const logOut = document.getElementsByClassName("log-out")[0];
        while (logOut.childNodes.length !== 1) {
            logOut.removeChild(logOut.lastChild);
        }
        const logOutRef = logOut.firstElementChild;
        logOutRef.textContent = 'log out';
        logOutRef.href = '/';
        logOutRef.dataset.section ="logout";

        const wrapper = document.createElement('div');
        wrapper.className = "container";
        this._parent.appendChild(wrapper);

        const row = document.createElement('div');
        row.className = "row";
        wrapper.appendChild(row);


        const chatColumn = document.createElement('div');
        chatColumn.className = "column left";
        row.appendChild(chatColumn);

        const chatMenu = document.createElement('div');
        chatMenu.className = "row";
        chatMenu.id = "chat-menu";
        chatColumn.appendChild(chatMenu);

        const searchCol = document.createElement('div');
        searchCol.className = "column search";
        chatMenu.appendChild(searchCol);

        const searhImg = document.createElement('img');
        searhImg.id = "loupe";
        searhImg.src = "images/loupe_2.png";
        searchCol.appendChild(searhImg);

        const chat = document.createElement('div');
        chat.className = "row";
        chat.id = "msg";
        chatColumn.appendChild(chat);

        const imgContainer = document.createElement('div');
        imgContainer.className = "column for-img";
        chat.appendChild(imgContainer);

        const mesgContainer = document.createElement('div');
        mesgContainer.className = "column for-msg";
        chat.appendChild(mesgContainer);

        const personName = document.createElement("div");
        personName.className = "row";
        personName.id = "name";
        mesgContainer.appendChild(personName);

        const name = document.createElement("p");
        name.id = "person";
        name.textContent = "Sasha Spiridonova";
        personName.appendChild(name);


        const personMessage = document.createElement("div");
        personMessage.className = "row";
        personMessage.id = "message";
        mesgContainer.appendChild(personMessage);

        const personMessageText = document.createElement("div");
        personMessageText.className = "column messg-text";
        personMessage.appendChild(personMessageText);

        const personMessageCount= document.createElement("div");
        personMessageCount.className = "column messg-c";
        personMessage.appendChild(personMessageCount);

        const personMessageCountContainer = document.createElement("div");
        personMessageCountContainer.className = "msg-c ";
        personMessageCount.appendChild(personMessageCountContainer);

        const personMessageNumber = document.createElement("p");
        personMessageNumber.id = "mess-n";
        personMessageNumber.textContent = "11";
        personMessageCountContainer.appendChild(personMessageNumber);


        const message = document.createElement("p");
        message.id = "mess";
        message.textContent = "Hello, my friend";
        personMessageText.appendChild(message);

        const img = document.createElement('img');
        img.className = "rounded-circle";
        img.src = "images/sasha.jpeg";
        imgContainer.appendChild(img);

        const profileColumn = document.createElement('div');
        profileColumn.className = "column right";
        row.appendChild(profileColumn);

        const headRow = document.createElement('div');
        headRow.className = "row";
        headRow.id = "profile-pic";
        profileColumn.appendChild(headRow);

        const profilePic = document.createElement('div');
        profilePic.className = "column for-img-1";
        headRow.appendChild(profilePic);

        const profilePicRow = document.createElement('div');
        profilePicRow.className = "row";
        profilePicRow.id = "profile-pic-row";
        profilePic.appendChild(profilePicRow);

        const profileImg = document.createElement('img');
        profileImg.className = "rounded-circle-1";
        profileImg.id="avatar";
        profileImg.src = "images/user.jpg";
        profilePicRow.appendChild(profileImg);

        const refRow = document.createElement('div');
        refRow.className = "row";
        refRow.id = "profile-pic-ch";
        profilePic.appendChild(refRow);

        const profileImgChange = document.createElement('a');
        profileImgChange.id = "change";
        profileImgChange.href = `/`;
        profileImgChange.textContent="edit avatar";
        refRow.appendChild(profileImgChange);

        const userName = document.createElement('div');
        userName.className = "column for-msg-1";
        headRow.appendChild(userName);

        const userNameRowF = document.createElement('div');
        userNameRowF.className = "row";
        userNameRowF.id = "name-row";
        userNameRowF.textContent = "Cool User";
        userName.appendChild(userNameRowF);

        const userNameRowS = document.createElement('div');
        userNameRowS.className = "row";
        userNameRowS.id = "nick-row";
        userNameRowS.textContent = `@${this._data.nick}`;
        userName.appendChild(userNameRowS);

        const userNameRowT = document.createElement('div');
        userNameRowT.className = "row";
        userNameRowT.id = "nick-ch";
        userName.appendChild(userNameRowT);

        const userNameChange = document.createElement('a');
        userNameChange.id = "change";
        userNameChange.href = `/`;
        userNameChange.textContent="edit name";
        userNameRowT.appendChild(userNameChange);

        const settingsRow = document.createElement('div');
        settingsRow.className = "row";
        settingsRow.id = "settings";
        profileColumn.appendChild(settingsRow);

        const settingsCol = document.createElement('div');
        settingsCol.className = "column settings";
        settingsRow.appendChild(settingsCol);

        const status = document.createElement('p');
        status.id = "attribute";
        status.textContent = "status:";
        settingsCol.appendChild(status);

        const statusField = document.createElement('div');
        statusField.className = "field";
        statusField.textContent = "I'm single";
        settingsCol.appendChild(statusField);

        const email = status.cloneNode(true);
        email.textContent = "email:";
        settingsCol.appendChild(email);

        const emailField = statusField.cloneNode(true);
        emailField.textContent = this._data.email;
        settingsCol.appendChild(emailField);

        const phone = status.cloneNode(true);
        phone.textContent = "phone number:";
        settingsCol.appendChild(phone);

        const phoneField = statusField.cloneNode(true);
        phoneField.textContent = this._data.phone;
        settingsCol.appendChild(phoneField);

        const settingsRF = document.createElement('div');
        settingsRF.className = "row";
        settingsRF.id = "params";
        settingsCol.appendChild(settingsRF);

        const settingsRText = document.createElement('p');
        settingsRText.id = "attribute";
        settingsRText.textContent = "privacy settings";
        settingsRF.appendChild(settingsRText);

        const settingsRRef = document.createElement('a');
        settingsRRef.id = "change";
        settingsRRef.href = `/`;
        settingsRF.appendChild(settingsRRef);

        const settingsImg = document.createElement('img');
        settingsImg.id = "sett";
        settingsImg.src = "images/settings.jpg";
        settingsRRef.appendChild(settingsImg);

        const settingsRS = settingsRF.cloneNode(true);
        settingsCol.appendChild(settingsRS);

        settingsRS.querySelector("#attribute").textContent = "account settings";
    }
}