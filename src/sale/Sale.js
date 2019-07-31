const mongoose = require("../database")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const ProductSchema = require('../stock/product/Product').ProductSchema;


const SaleChannelSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:String,
    commision: {
        type: Number,
        required: true
    }
})

const SaleSchema = new Schema({
    date:Date,
    seller:String,
    buyer:String,
    items:[ProductSchema],
    saleChannel:SaleChannelSchema,
    freight:{
        tracking:String,
        price:Number
    },
    totalPrice:Number
})


const SaleChannel = mongoose.model("SaleChannel", SaleChannelSchema);

const SalesHistory = mongoose.model(
    "SalesHistory", {
       user:ObjectId, 
       sales:[SaleSchema]
})


module.exports = {
    SaleHistory: SalesHistory,
    SaleChannel: SaleChannel
}