import express from "express";
import { adminView } from "../controllers/admin-controller.mjs";
import { body, param, validationResult } from "express-validator";

const adminRouter = express.Router();


// admins page
adminRouter.get("/admin", adminView);

export default adminRouter