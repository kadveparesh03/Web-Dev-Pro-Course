// import { Router } from "express";
// import express from "express";

// import { registerUser } from "../controllers/user.controllers.js";
// const router = Router();

// import { upload } from "../middlewares/multer.middlewares.js";


// router.get("/register").post(
//     upload.fields([
//         {
//             name: "avatar",
//             maxCount: 1
//         }
//     ,{
//         name:"coverImage",
//         maxCount:1
//     }
//     ]),
//     registerUser
// );

// export default router;

import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

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

export default router;
