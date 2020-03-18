const cache = require("../cache")
const codes = require("../codes")

let strategy;

exports.setStrategy = (obj) => {
    strategy = obj
}

exports.execute = (operation) => {

    if (strategy.validations.includes("driver")) {

        if (!cache.DRIVERS.has(operation.driver)) {
            operation.violations = []
            operation.violations.push(codes.DRIVER_DOES_NOT_EXIST)
            return operation
        }

    }

    return strategy.executor.call(this, operation)
}