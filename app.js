const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {doctormodel} = require("./models/doctor")


const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://snehaip:sneha2020@cluster0.swl0hmq.mongodb.net/doctordb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/add",(req,res)=>{
    let input =req.body
    let doctor = new doctormodel(input)
    doctor.save()
    console.log(doctor)
    console.log(input)
    res.send({"status":"success"})
})

app.post("/view",(req,res)=>{
    doctormodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch().finally()
})

app.post("/search",(req,res)=>{
    let input=req.body
    doctormodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
        res.json("error")
    })
})

app.post("/delete",(req,res)=>{
    let input =req.body
    doctormodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    )
    .catch(
        (error)=>{
            res.json(
                {"status":"error"}
            )
        }
    )
})

app.listen(8080,()=>{
    console.log("server started")
})