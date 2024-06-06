
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./src/routes/auth.routes.js";
import messageRoutes from "./src/routes/message.routes.js";
import userRoutes from "./src/routes/user.routes.js";
import connectDB from "./src/db/connectDB.js";
import {server, app} from "./src/socket/socket.js";
import cors from 'cors';



const PORT = process.env.PORT || 3000;
// const app = express();

app.use(cors());
// Allow specific origin(s)
app.use(cors({
  origin: 'http://localhost:5173'
}));

dotenv.config();

app.use(cookieParser());
app.use(express.json());  //to parse the incoming request wiht json{from req.body}

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);





app.get('/isactive', (req, res)=>{
    res.send('Hello Developer! Your server is running')
})


server.listen(PORT, ()=>{

    // connectDB().then(()=> console.log("Connected to Mongodb from Index")).catch(()=> console.log(error));
    connectDB()
    console.log(`Server is running on port${PORT} , Http://localhost:${PORT}`);
})

