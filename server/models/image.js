const mongoose = require('mongoose');

const imgSchema = new mongoose.Schema({
    name: String,
    img: {
        data: Buffer,
        contentType: 'image/png'
    }
})

module.exports = mongoose.model('Image', imgSchema);