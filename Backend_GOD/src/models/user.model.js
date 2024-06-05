import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
        // unique: true,
        // trim: true,
        // minlength: 3,
       
    },
    
    password: {
        type: String,
        required: true
        // trim: true,
        // minlength: 6,
        
    },
    fullname: {
        type: String,
        required: true
    },
    ProfilePic: {
        type: String, // cloudinary image url
        default: ""
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    // refreshtoken: {
    //     type: String
    // }
}, { timestamps: true });

const User=mongoose.model('User', userSchema); 

export default User;