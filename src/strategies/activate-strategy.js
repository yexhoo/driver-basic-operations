const cache = require("../cache")
const codes = require("../codes")
const util = require("../util")

exports.get = () => {

    return (operation) => {

        if (!cache.DRIVERS.has(operation.driver)) {

            operation.status = codes.DRIVER_STATUS_ACTIVATED
            operation.onRide = false
            operation.violations = []
            cache.DRIVERS.set(operation.driver, util.copy(operation))

            return operation
        }

        operation = util.copy(cache.DRIVERS.get(operation.driver))
        operation.violations.push(codes.DRIVER_ALREADY_CREATED)

        return operation
    }
}

