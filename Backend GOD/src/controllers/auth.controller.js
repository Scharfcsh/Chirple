import User from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateTokenandSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
    // console.log("signup routes and controller are working fine")
    // res.send('signup routes and controller are working fine')
    // function ReloadLocation() {
        // window.location.reload();
    // }
    try {
        const { fullname, username, password, confirmpassword, gender } = req.body;
        console.log("req from body success", username);
        if (password !== confirmpassword) {
            return res.status(400).json({ eror: "password doesn't match" });
        }
        
        
        const user = await User.findOne({ username });
        
        
        if (user) {
            return res.status(400).json({ error: "Existing Username" });
        };
        
        
        //HAsh PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password, salt);

        console.log(" hashing check success success");

        //https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            // password,
            gender,
            ProfilePic: gender === "male" ? boyProfilePic : girlProfilePic
        });
        // console.log(" new user check success success");
        
        if (newUser) {
            //generateJWT token
            generateTokenandSetCookie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                ProfilePic: newUser.ProfilePic
            });
            // ReloadLocation();
        }
        else {
            res.status(400).json({error: "Invalid User Data"});
        }

    } catch (error) {
        console.log("Error In Signup controller", error)
        res.status(500).json({ error: "Internal Server error" })
    }
    // finally{
    //     // ReloadLocation();
    // }
}
export const Login = async (req, res) => {

    try {
        const {username, password}= req.body;
        const user = await User.findOne({username});
        console.log("user find success success");
        const isPasswordCorrect = await bcrypt.compare(password,user?.password ||"");
        console.log("isPasswordCorrect checked")
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid Username or Password"});
        }
        if(user){
        generateTokenandSetCookie(user._id,res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            ProfilePic: user.ProfilePic
        });
        }
        

    } catch (error) {
        console.log("Error In login controller", error.message)
        res.status(500).json({ error: "Internal Server error" })
    }

    console.log("Login routes and controller are working fine")
}


export const Logout = async (req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged OuT Sucessfully!"})
    } catch (error) {
        console.log("Error In logout controller", error.message)
        res.status(500).json({ error: "Internal Server error" })
    }
}