const express= require('express');
const app =express()
require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT || 4000

require("./DBconnection/conn")
const empoyeeRoute = require("./Routes/employeeRoute")
app.use(express.json())
app.use(cors())
app.use(empoyeeRoute)

app.listen(port,()=>{
    console.log(`Server running on port ${port} ....`)
})