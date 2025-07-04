import express from "express"
import { checkAuth, Login, Logout, SignUp } from "../controllers/userController.js"
import authenticateUser from '../middlewares/authMiddleware.js';
const router = express.Router()

router.post("/signup", SignUp)
router.post("/login", Login)
router.post("/logout", Logout)
router.get('/check-auth', authenticateUser, checkAuth);


export default router