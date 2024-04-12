const connectDB = require('./db/connect');
const Product = require('./models/productModel');
require('dotenv').config();

const ProductJson = require('./products.json');

const start = async() => {
    try {
        await connectDB(process.env.MONGODB_URI)
        await Product.create(ProductJson);
        console.log("Data added successfully");
    } catch (error) {
        console.log(error);
    }
}

start();