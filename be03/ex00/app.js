const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const index = require('./route/index');
const signin = require('./route/signin');
const signup = require('./route/signup');
const signout = require('./route/signout');
const change = require('./route/change');

const port = 80;
const err = { ERR: '404 Not Found' };

app.use(express.json());
app.use(cookieParser());

app.use('', index);
app.use('/signin', signin);
app.use('/signup', signup);
app.use('/signout', signout);
app.use('/change', change);

app.use((req, res) => res.status(404).send(err));

app.listen(port, () => console.log(`Port ${port} is running`));