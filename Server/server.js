
const express = require('express')
const app = express()
const employeeRoutes = require('./src/routes/employeeRoutes')
const {dbconnection} = require('./db');
const cors = require('cors')

app.use(cors({
  origin: '*'
}))

app.get('/',(req,res)=>{
    res.send("app started")
})
app.use(express.json())
app.use('/',employeeRoutes)

app.listen(5000, async () => {
  await dbconnection(); 
  console.log("Server running on port 5000");
});

