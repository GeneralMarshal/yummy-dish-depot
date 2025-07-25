import express from "express";
import { signupUser, loginUser, getMe } from "../controllers/userController"
import protect from "../middleware/authMiddleware";

export const userRouter = express.Router()

userRouter.post("/signup", signupUser )
userRouter.post("/login", loginUser )
userRouter.get("/me", protect, getMe)
