const Counter = require("../models/counter");

async function createEmpId() {
  const counter = await Counter.findOneAndUpdate(
    { name: "employee" }, 
    { $inc: { value: 1 } }, 
    { new: true, upsert: true }
  );
  return `emp_${counter.value}`;
}



module.exports = createEmpId