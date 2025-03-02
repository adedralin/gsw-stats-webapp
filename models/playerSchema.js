const mongoose = require('mongoose'); //Load mongoose
let schemaPlayer = mongoose.Schema ({
    num: {
        type: String,
        required: true,
        default: 'unknown',
    },
    name: {
        type: String,
        required: true,
        default: 'unknown'
    },
    position: {
        type: String,
        required: true,
        default: 'unknown'
    },
    height: {
        type: String,
        required: true,
        default: 'unknown'
    },
    weight: {
        type: Number,
        required: true,
        default: 'unknown'
    },
    bday: {
        type: String,
        required: true,
        default: 'unknown'
    },
    experience: {
        type: Number,
        required: true,
        default: 'unknown'
    },
    active: {
        type: Boolean,
        required: true,
        default: true,
    },
    college: {
        type: String,
        default: 'unknown'
    }
})
module.exports = mongoose.model('Player', schemaPlayer);