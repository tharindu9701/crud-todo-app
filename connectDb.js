const mongoose = require("mongoose");
require("dotenv").config();
const connectionToDb = async () => {
    try {
        const connectDb = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Database connected")

    }catch (error){
        console.log("DB connecction failed")

    }
};

module.exports = connectionToDb;