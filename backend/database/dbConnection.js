import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to database")
    }).catch((err)=>{
        console.log("some err accured while connecting to datbase:",err)
    });
};