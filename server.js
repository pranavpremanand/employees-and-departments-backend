const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes/route");
const mongoose = require("mongoose");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose.connect(
  "mongodb://localhost:27017");
  const connection = mongoose.connection;
  connection
  .on("connected", () => console.log("Database is connected successfully!"))
  .on("error", (err) => console.log("Database connection failed", err));
app.use("/", route);
  app.listen(port, () => console.log("Server is running on port:", port));
  
module.exports = app;
