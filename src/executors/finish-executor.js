const cache = require("../cache")
const codes = require("../codes")
const util = require("../util")

exports.get = () => {

    return (operation) => {

        if (!cache.DRIVERS.has(operation.driver)) {
            operation.violations = []
            operation.violations.push(codes.DRIVER_DOES_NOT_EXIST)
            return operation
        }

        return finish(operation)
    }
}

const finish = (operation) => {

    const driver = util.copy(cache.DRIVERS.get(operation.driver))

    if (driver.status === codes.DRIVER_STATUS_BANNED) {
        driver.violations.push(codes.DRIVER_BANNED)
        return driver
    }

    if (!driver.onRide) {
        driver.violations.push(codes.RIDE_WAS_NEVER_STARTED)
        return driver
    }

    driver.onRide = false
    cache.DRIVERS.set(operation.driver, util.copy(driver))

    return driver
}