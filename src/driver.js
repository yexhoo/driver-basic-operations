const factory = require("./factory")
const cache = require("./cache")
const context = require("./strategies/context")

exports.process = (operations) => {

    cache.DRIVERS.clear()
    const output = []

    for (let operation of operations) {
        context.setStrategy(factory.getStrategy(operation))
        output.push(context.execute(operation))
    }

    return output
}