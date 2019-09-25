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
        const title = document.createElement('div');
        title.className='stage';

        const image1=document.createElement('img');
        image1.className = 'box bounce-2';
        image1.src='images/plus.png';
        image1.alt='text';
        title.appendChild(image1);

        const image2=document.createElement('img');
        image2.className = 'box bounce-2';
        image2.src='images/square-root-mathematical-sign.png';
        image2.alt='text';
        title.appendChild(image2);


        const image3=document.createElement('img');
        image3.className = 'box bounce-2';
        image3.src='images/therefore-mathematical-symbol.png';
        image3.alt='text';
        title.appendChild(image3);




        this._parent.appendChild(title);

        const text =document.createElement('p');
        text.className='text';
        text.textContent=' Whatever work you do, you can do it in CoolSlack';
        this._parent.appendChild(text);
    }
}

export class Header {
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
    renderHeader(){
        const header = document.createElement('header');
        header.id = "app";
        header.className = "row";
        this._parent.appendChild(header);

        const headerIconCol = document.createElement('div');
        headerIconCol.className = "column header-icon";
        header.appendChild(headerIconCol);

        const headerIcon = document.createElement('a');
        headerIcon.href = "/";
        headerIconCol.appendChild(headerIcon);

        const headerIconImg = document.createElement('img');
        headerIconImg.src = "images/logo_2.png";
        headerIconImg.className = "logo";
        headerIcon.appendChild(headerIconImg);


        const freeSpaceCol = document.createElement('div');
        freeSpaceCol.className = "column free-space";
        header.appendChild(freeSpaceCol);

        const logoutCol = document.createElement('div');
        logoutCol.className = "column log-out";
        header.appendChild(logoutCol);

        const logInRef = document.createElement('a');
        logInRef.id = "change";
        logInRef.href = `/login`;
        logInRef.textContent="log in";
        logInRef.dataset.section ="login";
        logoutCol.appendChild(logInRef);

        const signUpRef = logInRef.cloneNode(true);
        signUpRef.href = `/signup`;
        signUpRef.textContent="sign up";
        signUpRef.dataset.section ="signUp";
        logoutCol.appendChild(signUpRef);

        const profileRef = logInRef.cloneNode(true);
        profileRef.href = `/profile`;
        profileRef.textContent="profile";
        profileRef.dataset.section ="profile";
        logoutCol.appendChild(profileRef);
    }
}