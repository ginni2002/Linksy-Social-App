import express from "express";

import {
  signupUser,
  loginUser,
  logoutUser,
  followUnFollowUser,
  updateUser,
  getUserProfile,
  getSuggestedUsers,
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoutes.js";

const router = express.Router();

router.get("/profile/:query", getUserProfile); //query - we will be getting with both username and userid
router.get("/suggested", protectRoute, getSuggestedUsers);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/follow/:id", protectRoute, followUnFollowUser);
router.put("/update/:id", protectRoute, updateUser);

export default router;
