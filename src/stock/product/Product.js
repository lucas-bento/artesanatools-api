const mongoose = require("../../database")
const ItemSchema = require('../Item').ItemSchema
const MaterialSchema = require('../material/Material').MaterialSchema
const middleware = require('../StockMiddleware')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ProductSchema = new Schema({
    user:ObjectId, 
    item:ItemSchema,
    materials: [MaterialSchema],
    workHours:Number,
    extraCost:Number,
    freightCost:Number,
    margin:Number,
});

ProductSchema.statics.crudMiddleware = middleware

const Product = mongoose.model("Product", ProductSchema);

module.exports = {
    Product,
    ProductSchema
}
