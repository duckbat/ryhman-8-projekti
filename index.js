import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';


const hostname = '127.0.0.1';
const app = express(); // create express app
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

// add middlewares
app.use(express.static(path.join(__dirname, 'public')));

// start with main page
app.get('/', (req, res) => {
  console.log('Main page');
  res.render('index');
});

// menu page
app.get('/catalog', (req, res) => {
  console.log('Catalog page');
  res.render('pages/catalog/catalog');
});

// login page
app.get('/login/', (req, res) => {
  console.log('Login page');
  res.render('pages/login/login');
});

// profile page
app.get('/profile', (req, res) => {
  console.log('Profile page');
  res.render('pages/profile/profile');
});

// orders page
app.get('/orders', (req, res) => {
  console.log('Orders page');
  res.render('pages/orders/orders');
});

// admins page
app.get('/admin', (req, res) => {
  console.log('Admins page');
  res.render('admin/admin');
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
