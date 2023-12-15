import { promisePool } from "../utils/database.mjs";

const adminView = async (req, res, next) => {
  try {
    const [iceCreamRows] = await promisePool.query("SELECT * FROM IceCream");
    const [userRows] = await promisePool.query("SELECT * FROM Users");
    res.render("pages/admin", {
      title: "Main page",
      js: [],
      data: { iceCreams: iceCreamRows, users: userRows },
    });
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).send("Error querying the database");
  }
};

export {adminView};


