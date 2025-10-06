
const express = require('express')
const employeeRoutes = express.Router()
const EmployeeModel = require('../models/employeeModel')
const { createEmployee } = require('../Controller/employeeController')

employeeRoutes.get('/getemployee',async (req,res)=>{

    try {
        const empdata = await EmployeeModel.find();
        res.status(200).json({data : empdata , message:"Employee data"})

    } catch (error) {
        res.status(500).json({message:error})
    }   
})


employeeRoutes.get('/getemployee/:emp_id',async (req,res)=>{

    try {
        const empdata = await EmployeeModel.findOne({emp_id : req.params.emp_id});
        res.status(200).json({data : empdata , message:"Employee data"})

    } catch (error) {
        res.status(500).json({message:error})
    }   
})

employeeRoutes.post('/addemployee',async(req,res)=>{
    try {
        console.log(req.body)
        const {empName,email,designation , dateOfJoining }=req.body; 
        if(!empName || !email || !designation || !dateOfJoining){
            res.status(404).json({message:"Require Employee Name ,email , Designation and Date Of Joining"})
        }
        await createEmployee(empName,email,designation,dateOfJoining)

    res.status(201).json({message:"Employee created"})

    } catch (error) {
        console.log("error",error)
        res.status(500).json({error:error})
    }
    
})


employeeRoutes.delete('/deleteemployee/:emp_id',async (req,res)=>{

    const {emp_id} = req.params
     console.log("This is the employeeid",emp_id);
      try {
        await EmployeeModel.deleteOne({emp_id});
         res.status(200).json({message:`${emp_id} removed from record` })
    
        } catch (error) {

            res.status(400).json({message:error})

        }
})


employeeRoutes.patch('/updateemployee/:emp_id', async (req, res) => {
  const { emp_id } = req.params;
  const { email,designation, dateOfJoining } = req.body;
  try {
    const result = await EmployeeModel.updateOne(
      { emp_id }, 
      { $set: { email,designation, dateOfJoining } } 
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json({ message: "Employee updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
module.exports = employeeRoutes
