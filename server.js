const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./routes/route");
const port = 5000;
require('./config/mongooseConnection')
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", route);
app.listen(port, () => console.log("Server is running on port:", port));

module.exports = app;
