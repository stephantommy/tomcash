const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');

const key = require(path.join(__dirname, '/config/keys'));
const host = key.host;
const port = key.port;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/login', require(path.join(__dirname, '/routes/login')));
app.use('/dashboard', require(path.join(__dirname, '/routes/dashboard')));
app.use('/cashpoint', require(path.join(__dirname, '/routes/cashpoint')));

app.listen(port, host, () => console.log("tomcash is running on port " + port));