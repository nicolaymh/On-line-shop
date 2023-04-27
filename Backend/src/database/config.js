import mongoose from "mongoose";

/**
 * This function initializes a connection to a MongoDB database using Mongoose.
 */
const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error initializing database");
  }
};

export default dbConnection;
