import express from "express";
import { register, schedule } from "../controllers/userController.js";
import { getData } from "../controllers/getData.js";
// import { giveInterview } from "../controllers/interviewController.js";
// import { authenticate } from "../middleware/authenticate.js";
const router = express.Router();
router.post("/register", register);
router.post("/schedule", schedule);
router.get("/getdata", getData);
// router.get("/getuser", getUser);
// router.get("/giveInterview", authenticate, giveInterview);

export default router;
