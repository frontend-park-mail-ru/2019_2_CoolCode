const application = document.getElementById('application');


const menuItems = {
    signup: 'Регистрация',
    login: 'Авторизация',
    profile: 'Профиль',
    about: 'О себе любимом',
};
function view() {

    const title =document.createElement('div');
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
    



    application.appendChild(title);

    const text =document.createElement('p');
    text.className='text';
    text.textContent=' Whatever work you do, you can do it in CoolSlack';
    application.appendChild(text);
}
function createHeader() {

    const header = document.createElement('header');
    header.id = "app";
    header.className = "row";
    application.appendChild(header);

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
    signUpRef.dataset.section ="signup";
    logoutCol.appendChild(signUpRef);

    const profileRef = logInRef.cloneNode(true);
    profileRef.href = `/profile`;
    profileRef.textContent="profile";
    profileRef.dataset.section ="profile";
    logoutCol.appendChild(profileRef);

}
function createMenu() {
    application.innerHTML = '';
    createHeader();
    view();
}


async function ajax(method, url, body = null, callback) {
    let response = await fetch(url);
    //alert(response.status);
    let text = await response.text();
    callback(response.status, text);
}

function createSignUp() {

    application.innerHTML = '';

    const form = document.createElement('form');
    const emailInput = document.createElement('input');
    emailInput.className="input_field";
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Емайл';

    const passwordInput = document.createElement('input');
    passwordInput.className="input_field";
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Пароль';

    const ageInput = document.createElement('input');
    ageInput.className="input_field";
    ageInput.type = 'number';
    ageInput.name = 'age';
    ageInput.placeholder = 'Возраст';

    const submitBtn = document.createElement('input');
    submitBtn.className="submit-button";
    submitBtn.type = 'submit';
    submitBtn.value = 'Sing up!';

    const name = document.createElement('p');
    name.className='name';
    name.textContent='Sign up';

    form.appendChild(name);
    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(ageInput);
    form.appendChild(submitBtn);


    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = form.elements['email'].value;
        const age = parseInt(form.elements['age'].value);
        const password = form.elements['password'].value;

        ajax('POST', '/signup', {email, age, password}, function (status, responseText) {
            if (status === 201) {
                createProfile();
                return;
            }

            const {error} = JSON.parse(responseText);
            alert(error);
        })
    });


    const back = document.createElement('a');
    back.className='back';
    back.href = '/menu';
    back.textContent = 'back';
    back.dataset.section = 'menu';

    application.innerHTML = '';
    application.appendChild(form);
    application.appendChild(back);

}

function createLogin() {
    application.innerHTML = '';
    const form = document.createElement('form');

    const emailInput = document.createElement('input');
    emailInput.className="input_field";
    emailInput.type = 'email';
    emailInput.placeholder = 'Емайл';

    const passwordInput = document.createElement('input');
    passwordInput.className="input_field";
    passwordInput.type = 'password';
    passwordInput.placeholder = 'Пароль';

    const submitBtn = document.createElement('input');
    submitBtn.className='submit-button';
    submitBtn.type = 'submit';
    submitBtn.value = 'Log in!';

    form.appendChild(emailInput);
    form.appendChild(passwordInput);
    form.appendChild(submitBtn);

    const back = document.createElement('a');
    back.className='back';
    back.href = '/menu';
    back.textContent = 'Назад';
    back.dataset.section = 'menu';

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        ajax(
            'POST',
            '/login',
            {email, password},
            function (status, response) {
                if (status === 200) {
                    createProfile();
                } else {
                    const {error} = JSON.parse(response);
                    alert(error);
                }
            }
        )

    });

    application.appendChild(form);
    application.appendChild(back);
}

function createProfile() {
    //application.innerHTML = '';
    ajax('GET', '/profile', null, function (status, responseText) {
        let isMe = false;
        if (status === 200) {
            isMe = true;
        }
        if (status === 401) {
            isMe = false;
        }
        if (isMe) {
            const responseBody = JSON.parse(responseText);
            //application.innerHTML = '';
            application.removeChild(application.getElementsByClassName("stage")[0]);
            application.removeChild(application.getElementsByClassName("text")[0]);
            logOut = document.getElementsByClassName("log-out")[0];
            while (logOut.childNodes.length !== 1) {
                logOut.removeChild(logOut.lastChild);
            }
            logOutRef = logOut.firstElementChild;
            logOutRef.textContent = 'log out';
            logOutRef.href = '/';
            logOutRef.dataset.section ="logout";

            const wrapper = document.createElement('div');
            wrapper.className = "container";
            application.appendChild(wrapper);

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

            const profileImg = document.createElement('img');
            profileImg.className = "rounded-circle-1";
            profileImg.id="avatar";
            profileImg.src = "images/user.jpg";
            profilePic.appendChild(profileImg);

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
            userNameRowS.textContent = `@${responseBody.nick}`;
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
            emailField.textContent = responseBody.email;
            settingsCol.appendChild(emailField);

            const phone = status.cloneNode(true);
            phone.textContent = "phone number:";
            settingsCol.appendChild(phone);

            const phoneField = statusField.cloneNode(true);
            phoneField.textContent = responseBody.phone;
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

        } else {
            alert('АХТУНГ нет авторизации');
            createSignUp();
        }
    });
}


const functions = {
    menu: createMenu,
    signup: createSignUp,
    login: createLogin,
    profile: createProfile,
    logout:createMenu,
};

application.addEventListener('click', function (evt) {
    const {target} = evt;

    if (target instanceof HTMLAnchorElement) {
        evt.preventDefault();
        functions[target.dataset.section]();
    }
});

createMenu();
