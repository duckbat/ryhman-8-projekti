import { promisePool } from "../utils/database.mjs";

const indexView = async (req, res, next) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM IceCream");
    res.render("pages/index", {
      title: "Main page",
      js: [],
      data: { iceCreams: rows },
    });
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).send("Error querying the database");
  }
};

const catalogView = async (req, res, next) => {
  try {
    const [rows] = await promisePool.query("SELECT * FROM IceCream");
    res.render("pages/catalog", {
      title: "Our menu",
      js: [],
      data: { iceCreams: rows },
    });
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).send("Error querying the database");
  }
};

const aboutView = (req, res) => {
  res.render("pages/about", {
    title: "About us",
    js: [],
    data: {},
  });
};

const cartView = (req, res) => {
  res.render("pages/cart", {
    title: "Cart page",
    js: [],
    data: {},
  });
};

const loginView = (req, res) => {
  res.render("pages/login", {
    title: "Login page",
    js: [],
    data: {},
  });
};

const ordersView = (req, res) => {
  res.render("pages/orders", {
    title: "Orders page",
    js: [],
    data: {},
  });
};

const wrongView = (req, res) => {
  res.render("pages/wrong", {
    title: "Wrong login page",
    js: [],
    data: {},
  });
};

// edit page for admin
const editView = (req, res) => {
  res.render("pages/edit", {
    title: "Edit page",
    js: [],
    data: {},
  });
};

// adding page for admin
const addView = (req, res) => {
  res.render("pages/add", {
    title: "Add page",
    js: [],
    data: {},
  });
};

export {
  indexView,
  catalogView,
  aboutView,
  cartView,
  loginView,
  ordersView,
  wrongView,
  editView,
  addView,
};
