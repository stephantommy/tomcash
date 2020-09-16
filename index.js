const express = require("express");
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/login', require('./routes/login'));
app.use('/dashboard', require('./routes/dashboard'));
app.use('/cashpoint', require('./routes/cashpoint'));

app.listen(port, function () {
    console.log("tomcash is running on port " + port);
});