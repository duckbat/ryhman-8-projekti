import express from "express";
import {
  indexView,
  catalogView,
  aboutView,
  cartView,
  loginView,
  ordersView,
  wrongView,
  editView,
  addView,
} from "../controllers/page-controller.mjs";

const pageRouter = express.Router();


// index page
pageRouter.get("/", indexView);

// catalog page
pageRouter.get("/catalog", catalogView);

// about page
pageRouter.get("/about", aboutView);

// cart page
pageRouter.get("/cart", cartView);

// login page
pageRouter.get("/login", loginView );

// orders page
pageRouter.get("/orders", ordersView);

// wrong login page
pageRouter.get("/wrong", wrongView);

// edit page
pageRouter.get("/edit", editView);

// add page
pageRouter.get("/add", addView);

export default pageRouter;
