const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const cors = require('cors');
var os = require("os");
var hostname = os.hostname();

const apirouter = require('./router');
const port = process.env.PORT || 8080;

const app = express();
app.use(cors());

// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("Connected to %s", MONGODB_URL);
  console.log("App is running ... \n");
})
  .catch(err => {
    console.error("App starting error:", err.message);
    process.exit(1);
  });
mongoose.set('debug', process.env.MONGODB_DEBUG || false);
var db = mongoose.connection;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/test', (req, res) => {
  console.log('yuppp');
  res.send(JSON.stringify({ greeting: `Hello!` }));
});

app.use('/api', apirouter);

// throw 404 if URL not found
app.all("*", function (req, res) {
  return res.send("Page not found");
});

app.listen(port, () =>
  console.log(`Express server is running on ${hostname}:`, port)
);