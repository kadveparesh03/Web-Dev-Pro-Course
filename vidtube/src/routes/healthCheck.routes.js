// // src/controllers/healthcheck.controller.js
// import { ApiResponse } from "../utils/apiresponse.js";
// import { asyncHandler } from "../utils/asynchandler.js";

// const healthCheck = asyncHandler(async (req, res) => {
//   return res
//     .status(200)
//     .json(new ApiResponse(200, "OK", "Health Check Passed"));
// });

// export { healthCheck };

// import express from "express";
// import { healthCheck } from "../controllers/healthcheck.controller.js";

// const router = express.Router();

// router.get("/").get(healthCheck);

// export default router;

import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controller.js";

const router = Router();

router.get("/", healthCheck);

export default router;


