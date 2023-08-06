import jwt from "jsonwebtoken";
import User from "../models/User.js";
export const authenticate = async (req, res, next) => {
  try {
    // console.log(req);

    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.secret);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("user  not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("unauthorized:no token provided");
    console.log(error);
  }
};
