const fs = require('fs');

exports.readFile = (filePath) => fs.readFileSync(filePath)
    .toString()
    .split("\n")
    .map((line) => JSON.parse(line))