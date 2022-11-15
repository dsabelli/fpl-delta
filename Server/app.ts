const express = require("express");
const { Client } = require("pg");
const cors = require("cors");
require("express-async-errors");

var app = express();

const client = new Client({
  user: "postgres",
  host: "fpl-delta.internal",
  database: "fpl-delta",
  password: "190aEQwqvS6L1FU",
  port: 5432,
});
client.connect((err: { stack: any }) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

app.use(cors());
app.use(express.static("build"));
app.use(express.json());

module.exports = app;
