const express = require('express')
const driver = require("./driver")
const app = express();
const codes = require("./codes")

app.use(express.json());

app.use(function (err, req, res, next) {
  if (err instanceof SyntaxError && err.status === codes.BAD_REQUEST && "body" in err) {
    res.status(codes.BAD_REQUEST).json(error(codes.JSON_ERROR, err.toString()));
  } else next();
});

app.post('/validate', function (req, res) {

  if (!req.body.operations) {
    res.status(codes.BAD_REQUEST)
      .json(error(codes.OPERATIONS_REQUIRED));
  }

  try {
    res.send(driver.process(req.body.operations));
  }
  catch (err) {
    res.status(codes.BAD_REQUEST)
      .json(error(codes.JSON_ERROR, err.toString()));
  }

});

app.listen(codes.PORT, function () {
  console.log(codes.RUNNING_SERVER);
});

const error = (msg, detail) => {
  return { error: msg, detail: detail || "" }
}