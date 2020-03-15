const expect = require("chai").expect
const file = require("../src/file")
const driver = require("../src/driver")
const codes = require("../src/codes")

describe('Accept', () => {

    let testFile, resources = __dirname.concat("/resources/accept/");

    it('Accept', () => {
        testFile = resources.concat('accept.txt')
        const operations = file.readFile(testFile)
        const output = driver.process(operations)

        const op1 = output[0]
        const op2 = output[1]

        expect(op1.onRide).is.equal(false)
        expect(op2.onRide).is.equal(true)
    });

    it('Without driver without violation', () => {
        testFile = resources.concat('without-violation.txt')
        const operations = file.readFile(testFile)
        const output = driver.process(operations)

        const op1 = output[0]
        const op2 = output[1]

        expect(op1.violations[0]).is.equal(codes.DRIVER_DOES_NOT_EXIST)
        expect(op2.violations[0]).is.equal(codes.DRIVER_DOES_NOT_EXIST)
    });

    it('On ride violation', () => {
        testFile = resources.concat('on-ride-violation.txt')
        const operations = file.readFile(testFile)
        const output = driver.process(operations)

        const op1 = output[0]
        const op2 = output[1]
        const op3 = output[2]

        expect(op1.onRide).is.equal(false)
        expect(op2.onRide).is.equal(true)
        expect(op3.onRide).is.equal(true)
        expect(op3.violations[0]).is.equal(codes.DRIVER_ON_RIDE)
    });

    it('Finish ride', () => {
        testFile = resources.concat('finish-ride.txt')
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

        expect(op3.onRide).is.equal(true)
        expect(op3.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op3.violations.length).is.equal(1)
        expect(op3.violations[0]).is.equal(codes.DRIVER_ON_RIDE)

        expect(op4.onRide).is.equal(false)
        expect(op4.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op4.violations.length).is.equal(0)
    });

    it('Banned violation', () => {
        testFile = resources.concat('banned-violation.txt')
        const operations = file.readFile(testFile)
        const output = driver.process(operations)

        const op1 = output[0]
        const op2 = output[1]
        const op3 = output[2]
        const op4 = output[3]
        const op5 = output[4]
        const op6 = output[5]

        expect(op1.onRide).is.equal(false)
        expect(op1.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op1.violations.length).is.equal(0)

        expect(op2.onRide).is.equal(true)
        expect(op1.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op1.violations.length).is.equal(0)

        expect(op3.onRide).is.equal(true)
        expect(op3.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op3.violations.length).is.equal(1)
        expect(op3.violations[0]).is.equal(codes.DRIVER_ON_RIDE)

        expect(op4.onRide).is.equal(false)
        expect(op4.status).is.equal(codes.DRIVER_STATUS_ACTIVATED)
        expect(op4.violations.length).is.equal(0)

        expect(op5.onRide).is.equal(false)
        expect(op5.status).is.equal(codes.DRIVER_STATUS_BANNED)
        expect(op5.violations.length).is.equal(0)

        expect(op6.onRide).is.equal(false)
        expect(op6.status).is.equal(codes.DRIVER_STATUS_BANNED)
        expect(op6.violations.length).is.equal(1)
        expect(op6.violations[0]).is.equal(codes.DRIVER_BANNED)
    });
});