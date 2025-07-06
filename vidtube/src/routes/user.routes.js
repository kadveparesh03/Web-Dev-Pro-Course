import { Router } from "express";
import { registerUser,
     logoutUser,
     loginUser,
     refreshAccessToken, 
     changeCurrentPassword,
     getCurrentUser,
     getUserChannelProfile,
     updateAccoutDetails,
     updateUserAvatar,
     updateUserCoverImage,
     getWatchHistory
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();


//unsecured routes




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


router.route("/login").post(loginUser)
router.route("/refresh-token").post(refreshAccessToken)

// Logout route protected with JWT middleware
router.post("/logout", verifyJWT, logoutUser);
router.route("/change-password").post(verifyJWT,changeCurrentPassword)
router.route("/current-user").get(verifyJWT,getCurrentUser)
router.route("/c/:username").get(verifyJWT,getUserChannelProfile)
router.route("/update-accout").patch(verifyJWT,updateAccoutDetails)
router.route("/avatar").patch(verifyJWT,upload.single("avatar"),updateUserAvatar)
router.route("/cover-image").patch(verifyJWT,upload.single("coverImage"),updateUserCoverImage)
router.route("/history").get(verifyJWT,getWatchHistory)

export default router;
