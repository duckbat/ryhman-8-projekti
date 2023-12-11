/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable max-len */
const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();
const {
  getAllIceCreams,
  createIceCream,
  updateIceCream,
  deleteIceCream,
} = require("../controllers/iceCreamController");

router.get("/catalog", async (req, res) => {
  try {
    const response = await axios.get("https://api.example.com/menu"); // add api url
    const menu = response.data;
    res.render("catalog", {menu});
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while fetching the menu");
  }
});

// Example routes
router.get("/", getAllIceCreams);
router.post("/", createIceCream);
router.put("/:id", updateIceCream);
router.delete("/:id", deleteIceCream);

module.exports = router;
