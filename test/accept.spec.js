const expect = require("chai").expect
const file = require("../src/file")
const driver = require("../src/driver")
const codes = require("../src/codes")

describe('Accept', () => {

    let testFile, resources = __dirname.concat("/resources/accept/");

    it('Accept driver', () => {
        testFile = resources.concat('accept.txt')
        const operations = file.readFile(testFile)
        const operationsOutput = driver.process(operations)

        const operation1 = operationsOutput[0]
        const operation2 = operationsOutput[1]

        expect(operation1.onRide).is.equal(false)
        expect(operation2.onRide).is.equal(true)
    });

    it('Accept without driver without violation', () => {
        testFile = resources.concat('accept-driver-without-violation.txt')
        const operations = file.readFile(testFile)
        const operationsOutput = driver.process(operations)

        const op1 = operationsOutput[0]
        const op2 = operationsOutput[1]

        expect(op1.violations[0]).is.equal(codes.DRIVER_DOES_NOT_EXIST)
        expect(op2.violations[0]).is.equal(codes.DRIVER_DOES_NOT_EXIST)
    });

    it('Accept driver on ride violation', () => {
        testFile = resources.concat('accept-driver-on-ride-violation.txt')
        const operations = file.readFile(testFile)
        const operationsOutput = driver.process(operations)

        const operation1 = operationsOutput[0]
        const operation2 = operationsOutput[1]
        const operation3 = operationsOutput[2]

        expect(operation1.onRide).is.equal(false)
        expect(operation2.onRide).is.equal(true)
        expect(operation3.onRide).is.equal(true)
        expect(operation3.violations[0]).is.equal(codes.DRIVER_ON_RIDE)
    });

    it('Accept finish ride', () => {
        testFile = resources.concat('accept-driver-finish.txt')
        const operations = file.readFile(testFile)
        const operationsOutput = driver.process(operations)

        const operation1 = operationsOutput[0]
        const operation2 = operationsOutput[1]
        const operation3 = operationsOutput[2]
        const operation4 = operationsOutput[3]

        expect(operation1.onRide).is.equal(false)
        expect(operation2.onRide).is.equal(true)
        expect(operation3.onRide).is.equal(true)
        expect(operation3.violations[0]).is.equal(codes.DRIVER_ON_RIDE)
        expect(operation4.onRide).is.equal(false)
    });

});