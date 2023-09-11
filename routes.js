const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');

// route home
route.get('/', homeController.home);

module.exports = route;
