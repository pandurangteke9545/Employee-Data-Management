
const express = require('express')

const app = express()

const {employeeRoutes} = require('./src/routes/employeeRoutes')

app.get('/',(req,res)=>{
    res.send("app started")
})

app.use('/',employeeRoutes)

app.listen(5000,()=>{
    console.log("Server runnuing on port 5000")
})

