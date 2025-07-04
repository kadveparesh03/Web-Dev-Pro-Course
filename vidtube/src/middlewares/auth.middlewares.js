// import jwt from "jsonwebtoken";
// import {User} from "../models/user.model.js";
// import { ApiError } from "../utils/ApiError.js";
// import { asyncHandler } from "../utils/asynchandler.js";


// export const verifyJWT= asyncHandler(async(req,_,next)=>{
//     const token=req.cookies.accessToken || req.header
//     ("Authorization")?.replace("Bearer", "")

//     if(!token){
//         throw new ApiError(401, "Unautorised")
//     }
//     try {
//         const decodedToken= jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

//         const user = await User.findById(decodedToken?.id).
//         select("-password -refreshToken")

//         if(!user){
//             throw new ApiError(401, "Unautorised")
//         }

//         req.user=user

//         next()


//     } catch (error) {
//         throw new ApiError(401,error?.message || "Invalid access token")
//     }
// })


import jwt from "jsonwebtoken";

// JWT verification middleware
export const verifyJWT = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded; // Attach decoded user info to request
        next();
    } catch (err) {
        console.error("JWT verification failed:", err.message);
        return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
    }
};
