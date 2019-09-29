'use strict';

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '..', 'packedDir')));
app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(body.json());
app.use(cookie());


/* const users = {
    'd.dorofeev@corp.mail.ru': {
        email: 'd.dorofeev@corp.mail.ru',
        password: 'password',
        nick: 'ddor',
        phone: 79192345658,
        chats: [
            {
                name: "Alex Spiridonova",
                number: 10,
                lastMsg: "WTF?"
            },
            {
                name: "Someone New",
                number: 3,
                lastMsg: "HYD?"
            },
            {
                name: "No One",
                number: 1,
                lastMsg: "?"
            }
        ]
    },
    'cooluser@mail.ru': {
        email: 'cooluser@mail.ru',
        password: 'password',
        username: 'cooluser',
        fullname: 'Cool User',
        phone: 79191218358,
        chats: [
            {
                name: "Alex Spiridonova",
                number: 10,
                lastMsg: "WTF?"
            },
            {
                name: "Someone New",
                number: 3,
                lastMsg: "HYD?"
            },
            {
                name: "No One",
                number: 1,
                lastMsg: "?"
            },
            {
                name: "Bono u2",
                number: "1",
                lastMsg: "Come to concert tonight",
            }
        ]
    },

};

const ids = {};

app.post('/signup', function (req, res) {
    const password = req.body.password;
    const email = req.body.email;
    const age = req.body.age;
    if (
        !password || !email || !age ||
        !password.match(/^\S{4,}$/) ||
        !email.match(/@/) ||
        !(typeof age === 'number' && age > 10 && age < 100)
    ) {
        return res.status(400).json({error: 'Не валидные данные пользователя'});
    }
    if (users[email]) {
        return res.status(400).json({error: 'Пользователь уже существует'});
    }

    const id = uuid();
    const user = {password, email, age, score: 0};
    ids[id] = email;
    users[email] = user;

    res.cookie('podvorot', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
    res.status(201).json({id});
});

app.post('/login', function (req, res) {
    const password = req.body.password;
    const email = req.body.email;
    if (!password || !email) {
        return res.status(400).json({error: 'Не указан E-Mail или пароль'});
    }
    if (!users[email] || users[email].password !== password) {
        return res.status(400).json({error: 'Не верный E-Mail и/или пароль'});
    }

    const id = uuid();
    ids[id] = email;

    res.cookie('podvorot', id, {expires: new Date(Date.now() + 1000 * 60 * 10)});
    res.status(200).json({id});
});

app.get('/profile', function (req, res) {
    res.json(users['cooluser@mail.ru']);
});*/

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Server listening port ${port}`);
});
