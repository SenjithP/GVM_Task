const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const productSchema = new Schema({
    vendorName:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    ProductType:{
        type:String,
        required:true,
        unique:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const productModel = mongoose.model('Product',productSchema);

module.exports = productModel;