/* eslint-disable linebreak-style */
/* eslint-disable quotes */
import express from "express";
import {fileURLToPath} from "url";
import path from "path";
import routes from "./src/routes/pageRoute.js";

const hostname = "127.0.0.1";
const app = express(); // create express app
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/public");

// add middlewares
app.use(express.static(path.join(__dirname, "public")));

// Use routes
app.use("/", routes);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
