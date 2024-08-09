const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");

const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const { error, log } = require("console");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://emad:emad@cluster0.quna2.mongodb.net/")
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log("running on port 3000");
});
