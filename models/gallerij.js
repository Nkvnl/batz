var mongoose = require("mongoose");
mongoose.connect('mongodb://niek1:batz11@ds235053.mlab.com:35053/batz')

var GallerijSchema = new mongoose.Schema({
    img: String,
    thumbnail: String
});

module.exports = mongoose.model("Gallerij", GallerijSchema);
