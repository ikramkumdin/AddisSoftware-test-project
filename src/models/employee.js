const { default: mongoose } = require('mongoose')

const mongoos= require('mongoose')

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true,
        min:11,
    }
})

const employee= new mongoose.model('employee',employeeSchema);
module.exports=employee;