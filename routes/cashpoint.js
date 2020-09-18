const http = require("http");
const express = require('express');
const path = require('path');

const key = require(path.join(__dirname, '../config/keys'));
const router = express.Router();

router.get('/cashpoint', function(req, res) {
    console.log('Getting Cashpoint list...');

    const url = key.cashpointList;

    http.get(url, (response) => {
        console.log('statusCode from service : ', response.statusCode);
      
        response.on('data', (data) => {
            const jsonData = JSON.parse(data);
            console.log('return from service: ', jsonData);

            const cashpoints = jsonData;
            res.render('cashpoint', cashpoints);
        });
    });
});

router.post('/addCashpoint', function(req, res) {
    console.log('Creating a new Cashpoint...');
    console.log('new cashpoint : ', req.body);
    
    const credentials = req.body;
    const jsonData = JSON.stringify(credentials);
    const url = key.cashpointAdd;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const request = http.request(url, options, (response) => {
        console.log('statusCode from service : ', response.statusCode);
      
        response.on('data', (data) => {
            const jsonData = JSON.parse(data);
            console.log('return from service : ', jsonData);

            // const cashpoints = jsonData;
            // res.render('cashpoint', cashpoints);

            res.redirect('/cashpoint/cashpoint');
        });
    });

    request.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    request.write(jsonData);
    request.end();
});

router.post('/deleteAllCashpoint', function(req, res) {
    console.log('Deleting all Cashpoint...');
    
    const credentials = {
        'mode': 'delete All'
    };
    const jsonData = JSON.stringify(credentials);
    const url = key.deleteAllCashpoint;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const request = http.request(url, options, (response) => {
        console.log('statusCode from service : ', response.statusCode);
      
        response.on('data', (data) => {
            const jsonData = JSON.parse(data);
            console.log('return from service : ', jsonData);

            res.redirect('/cashpoint/cashpoint');
        });
    });

    request.on('error', (e) => {
        console.error(`problem with request: ${e.message}`);
    });

    request.write(jsonData);
    request.end();
});

module.exports = router;