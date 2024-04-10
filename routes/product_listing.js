
const express = require('express');
const products = require('../models/ProductList');
const router = express.Router();


router.post('/add-product', (req, res) => {
    const add_product = new products(req.body);
        add_product.save(req.body['item']).then(data => {
            console.log(data);
            res.status(200).json({'status': "success"});
        })
  
    
})

router.get('/all-product', (req, res) => {
    products.find({}, function(err, result) {
        res.status(200).json({'product': result})
    })
})


module.exports = router