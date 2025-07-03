// import express  from "express"
// import cors from "cors"


// const app = express()

// app.use(
//     cors({
//         origin: process.env.CORS_ORIGIN,
//         credentials:true
//     }
//     )
// )

// // common middleware


// app.use(express.json ({limit:"16kb"}))
// app.use(express.urlencoded({ extended: true, limit:"16kb"}))
// app.use(express.static("public"))

// // import routes
// // import healthcheckRouter from "./routes/healthcheck.routes.js"
// import { healthCheck } from '../controllers/healthcheck.controller.js';
// import { healthCheck } from './controllers/healthcheck.controller.js';



// //routes

// app.use("/api/v1/healthcheck", healthcheckRouter)

// export{ app }


import express from "express";
import cors from "cors";
import healthcheckRouter from "./routes/healthCheck.routes.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// routes
app.use("/api/v1/healthcheck", healthcheckRouter);


export { app };
