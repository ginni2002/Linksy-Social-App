import jwt from "jsonwebtoken";

const genTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });

  res.cookie("jwtName1", token, {
    httpOnly: true,
    maxAge: 10 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
  });

  return token;
};

export default genTokenAndSetCookie;
