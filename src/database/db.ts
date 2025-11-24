import mongoose from "mongoose"
import { config } from "../config/config";
const dbConnection= async ()=>{
    try {
        //mongoose listeners
        mongoose.connection.on("connected",()=>{
            console.log("Mongodb Connection Successfully");
         })
         mongoose.connection.on("error",(err)=>{
            console.log("Error in connecting to database",err)
         })

         //connecting with mongodb
         await mongoose.connect(config.mongodbURL as string);
         
    } catch (error) {
        console.error("Failed to connect with mongodb", error);
        process.exit(1);
    }
}

export default dbConnection;