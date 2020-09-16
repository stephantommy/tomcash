const http = require('http');
const express = require('express');

const key = require('../config/keys');

const router = express.Router();

router.post('/', function(req, res) {
    console.log('Logging in...');

    const credentials = req.body;
    const jsonData = JSON.stringify(credentials);
    const url = key.login;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const request = http.request(url, options, (response) => {
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);
      
        response.on('data', (data) => {
            const jsonData = JSON.parse(data);
            console.log(jsonData);

            let success = jsonData.status;
            if (success === 'Success') res.redirect('/dashboard');
            else res.redirect('/');
        });
    });

    request.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    request.write(jsonData);
    request.end();

    // post login to services
});

module.exports = router;