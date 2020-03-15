const express = require('express');
const driver = require("./driver")
const app = express();

app.use(express.json());
app.post('/', function (req, res) {
  res.send( driver.process(req.body.operations) );
});

app.listen(3000, function () {
  console.log('Driver basic operations on port 3000');
});