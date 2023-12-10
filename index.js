import express from 'express';
import {fileURLToPath} from 'url';
import path from 'path';


const hostname = '127.0.0.1';
const app = express(); // create express app
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// add middlewares
app.use(express.static(path.join(__dirname, 'public')));

// start with main page
app.get('/', (req, res) => {
  console.log('Main page');
  res.render('/public/index');
});

// menu page
app.get('/menu', (req, res) => {
  console.log('Catalog page');
  res.sendFile(__dirname + '/public/pages/catalog/catalog.html');
});

// login page
app.get('/login/', (req, res) => {
  console.log('Login page');
  res.sendFile(__dirname + '/public/pages/login/login.html');
});

// profile page
app.get('/profile', (req, res) => {
  console.log('Profile page');
  res.sendFile(__dirname + '/public/pages/profile/profile.html');
});

// admins page
app.get('/admin', (req, res) => {
  console.log('Admins page');
  res.sendFile(__dirname + '/admin/admin.html');
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
