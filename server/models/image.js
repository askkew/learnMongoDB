const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    image: {
        type: Buffer,
        required: true
    },
    contentType: {
        type: String,
        required: true
    }
});

const ImageModel = mongoose.model("Image", ImageSchema);

module.exports = ImageModel;