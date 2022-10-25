const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    topic: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model('babiesPosts',postSchema)