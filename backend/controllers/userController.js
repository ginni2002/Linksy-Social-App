import bcrypt from "bcryptjs";
import { v2 as cloudinary } from "cloudinary";
import mongoose from "mongoose";
import User from "../model/userModel.js";
import genTokenAndSetCookie from "../utils/helpers/genTokenAndSetCookie.js";
import Post from "../model/postModel.js";

const getUserProfile = async (req, res) => {
  const { query } = req.params;
  try {
    let user;

    if (mongoose.Types.ObjectId.isValid(query)) {
      user = await User.findOne({ _id: query })
        .select("-password")
        .select("-updatedAt");
    } else {
      user = await User.findOne({ username: query })
        .select("-password")
        .select("-updatedAt");
    }

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in getUserProfile: ", err.message);
  }
};

const signupUser = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    if (newUser) {
      genTokenAndSetCookie(newUser._id, res);

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        bio: newUser.bio,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in signupUser: ", err.message);
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    if (user.isFrozen) {
      user.isFrozen = false;
      await user.save();
    }

    genTokenAndSetCookie(user._id, res);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      bio: user.bio,
      profilePic: user.profilePic,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in loginUser: ", err.message);
  }
};

const logoutUser = (req, res) => {
  try {
    res.cookie("jwtName1", "", { maxAge: 1 });
    res.status(200).json({ message: "User logged out successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in logoutUser: ", err.message);
  }
};

const followUnFollowUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userToModify = await User.findById(id);
    const currentUser = await User.findById(req.user._id); //req.user is added from middle "protectRoute"
    // console.log("id:", id, "type:", typeof id); //string
    // console.log("req.user._id:", req.user._id, "type:", typeof req.user._id); //object
    if (id === req.user._id.toString()) {
      return res
        .status(400)
        .json({ error: "You cannot follow/unfollow yourself" });
    }
    if (!userToModify || !currentUser) {
      return res.status(400).json({ error: "User not found" });
    }
    const isFollowingCheck = currentUser.following.includes(id);
    if (isFollowingCheck) {
      //unfollow -> Removing by pulling user Id from 'following' array of current_user.
      // And Removing by pulling current_user Id from 'followers' array of user.
      await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
      await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
      res.status(200).json({ message: "User unfollowed successfully" });
    } else {
      //follow -> Adding by pushing user Id in 'following' array of current_user.
      //And adding by pushing current_user Id in 'followers' array of user.
      await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
      await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
      res.status(200).json({ message: "User followed successfully" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in followUnFollowUser: ", err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email, username, password, bio } = req.body;
    let { profilePic } = req.body;
    const userId = req.user._id; //got from middleware
    // console.log("Value of userId while update: ", userId);

    let user = await User.findById(userId);
    // console.log("Value of user while update: ", user);

    if (!user) {
      return res.status(400).json({ error: "User not found" }); // this is returning
    }
    if (req.params.id !== userId.toString()) {
      return res
        .status(400)
        .json({ error: "You cannot update other user's profile." });
    }

    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }
    if (profilePic) {
      if (user.profilePic) {
        await cloudinary.uploader.destroy(
          user.profilePic.split("/").pop().split(".")[0]
        );
      }
      const uploadedResponse = await cloudinary.uploader.upload(profilePic);
      profilePic = uploadedResponse.secure_url;
    }
    user.name = name || user.name;
    user.email = email || user.email;
    user.username = username || user.username;
    user.profilePic = profilePic || user.profilePic;
    user.bio = bio || user.bio;

    user = await user.save();

    await Post.updateMany(
      { "replies.userId": userId },
      {
        $set: {
          "replies.$[reply].username": user.username,
          "replies.$[reply].userProfilePic": user.profilePic,
        },
      },
      { arrayFilters: [{ "reply.userId": userId }] }
    );

    user.password = null;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in updateUser: ", err.message);
  }
};

const getSuggestedUsers = async (req, res) => {
  try {
    const userId = req.user._id;

    const usersFollowedByYou = await User.findById(userId).select("following");

    const users = await User.aggregate([
      {
        $match: {
          _id: { $ne: userId },
        },
      },
      {
        $sample: { size: 10 },
      },
    ]);
    const filteredUsers = users.filter(
      (user) => !usersFollowedByYou.following.includes(user._id)
    );
    const suggestedUsers = filteredUsers.slice(0, 4);

    suggestedUsers.forEach((user) => (user.password = null));

    res.status(200).json(suggestedUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in suggestedUsers: ", err.message);
  }
};

const freezeAccount = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    user.isFrozen = true;
    await user.save();
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in freezeAccount: ", err.message);
  }
};

const searchUsers = async (req, res) => {
  const { q } = req.query;

  if (!q || q.length < 3) {
    return res
      .status(400)
      .json({ error: "Search query must be at least 3 characters long" });
  }

  try {
    const users = await User.find({
      username: { $regex: `^${q}`, $options: "i" },
    })
      .select("username profilePic")
      .limit(10);

    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in searchUsers: ", err.message);
  }
};

const getFollowers = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const followers = await User.find({ _id: { $in: user.followers } })
      .select("username profilePic")
      .limit(50); // Limiting to 50 for performance, adjust as needed

    res.status(200).json(followers);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in getFollowers: ", err.message);
  }
};

const getFollowing = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const following = await User.find({ _id: { $in: user.following } })
      .select("username profilePic")
      .limit(50); // Limiting to 50 for performance, adjust as needed

    res.status(200).json(following);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log("Error in getFollowing: ", err.message);
  }
};

export {
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
};
