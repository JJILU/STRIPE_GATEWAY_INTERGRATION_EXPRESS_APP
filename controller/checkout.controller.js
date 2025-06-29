const Product = require("../models/products.model.js")

exports.checkoutController = (req,res) => {

  res.render('checkout',{
    pageTitle: 'Omi\'s Shop | Checkout'
  });
};

exports.homeController = (req,res) => {
  res.render('home', {
    pageTitle: 'Omi\'s Shop | Home',
    products: Product
  });
};

exports.productDetailController = (req,res) => {
  const prodId = req.body.id;

  
  res.render('home', {
    pageTitle: 'Omi\'s Shop | Details',
    products: Product
  });
};