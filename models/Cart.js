const mongoose = require('mongoose');

const ProductListSchema = mongoose.Schema({
    "product_name":  {
        type: String,
        require: true,
    },
    "offer": {
        type: String,
        require: true,
    },
    "ml":  {
        type: String,
        require: true,
    },
    "price":  {
        type: Number,
        require: true,
    },
    "quantity":  {
        type: Number,
        require: true,
    },
    "cupons":  {
        type: String,
        require: true,
    },
    "img_url":  {
        type: String,
        require: true,
    },
    "quantity_selected": {
        type: Number,
        require: true,
    },
    "total_amount": {
        type: Number,
        require: true,
    },
    "address": {
        type: String,
        require: true
    },
    "contact_no": {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('ProductList', ProductListSchema)