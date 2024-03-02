const express = require('express');
const router = express.Router();
const security = require('../models/Secuirty')


router.get('/check-access', (req, res) => {
    console.log(req.query);
    security.find({}, function(err, result) {
        result.forEach(element => {
            console.log(req.query.accessToken)
            if(element.accessToken === req.query.accessToken) {
                res.status(200).json({status: 'success'});
                return
            }
            else {
                res.status(401).json({'error': 'Invalid Access Token'});
                return;
            }
        });
    })
})

module.exports = router