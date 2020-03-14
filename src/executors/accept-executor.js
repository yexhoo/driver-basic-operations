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

        return accept(operation)
    }
}

const accept = (operation) => {

    const driver = util.copy(cache.DRIVERS.get(operation.driver))

    if (driver.status === codes.DRIVER_STATUS_BANNED) {
        driver.violations.push(codes.DRIVER_BANNED)
        return driver
    }

    if (operation.ride.status === codes.RIDE_START) {
        return acceptRide(operation, driver)
    }

    if (operation.ride.status === codes.RIDE_FINISHED) {
        return finishRide(operation, driver)
    }

}


const acceptRide = (operation, driver) => {

    if (driver.onRide) {
        driver.violations.push(codes.DRIVER_ON_RIDE)
        return driver
    }

    driver.onRide = true
    cache.DRIVERS.set(operation.driver, util.copy(driver))
    return driver
}

const finishRide = (operation, driver) => {
    driver.onRide = false
    cache.DRIVERS.set(operation.driver, util.copy(driver))
    return driver
}