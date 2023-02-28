const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes/route");
const mongoose = require("mongoose");
const port = 5000;
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", route);
app.listen(port, () => console.log("Server is running on port:", port));

mongoose.connect(
    "mongodb://localhost:27017"
//   "mongodb+srv://pranavpremanand:march16th@cluster0.1njw5bf.mongodb.net/dashboard"
);
const connection = mongoose.connection;
connection
  .on("connected", () => console.log("Database is connected successfully!"))
  .on("error", (err) => console.log("Database connection failed", err));

module.exports = app;
