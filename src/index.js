import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import authRouter from "./routes/auth-router.mjs";
import pageRouter from "./routes/page-router.mjs";
import adminRouter from "./routes/admin-router.mjs";
import iceCreamRoutes from "./routes/ice-cream-router.mjs";
import { login } from "./models/user-model.mjs";
import { promisePool } from './utils/database.mjs';


// Constants
const hostname = "127.0.0.1";
const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/"));


app.use('/api/iceCream', iceCreamRoutes);
app.use("/api/auth", authRouter);
app.use("/", pageRouter); //page router
app.use("/", adminRouter); //admin router



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
