import path from 'path';
import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectDB from "./db/connectDB.js";
import {server, app} from "./socket/socket.js";

const PORT = process.env.PORT || 3000;
// const app = express();

const __dirname = path.resolve();

dotenv.config();

app.use(cookieParser());
app.use(express.json());  //to parse the incoming request wiht json{from req.body}

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


app.use(express.static(path.join(__dirname,"/chatAppUI/dist")));

// app.get('/', (req, res)=>{
//     res.send('Hello World!')
// })

app.get("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "chatAppUI", "dist", "index.html"));
})

server.listen(PORT, ()=>{

    // connectDB().then(()=> console.log("Connected to Mongodb from Index")).catch(()=> console.log(error));
    connectDB()
    console.log(`Server is running on port${PORT} , Http://localhost:${PORT}`);
})

