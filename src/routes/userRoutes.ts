import { Router } from "express";
import UserController from "../controllers/userController";
import authenticateToken from "../middleware/auth";

const router = Router();

router.get("/users", authenticateToken, UserController.getAllUsers);
router.post("/users/signup", UserController.signUp);
router.get("/users/login", UserController.login);

export default router;
