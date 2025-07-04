// import { Router } from "express";
// import { registerUser,logoutUser } from "../controllers/user.controllers.js";
// import { upload } from "../middlewares/multer.middlewares.js";
// import { verifyJWT } from "jsonwebtoken";

// const router = Router();

// // Register route with multer for avatar & coverImage
// router.post(
//   "/register",
//   upload.fields([
//     { name: "avatar", maxCount: 1 },
//     { name: "coverImage", maxCount: 1 }
//   ]),
//   registerUser
// );

// // Dummy GET route (to test)
// router.get("/test", (req, res) => {
//   res.send("User route is working!");
// });


// router.route("/logout").post(verifyJWT,logoutUser)

// export default router;


import { Router } from "express";
import { registerUser, logoutUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// Register route with multer for avatar & coverImage
router.post(
    "/register",
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 }
    ]),
    registerUser
);

// Dummy GET route (to test)
router.get("/test", (req, res) => {
    res.send("User route is working!");
});

// Logout route protected with JWT middleware
router.post("/logout", verifyJWT, logoutUser);

export default router;
