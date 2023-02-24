const mongoose = require("mongoose")
const {Schema, model, SchemaTypes} = mongoose
const bcrypt = require("bcryptjs")
const {salt} = require("../config")

const userSchema = new Schema({
    name : { type: String, trim: true, required: true },
    email : { type: String, trim: true, required: true, unique: true },
    password : { type: String }, 
    status: {
        type: SchemaTypes.ObjectId,
        ref: "Status",
        required: true,
    }, 
    // item:[{
    //     type: SchemaTypes.ObjectId,
    //     ref:"Item"
    // }]

}, {
    timestamps: true,
})

userSchema.pre("save", async function(next){
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})

module.exports = model("User", userSchema);