const mongoose = require('mongoose');


const BatuwaSchema = mongoose.Schema({
    deviceId: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    notes: {
        type: String
    }
    
})

module.exports = mongoose.model('batuwa', BatuwaSchema);
