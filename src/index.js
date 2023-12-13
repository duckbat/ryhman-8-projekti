import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import userRouter from "./routes/user-router.mjs";
import authRouter from "./routes/auth-router.mjs";
import { login } from "./models/user-model.mjs";
import { promisePool } from './utils/database.mjs';
/* import adminRouter from './routes/admin-router.mjs'; */
/* import iceRouter from "./routes/iceCreamRoute.mjs"; */

// Constants
const hostname = "127.0.0.1";
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// ****  serve html with ejs template engine ****
// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/"));

// auth endpoints
app.use("/api/auth", authRouter);

// user endpoints
app.use("/api/users", userRouter);




// Routes
// admins page
app.get('/admin', async (req, res) => {
  try {
    const [iceCreamRows] = await promisePool.query('SELECT * FROM IceCream');
    const [userRows] = await promisePool.query('SELECT * FROM Users');
    res.render('pages/admin', {
      title: 'Main page',
      js: [],
      data: { iceCreams: iceCreamRows, users: userRows },
    });
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).send('Error querying the database');
  }
});

// index page
app.get("/", async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM IceCream');
    res.render('pages/index', {
      title: 'Main page',
      js: [],
      data: { iceCreams: rows },
    });
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).send('Error querying the database');
  }
});

// catalog page
app.get('/catalog', async (req, res) => {
  try {
    const [rows] = await promisePool.query('SELECT * FROM IceCream');
    res.render('pages/catalog', {
      title: 'Our menu',
      js: [],
      data: { iceCreams: rows },
    });
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).send('Error querying the database');
  }
});

// about page
app.get("/about", (req, res) => {
  res.render("pages/about", {
    title: "About us",
    js: [],
    data: {},
  });
});

// cart page
app.get("/cart", (req, res) => {
  res.render("pages/cart", {
    title: "Cart page",
    js: [],
    data: {},
  });
});

// login page
app.get("/login", (req, res) => {
  res.render("pages/login", {
    title: "Login page",
    js: [],
    data: {},
  });
});

// orders page
app.get("/orders", (req, res) => {
  res.render("pages/orders", {
    title: "Orders page",
    js: [],
    data: {},
  });
});


// admin endpoints
/* app.use('/admin', adminRouter); */


// Login functions
app.post('/api/auth/login', async (req, res) => {
  const userCreds = {
    username: req.body.username,
    password: req.body.password,
  };

  try {
    const user = await login(userCreds);

    if (user) {
      // Successful login
      res.send('Login successful');
    } else {
      // Failed login
      res.send('Invalid credentials');
    }
  } catch (error) {
    // Handle other errors
    res.send('An error occurred');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
