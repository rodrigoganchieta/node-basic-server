const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');

// Rotas da home
route.get('/', homeController.home);

module.exports = route;
