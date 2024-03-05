const { mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to Mongo");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
