const express = require('express');
const router = express.Router();

// CUSTOM IMPORTS
const { checkoutController, homeController, productDetailController } = require("../controller/checkout.controller.js");

// GET ROUTES
router.get('/home', homeController ); 
router.get('/checkout', checkoutController); 
router.get('/product-detail/:id', productDetailController); 



// POST ROUTES


module.exports = router;