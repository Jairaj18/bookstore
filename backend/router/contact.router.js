import express from "express";
import {contact} from "../controller/contact.controller.js"

const router = express.Router();

router.post("/contactform",contact);

export default router;