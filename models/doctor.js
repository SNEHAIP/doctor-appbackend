const mongoose=require("mongoose")
const schema = mongoose.Schema
(
    {
        "doctorid":{type:String,required:true},
        "doctorname":{type:String,required:true},
        "specialization":{type:String,required:true},
        "mobno":{type:String,required:true},
        "email":{type:String,required:true},
        "address":{type:String,required:true}
    }
)
let doctormodel=mongoose.model("doctors",schema)
module.exports={doctormodel}