import { Router } from "express";
import { loginController, createUserController } from "../../controllers/auth";

const router = Router();

router.post("/register", createUserController);
router.post("/login", loginController);

export { router };
