
import mongoose from "mongoose";
import validator from "validator";


const messageSchema = new mongoose.Schema ({
    name:{
        type: "string",
        requires: [true, "Name required!"],
        minLength:[3,"Name must contain atleast 3 characters!"],
    },
    email:{
        type: "string",
        requires: [true, "Email required!"],
        validate:[validator.isEmail,"please provide valid email!"]
    },
    subject:{
        type: "string",
        requires: [true, "Subject required!"],
        minLength:[5,"Subject must contain atleast 5 characters!"],
    },
    message:{
        type: "string",
        requires: [true, "Message required!"],
        minLength:[10,"Message must contain atleast 10 characters!"],
    },
});

export const Message =  mongoose.model ("Message", messageSchema)