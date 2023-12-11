/* eslint-disable linebreak-style */
/* eslint-disable quotes */

import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();


router.get("/", (req, res) => {
  console.log("Main page");
  res.render("index");
});

router.get("/catalog", (req, res) => {
  console.log("Catalog page");
  res.render("pages/catalog/catalog");
});

router.get("/login", (req, res) => {
  console.log("Login page");
  res.render("pages/login/login");
});

router.get("/profile", (req, res) => {
  console.log("Profile page");
  res.render("pages/profile/profile");
});

router.get("/orders", (req, res) => {
  console.log("Orders page");
  res.render("pages/orders/orders");
});

router.get("/admin", (req, res) => {
  console.log("Admins page");
  res.render("admin/admin");
});

export default router;
