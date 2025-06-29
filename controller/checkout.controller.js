const Product = require("../models/products.model.js")

exports.checkoutController = (req,res) => {

  res.render('checkout',{
    pageTitle: 'Checkout'
  });
};

exports.homeController = (req,res) => {
  res.render('home', {
    pageTitle: 'Home',
    products: Product
  });
};

exports.productDetailController = (req,res) => {
  const prodId = req.body.id;

  
  res.render('home', {
    pageTitle: 'Product Details',
    products: Product
  });
};