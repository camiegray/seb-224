import { Router } from "express";
import * as controllers from "../controllers/users.js";
import verifyToken from "../middleware/verify-token.js";

const router = Router();

router.get("/", verifyToken, controllers.getUsers);
router.get('/:userId', verifyToken, controllers.getUser);
router.post("/sign-up", controllers.signUp);
router.post("/sign-in", controllers.signIn);

export default router;
