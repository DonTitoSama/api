const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let comSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    post_id: {
        type: String
    }
});

module.exports = mongoose.model('Com', comSchema);