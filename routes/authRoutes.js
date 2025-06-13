const express = require('express');
const router = express.Router();
const { register, login, logout, deleteUser, getUser } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, getUser);
router.get('/logout', auth, logout);
router.delete('/delete', auth, deleteUser);

module.exports = router;

