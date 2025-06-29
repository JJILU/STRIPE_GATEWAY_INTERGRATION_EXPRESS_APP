const express = require('express');
const router = express.Router();

// CUSTOM IMPORTS
const { checkoutController, homeController, productDetailController } = require("../controller/checkout.controller.js");

// GET ROUTES
router.get('/home', homeController ); 
router.get('/checkout', checkoutController); 


// POST ROUTES


module.exports = router;