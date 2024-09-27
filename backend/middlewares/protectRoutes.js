import User from "../model/userModel.js";
import jwt from "jsonwebtoken";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwtName1;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");
    req.user = user; // Giving user details to req body object. So that next route can access those details.
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("Error in protectRoute middleware: ", err.message);
  }
};

export default protectRoute;
