import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "../constants.js";

const app = express();


const DBConnection = async () => {

    try {
        const connectioInstant = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected || DB Host: ${connectioInstant.connection.host}`)

    } catch (error) {
        console.log("Error while connection DB", error)
        process.exit(1)
    }
}

export default DBConnection




