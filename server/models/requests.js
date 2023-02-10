const mongoose = require('mongoose');

const requestScheama = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    courseId: {
        type: String
    },
    courseName: {
        type: String,
        default: 'Test courseName'
    },
    amount: {
        type: Number,
        default: 1
    }
}, { timestamps: true });

module.exports = Requests = mongoose.model('Requests', requestScheama);