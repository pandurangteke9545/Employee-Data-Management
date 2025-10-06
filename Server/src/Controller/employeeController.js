// const mongoose = require("mongoose");
const EmployeeModel = require("../models/employeeModel");
const createEmpId = require("../Services/employeeService");

async function createEmployee(empName,email,designation,dateOfJoining){
    const emp_id = await createEmpId()
    const emp = new EmployeeModel({
            emp_id,  
            empName,
            email,
            designation,
            dateOfJoining
            });
           await emp.save()
}




module.exports = {createEmployee}