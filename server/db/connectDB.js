const mongoose = require("mongoose");

const connectDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
    });
    console.log("✅ Database connection succeeded");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
};

module.exports = connectDB;