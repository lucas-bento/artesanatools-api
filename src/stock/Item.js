const mongoose = require("../database")
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    description:String,
    measure:String,
    image:String
});

const Item = mongoose.model("Item", ItemSchema)

module.exports = {
    Item,
    ItemSchema
}
