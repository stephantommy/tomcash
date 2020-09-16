const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    console.log('Dashboard page...');
    const obj = {};
    res.render('dashboard', obj);
});

module.exports = router;