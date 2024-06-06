import express from "express";
import cors from "cors";
import {Login, signup,Logout} from "../controllers/auth.controller.js";
const router= express.Router();


router.post('/login',cors(), Login);

router.post('/signup',cors(), signup);

router.post('/logout',cors(), Logout);

export default router;