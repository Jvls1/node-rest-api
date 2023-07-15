import express from "express";
import userController from "./controller/userController";

const router = express.Router();

router.get("/user/:id", userController.getContent)
router.post("/user", userController.saveContent);

export default router;