
const express = require('express')
const employeeRoutes = express.Router()

employeeRoutes.get('/employee',(req,res)=>{
    res.send("Good configuration")
})

employeeRoutes.post('/addemployee',(req,res)=>{
    res.send("Employee Added")
})

employeeRoutes.patch('/updateemployee',(req,res)=>{
    res.send("Employee updated")
})

employeeRoutes.delete('/deleteemployee',(req,res)=>{
    res.send("Employee Deleted")
})

module.exports = {employeeRoutes}
