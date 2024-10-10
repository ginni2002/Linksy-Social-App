import express from "express";

import {
  signupUser,
  loginUser,
  logoutUser,
  followUnFollowUser,
  updateUser,
  getUserProfile,
  getSuggestedUsers,
  freezeAccount,
  searchUsers,
  getFollowers,
  getFollowing,
} from "../controllers/userController.js";
import protectRoute from "../middlewares/protectRoutes.js";

const router = express.Router();

router.get("/profile/:query", getUserProfile); //query - we will be getting with both username and userid
router.get("/suggested", protectRoute, getSuggestedUsers);
router.get("/search", protectRoute, searchUsers);
router.get("/:userId/followers", protectRoute, getFollowers);
router.get("/:userId/following", protectRoute, getFollowing);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.put("/follow/:id", protectRoute, followUnFollowUser);
router.put("/update/:id", protectRoute, updateUser);
router.put("/freeze", protectRoute, freezeAccount);

export default router;
