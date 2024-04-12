const Product = require("../models/productModel");

const getAllProducts = async (req, res) => {
  const { company } = req.query;
  const queryObject = {};

  if(company) {
    queryObject.company = company;
    console.log(queryObject);
  }
  const myData = await Product.find(queryObject);
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
