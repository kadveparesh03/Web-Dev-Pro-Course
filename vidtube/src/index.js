import dotenv from "dotenv"
import {app} from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./.env"
})

const port =  process.env.port ||  7000

connectDB()
.then(()=>{
    
app.listen(port,()=>{
    console.log(`Server is running pn ${port}`)
})
})
.catch((err)=>{
    console.log("Mongo DB connection Error",err)
})

