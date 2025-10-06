
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

async function dbconnection(){
    try {
        const url = process.env.MONGO_URL
        await mongoose.connect(url);
        console.log("Database Connected")
    } catch (error) {
        console.log("error",error)
    }
}

module.exports = {dbconnection}