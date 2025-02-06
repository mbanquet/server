

const mongoose = require('mongoose');

const CashInflowSchema_2024_2025 = mongoose.Schema({
    description: String,
    category: String,
    credit: Number,
    debit: Number,
    date: String,
    timestamp: {
        type: Date,
        default: Date.now
    },
})
module.exports = mongoose.model('cashinflow2025_26', CashInflowSchema_2024_2025)