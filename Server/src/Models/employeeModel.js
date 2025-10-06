
const mongoose = require('mongoose')

const emplyeeSchema = new mongoose.Schema({
    emp_id : String,
    empName : String,
    email : String,
    designation : String,
    dateOfJoining :Date,
})

const EmployeeModel =  mongoose.model('emloyee',emplyeeSchema)
module.exports = EmployeeModel

