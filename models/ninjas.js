const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create ninja Schema & model

const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },

    rank: {
        type: String,
    },

    avaliable: {
        type: Boolean,
        default: false,
    },

    // Add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;