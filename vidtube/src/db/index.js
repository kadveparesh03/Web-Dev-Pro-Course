// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async()=> {
//     try {
//         const connectionInstance=await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`
// )

//         console.log(`/n MongoDB connected !  DB host: ${connectionInstance.connection.host}` )


//     } catch (error) {
//         console.log("mongo DB connection error",error)
//         process.exit(1)
//     }
// } 

// export default connectDB

// src/db/index.js
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );

    console.log(`\nMongoDB connected! DB host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("mongo DB connection error", error);
    process.exit(1);
  }
};

export default connectDB;
