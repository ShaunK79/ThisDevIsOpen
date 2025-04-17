const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    name: String,
    message: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('submission', submissionSchema);