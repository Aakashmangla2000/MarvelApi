import { Router } from "express";
import UserController from "../controllers/userController";
import authenticateToken from "../middleware/auth";
import ExternalController from "../controllers/externalController";

const router = Router();

router.get("/users", authenticateToken, UserController.getAllUsers);
router.post("/users/signup", UserController.signUp);
router.get("/users/login", UserController.login);
router.get("/marvel", ExternalController.getCharacters);

export default router;
