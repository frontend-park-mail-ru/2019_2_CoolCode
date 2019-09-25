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
        const form = document.createElement('form');
        form.className = "log-in-form";

        const emailInput = document.createElement('input');
        emailInput.className = "input_field";
        emailInput.type = 'email';
        emailInput.placeholder = 'Емайл';

        const passwordInput = document.createElement('input');
        passwordInput.className = "input_field";
        passwordInput.type = 'password';
        passwordInput.placeholder = 'Пароль';

        const submitBtn = document.createElement('input');
        submitBtn.className = 'submit-button';
        submitBtn.type = 'submit';
        submitBtn.value = 'Log in!';

        form.appendChild(emailInput);
        form.appendChild(passwordInput);
        form.appendChild(submitBtn);

        const back = document.createElement('a');
        back.className = 'back';
        back.href = '/menu';
        back.textContent = 'Назад';
        back.dataset.section = 'mainPage';

        this._parent.appendChild(form);
        this._parent.appendChild(back);
    }
}

export class SignUp{
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

    renderSignUp() {
        const form = document.createElement('form');
        form.className = "log-in-form";

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

        const back = document.createElement('a');
        back.className='back';
        back.href = '/menu';
        back.textContent = 'back';
        back.dataset.section = 'mainPage';

        this._parent.innerHTML = '';
        this._parent.appendChild(form);
        this._parent.appendChild(back);

    }
}