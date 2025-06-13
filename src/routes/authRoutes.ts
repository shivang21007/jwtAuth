import express from 'express';
import { register, login, logout, deleteUser, getUser } from '../controllers/authController';
import { auth } from '../middleware/authMiddleware';

const router: express.Router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, getUser);
router.get('/logout', auth, logout);
router.delete('/delete', auth, deleteUser);

export default router;

