const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    const dbURI ="mongodb+srv://pauljoe:sbKb8klTseM00oBZ@cluster0.xnlb9.mongodb.net/";

    // Connect to the database
    await mongoose.connect(dbURI)

    console.log("Connected to the MongoDB Atlas database successfully!");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); 
  }
};

module.exports=connectToDatabase;
