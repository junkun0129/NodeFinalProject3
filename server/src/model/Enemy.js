const mongoose = require("mongoose")
const {Schema, model, SchemaTypes} = mongoose

const enemySchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    hp:{
        type:Number,
        required:true
    },
    at:{
        type:Number,
        required:true
    }
})

module.exports = model("Enemey", enemySchema)