const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: String,
        required: true,
        trim: true,
    },
    img: {
        data: Buffer,
        contentType: 'image/png'
    }
});

const DetailModel = mongoose.model('Detail', detailSchema)

module.exports = DetailModel