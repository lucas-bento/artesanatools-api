const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/test-artesanatools", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
