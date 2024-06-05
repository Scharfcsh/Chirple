
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
const MONGOURI= process.env.MONGO_DB_URI

const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);


        console.log(`Connected to MongoDB!!!`);

    }
    catch (error) {
        console.log("Connection Error in (/DB/index): ", error);
        process.exit(1);
    }
}

export default connectDB;
// 9nJwhU84gUfvzMzH
// IjZNSMqMb7SjrNqH