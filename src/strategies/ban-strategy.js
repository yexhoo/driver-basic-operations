const cache = require("../cache")
const codes = require("../codes")
const util = require("../util")

exports.get = () => {

    return (operation) => {

        const driver = util.copy(cache.DRIVERS.get(operation.driver))

        if (driver.onRide) {
            driver.violations.push(codes.DRIVER_ON_RIDE)
            return driver
        }

        if (driver.status === codes.DRIVER_STATUS_BANNED) {
            driver.violations.push(codes.DRIVER_ALREADY_BANNED)
            return driver
        }

        driver.status = codes.DRIVER_STATUS_BANNED
        cache.DRIVERS.set(operation.driver, util.copy(driver))

        return driver
    }
}