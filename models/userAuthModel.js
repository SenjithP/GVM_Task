const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    userPassword:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const userModel = mongoose.model('User',userSchema);

module.exports = userModel;