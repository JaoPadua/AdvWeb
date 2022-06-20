const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    
    title:{type:String, required: true, unique:true},
    desc:{type:String, required:true, },
    Image:{type: String, required:true,},
    Categories: { type: String },
    Type:{type:String, required:true,},
    Price:{type:Number, required:true,},
   
}
,{timestamps:true}

);

module.exports = mongoose.model("Product", ProductSchema)