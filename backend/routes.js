const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const adressesController = require('./controllers/adressesController');

// Altere a rota de GET para POST
router.post('/login', userController.login);

router.get('/adresses', adressesController.getAddresses);

module.exports = router;
