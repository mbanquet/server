const mongoose = require('mongoose');


const BatuwPassKey = mongoose.Schema({
    deviceId: {
        type: String
    },
    passkey: {
        type: String
    }
})

module.exports = mongoose.model('batuwapasskey', BatuwPassKey);
