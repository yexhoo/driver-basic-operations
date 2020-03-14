const factory = require("./factory")
const cache = require("./cache")

exports.process = (operations) => {

    cache.DRIVERS.clear()
    const output = []
    for (let operation of operations) {
        output.push(factory.getExecutor(operation).call(this, operation))
    }

    return output
}