import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();

const generateTokenandSetCookie=(userId, res)=>{
    const options = { expiresIn: '1h' };
    const token =jwt.sign({userId},process.env.JWT_SECRET,options);

    res.cookie("jwt",token,{
        maxAge: 1 * 24 * 60 * 60 *1000,
        httpOnly: true,
        secure: process.env.NODE_ENV!== 'development',
        sameSite:'strict', 
    });
};
export default generateTokenandSetCookie;