const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const myData = await Product.find({company: "apple"});
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "I am getAllProductsTesting" });
};

module.exports = { getAllProducts, getAllProductsTesting };
