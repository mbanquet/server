const mongoose = require('mongoose');

const ProductListSchema = mongoose.Schema({
    bookingDate: {
        type: String,
        require: true,
    },

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
  
})

module.exports = mongoose.model('ProductList', ProductListSchema)