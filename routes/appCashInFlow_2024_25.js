const express = require('express');
const AppCashFlow = require('../models/cashflow_2024_2025');
const router = express.Router();


router.post('/app-cash-in-flow-2024-25', (req, res) => {
    const payload = req && req.body;
    const docs = new AppCashFlow(payload);
    docs.save(payload).then(result => {
        res.status(200).send({'status': 'Expense has been added'});
    }, (err) => {
        res.status(503).send({'status': 'Error storing cash in flow'});

    })
})

router.get('/app-get-cashflow', (req, res) => {
    AppCashFlow.find({}, function(err, result) {
        res.status(200).send(result);
    })
})

module.exports = router;