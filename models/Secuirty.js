const mongoose = require('mongoose');

const SecuritySchema = mongoose.Schema({
    accessToken: {
        type: String,
        required: true,
    },
  
})

module.exports = mongoose.model('security', SecuritySchema)