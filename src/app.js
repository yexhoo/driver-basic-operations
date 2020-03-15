const express = require('express');
const driver = require("./driver")
const app = express();

app.use(express.json());
app.post('/validate', function (req, res) {
  res.send(driver.process(req.body.operations));
});

app.listen(3000, function () {
  console.log('Driver basic operations is running on port 3000');
});