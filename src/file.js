const fs = require('fs');

exports.readFile = (filePath) => fs.readFileSync(filePath)
    .toString()
    .split("\n")
    .filter(line => this.isValidJson(line))
    .map((line) => JSON.parse(line))

exports.isValidJson = (line) => {
    try {
        var json = JSON.parse(line);
        return (typeof json === 'object');
    } catch (e) { return false; }
}