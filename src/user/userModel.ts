import mongoose from "mongoose";
import { InterfaceOfUser } from "./userTypes";

const userSchema= new mongoose.Schema<InterfaceOfUser>({
    name:{
        type:String,
        required:[true, "Name is Required"],
        trim:true,
    },
    email:{
        type: String,
        required: [true, "Email is Required"],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password:{
        type:String,
        required: true,
        select: false,
        minlength: 8,
    }
},
{
    timestamps:true
}
)

export const userModel=mongoose.model<InterfaceOfUser>("User",userSchema);