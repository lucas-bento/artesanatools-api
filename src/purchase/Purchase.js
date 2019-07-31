const mongoose = require("../database")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
const MaterialSchema = require('../stock/material/Material.js').MaterialSchema;

const PurchaseSchema = new Schema({
    date:Date,
    supplier:String,
    items:[MaterialSchema],
    freight:{
        tracking:String,
        price:Number
    },
    totalPrice:Number
})

const PurchaseHistory = mongoose.model(
    "PurchaseHistory", {
       user:ObjectId, 
       sales:[PurchaseSchema]
})
