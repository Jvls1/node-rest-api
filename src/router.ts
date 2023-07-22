import express from "express";
import userController from "./controller/userController";

const router = express.Router();

router.post("/user", userController.createContent);
router.get("/user/:id", userController.readContent);
router.put("/user/:id", userController.updateContent);
router.delete("/user/:id", userController.deleteContent);

export default router;