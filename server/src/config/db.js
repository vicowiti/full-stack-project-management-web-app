const mongoose = require("mongoose");

const connectDB = async (MONGO) => {
  try {
    const connection = await mongoose.connect(MONGO);
    console.log(
      `Connected to database at ${connection.connection.host}`.cyan.underline
        .bold
    );
  } catch (error) {
    console.log(error.message);
    console.log("HERE");
  }
};

module.exports = connectDB;
