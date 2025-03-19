const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');
// Register route
router.post('/register', authController.register);

// Login route (if you have this)
router.post('/login', authController.login);

// Get a user by ID
router.get('/:id', authController.getUser);

// Update user details by ID
router.put('/:id', authController.updateUser);

// Delete user by ID
router.delete('/:id', authController.deleteUser);

module.exports = router;