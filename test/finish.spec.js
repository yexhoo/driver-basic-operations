const expect = require("chai").expect
const file = require("../src/file")
const driver = require("../src/driver")
const codes = require("../src/codes")

describe('Finish', () => {

    let testFile, resources = __dirname.concat("/resources/finish/");

    it('Ride was never started violation', () => {
        testFile = resources.concat('was-never-started-violation.txt')
        const operations = file.readFile(testFile)
        const output = driver.process(operations)

        const op1 = output[0]
        const op2 = output[1]
        const op3 = output[2]
        const op4 = output[3]

        expect(op1.onRide).is.equal(false)
        expect(op1.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op1.violations.length).is.equal(0)

        expect(op2.onRide).is.equal(true)
        expect(op1.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op1.violations.length).is.equal(0)

        expect(op3.onRide).is.equal(false)
        expect(op3.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op3.violations.length).is.equal(0)

        expect(op4.onRide).is.equal(false)
        expect(op4.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op4.violations.length).is.equal(1)
        expect(op4.violations[0]).is.equal(codes.RIDE_WAS_NEVER_STARTED)
    });
});