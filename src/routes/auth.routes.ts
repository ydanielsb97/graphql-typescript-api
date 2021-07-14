import {Router} from "express";
import * as controller from "../controllers/auth.controller";

const router = Router();

// prefix: /api/auth

router.post("/login", controller.logIn)
router.post("/register", controller.Register)


export default router;