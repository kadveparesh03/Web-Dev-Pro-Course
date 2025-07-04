import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import healthcheckRouter from "./routes/healthcheck.routes.js";
import userRouter from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Enable CORS
app.use(
    cors({
        origin: process.env.CORS_ORIGIN, // e.g., "http://localhost:3000"
        credentials: true,
    })
);

// Middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/user", userRouter);

// Global error handler
app.use(errorHandler);

export { app };
