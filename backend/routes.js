const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// Altere a rota de GET para POST
router.post('/login', userController.login);

module.exports = router;
