const { default: mongoose } = require('mongoose')
const mongoos= require('mongoose')
mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("connection is setup successfully..")
}).catch((err)=>{
    console.log("connection error")
    console.log(err)
})

