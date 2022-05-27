const express =require("express")
const employee=require("./../models/employee")
const  cors = require('cors');
const { application } = require("express");
const router= express.Router();

application.use(cors())
router.post("/employee",async(req,res)=>{
    const data=new employee(req.body)
    const result=await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message:"employee not regestered "
        })

    }
    else{
        res.json({
            status:"SUCCESS",
            message:"employee register successfully",
            data:result
        })


    }
})
// get records
router.get("/employee",async(req,res)=>{
    try{
        const result=await employee.find()
       
    if(!result){
        res.json({
            status:"FAILED",
            message:"Record Not Found"
        })

    }
    else{
        res.json({
            status:"SUCCESS",
            message:"Record Found",
            data:result
        })


    }

    }
    catch(e){
        console.log(e)
    }

})
// get single records
router.get("/employee/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await employee.findById(_id);
       
    if(!result){
        res.json({
            status:"FAILED",
            message:"Record Not Found on this id"
        })

    }
    else{
        res.json({
            status:"SUCCESS",
            message:"Record Found",
            data:result
        })


    }

    }
    catch(e){
        console.log(e)
    }
    
})
//update record
router.put("/employee/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await employee.findByIdAndUpdate(_id,req.body,{new:true});
       
    if(!result){
        res.json({
            status:"FAILED",
            message:"Record is not updated"
        })

    }
    else{
        res.json({
            status:"SUCCESS",
            message:"Record Updated Succesfully",
            data:result
        })


    }

    }
    catch(e){
        console.log(e)
    }
    
})
    


//delete record

router.delete("/employee/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const result=await employee.findByIdAndDelete(_id);
       
    if(!result){
        res.json({
            status:"SUCCESS",
            message:"Record Deleted Succesfully"
        })

    }
    else{
        res.json({
            status:"SUCCES",
            message:"Record is not Deleted"
        })


    }

    }
    catch(e){
        console.log(e)
    }
    
})
module.exports=router;