const mongoose = require("../../database")
const ItemSchema = require('../Item').ItemSchema
const middleware = require('../StockMiddleware')
const ObjectId = mongoose.Schema.Types.ObjectId;
const Schema = mongoose.Schema;

const MaterialSchema = new Schema({
    item:{
        type: ItemSchema,
        required: true
    },
    cost:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    user:{
        type:ObjectId,
        required:true
    }
});

MaterialSchema.statics.crudMiddleware = middleware

const Material = mongoose.model("Material", MaterialSchema)


module.exports = {
    Material,
    MaterialSchema
}
