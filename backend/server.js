const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorhandler = require("./middleWare/errorhandler");
const cookieParser = require("cookie-parser");

mongoose.set("strictQuery", false);

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Routes Middleware
app.use("/api/users", userRoute);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome!");
});

// Error Middleware
app.use(errorhandler);

// connect to DB and start server
const port = process.env.PORT || 8087;

mongoose
  .connect(process.env.MONGO_STRING)
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
