const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;
