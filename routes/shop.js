const path = require('path');
const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

const adminData = require('./admin');

router.get('/', productsController.getProducts);

module.exports = router;