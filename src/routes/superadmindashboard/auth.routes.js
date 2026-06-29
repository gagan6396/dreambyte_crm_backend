const express = require('express');
const router = express.Router();
const { register, login, getProfile, logout } = require('../../controllers/superadmindashboard/auth.controller');
const auth = require('../../middleware/auth');

// Public
router.post('/register', register);
router.post('/login',    login);

// Protected
router.get('/profile',   auth('super_admin'), getProfile);
router.post('/logout',   auth('super_admin'), logout);

module.exports = router;