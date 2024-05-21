import express from 'express';
const router = express.Router();
import { registerUser, authUser } from '../controllers/authController.js';

// Ro'yxatdan o'tish
router.post('/register', registerUser);

// Tizimga kirish
router.post('/login', authUser);

export default router;
