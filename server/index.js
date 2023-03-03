import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connectDB.js";

import userRouter  from "./Routes/user.routes.js";
import propertyRouter from "./Routes/property.routes.js";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/',(req, res) => {
    res.send({message:"Hello World"})
})

app.use("/api/v1/users",userRouter);
app.use("/api/v1/properties",propertyRouter);

const startServer =async()=>{
    try {
        //connect to database...
        connectDB(process.env.MONGODB_URL)
        
        app.listen(8080,()=>{
            console.log("Server has started in port 8080")
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();