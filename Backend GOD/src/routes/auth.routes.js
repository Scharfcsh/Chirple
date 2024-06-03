import express from "express";
import {Login, signup,Logout} from "../controllers/auth.controller.js";
const router= express.Router();


router.post('/login',Login);

router.post('/signup',signup);

router.post('/logout',Logout);

export default router;