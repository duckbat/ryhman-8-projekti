import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

const hostname = '127.0.0.1';
const app = express(); // create express app
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  console.log('Here');
  res.render('/public/index');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
