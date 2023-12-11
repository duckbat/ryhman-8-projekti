/* eslint-disable linebreak-style */
/* eslint-disable quotes */

import express from "express";
// eslint-disable-next-line new-cap
const router = express.Router();

// Main page
router.get("/", (req, res) => {
  console.log("Main page");
  res.render("index");
});

// Catalog page
router.get("/catalog", (req, res) => {
  console.log("Catalog page");
  res.render("pages/catalog/catalog");
});

// Login page
router.get("/login", (req, res) => {
  console.log("Login page");
  res.render("pages/login/login");
});

// Profile page
router.get("/profile", (req, res) => {
  console.log("Profile page");
  res.render("pages/profile/profile");
});

// Orders page
router.get("/orders", (req, res) => {
  console.log("Orders page");
  res.render("pages/orders/orders");
});

// Admins page
router.get("/admin", (req, res) => {
  console.log("Admins page");
  res.render("admin/admin");
});

export default router;
