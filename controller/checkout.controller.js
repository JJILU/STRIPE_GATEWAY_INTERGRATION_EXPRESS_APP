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
  const prodId = req.params.id;
  console.log(prodId);

  getProductById = {};

  Product.forEach(product => {
    if (prodId == product.id) {
      getProductById = product;
    }
  });
  console.log(getProductById);
  res.render('product_details', {
    pageTitle: `Omi\'s Shop | ${getProductById.name}`,
    product: getProductById 
  });
};