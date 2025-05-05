const express = require('express');
const router = express.Router();
const { basicAuthHandler } = require('../controllers/basicAuthController');

router.get('/user', basicAuthHandler);

module.exports = router;