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
        emailInput.placeholder = 'email';

        const passwordInput = document.createElement('input');
        passwordInput.className = "input_field";
        passwordInput.type = 'password';
        passwordInput.placeholder = 'password';

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
        back.textContent = 'back';
        back.dataset.section = 'mainPage';
        this._parent.appendChild(form);
        this._parent.appendChild(back);
    }
}
