const products = require('../models/productModel');

// Get all products
const getProducts = (req, res) => {
  res.json(products);
};

module.exports = { getProducts };
 
