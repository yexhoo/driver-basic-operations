const cache = require("../cache")
const codes = require("../codes")
const util = require("../util")

exports.get = () => {

    return (operation) => {

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
}