import fs from 'fs/promises';
import path from "path";
import express from "express";
import {fileURLToPath} from "url";
import userRouter from './routes/user-router.mjs';
import authRouter from './routes/auth-router.mjs';
/* import adminRouter from './routes/admin-router.mjs'; */
/* import iceRouter from "./routes/iceCreamRoute.mjs"; */

// Constants
const hostname = "127.0.0.1";
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "../public")));

// ****  serve html with ejs template engine ****
// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views/'));


// auth endpoints
app.use('/api/auth', authRouter);

// user endpoints
app.use('/api/users', userRouter);

// iceCream endpoints
// app.use('/api/media', iceRouter);


// routes

// admin endpoints
/* app.use('/admin', adminRouter); */

// pages endpoints
// index page
app.get('/', async (req, res) => {
  try {
    const iceCreamData = await readJsonFile('./src/data/icecream.json'); // Adjust the path if necessary
    res.render('pages/index', {
      title: 'Main page',
      js: [],
      data: { iceCreams: iceCreamData },
    });
  } catch (error) {
    console.error('Error reading ice cream data:', error);
    res.status(500).send('Error reading ice cream data');
  }
});

// catalog page
app.get('/catalog', async (req, res) => {
  try {
    const iceCreamData = await readJsonFile('./src/data/icecream.json'); // Adjust the path if necessary
    res.render('pages/catalog', {
      title: 'Our menu',
      js: [],
      data: { iceCreams: iceCreamData },
    });
  } catch (error) {
    console.error('Error reading ice cream data:', error);
    res.status(500).send('Error reading ice cream data');
  }
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


// Function to read data from JSON files
async function readJsonFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading JSON file:', error.message);
    return { error: 'Error reading JSON file' };
  }
}

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
