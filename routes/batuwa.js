const express = require('express');
const Batuwa = require('../models/Batuwa');
const PassKey = require('../models/passKey');
const router = express.Router();


router.post('/add-to-batuwa', (req, res) => {
    const batuwaDocs = new Batuwa(req.body);
    batuwaDocs.save(req.body).then(resolve => {
        res.status(200).json({'status': 'success'});
    }).catch(err => {
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.get('/get-batuwa', (req, res) => {
    Batuwa.find({deviceId: req.query.deviceId}, function(error, result)  {
        if(result && result.length > 0) {
            res.status(200).send({batuwa_docs: result});
        } else {
            res.status(200).send({message: 'No Data Found'});
        }
    })
})

router.get('/deviceId-exist', (req, res) => {
    PassKey.findOne({deviceId: req.query.deviceId}, function(error, result)  {
        if(result) {
            res.status(200).send({status: true});
        } else {
            res.status(200).send({status: false});
        }
    })
})


router.post('/add-to-passkey', (req, res) => {
    const passKeyDocs = new PassKey(req.body);
    passKeyDocs.save(req.body).then(resolve => {
        res.status(200).json({'status': 'success'});
    }).catch(err => {
        res.status(503).json({'error': 'Internal Server Error'})
    })
})

router.get('/auth-batuwa', (req, res) => {
    PassKey.findOne({deviceId: req.query.deviceId, passkey: req.query.passkey}, function(err, result) {
        if(result) {
            res.status(200).send({authenticate: true});
        } else {
            res.status(200).send({authenticate: false});
        }
    })
})

module.exports = router;