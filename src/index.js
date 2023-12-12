/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import express from "express";
import {fileURLToPath} from "url";
import path from "path";
import routes from "./api/routes/pageRoute.js";

const hostname = "127.0.0.1";
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve static files
app.use(express.static(path.join(__dirname, "../public")));

// serve uploaded files


// ****  serve html with ejs template engine ****

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'));

// Middleware


// index page
app.get('', (req, res) => {
  res.render('pages/index', {
    title: 'Main page',
    js: [],
    data: {},
  });
});

// catalog page
app.get('/catalog', (req, res) => {
  res.render('pages/catalog', {
    title: 'Our menu',
    js: [],
    data: {},
  });
});

// about page
app.get('/about', (req, res) => {
  res.render('pages/about', {
    title: 'About us',
    js: [],
    data: {},
  });
});

// cart page
app.get('/cart', (req, res) => {
  res.render('pages/cart', {
    title: 'Cart page',
    js: [],
    data: {},
  });
});

// login page
app.get('/login', (req, res) => {
  res.render('pages/login', {
    title: 'Login page',
    js: [],
    data: {},
  });
});

// orders page
app.get('/orders', (req, res) => {
  res.render('pages/orders', {
    title: 'Orders page',
    js: [],
    data: {},
  });
});

// Routes
app.use("/", routes);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
