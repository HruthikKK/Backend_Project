// require('dotenv').config({path: './env})

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()

/*
import express from "express";
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB.URI}/${DB_NAME}`)
        
        app.on("error", (error) => {
            console.log("app is not able to communicate with DB");
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is running on ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR : ",error);
        throw error
    }
})()
*/

