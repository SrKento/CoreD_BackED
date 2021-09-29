//import mongoose
var mongoose = require("mongoose"),
//set up car schema
var carSchema = mongoose.Schema({
    licenseplatenumber:{
        type: String,
        required: true,
    },
    company:{type:string},
    model:{type:string},
    horsepower:{type:Number},
    fabricationyear:{type:Number},
    color:{type:String},
    type:{
        type: String,
        enum:["sedan", "coupe", "sports car", "convertible", "minivan", "pick up", "SUV"],
    },
    create_date: {
        type: Date,
        default: Date.now
    }

})

//Export contact model
module.exports= mongoose.model("car", carSchema)