import "dotenv/config";
import { login } from "../models/user-model.mjs";

const postLogin = async (req, res, next) => {
  try {
    // Use model to query SQL for user info (username/password)
    const user = await login(req.body);
    if (!user) {
      return res.status(401).redirect("/wrong"); // Goes to another page if wrong
    }

    // Check user level
    if (user.UserLevel === 2) {
      return res.redirect("/admin");
    } else if (user.UserLevel === 1) {
      return res.redirect("/catalog");
    }
  } catch (error) {
    next(error);
  }
};

export { postLogin };
