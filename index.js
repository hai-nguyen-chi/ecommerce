const express = require("express");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middlewares/errorsHandler");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();

const authRoute = require("./routes/authRoute");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 4000;

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRoute);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
