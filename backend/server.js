const dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const userRoute = require("./routes/userRoute");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Routes Middleware
app.use("/api/users", userRoute);


// Routes
app.get("/", (req, res) => {
  res.send("Welcome!");
});

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
