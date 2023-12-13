import "dotenv/config";
import { login } from "../models/user-model.mjs";
import jwt from "jsonwebtoken";


const postLogin = async (req, res, next) => {
  try {
    // Use model to query SQL for user info (username/password)
    const user = await login(req.body);

    // Handle invalid credentials
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" }); // change to website display of wrong user
    }

    // Check user level
    if (user.UserLevel === 2) {
      // Redirect to additional page for user level 2
      return res.redirect('/admin');
    } else if (user.UserLevel === 1) {
      return res.redirect('/catalog');
    }

    // Return user information without creating a token
    res.json({ message: "Logged in", user });
  } catch (error) {
    // Pass other errors to the error-handling middleware
    next(error);
  }
};

const getMe = (req, res) => {
  console.log("getMe user", req.user);
  res.json(req.user);
};

export { postLogin, getMe };
